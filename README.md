
# AsiliChain Documentation

## Overview

AsiliChain brings end-to-end traceability, collateral-backed finance, and regulatory compliance to African coffee supply chains. Built to connect farmers, suppliers, lenders, regulators, and buyers, AsiliChain provides a single trusted chain of custody from origin to settlement.

**Mission:**
Empower Africa’s 3.5 million smallholder coffee farmers by making them visible to formal capital, unlocking fair finance, and ensuring compliance with global regulations like the EU Deforestation Regulation (EUDR).

## Key Features

- **Traceability:** Track origin, quality, movement, and custody across every handoff, from farm gate to final buyer.
- **Finance:** Unlock working capital against verified inventory and receivables using on-chain collateral.
- **Compliance:** Provide audit-ready, immutable records for regulators and buyers, supporting EUDR and other requirements.

## At a Glance

| Metric | Value |
| --- | --- |
| Smallholder farmers targeted (Africa) | 3.5M |
| Uganda annual coffee exports | $1B+ |
| Architecture | 3-chain (Celo + Mantle + Hedera HCS) |
| Delivery timeline | 44wk hybrid roadmap to scale |

## Architectural Design

AsiliChain uses a hybrid multi-chain architecture to serve two fundamentally different audiences:

- **Celo (Farmer Layer):** Handles all farmer-facing interactions, including USSD (*384#), GrowingCropToken minting, BatchToken minting, and mobile money settlement via Kotani Pay.
- **Mantle (Compliance & Lending Layer):** Manages institutional operations such as LendingVault, credit scoring, EUDR Due Diligence Statement (DDS) generation, and USDC settlements with microfinance partners.
- **Hedera HCS (Audit Layer):** Acts as an independent, append-only audit log. Both Celo and Mantle write to Hedera, providing a single source of truth for regulators and buyers.

**Frontend & Off-chain:**
- Built with Next.js and Supabase for agent PWA, cooperative dashboards, and QR-based traceability.

### Layer Responsibilities

| Layer | Blockchain | Primary Responsibility | Key Technology |
| --- | --- | --- | --- |
| Farmer Layer | Celo | USSD, GrowingCropToken, BatchToken, mobile money | Kotani Pay, USSD *384#, cUSD |
| Compliance & Lending | Mantle | LendingVault, CreditScore, EUDR DDS, institutional settlements | USDC, Mantle TaaS, KYC-gated wallets |
| Immutable Audit Log | Hedera HCS | Append-only record of every stage event | HCS Topics |
| Frontend & Off-chain | Next.js + Supabase | Agent PWA, dashboard, QR traceability | Shared across all chains |

### Stablecoin Strategy

| Stablecoin | Chain | Used For | Status |
| --- | --- | --- | --- |
| cUSD | Celo | Farmer loan disbursements → MTN Mobile Money via Kotani Pay | Active from Phase 1 |
| USDC | Mantle | Institutional lending settlements, MFI liquidity pool, EUDR buyer payments | Active from Phase 2 |
| AUSD (Agora) | Mantle | Treasury reserve, future institutional option | Phase 4+ (pending Agora onboarding) |

## Stack Summary

- **Smart Contracts:** Solidity (Celo, Mantle)
- **Audit Layer:** Hedera Hashgraph Consensus Service (HCS)
- **Frontend:** Next.js (React), Supabase
- **Mobile Integration:** USSD, Kotani Pay, MTN Mobile Money
- **Stablecoins:** cUSD (Celo), USDC (Mantle), AUSD (future)

## Project Structure

This documentation includes:
- Whitepaper and protocol overview
- Regulatory and compliance architecture
- Technical architecture and smart contract design
- Roadmap, impact metrics, and references

For more details, see the docs/ directory and the whitepaper sections.

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## GitHub Pages

To build for GitHub Pages while keeping the custom domain as the default, set the deployment variables at build time:

```bash
SITE_URL=https://AsiliChain.github.io BASE_URL=/docs/ yarn build
```

For automated GitHub Pages publishing, keep the Docusaurus `deploy` command and point it at the repository branch that hosts Pages content.
