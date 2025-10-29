# FAQs

Frequently asked questions about MegaFi. Find quick answers to common questions.

## General

### What is MegaFi?

MegaFi is a comprehensive DeFi super app built on MegaETH. It combines three layers: Liquidity Layer (AMM), Strategy Layer (automation), and Risk Layer (options).

### What is MegaETH?

MegaETH is a high-performance Layer 2 blockchain with 100,000+ TPS and sub-10ms transaction finality. It enables real-time DeFi applications.

### Is MegaFi safe to use?

MegaFi smart contracts are audited by multiple firms. All DeFi involves risk - users should understand impermanent loss, smart contract risk, and market risk before using significant capital.

### Do I need KYC to use MegaFi?

No. MegaFi is a decentralized protocol. No KYC or personal information required.

### What wallets are supported?

Any EVM-compatible wallet: MetaMask, Rainbow, Coinbase Wallet, WalletConnect, and more.

## Getting Started

### How do I start using MegaFi?

1. Connect EVM wallet
2. Add MegaETH network
3. Bridge assets to MegaETH
4. Start swapping or providing liquidity

[Full guide →](../getting-started/overview.md)

### How do I get assets on MegaETH?

Use the official bridge to transfer from Ethereum mainnet or other L2s. Takes 5-15 minutes.

[Bridge guide →](../megaeth/bridge-guide.md)

### Do I need $MEGA tokens?

Yes, for gas fees. Amount needed is minimal - $1 worth covers 200+ transactions.

### What's the minimum amount to start?

No minimum. Even $10 is enough to try features. However, $100+ recommended for meaningful LP positions.

## Swapping

### How fast are swaps?

10-50 milliseconds from submission to finality. Feels instant.

### What are the fees?

Trading fees: 0.05% - 1% depending on pair. Gas fees: < $0.005 per swap.

### Why do I need to approve tokens?

ERC-20 standard requires approval before contracts can access tokens. One-time per token.

### Can I cancel a swap?

No. Execution is immediate on MegaETH. Double-check before confirming.

### What is slippage?

Difference between expected and actual price. Set slippage tolerance to protect against large movements.

## Liquidity Provision

### How do I earn from providing liquidity?

Earn trading fees from every swap through your pool. Fees accumulate automatically in your position.

### What is impermanent loss?

Loss compared to simply holding tokens when prices diverge. Can be offset by trading fees.

[IL explanation →](../liquidity-layer/liquidity-zones.md)

### Can I remove liquidity anytime?

Yes. No lock periods. Withdraw whenever you want.

### What are Liquidity Zones?

Price ranges where you concentrate liquidity. Narrow zones = higher efficiency but more management.

[Zones guide →](../liquidity-layer/liquidity-zones.md)

### Why is my position showing different token amounts?

As price moves, pool automatically rebalances between tokens. This is normal behavior.

### What happens if price moves outside my zone?

Position becomes inactive (100% one token). Stop earning fees until price returns to zone.

## Strategies

### What are Strategy Modes?

Automated algorithms that manage your liquidity. Rebalance zones automatically based on market conditions.

[Strategy modes →](../strategy-layer/strategy-modes.md)

### Which strategy mode should I use?

Conservative: Passive, stable. Balanced: Good default. Aggressive: Active optimization. Dynamic: Adapts automatically.

### Can I switch strategy modes?

Yes. Switch anytime. Position rebalances to new mode parameters.

### Do strategies guarantee profits?

No. Strategies optimize management but cannot eliminate market risk or IL.

### How often do strategies rebalance?

Conservative: 1-2x/month. Balanced: 8-12x/month. Aggressive: 30-50x/month.

## Options

### What are options?

Contracts giving the right (not obligation) to buy (call) or sell (put) tokens at specific price.

[Options guide →](../risk-layer/options-trading.md)

### How do I use options for hedging?

Buy puts to protect against downside. Sell calls to generate income. Combine both (collar) for low-cost protection.

[Hedging strategies →](../risk-layer/hedging-strategies.md)

### What happens at expiration?

