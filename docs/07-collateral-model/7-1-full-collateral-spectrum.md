---
id: full-collateral-spectrum
title: 7.1 The Full Collateral Spectrum
sidebar_position: 1
---

Most agricultural lending tokenises assets at harvest. AsiliChain tokenises at every stage from farm registration to committed purchase order. The pre-harvest GrowingCropToken is the most transformative element: it enables a farmer to borrow in February for fertiliser and repay automatically in October when their batch is exported. The eight-month window is fully covered.

```mermaid
flowchart LR
  s1[Farm registration\nFarmProfile NFT\nNot lendable] --> s2[Pre-harvest\nGrowingCropToken\n30-65% LTV]
  s2 --> s3[Post-harvest\nBatchToken ERC-1155\n60-70% LTV]
  s3 --> s4[Buyer committed\nWarehouseReceiptToken\n75-80% LTV]
  s2 --> b1[Burned on harvest]
  s3 --> b2[Bridged to Mantle on GRADED]
```

| Asset Type | Stage | Max LTV | Key Characteristic |
| --- | --- | --- | --- |
| FarmProfile NFT | Farm registration | Not lendable | Non-transferable identity. GPS polygon, tree count, variety. Foundation for all other tokens. |
| GrowingCropToken | Pre-harvest | 30-65% | Value scales with crop growth stage via Chainlink price feed. Burned on harvest. |
| BatchToken (ERC-1155) | Post-harvest | 60-70% | Physical coffee weighed and graded. Bridged to Mantle on GRADED event. |
| WarehouseReceiptToken | Buyer committed | 75-80% | BatchToken plus confirmed on-chain purchase order. Near cash-equivalent. |

Figure 9: Four-stage collateral spectrum
