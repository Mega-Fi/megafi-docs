# Hedging Strategies

Protect your portfolio from adverse price movements using options-based hedging strategies. Learn how to hedge liquidity positions, token holdings, and manage overall portfolio risk.

## At a Glance

- Hedge LP positions against impermanent loss
- Protect token holdings from downside
- Generate income while maintaining protection
- Combine multiple strategies for complex risk profiles
- Pool-based execution with instant settlement
- Real-time hedge effectiveness tracking

## Why Hedge?

### Risk Without Hedging

```
LP Position: $20k in ETH/USDC
ETH drops 30%: $2,000 → $1,400

Impermanent Loss: -$1,800
LP Fees Earned: +$200
Net Loss: -$1,600

Unhedged portfolio suffers full IL
```

### Risk With Hedging

```
LP Position: $20k in ETH/USDC
Hedge: Buy 5 ETH puts at $1,800 for $250

ETH drops 30%: $2,000 → $1,400

Impermanent Loss: -$1,800
LP Fees Earned: +$200
Put Option Profit: ($1,800 - $1,400) × 5 = +$2,000
Hedge Cost: -$250
Net: +$150

Hedged portfolio protected and profitable
```

## Core Hedging Strategies

### Protective Put

Buy put options to protect holdings:

**Use Case**: Hold tokens long-term but want downside protection.

**Setup**:
```
Hold: 10 ETH at $2,000
Buy: 10 ETH $1,800 puts (30 days)
Premium: $50 per ETH = $500 total

Execution:
1. Select ETH Put strategy
2. Enter 10 ETH amount
3. Select 30-day duration
4. Review premium: $500
5. Approve USDC
6. Purchase option
7. Receive option NFT
```

**Payoff**:
```
ETH at $1,500:
- Holding loss: -$5,000
- Put profit: ($1,800 - $1,500) × 10 = +$3,000
- Premium cost: -$500
- Net loss: -$2,500 (50% protected)

ETH at $2,500:
- Holding gain: +$5,000
- Put expires worthless: -$500
- Net gain: +$4,500
```

**When to Use**:
- Uncertain short-term outlook
- Want to hold through volatility
- Can afford protection cost (2.5% in this example)

### Covered Call

Sell call options against holdings for income:

**Use Case**: Generate yield on holdings you're willing to sell at higher price.

**Setup**:
```
Hold: 10 ETH at $2,000
Sell: 10 ETH $2,200 calls (30 days)
Premium: $80 per ETH = $800 total

Execution:
1. Navigate to Sell Options
2. Select ETH Call strategy
3. Enter 10 ETH amount
4. Duration: 30 days
5. Deposit 10 ETH as collateral
6. Review premium: $800
7. Confirm sale
8. Receive $800 USDC
```

**Payoff**:
```
ETH at $1,800:
- Holding loss: -$2,000
- Call premium: +$800
- Net loss: -$1,200 (income cushioned fall)

ETH at $2,100:
- Holding gain: +$1,000
- Call premium: +$800
- Net gain: +$1,800

ETH at $2,500:
- Holding gain: +$5,000
- Call exercised: Pay ($2,500 - $2,200) × 10 = -$3,000
- Premium received: +$800
- Net gain: +$2,800 (capped upside)
```

**When to Use**:
- Neutral to moderately bullish outlook
- Want additional income on holdings
- Comfortable selling at strike price

### Collar

Combine protective put and covered call:

**Use Case**: Zero-cost or low-cost protection by offsetting put cost with call income.

**Setup**:
```
Hold: 10 ETH at $2,000
Buy: 10 ETH $1,800 puts for $50/ETH = $500
Sell: 10 ETH $2,200 calls for $80/ETH = $800
Net Credit: $300 ($800 - $500)

Execution:
1. Buy puts (as protective put above)
2. Sell calls (as covered call above)
3. Net premium received: $300
```

**Payoff**:
```
ETH at $1,500:
- Holding loss: -$5,000
- Put profit: +$3,000
- Call expires: $0
- Net premium: +$300
- Total: -$1,700 (downside capped)

ETH at $2,100:
- Holding gain: +$1,000
- Put expires: $0
- Call expires: $0
- Net premium: +$300
- Total: +$1,300

ETH at $2,500:
- Holding gain: +$5,000
- Put expires: $0
- Call exercised: -$3,000
- Net premium: +$300
- Total: +$2,300 (upside capped)
```

**Benefit**: Protected downside ($1,800 floor), capped upside ($2,200 ceiling), plus $300 income.

