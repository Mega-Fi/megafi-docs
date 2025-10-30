# Glossary

Comprehensive glossary of MegaFi terminology. Quick reference for understanding protocol concepts and technical terms.

## A

**AMM (Automated Market Maker)**: Algorithm that prices assets and enables trading without traditional order books. In MegaFi, see DEX.

**APR (Annual Percentage Rate)**: Annualized return rate. Example: 30% APR means earning 30% per year at current rate.

**Arbitrage**: Profiting from price differences between markets. MegaETH's speed makes micro-arbitrage viable.

**At-the-Money (ATM)**: Option where strike price equals current underlying price.

## B

**Basis Point (bp)**: 0.01%. Example: 30 basis points = 0.3%.

**Block Explorer**: Website to view blockchain transactions and addresses. MegaETH: [explorer.megaeth.io](https://explorer.megaeth.io)

**Bridge**: System for transferring assets between blockchains. Used to move tokens to MegaETH.

## C

**Call Option**: Right to buy token at strike price. Bullish instrument.

**Capital Efficiency**: How effectively capital generates returns. Concentrated liquidity improves this.

**Collateral**: Assets locked to secure a position. Required for selling options.

**Concentrated Liquidity**: Providing liquidity in specific price ranges. Core feature of MegaPools.

**Continuous Execution**: MegaETH's architecture processing transactions immediately rather than in blocks.

## D

**Delta**: Options Greek measuring price sensitivity. Delta 0.5 means option moves $0.50 per $1 underlying move.

**DeFi (Decentralized Finance)**: Financial services on blockchain without intermediaries.

**DEX**: MegaFi's trading interface for token swaps and routing.

## E

**ERC-20**: Token standard on Ethereum and compatible chains. Most tokens are ERC-20.

**ERC-721**: NFT standard. LP positions are ERC-721 tokens.

**Expiration**: Date when options become invalid if not exercised.

**EVM (Ethereum Virtual Machine)**: Execution environment for smart contracts. MegaETH is EVM-compatible.

## F

**Fee Tier**: Trading fee percentage for a pool. MegaFi tiers: 0.05%, 0.3%, 1%.

**Finality**: Point when transaction is confirmed and irreversible. MegaETH: < 10ms.

**Front-Running**: Placing transaction ahead of another to profit. Minimized on MegaETH by speed.

## G

**Gamma**: Options Greek measuring delta sensitivity. High gamma means delta changes rapidly.

**Gas**: Fee paid to execute blockchain transactions. On MegaETH: < $0.005 typically.

**Greeks**: Options risk metrics. Delta, gamma, theta, vega, rho.

## H

**Hedging**: Reducing risk by taking offsetting positions. Options commonly used for hedging.

## I

**IL**: See Impermanent Loss.

**Impermanent Loss**: Difference between holding tokens vs providing liquidity. Caused by price divergence.

**In-the-Money (ITM)**: Profitable option. Call: price > strike. Put: price < strike.

**Intrinsic Value**: Option's immediate exercise value. ITM options have intrinsic value.

## L

**Layer 2 (L2)**: Blockchain built on top of Ethereum to improve speed/cost. MegaETH is an L2.

**Leverage**: Using borrowed or leveraged capital to amplify returns (and risks).

**Liquidity**: Available tokens for trading. More liquidity = less slippage.

**DEX**: MegaFi's core AMM functionality. Swaps and liquidity provision.

**Liquidity Provider (LP)**: User who deposits tokens into pools to enable trading.

**Liquidity Zone**: Price range where liquidity is concentrated. Called "range" on other protocols.

**LP NFT**: Non-fungible token representing liquidity position. Unique to each position.

## M

**Mainnet**: Production blockchain network. Opposite of testnet.

**Margin**: Collateral required to maintain a position. Options sellers must maintain margin.

**MEV (Maximal Extractable Value)**: Profit extracted by reordering transactions. Reduced on MegaETH.

**MegaETH**: High-performance L2 blockchain. 100k+ TPS, < 10ms finality.

**MegaPool**: Liquidity pool in MegaFi. Uses concentrated liquidity model.

## N

**NFT (Non-Fungible Token)**: Unique blockchain token. LP positions are NFTs.

**Notional Value**: Total value controlled by position. May exceed actual capital (leverage).

## O

**Option**: Right (not obligation) to buy/sell token at specific price. Calls and puts.

**Oracle**: System providing external data to smart contracts. Price feeds are oracles.

**Out-of-the-Money (OTM)**: Non-profitable option. Call: price < strike. Put: price > strike.

## P

**Pool**: Collection of tokens enabling trading. Each pair/fee combo is separate pool.

**Position**: Your active investment. LP position, option position, strategy position.

**Premium**: Price paid for option. Buyer pays, seller receives.

**Price Impact**: How trade affects pool price. Large trades have higher impact.

**Protocol Fee**: Fee charged by protocol itself. MegaFi: 0%.

**Put Option**: Right to sell token at strike price. Bearish instrument.

## R

**Rebalancing**: Adjusting position parameters. Strategies rebalance Liquidity Zones automatically.

**Hedge**: MegaFi's options and hedging functionality.

**RPC (Remote Procedure Call)**: Connection to blockchain. Primary: rpc.megaeth.io.

## S

**Sequencer**: MegaETH component ordering transactions. Enables real-time execution.

**Settlement**: Finalizing transaction or options exercise. Near-instant on MegaETH.

**Slippage**: Difference between expected and actual execution price. Set tolerance to protect.

**Smart Contract**: Self-executing code on blockchain. MegaFi is built with smart contracts.

**Stablecoin**: Token pegged to stable asset (usually $1). USDC, USDT, DAI.

**CLM**: MegaFi's automated liquidity management functionality.

**Strike Price**: Price at which option can be exercised.

## T

**Testnet**: Test blockchain network. Use for testing without real money.

**Theta**: Options Greek measuring time decay. How much option loses per day.

**Tick**: Discrete price point in pool. Ticks define Liquidity Zone boundaries.

**Tick Spacing**: Granularity of ticks. 0.05% pools: 10. 0.3% pools: 60. 1% pools: 200.

**Time Decay**: Options lose value as expiration approaches. Measured by theta.

**TVL (Total Value Locked)**: Total capital deposited in protocol. Key DeFi metric.

## U

**Underlying**: Asset that option is based on. ETH is underlying for ETH options.

## V

**Vault**: In other protocols, automated strategy. In MegaFi, see CLM.

**Vega**: Options Greek measuring volatility sensitivity. How much option value changes with IV.

**Volatility**: Price fluctuation magnitude. Higher volatility = higher option prices.

## W

**Wallet**: Software holding crypto private keys. MetaMask, Rainbow, etc.

**WETH (Wrapped ETH)**: ERC-20 version of ETH. Used in smart contracts.

**Wrapped Token**: Token representing another asset. WBTC wraps Bitcoin for Ethereum.

## Y

**Yield**: Return on investment. LPs earn yield from trading fees.

## Z

**Zero-for-One**: Swap direction in pool. Swapping token0 for token1.

## Terminology Equivalents

MegaFi uses specific terminology. Equivalents from other protocols:

| Other Protocols | MegaFi |
|-----------------|--------|
| AMM | DEX / MegaPool |
| Range / Ticks | Liquidity Zones |
| Vault | CLM / Strategy Modes |
| Pool | MegaPool |
| V3 Position | LP NFT |

## Abbreviations

**APR**: Annual Percentage Rate
**APY**: Annual Percentage Yield (includes compounding)
**bp**: Basis Point (0.01%)
**CEX**: Centralized Exchange
**CLM**: Concentrated Liquidity Manager
**DA**: Data Availability
**DEX**: MegaFi's decentralized exchange
**EVM**: Ethereum Virtual Machine
**IL**: Impermanent Loss
**ITM**: In-the-Money
**LP**: Liquidity Provider
**MEV**: Maximal Extractable Value
**NFT**: Non-Fungible Token
**OTM**: Out-of-the-Money
**P&L**: Profit and Loss
**RPC**: Remote Procedure Call
**TPS**: Transactions Per Second
**TVL**: Total Value Locked
**TWAP**: Time-Weighted Average Price

## Units

**Wei**: Smallest ETH unit (10^-18 ETH)
**Gwei**: Gas price unit (10^-9 ETH)
**Basis Point**: 0.01% or 0.0001
**Tick**: ~0.01% price movement

## Next Steps

Explore related concepts:

 
- [Limits and Constraints](limits-and-constraints.md) - Protocol limits
- [DEX](../dex/overview.md) - Core concepts

---

**Your DeFi dictionary.**

