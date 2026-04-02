---
id: mfi-and-impact-investors
title: 8.1 For MFI Lenders and Impact Investors
sidebar_position: 1
---

What makes AsiliChain borrowers different from conventional agricultural microfinance clients

Conventional agricultural microfinance in Uganda and East Africa suffers from three underwriting problems: borrowers have no verifiable credit history, collateral is difficult to value and harder to liquidate, and loan repayment depends on a harvest delivery that the lender cannot monitor. AsiliChain solves all three.

Every farmer registered in FarmerRegistry.sol has a GPS-verified farm boundary, a tree count, a variety classification, and a crop stage assessment from a cooperative agent who has physically visited the farm. This is not self-reported data - it is co-operative-verified data written to an immutable ledger. The Chainlink price feed gives the LendingVault a real-time valuation of that farm's standing crop. The LTV caps ensure that no loan exceeds what the worst-case liquidation value of the crop can cover. The cooperative co-signature requirement on large loans adds a local underwriter with ground-truth knowledge that no oracle can substitute for.

Repayment is the most structurally important feature for lenders. When the cooperative logs a batch as EXPORTED, the LendingVault automatically deducts principal and interest from the cooperative's payment allocation before the farmer receives the balance. The farmer never manually repays. The cooperative never holds funds that should go to the lender. The auto-repayment mechanism is coded in the contract, auditable by the MFI at any time, and independent of the farmer's willingness or ability to initiate a payment.

| Lender Concern | How AsiliChain Addresses It |
| --- | --- |
| Collateral quality | GPS-verified farm asset + Chainlink real-time price feed. LTV capped at verified liquidation value, not self-reported estimates. |
| Borrower credit history | On-chain CreditScore.sol. Starts at 500, updated on every repayment and default. Portable, immutable, auditable by any lender. |
| Repayment risk | Auto-repayment on EXPORTED event. Deducted before farmer receives balance. No manual repayment required. |
| Monitoring during loan | Crop stage updates from cooperative agents recorded on-chain. Chainlink weather feed flags drought risk and freezes new lending. |
| Regulatory / AML compliance | All borrowers registered via UCDA-verified cooperative membership. KYB conducted at cooperative level. Mantle TaaS KYC-gated wallets for MFI partners. |
| Liquidity pool terms | USDC-denominated. MFI deposits into LendingVault liquidity pool. Interest rate spread disclosed and governance-controlled. Pool auditable on Mantle. |
| Exit and liquidation | On cooperative loan default: BatchToken or GrowingCropToken transferred to lender. Cooperative co-signature requirement means cooperative is jointly accountable. |

Figure 11: MFI lender concerns mapped to AsiliChain mechanisms
