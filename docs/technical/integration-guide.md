# Integration Guide

Complete guide for integrating MegaFi into your application. Learn how to add swaps, liquidity, and strategies to any DeFi application.

## At a Glance

- Multiple integration methods available
- SDK for fastest integration (< 2 hours)
- Direct contract interaction for full control
- Real-time updates via WebSocket
- Comprehensive testing tools
- Production-ready examples

## Integration Options

### 1. SDK Integration (Recommended)

Easiest and fastest integration method.

**Best For**: Most applications, wallets, aggregators

**Time**: 1-2 hours

**Pros**:
- Simple API
- TypeScript support
- Handles complexity
- Real-time updates

**Cons**:
- Less control
- Additional dependency

### 2. Direct Contract Interaction

Call smart contracts directly.

**Best For**: Custom implementations, advanced users

**Time**: 4-6 hours

**Pros**:
- Full control
- No SDK dependency
- Maximum flexibility

**Cons**:
- More complexity
- Manual error handling
- Must handle ABIs

### 3. REST API

Use MegaFi API for read operations.

**Best For**: Analytics, dashboards, non-transactional apps

**Time**: 1 hour

**Pros**:
- No blockchain connection needed
- Simple HTTP requests
- Fast responses

**Cons**:
- Read-only
- Cannot execute transactions

## SDK Integration

### Setup

Install dependencies:

```bash
npm install @megafi/sdk ethers
```

Initialize SDK:

```typescript
import { MegaFi } from '@megafi/sdk';
import { ethers } from 'ethers';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const megafi = new MegaFi({
  provider,
  signer,
  chainId: MEGAETH_CHAIN_ID
});
```

### Adding Swap Feature

Add token swapping to your app:

```typescript
// Get quote
const quote = await megafi.swap.quote({
  tokenIn: 'ETH',
  tokenOut: 'USDC',
  amountIn: '1.0'
});

console.log(`Expected output: ${quote.amountOut} USDC`);
console.log(`Price impact: ${quote.priceImpact}%`);

// Execute swap
const swap = await megafi.swap.swap({
  tokenIn: 'ETH',
  tokenOut: 'USDC',
  amountIn: '1.0',
  slippage: 0.5,
  recipient: await signer.getAddress()
});

console.log(`Swap hash: ${swap.hash}`);
```

### Adding Liquidity Feature

Enable LP functionality:

```typescript
// Add liquidity
const position = await megafi.liquidity.addLiquidity({
  token0: 'ETH',
  token1: 'USDC',
  fee: 3000, // 0.3%
  tickLower: -887200,
  tickUpper: 887200,
  amount0Desired: '1.0',
  amount1Desired: '2000',
  slippage: 0.5
});

console.log(`Position NFT ID: ${position.tokenId}`);

// Get position info
const info = await megafi.liquidity.getPosition(position.tokenId);
console.log(`Position value: $${info.valueUSD}`);
console.log(`Fees earned: ${info.feesEarned0} + ${info.feesEarned1}`);
```

### Adding Strategy Feature

Integrate automated strategies:

```typescript
// Deploy strategy
const strategy = await megafi.strategy.deployStrategy({
  pool: 'ETH/USDC-0.3%',
  mode: 'balanced',
  amount0: '1.0',
  amount1: '2000'
});

console.log(`Strategy ID: ${strategy.strategyId}`);

// Monitor strategy
const info = await megafi.strategy.getStrategy(strategy.strategyId);
console.log(`Current APR: ${info.apr}%`);
console.log(`Rebalances: ${info.rebalanceCount}`);
```

## Contract Integration

### Setup

Import ABIs and addresses:

```typescript
import { ethers } from 'ethers';
import SwapRouterABI from '@megafi/contracts/abis/SwapRouter.json';
import { SWAP_ROUTER_ADDRESS } from '@megafi/contracts/addresses';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const swapRouter = new ethers.Contract(
  SWAP_ROUTER_ADDRESS,
  SwapRouterABI,
  signer
);
```

### Execute Swap

Direct contract interaction:

```typescript
// Approve token
const tokenIn = new ethers.Contract(TOKEN_ADDRESS, ERC20_ABI, signer);
await tokenIn.approve(SWAP_ROUTER_ADDRESS, amountIn);

// Execute swap
const params = {
  tokenIn: TOKEN_IN_ADDRESS,
  tokenOut: TOKEN_OUT_ADDRESS,
  fee: 3000,
  recipient: await signer.getAddress(),
  deadline: Math.floor(Date.now() / 1000) + 60 * 20,
  amountIn: ethers.utils.parseEther('1.0'),
  amountOutMinimum: 0,
  sqrtPriceLimitX96: 0
};

const tx = await swapRouter.exactInputSingle(params);
await tx.wait();

console.log(`Swap complete: ${tx.hash}`);
```

## REST API Integration

### Endpoint

Base URL: `https://api.megafi.app/v1`

### Get Token Price

```bash
curl https://api.megafi.app/v1/tokens/ETH/price
```

Response:
```json
{
  "token": "ETH",
  "priceUSD": "2000.00",
  "change24h": "2.5%",
  "volume24h": "1500000000"
}
```

### Get Pool Info

```bash
curl https://api.megafi.app/v1/pools/ETH-USDC-3000
```

Response:
```json
{
  "pool": "ETH/USDC 0.3%",
  "token0": "ETH",
  "token1": "USDC",
  "fee": 3000,
  "liquidity": "5000000",
  "volume24h": "10000000",
  "apr": "25.5%"
}
```

### Get Swap Quote

