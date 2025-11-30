# Risk Management

Understand and control risk in Hedge. Learn about position sizing, liquidity limits, collateral requirements, and safety mechanisms that protect your capital and the protocol.

## At a Glance

- CoverPool provides backup liquidity for settlements
- Position sizing helps manage risk
- Diversification reduces concentration

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
1. Diversified strategies reduce concentration
2. Premium income offsets payouts

Realistic Scenario: LPs earn steady returns from premium income
```

**Two-Step Withdrawals**:
```
LPs cannot instant withdraw (prevents gaming):

Step 1: Mark for withdrawal (during 5-day window)
Step 2: Complete withdrawal after epoch ends (7 days min)

Ensures capital stability for option backing
```

## Exercise Requirements

### Timing Constraints

Options can be exercised before expiration:

**Exercise Timing**: Before expiry when in-the-money.

```
Option Timeline:
Created → Active Period → Expiry
         └─ Can exercise here (if ITM)
```

**OTM Options**: Out-of-the-money options can only be exercised if the strike price is reached.


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
- CoverPool ensures settlements
- LPs bear some risk (their role)

Result: All settlements completed
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
- Treasury reserves
- CoverPool backup
- Premium income
- Careful risk management

**What if I forget to exercise ITM option?**  
You should exercise before expiration to receive profit. If you don't exercise, the option expires and you lose the opportunity to claim profit.

**Can LPs lose their principal?**  
Theoretically yes if payouts exceed premiums long-term, but multiple protection mechanisms make this unlikely. LPs earn from protocol profits and provide backstop in exchange.

**How do I reduce risk?**  
Size positions appropriately, diversify strategies, use stop losses, don't over-leverage.

## Next Steps

Deepen risk understanding:

- [Options Trading](options-trading.md) - Understand position mechanics
- [Hedging Strategies](hedging-strategies.md) - Reduce portfolio risk

---

**Understand risk. Control outcomes.**
