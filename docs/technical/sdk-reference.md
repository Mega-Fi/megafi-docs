# SDK Reference

Complete reference for the MegaFi TypeScript/JavaScript SDK. Build DeFi applications on MegaETH with ease.

## At a Glance

- TypeScript-first with full type definitions
- Works in Node.js and browsers
- Comprehensive coverage of all MegaFi features
- < 10ms API response time
- Real-time event subscriptions
- Well-documented with examples

## Installation

```bash
npm install @megafi/sdk ethers
```

or

```bash
yarn add @megafi/sdk ethers
```

## Quick Start

```typescript
import { MegaFi, SwapRouter } from '@megafi/sdk';
import { ethers } from 'ethers';

// Initialize provider
const provider = new ethers.providers.JsonRpcProvider('https://rpc.megaeth.io');
const signer = provider.getSigner();

// Initialize MegaFi SDK
const megafi = new MegaFi({
  provider,
  signer,
  chainId: MEGAETH_CHAIN_ID
});

// Execute a swap
const swap = await megafi.swap({
  tokenIn: 'ETH',
  tokenOut: 'USDC',
  amountIn: '1.0',
  slippage: 0.5
});

console.log(`Swapped 1 ETH for ${swap.amountOut} USDC`);
```

## Core Classes

### MegaFi

Main SDK class for initializing connection:

```typescript
class MegaFi {
  constructor(config: MegaFiConfig);
  
  // Sub-modules
  swap: SwapRouter;
  liquidity: LiquidityManager;
  strategy: StrategyManager;
  options: OptionsManager;
  
  // Utility methods
  getTokenPrice(token: string): Promise<BigNumber>;
  getPool(token0: string, token1: string, fee: number): Promise<Pool>;
}

interface MegaFiConfig {
  provider: ethers.providers.Provider;
  signer?: ethers.Signer;
  chainId: number;
  rpcUrl?: string;
}
```

### SwapRouter

Handle token swaps:

```typescript
class SwapRouter {
  // Execute swap
  async swap(params: SwapParams): Promise<SwapResult>;
  
  // Get quote without executing
  async quote(params: QuoteParams): Promise<Quote>;
  
  // Find best route
  async findBestRoute(
    tokenIn: string,
    tokenOut: string,
    amount: string
  ): Promise<Route>;
}

interface SwapParams {
  tokenIn: string;
  tokenOut: string;
  amountIn: string;
  slippage: number; // 0.5 = 0.5%
  recipient?: string;
  deadline?: number;
}

interface SwapResult {
  hash: string;
  amountOut: string;
  route: Route;
  gasUsed: BigNumber;
}
```

### LiquidityManager

Manage liquidity positions:

```typescript
class LiquidityManager {
  // Add liquidity
  async addLiquidity(params: AddLiquidityParams): Promise<Position>;
  
  // Remove liquidity
  async removeLiquidity(
    tokenId: number,
    percentage: number
  ): Promise<RemoveLiquidityResult>;
  
  // Collect fees
  async collectFees(tokenId: number): Promise<CollectFeesResult>;
  
  // Get position info
  async getPosition(tokenId: number): Promise<PositionInfo>;
  
  // List user positions
  async getUserPositions(address: string): Promise<Position[]>;
}

interface AddLiquidityParams {
  token0: string;
  token1: string;
  fee: number; // 500, 3000, 10000
  tickLower: number;
  tickUpper: number;
  amount0Desired: string;
  amount1Desired: string;
  slippage: number;
}

interface Position {
  tokenId: number;
  token0: string;
  token1: string;
  fee: number;
  tickLower: number;
  tickUpper: number;
  liquidity: BigNumber;
  token0Amount: BigNumber;
  token1Amount: BigNumber;
  feesEarned0: BigNumber;
  feesEarned1: BigNumber;
}
```

### StrategyManager

Deploy and manage automated strategies:

```typescript
class StrategyManager {
  // Deploy strategy
  async deployStrategy(params: StrategyParams): Promise<Strategy>;
  
  // Get strategy info
  async getStrategy(strategyId: number): Promise<StrategyInfo>;
  
  // Switch strategy mode
  async switchMode(
    strategyId: number,
    newMode: StrategyMode
  ): Promise<Transaction>;
  
  // Withdraw from strategy
  async withdraw(
    strategyId: number,
    percentage: number
  ): Promise<WithdrawResult>;
}

interface StrategyParams {
  pool: string;
  mode: StrategyMode; // 'conservative' | 'balanced' | 'aggressive' | 'dynamic'
  amount0: string;
  amount1: string;
}

interface StrategyInfo {
  strategyId: number;
  mode: StrategyMode;
  pool: string;
  value: BigNumber;
  feesEarned: BigNumber;
  apr: number;
  rebalanceCount: number;
}
```

### OptionsManager

Trade and manage options:

```typescript
class OptionsManager {
  // Buy option
  async buyOption(params: BuyOptionParams): Promise<OptionPosition>;
  
  // Sell option
  async sellOption(params: SellOptionParams): Promise<OptionPosition>;
  
  // Exercise option
  async exerciseOption(optionId: number): Promise<Transaction>;
  
  // Get option info
  async getOption(optionId: number): Promise<OptionInfo>;
  
  // Calculate Greeks
  async getGreeks(optionId: number): Promise<Greeks>;
}

interface BuyOptionParams {
  underlying: string;
  strike: string;
  expiration: number; // Unix timestamp
  optionType: 'call' | 'put';
  amount: string;
}

interface Greeks {
  delta: number;
  gamma: number;
  theta: number;
  vega: number;
  rho: number;
}
```

## Utilities

### Token Class

