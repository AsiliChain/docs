---
id: how-the-committed-purchase-order-model-works
title: 7.7 How the Committed Purchase Order Model Works
sidebar_position: 8.7
---

The committed purchase order is an on-chain instrument - a cryptographically signed, enforceable commitment between a buyer and a cooperative - that converts a BatchToken or GrowingCropToken into its highest-value collateral form: the WarehouseReceiptToken.

Here is the complete flow, step by step.

## Step 1: Buyer commits to a purchase

A European roaster, importer, or sustainability-focused buyer logs into the AsiliChain buyer portal. They can search available and upcoming batches by cooperative, region, variety, grade, harvest season, and EUDR compliance status. For each batch or pre-harvest crop they are interested in, they submit an on-chain purchase commitment specifying the quantity in kilograms, the agreed price per kilogram in USDC, the delivery window, and the quality grade they are committing to accept.

This commitment is signed with the buyer's wallet and recorded on Mantle as a `PurchaseOrder` struct linked to the relevant `BatchToken` or `GrowingCropToken`.

```solidity
struct PurchaseOrder {
    uint256 tokenId;          // BatchToken or GrowingCropToken ID
    address buyer;            // Buyer's wallet (KYC-gated on Mantle)
    uint256 quantityKg;       // Committed volume
    uint256 pricePerKgUsdc;   // Agreed price in USDC (6 decimals)
    uint256 deliveryDeadline; // Unix timestamp
    bytes32 gradeCommitment;  // Hash of agreed quality specification
    bool    active;           // Cancelled by mutual consent only
}
```

The buyer does not pay at this point. The commitment is a signed obligation, not an escrow. Payment triggers only on the `EXPORTED` event.

## Step 2: The WarehouseReceiptToken is minted

When a `PurchaseOrder` is linked to a `BatchToken` or `GrowingCropToken`, the protocol automatically upgrades that token to a `WarehouseReceiptToken`. This is not a new token - it is the same underlying asset with an additional field: a reference to the active `PurchaseOrder` and the buyer's wallet address.

The `WarehouseReceiptToken` represents the highest LTV tier in the AsiliChain collateral spectrum at 75 to 80 percent, compared to 60 to 70 percent for an uncommitted `BatchToken`. The reason is straightforward: a batch with a committed buyer is closer to cash than a batch without one. The `LendingVault` on Mantle reads the `PurchaseOrder` reference and applies the elevated LTV automatically.

This means the moment a European buyer commits to purchasing a cooperative's harvest, every farmer whose batch is part of that commitment can immediately access a larger loan against their share of the committed volume. The buyer's commitment is what unlocks the capital, without the buyer advancing any cash.

## Step 3: The cooperative fulfills the order

The cooperative processes the coffee through the standard `TraceLog` stages: `HARVESTED`, `WET_MILL`, `DRY_MILL`, `GRADED`, `EXPORTED`. Each stage is written to Hedera HCS. The buyer can monitor progress in real time through the buyer portal - not through email updates from an exporter, but directly from the on-chain record.

When the batch reaches `GRADED`, the full EUDR Due Diligence Statement is auto-generated from Mantle data and pinned to IPFS. The buyer's compliance team can review and approve it before the shipment moves, eliminating documentation surprises at the port.

## Step 4: Settlement on EXPORTED

When `TraceLog` records the `EXPORTED` event, three things happen simultaneously in the same transaction:

1. The `LendingVault` deducts outstanding loan principal and interest from the cooperative's payment allocation and releases the collateral token.
2. The buyer's committed USDC is transferred from their wallet to the cooperative's settlement wallet on Mantle.
3. The farmer's share - net of the cooperative's operating margin, loan repayment, and any protocol fee - is routed via Kotani Pay to their MTN Mobile Money account within 60 seconds.

No invoice. No wire transfer delay. No intermediary holding funds between buyer payment and farmer receipt. The payment chain is encoded in the contract and executes atomically.

```text
EXPORTED event fires
        |
        +--> LendingVault: deduct loan repayment from cooperative allocation
        |
        +--> Buyer USDC transferred to cooperative settlement wallet (Mantle)
        |
        +--> Net farmer share: cooperative wallet (Mantle)
        |         |
        |         +--> Kotani Pay API: cUSD -> MTN MoMo (Celo)
        |                   Farmer notified within 60 seconds
        |
        +--> Hedera HCS: SETTLED event recorded
        |
        +--> CreditScore.sol: +50 points for on-time delivery
```

## Step 5: Dispute resolution

If the delivered batch does not meet the agreed grade specification, the buyer can raise a quality dispute within a defined window (configurable, default 14 days after `EXPORTED`). The dispute mechanism involves the cooperative agent's original grade assessment on-chain, an optional third-party re-inspection whose result is also written on-chain, and a resolution pathway governed by the cooperative's `COOP_ROLE` and the buyer's signed agreement.

Disputed amounts are held in escrow in the `LendingVault` until resolution. Undisputed amounts release immediately. This means a partial grade dispute does not hold the entire payment - only the contested portion.