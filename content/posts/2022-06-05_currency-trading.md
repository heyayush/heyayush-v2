## Basics

- Weekly expiry on Friday, at 12:30 PM. That's 1 day after equity.
- Monthly expiry on 3rd last trading day of the month.
- Straddle Strangle is the common way to trade this.
- Settled in INR based on the settlement price (RBI reference rate on expiry date).
- Keep an eye on Dollar index which is an indication of how dollar is performing against major currencies.
- Dollar index going up means dollar is strong against other currencies. So USD/INR can go up.
- Dollar index going up is bearish for equity markets.
- RBI usually intervenes to prevent volatility in Rupee. RBI stance right now is not to prevent Rupee depreciation but to contain volatility and slowly and steadly let Rupee find its levels.
- RBI has good amount of forex reserves which they sell to buy INR thus not letting big fall in INR.
- Currency trading hours are Monday to Friday, 9.00 am to 5.00 pm.
- Margin requirement is low, so good for option sellers and non-directional strategies.
- A pip is a smallest unit of price move. For USD/INR it is 0.0025
- RBI never trades at a single point. It executes those trades in a range.

## Trading hands on

- Check out the futures price of the exact expiry on which you are deploying Options strategy.
- Important to keep an eye on market depth and average price before placing orders.
- Need to keep patience, put your order and forget it. If it is triggered intraday then fine else leave it.
- Liquidity is low.
- Directional trades will test your patience.
- Hedging is good as overnight gapup gapdown are regular event.
- You might be left holding some option at 0.0025 and no buyers are left so for the last pip need to wait for the expiry settlement.
- Place AMO orders so that your order is ahead in queue next day on opening. But make sure it is a limit order as market price may be a bit volatile.
- Prepare to hold till expiry. Due to poor liquidity it is hard to get in and out frequently.
- 2-4 pips up and down and your order did not execute is normal.
- Brokerage and taxes expenditure is very low as you take less number of trades and hold them for long time.

## Guru Mantra

- When events like FED meet is scheduled let's say on Wed night. So there is uncertainity whether interest rate hike of 50 bps will be there or 75bps. So the option premiums will spike before this big event. Hence do not create positions since morning and look to capture theta decay. Either create posiitons after 4:30 PM or let the event pass and create fresh positions next morning.
- Calendar spreads are good if you are expecting the IVs of next month to increase.
- Look for high IV before opening positions. For this check dollar index and when some big negative candles form then IV will increase so if those big negative candle is closing near the support level then we can expect consecutive candles to be of low volatility and thus IV may decrease and our straddle strangle can result in profit.
- Creating straddle when spot price is 2-4 paise higher than the straddle strike price is a bit more safer as if price comes down and IV increases then we are at strike level so vega lost will be recovered by delta and if price goes up and IV decreases then the delta lost will be recovered by vega. So it gives a little more leg room. (Needs some backtesting)
- For Strangles also it is better to open it with a little tilt towards CE side that is if 0.5 and 0.75 are the strikes then sell 0.5 CE sell and 0.75 PE sell when the spot is around 0.65. (Needs some backtesting)
- When you want to buy OTM 0.0025 option hedge for margin benefit then place AMO order so that your order is ahead in queue.
- On 5 min timeframe there are few candles with high volume. That can trigger few SL, so if you have a straddle open then close the profit leg on that candle and then wait for 1-2 candles and let the rates settle again, then either square of complete straddle or enter that leg again.
- Friday expiry has low volumes in current expiry and more in next expiry.
- No firefighting of strangle management will save you if there is 0.5% intraday move. Because losses in one leg will shoot up very fast as compared to profits in the other leg. So simply take SL in losing leg if there is a big 15 min candle.

## Fundamentals

- RBI usually intervenes to stablize the volatility, and not to take price to a certain level. Their view is that Rupee will find it's own levels, all RBI will do is that it moves gradually towards that level.
- Check RBI reserve level numbers continuously.

## Factors Affecting Currency Trading

- Inflation Number
- RBI Policy
- GDP Number
- Current Account Deficit

## Events

- Initial jobless claims stronger than forecast then negative (bearish) for USD.
- Existing Home Sales stronger than forecast is Positive (bullish) for USD.
- US xyz state's manufacturing index if it is stronger than forecast then Positive (bullish) for USD.

https://www.nseindia.com/api/reports?archives=%5B%7B%22name%22%3A%22CD%20-%20Bhavcopy%22%2C%22type%22%3A%22archives%22%2C%22category%22%3A%22derivatives%22%2C%22section%22%3A%22currency%22%7D%5D&date=22-Aug-2022&type=currency&mode=single

https://www.nseindia.com/api/reports?archives=[{"name":"CD - Bhavcopy","type":"archives","category":"derivatives","section":"currency"}]&date=22-Aug-2022&type=currency&mode=single