```bash
curl -X POST https://api.megafi.app/v1/quote \
  -H "Content-Type: application/json" \
  -d '{
    "tokenIn": "ETH",
    "tokenOut": "USDC",
    "amountIn": "1.0"
  }'
```

Response:
```json
{
  "amountOut": "1998.50",
  "priceImpact": "0.075%",
  "route": ["ETH/USDC-0.3%"],
  "gasEstimate": "150000"
}
```

## WebSocket Integration

### Real-Time Updates

Subscribe to live data:

```typescript
const ws = new WebSocket('wss://ws.megafi.app/v1');

ws.on('open', () => {
  // Subscribe to swap events
  ws.send(JSON.stringify({
    action: 'subscribe',
    channel: 'swaps',
    pool: 'ETH/USDC-0.3%'
  }));
});

ws.on('message', (data) => {
  const event = JSON.parse(data);
  console.log(`Swap: ${event.amount0} → ${event.amount1}`);
});
```

### Available Channels

- `swaps`: Swap events
- `liquidity`: LP events
- `prices`: Price updates
- `strategies`: Strategy rebalances

## Testing

### Testnet

Test integration on MegaETH testnet:

**Network**:
```
RPC: https://testnet-rpc.megaeth.io
Chain ID: [TESTNET_CHAIN_ID]
```

**Faucet**: Get testnet tokens at [faucet.megaeth.io](https://faucet.megaeth.io)

### Local Testing

Use Hardhat for local development:

```bash
npx hardhat node --fork https://rpc.megaeth.io
```

Deploy test contracts:

```bash
npx hardhat run scripts/deploy-test.ts --network localhost
```

### Integration Tests

Example test suite:

```typescript
import { expect } from 'chai';
import { MegaFi } from '@megafi/sdk';

describe('MegaFi Integration', () => {
  let megafi: MegaFi;
  
  before(async () => {
    megafi = new MegaFi({ provider, signer, chainId });
  });
  
  it('should execute swap', async () => {
    const result = await megafi.swap({
      tokenIn: 'ETH',
      tokenOut: 'USDC',
      amountIn: '1.0',
      slippage: 0.5
    });
    
    expect(result.hash).to.not.be.undefined;
    expect(result.amountOut).to.be.gt(0);
  });
});
```

## Production Checklist

Before going live:

### Security

- [ ] Contract addresses verified from official sources
- [ ] Token approvals use safe amounts
- [ ] Slippage tolerance set appropriately
- [ ] User funds protected with try-catch
- [ ] Private keys never exposed

### Performance

- [ ] RPC endpoint reliable and fast
- [ ] Transaction timeouts handled
- [ ] User feedback during long operations
- [ ] Error messages user-friendly
- [ ] Loading states implemented

### UX

- [ ] Clear transaction flow
- [ ] Gas estimation shown
- [ ] Expected output displayed
- [ ] Transaction status visible
- [ ] Success/failure feedback

### Monitoring

- [ ] Transaction success rate tracked
- [ ] Error rates monitored
- [ ] User actions logged (privacy-compliant)
- [ ] Performance metrics collected
- [ ] Alerts for critical issues

## Common Patterns

### Swap Widget

Embeddable swap interface:

```tsx
import { SwapWidget } from '@megafi/react';

function App() {
  return (
    <SwapWidget
      defaultTokenIn="ETH"
      defaultTokenOut="USDC"
      theme="dark"
      onSuccess={(tx) => console.log('Swap complete:', tx)}
    />
  );
}
```

### Portfolio Dashboard

Display user positions:

```typescript
const positions = await megafi.liquidity.getUserPositions(userAddress);

positions.forEach(pos => {
  console.log(`Position ${pos.tokenId}:`);
  console.log(`  Value: $${pos.valueUSD}`);
  console.log(`  APR: ${pos.apr}%`);
  console.log(`  Fees: $${pos.feesUSD}`);
});
```

### Price Monitoring

Track token prices:

```typescript
setInterval(async () => {
  const ethPrice = await megafi.getTokenPrice('ETH');
  const btcPrice = await megafi.getTokenPrice('WBTC');
  
  updateUI({ ethPrice, btcPrice });
}, 5000); // Update every 5 seconds
```

## Rate Limits

API rate limits:

**Public API**: 100 requests per minute

**Authenticated**: 1000 requests per minute

**WebSocket**: 100 subscriptions per connection

Contact for higher limits: api@megafi.app

## Support

Integration support:

**Documentation**: [docs.megafi.app](https://docs.megafi.app)

**Discord**: #developers channel

**Email**: developers@megafi.app

**Office Hours**: Tuesdays 2-3pm UTC

## Examples

Full integration examples:

**Next.js**: [github.com/megafi/nextjs-example](https://github.com/megafi/nextjs-example)

**React**: [github.com/megafi/react-example](https://github.com/megafi/react-example)

**Vue**: [github.com/megafi/vue-example](https://github.com/megafi/vue-example)

**Node.js**: [github.com/megafi/node-example](https://github.com/megafi/node-example)

## FAQ

**Do I need to run a MegaETH node?**  
No. Use public RPC endpoints or providers like Alchemy.

**Can I white-label the interface?**  
Yes. SDK and widgets are fully customizable.

**Is there a fee for integration?**  
No. Free for all integrators.

**Can I get support during integration?**  
Yes. Discord and email support available.

**Are there partnership opportunities?**  
Yes. Contact partnerships@megafi.app

## Next Steps

Start building:

- [SDK Reference](sdk-reference.md) - Complete SDK documentation
- [Smart Contracts](smart-contracts.md) - Contract details
- [Examples](https://github.com/megafi/examples) - Code samples

---

**Integrate in hours. Launch in days.**

