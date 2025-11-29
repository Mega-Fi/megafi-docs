# Performance Tracking

Monitor, analyze, and optimize your Auto-Pools positions with comprehensive performance metrics and analytics tools.

## At a Glance

- Real-time tracking of fees, APR, active time, and rebalancing activity
- Compare strategy performance vs manual management and other modes
- Historical charts show position evolution over time
- Export data for external analysis and tax reporting
- Benchmark against pool averages and top performers
- Identify optimization opportunities

## Key Metrics

### Returns

**Total Fees Earned**: Cumulative fees collected since position start.

**Unclaimed Fees**: Fees earned but not yet collected.

**APR (Annual Percentage Rate)**: Annualized return based on position value and fee earnings.

```
APR = (Total Fees / Position Value) × (365 / Days Active) × 100

Example:
Total Fees: $500
Position Value: $10,000
Days Active: 60
APR = ($500 / $10,000) × (365 / 60) × 100 = 30.4%
```

**Net APR**: APR after subtracting gas costs and realized IL.

```
Net APR = ((Total Fees - Gas Costs - Realized IL) / Position Value) × (365 / Days) × 100
```

### Activity

**Active Time %**: Percentage of time position was in range and earning.

```
Active Time = (Time In Range / Total Time) × 100

Example:
Position created 30 days ago
In range for 24 days
Active Time = (24 / 30) × 100 = 80%
```

**Rebalance Count**: Total number of rebalancing operations.

**Rebalance Frequency**: Average time between rebalances.

```
Frequency = Total Time / Rebalance Count

Example:
30 days active, 15 rebalances
Frequency = 30 / 15 = 2 days between rebalances
```

### Costs

**Total Gas Spent**: Cumulative gas costs for all operations.

```
Total Gas = Sum of:
  - Initial position creation
  - All rebalances
  - Fee collections
  - Position adjustments
```

**Gas as % of Fees**: Gas costs relative to earnings.

```
Gas % = (Total Gas / Total Fees) × 100

Example:
Gas: $0.50
Fees: $500
Gas % = 0.1%

Lower is better. Target: < 2%
```

### Risk

**Impermanent Loss**: Current IL if position were closed now.

```
IL = Current Position Value - Hold Value

Example:
Started: 1 ETH + $2,000 USDC = $4,000
ETH now: $2,400
Current position: 0.91 ETH + $2,187 USDC = $3,371
Hold value: 1 ETH + $2,000 USDC = $4,400
IL = $3,371 - $4,400 = -$1,029 (23% loss)
```

**IL vs Fees**: Whether fees have offset IL.

```
Net = Total Fees - Absolute IL

Example:
Fees: $500
IL: -$200
Net: +$300 (fees exceeded IL)
```

**Max Drawdown**: Largest position value decline.

> **Hedge Against IL**: Monitor your impermanent loss metrics closely. If IL becomes significant, consider hedging your position with put options through [Hedge](../hedge/overview.md). Options can limit downside exposure while your Auto-Pools position continues earning fees.

## Performance Dashboard

### Overview Tab

High-level position summary:

**Current Value**: Total USD value of position.

**All-Time Fees**: Total fees earned.

**Current APR**: Recent annualized return rate.

**Status**: Active/Inactive, current Strategy Mode.

**Next Rebalance**: Estimated time until next rebalancing (if applicable).

### Charts Tab

Visual performance tracking:

**Value Chart**: Position value over time.
- Shows total value, token amounts, fee accrual
- Highlights rebalancing events

**APR Chart**: Historical APR over time.
- Rolling APR calculation
- Compare to pool average

**Tick Width Chart**: How Tick width changed.
- Useful for Dynamic Mode
- Shows adaptation to volatility

**Activity Chart**: Active vs inactive periods.
- Green bars: In range
- Red bars: Out of range
- Shows price vs zone boundaries

### Activity Tab

Detailed activity log:

**Rebalances**: Every rebalancing event with:
- Timestamp
- Old zone → New zone
- Reason for rebalance
- Gas cost
- Expected vs actual improvement

**Fee Collections**: Every time fees were claimed:
- Timestamp
- Amount of each token
- USD value
- Whether auto or manual

**Zone Adjustments**: Changes to Strategy Mode or parameters.

### Comparison Tab

Benchmark your strategy:

**vs Pool Average**: Compare your APR to average LP in same pool.

**vs Other Modes**: See how other Strategy Modes would have performed.

**vs Manual**: Simulated manual management performance.

**vs Hold**: Performance vs simply holding tokens.

## Performance Analytics

### Strategy Effectiveness

Measure how well strategy is working:

**Rebalance Success Rate**:
```
Success Rate = (Rebalances that improved fees / Total rebalances) × 100

Target: > 80%
Below 60%: Strategy may need adjustment
```

**Zone Accuracy**:
```
Accuracy = Active Time % for most recent 7 days

Target: > 75%
Below 50%: Zones poorly positioned
```

**Cost Efficiency**:
```
Efficiency = Fees Earned / Gas Spent

Target: > 100x
Below 50x: Too much rebalancing
```

### Optimization Opportunities

Analytics identify improvements:

**Overbalancing**: Too frequent rebalancing for benefit gained.
```
Warning: 50 rebalances in past month
Gas: $0.50
Additional fees from rebalancing: $0.80
Net benefit: $0.30

Recommendation: Switch to less frequent mode or increase thresholds
```

