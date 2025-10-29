# Liquidity Zones

Custom price ranges where you concentrate liquidity in MegaPools. Liquidity Zones enable capital-efficient liquidity provision by focusing assets where trading actually occurs.

## At a Glance

- Define specific price ranges for your liquidity
- Earn fees only when price is within your zone
- Narrow zones earn higher fees per dollar but require more management
- Wide zones earn more consistently but with lower capital efficiency
- Zones represented in ticks (discrete price points)
- Adjust zones anytime by modifying position

## Concept

Traditional AMMs spread your liquidity from price 0 to infinity. Most of that liquidity never participates in trades.

Liquidity Zones let you concentrate capital in price ranges where you expect trading:

```
Traditional AMM:
0 ============================================ ∞
(Liquidity spread thin across all prices)

Concentrated Liquidity:
      $1800 [================] $2200
      (Liquidity dense in selected zone)
```

When price is in your zone, your capital earns fees. When price moves outside, you stop earning until it returns.

## How Zones Work

### Zone Boundaries

Each Liquidity Zone has two boundaries:

**Lower Bound**: Minimum price where your liquidity is active.

**Upper Bound**: Maximum price where your liquidity is active.

Example:
- Token pair: ETH/USDC
- Lower bound: $1,800
- Upper bound: $2,200
- Your liquidity is active when ETH trades between $1,800 and $2,200

### Zone Width

Zone width determines capital efficiency and management requirements:

**Narrow Zones** (e.g., ±5% from current price):
- Highest capital efficiency
- Earn maximum fees when active
- Risk: Price easily moves outside zone
- Requires frequent rebalancing

**Medium Zones** (e.g., ±15% from current price):
- Balanced efficiency
- Good fee earnings with moderate management
- Suitable for most LPs

**Wide Zones** (e.g., ±50% from current price):
- Lower capital efficiency
- Consistent fee earnings
- Minimal management required
- Suitable for passive LPs or volatile pairs

### Multiple Positions

You can create multiple positions in the same pool with different zones:

```
Position 1: $1900 - $2100 (narrow, active management)
Position 2: $1600 - $2400 (wide, passive income)
Position 3: $2000 - $2050 (very narrow, short-term speculation)
```

This strategy combines high efficiency with risk management.

## Choosing Your Zone

### Based on Price Expectations

**Stable Pairs** (e.g., USDC/USDT):
- Use very narrow zones (e.g., 0.995 - 1.005)
- Price rarely moves outside
- High capital efficiency with low management

**Volatile Pairs** (e.g., ETH/USDC):
- Use wider zones (e.g., ±20-30%)
- Balance efficiency with active time
- Consider automated rebalancing

### Based on Management Style

**Active Management**:
- Narrow zones for maximum efficiency
- Monitor price movement daily
- Rebalance frequently (economical on MegaETH)
- Higher potential returns

**Passive Management**:
- Wide zones spanning expected price range
- Check weekly or monthly
- Minimal rebalancing
- Lower but more stable returns

### Based on Risk Tolerance

**Conservative**:
- Wide zones that rarely exit
- Focus on stable, high-volume pairs
- Accept lower efficiency for predictable earnings

**Aggressive**:
- Narrow zones for maximum efficiency
- Willing to rebalance frequently
- Higher returns but more active management

## Ticks and Tick Spacing

Liquidity Zones are defined using ticks (discrete price points):

### What Are Ticks?

Each tick represents a 0.01% price change. Tick system allows precise zone definition without floating-point issues.

Example:
- Tick 0 = Reference price
- Tick 100 = +1% from reference
- Tick -100 = -1% from reference

### Tick Spacing

Different fee tiers have different tick spacing:

**0.05% Fee Tier**: Tick spacing = 10 (0.1% increments)  
**0.3% Fee Tier**: Tick spacing = 60 (0.6% increments)  
**1% Fee Tier**: Tick spacing = 200 (2% increments)

Lower tick spacing allows more precise zones but increases gas costs for pool operations.

### Setting Zone Boundaries

When creating a position, you specify:
1. Lower tick (must be multiple of tick spacing)
2. Upper tick (must be multiple of tick spacing)

The interface handles tick math automatically - you enter prices, it converts to ticks.

## Zone Status

Your Liquidity Zone can be in three states:

### Active (In Range)

Current price is within your zone boundaries. Your liquidity:
- Participates in swaps
- Earns fees
- Comprises both tokens in proportion to current price

### Out of Range (Below)

Price fell below your lower bound. Your position:
- Doesn't participate in swaps
- Doesn't earn fees
- Comprises 100% Token B (quote token)

### Out of Range (Above)

Price rose above your upper bound. Your position:
- Doesn't participate in swaps
- Doesn't earn fees
- Comprises 100% Token A (base token)

## Capital Efficiency

Capital efficiency measures how much of your deposit actively earns fees:

