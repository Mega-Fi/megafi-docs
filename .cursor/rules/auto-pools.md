# Architecture
The underlying protocol has a main base vault and module contracts that manage the user’s liquidity according to the intents selected by the user.


Base Vault
Base contract has the integration with concentrated AMM and it implements the basic required actions to move the user’s liquidity for the intent selected by the user. Since all AMMs have some common functionalities e.g. mint, burn, collect & swap, all these functions are integrated in the base contract’s library PoolActions.sol.

All pools are managed in the base vault and it deploys strategies for each pool and multiple strategies can be created for each pool. Each strategy has multiple states which is explained in Strategy section below.

Base vault has separate fee-sharing mechanisms for compounding strategies and non-compounding strategies. All the data of users will be stored on the base vault i.e. mode selected by the user, liquidity delta, upper tick, lower tick, and fees earned by the user. NFT will be minted to users against all the above details since each user has custom strategies every time when they deposit a new strategy.

Strategy
The strategy could be considered as a separate vault inside the base. Strategy owners can only select a single mode out of four rebalance intents (bull, bear, dynamic, static) during strategy creation. Strategy creators can also select other liquidity intents:

Auto-exit and Reinvest 

Liquidity Distribution

Hedging

Rebalance intents have a variety of actions e.g. Rebase Inactivity, Price Preference, Active Rebalance. Similarly every intent can introduce new liquidity actions. 

Strategy also has position ticks and preferences (depending on other intents) which are selected by owners. Soon after the current price goes outside the desired price range a new position will be minted with new ticks and the transaction is triggered by the bot (off chain bots are monitoring the modes of all the strategies). 

Note: Bot does not have access to the funds of users inside any strategy; all the validation is handled in smart contract they are only used to initiate the transaction when specified prices are hit. 

The identities of the strategies are set by their respective hashes. The users can create their own strategy or they can select any of the previously created strategies. A single strategy will have multiple users and fees will be distributed among them according to the compounding or non-compounding fee-sharing mechanism.

If any change happens in ticks of the strategy it will be reflected to all users having the same strategy ID. The state for the strategy consists of:

The hash of all mode IDs selected in this strategy

The hash of all inputs of their respective intent

The hash of additional data required for tracking any detail for intents

Compounding or no compounding

Balances left of users who joined this strategy

Total shares minted through this strategy 

FeeGrowth for tracking of fees for non-compounding strategy

ID Representation of Intents in Base Vault
Every intent has some logic e.g. intent 1 implements the shifting of liquidity to the left with respect to current tick so this custom logic of Intent 1 will be in the modules contract that will perform actions according to the conditions of given intent. 

Logic of all intents is implemented on chain. New actions for any intent could be introduced by governance. Every time any intent action is introduced through governance it’s respective ID will be stored in a base vault’s module contract that contains the logic for that particular ID. 

Fee-Sharing Mechanism For Common Strategies
When LPs directly deposit on AMM they only have a single position that is earning the fees so all the fees will be collected by that specific user only. In our architecture every user has a unique position and distribution of fees might be a hectic task.

Base vault has the feature that any user can join any strategy and there could be a higher probability that more than two strategies share the same ticks so in this case fee sharing is handled accordingly for compounding or non-compounding.

Hierarchy Followed in Contracts:
Single pool => contains multiple strategies => single strategy contains multiple users

So we need to take care the fee mechanism according to above hierarchy: 

Single pool => fee will be distributed among each strategy => strategy will distribute the share of earned fee to their users

Base Vault Methods:

Create Strategy 

Deposit 

updatePositionLiquidity (increase liquidity) 

collect (only non-compounders can call) 

shiftLiqudity (re mint or hodl liquidity of strategy)

HODL Inside Strategy
Strategy owner has the right to HODL the liquidity inside contract. For example, if market is very volatile then the assets of all the users in that strategy will sit idle in contract until the strategy owner unHODL the strategy with new ticks on AMM.

Note: Users have full authority to withdraw the strategy any time during the HODL period as well.

# Auto-Rebalance
Define how LPs want their liquidity to respond to price changes.

A51 offers a set of auto-rebalance intents that helps users dictate how they want the A51's rebalancing mechanism to work for them. Following are the auto-rebalance intents offered by A51:

Market modes

Rebalance types

Rebalance triggers

Rebalance count

# Market Modes
Selecting the right market mode for your intent is the first step in automating your rebalancing strategy. Market modes allow LPs to choose the direction of rebalancing giving them greater control over their liquidity. Based on the macro market trends, there are four modes that an LP can select from:


