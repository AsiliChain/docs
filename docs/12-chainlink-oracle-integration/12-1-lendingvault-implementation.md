---
id: lendingvault-implementation
title: 12.1 LendingVault.sol Implementation
sidebar_position: 1
---

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";

contract LendingVault is UUPSUpgradeable, AccessControlUpgradeable {

  AggregatorV3Interface internal coffeeUsdFeed;
  AggregatorV3Interface internal weatherFeed;
  uint256 public constant STALENESS_THRESHOLD = 86400; // 24 hours
  uint256 public manualPriceOverride;
  uint256 public manualPriceTimestamp;
  uint256 public constant OVERRIDE_TIMELOCK = 172800; // 48 hours

  event PriceFeedOverrideSet(uint256 price, uint256 validAfter, address admin);
  event PriceFeedStale(uint256 lastUpdated, uint256 currentTime);

  function getCoffeePrice() public view returns (uint256) {
    (,int256 price,,uint256 updatedAt,) = coffeeUsdFeed.latestRoundData();
    if (block.timestamp - updatedAt > STALENESS_THRESHOLD) {
      emit PriceFeedStale(updatedAt, block.timestamp);
      // Use manual override if timelock has passed
      require(manualPriceOverride > 0 &&
          block.timestamp >= manualPriceTimestamp + OVERRIDE_TIMELOCK,
          'LendingVault: price feed stale, no valid override');
      return manualPriceOverride;
    }
    require(price > 0, 'LendingVault: invalid price');
    return uint256(price);
  }

  function calculateLoanAmount(uint256 batchWeightKg, uint256 ltvBps)
    public view returns (uint256 loanAmountUsdc) {
    uint256 coffeePrice = getCoffeePrice();  // 8 decimals
    uint256 batchValueUsd = (batchWeightKg * coffeePrice) / 1e8;
    loanAmountUsdc = (batchValueUsd * ltvBps) / 10_000;
  }

  function droughtRiskElevated() public view returns (bool) {
    (,int256 riskScore,,,) = weatherFeed.latestRoundData();
    return riskScore > 7000; // > 70% drought probability
  }

  // 48-hour timelocked price override (admin emergency only)
  function setManualPriceOverride(uint256 price)
    external onlyRole(PRICE_FEED_ADMIN) {
    manualPriceOverride = price;
    manualPriceTimestamp = block.timestamp;
    emit PriceFeedOverrideSet(price, block.timestamp + OVERRIDE_TIMELOCK, msg.sender);
  }
}
```

Figure 19: LendingVault.sol - Chainlink AggregatorV3Interface with staleness guard and timelocked fallback
