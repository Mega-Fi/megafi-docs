# Smart Contracts

Technical reference for MegaFi smart contracts. Understand contract architecture, key functions, and integration patterns.

> **Note**: Smart contracts are currently in final audit and not yet deployed to mainnet. Contract addresses will be published upon mainnet launch. Testnet contracts are available for development and testing.

## At a Glance

- All contracts are open source and will be verified upon deployment
- EVM-compatible Solidity contracts
- Upgradeable proxy pattern for core contracts
- Multi-tier audit coverage
- Optimized for MegaETH's continuous execution
- Complete ABIs available for integration

## Contract Architecture

### Core Contracts

**MegaPoolFactory**
- Creates new token pair pools
- Manages fee tier configurations
- Emits pool creation events
- Enforces pool uniqueness

**MegaPool**
- Core AMM logic with concentrated liquidity
- Handles swaps and liquidity provision
- Manages tick-based liquidity distribution
- Real-time fee accrual

**PositionManager**
- Manages LP positions as NFTs (ERC-721)
- Tracks liquidity zones and ownership
- Handles fee collection
- Supports position transfers

**SwapRouter**
- Optimized swap routing
- Multi-hop support
- Slippage protection
- Batch operations

### Strategy Contracts

**StrategyManager**
- Deploys and manages automated strategies
- Executes rebalancing operations
- Tracks strategy performance
- Enforces risk parameters

**RebalanceExecutor**
- Calculates optimal liquidity zones
- Executes position adjustments
- Manages gas efficiency
- Emits rebalance events

### Risk Contracts

**OptionFactory**
- Creates option contracts
- Manages strike prices and expirations
- Tracks open interest
- Enforces position limits

**OptionContract**
- Handles option lifecycle
- Manages collateral
- Executes settlements
- Calculates Greeks in real-time

**CollateralManager**
- Manages option collateral
- Enforces margin requirements
- Handles liquidations
- Tracks health ratios

## Key Interfaces

### IMegaPool

```solidity
interface IMegaPool {
    function swap(
        address recipient,
        bool zeroForOne,
        int256 amountSpecified,
        uint160 sqrtPriceLimitX96,
        bytes calldata data
    ) external returns (int256 amount0, int256 amount1);

    function mint(
        address recipient,
        int24 tickLower,
        int24 tickUpper,
        uint128 amount,
        bytes calldata data
    ) external returns (uint256 amount0, uint256 amount1);

    function burn(
        int24 tickLower,
        int24 tickUpper,
        uint128 amount
    ) external returns (uint256 amount0, uint256 amount1);

    function collect(
        address recipient,
        int24 tickLower,
        int24 tickUpper,
        uint128 amount0Requested,
        uint128 amount1Requested
    ) external returns (uint128 amount0, uint128 amount1);
}
```

### IPositionManager

```solidity
interface IPositionManager {
    struct MintParams {
        address token0;
        address token1;
        uint24 fee;
        int24 tickLower;
        int24 tickUpper;
        uint256 amount0Desired;
        uint256 amount1Desired;
        uint256 amount0Min;
        uint256 amount1Min;
        address recipient;
        uint256 deadline;
    }

    function mint(MintParams calldata params)
        external
        payable
        returns (
            uint256 tokenId,
            uint128 liquidity,
            uint256 amount0,
            uint256 amount1
        );

    function increaseLiquidity(
        uint256 tokenId,
        uint256 amount0Desired,
        uint256 amount1Desired,
        uint256 amount0Min,
        uint256 amount1Min,
        uint256 deadline
    ) external payable returns (uint128 liquidity, uint256 amount0, uint256 amount1);

    function decreaseLiquidity(
        uint256 tokenId,
        uint128 liquidity,
        uint256 amount0Min,
        uint256 amount1Min,
        uint256 deadline
    ) external payable returns (uint256 amount0, uint256 amount1);

    function collect(
        uint256 tokenId,
        address recipient,
        uint128 amount0Max,
        uint128 amount1Max
    ) external payable returns (uint256 amount0, uint256 amount1);
}
```

### ISwapRouter

```solidity
interface ISwapRouter {
    struct ExactInputSingleParams {
        address tokenIn;
        address tokenOut;
        uint24 fee;
        address recipient;
        uint256 deadline;
        uint256 amountIn;
        uint256 amountOutMinimum;
        uint160 sqrtPriceLimitX96;
    }

    function exactInputSingle(ExactInputSingleParams calldata params)
        external
        payable
        returns (uint256 amountOut);

    struct ExactInputParams {
        bytes path;
        address recipient;
        uint256 deadline;
        uint256 amountIn;
        uint256 amountOutMinimum;
    }

    function exactInput(ExactInputParams calldata params)
        external
        payable
        returns (uint256 amountOut);
}
```

## Events

### Pool Events

