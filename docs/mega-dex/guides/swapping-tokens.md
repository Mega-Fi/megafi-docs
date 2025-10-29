# Swapping Tokens

Complete guide to executing token swaps on MegaFi. Follow these steps to trade tokens with sub-50ms execution and minimal slippage.

## Prerequisites

- Wallet connected to MegaFi
- MegaETH network active
- Tokens available on MegaETH (bridge if needed)
- Small amount of $MEGA for gas (~ $0.005 per swap)

## Step-by-Step Guide

### Step 1: Navigate to Swap

Visit [megafi.app/swap](https://megafi.app/swap) or click "Swap" in the top navigation.

### Step 2: Select Input Token

1. Click the token selector in the top section
2. Search for your token by:
   - Name (e.g., "Ethereum")
   - Symbol (e.g., "ETH")
   - Contract address (for unlisted tokens)
3. Click the token to select it

Your balance for the selected token displays below the selector.

### Step 3: Enter Amount

Type the amount you want to swap:

**Manual Entry**: Type exact amount

**Max Button**: Swap entire balance (minus gas)

**Percentage Buttons**: Quick selection
- 25%: Quarter of balance
- 50%: Half of balance
- 75%: Three-quarters
- 100%: Full balance

If balance is insufficient, a red error displays.

### Step 4: Select Output Token

1. Click the token selector in the bottom section
2. Search and select the token you want to receive
3. Cannot select same token for input and output

### Step 5: Review Quote

Quote generates automatically showing:

**Exchange Rate**: Current price between tokens

**Expected Output**: Amount you'll receive

**Price Impact**: How your trade affects pool price
- Green (< 0.5%): Excellent
- Yellow (0.5% - 2%): Moderate
- Red (> 2%): High, consider reducing size

**Minimum Received**: Guaranteed minimum after slippage

**Route**: Path through MegaPools (direct or multi-hop)

**Fees**: Trading fee + gas cost

Quote updates in real-time as conditions change.

### Step 6: Adjust Settings (Optional)

Click settings icon (gear) to modify:

**Slippage Tolerance**:
- Auto: MegaFi sets based on pair (recommended)
- Custom: Enter your own (0.1% - 5%)

**Transaction Deadline**:
- Default: 30 minutes
- Custom: 1 minute to 24 hours

**Expert Mode** (advanced users only):
- Disable confirmation
- Allow high price impact
- Custom recipient address

### Step 7: Approve Token (First Time)

If this is your first swap with this input token:

1. Click "Approve [TOKEN]" button
2. Wallet prompts approval transaction
3. Review and confirm
4. Wait for confirmation (< 10ms)
5. "Swap" button activates

Token approvals are permanent - no need to re-approve for future swaps.

### Step 8: Execute Swap

1. Click "Swap" button
2. Confirmation modal displays:
   - Input and output amounts
   - Exchange rate
   - Price impact warning (if > 2%)
   - Fees breakdown
   - Minimum received
3. Review details carefully
4. Click "Confirm Swap"

### Step 9: Confirm in Wallet

Your wallet prompts transaction confirmation:

1. Review transaction details:
   - Contract interaction
   - Gas cost (~ $0.001 - $0.005)
   - Network (verify MegaETH)
2. Click "Confirm"

### Step 10: Transaction Complete

Swap executes in 10-50 milliseconds:

1. Progress indicator shows:
   - Submitted (instant)
   - Pending (< 5ms)
   - Confirmed (< 10ms)
2. Success message displays
3. Output tokens appear in wallet
4. Transaction link to block explorer
5. Entry added to history

Verify your wallet balance updated correctly.

## Common Issues

### "Insufficient Balance"

**Problem**: Don't have enough input token.

**Solution**: 
- Check wallet balance
- Reduce swap amount
- Bridge more tokens to MegaETH

### "Approval Required"

**Problem**: Token not yet approved.

**Solution**:
- Click "Approve [TOKEN]"
- Confirm approval transaction
- Wait for confirmation
- Then execute swap

### "Slippage Exceeded"

**Problem**: Price moved beyond tolerance during execution.

**Solution**:
- Increase slippage tolerance in settings
- Try smaller trade size
- Wait for lower volatility
- Try again (price may have corrected)

### "Insufficient Liquidity"

**Problem**: Pool doesn't have enough tokens for your trade size.

**Solution**:
- Reduce trade amount
- Split into multiple smaller trades
- Try different route (if available)
- Wait for more liquidity

### "Swap Button Disabled"

**Problem**: Prerequisites not met.

**Solutions**:
- Token not selected: Choose both tokens
- No amount entered: Enter swap amount
- Approval needed: Approve token first
- Wrong network: Switch to MegaETH
- Amount too small: Increase above minimum

## Tips for Better Swaps

### Check Price Impact

For large trades, price impact matters:

```
< 0.05%: Excellent, proceed
0.05% - 0.5%: Good, acceptable
0.5% - 2%: Moderate, consider splitting
> 2%: High, definitely split trade
```

### Split Large Trades

Instead of one $100k swap:
```
Option 1: Single $100k swap
Price impact: 3%
Cost: $3,000 slippage

Option 2: Ten $10k swaps
Price impact per trade: 0.3%
Total cost: $300 slippage
Savings: $2,700
```

### Use Limit Orders

For non-urgent trades, consider limit orders (via third-party protocols built on MegaFi):
- Set desired price
- Order executes when price reached
- No rush, no slippage concern

### Monitor Gas Prices

Gas on MegaETH is cheap but:
- Swaps: ~ $0.003
- Approvals: ~ $0.005

Ensure you have $MEGA for gas.

### Timing Your Trades

While MegaETH is fast, markets still move:
- Check overall market conditions
- Avoid swapping during extreme volatility
- Use price alerts for optimal entry

## Advanced Features

### Multi-Hop Routing

When no direct pool exists, swaps route through multiple pools:

```
Example: LINK → USDC
Route: LINK → ETH → USDC

You pay fees in both pools but get best overall price
```

### Custom Routes (Expert Mode)

1. Enable Expert Mode in settings
2. View all possible routes
3. Select preferred path manually
4. Useful if you have specific liquidity preferences

### MEV Protection

MegaFi includes front-running protection:
- Private RPC endpoint option
- Real-time execution minimizes MEV window
- Slippage protection prevents sandwich attacks

## FAQ

**How fast are swaps?**  
10-50 milliseconds from submission to finality.

**Can I cancel after clicking swap?**  
No. Execution is immediate. Double-check before confirming.

**Do I pay gas for failed swaps?**  
Yes, gas is consumed even if swap fails. Ensure parameters are correct.

**Why do prices update while I'm on the page?**  
MegaETH processes transactions in real-time. Quotes reflect current pool state.

**Can I swap any amount?**  
Minimum ~$0.01 worth. Maximum limited by pool liquidity.

**Are there daily limits?**  
No protocol-level limits. Swap as much as liquidity allows.

## Next Steps

After mastering swaps:

- [Providing Liquidity](../providing-liquidity.md) - Earn fees from trades
- [Understanding Fees](understanding-fees.md) - Learn about costs
- [Earning Yield](earning-yield.md) - Maximize returns

---

**Instant swaps. Every time.**

