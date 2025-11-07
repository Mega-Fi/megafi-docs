# Contract Addresses

Deployed smart contract addresses for MegaFi on MegaETH. Use these addresses to interact with the protocol programmatically.

> **Note**: Contracts are currently in development. Addresses will be published upon mainnet deployment. Testnet addresses will be available for development and testing.

## At a Glance

- All addresses are for MegaETH mainnet (when deployed)
- Contracts will be verified on block explorer
- Testnet addresses available for development
- Always verify addresses from official sources
- Never send tokens directly to contract addresses

## Core Protocol Contracts

### OperationalTreasury

**Purpose**: Central hub for option lifecycle management

```
Address: [TO BE ANNOUNCED AT DEPLOYMENT]
Description: Manages option creation, premium collection, and settlement
Verified: Yes (upon deployment)
Upgradeable: Yes (Transparent Proxy)
```

**Functions**:
- `buy()` - Purchase options
- `payOff()` - Exercise options
- `unlock()` - Expire options

---

### CoverPool

**Purpose**: LP liquidity pool with epoch-based profit distribution

```
Address: [TO BE ANNOUNCED AT DEPLOYMENT]
Description: Manages LP deposits, profits, and backup liquidity
Verified: Yes (upon deployment)
Upgradeable: Yes (Transparent Proxy)
```

**Functions**:
- `provide()` - Deposit USDC
- `claim()` - Claim profits
- `withdraw()` - Request withdrawal
- `withdrawEpoch()` - Complete withdrawal
- `fixProfit()` - Close epoch (admin)

---

### PositionsManager

**Purpose**: ERC721 NFT manager for options and LP positions

```
Address: [TO BE ANNOUNCED AT DEPLOYMENT]
Description: Mints and manages position NFTs
Verified: Yes (upon deployment)
Standard: ERC721
```

**Functions**:
- `mint()` - Create position NFT
- `burn()` - Destroy position NFT
- Standard ERC721 functions

---

### LimitController

**Purpose**: Per-strategy exposure limit enforcement

```
Address: [TO BE ANNOUNCED AT DEPLOYMENT]
Description: Manages and enforces strategy liquidity limits
Verified: Yes (upon deployment)
Admin Controlled: Yes
```

**Functions**:
- `setLimit()` - Set strategy limit (admin)
- `limit()` - Query strategy limit

---

## Strategy Contracts

### ETH Strategies

**HegicStrategyCall_ETH**
```
Address: [TO BE ANNOUNCED AT DEPLOYMENT]
Description: ETH call options with Black-Scholes pricing
Underlying: ETH
Oracle: Chainlink ETH/USD
```

**HegicStrategyPut_ETH**
```
Address: [TO BE ANNOUNCED AT DEPLOYMENT]
Description: ETH put options
Underlying: ETH
Oracle: Chainlink ETH/USD
```

**HegicStrategyStraddle_ETH**
```
Address: [TO BE ANNOUNCED AT DEPLOYMENT]
Description: ETH straddle (call + put)
Underlying: ETH
Oracle: Chainlink ETH/USD
```

**HegicStrategyStrangle_ETH**
```
Address: [TO BE ANNOUNCED AT DEPLOYMENT]
Description: ETH strangle (call + put, different strikes)
Underlying: ETH
Oracle: Chainlink ETH/USD
```

**HegicStrategySpreadCall_ETH**
```
Address: [TO BE ANNOUNCED AT DEPLOYMENT]
Description: ETH call spread
Underlying: ETH
Oracle: Chainlink ETH/USD
```

**HegicStrategySpreadPut_ETH**
```
Address: [TO BE ANNOUNCED AT DEPLOYMENT]
Description: ETH put spread
Underlying: ETH
Oracle: Chainlink ETH/USD
```

### BTC Strategies (If Deployed)

**HegicStrategyCall_BTC**
```
Address: [TO BE ANNOUNCED AT DEPLOYMENT]
Description: BTC call options
Underlying: WBTC
Oracle: Chainlink BTC/USD
```

**HegicStrategyPut_BTC**
```
Address: [TO BE ANNOUNCED AT DEPLOYMENT]
Description: BTC put options
Underlying: WBTC
Oracle: Chainlink BTC/USD
```

**Additional BTC Strategies**
```
Straddle, Strangle, Spreads
Addresses: [TO BE ANNOUNCED]
```

