# Limits and Constraints

Protocol-level limits and constraints for MegaFi. Understand operational boundaries and safety mechanisms.

## At a Glance

- Position limits prevent excessive risk
- Rate limits ensure system stability
- Minimum/maximum values for operations
- Safety mechanisms protect users and protocol
- Most limits are generous for typical use

## Position Limits

### Liquidity Positions

**Per Account**:
- Maximum LP positions: 1,000
- Maximum value per position: No limit
- Minimum liquidity amount: ~$1 worth
- Maximum single deposit: No limit

**Per Pool**:
- Maximum total liquidity: No limit
- Minimum tick range: 1 tick spacing
- Maximum tick range: Full range (no limit)

### Strategy Positions

**Per Account**:
- Maximum active strategies: 100
- Minimum capital per strategy: $100 recommended (no hard limit)
- Maximum capital per strategy: No limit

**Rebalancing**:
- Bull mode: Max 2 rebalances/day
- Bear mode: Max 12 rebalances/day
- Static mode: Max 24 rebalances/day
- Dynamic mode: Max 18 rebalances/day
- Minimum cooldown between rebalances: 30 minutes (static), 1 hour (bear/dynamic), 12 hours (bull)

### Options Positions

**Per Account**:
- Maximum open options: 1,000
- Maximum notional value: $500,000 (adjustable with collateral)
- Maximum delta exposure: ±100 ETH equivalent
- Maximum gamma exposure: Implementation dependent

**Per Option**:
- Minimum size: 0.1 contracts
- Maximum size per trade: 100 contracts
- Minimum collateral ratio: 120% of option value

## Transaction Limits

### Swap Limits

**Per Transaction**:
- Minimum swap: ~$0.10 worth
- Maximum swap: Limited by pool liquidity
- Maximum price impact: No hard limit (warning at 2%+)
- Minimum slippage tolerance: 0.01%
- Maximum slippage tolerance: 50%

**Rate Limits**:
- Swaps per second: No limit (network capacity 100k+ TPS)
- Swaps per account: No limit

### Gas Limits

**Per Transaction**:
- Simple swap: 150,000 gas
- Multi-hop swap: 300,000 gas
- Add liquidity: 250,000 gas
- Remove liquidity: 200,000 gas
- Deploy strategy: 600,000 gas
- Option trade: 220,000 gas

Block gas limit: Effectively unlimited (continuous execution)

## Pool Constraints

### Creation

**Requirements**:
- Both tokens must be ERC-20
- Token pair + fee tier must be unique
- Initial price must be set
- Minimum initial liquidity: 1 wei

**Fee Tiers**:
- Available: 0.05%, 0.3%, 1%
- Custom tiers: Not supported
- Fee changes: Not possible (immutable)

### Operations

**Tick Spacing**:
- 0.05% tier: 10 ticks
- 0.3% tier: 60 ticks
- 1% tier: 200 ticks
- Positions must align to tick spacing

**Price Range**:
- Minimum price: Tick -887272
- Maximum price: Tick 887272
- Full range supported

## Oracle Limits

### Price Updates

**Frequency**:
- Update interval: Real-time (continuous)
- Maximum staleness accepted: 1 minute
- Minimum time between updates: No limit

**Deviation**:
- Maximum price change per update: 10% (safety check)
- Circuit breaker: Activates on > 20% movement
- Recovery: Manual review and reset

## Strategy Constraints

### Zone Parameters

**Width Limits**:
- Bull: 15% to 50%
- Bear: 8% to 25%
- Static: 2% to 10%
- Dynamic: 3% to 30%

**Rebalance Thresholds**:
- Minimum benefit: $0.50 (static) to $5 (bull)
- Maximum gas spend: 5% of expected benefit
- Price movement trigger: 1% (static) to 10% (bull)

### Performance

**Monitoring**:
- Maximum inactive time before alert: 48 hours
- Minimum APR before warning: 5%
- Maximum drawdown before pause: 50%

## Hedge Constraints

### Collateral

**Requirements**:
- Covered options: 100% underlying
- Cash-secured: 100% strike value
- Maintenance margin: 120% minimum

**Liquidation**:
- Grace period: 1 hour
- Partial liquidation: Allowed
- Liquidation fee: 5%

### Option Parameters

**Strikes**:
- Minimum: No limit
- Maximum: No limit
- Spacing: Protocol-defined per expiration

