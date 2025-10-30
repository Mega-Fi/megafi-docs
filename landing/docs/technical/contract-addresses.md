# Contract Addresses

Deployed smart contract addresses on MegaETH. Use these addresses to interact with MegaFi programmatically.

## At a Glance

- All addresses are for MegaETH mainnet
- Contracts are verified on block explorer
- Testnet addresses available separately
- Always verify addresses from official sources
- Never send tokens to contract addresses directly (use interfaces)

## Core Contracts

### Factory Contracts

**MegaPoolFactory**
```
Address: [TO BE ANNOUNCED AT MAINNET LAUNCH]
Purpose: Creates new token pair pools
Verified: Yes
```

**StrategyFactory**
```
Address: [TO BE ANNOUNCED AT MAINNET LAUNCH]
Purpose: Deploys automated strategies
Verified: Yes
```

**OptionFactory**
```
Address: [TO BE ANNOUNCED AT MAINNET LAUNCH]
Purpose: Creates option contracts
Verified: Yes
```

### Router Contracts

**SwapRouter**
```
Address: [TO BE ANNOUNCED AT MAINNET LAUNCH]
Purpose: Optimized swap routing
Verified: Yes
```

**PositionManager**
```
Address: [TO BE ANNOUNCED AT MAINNET LAUNCH]
Purpose: Manages LP NFT positions
Verified: Yes
```

### Periphery Contracts

**Quoter**
```
Address: [TO BE ANNOUNCED AT MAINNET LAUNCH]
Purpose: Off-chain swap quotations
Verified: Yes
```

**Multicall**
```
Address: [TO BE ANNOUNCED AT MAINNET LAUNCH]
Purpose: Batch operations
Verified: Yes
```

## Token Addresses

### Native Wrapped Token

**Wrapped MEGA (WMEGA)**
```
Address: [TO BE ANNOUNCED AT MAINNET LAUNCH]
Symbol: WMEGA
Decimals: 18
```

### Stablecoins

**USD Coin (USDC)**
```
Address: [TO BE ANNOUNCED AT MAINNET LAUNCH]
Symbol: USDC
Decimals: 6
Bridged from: Ethereum
```

**Tether USD (USDT)**
```
Address: [TO BE ANNOUNCED AT MAINNET LAUNCH]
Symbol: USDT
Decimals: 6
Bridged from: Ethereum
```

**Dai Stablecoin (DAI)**
```
Address: [TO BE ANNOUNCED AT MAINNET LAUNCH]
Symbol: DAI
Decimals: 18
Bridged from: Ethereum
```

### Major Tokens

**Wrapped Ethereum (WETH)**
```
Address: [TO BE ANNOUNCED AT MAINNET LAUNCH]
Symbol: WETH
Decimals: 18
Bridged from: Ethereum
```

**Wrapped Bitcoin (WBTC)**
```
Address: [TO BE ANNOUNCED AT MAINNET LAUNCH]
Symbol: WBTC
Decimals: 8
Bridged from: Ethereum
```

## Pool Addresses

Pools are deterministically created. Calculate pool address using:

```javascript
const poolAddress = computePoolAddress(
  factoryAddress,
  token0,
  token1,
  fee
);
```

### Major Pools

**ETH/USDC (0.3%)**
```
Address: [Deterministic - compute from factory]
Fee Tier: 0.3%
Tick Spacing: 60
```

**WBTC/ETH (0.3%)**
```
Address: [Deterministic - compute from factory]
Fee Tier: 0.3%
Tick Spacing: 60
```

**USDC/USDT (0.05%)**
```
Address: [Deterministic - compute from factory]
Fee Tier: 0.05%
Tick Spacing: 10
```

## Testnet Addresses

### MegaETH Testnet

**Network Details**
```
Network Name: MegaETH Testnet
RPC URL: https://testnet-rpc.megaeth.io
Chain ID: [TESTNET CHAIN ID]
Explorer: https://testnet-explorer.megaeth.io
```

**Core Contracts** (Testnet)
```
MegaPoolFactory: [TESTNET ADDRESS]
SwapRouter: [TESTNET ADDRESS]
PositionManager: [TESTNET ADDRESS]
StrategyFactory: [TESTNET ADDRESS]
OptionFactory: [TESTNET ADDRESS]
```

