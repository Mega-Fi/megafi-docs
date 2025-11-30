# Options Trading

Buy and sell call and put options on major token pairs. Options provide leveraged exposure, hedging capabilities, and defined risk through transparent on-chain pricing.

## At a Glance

- Trade call and put options on major token pairs (ETH, BTC)
- Direct pool-based purchasing with instant premium calculation
- Options as ERC721 NFTs - transferable and composable
- On-chain settlement in USDm
- Defined maximum loss for option buyers

## Option Basics

### What Are Options?

Options give the right, but not obligation, to profit from price movements:

**Call Option**: Profit when price rises above strike price.

**Put Option**: Profit when price falls below strike price.

### Key Terms

**Strike Price**: Price at which profit is calculated.

**Expiration**: Date when option expires.

**Premium**: Price paid upfront to buy the option.

**Underlying**: The token the option is based on (e.g., ETH).


**In-the-Money (ITM)**: Option has profit potential.
- Call: Underlying price > strike
- Put: Underlying price < strike

**Out-of-the-Money (OTM)**: Option has no intrinsic value.
- Call: Underlying price < strike
- Put: Underlying price > strike

**At-the-Money (ATM)**: Underlying price equals strike.

## Strike Prices

Options buyers can choose from 4 different strike prices for their ETH or BTC options contracts:

**Available Strikes**:
- **ATM**: Current market price of ETH or BTC
- **OTM Call Strike #1**: Market Price + 10%
- **OTM Call Strike #2**: Market Price + 20%
- **OTM Call Strike #3**: Market Price + 30%
- **OTM Put Strike #1**: Market Price - 10%
- **OTM Put Strike #2**: Market Price - 20%
- **OTM Put Strike #3**: Market Price - 30%

**Example**: Let's say the market price of ETH is $2,337.

The OTM strikes that will be available for trading are:

For call options:
- $2,337 × 1.1 = $2,571 Strike #1
- $2,337 × 1.2 = $2,804 Strike #2
- $2,337 × 1.3 = $3,038 Strike #3

For put options:
- $2,337 × 0.9 = $2,103 Strike #1
- $2,337 × 0.8 = $1,869 Strike #2
- $2,337 × 0.7 = $1,636 Strike #3

Whenever the price of ETH or BTC changes, the corresponding OTM strikes will follow the market price. The OTM Prices offer a range of -30% — +30% out-of-the-money strikes at any given time.

**Important**: The OTM options can only be exercised if the strike price is reached.

## Buying Options

### Why Buy Options?

**Leverage**: Control large position with small capital.

```
Own 10 ETH: Costs $20,000
Buy 10 call options: Costs $500-800
Exposure: Same upside, 96% less capital
```

**Defined Risk**: Maximum loss = premium paid.

**Hedging**: Protect existing positions.

### Buying Process

1. Navigate to Hedge
2. Select token pair (e.g., ETH/USDm)
3. Choose option type:
   - Call (profit from price increase)
   - Put (profit from price decrease)
4. Enter amount (e.g., 1 ETH)
5. Select strike price (ATM or OTM)
6. Select duration:
   - Minimum: 7 days
   - Maximum: 90 days
   - Common: 7 days, 14 days, 30 days, 90 days
6. Review quote:
   - Premium cost (USDm)
   - Max profit potential
   - Max loss (premium paid)
   - Break-even price
7. Approve USDm spending
8. Confirm purchase
9. Receive option as ERC721 NFT

Premium deducted immediately. Option NFT appears in wallet and portfolio.

### Call Option Example

```
Buy Call:
- Underlying: ETH at $2,000
- Strike: $2,200
- Expiration: 30 days
- Premium: $80 per ETH
- Size: 5 ETH worth

Cost: $80 × 5 = $400

Scenarios at Expiration:

ETH at $1,800:
- Option expires worthless
- Loss: $400 (premium paid)

ETH at $2,200:
- At strike, no profit
- Loss: $400 (premium paid)

ETH at $2,500:
- Profit: ($2,500 - $2,200) × 5 = $1,500
- Net: $1,500 - $400 premium = $1,100
- ROI: 275%

Break-even: $2,280 ($2,200 strike + $80 premium)
```

### Put Option Example