In-the-money options auto-exercise. Out-of-the-money options expire worthless.

### Can I sell options early?

Yes. Secondary market allows buying and selling options before expiration.

### What is required to sell options?

Collateral. Covered options require underlying tokens. Cash-secured require USDC. Naked options require margin.

## Fees

### What fees does MegaFi charge?

Trading fees (0.05%-1%) go to LPs. No protocol fee. Gas fees (< $0.005) go to validators.

[Fee breakdown →](../guides/understanding-fees.md)

### Why are gas fees so low?

MegaETH's architecture and high throughput enable ultra-low costs.

### Do I pay fees for failed transactions?

Yes. Gas is consumed even if transaction fails. Ensure parameters are correct.

### Are there withdrawal fees?

No withdrawal fees. Only gas cost (< $0.005).

## Technical

### What blockchain is MegaFi on?

MegaETH Layer 2. Settles to Ethereum mainnet for security.

### Is the code open source?

Yes. Smart contracts are open source and verified.

### What are contract addresses?

Available in [Contract Addresses](../technical/contract-addresses.md). Always verify from official sources.

### Can I integrate MegaFi into my app?

Yes. SDK available for easy integration.

[Integration guide →](../technical/integration-guide.md)

### Is there an API?

Yes. REST API for read operations. SDK for transactions.

[API docs →](../technical/sdk-reference.md)

## Troubleshooting

### My transaction failed. Why?

Common reasons: Slippage exceeded, insufficient liquidity, wrong network, insufficient gas. Check specific error message.

[Troubleshooting →](../guides/troubleshooting.md)

### Wallet won't connect?

Ensure wallet is unlocked, on MegaETH network, and browser is supported. Try refreshing page.

### Balances not updating?

Refresh page or click refresh icon. Check block explorer to verify actual balance.

### Position not showing?

Check Positions tab specifically. Ensure correct wallet connected and on MegaETH network.

### Bridge taking too long?

Normal times: 5-15 min from Ethereum, 3-8 min from L2s. If > 30 min, contact support.

## Economics

### What's a good APR?

Varies by pool. Stable pairs: 5-15%. Blue chips: 15-40%. Volatile pairs: 30-100%+.

### How is APR calculated?

Based on recent fees earned, extrapolated annually. Not a guarantee of future returns.

### What affects my returns?

Trading volume, volatility, pool liquidity, active time, IL, rebalancing costs.

### Can I lose money?

Yes. IL can exceed fee earnings. Options can lose 100% of premium. Market risk always present.

## Support

### Where can I get help?

Discord: Community + team support
Email: support@megafi.app  
Docs: docs.megafi.app
Twitter: @MegaFiApp

### How do I report a bug?

Email: bugs@megafi.app with details, screenshots, and steps to reproduce.

### Is there a bug bounty?

Yes. Up to $500,000 for critical vulnerabilities. security@megafi.app

[Security →](../technical/security-audits.md)

### Can I suggest features?

Yes. Discord #suggestions channel or email feedback@megafi.app

## Advanced

### What is continuous execution?

MegaETH processes transactions immediately rather than batching into blocks. Enables sub-10ms finality.

[Real-time execution →](../megaeth/real-time-execution.md)

### How does concentrated liquidity work?

Liquidity focused in specific price ranges. Improves capital efficiency 5-10x vs traditional AMMs.

[Concentrated liquidity →](../liquidity-layer/liquidity-zones.md)

### What are Greeks?

Options risk metrics: Delta (price), Gamma (delta change), Theta (time), Vega (volatility), Rho (rates).

[Greeks explained →](../risk-layer/pricing-models.md)

### Can I build on MegaFi?

Yes. Use SDK or interact with contracts directly. Open for integrations and partnerships.

[Developer docs →](../technical/integration-guide.md)

## Still Have Questions?

- [Glossary](glossary.md) - Terminology reference
- [Discord](https://discord.gg/megafi) - Community chat
- [Email](mailto:support@megafi.app) - Direct support

---

**Questions answered. Knowledge gained.**

