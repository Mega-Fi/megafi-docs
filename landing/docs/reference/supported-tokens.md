# Supported Tokens

List of tokens supported on MegaFi. Includes native tokens, bridged tokens, and available trading pairs.

## At a Glance

- All major tokens supported via bridge
- New tokens added regularly
- Community can request listings
- All tokens are ERC-20 on MegaETH
- Verified tokens displayed in interface

## Native MegaETH Tokens

### MEGA

**Name**: MEGA
**Symbol**: MEGA
**Decimals**: 18
**Type**: Native gas token
**Address**: Native (no contract)

Used for:
- Transaction gas fees
- Network security
- Governance (future)

### Wrapped MEGA

**Name**: Wrapped MEGA
**Symbol**: WMEGA
**Decimals**: 18
**Type**: ERC-20 wrapped native token
**Address**: [TO BE ANNOUNCED]

Used for:
- Trading in pools
- DeFi integrations
- Smart contract interactions

## Bridged Stablecoins

### USD Coin

**Name**: USD Coin
**Symbol**: USDC
**Decimals**: 6
**Bridged From**: Ethereum
**Address**: [TO BE ANNOUNCED]

**Pools**: USDC/USDT (0.05%), ETH/USDC (0.3%), WBTC/USDC (0.3%)

### Tether USD

**Name**: Tether USD
**Symbol**: USDT
**Decimals**: 6
**Bridged From**: Ethereum
**Address**: [TO BE ANNOUNCED]

**Pools**: USDC/USDT (0.05%), ETH/USDT (0.3%)

### Dai Stablecoin

**Name**: Dai Stablecoin
**Symbol**: DAI
**Decimals**: 18
**Bridged From**: Ethereum
**Address**: [TO BE ANNOUNCED]

**Pools**: DAI/USDC (0.05%), ETH/DAI (0.3%)

## Major Cryptocurrencies

### Wrapped Ethereum

**Name**: Wrapped Ethereum
**Symbol**: WETH
**Decimals**: 18
**Bridged From**: Ethereum
**Address**: [TO BE ANNOUNCED]

**Pools**: ETH/USDC (0.3%), ETH/USDT (0.3%), WBTC/ETH (0.3%)

### Wrapped Bitcoin

**Name**: Wrapped Bitcoin
**Symbol**: WBTC
**Decimals**: 8
**Bridged From**: Ethereum
**Address**: [TO BE ANNOUNCED]

**Pools**: WBTC/ETH (0.3%), WBTC/USDC (0.3%)

## DeFi Blue Chips

### Chainlink

**Name**: Chainlink
**Symbol**: LINK
**Decimals**: 18
**Bridged From**: Ethereum
**Address**: [TO BE ANNOUNCED]

**Pools**: LINK/ETH (0.3%), LINK/USDC (0.3%)

### Uniswap

**Name**: Uniswap
**Symbol**: UNI
**Decimals**: 18
**Bridged From**: Ethereum
**Address**: [TO BE ANNOUNCED]

**Pools**: UNI/ETH (0.3%)

### Aave

**Name**: Aave
**Symbol**: AAVE
**Decimals**: 18
**Bridged From**: Ethereum
**Address**: [TO BE ANNOUNCED]

**Pools**: AAVE/ETH (0.3%)

## Available Pools

### High Liquidity Pools (0.3%)

```
ETH/USDC - Primary pair, highest volume
WBTC/ETH - Major crypto pair
ETH/USDT - Alternative stable pair
WBTC/USDC - BTC to stable
LINK/ETH - DeFi blue chip
```

### Stable Pairs (0.05%)

```
USDC/USDT - Stablecoin swap
DAI/USDC - Stablecoin swap
```

### Exotic Pairs (1%)

```
Various long-tail tokens
Check interface for current list
```

## Token Requirements

### For Listing

**Technical Requirements**:
- ERC-20 compliant
- Deployed on Ethereum or supported L2
- Contract verified on origin chain
- Reasonable liquidity on origin chain

**Business Requirements**:
- Active development
- Community support
- No legal issues
- Reasonable market cap

### Request Listing

Submit token listing request:


**Required Information**:
- Token contract address (origin chain)
- Project description
- Security information
- Community links
- Proposed liquidity

**Timeline**: 2-4 weeks for evaluation

## Bridging Tokens

### Supported Source Chains

**Ethereum Mainnet**:
- Bridge time: 5-15 minutes
- Cost: $2-10
- Supported: All standard ERC-20 tokens

**Arbitrum**:
- Bridge time: 3-8 minutes
- Cost: $0.50-2
- Supported: Major tokens

**Base**:
- Bridge time: 3-8 minutes
- Cost: $0.30-1.50
- Supported: Major tokens

**Optimism**:
- Bridge time: 4-10 minutes
- Cost: $0.40-2
- Supported: Major tokens


## Token Safety

### Verified Tokens

Tokens with verification badge:
- Contract verified
- Team known
- Active development
- No major issues

### Unverified Tokens

Tokens without badge:
- Exercise caution
- Do your own research
- Understand risks
- Start with small amounts

### Scam Warning

Watch for:
- Tokens impersonating others
- Unverified contracts
- Unusual token behavior
- Too-good-to-be-true promises

**If Suspicious**: Report to contact@megafi.app

## Token Information

### In Interface

For each token, interface shows:
- Name and symbol
- Current price
- 24h change
- 24h volume
- Available pools
- Your balance

### On Block Explorer

Verify token details:
- Contract address
- Total supply
- Holder distribution
- Transaction history

Visit: [explorer.megaeth.io](https://explorer.megaeth.io)

## Adding Custom Tokens

### Import Token

Add tokens not in default list:

1. Click token selector
2. Select "Import Token"
3. Enter contract address
4. Verify token details
5. Confirm import
6. Token appears in your list

**Warning**: Only import tokens you trust. Verify contract address from official sources.

### Remove Token

Hide unwanted tokens from interface:

1. Click token selector
2. Find token in list
3. Click "Hide"
4. Confirm

Doesn't affect balances, only visibility.

## Liquidity Incentives

### Current Programs

Some pools may have liquidity mining:

**Check**: Each pool page shows active incentives

**Rewards**: Additional tokens beyond trading fees

**Duration**: Varies by program

### Future Incentives

Planned incentive programs:
- New pool bootstrapping
- Strategic partnerships
- Ecosystem growth initiatives

Announcements on:
- Discord
- X
- In-app notifications

## Tokenomics

### MEGA Token (Future)

Planned utility:
- Governance voting
- Protocol fee discounts
- Exclusive features
- Staking rewards

**Status**: Tokenomics design in progress

**Launch**: TBA

## FAQ

**How do I know which tokens are safe?**  
Verified badge indicates vetted and verified. Always DYOR.

**Can I trade any ERC-20 token?**  
Only if it's bridged to MegaETH and has liquidity. Check pool availability.

**How are new tokens added?**  
Community requests, team selection, or automatic listing with sufficient liquidity.

**What if my token isn't listed?**  
Bridge it to MegaETH and request listing via form.

**Are token prices accurate?**  
Yes. Real-time pricing from on-chain pools. Verified against external oracles.

**Can I create a pool for any token pair?**  
Yes. Permissionless pool creation. Anyone can create pools.

**What's the minimum liquidity for new pool?**  
Technical minimum: 1 wei. Practical minimum: $1,000+ for functionality.

## Next Steps

Start trading:

- [Swapping Guide](../dex/swapping.md) - Trade tokens
- [Providing Liquidity](../dex/providing-liquidity.md) - Earn fees
- [Options Trading](../hedge/options-trading.md) - Trade options

---

**Trade what matters.**

