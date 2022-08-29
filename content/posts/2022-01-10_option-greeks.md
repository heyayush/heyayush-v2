---
template: post
title: Option Greeks Simplified
draft: true
date: '2022-01-10T12:00:00.000Z'
description: >-
  Option Greeks are not that hard to understand and definitely not something to ignore especially for big position size traders and Option sellers.
category: Trading
tags:
  - Finance
  - Trading
---

Let's begin with some basic concepts and then we will move to details of option greeks.

## Intrinsic value of Option

Option premium can be broken down into two components - intrinsic value and time value. So intrinsic value of a call is the amount the option is ITM. If it is OTM then intrinsic value is zero. So for example if spot price is 100 and premium of ITM option of strike price 100 is 110 then 100 is intrinsic value and 10 is time value.

So in simple terms IV = Spot Price - Strike Price.

## Implied Volatility

- IV percentile and IV rank, follow any one of this.
- If IVP higher than 70 then possibility of short trade.
- IV shoots up in case of uncertainity/high volatility.
- Higher IV means higher premium value, hence more opportunity for option sellers.
- Safe option selling trade is when after a shoot up, if slowly IV starts decreasing then good time to sell that option.

## Option Greeks

Option Premium is decided by the Option Greeks. Some Greeks tends to increase the premium while some Greeks try to reduce the premium.

1. Delta – Measures the rate of change of options premium based on the directional
   movement of the underlying
2. Gamma – Rate of change of delta itself
3. Vega – Rate of change of premium based on change in volatility
4. Theta – Measures the impact on premium based on time left for expiry

### Delta

- Delta- how many points will the option premium change for every 1 point change in the underlying.
- Delta is the value how much premium in ce/pe will increase/decrease if spot price icncrease/decrease by 1 Rs.
- So more out of money less is the Delta. and for in the money Delta is close to 1.

Key takeaways from this chapter

1. Option Greeks are forces that influence the premium of an option
2. Delta is an Option Greek that captures the effect of the direction of the market
3. Call option delta varies between 0 and 1, some traders prefer to use 0 to 100.
4. Put option delta varies between -1 and 0 (-100 to 0)
5. The negative delta value for a Put Option indicates that the option premium and
   underlying value moves in the opposite direction
6. ATM options have a delta of 0.5
7. ITM option have a delta of close to 1
8. OTM options have a delta of close to 0.

### Gamma

- For a given change in the underlying, what will be the corresponding change in the delta of the option?
- Gamma is like d/dx of Delta. So how much Delta changes is called Gamma.

### Vega

- Negative vega means profit decreases if IV increases.
- Positive vega means profit increases if IV increases.
- 12-15 is the lower range of VIX where you can go for classic calendar spreads.