### LP Position Hedging

Protect liquidity provider positions:

**Use Case**: Hedge impermanent loss in DEX pools.

**Setup**:
```
LP Position: $20k in ETH/USDC pool (10 ETH worth)
Risk: IL if ETH price moves significantly

Hedge Options:

Option A - Protective Puts:
Buy 10 ETH $1,800 puts for $500
Protects against downside IL

Option B - Straddle:
Buy straddle at $2,000 for $1,000
Protects against IL from moves in either direction

Option C - Strangle:
Buy $1,800 put + $2,200 call for $600
Cheaper, requires larger move
```

**Execution (Straddle)**:
```
1. Select ETH Straddle strategy
2. Enter 5 ETH amount (half of LP exposure)
3. Duration: 14 days
4. Review premium
5. Purchase straddle NFT
```

**Payoff (Straddle at $2,000)**:
```
ETH stays at $2,000:
- IL: Minimal
- LP fees: +$200
- Straddle loss: -$1,000
- Net: -$800 (cost of insurance)

ETH moves to $1,500:
- IL: -$1,800
- LP fees: +$200
- Put profit: ($2,000 - $1,500) × 5 = +$2,500
- Straddle cost: -$1,000
- Net: -$100 (nearly break-even)

ETH moves to $2,500:
- IL: -$1,800
- LP fees: +$200
- Call profit: ($2,500 - $2,000) × 5 = +$2,500
- Straddle cost: -$1,000
- Net: -$100 (nearly break-even)
```

**Result**: IL largely offset by option gains during large price moves.

## Advanced Strategies

### Ratio Spread

Unequal number of long and short options:

**Example**:
```
Buy 1 ETH $2,000 call for $80
Sell 2 ETH $2,200 calls for $40 each = $80
Net Cost: $0

Payoff:
ETH < $2,000: Lose nothing (zero cost)
ETH = $2,200: Profit $200 on long call
ETH > $2,200: Profit capped, potential losses on excess short calls

Use: Moderate bullish view, want free upside to a point
```

### Calendar Spread

Same strike, different expirations:

**Example**:
```
Sell 1 ETH $2,000 call (7 days) for $60
Buy 1 ETH $2,000 call (30 days) for $100
Net Cost: $40

Payoff:
Short-term call expires → Theta profit
Long-term call retains value → Keep upside exposure

Use: Expect short-term stability, long-term move
```

### Butterfly Spread

Three strikes, limited risk and reward:

**Example**:
```
Buy 1 ETH $1,900 call: $120
Sell 2 ETH $2,000 calls: $80 × 2 = $160
Buy 1 ETH $2,100 call: $50
Net Cost: $10

Max Profit: At $2,000 at expiration
Max Loss: $10 (net premium)

Use: Expect price to stay near $2,000
```

## Hedging Calculations

### Hedge Ratio

Determine optimal hedge size:

**Delta Hedging**:
```
Portfolio: 10 ETH ($20,000)
Target: Fully hedged (delta-neutral)

Put delta: -0.4
Required puts: 10 / 0.4 = 25 contracts

Result: 25 put options hedge 10 ETH position
```

**Partial Hedging**:
```
Portfolio: 10 ETH
Target: 50% hedged

Required puts: (10 × 0.5) / 0.4 = 12.5 contracts
Round to: 13 contracts

Result: Protects half of position
```

### Cost-Benefit Analysis

Evaluate hedge effectiveness:

```
Position: 10 ETH at $2,000 = $20,000
Hedge: Buy 10 puts at $1,800 for $500

Hedge Cost: $500 / $20,000 = 2.5% of position
Protection: From $2,000 to $1,800 = $200/ETH
Unprotected: $1,800 to $0 = $1,800/ETH

Analysis:
- Spend 2.5% to protect 10% ($200 of $2,000)
- Below $1,800, still exposed
- If held 30 days, costs 30% annualized

Decision: Worth it if 10%+ drop likely
```

### Rolling Hedges

Extend protection continuously:

**Strategy**:
```
Week 1: Buy 7-day puts for $30
Week 2: Old puts expire, buy new 7-day puts for $30
Week 3: Repeat

Cost: $30/week = ~$120/month
Benefit: Continuous protection
vs One-Time: 30-day puts cost $50 upfront
```

**Execution**:
```
1. Set calendar reminder before expiry
2. Check position still needs hedging
3. Purchase new options with same parameters
4. Maintain continuous protection layer
```

## Dynamic Hedging

