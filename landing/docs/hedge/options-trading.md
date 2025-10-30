# Options Trading

Buy and sell call and put options on major token pairs. Options provide leveraged exposure, hedging capabilities, and income generation through premium collection.

## At a Glance

- Trade call and put options on major token pairs
- RFQ system provides competitive pricing from market makers
- Real-time execution with sub-10ms settlement on MegaETH
- Covered calls and cash-secured puts for yield generation
- Protective puts for hedging and risk management
- Defined maximum loss for option buyers

## Option Basics

### What Are Options?

Options give the right, but not obligation, to buy or sell a token at a specific price:

**Call Option**: Right to BUY token at strike price.

**Put Option**: Right to SELL token at strike price.

### Key Terms

**Strike Price**: Price at which you can exercise the option.

**Expiration**: Date when option expires (becomes worthless if not exercised).

**Premium**: Price paid to buy the option or received when selling.

**Underlying**: The token the option is based on (e.g., ETH).

**In-the-Money (ITM)**: Option has intrinsic value.
- Call: Underlying price > strike
- Put: Underlying price < strike

**Out-of-the-Money (OTM)**: Option has no intrinsic value, only time value.
- Call: Underlying price < strike
- Put: Underlying price > strike

**At-the-Money (ATM)**: Underlying price equals strike.

## Buying Options

### Why Buy Options?

**Leverage**: Control large position with small capital.

```
Own 10 ETH: Costs $20,000
Buy 10 call options: Costs $800
Exposure: Same upside, 96% less capital
```

**Defined Risk**: Maximum loss = premium paid.

**Hedging**: Protect existing positions.

### Buying Process

1. Navigate to Hedge → Options
2. Select token pair (e.g., ETH/USDC)
3. Choose option type:
   - Call (bullish or selling covered)
   - Put (bearish or protective)
4. Set strike price:
   - ITM strikes: Higher premium, more likely to profit
   - ATM strikes: Balanced risk/reward
   - OTM strikes: Lower premium, less likely to profit
5. Choose expiration:
   - Daily: High gamma, fast decay
   - Weekly: Standard term
   - Monthly: Longer-term plays
6. Enter size (number of contracts)
7. Review quote:
   - Premium cost
   - Greeks (delta, gamma, theta, vega)
   - Break-even price
   - Max profit/loss
8. Confirm purchase

Premium deducted immediately. Option appears in your positions.

### Call Option Example

```
Buy Call:
- Underlying: ETH at $2,000
- Strike: $2,200
- Expiration: 30 days
- Premium: $80 per contract
- Size: 5 contracts

Cost: $80 × 5 = $400

Scenarios at Expiration:

ETH at $1,800:
- Option expires worthless
- Loss: $400 (premium paid)

ETH at $2,200:
- At strike, no intrinsic value
- Loss: $400 (premium paid)

ETH at $2,500:
- Intrinsic value: $300 per contract
- Exercise: Receive 5 ETH for $11,000 ($2,200 × 5)
- Market value: $12,500
- Profit: $1,500 - $400 premium = $1,100
- ROI: 275%

Break-even: $2,280 ($2,200 strike + $80 premium)
```

### Put Option Example

```
Buy Put:
- Underlying: ETH at $2,000
- Strike: $1,800
- Expiration: 30 days
- Premium: $50 per contract
- Size: 10 contracts

Cost: $50 × 10 = $500

Scenarios at Expiration:

ETH at $2,500:
- Option expires worthless
- Loss: $500 (premium paid)

ETH at $1,800:
- At strike, no intrinsic value
- Loss: $500 (premium paid)

ETH at $1,500:
- Intrinsic value: $300 per contract
- Exercise: Sell 10 ETH for $18,000 ($1,800 × 10)
- Market value: $15,000
- Profit: $3,000 - $500 premium = $2,500
- ROI: 500%

Break-even: $1,750 ($1,800 strike - $50 premium)
```

## Selling Options

### Why Sell Options?

**Premium Income**: Collect premium upfront.

**Statistical Edge**: Most options expire worthless. Sellers win probabilistically.

**Generate Yield**: Extra income on held assets.

### Risks

**Assignment Risk**: May be forced to buy/sell underlying at unfavorable prices.

**Collateral Requirement**: Must lock capital as collateral.

### Selling Process

1. Navigate to Sell Options
2. Select token pair and option type
3. Set strike and expiration
4. Enter size
5. Review collateral requirement:
   - Covered: Must own underlying (e.g., hold ETH to sell calls)
   - Cash-secured: Must have USDC (e.g., hold USDC to sell puts)
6. Deposit collateral
7. Review premium received
8. Confirm sale

Premium credited immediately. Position shows in sold options.

### Covered Call Example

```
Sell Covered Call:
- Hold: 10 ETH at $2,000
- Strike: $2,200
- Expiration: 30 days
- Premium: $80 per contract × 10 = $800

Collateral: 10 ETH (already owned)

Scenarios at Expiration:

ETH at $1,800:
- Option expires worthless
- Keep: 10 ETH + $800 premium
- Unrealized loss on ETH: $2,000
- Net: Loss $1,200 (but premium helped)

ETH at $2,100:
- Option expires worthless
- Keep: 10 ETH + $800 premium
- Unrealized gain on ETH: $1,000
- Net: Gain $1,800

ETH at $2,500:
- Option exercised against you
- Sell 10 ETH at $2,200 ($22,000)
- Plus premium: $800
- Total: $22,800
- vs Holding: $25,000
- Missed upside: $2,200

Outcome: Generate income, cap upside
```

