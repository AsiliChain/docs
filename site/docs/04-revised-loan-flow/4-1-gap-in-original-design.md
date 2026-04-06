---
id: gap-in-original-design
title: 4.1 The Gap in the Original Design
sidebar_position: 1
---

The previous architecture contained an unresolved assumption: if the LendingVault issues a loan in USDC on Mantle, how does that USDC reach the farmer's MTN Mobile Money account? Kotani Pay operates on Celo rails specifically, converting cUSD to MoMo. Simply issuing USDC on Mantle creates a broken payment path. This section defines the two-leg settlement design that closes that gap.
