# Troubleshooting

Common issues and solutions when using MegaFi. Find quick fixes for connection problems, transaction failures, and interface errors.

## Connection Issues

### Wallet Won't Connect

**Symptoms**: "Connect Wallet" button doesn't work, no wallet prompt appears.

**Solutions**:

1. **Unlock your wallet**: Ensure wallet extension is unlocked
2. **Refresh page**: Hard refresh (Ctrl+F5 or Cmd+Shift+R)
3. **Clear cache**: Clear browser cache and cookies
4. **Try different browser**: Test in Chrome, Firefox, or Brave
5. **Update wallet**: Ensure wallet extension is latest version
6. **Disable other wallets**: Multiple wallet extensions may conflict

### Wrong Network

**Symptoms**: Interface shows "Wrong Network" or "Switch to MegaETH".

**Solutions**:

1. **Switch network**: Click "Switch Network" button in prompt
2. **Manual switch**: Open wallet, select MegaETH from network list
3. **Add network**: If MegaETH not in list, click "Add Network" on MegaFi
4. **Verify RPC**: Check RPC URL is `https://rpc.megaeth.io`
5. **Clear network cache**: Remove and re-add MegaETH network

### Disconnected During Use

**Symptoms**: Wallet disconnects unexpectedly, must reconnect frequently.

**Solutions**:

1. **Check wallet settings**: Ensure auto-lock timeout is reasonable
2. **Stable internet**: Verify internet connection is stable
3. **Browser extensions**: Disable unnecessary extensions
4. **Update software**: Update both browser and wallet
5. **Try different wallet**: Test if issue persists with different wallet

## Transaction Failures

### "Insufficient Balance"

**Symptoms**: Transaction fails, "insufficient balance" error.

**Solutions**:

1. **Check token balance**: Verify you have enough input token
2. **Check gas balance**: Ensure sufficient $MEGA for gas (need $0.01)
3. **Reduce amount**: Lower swap/deposit amount slightly
4. **Account for fees**: Remember trading fees deducted from output

### "Slippage Exceeded"

**Symptoms**: Swap or liquidity transaction reverts, "slippage exceeded" message.

**Solutions**:

1. **Increase slippage**: Settings → Slippage Tolerance → 1-2%
2. **Smaller trade**: Split large trades into multiple smaller ones
3. **Wait for stability**: Try again during lower volatility
4. **Check liquidity**: Verify pool has sufficient liquidity

### "Approval Required"

**Symptoms**: Transaction blocked, says "Approve [TOKEN] first".

**Solutions**:

1. **Click Approve**: Click "Approve" button for each token
2. **Wait for confirmation**: Ensure approval transaction confirms (< 10ms)
3. **Check approval**: If still failing, check token approval in wallet
4. **Re-approve**: Revoke old approval and create new one
5. **Sufficient gas**: Ensure enough $MEGA for approval transaction

### Transaction Pending Forever

**Symptoms**: Transaction shows "pending" for minutes without confirming.

**Solutions**:

