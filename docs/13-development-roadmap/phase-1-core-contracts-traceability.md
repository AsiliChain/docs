---
id: phase-1-core-contracts-traceability
title: Phase 1 - Core Contracts and Traceability (Weeks 9-20)
sidebar_position: 2
---

Milestone: Full 5-contract suite on Celo mainnet. BatchToken mintable, QR-scannable, provenance verifiable. 500+ farmers onboarded. -> DECISION GATE: Proceed to Mantle or stay Celo-only.

| Deliverable | Detail |
| --- | --- |
| FarmerRegistry.sol | GPS polygon, phone-mapped wallet, UCDA cooperative ID, credit score (starts 500). AGENT_ROLE gated. |
| BatchToken.sol (ERC-1155) | One token per batch. farmerID, weight, grade, moisture %, GPS, IPFS URI. Token ID = hash(farmerID, timestamp). |
| TraceLog.sol | Append-only stage logger. Each event mirrors to Hedera HCS via server-side API route. |
| USSD batch intake | *384# menu live. Africa's Talking webhook calls Next.js API. Cooperative custodial wallet signs server-side. Farmer never holds crypto. |
| Kotani Pay integration | BatchToken mint -> Kotani Pay API -> cUSD -> MTN MoMo to farmer within 60 seconds. Test on Alfajores before mainnet. |
| Hardhat test suite | 90%+ coverage: register farmer, mint BatchToken, log stages, access control rejections, replay attack prevention. |
