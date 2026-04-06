---
id: asilichain-eudr-mapping
title: 11.2 AsiliChain EUDR Mapping
sidebar_position: 2
---

| EUDR Requirement | AsiliChain Implementation |
| --- | --- |
| GPS geolocation of all plots | Browser geolocation records boundary polygon as agent walks perimeter. Stored on-chain in FarmerRegistry.sol and pinned to IPFS. |
| Deforestation-free proof | GPS polygon checked against Global Forest Watch API for alerts since December 31, 2020. Result embedded in DDS metadata. |
| Traceability to farm level | BatchToken carries farmerID, harvest date, GPS, weight, grade, and full TraceLog stage history. Verifiable on Celo and Hedera HCS independently. |
| Legal production compliance | UCDA export licence numbers, cooperative registration, and seasonal permits stored as IPFS documents linked to FarmerRegistry.sol. |
| DDS generation and filing | Auto-generated from on-chain data by pdf-lib. Signed with cooperative wallet. Pinned to IPFS. Hash stored on-chain. |
| Operator declaration | Cooperative and exporter wallet signatures embedded in BatchToken metadata. Cryptographically verifiable by EU information system. |

Figure 17: EUDR Article 4 requirements mapped to AsiliChain implementation
