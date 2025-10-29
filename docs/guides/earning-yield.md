# Earning Yield

Comprehensive guide to earning passive income on MegaFi through liquidity provision, automated strategies, and options strategies.

## Yield Opportunities

MegaFi offers multiple ways to earn:

### 1. Liquidity Provision

Earn trading fees by providing liquidity to MegaPools.

**Potential APR**: 10-80% depending on pair and strategy
**Risk**: Impermanent loss, smart contract risk
**Time Commitment**: Low (can be passive)
**Minimum**: No minimum (though $100+ recommended for gas efficiency)

[Full LP guide →](../liquidity-layer/providing-liquidity.md)

### 2. Automated Strategies

Deploy algorithm-managed liquidity positions.

**Potential APR**: 20-100% depending on mode and conditions
**Risk**: IL, strategy risk, smart contract risk
**Time Commitment**: Very low (fully automated)
**Minimum**: $500+ recommended

[Strategy guide →](../strategy-layer/overview.md)

### 3. Options Selling

Collect premium by selling covered calls or cash-secured puts.

**Potential APR**: 30-120% annualized from premiums
**Risk**: Opportunity cost (calls), buying obligation (puts)
**Time Commitment**: Medium (active management beneficial)
**Minimum**: Varies by token price

[Options guide →](../risk-layer/options-trading.md)

## Getting Started with LP Yield

### Step 1: Choose a Pool

Select based on:

**Volume**: Higher volume = more fees
- Check 24h volume in pool info
- Target pools with $1M+ daily volume

**Volatility**: Lower volatility = less IL
- Stablecoin pairs: Lowest IL
- Blue chip pairs: Moderate IL
- Alt pairs: Higher IL

**Fee Tier**: Match to volatility
- 0.05%: Stable pairs
- 0.3%: Standard pairs
- 1%: Exotic pairs

**Example Selection**:
```
ETH/USDC (0.3% fee):
- Volume: $5M daily
- Volatility: Moderate
- Expected APR: 25-40%
- Good for: Most LPs
```

### Step 2: Determine Position Size

Start with amount you're comfortable locking up:

**Beginner**: $100 - $1,000
- Learn mechanics
- Low risk exposure
- Test different pools

**Intermediate**: $1,000 - $10,000
- Meaningful returns
- Worth active management
- Diversify across pools

**Advanced**: $10,000+
- Significant yield
- Advanced strategies viable
- Portfolio approach

### Step 3: Select Liquidity Zone

Choose zone width based on management style:

**Passive (Wide Zone ±20-30%)**:
```
ETH at $2,000
Zone: $1,600 - $2,400
Active time: 90-95%
Rebalances: 1-2x per month
APR: 15-25%
```

**Balanced (Medium Zone ±10-15%)**:
```
ETH at $2,000
Zone: $1,800 - $2,200
Active time: 80-90%
Rebalances: 8-12x per month
APR: 25-40%
```

**Active (Narrow Zone ±5-10%)**:
```
ETH at $2,000
Zone: $1,900 - $2,100
Active time: 65-80%
Rebalances: 30-50x per month
APR: 40-80%
```

### Step 4: Add Liquidity

1. Navigate to selected pool
2. Click "Add Liquidity"
3. Set zone boundaries
4. Enter amount
5. Approve both tokens
6. Confirm transaction
7. Receive LP NFT

### Step 5: Monitor and Manage

Track key metrics:

**Daily**: Check if position is in range

**Weekly**: Review fees earned, assess rebalancing need

**Monthly**: Calculate actual APR, compare to alternatives

## Maximizing LP Yield

### Capital Efficiency

Narrow zones earn more per dollar:

```
Wide Zone (±30%):
$10k position
Effective liquidity: $10k
Fees: $5/day
APR: 18%

Narrow Zone (±10%):
$10k position
Effective liquidity: $30k (3x concentrated)
Fees: $15/day
APR: 54%

Narrow earns 3x more when in range
```

### Rebalancing Strategy

When to rebalance:

**Position Out of Range**:
- Zero fees earning
- Rebalance immediately
- Center on new price

**Near Edge (within 10%)**:
- Rebalance proactively
- Avoid going inactive
- Cost: ~$0.01 gas on MegaETH

**Expected Benefit > Cost**:
```
Current zone APR: 20%
Alternative zone APR: 30%
Improvement: +10% = +$2.74/day on $10k
Rebalance cost: $0.01
Payback: 8 minutes
Decision: REBALANCE
```

### Fee Compounding

Reinvest earnings for compound growth:

```
Initial: $10,000
APR: 30%
Compound frequency: Monthly

After 1 year:
No compounding: $13,000
Monthly compounding: $13,483
Extra from compounding: $483 (3.7% bonus)
```

Collect fees monthly and add to position.

### Pool Selection

Diversify across pools:

**Risk Diversification**:
```
40%: Stable pairs (USDC/USDT) - Low risk
40%: Blue chip pairs (ETH/USDC) - Medium risk
20%: Alt pairs - Higher risk, higher reward
```

**Correlation Management**:
- Don't concentrate in correlated pairs
- Mix different token types
- Balance volatile and stable

## Using Automated Strategies

### Why Use Strategies?

Manual management is time-intensive:
- Monitor price 24/7
- Calculate optimal zones
- Execute rebalances quickly
- No emotions or mistakes

Strategies automate everything:
- Algorithms monitor continuously
- Optimal zones calculated automatically
- Rebalances execute in milliseconds
- Consistent, unemotional decisions

### Selecting a Strategy Mode