```
Buy Put:
- Underlying: ETH at $2,000
- Strike: $1,800
- Expiration: 30 days
- Premium: $50 per ETH
- Size: 10 ETH worth

Cost: $50 × 10 = $500

Scenarios at Expiration:

ETH at $2,500:
- Option expires worthless
- Loss: $500 (premium paid)

ETH at $1,800:
- At strike, no profit
- Loss: $500 (premium paid)

ETH at $1,500:
- Profit: ($1,800 - $1,500) × 10 = $3,000
- Net: $3,000 - $500 premium = $2,500
- ROI: 500%

Break-even: $1,750 ($1,800 strike - $50 premium)
```

## NFT-Based Positions

Options are ERC721 tokens with unique benefits:

### Transferability

```
Option as NFT:
- Transfer to another wallet
- Sell on NFT marketplaces
- Gift or delegate to others
- Use as collateral (where supported)
```

**No lockup**: Options can be traded anytime before expiry.

### Position Tracking

Each NFT contains option data:

```
Option NFT Metadata:
- Strategy type (Call, Put, Straddle, etc.)
- Underlying asset (ETH, BTC)
- Strike price
- Expiration timestamp
- Amount/size
- Purchase premium
```

Query on-chain via `PositionsManager` contract.

### Composability

NFTs enable DeFi composability:

```
Possible Use Cases:
- Collateralize in lending protocols
- Bundle multiple options in vaults
- Create option indices
- Automated trading strategies
```

## Exercise Mechanics

### Exercise Timing

Options can be exercised before expiration when in-the-money:

```
Option Timeline:
Created → Active Period → Expiry
         └─ Can exercise here (if ITM)
```

### Manual Exercise

Exercise before expiration:

1. Navigate to Portfolio -> Options Positions
2. Check if option is in-the-money
3. Click "Exercise"
4. System calculates profit based on current price
5. Confirm transaction
6. Receive USDm profit
7. NFT burns

**When to exercise**:
- Option is in-the-money
- Want to lock in profits before expiry
- Need liquidity immediately

**OTM Options**: Out-of-the-money options can only be exercised if the strike price is reached.

### Settlement Process

```
Exercise Flow:
1. Exercise submitted
2. Strategy contract queries Chainlink price
3. Profit calculated: max(0, currentPrice - strike) for calls
4. Treasury unlocks liquidity
5. If Treasury insufficient: CoverPool provides backup
6. USDm transferred to option holder
7. Position marked as exercised
8. NFT burns

Total time: < 10ms on MegaETH
```

## Selling Options

Advanced strategy for earning premium income.

### Why Sell Options?

**Premium Income**: Collect premium upfront.

**Statistical Edge**: Most options expire worthless. Sellers profit from time decay.

**Yield on Holdings**: Generate income on assets you already own.

### Risks

**Assignment Risk**: Obligation to fulfill if exercised against you.

**Collateral Requirement**: Must lock assets as collateral.

**Unlimited Risk**: Selling naked calls can have unlimited losses (not recommended).

### Selling Process

1. Navigate to Portfolio -> Options Positions
2. Select strategy and underlying
3. Enter parameters (strike, expiration, amount)
4. Review collateral requirement:
   - **Covered Call**: Must own underlying tokens
   - **Cash-Secured Put**: Must have USDm equal to strike × amount
5. Deposit collateral
6. Review premium received
7. Confirm sale
8. Receive premium immediately
9. Collateral locked until expiry or close

Premium credited immediately. Position shows in portfolio as "sold option."

### Covered Call Example

```
Sell Covered Call:
- Hold: 10 ETH at $2,000
- Sell: 10 ETH calls at $2,200 (30 days)
- Premium: $80 per ETH × 10 = $800

Collateral: 10 ETH (already owned)

Scenarios at Expiration:

ETH at $1,800:
- Option expires worthless
- Keep: 10 ETH + $800 premium
- Unrealized loss on ETH: $2,000
- Net: Loss $1,200 (premium helped cushion)

ETH at $2,100:
- Option expires worthless
- Keep: 10 ETH + $800 premium
- Unrealized gain on ETH: $1,000
- Net: Gain $1,800

ETH at $2,500:
- Buyer exercises option
- Calculate profit: ($2,500 - $2,200) × 10 = $3,000
- You pay: $3,000 from ETH value
- Keep: Original ETH ($20,000) + premium ($800)
- vs Market value: $25,000
- Opportunity cost: $2,200 (missed upside)

Outcome: Generate income, cap upside
```

### Cash-Secured Put Example

