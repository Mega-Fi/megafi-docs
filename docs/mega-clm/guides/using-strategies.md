# Using Strategies

Step-by-step guide to deploying and managing automated liquidity strategies on MegaFi. Learn how to let algorithms optimize your positions 24/7.

## Prerequisites

- Wallet connected with liquidity tokens
- Understanding of basic LP concepts
- $500+ position recommended (strategies worthwhile for larger amounts)
- Small $MEGA for gas

## Quick Start

### 1. Navigate to Strategy Layer

Click "Strategies" in main navigation or visit [megafi.app/strategies](https://megafi.app/strategies).

### 2. Browse Strategy Modes

Review available modes:
- Conservative: Wide zones, rare rebalancing
- Balanced: Medium zones, regular rebalancing
- Aggressive: Narrow zones, frequent rebalancing
- Dynamic: Adaptive width based on volatility

Click each to see detailed characteristics.

### 3. Select Your Mode

Choose based on:

**Your Time**: 
- No time = Conservative or Dynamic
- Some monitoring = Balanced
- Active management = Aggressive

**Market Conditions**:
- High volatility = Conservative
- Normal conditions = Balanced or Dynamic
- Low volatility = Aggressive

**Risk Tolerance**:
- Risk-averse = Conservative
- Moderate = Balanced
- Risk-seeking = Aggressive

### 4. Choose Pool

Select token pair:
- High volume pools for best results
- Match volatility to strategy mode
- Consider your existing holdings

### 5. Set Capital Amount

Enter deposit amount:
- Must have both tokens in correct ratio
- Or use "Zap" to convert from single token
- Review total USD value

### 6. Review Configuration

Check:
- Expected APR (based on recent performance)
- Rebalancing frequency
- Estimated gas costs
- Initial Liquidity Zone

### 7. Deploy

1. Approve tokens (if first time)
2. Click "Deploy Strategy"
3. Confirm transaction
4. Wait for confirmation (< 10ms)
5. Strategy activates immediately

## Strategy Management

### Monitoring Performance

Dashboard shows:

**Overview**:
- Current position value
- All-time fees earned
- Current APR
- Strategy status

**Activity**:
- Recent rebalances
- Fee collections
- Zone adjustments

**Analytics**:
- APR over time
- Active time %
- Gas costs
- Comparison vs manual

### When to Check

**Daily** (optional): Quick health check

**Weekly**: Review performance metrics

**Monthly**: Comprehensive analysis, consider mode changes

### Reading Performance

**Good Performance Indicators**:
```
APR > Pool average: ✓
Active time > 75%: ✓
Gas costs < 2% of fees: ✓
Rebalance success rate > 80%: ✓
```

**Warning Signs**:
```
APR < Pool average consistently
Active time < 50%
Gas costs > 5% of fees
Frequent failed rebalances
```

## Adjusting Strategies

### Switching Modes

When to switch:

**Conservative → Balanced**:
- Market stabilizing
- Want higher efficiency
- Comfortable with more rebalancing

**Balanced → Aggressive**:
- Low volatility period
- Maximize returns
- Can monitor regularly

**Aggressive → Conservative**:
- Volatility increasing
- Want more reliability
- Prefer hands-off approach

**Any → Dynamic**:
- Uncertain conditions
- Want automatic adaptation
- Let algorithm decide

**How to Switch**:
1. Open strategy position
2. Click "Change Mode"
3. Select new mode
4. Review changes
5. Confirm
6. Position rebalances to new parameters

### Modifying Parameters

Advanced users can adjust:

**Rebalance Threshold**: How far price must move

**Minimum Benefit**: Min expected improvement

**Zone Width Bounds**: Min and max zone width

**Volatility Lookback**: Period for volatility calculation

Changes take effect immediately.

### Adding Capital

Increase position size:

1. Click "Add to Strategy"
2. Enter additional amount
3. Tokens auto-balanced to current ratio
4. Confirm deposit
5. Strategy manages larger position

### Withdrawing Capital

Remove partial or full amount:

1. Click "Withdraw from Strategy"
2. Select percentage (25%, 50%, 75%, 100%)
3. Review tokens received
4. Fees automatically collected
5. Confirm withdrawal

Strategy continues with remaining capital.

## Advanced Usage

### Multiple Strategies

Run several strategies simultaneously:

**Diversification Example**:
```
Strategy 1: ETH/USDC - Balanced Mode
Strategy 2: WBTC/ETH - Conservative Mode
Strategy 3: USDC/USDT - Aggressive Mode

Benefits:
- Risk spread across pairs
- Different modes for different volatilities
- Portfolio optimization
```

### Strategy Combinations

Combine with other MegaFi features:

**Strategy + Options Hedge**:
```
Deploy: Balanced strategy on ETH/USDC
Hedge: Buy protective puts on ETH
Result: High-yield strategy with downside protection
```

**Strategy + Manual Positions**:
```
Strategy 1: 60% capital in aggressive mode
Manual LP: 40% capital in very narrow zone
Result: Mix automation with hands-on optimization
```

### Backtesting

Test strategy before deploying:

1. Navigate to Backtesting tool
2. Select pool and time period
3. Choose strategy mode
4. Run simulation
5. Review:
   - Historical APR
   - Rebalancing frequency
   - IL vs fees
   - Comparison to holding

Deploy with confidence knowing expected performance.

### Custom Parameters

Fine-tune for your needs:

**Conservative Customization**:
```
Default zone width: ±25%
Your customization: ±30% (even wider)
Result: Fewer rebalances, ultra-passive
```

**Aggressive Customization**:
```
Default zone width: ±5%
Your customization: ±3% (narrower)
Result: More rebalances, higher efficiency when active
```

## Troubleshooting

### Strategy Underperforming

**Symptom**: APR below expectations

**Possible Causes**:
- Wrong mode for market conditions
- Pool volume decreased
- High volatility (for aggressive mode)

**Solutions**:
- Switch to more appropriate mode
- Move to higher volume pool
- Give strategy more time

### Too Many Rebalances

**Symptom**: High gas costs, frequent rebalancing

**Possible Causes**:
- Aggressive mode in volatile market
- Thresholds set too low

**Solutions**:
- Switch to conservative or dynamic mode
- Increase rebalance threshold
- Widen zone width parameters

### Position Frequently Inactive

**Symptom**: Out of range often

**Possible Causes**:
- Aggressive mode with strong trend
- Zone too narrow for volatility

**Solutions**:
- Switch to wider zone mode
- Use dynamic mode (adapts automatically)
- Consider asymmetric zones (if available)

### Strategy Not Rebalancing

**Symptom**: Price near edge, no rebalance

**Possible Causes**:
- Cooldown period active
- Expected benefit below threshold
- Insufficient gas in wallet

**Solutions**:
- Wait for cooldown to expire
- Check benefit threshold settings
- Ensure $MEGA balance for gas

## Best Practices

### Starting Out

1. **Start Small**: Deploy $500-1,000 initially
2. **Choose Balanced**: Best mode for learning
3. **Monitor Weekly**: Check performance regularly
4. **Give Time**: Allow 30 days before judging

### Ongoing Management

1. **Review Monthly**: Comprehensive performance analysis
2. **Rebalance Modes**: Switch based on market conditions
3. **Compound Fees**: Collect and reinvest quarterly
4. **Stay Diversified**: Multiple strategies across pools

### Risk Management

1. **Position Sizing**: No more than 25% of portfolio per strategy
2. **Mode Selection**: Match risk tolerance
3. **Monitoring**: Set alerts for significant events
4. **Exit Plan**: Know when you'll withdraw (price target, time, or need)

## Performance Optimization

### Maximizing Returns

**Pool Selection**: High volume, appropriate volatility

**Mode Selection**: Aggressive in stable periods, conservative in volatile

**Fee Compounding**: Reinvest monthly for compound growth

**Tax Efficiency**: Consider holding periods and jurisdiction

### Minimizing Costs

**Gas Optimization**: 
- Strategies already optimize rebalancing frequency
- Avoid manual interventions when possible

**Mode Efficiency**:
- Don't use aggressive mode in volatile markets
- Don't use conservative mode in stable markets

### Timing Entries

**Good Times to Deploy**:
- After consolidation (before breakout)
- When IV is low (options cheap for hedging)
- Beginning of month (psychological)

**Avoid Deploying**:
- During extreme volatility
- Right before major events
- When pools have low liquidity

## FAQ

**How hands-off are strategies?**  
Very. Check weekly or monthly. Strategies handle everything else.

**Can I lose money with strategies?**  
Yes. Strategies optimize management but can't eliminate market risk or IL.

**What if I want to exit quickly?**  
Withdraw anytime. No lock periods. Exit in single transaction.

**Do strategies work during crashes?**  
Yes. They rebalance according to rules. Conservative modes handle crashes better.

**Can I pause a strategy?**  
No pause feature. Withdraw funds if you want to stop. Can redeploy anytime.

**Are strategies audited?**  
Yes. All strategy contracts undergo thorough security audits.

## Next Steps

Master automated strategies:

- [Strategy Modes](../strategy-modes.md) - Deep dive into each mode
- [Performance Tracking](../performance-tracking.md) - Monitor results
- [Automated Rebalancing](../automated-rebalancing.md) - Understand mechanics

---

**Automate. Optimize. Profit.**