1. **Check block explorer**: Visit [explorer.megaeth.io](https://explorer.megaeth.io) and search your tx hash
2. **Refresh page**: Transaction may have confirmed but interface didn't update
3. **Clear pending txs**: In wallet, clear/cancel pending transactions
4. **Restart wallet**: Close and reopen wallet extension
5. **Contact support**: If pending > 5 minutes (very rare on MegaETH)

## Interface Issues

### Prices Not Updating

**Symptoms**: Quotes stay static, don't update in real-time.

**Solutions**:

1. **Refresh page**: Simple page refresh often fixes
2. **Check internet**: Verify stable connection
3. **Clear cache**: Browser cache may serve stale data
4. **Different browser**: Test if browser-specific issue
5. **RPC issue**: Try backup RPC: `https://rpc-backup.megaeth.io`

### Balances Showing Incorrectly

**Symptoms**: Wallet balances don't match actual holdings.

**Solutions**:

1. **Refresh balances**: Click refresh icon next to balance
2. **Check explorer**: Verify actual balance on block explorer
3. **Wrong network**: Ensure on MegaETH, not different chain
4. **Clear cache**: Interface may cache old balances
5. **Re-connect wallet**: Disconnect and reconnect wallet

### LP NFT Not Showing

**Symptoms**: Provided liquidity but NFT doesn't appear in wallet or interface.

**Solutions**:

1. **Check Positions tab**: Navigate to Positions page on MegaFi
2. **Transaction confirmed?**: Verify liquidity transaction completed
3. **Refresh wallet**: Some wallets need manual NFT refresh
4. **Add NFT manually**: Add Position Manager contract address to wallet
5. **Check explorer**: Verify NFT minted in transaction logs

### Charts Not Loading

**Symptoms**: Price charts, volume charts show blank or error.

**Solutions**:

1. **Refresh page**: Reload interface
2. **Disable ad blocker**: May block chart libraries
3. **Check browser console**: Look for error messages (F12)
4. **Different browser**: Test if browser-specific
5. **Clear site data**: Clear MegaFi site data in browser settings

## Liquidity Issues

### Can't Add Liquidity

**Symptoms**: "Add Liquidity" button disabled or transaction fails.

**Solutions**:

1. **Both tokens needed**: Must have both tokens in pair
2. **Correct ratio**: Tokens must be in proportion to current price
3. **Approve tokens**: Both tokens need approval
4. **Zone selection**: Ensure zone boundaries are valid
5. **Minimum amount**: Check if amount meets minimum (usually $1)

### Position Showing Wrong Value

**Symptoms**: Position value doesn't match expectations.

**Solutions**:

1. **Include unclaimed fees**: Total value = liquidity + fees
2. **Price movement**: Value changes as token prices move
3. **Impermanent loss**: IL affects position value
4. **Refresh data**: Click refresh on position
5. **Check explorer**: Verify on-chain position data

### Can't Remove Liquidity

**Symptoms**: Remove button disabled or transaction fails.

**Solutions**:

1. **Position active?**: Verify you own the LP NFT
2. **Correct network**: Ensure on MegaETH
3. **Sufficient gas**: Need $MEGA for transaction
4. **Try partial removal**: Remove 50% instead of 100%
5. **Check position status**: Ensure position not locked or disputed

## Strategy Issues

### Strategy Not Rebalancing

**Symptoms**: Price near zone edge, no rebalance occurred.

**Solutions**:

1. **Cooldown period**: Check if cooldown timer active
2. **Below threshold**: Rebalance benefit may not exceed minimum
3. **Gas balance**: Ensure contract has $MEGA for gas
4. **Check strategy status**: Verify strategy is active, not paused
5. **Wait longer**: Some strategies have longer cooldown (up to 12 hours)

### Strategy Underperforming

**Symptoms**: APR below expectations or pool average.

**Solutions**:

1. **Give time**: Allow 30+ days for meaningful data
2. **Wrong mode**: Switch to mode suited for current volatility
3. **Low volume period**: Pool volume may be temporarily low
4. **Expectations**: Compare to realistic benchmarks, not best-case
5. **Consider switching**: Move to different pool if persistently poor

### Can't Switch Strategy Mode

**Symptoms**: Mode switch button disabled or fails.

**Solutions**:

1. **Rebalancing in progress**: Wait for current rebalance to complete
2. **Insufficient gas**: Ensure enough $MEGA for mode switch
3. **Cooldown active**: Some modes have cooldown before switching
4. **Try again**: Temporary issue, retry in few minutes

## Options Issues

### Can't Buy Option

**Symptoms**: Buy button disabled or transaction fails.

**Solutions**:

1. **Sufficient funds**: Ensure enough USDC/tokens for premium
2. **Approve USDC**: USDC needs approval for payment
3. **Option available**: Check if strike/expiration still available
4. **Size limits**: Verify you're not exceeding position limits
5. **Liquidity**: Ensure option has available contracts

### Can't Exercise Option

**Symptoms**: Exercise button disabled or grayed out.

**Solutions**:

1. **ITM check**: Only ITM options can be exercised
2. **American vs European**: European options only at expiration
3. **Expiration**: Verify option hasn't expired already
4. **Sufficient funds**: Need funds to pay strike (for calls)
5. **Auto-exercise**: ITM options auto-exercise at expiration anyway

### Margin Call

**Symptoms**: Warning about insufficient collateral, liquidation risk.

**Solutions**:

1. **Add collateral immediately**: Deposit more USDC/tokens
2. **Close position**: Reduce or close position to free margin
3. **Check margin ratio**: See how much additional collateral needed
4. **Act quickly**: Usually 1 hour grace period before liquidation
5. **Set alerts**: Configure alerts to warn earlier next time

## Performance Issues

### Interface Slow

**Symptoms**: Pages load slowly, transactions take long to confirm.

**Solutions**:

1. **Check internet**: Verify connection speed
2. **Different RPC**: Try backup RPC endpoint
3. **Clear cache**: Browser cache may be bloated
4. **Close tabs**: Too many tabs may slow browser
5. **Update browser**: Ensure using latest browser version

### Transaction Taking Too Long

**Symptoms**: Transaction pending longer than expected (> 1 second).

**Solutions**:

1. **Check status**: View on block explorer
2. **Network congestion**: Rare on MegaETH, usually resolves quickly
3. **Increase gas**: Try slightly higher gas limit (though usually unnecessary)
4. **Wait it out**: Give it 60 seconds before worrying
5. **Contact support**: If > 5 minutes

## Getting Help

### Before Contacting Support

1. **Check this guide**: Most issues covered here
2. **Search FAQs**: [FAQs page](../reference/faqs.md) has common questions
3. **Check status**: Visit status.megaeth.io for network status
4. **Community**: Ask in Discord community channel
5. **Gather info**: Have transaction hash, wallet address, and error message ready

### Contacting Support

**Discord**: Fastest response, community + team

**Email**: support@megafi.app

**Twitter**: @MegaFiApp for status updates

**Provide**:
- Wallet address
- Transaction hash (if applicable)
- Screenshot of error
- Steps to reproduce
- Browser and wallet used

### Common Error Codes

```
Error 4001: User rejected transaction
→ You cancelled in wallet, try again

Error -32603: Internal JSON-RPC error
→ RPC issue, try backup RPC

Error -32000: Insufficient funds
→ Need more $MEGA for gas

Error 3: Execution reverted
→ Transaction would fail, check parameters
```

## Prevention Tips

1. **Keep wallet updated**: Update extensions regularly
2. **Maintain gas balance**: Always have $0.10+ in $MEGA
3. **Start small**: Test with small amounts first
4. **Set alerts**: Configure notifications for important events
5. **Regular monitoring**: Check positions weekly
6. **Backup phrases**: Securely store wallet seed phrases
7. **Use hardware wallets**: For large amounts

## FAQ

**Why do transactions fail even though I have enough balance?**  
May need gas for transaction. Slippage may be too tight. Approvals may be needed.

**Can I recover a failed transaction fee?**  
No. Gas is consumed even on failed transactions.

**What if I sent tokens to wrong address?**  
Blockchain transactions are irreversible. Always double-check addresses.

**Why can't I see my position?**  
Ensure correct network, refresh interface, check Positions tab specifically.

**Who do I contact for urgent issues?**  
Discord support channel for fastest response.

## Next Steps

- [FAQs](../reference/faqs.md) - More common questions
- [Managing Risk](managing-risk.md) - Prevent issues
- [Understanding Fees](understanding-fees.md) - Know costs

---

**Most issues are solved quickly.**

