# Risk Management

Understand and control risk in Hedge. Learn about position sizing, liquidity limits, collateral requirements, and safety mechanisms that protect your capital and the protocol.

## At a Glance

- Strategy-level exposure limits prevent over-concentration
- CoverPool provides backup liquidity for settlements
- Exercise windows enforce timing constraints
- Collateral requirements ensure seller solvency
- Real-time risk metrics track exposure
- Treasury safety checks validate every transaction

## Risk Metrics

### Key Measurements

**Position Value**: Current market value of all option positions.

**Notional Exposure**: Total underlying value controlled by options.

```
Example:
10 ETH call options at $2,000/ETH
Notional: 10 × $2,000 = $20,000
Position Value: $800 (premium value)
Leverage: 25x ($20,000 / $800)
```

**Delta Exposure**: Net directional risk.

```
Long 10 calls (delta 0.5 each): +5 ETH delta
Short 5 puts (delta -0.4 each): +2 ETH delta
Net Delta: +7 ETH (equivalent exposure)
```

**Gamma Risk**: Delta change sensitivity.

```
High Gamma: Position delta changes rapidly with price
- Risky near expiration
- Requires active management

Low Gamma: Position delta relatively stable
- Safer for passive holding
```

**Theta**: Daily time decay.

```
Portfolio Theta: -$50
Losing $50/day to time if price unchanged

Option Buyers: Negative theta (time works against)
Option Sellers: Positive theta (time works for)
```

**Vega**: Volatility exposure.

```
Portfolio Vega: +500
If IV rises 1%, portfolio gains $500
If IV falls 1%, portfolio loses $500

Long Options: Positive vega (want volatility)
Short Options: Negative vega (want calm)
```

### Portfolio Greeks

Aggregate metrics across all positions:

```
Portfolio View:
Total Delta: +15 ETH (net long equivalent)
Total Gamma: +2.5 (moderate sensitivity)
Total Theta: -$75/day (time decay cost)
Total Vega: +1,200 (long volatility)

Interpretation:
- Bullish position (positive delta)
- Time working against (negative theta)
- Benefits from volatility increase (positive vega)
```

Interface displays portfolio-level Greeks in real-time on MegaETH.

## Protocol-Level Limits

### Strategy Exposure Limits

Each strategy has maximum locked liquidity:

**Per-Strategy Limit**:
```
Example Configuration:
ETH Call Strategy: 50,000 USDm max locked
ETH Put Strategy: 50,000 USDm max locked
BTC Call Strategy: 30,000 USDm max locked

Purpose: Prevent over-concentration in single strategy
Admin Configurable: Yes, via LimitController
```

**How Limits Work**:
```
Before Option Purchase:
1. Calculate negativePNL (max potential loss)
2. Check: currentLocked + negativePNL ≤ strategyLimit
3. If exceeded: Transaction reverts
4. If within limit: Proceed with purchase

Example:
ETH Call Limit: 50,000 USDm
Currently Locked: 45,000 USDm
New Option: 8,000 USDm negativePNL
Check: 45,000 + 8,000 = 53,000 > 50,000
Result: Transaction fails - limit exceeded
```

**Why Limits Matter**:
- Diversify risk across strategies
- Ensure sufficient liquidity for settlements
- Prevent single-strategy dominance
- Protect liquidity providers

### Treasury Liquidity Checks

OperationalTreasury validates liquidity before every option purchase:

**Safety Formula**:
```
Required:
Treasury Balance + CoverPool Available ≥ 
  Total Locked + Locked Premium + New Option NegativePNL

Components:
- Treasury Balance: Current USDm in Treasury
- CoverPool Available: Backup liquidity from LPs
- Total Locked: Sum of all active option max losses
- Locked Premium: Premiums for active options
- New Option: NegativePNL of option being purchased

If insufficient: Transaction reverts
```

**Example**:
```
Treasury Balance: 100,000 USDm
CoverPool Available: 50,000 USDm
Total Available: 150,000 USDm

Currently Locked: 80,000 USDm
Locked Premium: 15,000 USDm
Benchmark Reserve: 10,000 USDm
Total Committed: 105,000 USDm

New Option NegativePNL: 20,000 USDm

Check: 150,000 ≥ 80,000 + 15,000 + 10,000 + 20,000
       150,000 ≥ 125,000 ✓ Approved

If New Option was 50,000:
       150,000 ≥ 155,000 ✗ Denied
```

### Benchmark Reserve

Treasury maintains reserve capital:

**Purpose**: Safety buffer for unexpected scenarios.

**Mechanism**:
```
Benchmark: Minimum USDm Treasury should maintain
Initial: 0 USDm (zero capital launch)
Growth: 20% of weekly profits retained in Treasury

Example Timeline:
Week 1: $10k profit → $2k to benchmark ($2k total)
Week 2: $15k profit → $3k to benchmark ($5k total)
Week 3: $12k profit → $2.4k to benchmark ($7.4k total)

Over time: Benchmark grows to substantial reserve
```

**Admin Configurable**: Yes, can adjust benchmark target.

