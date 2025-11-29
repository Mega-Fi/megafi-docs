# LP NFTs

Liquidity positions on MegaFi are represented as non-fungible tokens (NFTs). Each LP NFT tracks your liquidity, zone boundaries, and accumulated fees in a specific MegaPool.

## At a Glance

- Each liquidity position is an ERC-721 NFT
- NFTs track position details, fees, and liquidity amount
- Fully transferable - sell, trade, or hold like any NFT
- View in wallet, on OpenSea, or in MegaFi interface
- Burn NFT when removing all liquidity
- Multiple NFTs per wallet supported

## Why NFTs?

Traditional AMM LP tokens are fungible - one token is identical to another. This works for full-range positions but fails for concentrated liquidity where each position has unique characteristics:

**Position A**:
- Zone: $1900 - $2000
- Liquidity: 10 ETH + 19,000 USDC
- Fees: $150 unclaimed

**Position B**:
- Zone: $2000 - $2100
- Liquidity: 10 ETH + 20,000 USDC
- Fees: $50 unclaimed

These positions are not interchangeable. NFTs solve this by giving each position a unique identifier.

## NFT Structure

Each LP NFT contains:

### On-Chain Metadata

**Token ID**: Unique identifier for the position.

**Pool**: Which MegaPool the position is in.

**Liquidity**: Amount of liquidity units in the position.

**Lower Tick**: Lower boundary of Liquidity Zone.

**Upper Tick**: Upper boundary of Liquidity Zone.

**Fee Growth**: Checkpoint for calculating unclaimed fees.

### Computed Values

The interface calculates from on-chain data:

**Current Value**: USD worth of position at current price.

**Token Amounts**: How much of each token the position contains.

**Unclaimed Fees**: Fees earned since last collection.

**Zone Status**: Whether position is active or out of range.

**APR**: Historical return rate.

## Viewing Your NFTs

### In MegaFi Interface

Navigate to "Positions" tab. All your LP NFTs display with:
- Visual representation of position
- Current status (active/inactive)
- Value and fee earnings
- Quick actions (add, remove, collect)

### In Wallet

LP NFTs appear in your wallet's NFT section:
- Token ID number
- Generic placeholder image (custom images coming soon)
- Contract address

Click for basic details. For full information, use MegaFi interface.

### On NFT Marketplaces

LP NFTs are tradeable on platforms like OpenSea:
- Listed under MegaFi Position Manager contract
- Metadata displays position details
- Buyers can see zone boundaries and fees before purchasing

## Transferring NFTs

### Why Transfer?

**Sell Position**: Sell profitable position without closing it.

**Gift**: Transfer position to another wallet you control.

**Collateral**: Use as collateral in lending protocols (where supported).

**Trade**: Exchange positions with other LPs.

### How to Transfer

**Via MegaFi Interface**:
1. Click position
2. Select "Transfer"
3. Enter recipient address
4. Confirm transaction

**Via Wallet**:
1. Find NFT in wallet
2. Select "Send" or "Transfer"
3. Enter recipient address
4. Confirm transaction

**Via NFT Marketplace**:
1. List position for sale
2. Buyer purchases
3. NFT transfers automatically

Transfer gas cost: ~ $0.003

### What Transfers

When you transfer an LP NFT:

**Transfers**:
- All liquidity in the position
- All unclaimed fees
- Position metadata (zone boundaries, etc.)

**Doesn't Transfer**:
- Token approvals (recipient must approve separately)
- Historical data (charts, past APR)

The recipient owns the position completely and can manage it as they wish.

## Trading LP NFTs

### Marketplace Trading

List positions on NFT marketplaces:

**Attractive Positions**:
- Active (in range)
- High unclaimed fees
- Profitable zone selection
- Popular token pair

**Less Attractive**:
- Out of range
- Low fees
- Impaired by IL
- Obscure token pair

Price typically reflects:
- Current position value
- Unclaimed fees
- Expected future earnings
- Liquidity of underlying tokens

### Pricing Positions

Fair value calculation:

```
Position Value = Token Amounts Value + Unclaimed Fees + Expected Future Fees
```

Consider:
- How long until zone goes inactive
- Historical fee earnings rate
- IL exposure
- Gas costs to manage position

Buyers pay premium for:
- High-earning positions
- Optimal zones around current price
- Stable pairs with consistent fees
- Large unclaimed fee balances

### OTC Trading

Trade positions directly with other users:

1. Agree on price
2. Transfer NFT
3. Receive payment

No marketplace fees, but requires trust or escrow.

## Managing Multiple Positions

### Position Dashboard

MegaFi interface provides overview of all positions:

**Active Positions**: In range and earning.

**Inactive Positions**: Out of range.

**Total Value**: Combined value across all positions.

**Total Unclaimed Fees**: Sum of all fee earnings.

**Combined APR**: Weighted average return.

### Bulk Actions

Manage multiple positions simultaneously:

**Collect All Fees**: Claim fees from all positions in one transaction.

