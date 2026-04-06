---
id: growingcroptoken-valuation
title: 7.2 GrowingCropToken Valuation
sidebar_position: 2
---

```text
GrowingCropToken value =
    ( tree_count x yield_per_tree[variety][age] )
    x chainlink_coffee_price_usd
    x stage_multiplier[current_stage]
    x ( 1 - forward_discount )

stage_multiplier:  Young tree 0.35 | Pre-flowering 0.55 | Flowering 0.65
                   Green cherry 0.80 | Ripening 0.90 | Harvest-ready 1.00
forward_discount:  15-25% (coffee on tree != coffee in warehouse)
chainlink_price:   AggregatorV3Interface, 8 decimals, 24hr staleness check
```

Figure 10: GrowingCropToken valuation formula
