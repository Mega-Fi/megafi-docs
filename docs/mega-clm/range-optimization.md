# Range Optimization

Deep dive into how Strategy Layer algorithms calculate optimal Liquidity Zones for maximum fee earnings and capital efficiency.

## At a Glance

- Algorithms analyze price history, volatility, and volume to determine optimal zones
- Multiple optimization approaches: statistical, machine learning, and rule-based
- Factors include recent price action, volume distribution, and gas costs
- Zone calculations happen in real-time using MegaETH's continuous data
- Different modes use different optimization strategies
- Backtesting validates optimization effectiveness

## Optimization Goals

Optimal zones balance multiple objectives:

### Maximize Fee Earnings

Concentrate liquidity where trading occurs:

```
Volume Distribution (ETH/USDC):
$1,900 - $1,950: 5% of volume
$1,950 - $2,000: 25% of volume
$2,000 - $2,050: 40% of volume
$2,050 - $2,100: 25% of volume
$2,100 - $2,150: 5% of volume

Optimal Zone: $1,975 - $2,075 (captures 90% of volume)
```

### Maximize Active Time

Choose zones that price is likely to remain within:

```
Price typically ranges: $1,800 - $2,200 (90% of time)
Current price: $2,000

Too Narrow: $1,990 - $2,010 (active only 30% of time)
Too Wide: $1,000 - $3,000 (active 100% but inefficient)
Optimal: $1,900 - $2,100 (active 80% of time, 5x efficiency)
```

### Minimize Rebalancing Costs

Wider zones require less frequent adjustment:

```
Narrow Zone: $1,980 - $2,020
Rebalances needed: 30/month
Gas cost: $0.30/month

Wide Zone: $1,800 - $2,200
Rebalances needed: 2/month
Gas cost: $0.02/month

Net benefit depends on fee improvement vs gas savings
```

### Minimize Impermanent Loss

Wider zones and certain shapes reduce IL:

```
Full Range: Lowest IL
Narrow Zone: Higher IL
Asymmetric Zone: IL depends on price direction
```

## Optimization Algorithms

### Statistical Approach

Use historical data to predict future price behavior:

**Input Data**:
- Price history (1-30 days depending on mode)
- Volatility metrics
- Volume by price range
- Time-of-day patterns

**Calculations**:

1. **Mean Price**: Average price over lookback period.

2. **Standard Deviation**: Price volatility measure.

3. **Confidence Interval**: Price range containing X% of observations.

```
Mean: $2,000
Std Dev: $100
95% Confidence: $2,000 ± (1.96 × $100) = $1,804 - $2,196

Conservative Mode Zone: Use 95% confidence interval
Balanced Mode Zone: Use 80% confidence interval  
Aggressive Mode Zone: Use 50% confidence interval
```

4. **Volume-Weighted Price**: Where most trading occurs.

5. **Support/Resistance**: Historical price levels with high activity.

**Output**: Zone boundaries with expected active time and fee earnings.

### Machine Learning Approach

Train models on historical pool data:

**Training Data**:
- Thousands of historical positions
- Their zones, fees earned, active time
- Market conditions during each period

**Model**:
- Neural network predicts optimal zone for current conditions
- Input: Current price, volatility, volume, time factors
- Output: Recommended zone boundaries and expected performance

**Validation**:
- Backtest predictions vs actual outcomes
- Refine model with new data continuously

**Used By**: Dynamic Mode and custom strategies.

### Rule-Based Approach

Expert-designed rules based on market principles:

```
IF volatility > 5% daily
THEN use wide zone (±25%)
ELSE IF volatility < 2% daily
THEN use narrow zone (±5%)
ELSE use medium zone (±12%)

IF volume concentrated (80% in 10% price range)
THEN narrow zone around concentration
ELSE wide zone

IF trend detected
THEN asymmetric zone favoring trend direction
ELSE symmetric zone
```

**Used By**: All modes as baseline, especially Conservative.

## Optimization Process

### Step 1: Data Collection

Gather recent market data:

```
Price samples: Every 1 minute for past 7 days
Volume data: Hourly buckets
Volatility: Rolling calculations
```

MegaETH's real-time state enables accurate data collection.

### Step 2: Feature Extraction

Calculate relevant metrics:

**Price Features**:
- Current price
- Moving averages (1h, 6h, 24h, 7d)
- Price momentum
- Trend direction
- Support/resistance levels

**Volatility Features**:
- Standard deviation (1h, 6h, 24h)
- Average true range
- Bollinger band width
- Volatility trend

**Volume Features**:
- Current 24h volume
- Volume by price bucket
- Volume trend
- Liquidity distribution

### Step 3: Zone Proposal

Generate candidate zones:

```
Candidate 1: $1,900 - $2,100 (statistical, 80% CI)
Candidate 2: $1,950 - $2,050 (volume-weighted)
Candidate 3: $1,850 - $2,150 (ML model suggestion)
Candidate 4: $2,000 - $2,200 (asymmetric, bullish)
```

Each mode generates different candidates.

### Step 4: Simulation

Simulate each candidate's performance:

```
FOR EACH candidate zone:
  Simulate over recent 7 days:
    Calculate fees that would have been earned
    Calculate active time
    Calculate rebalancing frequency
    Calculate net return after gas
  
  Score = (Fees - Gas) × Active_Time × Efficiency_Factor
```

### Step 5: Selection

Choose highest-scoring zone:

```
Candidate 1 Score: 85
Candidate 2 Score: 92 <-- SELECTED
Candidate 3 Score: 88
Candidate 4 Score: 79

Use Candidate 2: $1,950 - $2,050
```

