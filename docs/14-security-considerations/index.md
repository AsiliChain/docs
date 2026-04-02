---
id: security-considerations
title: 14. Security Considerations
sidebar_position: 15
---

| Risk Area | Mitigation |
| --- | --- |
| Reentrancy in LendingVault | ReentrancyGuard (OpenZeppelin) on all state-changing functions. Checks-effects-interactions pattern enforced. |
| Oracle manipulation | 24-hour staleness check. Revert on stale price. Manual override requires 48-hour timelock and emits monitored event. |
| CCIP bridge message tampering | CCIP's Risk Management Network independently monitors cross-chain operations. Message includes cooperative signature. Replay protection via nonce. |
| Access control bypass | Distinct roles: AGENT_ROLE, COOP_ROLE, LENDER_ROLE, PRICE_FEED_ADMIN, ADMIN. No single key controls the whole system. |
| UUPS upgrade abuse | Upgrades require DEFAULT_ADMIN_ROLE + 48-hour timelock. All upgrades emit an event monitored by protocol team. |
| Private key exposure | Doppler/Vercel secrets. Hardware wallet (Ledger) for mainnet deployer and multisig signers. Never committed to git. |
| Formal audit | Trail of Bits or Certik must audit LendingVault.sol and CreditScore.sol before Phase 2 mainnet. No exceptions. |