Bull Mode: In this mode, the position trails the current pool price as the asset price rises, optimizing for upward market trends.


Bull Mode
Bear Mode: Here, the position trails the current pool price when the asset price is declining, ideal for downward market trends.


Bear Mode
Dynamic Mode: This mode allows the position to trail the current pool price in both upward and downward directions, making it suitable for markets with little to no clear trend.


Dynamic Mode
Static Mode: In this setting, the position remains fixed and does not trail the changing prices of the underlying assets, offering a more stable approach.


Static Mode
For a deeper understanding of these market modes, see them in action via the following examples. 

No.
Mode
Description
Example
1

Bull

Best for bull market. This mode functions like a dynamic range order that follows the price of the tokenB asset up.

Rebalance will happen on the right side of the price. This strategy is for LPs who expect ETH to go up.

2

Bear

Best for bear market. This mode functions like a dynamic range order that follows the price of the tokenA asset up.

Rebalance will happen on the left side of the price. This strategy is for LPs who expect ETH to go down.

3

Dynamic

Best for sideways (volatile) market. This mode functions like a dynamic range order that follows the pool price right and left, keeping liquidity as active as possible.

This is how ALMs work, best for volatile markets with no clear direction.

4

Static

Best for advanced liquidity strategies. This mode features static ticks that you can use to define your own custom liquidity strategy.

Static liquidity used for building more sophisticated LP strategies.

tokenA = USDC

tokenB = ETH

# Auto-Rebalance Types
After selecting a market mode, you have to choose a rebalancing type.

How Do I Choose a Rebalancing Type?
Based on your expertise, market understanding, and risks associated with each rebalancing mechanism, select one of the two rebalancing types.


Understanding Divergence Loss
When the price of tokens in a liquidity pool diverges from the price at the time of deposit, it incurs a loss to the LP called Divergence Loss (DL) or Impermanent Loss (IL). If you withdraw or rebalance your liquidity position at these prices or when your position is out of the market’s current price range, it becomes a permanent loss. It especially happens with the volatile token prices.

Trailing Rebalancing
Trailing rebalancing works by trailing the market price before executing the rebalance. It does so to wait for the market price to come back to the previous range as it goes out of range usually for a very short time. It also prevents unnecessary divergence loss by quickly swapping tokens in the pool and keeping the LP position in the range. 

When the TWAP of pool, for example TWAP of USDC per ETH in an $ETH/$USDC pool, hits the rebalancing threshold on either side of the price range, A51 will put that position right behind the new price. This means that it will not swap your assets to bring it back to the range essentially saving from greater loss of buying your asset on a higher price or selling on a lower price.

Let’s understand this by an example of a pool ETH/USDC.

Scenario 1: When $ETH Price Goes Above the Range
Your liquidity position trails the current $ETH price as it increases and goes out of range. It is suitable for bullish market trends so you would be able to capture more of the upside.

Example: Trailing Rebalancing in A51 Finance ($ETH/$USDC Pool)
Bull Mode
Let’s walk through a scenario using the $ETH/$USDC pool on Base via BaseSwap to understand how trailing rebalancing works in A51 Finance in Bull Mode.

Intents You Setup Initially:

Price Range for the strategy:

Minimum Price: 3100.56 $USDC per $ETH

Maximum Price: 3210.44 $USDC per $ETH

Rebalance Triggers (Cushion):

Min Trigger: 2890.93 $USDC per $ETH

Max Trigger: 3240.12 $USDC per $ETH

Current TWAP Price:

3180.32 $USDC per $ETH


What Happens When the $ETH Price Increases?
Let’s say the price of $ETH rises to 3235.86 $USDC per $ETH.

Rebalancing Action:
The rebalancing mechanism adjusts the price range to trail just behind the new price.

New Price Range: 3109.06 – 3210.34 $USDC per $ETH
This ensures your liquidity is positioned optimally for the updated market price.


If $ETH’s price continues to rise and touches the maximum rebalance trigger (3240.12 $USDC per $ETH):

Rebalancing Execution:
The system swaps $ETH for $USDC, rebalancing your position automatically.

What Happens When the $ETH Price Falls Back?
If the price of $ETH falls back into the original price range (3100.56 – 3210.44 $USDC per $ETH):

No Rebalancing Required:
The system does not take action since the price remains within the predefined range. Your liquidity stays intact without unnecessary adjustments.

Scenario 2: When $ETH Price Drops Below the Range
Your liquidity position trails the current $ETH price as it decreases and goes out of range. It is suitable for bearish market trends so you can protect yourself against decreasing prices.