### Step 6: Validation

Final checks before deployment:

- Zone width within mode parameters
- Expected improvement > threshold
- No recent identical rebalance (cooldown)
- Gas cost justified by benefit

## Zone Characteristics

### Symmetric Zones

Centered on current price:

```
Current: $2,000
Lower: $1,900 (-5%)
Upper: $2,100 (+5%)
```

**Pros**: Balanced for uncertain direction.

**Cons**: May exit range quickly if trend strong.

**Used By**: Conservative and Balanced modes by default.

### Asymmetric Zones

Favor one direction:

```
Bullish Bias:
Current: $2,000
Lower: $1,950 (-2.5%)
Upper: $2,100 (+5%)

Position stays active longer during uptrend
```

**Pros**: Better performance if direction correct.

**Cons**: Wrong bias means quick exit from range.

**Used By**: Aggressive and Dynamic modes when trend detected.

### Dynamic Width

Width adjusts to volatility:

```
Low Volatility Period:
Zone: $1,975 - $2,025 (narrow, ±1.25%)

High Volatility Period:
Zone: $1,800 - $2,200 (wide, ±10%)

Width adaptation keeps position active across market regimes
```

**Used By**: Dynamic Mode primarily.

## Real-World Optimization

### Example: Conservative Mode

```
Pool: ETH/USDC
Current Price: $2,000
Strategy: Conservative
Lookback: 30 days

Data Analysis:
- Mean price: $1,980
- Std dev: $120
- 95% CI: $1,745 - $2,215
- Volume: Distributed relatively evenly

Zone Calculation:
Lower: $1,750 (below 95% CI)
Upper: $2,250 (above 95% CI)
Width: ±12.5%

Expected Outcome:
- Active time: 95%
- Capital efficiency: 4x
- Rebalances: 1-2 per month
- APR: 18%
```

### Example: Aggressive Mode

```
Pool: ETH/USDC
Current Price: $2,000
Strategy: Aggressive
Lookback: 7 days

Data Analysis:
- Mean price: $2,005
- Std dev: $45
- 50% CI: $1,955 - $2,055
- Volume: 70% between $1,980-$2,020

Zone Calculation:
Lower: $1,975 (volume concentration lower bound)
Upper: $2,035 (volume concentration upper bound)
Width: ±1.5%

Expected Outcome:
- Active time: 65%
- Capital efficiency: 12x
- Rebalances: 40-50 per month
- APR: 55% (when active)
```

### Example: Dynamic Mode

```
Pool: ETH/USDC
Current Price: $2,000
Strategy: Dynamic
Current Volatility: Medium (3% daily)

Analysis:
- Volatility increasing from 2% to 3%
- Trend: Slight bullish bias
- Volume: Standard distribution

Zone Calculation:
Lower: $1,920 (slightly wider due to volatility increase)
Upper: $2,120 (asymmetric upward due to trend)
Width: -4% / +6%

As volatility changes, width will adjust automatically
```

## Optimization Constraints

Algorithms respect limits:

### Zone Width Limits

```
Mode      | Min Width | Max Width
----------|-----------|----------
Conservative| 15%      | 50%
Balanced    | 8%       | 25%
Aggressive  | 2%       | 10%
Dynamic     | 3%       | 30%
```

Prevents extreme zones that violate mode philosophy.

### Rebalance Frequency Limits

```
Mode      | Min Cooldown | Max Per Day
----------|--------------|------------
Conservative| 12 hours    | 2
Balanced    | 1 hour      | 12
Aggressive  | 30 minutes  | 24
Dynamic     | 1 hour      | 18
```

Prevents over-optimization and excessive gas costs.

### Benefit Thresholds

```
Mode      | Min Net Benefit
----------|----------------
Conservative| $5
Balanced    | $2
Aggressive  | $0.50
Dynamic     | $1
```

Only rebalance when improvement justifies cost.

## Backtesting

Test optimization strategies:

### Historical Simulation

```
1. Select pool and time period (e.g., ETH/USDC, Q4 2024)
2. Choose Strategy Mode
3. Run simulation:
   - Deploy strategy at period start
   - Algorithm rebalances when triggered
   - Track fees, gas, active time
4. Compare to:
   - Manual management
   - Other Strategy Modes
   - Full-range position
```

### Performance Metrics

Backtests show:

- Total fees earned
- Total gas spent
- Net return
- Active time %
- Number of rebalances
- Max drawdown (IL)

Validate optimization effectiveness before deploying capital.

## FAQ

**Can I customize optimization parameters?**  
Advanced users can adjust some parameters. Most users should use defaults.

**How often do algorithms recalculate optimal zones?**  
Continuously. Every minute, algorithms check if rebalancing would improve position.

**Do algorithms account for gas costs?**  
Yes. Never rebalance unless expected benefit exceeds gas cost by threshold.

**What if algorithms make wrong prediction?**  
Strategies include stop-loss and can be exited anytime. Wrong predictions cost gas but position remains.

**Are optimization strategies public?**  
High-level logic is documented. Exact implementation details are proprietary.

**Can I see why algorithm chose specific zone?**  
Yes. Interface shows factors considered and expected performance.

## Next Steps

Apply optimization concepts:

- [Strategy Modes](strategy-modes.md) - See optimization in different modes
- [Automated Rebalancing](automated-rebalancing.md) - How rebalancing executes
- [Performance Tracking](performance-tracking.md) - Monitor optimization results

---

**Mathematics meets markets.**

