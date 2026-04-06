---
id: architecture-overview
title: 3.1 Architecture Overview
sidebar_position: 1
---

AsiliChain uses three chains with distinct, non-overlapping responsibilities. Celo handles all farmer-facing interactions: USSD, token minting, and mobile money settlement. Mantle handles all institutional operations: the LendingVault, credit scoring, EUDR DDS generation, and USDC settlement with MFI partners. Hedera HCS is the independent, append-only audit log that neither chain can modify and that both chains write to - the single source of truth for regulators and European buyers.

```mermaid
flowchart LR
        subgraph Celo[Farmer Layer - Celo]
                c1[USSD *384# feature phones]
                c2[GrowingCropToken minting]
                c3[BatchToken minting]
                c4[cUSD -> Kotani Pay -> MTN MoMo]
                c5[FarmerRegistry.sol]
        end

        subgraph Mantle[Compliance Layer - Mantle]
                m1[LendingVault.sol UUPS proxy]
                m2[CreditScore.sol UUPS proxy]
                m3[EUDR DDS generation]
                m4[USDC settlement with MFIs]
                m5[Mantle TaaS / KYC-gated wallets]
        end

        c3 -- Chainlink CCIP on GRADED event --> m1
        c5 --> h1
        m1 --> h1
        m2 --> h1
        m3 --> h1

        h1[(HEDERA HCS\nImmutable Audit Log)]
```

Figure 3: AsiliChain three-chain architecture - responsibilities and CCIP bridge point