**Underbalancing**: Missing optimization opportunities.
```
Warning: 2 rebalances in past month
Active time: 45%
Simulated balanced mode would have: 75% active time

Recommendation: Switch to more active mode
```

**Zone Mismatch**: Zones poorly suited to current volatility.
```
Warning: Volatility increased 200% this week
Current zone: Still narrow (±5%)

Recommendation: Widen zones or switch to Dynamic Mode
```

## Comparative Analysis

### Mode Comparison

See how different modes would have performed:

```
Your Position (Bear Mode):
APR: 28%
Active Time: 82%
Gas: $0.15

Simulated Bull Mode:
APR: 21% (-7%)
Active Time: 93% (+11%)
Gas: $0.03 (-$0.12)

Simulated Static Mode:
APR: 35% (+7%)
Active Time: 68% (-14%)
Gas: $0.65 (+$0.50)

Simulated Dynamic Mode:
APR: 31% (+3%)
Active Time: 85% (+3%)
Gas: $0.30 (+$0.15)
```

Helps decide if mode switch would improve results.

### Time Period Analysis

Performance varies by period:

```
Last 7 Days:
APR: 42%
Active Time: 90%
(Favorable conditions for current strategy)

Last 30 Days:
APR: 28%
Active Time: 78%
(More typical performance)

Last 90 Days:
APR: 23%
Active Time: 72%
(Includes volatile period where strategy struggled)
```

Understand strategy performance across conditions.

### Pool Comparison

Compare across different pools:

```
Your ETH/USDC Position (Bear Mode):
APR: 28%

Your WBTC/ETH Position (Bear Mode):
APR: 22%

Analysis: ETH/USDC performing better due to higher volume
```

Helps allocate capital optimally.

## Reporting

### Export Data

Download performance data:

**CSV Export**: Tabular data for spreadsheet analysis.

**JSON Export**: Structured data for programmatic use.

**PDF Report**: Formatted summary for sharing or records.

**Tax Report**: Fee earnings and realized IL for tax purposes.

### Automated Reports

Schedule regular performance summaries:

**Daily Digest**: Email with key metrics and changes.

**Weekly Summary**: Detailed performance overview.

**Monthly Report**: Comprehensive analysis with recommendations.

## Alerts

Set notifications for important events:

**Performance Alerts**:
- APR drops below X%
- Active time < X%
- IL exceeds X%

**Activity Alerts**:
- Position rebalanced
- Fees collected
- Mode changed

**Threshold Alerts**:
- Position value > or < X
- Unclaimed fees > X
- Gas costs > X% of fees

Receive via:
- In-app notifications
- Email
- Push notifications (if enabled)

## Advanced Analytics

### Attribution Analysis

Break down returns by source:

```
Total Return: $500

Fee Earnings: $650
Gas Costs: -$0.15
Impermanent Loss: -$150
Net: $499.85

Attribution:
- 130% from fee earnings
- -0.03% from gas
- -30% from IL
```

Understand what's driving performance.

### Risk-Adjusted Returns

Account for risk in performance:

**Sharpe Ratio**: Return per unit of volatility.

```
Sharpe = (APR - Risk Free Rate) / Volatility

Higher Sharpe = Better risk-adjusted returns
Target: > 1.0
```

**Sortino Ratio**: Return per unit of downside volatility.

```
Sortino = (APR - Risk Free Rate) / Downside Volatility

Focuses on negative volatility only
Target: > 1.5
```

> **Improve Risk-Adjusted Returns**: If your downside volatility is high, consider hedging with put options via [Hedge](../hedge/overview.md). Options protect against downside moves, improving your Sortino ratio while maintaining upside potential from fee earnings.

### Scenario Analysis

See how position would perform under different scenarios:

**Price Shock**:
```
If ETH drops 20% to $1,600:
- Position value: $8,200
- Status: Out of range
- Auto-rebalance: Yes
- New zone: $1,520 - $1,680
- Expected recovery APR: 35%
```

**Volatility Spike**:
```
If volatility doubles:
- Dynamic Mode: Widens zones automatically
- Static Mode: Higher rebalancing costs
- Bull Mode: Minimal impact
```

## FAQ

**How often do metrics update?**  
Real-time. Metrics update continuously as pool conditions change.

**Can I track multiple positions together?**  
Yes. Portfolio view aggregates all positions.

**How is APR calculated?**  
Based on actual fees earned over time, extrapolated annually. Not a guarantee of future returns.

**Why does my APR fluctuate?**  
APR depends on volume, which varies. Also affected by active time and rebalancing frequency.

**Can I see historical zone positions?**  
Yes. Activity tab shows all historical zones and when they were active.

**How do I know if my strategy is performing well?**  
Compare to pool average and other modes. If consistently underperforming, consider switching modes.

## Next Steps

Use performance data to optimize:

- [Strategy Modes](strategy-modes.md) - Choose best mode based on performance
- [Automated Rebalancing](automated-rebalancing.md) - Understand rebalancing impact
- [Range Optimization](range-optimization.md) - See how zones are calculated
- [Hedge](../hedge/overview.md) - Protect against IL with options

---

**Measure to improve.**