**Conservative Mode**:
```
Best for: Passive income, volatile markets
Zone width: ±20-30%
Active time: 90-95%
Expected APR: 15-30%
Rebalances: 1-2x/month
Gas cost: ~$0.02/month
```

**Balanced Mode**:
```
Best for: Most users, standard conditions
Zone width: ±10-15%
Active time: 80-90%
Expected APR: 25-45%
Rebalances: 8-12x/month
Gas cost: ~$0.10/month
```

**Aggressive Mode**:
```
Best for: Active optimization, stable markets
Zone width: ±5-10%
Active time: 65-80%
Expected APR: 40-80%
Rebalances: 30-50x/month
Gas cost: ~$0.50/month
```

### Deploying a Strategy

1. Navigate to Strategy Layer
2. Select strategy mode
3. Choose pool
4. Enter capital amount
5. Review expected APR
6. Deploy strategy
7. Monitor performance

Strategy handles all rebalancing automatically.

## Earning Through Options

### Covered Calls

Earn premium on tokens you hold:

**Setup**:
```
Hold: 10 ETH at $2,000
Sell: 10 ETH $2,200 calls (30 days)
Premium: $80 per contract = $800

Monthly Yield: ($800 / $20,000) = 4%
Annualized: 48% APY
```

**Process**:
1. Navigate to Risk Layer
2. Select "Sell Options"
3. Choose covered call
4. Set strike (5-10% above current)
5. Select expiration (30 days typical)
6. Enter size (amount of ETH held)
7. Receive premium immediately

**Management**:
- If price stays below strike: Keep tokens + premium, repeat monthly
- If price exceeds strike: Sell tokens at profit + keep premium

### Cash-Secured Puts

Get paid while waiting to buy:

**Setup**:
```
Want to buy ETH at $1,800 (current $2,000)
Sell: 10 ETH $1,800 puts (30 days)
Premium: $50 per contract = $500
Collateral: $18,000 USDC

Monthly Yield: ($500 / $18,000) = 2.78%
Annualized: 33% APY
```

**Process**:
1. Determine desired entry price
2. Sell puts at that strike
3. Deposit USDC collateral
4. Collect premium
5. If assigned: Buy ETH at desired price
6. If not assigned: Keep premium, repeat

### Weekly Options

Higher annualized yields through shorter duration:

```
30-day call premium: $80 (4% monthly = 48% annual)
7-day call premium: $25 (1.25% weekly = 65% annual)

Weekly options:
- Higher premium per day
- More management required
- Roll every week vs every month
```

## Combining Strategies

### LP + Options Hedge

Protect LP position while earning:

```
LP Position: $20k in ETH/USDC
Monthly LP Fees: $400 (24% APR)

Hedge: Buy 5 ETH $1,800 puts for $250

Net Monthly: $400 - $250 = $150
Annualized: 9% APR (protected)

Downside: Protected below $1,800
Upside: LP fees continue, small hedge cost
```

### Covered Calls on LP NFT Tokens

Earn multiple streams:

```
Provide Liquidity: Earn swap fees
Covered Calls on same tokens: Earn premiums
Total Yield: LP fees + option premiums

Example:
LP Yield: 30% APR
Covered Call Yield: 40% APR
Combined: 70% APR
```

### Strategy + Options

Automated LP + manual options:

```
Strategy: Deploys balanced mode on ETH/USDC
Options: Sell weekly covered calls on ETH

Strategy handles: Rebalancing, zone optimization
You handle: Weekly option rolling

Combined yield: 60-90% APR
Time investment: 10 min/week
```

## Risk Management

### Position Sizing

Never allocate 100% to single strategy:

**Conservative Portfolio**:
```
50%: Stable pair LPs
30%: Blue chip LPs
15%: Options strategies
5%: Cash for opportunities
```

**Aggressive Portfolio**:
```
30%: Conservative strategy LPs
40%: Aggressive strategy LPs
25%: Options selling
5%: Speculative positions
```

### Impermanent Loss Awareness

Understand IL before committing:

```
ETH $2,000 → $2,500 (+25%):
LP Position IL: -0.6%
Hold Strategy: +25%
Difference: 25.6% underperformance

Must earn 25.6% from fees to break even
At 30% APR: Need 10 months of fees
```

For volatile pairs, IL risk is significant. Consider:
- Hedging with options
- Using stable pairs
- Accepting IL as cost of fee earnings

### Diversification

Spread risk:

**Across Pools**: 3-5 different pairs minimum

**Across Strategies**: Mix manual and automated

**Across Timeframes**: Some short-term (options), some long-term (LP)

**Across Risk Levels**: Balance stable and volatile

## FAQ

**What's a realistic APR for beginners?**  
15-30% with conservative strategies. 30-50% with moderate strategies.

**How much time does LP management take?**  
Manual: 1-2 hours/week. Automated: 10 min/month. Options: 30 min/week.

**When should I collect fees?**  
When fees > $50 or when rebalancing position. Otherwise, let accumulate.

**Can I lose money providing liquidity?**  
Yes. IL can exceed fee earnings, especially in volatile markets.

**Which strategy earns the most?**  
Aggressive strategy + options in stable market conditions. 80-120% APR possible.

**Is it better to LP or just hold tokens?**  
Depends. Bull market: Holding often better. Sideways market: LP often better.

## Next Steps

Start earning:

- [Providing Liquidity](../liquidity-layer/providing-liquidity.md) - Begin LP journey
- [Using Strategies](using-strategies.md) - Deploy automated strategies
- [Options Trading](../risk-layer/options-trading.md) - Add option yield

---

**Make your capital work for you.**

