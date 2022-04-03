---
template: post
title: Option Strategies
draft: false
date: '2022-03-20T12:00:00.000Z'
description: >-
  Let's dive deep into various Option Strategies and understand when to execute them and what is the risk and reward involved in them.
category: Trading
tags:
  - Finance
  - Trading
---

## 1. Non-directional Strategies

### Paying premium

1. **Long Straddle**

Buy both Put and Call of same strike price.

_Win:_ If market makes sharp move in any side.

_Risk:_ Make sure to book profit at peak volatility or keep trailing SL so that profit leg minus loss leg is net profitable.

2. **Long Strangle**

Similar to Long Straddle but instead of same strike prices here you buy OTM Call and Put Option. Hence this strategy is cheaper than Straddle but needs more significant move on either side to give profit.

3. **Long Call Butterfly**

_When to Use:_ No significant price movement in any direction and low volatility.
It is similar to short straddle but with limited losses in case if there is a sharp move in either direction.

_Win:_ If stock remains at (around) that strike price at expiration.

_Risk:_ Limited to the premium paid.

4. **Long Call Condor**

_When to Use:_ No significant price movement and low volatility.

It is just like strangle with limited losses by buying OTM options after our sell leg prices.

### Eating Premium

1. **Short Straddle**

Sell both Put and Call of same strike price.

_Win:_ If market stays and settles around your strike price and does not make a big move.

_Risk:_ Loss will increase exponentially if sharp move in any direction. In that case quickly get off the losing leg and ride the profit leg with the move.

2. **Short Strangle**

Similar to Short Straddle but instead of same strike prices here you sell OTM Call and Put Option. Hence this strategy is cheaper than Straddle and gives more wider breakeven range, thus more probability of profit. However that profit is limited and small.

_Win:_ If market stays between the OTM sold Call and Put option strike prices.

_Risk:_ Unlimited risk if sharp move in either side.

3. **Covered Call**

_When to Use:_ If you are holding the stock in portfolio for long term but for near term the view is neutral to slightly bullish. Also if you do not mind exiting the stock from portfolio in case of a sharp upmove.

In such scenario sell the OTM Call Option and eat the premium. In this way a profit is gained even if the stock does not move up. But in case it does move up to the OTM sold Call Option then exit at that higher price from the portfolio.

## 2. Bullish Strategies

1. **Bull Call Spread**

Buying lower strike Call Option and selling higher strike Call Option.

_When to Use:_ Moderately bullish and want to take limited risk and go for limited profit equal to net premium gain.

2. **Bull Put Spread**

Buying lower strike Put Option and selling higher strike Put Option.

_When to Use:_ Moderately bullish and want to take limited risk and go for limited profit equal to net premium received.

> Difference between Bull Put Spread and Bull Call Spread is that in Bull Put Spread there is an inflow of premium.

3. **Call Backspread**

_When to Use:_ Volatility from here and most likely upward move. So most profit on sharp upmove. Small and limited profit on downmove and loss if it stays in range.

4. **Long Call Ladder**

It is extention of Bull Call Spread. Where you buy one ITM Call and sell one ATM and one OTM Calls.

_When to Use:_ Less volatility and slow small upmove.

_Risk:_ If there is sharp and big upmove that our ATM, OTM sold Calls become ITM.

## 3. Bearish Strategies

1. **Bear Call Spread**

Buying higher strike Call Option and selling lower strike Call Option.

_When to Use:_ Moderately bearish and want to take limited risk and go for limited profit equal to net premium received.

2. **Bear Put Spread**

Buying higher strike Put Option and selling lower strike Put Option.

_When to Use:_ Moderately bearish and want to take limited risk and go for limited profit equal to net premium gain.

> Difference between Bear Put Spread and Bear Call Spread is that in Bear Call Spread there is an inflow of premium.

> So if you are looking for inflow of premium and market view is bullish then go for Bull Put Spread, and if market view is bearish then Bear Call Spread. Vice-versa for limited loss equal to net premium for that trade setup.

3. **Put Backspread**

_When to Use:_ Volatility from here and most likely downward move. So most profit on sharp downmove. Small and limited profit on upmove and loss if it stays in range.

4. **Long Put Ladder**

It is extention of Bear Put Spread. Where you buy one ITM Put and sell one ATM and one OTM Puts.

_When to Use:_ Less volatility and slow small downmove.

_Risk:_ If there is sharp and big downmove that our ATM, OTM sold Puts become ITM.

Although there are few more strategies but does not make much sense to implement hence less popular and similar or contrary to the strategies discussed above.

# Option Spreads

## Bull Call Spread

- Bullish strategy.
- Call option which is cheap and has less time value decay.
- Moderately bullish view. Limited upmove expected.
- Buy a call at strike(ATM) and sell a higher strike cheaper call (OTM)
- Margin required is less as compared to naked option selling.
- Max Loss: Net Premium. So as premium decays you lose.
- Max Profit: Difference in strikes - net premium.
- Effect of time and volatility - As time passes we will lose as premiums decay but if IV goes up we will gain as premiums will go up.

## Bull Put Spread

- Market view is mildly bullish.
- Sell a ATM put option.
- Buy a lower strike cheaper put to protect losses (OTM).
- We receive premium in this strategy.
- Max Loss: Difference in strikes - net premium.
- Max Profit: net premium.
- Effect of time and volatility - As time passes we will gain and eat premium but if IV goes up we will lose as premiums will go up.

## Long Straddle

- When you expect the market to give a big move either up or down .
- Buy a put and call option of ATM strike.
- Buy at low IV so when IV goes up you earn.
- If IV goes down you will lose premiums.

## Strangle management

- Sell PE and CE, both far out of money.
- High IV like 30 means premium are high.
- Make strangle when vix is high so that when vix will fall then it is good for you.
- Key is to manage delta, that is what you need to balance.
- If your view is bullish then have slighly +ve delta and if bearish then slightly -ve delta. But keep it under +-10 to avoid high risk.
- So book profit of 1 leg and shift to closer strike price to get more premium.
- Keep shifting to closer strike price as per risk.
- Max reach at the stage so that you are selling PE and CE of same strike price.
- If you go even more in the money then it is inverted strangle and that is very risky.
- Keep booking profit after 50% decay and shift to closer strike price to extract 50 %

## Vertical Spread

- Easier one by just having 2 legs.
- Bell curve. Normal distribution is important concept to understand here. That tell how much probability of profit or loss in this spread. Like in performance appraisals 80% people in 4,3,2,1 band and only 20% in top band of 5. So it is like probability of profits in 4,3,2,1 band but loss if ending up in 20% band of 5. And average profit in 4,3,2,1 band where 80% chances of ending up. But if ended up in 20% then high loss value as it is the top of that bell.
- Spreads are an options strategy where you simultaneously buy and sell options that are of same class (puts or calls), same expiry, but with different strike prices.

## Hedging in stock positions

Big players do not buy naked positions, they always keep an hedge. For example taking delivery of stock and also buying an OTM PE hence this OTM PE is like an insurance.
If it moves up then stock in delivery is their whose value will increase and OTM premium is small which they will lose but will get compensated by the earning because of delivery in that stock. Similary if price goes down then that OTM PE will increase so they will earn on it and keep the delivery in losses for longer timeframe.

Hope this was useful.

\- Ayush 🙂
