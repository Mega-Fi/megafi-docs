# Hedging Strategies

Protect your portfolio from adverse price movements using options-based hedging strategies. Learn how to hedge liquidity positions, token holdings, and manage overall portfolio risk.

## At a Glance

- Hedge LP positions against impermanent loss
- Protect token holdings from downside
- Generate income while maintaining protection
- Combine multiple strategies for complex risk profiles
- Pool-based execution with instant settlement
- Real-time hedge effectiveness tracking
- Strategies organized by market sentiment

## Why Hedge?

### Risk Without Hedging

```
LP Position: $20k in ETH/USDm
ETH drops 30%: $2,000 → $1,400

Impermanent Loss: -$1,800
LP Fees Earned: +$200
Net Loss: -$1,600

Unhedged portfolio suffers full IL
```

### Risk With Hedging

```
LP Position: $20k in ETH/USDm
Hedge: Buy 5 ETH puts at $1,800 for $250

ETH drops 30%: $2,000 → $1,400

Impermanent Loss: -$1,800
LP Fees Earned: +$200
Put Option Profit: ($1,800 - $1,400) × 5 = +$2,000
Hedge Cost: -$250
Net: +$150

Hedged portfolio protected and profitable
```

## Strategies by Sentiment

### Bullish Strategies

Strategies for when you expect prices to rise.

#### Call

**Status**: Available

**Description**: High profits if the price rises sharply.

**Use Case**: Bullish outlook, expect significant upward price movement.

**Setup**:
```
Buy: 10 ETH $2,200 calls (30 days)
Premium: $80 per ETH = $800 total

Execution:
1. Select ETH Call strategy
2. Enter 10 ETH amount
3. Select 30-day duration
4. Review premium: $800
5. Approve USDm
6. Purchase option
7. Receive option NFT
```

**Payoff**:
```
ETH at $1,800:
- Call expires worthless: -$800
- Net loss: -$800 (premium paid)

ETH at $2,200:
- Call at break-even: $0
- Net: -$800 (premium cost)

ETH at $2,500:
- Call profit: ($2,500 - $2,200) × 10 = +$3,000
- Premium cost: -$800
- Net gain: +$2,200
```

**When to Use**:
- Strong bullish conviction
- Expect significant price increase
- Willing to pay premium for leveraged upside

#### Strap

**Status**: Coming Soon

**Description**: High profits if the price rises sharply, reasonable profits if the price falls.

**Use Case**: Expect high volatility with bullish bias.

**Structure**:
```
Buy: 2 calls + 1 put at same strike
Example: 2 ETH $2,000 calls + 1 ETH $2,000 put
```

**Payoff**:
```
Price rises: 2x call exposure, high profits
Price falls: 1x put exposure, moderate profits
Price stays flat: Loss premium (time decay)
```

**When to Use**:
- Expect volatility with upward bias
- Want asymmetric upside exposure
- Accept higher premium cost

#### Bull Call Spread

**Status**: Coming Soon

**Description**: Low cost, decent profits if the price rises to a certain level.

**Use Case**: Moderately bullish, want to limit cost.

**Structure**:
```
Buy: 1 ETH $2,000 call for $80
Sell: 1 ETH $2,200 call for $40
Net Cost: $40
```

**Payoff**:
```
ETH < $2,000: Lose $40 (net premium)
ETH = $2,200: Max profit $200 - $40 = $160
ETH > $2,200: Profit capped at $160
```

**When to Use**:
- Moderately bullish
- Want lower cost than straight call
- Accept capped upside

#### Bull Put Spread

**Status**: Coming Soon

**Description**: Low cost, decent profits if the price stays at a certain level or rises.

**Use Case**: Neutral to bullish, want to collect premium.

**Structure**:
```
Sell: 1 ETH $1,800 put for $50
Buy: 1 ETH $1,700 put for $20
Net Credit: $30
```

**Payoff**:
```
ETH > $1,800: Keep $30 credit (max profit)
ETH = $1,800: Keep $30 credit
ETH < $1,700: Max loss $100 - $30 = $70
```

**When to Use**:
- Neutral to bullish
- Want to collect premium
- Accept limited downside risk

### Bearish Strategies

Strategies for when you expect prices to fall.

#### Put

**Status**: Available

**Description**: High profits if the price falls sharply.

**Use Case**: Bearish outlook, expect significant downward price movement.

**Setup**:
```
Buy: 10 ETH $1,800 puts (30 days)
Premium: $50 per ETH = $500 total

Execution:
1. Select ETH Put strategy
2. Enter 10 ETH amount
3. Select 30-day duration
4. Review premium: $500
5. Approve USDm
6. Purchase option
7. Receive option NFT
```

**Payoff**:
```
ETH at $2,200:
- Put expires worthless: -$500
- Net loss: -$500 (premium paid)

ETH at $1,800:
- Put at break-even: $0
- Net: -$500 (premium cost)

ETH at $1,500:
- Put profit: ($1,800 - $1,500) × 10 = +$3,000
- Premium cost: -$500
- Net gain: +$2,500
```

**When to Use**:
- Strong bearish conviction
- Expect significant price decrease
- Want to protect holdings or profit from decline

#### Strip

**Status**: Coming Soon

**Description**: High profits if the price falls sharply, reasonable profits if the price rises.

**Use Case**: Expect high volatility with bearish bias.

**Structure**:
```
Buy: 2 puts + 1 call at same strike
Example: 2 ETH $2,000 puts + 1 ETH $2,000 call
```

