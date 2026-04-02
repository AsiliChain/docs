---
id: two-leg-settlement-design
title: 4.2 The Two-Leg Settlement Design
sidebar_position: 2
---

Loan disbursement uses a two-leg approach. Leg One: the LendingVault on Mantle approves the loan in USDC and transfers it to a designated cooperative settlement wallet on Mantle. This is the institutional settlement event that is recorded on Hedera HCS and is auditable by the MFI. Leg Two: the cooperative's backend service, triggered by the Mantle settlement event, calls Kotani Pay's API on Celo, converting the equivalent amount from the cooperative's Celo cUSD reserve to MTN Mobile Money for the farmer. The cooperative manages a float of cUSD on Celo that is periodically replenished from its Mantle USDC balance via a Chainlink CCIP transfer.

```mermaid
flowchart TB
  a1[1. Farmer requests loan via *384# USSD] --> a2[2. BatchToken GRADED already mirrored to Mantle via CCIP\nLendingVault reads Chainlink price feed\nLTV calculated -> loan approved in USDC]

  subgraph Leg1[LEG 1 - Institutional settlement]
    a2 --> a3[3. LendingVault Mantle transfers USDC to Cooperative Settlement Wallet Mantle]
    a3 --> a4[Event written to Hedera HCS LOAN_ISSUED\nMFI portal shows disbursement confirmed]
  end

  subgraph Leg2[LEG 2 - Farmer payout]
    a4 --> a5[4. Next.js API detects LOAN_ISSUED on Mantle\nTriggers cooperative backend service]
    a5 --> a6[5. Cooperative cUSD float Celo -> Kotani Pay API\nKotani Pay converts cUSD -> UGX -> MTN Mobile Money]
    a6 --> a7[Farmer receives MoMo notification within 60 seconds]
    a7 --> a8[6. Cooperative float replenishment periodic\nUSDC Mantle -> CCIP -> Celo -> cUSD via Mento DEX]
  end

  a8 --> a9[AUTO-REPAYMENT on EXPORTED\nTraceLog.sol emits EXPORTED\nLendingVault deducts principal + interest\nBatchToken released -> CreditScore updated]
```

Figure 6: Revised two-leg loan disbursement flow resolving the USDC-to-MoMo gap