```solidity
event Swap(
    address indexed sender,
    address indexed recipient,
    int256 amount0,
    int256 amount1,
    uint160 sqrtPriceX96,
    uint128 liquidity,
    int24 tick
);

event Mint(
    address sender,
    address indexed owner,
    int24 indexed tickLower,
    int24 indexed tickUpper,
    uint128 amount,
    uint256 amount0,
    uint256 amount1
);

event Burn(
    address indexed owner,
    int24 indexed tickLower,
    int24 indexed tickUpper,
    uint128 amount,
    uint256 amount0,
    uint256 amount1
);

event Collect(
    address indexed owner,
    address recipient,
    int24 indexed tickLower,
    int24 indexed tickUpper,
    uint128 amount0,
    uint128 amount1
);
```

### Strategy Events

```solidity
event StrategyDeployed(
    uint256 indexed strategyId,
    address indexed owner,
    address pool,
    uint8 mode
);

event Rebalanced(
    uint256 indexed strategyId,
    int24 oldTickLower,
    int24 oldTickUpper,
    int24 newTickLower,
    int24 newTickUpper,
    uint256 gasUsed
);
```

## Access Control

### Role-Based Permissions

```solidity
// Owner role
bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");

// Operator role
bytes32 public constant OPERATOR_ROLE = keccak256("OPERATOR_ROLE");

// Strategy role
bytes32 public constant STRATEGY_ROLE = keccak256("STRATEGY_ROLE");
```

**OWNER_ROLE**: Deploy contracts, manage upgrades, configure parameters

**OPERATOR_ROLE**: Execute administrative functions, pause in emergencies

**STRATEGY_ROLE**: Execute automated rebalancing operations

## Security Features

### Reentrancy Protection

All external functions with state changes use `nonReentrant` modifier:

```solidity
modifier nonReentrant() {
    require(_status != _ENTERED, "ReentrancyGuard: reentrant call");
    _status = _ENTERED;
    _;
    _status = _NOT_ENTERED;
}
```

### Integer Overflow Protection

Solidity 0.8+ automatic overflow checking:

```solidity
// Automatic revert on overflow
uint256 result = a + b;
```

### Pause Mechanism

Emergency pause functionality:

```solidity
function pause() external onlyOwner {
    _pause();
}

function unpause() external onlyOwner {
    _unpause();
}

modifier whenNotPaused() {
    require(!paused(), "Pausable: paused");
    _;
}
```

## Gas Optimizations

### Storage Packing

Efficient storage slot usage:

```solidity
struct Position {
    uint128 liquidity;      // 16 bytes
    uint128 feeGrowthInside0LastX128; // 16 bytes (packed in slot 1)
    uint128 feeGrowthInside1LastX128; // 16 bytes
    uint128 tokensOwed0;    // 16 bytes (packed in slot 2)
    uint128 tokensOwed1;    // 16 bytes
}
```

### Calldata vs Memory

Use `calldata` for read-only parameters:

```solidity
function exampleFunction(bytes calldata data) external {
    // More gas efficient than bytes memory
}
```

### Batch Operations

Multicall support for gas savings:

```solidity
function multicall(bytes[] calldata data)
    external
    payable
    returns (bytes[] memory results)
{
    results = new bytes[](data.length);
    for (uint256 i = 0; i < data.length; i++) {
        (bool success, bytes memory result) = address(this).delegatecall(data[i]);
        require(success, "Multicall failed");
        results[i] = result;
    }
}
```

## Upgrade Mechanism

### Proxy Pattern

Transparent upgradeable proxy:

```
User → Proxy Contract → Implementation Contract

Proxy: Holds state, delegates calls
Implementation: Contains logic, upgradeable
```

### Upgrade Process

```solidity
function upgradeTo(address newImplementation) external onlyOwner {
    require(Address.isContract(newImplementation), "Invalid implementation");
    _upgradeTo(newImplementation);
    emit Upgraded(newImplementation);
}
```

## Testing

### Test Coverage

- Unit tests: 100% coverage
- Integration tests: All user flows
- Fuzz tests: Edge cases
- Invariant tests: Protocol invariants

### Audit Status

All contracts audited by multiple firms:
- Audit 1: [Firm Name] - [Date]
- Audit 2: [Firm Name] - [Date]  
- Audit 3: [Firm Name] - [Date]

Reports available on [GitHub/website].

## Contract Verification

All contracts are verified on MegaETH block explorer:
- Source code published
- Compiler version documented
- Constructor arguments public
- ABIs available

## FAQ

**Are contracts upgradeable?**  
Core contracts use upgradeable proxies. Peripheral contracts may be immutable.

**How are upgrades governed?**  
Currently admin multi-sig. Moving toward decentralized governance.

**Can I fork the contracts?**  
Yes. Open source under [License]. Attribution required.

**Where are ABIs hosted?**  
GitHub repository and npm package. Also on block explorer.

**How do I report vulnerabilities?**  
security@megafi.app with responsible disclosure. Bug bounty available.

## Next Steps

Explore contract integration:

- [Contract Addresses](contract-addresses.md) - Deployed addresses
- [SDK Reference](sdk-reference.md) - JavaScript integration
- [Integration Guide](integration-guide.md) - Build on MegaFi

---

**Open source. Battle tested. Ready to build.**