**Expirations**:
- Minimum: 1 day
- Maximum: 90 days
- Standard expirations: Daily, weekly, monthly

**Sizes**:
- Minimum: 0.1 contracts
- Maximum per account: Subject to risk limits
- Maximum open interest per strike: 10,000 contracts

## API Limits

### REST API

**Rate Limits**:
- Public endpoints: 100 requests/minute
- Authenticated endpoints: 1,000 requests/minute
- Burst allowance: 2x rate for 10 seconds

**Response Size**:
- Maximum response: 5 MB
- Maximum items per page: 1,000
- Default page size: 100

### WebSocket

**Connections**:
- Maximum per IP: 10
- Maximum subscriptions per connection: 100
- Reconnection rate: Max 5/minute

**Message Rate**:
- Inbound: 10 messages/second
- Outbound: Unlimited (server-controlled)

## Network Constraints

### MegaETH Limits

**Throughput**:
- Theoretical maximum: 100,000+ TPS
- Practical sustained: 50,000 TPS
- Burst capacity: 150,000 TPS

**Latency**:
- Target: < 10ms
- 99th percentile: < 20ms
- Maximum acceptable: < 100ms

**Block Size**:
- Not applicable (continuous execution)
- Transaction batches: Variable size

## Smart Contract Limits

### Storage

**Per Contract**:
- Maximum storage slots: 2^256 (effectively unlimited)
- Practical limit: Gas cost prohibitive beyond millions

**Arrays**:
- Maximum array length: Gas-limited
- Recommended maximum: 1,000 elements per operation

### Execution

**Stack Depth**:
- Maximum: 1024 frames
- Recursive calls: Limited by stack depth

**Memory**:
- Maximum: 2^256 bytes (effectively unlimited)
- Practical limit: Gas cost

## Safety Mechanisms

### Circuit Breakers

**Triggered By**:
- Unusual price movements (> 20%)
- High transaction failure rate (> 10%)
- Abnormal volume (10x average)
- Oracle failures

**Actions**:
- Pause new positions
- Allow closures only
- Manual review
- Gradual resume

### Emergency Powers

**Pause Function**:
- Who: Admin multi-sig
- Scope: All new transactions
- Duration: Until unpause
- Existing positions: Safe

**Upgrades**:
- Timelock: 48 hours minimum
- Multi-sig: 3 of 5 required
- Scope: Implementation only (proxy remains)

## User Limits (Recommendations)

### Risk Management

**Position Sizing**:
- Maximum per position: 25% of portfolio
- Maximum in single pool: 50% of portfolio
- Minimum diversification: 3 positions

**Leverage**:
- Conservative: 1x (no leverage)
- Moderate: 2x
- Aggressive: 3x
- Unsafe: > 3x

### Activity

**Transactions**:
- Daily: No limit (network handles volume)
- Recommended monitoring: If > 100 swaps/day

**Strategies**:
- Active strategies: Max 10 for practical monitoring
- Passive strategies: No limit

## Future Changes

Limits may be adjusted based on:
- Network performance data
- User feedback
- Security considerations

Changes announced via:
- Official blog
- Discord announcements
- X
- In-app notifications

## Overcoming Limits

### For Higher Limits

**Contact**: partnerships@megafi.app

**Requirements**:
- Trading history
- Risk management plan

**Custom Arrangements**:
- Institutional accounts
- Market makers
- Integration partners

## Monitoring Your Limits

### Check Usage

Interface shows:
- Current position count vs limit
- Notional value vs delta limit
- Collateral ratio vs maintenance
- API usage vs rate limit

### Alerts

Set notifications for:
- Approaching position limits
- Margin call warnings
- API rate limit approaching
- Circuit breaker activation

## FAQ

**Why are there limits?**  
Protect users and protocol from excessive risk. Ensure system stability.

**Can limits be increased?**  
Yes, for institutional users or partnerships. Contact team.

**What happens if I exceed a limit?**  
Transaction fails with error message. No penalty, just retry within limits.

**Are limits the same on testnet?**  
Generally yes, but may differ for testing purposes.

**Will limits change?**  
Yes, may adjust based on network performance and requirements.

**How do I know my current limit usage?**  
Interface displays usage vs limits in account dashboard.

## Next Steps

Understand boundaries:

- [Risk Management](../hedge/risk-management.md) - Risk controls
- [Architecture](../hedge/architecture.md) - System design
- [Security Audits](../technical/security-audits.md) - Security information

---

**Limits keep everyone safe.**