```
Sell Cash-Secured Put:
- Underlying: ETH at $2,000
- Sell: 10 ETH puts at $1,800 (30 days)
- Premium: $50 per ETH × 10 = $500

Collateral: $18,000 USDm

Scenarios at Expiration:

ETH at $2,500:
- Option expires worthless
- Keep: $18,000 USDm + $500 premium
- Annualized: ($500 / $18,000) × 12 = 33% APY

ETH at $1,900:
- Option expires worthless
- Keep: $18,000 + $500
- Could have bought ETH cheaper but earned premium

ETH at $1,500:
- Buyer exercises option
- Profit to buyer: ($1,800 - $1,500) × 10 = $3,000
- You pay: $3,000 from collateral
- Effective cost: $18,000 - $500 premium = $17,500
- If you wanted ETH: Got better entry than $1,800

Outcome: Get paid to set limit buy order
```

## Managing Positions

### Position Overview

View all active options in portfolio:

```
Position Dashboard:
- Option ID (NFT token ID)
- Strategy type
- Underlying asset
- Strike price
- Expiration date
- Current profit/loss
- Time remaining
- Exercise availability
```

### Closing Before Expiration

**Bought Option**:
- Transfer/sell NFT on secondary market
- Exercise if in-the-money before expiration
- Let expire if OTM

**Sold Option**:
- Buy back the option to close obligation
- Reduces exposure
- Frees collateral early

### Position Monitoring

Track key metrics:

```
Real-Time Metrics:
- Current P&L
- Break-even price
- Days to expiration
- Probability of profit
```

## Option Strategies

### Single-Leg Strategies

**Long Call**: Bullish speculation or hedging short position.

**Long Put**: Bearish speculation or protecting holdings.

**Covered Call**: Income generation on holdings.

**Cash-Secured Put**: Income while waiting to buy.

### Multi-Leg Strategies

**Straddle (Call + Put, same strike)**:
```
Buy both call and put at $2,000

Profit if:
- Large move either direction
- Volatility increases

Loss if:
- Price stays near strike
- Time decay exceeds moves
```

**Strangle (Call + Put, different strikes)**:
```
Buy $2,200 call + $1,800 put

Lower cost than straddle
Requires larger move to profit
Wider break-even range
```

**Spreads** (Multiple options to limit risk):
- Call Spreads (bull or bear)
- Put Spreads (bull or bear)
- Vertical spreads reduce premium cost

[More strategies →](hedging-strategies.md)


## Premium Calculation

### How Premiums Are Determined

Options priced on-chain using Black-Scholes model:

```
Premium Inputs:
1. Current price (from Chainlink oracle)
2. Strike price (user selected)
3. Time to expiration (user selected)
4. Implied volatility (strategy parameter)
5. Risk-free rate (minimal in DeFi)

Calculation:
Strategy contract computes Black-Scholes formula
Returns premium in USDm (6 decimals)
```

Transparent, deterministic pricing with no hidden fees.

## Transaction Fees

### Fee Structure

**Protocol Fee**: 0.03% of notional value

**Gas Cost**: ~ $0.005 on MegaETH (negligible)

**Total Cost**: Premium + Protocol Fee + Gas

```
Example:
Option: 1 ETH at $2,000
Premium: $80
Protocol Fee: $2,000 × 0.0003 = $0.60
Gas: $0.005
Total: $80.605
```

Ultra-low fees compared to traditional options exchanges.

## FAQ

**What's the minimum trade size?**  
Varies by strategy. Typically 0.1 ETH or equivalent (implementation dependent).

**When can I exercise options?**  
Before expiration when the option is in-the-money. OTM options can only be exercised if the strike price is reached.

**What if option expires OTM?**  
Option expires worthless. You lose the premium paid. NFT becomes inactive.

**Can I sell my option before expiry?**  
Yes. Options are ERC721 NFTs and can be transferred or sold on secondary markets.

**Are there fees to trade options?**  
Small protocol fee (0.03% of notional) + minimal gas (~$0.005 on MegaETH).

**Can I see historical option prices?**  
Yes. On-chain data enables tracking premium values and P&L over time.

**What happens at expiration if I don't exercise?**  
Options expire. If in-the-money, you should exercise before expiration to receive profit. OTM options expire worthless.

**How is profit calculated?**  
Based on Chainlink oracle price at exercise time vs strike price, settled in USDm.

## Next Steps

Deepen options knowledge:

- [Hedging Strategies](hedging-strategies.md) - Protect positions
- [Risk Management](risk-management.md) - Control risk

---

**Trade smart. Trade options.**