### Adjusting to Market Conditions

**High Volatility Environment**:
```
Premiums expensive → Options cost more
Strategy: Use collars (offset costs)
Or: Buy further OTM options (cheaper)
Or: Accept less protection
```

**Low Volatility Environment**:
```
Premiums cheap → Good buying opportunity
Strategy: Buy more protection
Or: Longer duration options
Or: Tighter strike spreads
```

### Rebalancing Hedges

Maintain desired protection level:

**Example**:
```
Initial:
- Portfolio: 10 ETH at $2,000
- Hedge: 10 puts at $1,800 (delta -0.4)
- Net delta: +6 ETH

After ETH drops to $1,900:
- Portfolio: 10 ETH at $1,900
- Put delta increases to -0.6
- Net delta: +4 ETH

Action: Sell some puts or buy calls to rebalance
```

**MegaETH Advantage**: Real-time Greeks enable precise rebalancing.

## Hedging LP Positions

### Understanding IL Risk

Impermanent loss occurs when prices diverge:

```
Start: 10 ETH + $20,000 USDC at $2,000/ETH
LP Share: $40,000

ETH drops to $1,500:
Pool rebalances: 11.55 ETH + $17,320 USDC
LP Value: $34,640

vs HODLing: 10 ETH ($15,000) + $20,000 = $35,000
IL: $360

If more volatile swing: IL increases
```

### Hedge Strategy for LPs

**Full Protection**:
```
LP Position: $40k (10 ETH + $20k USDC)
Hedge: Buy 5 ETH straddle at $2,000

Cost: $500
Protection: Both upward and downward IL
```

**Partial Protection**:
```
LP Position: $40k
Hedge: Buy 5 ETH $1,800 puts

Cost: $250
Protection: Downside IL only
Bet: Upside IL offset by LP fees
```

**Income Strategy**:
```
LP Position: $40k
Hedge: Sell 5 ETH $2,200 calls

Income: $400
Risk: Upside IL less protected
Benefit: Reduce hedge costs
```

## Execution on MegaFi

### Pool-Based Advantages

**Instant Execution**:
```
Traditional Options: Submit order, wait for fill
MegaFi: Calculate premium, approve, purchase (<10ms)

Benefit: No execution risk, instant protection
```

**Transparent Pricing**:
```
Premium calculation on-chain
Chainlink price feeds
No bid-ask spread
What you see is what you pay
```

**NFT Transferability**:
```
Hedge no longer needed?
Transfer/sell option NFT
Recover some premium cost
```

## Risk Considerations

### Hedge Costs

Hedging isn't free:

```
Cost of Protection:
- Premiums paid reduce returns
- Need asset to move enough to justify cost
- Time decay works against long options

Example:
Pay $500 to protect $20,000 (2.5%)
Need 2.5% adverse move just to break even on hedge
```

### Over-Hedging

Too much protection hurts returns:

```
Portfolio: 10 ETH
Hedge: 10 puts (fully hedged)

Result:
ETH rises: Miss most of upside (paid premium)
ETH falls: Protected, but expensive insurance

Better: 50% hedged for balanced approach
```

### Timing

Hedge effectiveness depends on timing:

```
Buy puts before crash: Effective protection
Buy puts after crash: Late, expensive, less useful

Strategy: Maintain continuous rolling hedges
```

## FAQ

**How much should I hedge?**  
Depends on risk tolerance. Conservative: 75-100%. Moderate: 50%. Aggressive: 25% or less.

**Are hedges worth the cost?**  
If the move happens, yes. It's insurance - you hope you don't need it, but glad when you have it.

**Can I adjust hedges after purchase?**  
Yes. Options are NFTs and can be sold. Add or remove positions as conditions change.

**Should I hedge LP positions?**  
If IL risk concerns you, yes. Hedging makes LP positions more attractive by capping downside.

**How do I know if my hedge is working?**  
Monitor portfolio P&L including hedge positions. Effective hedge reduces volatility of total P&L.

**Can hedges be automated?**  
Currently manual. CLM integration may enable automated hedging strategies in future.

**What if I can't afford to hedge?**  
Use cheaper strategies: OTM options, collars (premium offset), or accept some risk unhedged.

## Next Steps

Apply hedging strategies:

- [Options Trading](options-trading.md) - Execute hedge trades
- [Risk Management](risk-management.md) - Understand risk controls
- [Pricing Models](pricing-models.md) - Calculate optimal hedge sizing

---

**Protect your portfolio. Trade with confidence.**