Represent ERC-20 tokens:

```typescript
class Token {
  constructor(
    chainId: number,
    address: string,
    decimals: number,
    symbol?: string,
    name?: string
  );
  
  equals(other: Token): boolean;
  sortsBefore(other: Token): boolean;
}

// Common tokens
import { WETH, USDC, USDT, DAI } from '@megafi/sdk';

const weth = WETH[MEGAETH_CHAIN_ID];
const usdc = USDC[MEGAETH_CHAIN_ID];
```

### Pool Class

Represent liquidity pools:

```typescript
class Pool {
  constructor(
    token0: Token,
    token1: Token,
    fee: number,
    sqrtPriceX96: BigNumber,
    liquidity: BigNumber,
    tick: number
  );
  
  // Get current price
  get token0Price(): Price;
  get token1Price(): Price;
  
  // Simulate swap
  getOutputAmount(inputAmount: TokenAmount): TokenAmount;
  getInputAmount(outputAmount: TokenAmount): TokenAmount;
}
```

### Price Class

Represent token prices:

```typescript
class Price {
  constructor(
    baseCurrency: Token,
    quoteCurrency: Token,
    denominator: BigNumber,
    numerator: BigNumber
  );
  
  // Convert to number
  toSignificant(significantDigits: number): string;
  toFixed(decimalPlaces: number): string;
  
  // Price operations
  invert(): Price;
  multiply(other: Price): Price;
  quote(currencyAmount: TokenAmount): TokenAmount;
}
```

## Real-Time Events

Subscribe to real-time events:

```typescript
// Subscribe to swap events
megafi.events.on('swap', (event: SwapEvent) => {
  console.log(`Swap: ${event.amount0} ${event.token0} for ${event.amount1} ${event.token1}`);
});

// Subscribe to liquidity events
megafi.events.on('mint', (event: MintEvent) => {
  console.log(`Liquidity added: ${event.amount0} + ${event.amount1}`);
});

// Subscribe to strategy events
megafi.events.on('rebalance', (event: RebalanceEvent) => {
  console.log(`Strategy ${event.strategyId} rebalanced`);
});

// Unsubscribe
megafi.events.off('swap', handler);
```

## Error Handling

SDK throws typed errors:

```typescript
import { MegaFiError, InsufficientLiquidityError, SlippageError } from '@megafi/sdk';

try {
  await megafi.swap({ ... });
} catch (error) {
  if (error instanceof InsufficientLiquidityError) {
    console.error('Pool lacks liquidity');
  } else if (error instanceof SlippageError) {
    console.error('Slippage exceeded');
  } else if (error instanceof MegaFiError) {
    console.error('MegaFi error:', error.message);
  }
}
```

## Advanced Usage

### Custom RPC

Use custom RPC endpoint:

```typescript
const megafi = new MegaFi({
  provider,
  signer,
  chainId: MEGAETH_CHAIN_ID,
  rpcUrl: 'https://custom-rpc.megaeth.io'
});
```

### Multicall

Batch multiple calls:

```typescript
const results = await megafi.multicall([
  megafi.getTokenPrice('ETH'),
  megafi.getTokenPrice('USDC'),
  megafi.getPool('ETH', 'USDC', 3000)
]);
```

### Custom Slippage

Set custom slippage tolerance:

```typescript
await megafi.swap({
  tokenIn: 'ETH',
  tokenOut: 'USDC',
  amountIn: '1.0',
  slippage: 0.1 // 0.1% slippage
});
```

## Examples

### Basic Swap

```typescript
const swap = await megafi.swap({
  tokenIn: 'ETH',
  tokenOut: 'USDC',
  amountIn: '1.0',
  slippage: 0.5
});
```

### Add Liquidity

```typescript
const position = await megafi.liquidity.addLiquidity({
  token0: 'ETH',
  token1: 'USDC',
  fee: 3000,
  tickLower: -887200,
  tickUpper: 887200,
  amount0Desired: '1.0',
  amount1Desired: '2000',
  slippage: 0.5
});
```

### Deploy Strategy

```typescript
const strategy = await megafi.strategy.deployStrategy({
  pool: 'ETH/USDC-0.3%',
  mode: 'balanced',
  amount0: '1.0',
  amount1: '2000'
});
```

### Buy Option

```typescript
const option = await megafi.options.buyOption({
  underlying: 'ETH',
  strike: '2200',
  expiration: Date.now() + 30 * 24 * 60 * 60 * 1000,
  optionType: 'call',
  amount: '1.0'
});
```

## TypeScript Support

Full TypeScript definitions included:

```typescript
import type {
  SwapParams,
  SwapResult,
  Position,
  Strategy,
  OptionInfo
} from '@megafi/sdk/types';
```

## API Reference

Complete API documentation:

- Types: All interfaces and types
- Methods: Function signatures
- Examples: Code samples
- Errors: Error types and handling

Visit: [docs.megafi.app/sdk](https://docs.megafi.app/sdk)

## FAQ

**Does SDK work in browsers?**  
Yes. Works in any modern browser with ethers.js support.

**Can I use SDK without a signer?**  
Yes. Read-only operations work with provider only.

**What's the bundle size?**  
~50KB minified + gzipped (excluding ethers.js).

**Is SDK open source?**  
Yes. MIT licensed on GitHub.

**Can I contribute?**  
Yes. Pull requests welcome on GitHub.

## Next Steps

Start building with SDK:

- [Integration Guide](integration-guide.md) - Complete integration walkthrough
- [Smart Contracts](smart-contracts.md) - Contract details
- [Examples](https://github.com/megafi/sdk-examples) - Code examples

---

**Build on MegaFi. Build on speed.**