## CoverPool Safety Net

### Backup Liquidity

CoverPool provides emergency liquidity:

**How It Works**:
```
Normal Settlement:
1. Option exercised
2. Calculate profit
3. Pay from Treasury balance
4. Complete settlement

If Treasury Insufficient:
1. Option exercised
2. Calculate profit
3. Treasury balance < profit
4. Call coverPool.payOut(deficit)
5. CoverPool transfers USDm to Treasury
6. Complete settlement
```

**Example**:
```
Option Profit: 15,000 USDm
Treasury Balance: 8,000 USDm
Deficit: 7,000 USDm

Flow:
1. Treasury attempts payment
2. Detects insufficient balance
3. Requests 7,000 USDm from CoverPool
4. CoverPool transfers 7,000 USDm
5. Treasury pays full 15,000 USDm to trader
6. Settlement complete

Trader receives full profit, no delays
```

**LP Incentive**: LPs earn 70% of profits in exchange for providing this backup.

### LP Risk Management

Liquidity providers face limited risk:

**Profit Participation**:
```
Weekly Distribution:
- 70% of net profits → LPs
- 20% retained in Treasury
- 10% protocol fee

Net Profit = Premiums Collected - Options Paid Out
```

**Capital Protection**:
```
LP Deposit: 100,000 USDm
Worst Case: All options ITM and exercised

Protection Mechanisms:
1. Strategy limits cap exposure
2. Benchmark reserve provides buffer
3. Diversified strategies reduce concentration
4. Premium income offsets payouts

Realistic Scenario: LPs earn steady returns from premium income
```

**Two-Step Withdrawals**:
```
LPs cannot instant withdraw (prevents gaming):

Step 1: Mark for withdrawal (during 5-day window)
Step 2: Complete withdrawal after epoch ends (7 days min)

Ensures capital stability for option backing
```

## Exercise Window Requirements

### Timing Constraints

Options have strict exercise timing:

**Exercise Window**: 1 hour before expiry.

```
Option Timeline:
Created → Active Period → Exercise Window (1h) → Expiry
                           └─ Can exercise here
                           
Example:
Created: Monday 10:00 AM
Expiry: Monday next week 10:00 AM
Exercise Window: Monday 9:00-10:00 AM

Manual Exercise: Only during 9:00-10:00 AM
Auto-Exercise: At 10:00 AM if ITM
```

**Why the Window?**:
- Prevents gaming the system
- Aligns with epoch profit calculations
- Ensures predictable liquidity needs
- Fair distribution of profits

**Attempting Early Exercise**:
```
If attempt to exercise before window:
- Transaction reverts
- Error: "Exercise window not open"
- Must wait until window opens
```

### Auto-Exercise at Expiration

System automatically exercises profitable options:

**Auto-Exercise Logic**:
```
At Expiration Timestamp:
1. Check if option ITM
2. Calculate profit = max(0, currentPrice - strike)
3. If profit > 0:
   - Execute payoff automatically
   - Transfer USDm to owner
   - Burn NFT
4. If profit = 0:
   - Mark option expired
   - No payment
   - NFT becomes inactive
```

**Benefit**: Holders never lose ITM value by forgetting to exercise.

**Example**:
```
Option: ETH $2,000 call
Expiry: 7 days from creation
Current Price at Expiry: $2,300

Auto-Exercise:
- Profit: ($2,300 - $2,000) per ETH
- Automatically calculated
- USDm profit transferred to holder
- No manual action required
```

## Collateral Requirements

### For Option Sellers

Selling options requires collateral deposit:

**Covered Calls**:
```
Requirement: Must own underlying tokens

Example:
Sell 10 ETH calls:
- Must deposit 10 ETH as collateral
- Collateral locked until expiry or close
- If exercised: ETH used to fulfill obligation

Purpose: Ensure ability to deliver
```

**Cash-Secured Puts**:
```
Requirement: Must hold USDm equal to strike × amount

Example:
Sell 10 ETH $1,800 puts:
- Must deposit $18,000 USDm
- Locked until expiry or close
- If exercised: USDm used for settlement

Purpose: Ensure ability to pay
```

**Naked Selling Not Supported**:
```
Uncollateralized options = unlimited risk
Protocol requires full collateral
Protects both seller and protocol
```

### Collateral Management

**Locked Until Resolution**:
```
Collateral locked from sale through:
1. Option expiry (if OTM), or
2. Option exercise (if ITM), or
3. Buy-back to close position

Cannot withdraw collateral while position open
```

**Margin Calls**:
```
No traditional margin calls in current implementation

Collateral fully locked at sale
No partial liquidations
Clear, defined risk from start
```

## Position Limits

### Account-Level Limits

Prevent excessive concentration per account:

**Notional Limits** (implementation dependent):
```
Example Configuration:
Max Notional per Account: $500,000
Max Contracts per Strategy: 1,000
Max Delta Exposure: ±100 ETH

Purpose: Prevent single account from dominating
```

