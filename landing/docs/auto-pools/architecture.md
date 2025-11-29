# Architecture

The underlying protocol has a main base vault and module contracts that manage the user's liquidity according to the intents selected by the user.

## At a Glance

- Base vault integrates with concentrated AMM and manages all pools
- Strategies are separate vaults inside the base vault
- Multiple strategies can be created for each pool
- Fee-sharing mechanisms for compounding and non-compounding strategies
- Users receive NFTs representing their strategy positions
- Off-chain bots monitor strategies and trigger rebalancing transactions

## Base Vault

Base contract has the integration with concentrated AMM and it implements the basic required actions to move the user's liquidity for the intent selected by the user. Since all AMMs have some common functionalities e.g. mint, burn, collect & swap, all these functions are integrated in the base contract's library PoolActions.sol.

All pools are managed in the base vault and it deploys strategies for each pool and multiple strategies can be created for each pool. Each strategy has multiple states which is explained in Strategy section below.

Base vault has separate fee-sharing mechanisms for compounding strategies and non-compounding strategies. All the data of users will be stored on the base vault i.e. mode selected by the user, liquidity delta, upper tick, lower tick, and fees earned by the user. NFT will be minted to users against all the above details since each user has custom strategies every time when they deposit a new strategy.

### Key Features

**PoolActions.sol Library**: Contains common AMM functions (mint, burn, collect, swap) integrated into the base contract.

**Pool Management**: All pools are managed in the base vault with multiple strategies per pool.

**User Data Storage**: Stores mode selection, liquidity delta, upper tick, lower tick, and fees earned.

**NFT Minting**: Each user receives an NFT representing their strategy position with all relevant details.

## Strategy

The strategy could be considered as a separate vault inside the base. Strategy owners can only select a single mode out of four rebalance intents (bull, bear, dynamic, static) during strategy creation. Strategy creators can also select other liquidity intents:

- Auto-exit and Reinvest
- Liquidity Distribution
- Hedging

Rebalance intents have a variety of actions e.g. Rebase Inactivity, Price Preference, Active Rebalance. Similarly every intent can introduce new liquidity actions.

Strategy also has position ticks and preferences (depending on other intents) which are selected by owners. Soon after the current price goes outside the desired price range a new position will be minted with new ticks and the transaction is triggered by the bot (off chain bots are monitoring the modes of all the strategies).

**Note**: Bot does not have access to the funds of users inside any strategy; all the validation is handled in smart contract they are only used to initiate the transaction when specified prices are hit.

### Strategy Identification

The identities of the strategies are set by their respective hashes. The users can create their own strategy or they can select any of the previously created strategies. A single strategy will have multiple users and fees will be distributed among them according to the compounding or non-compounding fee-sharing mechanism.

If any change happens in ticks of the strategy it will be reflected to all users having the same strategy ID.

### Strategy State

The state for the strategy consists of:

- The hash of all mode IDs selected in this strategy
- The hash of all inputs of their respective intent
- The hash of additional data required for tracking any detail for intents
- Compounding or no compounding
- Balances left of users who joined this strategy
- Total shares minted through this strategy
- FeeGrowth for tracking of fees for non-compounding strategy

## ID Representation of Intents in Base Vault

Every intent has some logic e.g. intent 1 implements the shifting of liquidity to the left with respect to current tick so this custom logic of Intent 1 will be in the modules contract that will perform actions according to the conditions of given intent.

Logic of all intents is implemented on chain. New actions for any intent could be introduced by governance. Every time any intent action is introduced through governance it's respective ID will be stored in a base vault's module contract that contains the logic for that particular ID.

## Fee-Sharing Mechanism For Common Strategies

When LPs directly deposit on AMM they only have a single position that is earning the fees so all the fees will be collected by that specific user only. In our architecture every user has a unique position and distribution of fees might be a hectic task.

Base vault has the feature that any user can join any strategy and there could be a higher probability that more than two strategies share the same ticks so in this case fee sharing is handled accordingly for compounding or non-compounding.

### Hierarchy Followed in Contracts

Single pool => contains multiple strategies => single strategy contains multiple users

So we need to take care the fee mechanism according to above hierarchy:

Single pool => fee will be distributed among each strategy => strategy will distribute the share of earned fee to their users

### Fee Distribution

Fees are distributed in a hierarchical manner:

1. Pool collects fees from trading activity
2. Fees are distributed among strategies based on their liquidity contribution
3. Each strategy distributes fees to its users according to:
   - Compounding mechanism: Fees automatically reinvested
   - Non-compounding mechanism: Fees tracked via FeeGrowth and can be collected by users

## Base Vault Methods

The base vault provides the following methods for strategy management:

**Create Strategy**: Create a new strategy with selected mode and intents.

**Deposit**: Add liquidity to an existing strategy.

**updatePositionLiquidity**: Increase liquidity in an existing position.

**collect**: Collect accumulated fees (only non-compounders can call).

**shiftLiquidity**: Re-mint or HODL liquidity of strategy.

## HODL Inside Strategy

Strategy owner has the right to HODL the liquidity inside contract. For example, if market is very volatile then the assets of all the users in that strategy will sit idle in contract until the strategy owner unHODL the strategy with new ticks on AMM.

**Note**: Users have full authority to withdraw the strategy any time during the HODL period as well.

### When to Use HODL

HODL functionality allows strategy owners to pause automatic rebalancing during extreme market volatility. This can help protect users from unnecessary rebalancing costs during uncertain market conditions.

### User Rights During HODL

Even when a strategy is in HODL mode, users maintain full control:
- Can withdraw their liquidity at any time
- Can exit the strategy completely
- No forced lock-in period

## Bot Monitoring

Off-chain bots monitor the modes of all the strategies. These bots:

- Check strategy conditions every 5 minutes
- Trigger rebalancing transactions when conditions are met
- Do not have access to user funds
- All validation is handled on-chain in smart contracts

The bots are only used to initiate transactions when specified prices are hit. All security and validation logic is implemented in the smart contracts themselves.

## Security Considerations

**On-Chain Validation**: All critical logic and validation happens on-chain in smart contracts.

**Bot Limitations**: Off-chain bots cannot access user funds or bypass contract security.

**User Control**: Users can always withdraw from strategies, even during HODL periods.

**Strategy Isolation**: Each strategy operates independently with its own state and user balances.

## FAQ

**Can I create my own strategy?**  
Yes. Users can create custom strategies or join existing ones.

**What happens if multiple users join the same strategy?**  
Fees are distributed proportionally among all users in the strategy according to the fee-sharing mechanism.

**Can I withdraw during HODL?**  
Yes. Users have full authority to withdraw at any time, even during HODL periods.

**How are fees calculated?**  
Fees are distributed hierarchically: pool → strategies → users, based on liquidity contribution.

**Are bots secure?**  
Yes. Bots only trigger transactions. All validation and security is handled on-chain in smart contracts.

## Next Steps

Learn more about Auto-Pools:

- [Strategy Modes](strategy-modes.md) - Choose your market mode
- [Automated Rebalancing](automated-rebalancing.md) - How rebalancing works
- [Overview](overview.md) - Auto-Pools introduction

---

**Built for flexibility and control.**