Example: Trailing Rebalancing in A51 Finance ($ETH/$USDC Pool)
Bear Mode
Let’s walk through a scenario using the $ETH/$USDC pool on Base via BaseSwap to understand how trailing rebalancing works in A51 Finance in Bear Mode.

Intents You Setup Initially:

Price Range for strategy:

Minimum Price: 3100.56 $USDC per $ETH

Maximum Price: 3210.44 $USDC per $ETH

Rebalance Triggers (Cushion):

Min Trigger: 2890.93 $USDC per $ETH

Max Trigger: 3240.12 $USDC per $ETH

Current TWAP Price:

3180.32 $USDC per $ETH


What Happens When the $ETH Price Decreases?
Let’s say the price of $ETH falls to 2999.8 $USDC per $ETH.

Rebalancing Action:
The rebalancing mechanism adjusts the price range to trail just behind the new price.

New Price Range: 3050.24 – 3199.33 $USDC per $ETH
This ensures your liquidity is positioned optimally for the updated market price.


If $ETH’s price continues to rise and touches the minimum rebalance trigger (2890.93 $USDC per $ETH):

Rebalancing Execution:
The system swaps $USDC for $ETH, rebalancing your position automatically.

What Happens When the $ETH Price Falls Back?
If the price of $ETH falls back into the original price range (3100.56 – 3210.44 $USDC per $ETH):

No Rebalancing Required:
The system does not take action since the price remains within the predefined range. Your liquidity stays intact without unnecessary adjustments.

Scenario 3: When $ETH Price Fluctuates Below & Above the Range
Your liquidity position trails the current $ETH price as it increases or decreases or goes out of range. It is suitable for markets with little or no clear trend, that is, highly volatile so you can capture maximum fees.

Scenario 4: When $ETH Price Remains Static
Your liquidity position remains fixed and does not trail the changing $ETH price. This mode is best used with other parameters like liquidity distribution.

Trailing rebalancing mechanism makes sure your position is always within the active price range so that you can keep earning fees and yields from trading volume and avoid DL as much as possible.

Since it works by trailing the market price instead of rebalancing the position right away. Therefore, it prevents unnecessary divergence losses.

The intent bot monitors the liquidity positions every 5 minutes. If the position is out-of-range (has left the price range and rebalance triggers limits), rebalancing will be executed according to the strategy preferences based on the updated price.
Active Rebalancing
Active rebalancing adjusts your liquidity position within the market’s price range by actively adjusting the distribution of tokens in your liquidity pool. It ensures your position is always within the active price range to keep earning fees and yields from trading volume.

Let’s understand this by an example of a pool ETH/USDC. ETH has a volatile price and it could go up or down.

Scenario 1: When $ETH price goes above the range
When the price of $ETH goes above the maximum price range, your position will go out of range and will stop generating fees and yields. A51 will actively rebalance your position by converting your $ETH to $USDC partially since its price increased to bring your LP position back to the range.

Scenario 2: When $ETH price drops below the range
When the price of $ETH drops below the minimum price range, your position will go out of range and will stop generating fees and yields. A51 will actively rebalance your position by converting your $USDC to $ETH partially since its price decreased to bring your LP position back to the range.

Scenario 3: When $ETH price fluctuates below and above the range
Your liquidity position rebalances actively with the current $ETH price as it increases or decreases or goes out of range.

Set a Price Range
A51 doesn’t limit you to a fixed price range or ratio while defining auto-rebalance intents.

You can define the minimum and maximum price range around the current price. You can make it in a custom ratio according to your assets and investment mindset.

# Rebalance Triggers
The rebalance triggers are the minimum and maximum price within or around the price range you set. Setting rebalance triggers provides a cushion during market swings.

In Case of Active Rebalancing
With active rebalancing, as soon as the price touches the trigger or threshold or goes out of the price range, it swaps the assets to rebalance the position.

In Case of Trailing Rebalancing
With trailing rebalancing it’s different. When you set a rebalance trigger outside the price ranges, you dictate that at what prices rebalancing of your liquidity position should happen when the current price changes. Here’s how it benefits:

It is a high-level customization that helps you minimize unnecessary losses.

It also prevents spammed rebalancing during market volatility.

As an LP, you can speculate if the market bounces back to your main range until your set trigger of resistance or support.

# Rebalance Count
Determine how many times you want the algorithm to rebalance your liquidity position before it pauses rebalancing.

This helps LPs make a deterministic decision by rethinking their intent after the set number of rebalances as the market may change in nature.

It also helps prevent changes in their liquidity position too many times thus protecting from bigger losses which usually happen in active rebalancing.