**Payoff**:
```
Price falls: 2x put exposure, high profits
Price rises: 1x call exposure, moderate profits
Price stays flat: Loss premium (time decay)
```

**When to Use**:
- Expect volatility with downward bias
- Want asymmetric downside exposure
- Accept higher premium cost

#### Bear Put Spread

**Status**: Coming Soon

**Description**: Low cost, decent profits if the price falls to a certain level.

**Use Case**: Moderately bearish, want to limit cost.

**Structure**:
```
Buy: 1 ETH $1,800 put for $50
Sell: 1 ETH $1,700 put for $20
Net Cost: $30
```

**Payoff**:
```
ETH > $1,800: Lose $30 (net premium)
ETH = $1,700: Max profit $100 - $30 = $70
ETH < $1,700: Profit capped at $70
```

**When to Use**:
- Moderately bearish
- Want lower cost than straight put
- Accept capped downside profit

#### Bear Call Spread

**Status**: Coming Soon

**Description**: Low cost, decent profits if the price stays at a certain level or falls.

**Use Case**: Neutral to bearish, want to collect premium.

**Structure**:
```
Sell: 1 ETH $2,200 call for $40
Buy: 1 ETH $2,300 call for $20
Net Credit: $20
```

**Payoff**:
```
ETH < $2,200: Keep $20 credit (max profit)
ETH = $2,200: Keep $20 credit
ETH > $2,300: Max loss $100 - $20 = $80
```

**When to Use**:
- Neutral to bearish
- Want to collect premium
- Accept limited upside risk

### High Volatility Strategies

Strategies for when you expect significant price movement in either direction.

#### Straddle

**Status**: Coming Soon

**Description**: High profits if the price rises or falls sharply during the period of holding.

**Use Case**: Expect large price movement, direction unknown.

**Structure**:
```
Buy: 1 ETH $2,000 call for $80
Buy: 1 ETH $2,000 put for $50
Net Cost: $130
```

**Payoff**:
```
ETH at $2,000: Lose $130 (both expire worthless)
ETH at $1,700: Put profit $300 - $130 = $170
ETH at $2,300: Call profit $300 - $130 = $170
```

**When to Use**:
- Expect high volatility
- Direction uncertain
- Willing to pay premium for protection both ways

#### Strangle

**Status**: Coming Soon

**Description**: Low cost, very high profits if the price rises or falls significantly.

**Use Case**: Expect large price movement, want lower cost than straddle.

**Structure**:
```
Buy: 1 ETH $2,200 call for $40
Buy: 1 ETH $1,800 put for $30
Net Cost: $70
```

**Payoff**:
```
ETH between $1,800-$2,200: Lose $70 (both expire worthless)
ETH at $1,500: Put profit $300 - $70 = $230
ETH at $2,500: Call profit $300 - $70 = $230
```

**When to Use**:
- Expect high volatility
- Want cheaper alternative to straddle
- Accept need for larger move to profit

### Low Volatility Strategies

Strategies for when you expect prices to stay relatively stable.

#### Long Butterfly

**Status**: Coming Soon

**Description**: Low cost, high profits if the price is about a strike price.

**Use Case**: Expect price to stay near current level.

**Structure**:
```
Buy: 1 ETH $1,900 call for $120
Sell: 2 ETH $2,000 calls for $80 each = $160
Buy: 1 ETH $2,100 call for $50
Net Cost: $10
```

**Payoff**:
```
ETH at $2,000: Max profit $100 - $10 = $90
ETH < $1,900 or > $2,100: Max loss $10
```

**When to Use**:
- Expect low volatility
- Price expected to stay near strike
- Want defined risk and reward

#### Long Condor

**Status**: Coming Soon

**Description**: Decent profits if the price changes slightly.

**Use Case**: Expect price to stay within a range.

**Structure**:
```
Buy: 1 ETH $1,900 call for $120
Sell: 1 ETH $2,000 call for $80
Sell: 1 ETH $2,100 call for $50
Buy: 1 ETH $2,200 call for $30
Net Cost: $20
```

**Payoff**:
```
ETH between $2,000-$2,100: Max profit $100 - $20 = $80
ETH < $1,900 or > $2,200: Max loss $20
```

**When to Use**:
- Expect low volatility
- Price expected to stay in range
- Want wider profit zone than butterfly

## Core Hedging Applications

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
5. Approve USDm
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
8. Receive $800 USDm
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
LP Position: $20k in ETH/USDm pool (10 ETH worth)
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
Start: 10 ETH + $20,000 USDm at $2,000/ETH
LP Share: $40,000

ETH drops to $1,500:
Pool rebalances: 11.55 ETH + $17,320 USDm
LP Value: $34,640

vs HODLing: 10 ETH ($15,000) + $20,000 = $35,000
IL: $360

If more volatile swing: IL increases
```

### Hedge Strategy for LPs

**Full Protection**:
```
LP Position: $40k (10 ETH + $20k USDm)
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
Currently manual. Auto-Pools integration may enable automated hedging strategies in future.

**What if I can't afford to hedge?**  
Use cheaper strategies: OTM options, collars (premium offset), or accept some risk unhedged.

**When will "Coming Soon" strategies be available?**  
Additional strategies are planned for future releases. Follow official channels for updates.

## Next Steps

Apply hedging strategies:

- [Options Trading](options-trading.md) - Execute hedge trades
- [Risk Management](risk-management.md) - Understand risk controls
- [Pricing Models](pricing-models.md) - Calculate optimal hedge sizing

---

**Protect your portfolio. Trade with confidence.**