## Address Verification

### How to Verify

1. **Official Sources Only**: Get addresses from:
   - This documentation
   - Official MegaFi website
   - GitHub repository
   - Official announcements

2. **Check Block Explorer**: Verify contract on [explorer.megaeth.io](https://explorer.megaeth.io):
   - Contract verified (green checkmark)
   - Source code matches repository
   - Deployment date matches announcements

3. **Compare Multiple Sources**: Cross-reference addresses across:
   - Documentation
   - GitHub
   - Block explorer
   - Official Discord

### Warning Signs

⚠️ **Never trust addresses from:**
- Unofficial websites
- Social media DMs
- Unverified Telegram/Discord messages
- Email (MegaFi never sends addresses via email)

## Using Addresses

### In Web3 Libraries

**Ethers.js**
```javascript
import { ethers } from 'ethers';

const SWAP_ROUTER_ADDRESS = '0x...'; // Use official address
const provider = new ethers.providers.JsonRpcProvider('https://rpc.megaeth.io');

const swapRouter = new ethers.Contract(
  SWAP_ROUTER_ADDRESS,
  SwapRouterABI,
  provider
);
```

**Web3.js**
```javascript
const Web3 = require('web3');

const SWAP_ROUTER_ADDRESS = '0x...'; // Use official address
const web3 = new Web3('https://rpc.megaeth.io');

const swapRouter = new web3.eth.Contract(
  SwapRouterABI,
  SWAP_ROUTER_ADDRESS
);
```

### In Smart Contracts

```solidity
// Import interfaces
import '@megafi/contracts/interfaces/ISwapRouter.sol';

contract YourContract {
    ISwapRouter public immutable swapRouter;
    
    constructor(address _swapRouter) {
        swapRouter = ISwapRouter(_swapRouter);
    }
    
    function executeSwap(...) external {
        swapRouter.exactInputSingle(...);
    }
}
```

## Address Updates

Addresses may change due to:
- Contract upgrades (proxy remains same)
- New deployments (major versions)
- Network upgrades

**Stay Updated:**
- Watch GitHub releases
- Follow official announcements
- Check documentation regularly
- Subscribe to developer newsletter

## Emergency Contacts

If you suspect fraudulent addresses:

**Report to:**
- Email: security@megafi.app
- Discord: #security channel
- Twitter: @MegaFiApp

**Do not:**
- Interact with suspicious contracts
- Send tokens without verification
- Trust unverified sources

## ABIs

Application Binary Interfaces for all contracts available:

**npm Package**
```bash
npm install @megafi/contracts
```

**GitHub**
```
https://github.com/Mega-Fi/contracts/tree/main/abis
```

**Block Explorer**
```
Visit contract page → Contract → Code → ABI
```

## Deployment Information

### Mainnet Launch

**Date**: [TO BE ANNOUNCED]

**Initial Contracts**:
- All core contracts deployed
- Major token pools created
- Strategy and option contracts live

**Announcement Channels**:
- Official blog
- Twitter
- Discord
- Documentation

### Version History

Track contract versions:

**V1.0** (Launch)
- Initial deployment
- Core functionality
- Base strategies

**V1.x** (Future)
- Additional features
- Optimizations
- New strategies

## FAQ

**When will mainnet addresses be available?**  
At mainnet launch. Follow official channels for announcement.

**Can I use these addresses on other chains?**  
No. These are MegaETH-specific. Other chains have different addresses.

**What if I sent tokens to wrong address?**  
Blockchain transactions are irreversible. Always verify addresses.

**How do I know an address is official?**  
Check multiple official sources and verify on block explorer.

**Are testnet addresses the same as mainnet?**  
No. Testnet and mainnet have completely different addresses.

**Will addresses change?**  
Proxy addresses remain constant. Implementation addresses may change with upgrades.

## Next Steps

Use addresses for integration:

- [Smart Contracts](smart-contracts.md) - Contract details
- [SDK Reference](sdk-reference.md) - JavaScript SDK
- [Integration Guide](integration-guide.md) - Build on MegaFi

---

**Always verify. Never trust.**

