# Range Optimization

Set price ranges for your Auto-Pools strategies. Define how your liquidity responds to price changes through custom price range configuration.

## At a Glance

- Set custom minimum and maximum price ranges
- Define price ranges around current price
- Custom ratios according to assets and investment mindset
- Works with all market modes (Bull, Bear, Dynamic, Static)
- Integrates with rebalance triggers

## Set a Price Range

Auto-Pools doesn't limit you to a fixed price range or ratio while defining auto-rebalance intents.

You can define the minimum and maximum price range around the current price. You can make it in a custom ratio according to your assets and investment mindset.

### Price Range Configuration

When setting up your strategy, you configure:

**Minimum Price**: Lower bound of your liquidity zone.

**Maximum Price**: Upper bound of your liquidity zone.

**Current Price Reference**: Ranges are set relative to current market price.

**Custom Ratios**: Adjust range width based on your risk tolerance and market view.

### Example Price Ranges

For an ETH/USDm pool with current price of $3,000:

**Wide Range (Bull Mode)**:
- Minimum: $2,400 (-20%)
- Maximum: $3,600 (+20%)

**Medium Range (Bear Mode)**:
- Minimum: $2,700 (-10%)
- Maximum: $3,300 (+10%)

**Narrow Range (Static Mode)**:
- Minimum: $2,850 (-5%)
- Maximum: $3,150 (+5%)

### Range Selection Considerations

**Market Volatility**: Higher volatility requires wider ranges to stay active.

**Market Mode**: Different modes work better with different range widths:
- Bull Mode: Ranges that favor upward price movement
- Bear Mode: Ranges that favor downward price movement
- Dynamic Mode: Adaptive ranges that adjust to volatility
- Static Mode: Fixed ranges for custom strategies

**Rebalancing Type**: 
- Trailing Rebalancing: Ranges can be wider as position trails price
- Active Rebalancing: Ranges may need adjustment when price exits

**Risk Management**: For additional protection, especially with narrower ranges or high volatility, consider hedging your position with put options through [Hedge](../hedge/overview.md). Options can limit downside exposure while your Auto-Pools position continues earning fees.

## Integration with Rebalance Triggers

Price ranges work together with rebalance triggers:

**Price Range**: Defines where your liquidity is active.

**Rebalance Triggers**: Define when rebalancing should occur (can be inside or outside the price range).

Setting triggers outside your price range provides a cushion during market swings, allowing you to wait for price to return before rebalancing.

## FAQ

**Can I change my price range after deployment?**  
Yes, but it requires rebalancing the position. Some parameters can be adjusted without full rebalance.

**What happens if price goes outside my range?**  
Depends on your rebalancing type. Trailing rebalancing will trail the price. Active rebalancing will swap assets to bring position back in range.

**How do I choose the right range width?**  
Consider market volatility, your market mode selection, and risk tolerance. Wider ranges stay active longer but earn less fees per unit of capital.

**Can I set asymmetric ranges?**  
Yes. You can set different distances above and below current price based on your market view.

**Do ranges work differently in different modes?**  
Yes. Bull mode rebalances on the right side, Bear mode on the left side, Dynamic mode in both directions, Static mode doesn't rebalance automatically.

**Can I hedge my position when using narrow ranges?**  
Yes. Narrow ranges offer higher capital efficiency but increased risk. You can hedge your position with put options through [Hedge](../hedge/overview.md) to protect against downside moves while maintaining the efficiency benefits of narrow ranges. Fees from Auto-Pools can help offset option premiums.

## Next Steps

Apply range optimization:

- [Strategy Modes](strategy-modes.md) - Choose mode that matches your range strategy
- [Automated Rebalancing](automated-rebalancing.md) - Understand how ranges interact with rebalancing
- [Performance Tracking](performance-tracking.md) - Monitor how your ranges perform
- [Hedge](../hedge/overview.md) - Protect positions with options

---

**Customize your ranges.**
