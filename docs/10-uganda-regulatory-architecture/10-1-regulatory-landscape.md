---
id: regulatory-landscape
title: 10.1 The Regulatory Landscape
sidebar_position: 1
---

Uganda's financial regulatory environment involves three distinct authorities with overlapping but distinct mandates. Understanding who regulates what is the starting point for every compliance decision.

| Regulator | Mandate | Relevance to AsiliChain |
| --- | --- | --- |
| Bank of Uganda (BoU) | Regulates Tier I (commercial banks) and Tier II (credit institutions). Governs the National Payments System (NPS) including mobile money operators. | AsiliChain's cUSD-to-MoMo conversion via Kotani Pay operates under BoU's NPS framework. Mobile Money Guidelines 2013 and NPS Consumer Protection Regulations 2022 apply. |
| Uganda Microfinance Regulatory Authority (UMRA) | Regulates Tier IV institutions: non-deposit taking MFIs, money lenders, SACCOs, and digital lenders. | MFI partners depositing into the LendingVault liquidity pool are UMRA-licensed. The LendingVault's lending activity may itself require UMRA licensing as a digital credit provider. |
| Uganda Coffee Development Authority (UCDA) | Under the National Coffee Act 2021, UCDA regulates all on-farm and off-farm coffee activities, issues export licences, and maintains cooperative registration. | Every cooperative onboarded to AsiliChain must be UCDA-registered. Cooperative ID in FarmerRegistry.sol is the UCDA registration number. UCDA's EUDR compliance programme is a natural institutional partner. |
| Uganda Communications Commission (UCC) | Regulates telecommunications including USSD shortcodes. | The *384# USSD shortcode requires UCC approval through Africa's Talking. Application must be submitted on Day 1 of Phase 0. |

Figure 15: Uganda's three-regulator financial landscape and AsiliChain relevance