**Close All**: Remove liquidity from all positions.

**Rebalance All**: Adjust zones on multiple positions.

Bulk actions save gas compared to individual transactions.

### Organization

Organize positions:

**Filter**: By token pair, status, or value.

**Sort**: By APR, value, fees, or age.

**Search**: Find specific positions by token or ID.

**Tags**: Add custom labels (coming soon).

## NFT Metadata

### Standard Metadata

LP NFTs follow ERC-721 metadata standard:

```json
{
  "name": "MegaFi Position #12345",
  "description": "Liquidity position in ETH/USDC 0.3%",
  "image": "ipfs://...",
  "attributes": [
    {
      "trait_type": "Pool",
      "value": "ETH/USDC"
    },
    {
      "trait_type": "Fee Tier",
      "value": "0.3%"
    },
    {
      "trait_type": "Lower Price",
      "value": "1900"
    },
    {
      "trait_type": "Upper Price",
      "value": "2100"
    },
    {
      "trait_type": "Status",
      "value": "Active"
    }
  ]
}
```

### Dynamic Images

NFT images update based on position status:

**Active**: Green border, "IN RANGE" indicator.

**Inactive**: Red border, "OUT OF RANGE" indicator.

**High Fees**: Special badge for positions with significant unclaimed fees.

Images generate dynamically from on-chain data. No IPFS pinning required.

## Burning NFTs

### When NFTs Burn

LP NFTs burn when you remove 100% of liquidity:

1. Click "Remove All Liquidity"
2. Confirm transaction
3. Tokens and fees sent to wallet
4. NFT burns automatically

Burned NFTs disappear from wallet and blockchain. Token ID becomes invalid.

### Partially Removed Positions

If you remove < 100% liquidity, NFT remains:
- Updated to reflect new liquidity amount
- Still represents partial position
- Can be managed or transferred

### Closing Empty Positions

If position has zero liquidity but unclaimed fees:
- Collect fees to burn NFT
- Or transfer NFT to another wallet (they get the fees)

## Advanced Use Cases

### Collateralization

Use LP NFTs as collateral in lending protocols (where supported):

1. Deposit LP NFT
2. Borrow against position value
3. NFT locks in protocol
4. Fees continue accumulating
5. Repay loan and retrieve NFT

Borrowing power typically 40-70% of position value.

### Yield Strategies

Combine multiple positions for complex strategies:

**Ladder Strategy**:
```
Position 1: $1800 - $1900
Position 2: $1900 - $2000
Position 3: $2000 - $2100
Position 4: $2100 - $2200
```

As price moves, different NFTs activate. Smooth fee earnings across price ranges.

**Hedge Strategy**:

Combine LP NFT with Hedge options:
- LP NFT: Earn fees
- Put option: Protect downside

Fees help offset option costs.

### Fractionalization

Split single LP NFT into fungible tokens (requires third-party protocol):

1. Deposit LP NFT into fractionalization contract
2. Receive 100+ fungible tokens representing shares
3. Trade shares separately
4. Redeem enough shares to reclaim NFT

Enables group ownership or easier trading of valuable positions.

## Security Considerations

### Approval Management

NFTs require separate approvals from tokens:

**Token Approvals**: Allow adding liquidity.

**NFT Approval**: Allow transferring position.

Revoke approvals when not actively using MegaFi.

### Phishing Protection

**Verify Contract**: Only interact with official MegaFi Position Manager contract.

**Check Recipient**: Double-check address when transferring.

**Marketplace Safety**: List only on reputable NFT marketplaces.

**Signature Requests**: MegaFi never asks for signatures that transfer NFTs without your explicit action.

### Lost NFT Recovery

If you lose access to wallet containing LP NFT:

**No Recovery**: Like any blockchain asset, there's no customer support to recover lost NFTs.

**Prevention**:
- Use hardware wallet for large positions
- Maintain backup of seed phrase
- Consider multi-sig for very large positions

## FAQ

**Can I have multiple LP NFTs?**  
Yes. Create as many positions as you want. Each generates a new NFT.

**Are LP NFTs compatible with all wallets?**  
Any wallet supporting ERC-721 NFTs. Most modern wallets do.

**What if I transfer an NFT by mistake?**  
Transfers are irreversible. Always double-check recipient address.

**Can I trade NFTs on any NFT marketplace?**  
Yes, though some marketplaces may not display metadata properly. OpenSea and major platforms support LP NFTs.

**Do fees still accumulate in transferred NFTs?**  
Yes. Fees accumulate in the position itself, not tied to original creator.

**What happens to NFT if pool is deprecated?**  
You can still withdraw liquidity. NFT represents claim on pool reserves.

## Next Steps

Understand LP NFT mechanics:

- [Providing Liquidity](providing-liquidity.md) - Create positions and receive NFTs
- [Fees and Rewards](fees-and-rewards.md) - Maximize NFT value
- [Auto-Pools](../auto-pools/overview.md) - Automate NFT management

---

**Your positions, your NFTs.**