**Traditional AMM**:
```
ETH/USDC Pool
Price: $2000
Your $10,000 deposit actively trading: ~$500 (5%)
Capital efficiency: 5%
```

**Concentrated Liquidity (±10% zone)**:
```
ETH/USDC Pool
Price: $2000
Zone: $1800-$2200
Your $10,000 deposit actively trading: ~$9,500 (95%)
Capital efficiency: 95%
```

Result: 19x more effective liquidity per dollar.

## Zone Strategy Examples

### Stable Pair Strategy

```
Pair: USDC/USDT
Current Price: 1.0000
Zone: 0.9990 - 1.0010
Width: 0.2%
```

**Rationale**: Price rarely exceeds $0.001 variance. Ultra-narrow zone captures most volume with maximum efficiency.

**Management**: Check monthly. Rebalance only if depeg event occurs.

### Blue Chip Strategy

```
Pair: ETH/USDC
Current Price: $2000
Zone: $1800 - $2200
Width: 20%
```

**Rationale**: Balances efficiency with reasonable active time. ETH typically doesn't move >20% rapidly.

**Management**: Check weekly. Rebalance if price approaches boundaries.

### Volatile Pair Strategy

```
Pair: NEWTOKEN/ETH
Current Price: 0.05 ETH
Zone: 0.03 - 0.08 ETH
Width: 100%
```

**Rationale**: New token prices swing wildly. Wide zone ensures position stays active.

**Management**: Check daily. Tighten zone as volatility decreases.

### Mean Reversion Strategy

```
Pair: ETH/USDC
Current Price: $2000 (oversold)
Zone: $2000 - $2400
Width: 20% (asymmetric, above current)
```

**Rationale**: Expect price to revert upward. Position captures fees during recovery.

**Management**: Close when price reaches expected range. Not a passive strategy.

## Rebalancing Zones

When price moves outside your zone, consider rebalancing:

### Manual Rebalancing

1. Remove liquidity from current position
2. Select new zone boundaries around current price
3. Add liquidity with adjusted zone
4. Receive new LP NFT

### Automated Rebalancing

Deploy a Strategy Mode that rebalances automatically:

- Monitors price continuously
- Rebalances when zone becomes inactive
- Adjusts zone width based on volatility
- No manual intervention required

[MEGA CLM guide →](../mega-clm/overview.md)

### Rebalancing Costs

On MegaETH, rebalancing costs:
- Remove liquidity: ~ $0.003
- Add liquidity: ~ $0.005
- Total: ~ $0.008

Ultra-low costs make frequent rebalancing economically viable.

## Zone Visualization

The MegaFi interface displays zone information:

**Price Chart**: Shows current price, your zones, and historical price movement.

**Liquidity Distribution**: Histogram showing where all liquidity is concentrated across price ranges.

**Zone Status Indicator**: Green (active), Red (out of range), with distance to boundaries.

**Expected Fee Earnings**: Projected APR based on current volume and your zone position.

## Advanced Zone Strategies

### Layered Positions

Create multiple positions with overlapping zones:

```
Position 1: $1950 - $2050 (core, narrow)
Position 2: $1850 - $2150 (buffer, medium)
Position 3: $1700 - $2300 (safety, wide)
```

Benefits:
- Core position maximizes efficiency
- Buffer provides insurance
- Safety ensures you always earn some fees

### Asymmetric Zones

Position zones differently based on bias:

**Bullish Bias**:
```
Current: $2000
Zone: $2000 - $2500 (favors upside)
```

**Bearish Bias**:
```
Current: $2000
Zone: $1500 - $2000 (favors downside)
```

Risk: If wrong, position quickly goes out of range.

### Seasonal Adjustment

Adjust zone width based on market conditions:

**Low Volatility Period**: Narrow zones for max efficiency.

**High Volatility Period**: Wider zones to stay active.

**Consolidation**: Very narrow zones around support/resistance.

**Trend**: Asymmetric zones favoring trend direction.

## FAQ

**What's the optimal zone width?**  
Depends on pair volatility and management preference. Start with ±15% for standard pairs.

**Can I adjust my zone without removing liquidity?**  
No. You must remove liquidity and create a new position with different boundaries.

**Do I lose fees if price exits my zone?**  
No. Accumulated fees remain in your position. You just stop earning new fees until price returns.

**Should I have one wide zone or multiple narrow zones?**  
Multiple narrow zones often perform better but require more transactions. Wide zones are simpler.

**How often should I rebalance?**  
When position goes out of range or when rebalancing cost is < 5% of expected additional fees.

## Next Steps

Apply Liquidity Zone concepts:

- [Providing Liquidity](providing-liquidity.md) - Create your first position
- [Strategy Modes](../mega-clm/strategy-modes.md) - Automate zone management
- [Range Optimization](../mega-clm/range-optimization.md) - Advanced zone selection

---

**Precision capital deployment.**

