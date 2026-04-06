---
id: what-is-bridged
title: 5.3 What Is Bridged
sidebar_position: 3
---

The CCIP message carries BatchToken metadata only: token ID, farmer ID, cooperative ID, weight in kg, grade, harvest date, GPS hash, and the IPFS URI of supporting documents. It does not carry the token itself. The BatchToken remains on Celo. A mirror record is created on Mantle for the LendingVault to read. This design keeps the farmer's asset on Celo where it was minted and avoids the risks of cross-chain token custody.
