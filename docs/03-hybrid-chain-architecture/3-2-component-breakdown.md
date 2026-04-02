---
id: component-breakdown
title: 3.2 Component Breakdown
sidebar_position: 2
---

| Layer | Blockchain | Primary Responsibility | Key Technology |
| --- | --- | --- | --- |
| Farmer Layer | Celo | USSD, GrowingCropToken, BatchToken, mobile money | Kotani Pay, USSD *384#, cUSD |
| Compliance & Lending | Mantle | LendingVault, CreditScore, EUDR DDS, institutional settlements | USDC, Mantle TaaS, KYC-gated wallets |
| Immutable Audit Log | Hedera HCS | Append-only record of every stage event | HCS Topics - single source of truth |
| Frontend & Off-chain | Next.js + Supabase | Agent PWA, cooperative dashboard, QR traceability | Shared across all chains |

Figure 4: Layer responsibilities
