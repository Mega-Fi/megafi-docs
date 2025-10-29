# Understanding Fees

Comprehensive breakdown of all fees on MegaFi. Learn what you pay, where fees go, and how to minimize costs.

## Fee Types

### Trading Fees

Paid by swappers to liquidity providers:

**0.05% Tier**: Stable pairs (USDC/USDT, DAI/USDC)

**0.3% Tier**: Standard pairs (ETH/USDC, WBTC/ETH)

**1% Tier**: Exotic pairs (new tokens, low liquidity)

**Example**:
```
Swap $10,000 ETH for USDC (0.3% fee):
Fee: $30
You receive: $9,970 worth of USDC
LPs earn: $30 (distributed proportionally)
```

### Gas Fees

Paid to MegaETH validators in $MEGA:

**Swaps**:
- Simple swap: $0.001 - $0.003
- Multi-hop swap: $0.003 - $0.005

**Liquidity Operations**:
- Add liquidity: $0.003 - $0.005
- Remove liquidity: $0.003 - $0.005
- Collect fees: $0.002 - $0.003

**Options**:
- Buy option: $0.003 - $0.005
- Sell option: $0.005 - $0.007
- Exercise: $0.003 - $0.005

**Comparison to Other Chains**:
```
Operation: Add Liquidity

Ethereum Mainnet: $50 - $150
Arbitrum: $0.50 - $2.00
Base: $0.10 - $0.50
MegaETH: $0.003 - $0.005

MegaETH is 10,000x+ cheaper than Ethereum
```

### Protocol Fees

**MegaFi Protocol Fee**: 0%

100% of trading fees go directly to liquidity providers. No protocol cut.

## Fee Breakdown by Activity

### Swapping

**What You Pay**:
```
Swap Amount: $10,000
Trading Fee (0.3%): $30
Gas: $0.003
Total Cost: $30.003
Effective Rate: 0.30003%
```

**Where It Goes**:
- Trading Fee: Liquidity providers in that pool
- Gas: MegaETH validators

### Providing Liquidity

**Initial Deposit**:
```
Approve Token A: $0.005
Approve Token B: $0.005
Add Liquidity: $0.005
Total First-Time: $0.015
Subsequent Adds: $0.005 (no re-approval)
```

**Ongoing**:
- No maintenance fees
- Strategy rebalancing: $0.01 per rebalance
- Fee collection: $0.003

**Withdrawal**:
```
Remove Liquidity: $0.005
Collect Fees (if not auto): $0.003
Total: $0.005 - $0.008
```

**Example Position Lifecycle**:
```
Deposit $10,000: $0.015 gas
Hold 30 days, strategy rebalances 10x: $0.10 gas
Withdraw: $0.005 gas
Total Gas Cost: $0.12

Fees Earned: $250
Net: $249.88 (gas = 0.05% of earnings)
```

### Options Trading

**Buying Options**:
```
Option Premium: $500
Trading Fee (0.03% of notional): $6
Gas: $0.005
Total Cost: $506.005

Premium goes to option seller
Trading fee to protocol (supports infrastructure)
```

**Selling Options**:
```
Deposit Collateral: $0.005
Sell Option: $0.007
Premium Received: $500
Net Received: $499.988 (after gas)
```

**Exercise**:
```
Exercise: $0.005
Settlement: Included
Total: $0.005
```

## Fee Comparison

### Swap Fees vs Competitors

```
$10,000 Swap:

MegaFi (0.3%): $30.00 + $0.003 gas = $30.003
Competitor A: $30.00 + $2.50 gas = $32.50
Competitor B: $30.00 + $50 gas = $80.00
MEGA DEX: example cost breakdown

MegaFi savings vs Ethereum: $99.997 (77%)
```

### LP Fees vs Competitors

```
Add $10k Liquidity + 10 Rebalances + Withdraw:

MegaFi: $0.12 total gas
Competitor A (L2): $5 - $10
Competitor B (L2): $8 - $15
Ethereum: $300 - $600

For $10k earning 30% APR = $3,000/year:
MegaFi gas: 0.004% of earnings
Ethereum gas: 10-20% of earnings
```

## Minimizing Fees

### For Swappers

**1. Batch Transactions**:
```
Instead of: 5 separate $2k swaps
Do: 1 combined $10k swap
Gas Savings: 4x transactions worth
```

