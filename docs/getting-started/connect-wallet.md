# Connect Wallet

Connect your Ethereum wallet to MegaFi to begin trading, providing liquidity, and deploying strategies. MegaFi supports all major EVM-compatible wallets through multiple connection methods.

## At a Glance

- Supports MetaMask, Rainbow, Coinbase Wallet, WalletConnect, and all EVM wallets
- One-click connection through web interface
- Automatic network detection and switching
- Connection persists across sessions
- Disconnect anytime without affecting your positions
- Read-only mode available for browsing without connecting

## Supported Wallets

### Browser Extension Wallets

**MetaMask**: Most widely used Ethereum wallet. Install the browser extension and connect directly.

**Rainbow**: Modern wallet with built-in token swaps and NFT support. Available as browser extension and mobile app.

**Coinbase Wallet**: Self-custody wallet from Coinbase. Browser extension and mobile app both supported.

### WalletConnect

**Universal Connection**: Use WalletConnect to connect mobile wallets like Trust Wallet, Argent, and 100+ others.

**QR Code Flow**: Scan QR code with your mobile wallet to establish connection.

### Hardware Wallets

**Ledger**: Connect through MetaMask or WalletConnect. Enable "Blind signing" for contract interactions.

**Trezor**: Connect through MetaMask. Ensure firmware is up to date for EIP-712 signing support.

## Connection Steps

### Using Browser Extension

1. Visit [megafi.app](https://megafi.app)
2. Click "Connect Wallet" in top right corner
3. Select your wallet provider from the modal
4. Approve connection request in wallet extension
5. Connection confirmation appears

### Using WalletConnect

1. Click "Connect Wallet" on MegaFi
2. Select "WalletConnect" from options
3. QR code modal displays
4. Open your mobile wallet
5. Scan QR code with wallet's built-in scanner
6. Approve connection on mobile device
7. Connection established

### Using Hardware Wallet

1. Connect hardware device to computer
2. Unlock device and open Ethereum app
3. Connect through MetaMask (add hardware wallet in MetaMask settings)
4. Follow browser extension steps above
5. Confirm transactions on hardware device

## Network Switching

After connecting, MegaFi checks if you're on MegaETH network:

**Already on MegaETH**: No action needed. You can start using MegaFi immediately.

**On Different Network**: Modal prompts you to switch. Click "Switch Network" and approve in wallet. Network changes automatically.

**First Time**: If MegaETH isn't configured in your wallet, you'll be prompted to add it. Click "Add Network" and approve. Configuration is added automatically.

[Network configuration details →](megaeth-setup.md)

## Permissions and Security

### What MegaFi Can Access

When you connect your wallet, MegaFi can:

- View your wallet address
- View your token balances on MegaETH
- Request transaction approvals

### What MegaFi Cannot Do

- Access wallets on other networks without your permission
- Execute transactions without your explicit approval
- Move funds without signed transaction
- Access private keys or seed phrases

### Best Practices

**Verify Domain**: Always check you're on megafi.app before connecting. Phishing sites mimic legitimate DeFi interfaces.

**Review Permissions**: Read transaction details before approving. MegaFi clearly displays what each transaction does.

**Hardware Wallets**: Use hardware wallets for large amounts. They provide an additional layer of security.

**Disconnect When Done**: Click your address and select "Disconnect" when finished. This revokes the interface connection but doesn't affect your positions.

## Troubleshooting Connection Issues

### Wallet Not Detected

**Browser Extension**: Ensure the extension is installed and unlocked. Refresh the page after unlocking.

**Multiple Wallets**: If you have multiple wallet extensions installed, they may conflict. Disable unused extensions.

**Private Browsing**: Some wallets don't work in private/incognito mode. Use a normal browser window.

### Connection Rejected

**Wallet Locked**: Unlock your wallet and try again.

**Wrong Network**: Switch to MegaETH or any EVM network first, then connect.

**Browser Issues**: Clear cache and cookies, then retry connection.

### WalletConnect Issues

**QR Code Won't Scan**: Ensure QR code is fully visible and camera permissions are granted to wallet app.

**Connection Timeout**: QR codes expire after 5 minutes. Close modal and generate a new one.

**Mobile Network**: Ensure phone has stable internet connection (WiFi or cellular).

## Managing Your Connection

### View Connected Address

Your wallet address appears in the top right corner after connecting. Click it to:

- View full address
- Copy address to clipboard
- Disconnect wallet
- View recent transactions

### Switch Accounts

**In Wallet**: Switch accounts in your wallet extension. MegaFi automatically detects the change and updates the interface.

**Reconnect**: If automatic detection fails, disconnect and reconnect with the new account.

### Disconnect

1. Click your address in top right
2. Select "Disconnect" from dropdown
3. Connection removed immediately
4. Your open positions remain intact

Disconnecting only removes the interface connection. Your liquidity positions, open orders, and strategies continue running.

## Read-Only Mode

Browse MegaFi without connecting a wallet:

- View all token pairs and pools
- Check pool statistics and APYs
- Explore Strategy Modes
- Read documentation
- See real-time prices

Actions requiring wallet connection (swaps, liquidity provision, strategy deployment) prompt you to connect when clicked.

## Multi-Device Usage

**Same Account, Multiple Devices**: Connect your wallet from any device. Positions and strategies are tied to your wallet address, not the device.

**Mobile and Desktop**: Use the same wallet on both. WalletConnect enables seamless mobile access.

**Session Persistence**: Connections persist until you disconnect or clear browser data.

## FAQ

**Does connecting cost gas?**  
No. Wallet connection is free. Gas costs apply only to transactions.

**Can I use multiple wallets?**  
Yes. Disconnect one and connect another. Each wallet's positions are independent.

**What if I lose connection?**  
Refresh the page and reconnect. Your positions are stored on-chain, not in the interface.

**Is it safe to stay connected?**  
Yes. The connection allows only viewing balances and requesting transactions. All transactions require your explicit approval.

## Next Steps

After connecting your wallet:

1. [Configure MegaETH network](megaeth-setup.md) if not already added
2. [Bridge assets to MegaETH](../megaeth/bridge-guide.md)
3. [Make your first swap](first-swap.md)

---

**Your keys, your crypto.**