### Cash-Secured Put Example

```
Sell Cash-Secured Put:
- Underlying: ETH at $2,000
- Strike: $1,800
- Expiration: 30 days
- Premium: $50 per contract × 10 = $500

Collateral: $18,000 USDC

Scenarios at Expiration:

ETH at $2,500:
- Option expires worthless
- Keep: $18,000 USDC + $500 premium
- Annualized: ($500 / $18,000) × 12 = 33% APY

ETH at $1,900:
- Option expires worthless
- Keep: $18,000 + $500
- Could have bought ETH cheaper but made premium

ETH at $1,500:
- Assigned: Buy 10 ETH at $1,800
- Cost: $18,000
- Market value: $15,000
- Loss: $3,000
- But received $500 premium
- Net cost basis: $1,750/ETH ($18,000 - $500) / 10
- Still underwater but better than $1,800

Outcome: Get paid to wait for desired entry price
```

## Managing Positions

### Closing Before Expiration

Bought option:
1. Click position
2. Select "Sell to Close"
3. Receive current market price
4. Lock in profit or cut loss

Sold option:
1. Click position
2. Select "Buy to Close"
3. Pay current market price
4. Close obligation and free collateral

### Rolling Positions

Extend expiration by closing current and opening new:

```
Current: ETH $2,000 call expiring in 3 days, worth $50
Roll: Close for $50, open $2,000 call 30 days out for $100
Net cost: $50 to extend position
```

Automated roll available: Set parameters and system rolls automatically.

### Early Exercise

Exercise options before expiration when beneficial:

1. Click "Exercise" on ITM option
2. System calculates intrinsic value
3. Confirm exercise
4. Receive payout instantly

Usually better to sell option than exercise early (preserves time value), but flexibility exists.

## Option Strategies

### Single-Leg Strategies

**Long Call**: Bullish speculation.

**Long Put**: Bearish speculation or hedging.

**Covered Call**: Income on holdings.

**Cash-Secured Put**: Income while waiting to buy.

### Combined Strategies

**Collar (Protective Put + Covered Call)**:
```
Risk management strategy:
- Hold underlying asset
- Buy protective put (downside protection)
- Sell covered call (generate income)
- Net cost reduced or zero

Example:
Hold 10 ETH at $2,000
Buy $1,800 put for $50
Sell $2,200 call for $80
Net credit: $30 per ETH

Result: Protected between $1,800-$2,200 with income
```

**Note**: Advanced multi-leg strategies like vertical spreads, iron condors, and butterflies may be added in future releases. Current focus is on core strategies: covered calls, cash-secured puts, protective puts, and collars.

[More hedging strategies →](hedging-strategies.md)

## Greeks and Risk Metrics

### Delta

Price sensitivity:

```
Delta 0.5 means:
- If ETH moves $1 up, option value increases $0.50
- If ETH moves $1 down, option value decreases $0.50

Call options: Delta 0 to 1
Put options: Delta -1 to 0
```

Use delta for position sizing:

```
Want 10 ETH delta exposure:
Buy 10 calls with 0.5 delta = 5 delta
Need 20 contracts for 10 delta (20 × 0.5)
```

### Gamma

Delta sensitivity:

```
Gamma 0.02 means:
- If ETH moves $1 up, delta increases by 0.02
- Position becomes more sensitive to further moves

High gamma: Near ATM, short dated
Low gamma: Deep ITM/OTM, long dated
```

### Theta

Time decay:

```
Theta -2 means:
- Option loses $2 value per day
- All else equal

Option buyers: Negative theta (lose from time)
Option sellers: Positive theta (profit from time)
```

### Vega

Volatility sensitivity:

```
Vega 5 means:
- If IV increases 1%, option value increases $5
- If IV decreases 1%, option value decreases $5

Long options: Positive vega (want volatility)
Short options: Negative vega (want calm)
```

Interface displays all Greeks in real-time.

## FAQ

**What's the minimum trade size?**  
0.1 contracts (0.1 ETH notional).

**Can I exercise options before expiration?**  
Most options can be closed or exercised before expiration. Check specific option terms when trading.

**What if I don't have tokens to deliver on assigned put?**  
Position automatically closes at market with P&L settled in USDC.

**Are there fees to trade options?**  
Small trading fee (0.03% of notional) + minimal gas (~ $0.005).

**Can I see historical option prices?**  
Yes. Charts show price, implied volatility, and Greeks over time.

**What happens at expiration if I do nothing?**  
ITM options auto-exercise. OTM options expire worthless.

## Next Steps

Apply options knowledge:

- [Hedging Strategies](hedging-strategies.md) - Protect positions
- [Risk Management](risk-management.md) - Control risk
- [Pricing Models](pricing-models.md) - Understand valuations

---

**Trade smart. Trade options.**