**Enforcement**:
```
Before Option Purchase:
1. Check account's total notional
2. Check account's contracts in this strategy
3. Check account's net delta
4. If any limit exceeded: Revert

Ensures diversified participant base
```

### Strategy Utilization

Monitor strategy capacity:

**Utilization Ratio**:
```
Utilization = Locked Liquidity / Strategy Limit

Example:
ETH Call Locked: 35,000 USDm
ETH Call Limit: 50,000 USDm
Utilization: 70%

High utilization (>90%): Limited capacity
Low utilization (<50%): Ample capacity
```

**Display to Users**:
```
Strategy Card:
ETH Call Options
Available Capacity: 15,000 USDm (30% remaining)
Current Premium: $80 per ETH

Helps users understand liquidity availability
```

## Real-Time Risk Monitoring

### Live Position Tracking

MegaETH enables continuous risk monitoring:

**Real-Time Updates**:
```
Every relevant event triggers recalculation:
- Price changes (Chainlink updates)
- Position opened/closed
- Time decay (continuous)
- Volatility adjustments

Greeks update continuously, not per block
```

**Dashboard Metrics**:
```
Portfolio Risk View:
Current Value: $15,420
Total Notional: $200,000
Net Delta: +12.3 ETH
P&L Today: +$340 (+2.25%)
Time Decay: -$65/day
Break-Even Move: +3.2%

Updated continuously on MegaETH
```

### Risk Alerts

Monitor key thresholds:

```
Alert Conditions:
- Position approaching expiry (< 24h)
- Delta exposure exceeds target
- Negative P&L threshold reached
- Exercise window opening soon
- Collateral utilization high

Enables proactive risk management
```

## Risk Control Best Practices

### Position Sizing

**Never Over-Leverage**:
```
Conservative: 10-20% of portfolio in options
Moderate: 20-40% in options
Aggressive: 40%+ (high risk)

Example:
Portfolio: $100,000
Max Options Exposure: $20,000 (20%)
Leaves 80% in spot holdings/stable positions
```

**Diversification**:
```
Don't concentrate in single strategy:
- Mix calls and puts
- Different expirations
- Multiple strikes
- Various underlyings

Reduces correlation risk
```

### Hedging Your Hedges

**Delta Neutral Strategies**:
```
If selling options:
- Hedge with opposite positions
- Maintain near-zero delta
- Profit from theta and vega
- Reduce directional risk
```

**Example**:
```
Sell 10 ETH $2,200 calls (delta 0.3): -3 delta
Buy 6 ETH at spot: +6 delta
Net Delta: +3 (partially hedged)

Benefit: Reduced directional exposure
```

### Stop Losses

**Mental Stop Losses**:
```
Set threshold before entering:
"If P&L drops below -$500, close position"

Enforced manually (current implementation)
Prevents emotional decision-making
```

**Example**:
```
Buy option for $800 premium
Stop Loss: -50% = -$400 loss
Close position if value drops to $400
```

## Emergency Scenarios

### High Volatility Events

Protocol handles extreme conditions:

**Scenario: Major Price Crash**:
```
ETH drops 40% in 1 hour

Impact:
- All put options ITM
- Treasury may need full payout capacity
- CoverPool activated for backup

Protection:
- Strategy limits cap max exposure
- Benchmark reserve provides buffer
- CoverPool ensures settlements
- LPs bear some risk (their role)

Result: All settlements completed
```

### Liquidity Crunch

**If capacity reached**:
```
All Strategy Limits Hit:
- No new options can be purchased
- Existing options remain valid
- Wait for options to expire/exercise
- Liquidity freed up gradually
- New capacity becomes available

User Impact: Temporary buying pause
```

## FAQ

**What if Treasury runs out of USDm?**  
CoverPool provides backup liquidity. LPs stake capital specifically for this purpose and earn 70% of profits.

**Can I lose more than my premium as a buyer?**  
No. Maximum loss when buying options = premium paid. Risk is defined and limited.

**What happens if I sell options without collateral?**  
Transaction will revert. Protocol requires full collateral before allowing option sale.

**Are there liquidations?**  
Not in traditional sense. Collateral is locked upfront. If exercised against you, collateral is used for settlement.

**Can the protocol become insolvent?**  
Highly unlikely due to:
- Strategy limits
- Treasury reserves
- CoverPool backup
- Premium income
- Careful risk management

**What if I forget to exercise ITM option?**  
Auto-exercise at expiration ensures you receive profit automatically.

**Can LPs lose their principal?**  
Theoretically yes if payouts exceed premiums long-term, but multiple protection mechanisms make this unlikely. LPs earn from protocol profits and provide backstop in exchange.

**How do I reduce risk?**  
Size positions appropriately, diversify strategies, use stop losses, monitor Greeks, don't over-leverage.

## Next Steps

Deepen risk understanding:

- [Options Trading](options-trading.md) - Understand position mechanics
- [Hedging Strategies](hedging-strategies.md) - Reduce portfolio risk
- [Pricing Models](pricing-models.md) - Evaluate option values

---

**Understand risk. Control outcomes.**