### Inverse Strategies (Optional)

**HegicStrategyInverseBearCallSpread**
```
Address: [TO BE ANNOUNCED IF DEPLOYED]
Description: Inverse bear call spread
```

**HegicStrategyInverseBullPutSpread**
```
Address: [TO BE ANNOUNCED IF DEPLOYED]
Description: Inverse bull put spread
```

---

## External Dependencies

### USDC (Stablecoin)

**USDC on MegaETH**
```
Address: [TO BE ANNOUNCED]
Symbol: USDC
Decimals: 6
Bridged from: Ethereum
Purpose: Primary protocol currency
```

**Note**: All premiums, settlements, and LP operations use USDC.

---

### Chainlink Price Feeds

**ETH/USD Price Feed**
```
Address: [TO BE ANNOUNCED]
Description: Real-time ETH price oracle
Decimals: 8
Update Frequency: Sub-second
```

**BTC/USD Price Feed**
```
Address: [TO BE ANNOUNCED]
Description: Real-time BTC price oracle
Decimals: 8
Update Frequency: Sub-second
```

**Arbitrum Mainnet Reference** (for context):
- ETH/USD: `0x639Fe6ab55C921f74e7fac1ee960C0B6293ba612`
- BTC/USD: `0x6ce185860a4963106506C203335A2910413708e9`

*MegaETH will have its own oracle deployments*

---

## Utility Contracts

### ProfitCalculator (Library)

```
Address: [TO BE ANNOUNCED]
Description: Profit calculation logic
Type: Library
```

### PayoffPool

```
Address: [TO BE ANNOUNCED]
Description: Backup USDC source for CoverPool
Purpose: Emergency liquidity reserve
```

---

## Testnet Addresses

### MegaETH Testnet

**Network Details**
```
Network Name: MegaETH Testnet
RPC URL: [TO BE ANNOUNCED]
Chain ID: [TO BE ANNOUNCED]
Explorer: [TO BE ANNOUNCED]
Faucet: [TO BE ANNOUNCED]
```

**Core Contracts** (Testnet)
```
OperationalTreasury: [TESTNET ADDRESS TBA]
CoverPool: [TESTNET ADDRESS TBA]
PositionsManager: [TESTNET ADDRESS TBA]
LimitController: [TESTNET ADDRESS TBA]
```

**Strategy Contracts** (Testnet)
```
HegicStrategyCall_ETH: [TESTNET ADDRESS TBA]
HegicStrategyPut_ETH: [TESTNET ADDRESS TBA]
[Additional strategies...]
```

**Test Tokens** (Testnet)
```
USDC (Test): [TESTNET ADDRESS TBA]
WETH (Test): [TESTNET ADDRESS TBA]
```

---

## Contract Verification

### How to Verify Addresses

1. **Official Sources Only**:
   - This documentation (docs.megafi.app)
   - Official website (megafi.app)
   - GitHub repository (github.com/Mega-Fi)
   - Official Discord announcements

2. **Block Explorer Verification**:
   - Check verified status (green checkmark)
   - Review source code matches GitHub
   - Verify deployment date matches announcements
   - Check contract creator address

3. **Cross-Reference Multiple Sources**:
   - Documentation
   - GitHub README
   - Block explorer
   - Official social media

### Warning Signs

⚠️ **Never trust addresses from:**
- Unofficial websites or domains
- Private messages (Discord, Telegram, Twitter)
- Email (MegaFi never sends addresses via email)
- Unverified social media accounts
- Third-party aggregators (without verification)

---

## Integration Examples

### Using Addresses in Code

**TypeScript/JavaScript (ethers.js)**
```typescript
import { ethers } from 'ethers';
import OperationalTreasuryABI from './abis/OperationalTreasury.json';

// Official address (use from this documentation)
const TREASURY_ADDRESS = '0x...'; 

const provider = new ethers.providers.JsonRpcProvider(
  'https://rpc.megaeth.io'
);

const treasury = new ethers.Contract(
  TREASURY_ADDRESS,
  OperationalTreasuryABI,
  provider
);

// Buy option
const tx = await treasury.buy(
  strategyAddress,
  holder,
  amount,
  period,
  []
);
```

