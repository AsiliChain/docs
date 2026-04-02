---
id: phase-2-hybrid-introduction
title: Phase 2 - Hybrid Introduction (Weeks 21-32)
sidebar_position: 3
---

Milestone: LendingVault live on Mantle. CCIP bridge active. USDC integration. First institutional loan issued. -> DECISION GATE: Evaluate bridge performance and stablecoin UX.

| Deliverable | Detail |
| --- | --- |
| LendingVault.sol (Mantle) | Deploy as UUPS proxy on Mantle. Reads CCIP-bridged BatchToken metadata. Chainlink price feed for LTV. USDC settlement. |
| CreditScore.sol (Mantle) | Deploy as UUPS proxy. Starts at 500. +50 per repayment, -100 per default. Public, immutable, portable. |
| CCIP bridge | GRADED event triggers Chainlink CCIP message: Celo BatchToken metadata -> Mantle mirror record. Retry queue with 4-hour fallback. |
| Two-leg disbursement | Mantle USDC -> Cooperative Settlement Wallet -> Next.js API -> Kotani Pay cUSD -> MTN MoMo. Float management documented. |
| MFI lender portal | Web portal: browse loan requests, view CreditScores, fund USDC liquidity pool, track portfolio. Initial targets: UGAFODE, ENCOT, Pride. |
| Security audit | Engage Trail of Bits or Certik for LendingVault.sol and CreditScore.sol. Audit must complete before Phase 2 mainnet launch. |
| Partnership activation | Approach Mantle ecosystem team with live traction data: farmers onboarded, BatchTokens minted, MoMo payments confirmed. Grant pitch. |
