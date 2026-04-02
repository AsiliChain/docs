---
id: mobile-money-and-kyc
title: 10.3 Mobile Money and KYC Requirements
sidebar_position: 3
---

The National Payments Systems Regulations 2022 updated consumer protection requirements for all institutions operating under the NPS Act, including mobile money providers. Kotani Pay, as the licensed payment service provider converting cUSD to MTN Mobile Money, holds the regulated payment relationship. AsiliChain does not touch the MTN money transmission layer directly and therefore does not require a payment institution licence for the MoMo disbursement function.

KYC is conducted at the cooperative level, not at the protocol level. Every UCDA-registered cooperative maintains member records including national ID, phone number, and farm registration. The cooperative agent's act of registering a farmer in FarmerRegistry.sol is a gatekept, cooperative-authorised action requiring AGENT_ROLE. This means the on-chain identity record is backed by the cooperative's KYC, which is itself backed by UCDA registration. The protocol does not perform KYC itself - it relies on the cooperative's regulated member verification.