**2. Use Direct Routes**:
```
Direct: ETH → USDC (one 0.3% fee)
Multi-hop: ETH → WBTC → USDC (two fees)

Choose pairs with direct pools when possible
```

**3. Monitor Price Impact**:
```
Large trade high impact: Split into smaller trades
Often saves more than extra gas costs
```

**4. Time Your Trades**:
```
Avoid swapping during:
- Extreme volatility (wider spreads)
- Low liquidity periods

Gas on MegaETH is constant, but execution price varies
```

### For Liquidity Providers

**1. Minimize Rebalancing**:
```
Use appropriate zone width:
- Volatile market: Wide zones
- Stable market: Narrow zones

Wrong width = excessive rebalancing = higher gas
```

**2. Batch Operations**:
```
Instead of: Collect fees every week
Do: Collect monthly or at withdrawal

Saves: $0.003 × 3 = $0.009/month
```

**3. Use Strategies Efficiently**:
```
Conservative mode: $0.02/month gas
Aggressive mode: $0.50/month gas

Choose based on expected benefit
If aggressive earns 10% more = $250 on $10k:
$0.48 extra gas is worth it
```

**4. Compound Smartly**:
```
Collect + re-add fees: $0.008

Only compound when:
Fees > $50 (gas becomes < 0.02% of amount)
Or quarterly regardless of size
```

### For Options Traders

**1. Use Longer Expirations**:
```
Weekly options: Roll 4x/month = $0.028 gas
Monthly options: Roll 1x/month = $0.007 gas
Savings: $0.021/month
```

**2. Batch Strategies**:
```
Instead of: Buy call, then buy put separately
Do: Buy both in multi-leg order
Gas: Single transaction
```

**3. Let Auto-Exercise Work**:
```
Manual exercise: $0.005
Auto-exercise: Free
Use auto-exercise for ITM options at expiration
```

## Fee Earnings (For LPs)

### How Fees Accumulate

Every swap through your Liquidity Zone:

```
Your Share of Pool: 10%
Swap through pool: $100,000
Trading fee (0.3%): $300
Your earnings: $30

Accumulates continuously in position
```

### Fee APR Calculation

```
Position Value: $10,000
Monthly Fees: $250
Annual Fees: $3,000
APR: 30%

Actual APR varies with:
- Trading volume
- Your zone's active time
- Pool liquidity (your share)
```

### Collecting Fees

**Automatic**: Collected when removing liquidity

**Manual**: Click "Collect Fees" anytime
- Cost: $0.003
- Worthwhile when fees > $10

**Strategy**: Let accumulate, collect quarterly or at withdrawal

## Hidden Costs

### Impermanent Loss

Not a fee, but a cost:

```
Start: $10,000 position
End: $9,700 position value
IL: -$300
Fees Earned: +$400
Net: +$100

IL is implicit cost of providing liquidity
```

### Opportunity Cost

Capital locked in LP vs other uses:

```
LP Position: 30% APR
Alternative (staking): 8% APR
Difference: +22% (LP better)

But if market pumps 100%:
Holding: +100%
LP: +62% (after IL)
Opportunity cost: 38%
```

### Slippage

Not a fee, but impacts execution:

```
Expected: 1000 USDC for 1 ETH
Actual: 998 USDC (0.2% slippage)
Implicit cost: $2
```

## Tax Implications

Fees may be taxable (consult tax professional):

**Trading Fees**: Reduce cost basis

**LP Fees Earned**: May be ordinary income

**Gas Fees**: May be deductible

**Impermanent Loss**: May create taxable event when rebalancing

Keep records of all transactions for tax reporting.

## FAQ

**Why do some pools have higher fees?**  
Higher volatility = higher risk for LPs = higher fees needed to compensate.

**Where do trading fees go?**  
100% to liquidity providers in that pool, distributed by share.

**Can fees change?**  
Fee tiers are fixed per pool. New pools can use different tiers.

**Are gas fees refunded if transaction fails?**  
No. Gas consumed even on failed transactions. Ensure parameters are correct.

**Do I pay fees to exit a position?**  
Only gas fees. No exit penalties or protocol fees.

**How do I see total fees paid?**  
Transaction history shows all fees. Export for detailed analysis.

## Next Steps

Optimize your costs:

- [Swapping Tokens](swapping-tokens.md) - Minimize swap costs
- [Providing Liquidity](../providing-liquidity.md) - Maximize fee earnings
- [Using Strategies](using-strategies.md) - Efficient automation

---

**Know your costs. Maximize your profit.**