**Solidity Integration**
```solidity
pragma solidity ^0.8.0;

import "@megafi/contracts/interfaces/IOperationalTreasury.sol";
import "@megafi/contracts/interfaces/ICoverPool.sol";

contract YourProtocol {
    IOperationalTreasury public immutable treasury;
    ICoverPool public immutable coverPool;
    
    constructor(
        address _treasury,
        address _coverPool
    ) {
        treasury = IOperationalTreasury(_treasury);
        coverPool = ICoverPool(_coverPool);
    }
    
    function buyOption(
        address strategy,
        uint256 amount,
        uint256 period
    ) external {
        // Your logic here
        treasury.buy(strategy, msg.sender, amount, period, new bytes[](0));
    }
}
```

---

## ABIs and Interfaces

### Where to Find ABIs

**NPM Package** (upon release):
```bash
npm install @megafi/contracts
```

**GitHub Repository**:
```
https://github.com/Mega-Fi/contracts/tree/main/abis
```

**Block Explorer**:
```
Copy ABI directly from verified contract page
```

### Interface Imports

```solidity
// Core interfaces
import "@megafi/contracts/interfaces/IOperationalTreasury.sol";
import "@megafi/contracts/interfaces/ICoverPool.sol";
import "@megafi/contracts/interfaces/IHegicStrategy.sol";
import "@megafi/contracts/interfaces/IPositionsManager.sol";

// External interfaces
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
```

---

## Address Updates

### When Addresses Change

Addresses may change due to:
- **Proxy Upgrades**: Implementation addresses change, proxy stays same
- **Major Versions**: New deployments for breaking changes
- **Network Migrations**: Moving to different chain

**Stay Updated**:
- Watch GitHub releases
- Follow @MegaFiApp on Twitter
- Join official Discord
- Subscribe to newsletter
- Check documentation regularly

### Version Tracking

```
V1.0 (Initial Deployment):
- All core contracts
- 6-8 strategy types
- Basic functionality

V1.1 (Future):
- Additional strategies
- Optimizations
- New features

V2.0 (Future):
- Major upgrades
- New architecture
- Enhanced features
```

---

## Security Considerations

### Before Using Addresses

1. **Verify from multiple official sources**
2. **Check contract is verified on explorer**
3. **Review contract code matches GitHub**
4. **Test with small amounts first**
5. **Use testnet before mainnet**

### Reporting Suspicious Addresses

If you encounter fraudulent addresses:

**Contact:**
- Email: security@megafi.app
- Discord: #security channel
- Twitter: @MegaFiApp (DMs open for security)

**Provide:**
- Suspicious address
- Where you found it
- Any transaction hashes
- Screenshots if applicable

---

## Deployment Timeline

### Mainnet Launch

**Expected**: Q1 2026 (subject to audits and testing)

**Deployment Order**:
1. Core contracts (Treasury, CoverPool, PositionsManager)
2. Strategy contracts (Call, Put, Straddle, Strangle)
3. Utility contracts (LimitController, ProfitCalculator)
4. Initial USDC liquidity seeding
5. First epoch initialization

**Announcement Channels**:
- Official blog (blog.megafi.app)
- Twitter (@MegaFiApp)
- Discord (https://discord.com/invite/EFTrPCREfZ)
- Documentation (docs.megafi.app)

---

## FAQ

**When will contract addresses be available?**  
Upon mainnet deployment. Follow official channels for announcements.

**Are testnet addresses the same as mainnet?**  
No. Testnet and mainnet have completely different addresses.

**Can I use these addresses on Ethereum or other chains?**  
No. These contracts are specific to MegaETH network only.

**What if I send USDC to the wrong address?**  
Blockchain transactions are irreversible. Always verify addresses before sending.

**How do I know an address is official?**  
Check multiple official sources, verify on block explorer, and review source code.

**Will proxy addresses ever change?**  
No. Proxy addresses remain constant. Only implementation addresses change during upgrades.

**Where can I get test USDC for testnet?**  
Testnet faucet will be provided (link TBA).

**Can I verify contracts myself?**  
Yes. All source code will be published on GitHub and verified on block explorer.

---

## Next Steps

Use addresses for integration:

- [Smart Contracts](smart-contracts.md) - Contract interfaces and functions
- [Architecture](architecture.md) - System design overview
- [Security Audits](security-audits.md) - Security information

---

**Always verify. Never trust blindly.**
