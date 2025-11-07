# MegaFi Points Campaign Strategy

## Overview

3-phase campaign with NFT rewards, stacking multipliers, and point carryover across all phases.

---

## Phase 1: OG NFT Distribution

**Duration:** Nov 1-15 (Scoring), Nov 16 (Announcement)  
**Participants:** 50 NFTs total  
**Reward:** OG NFT → 1.5x multiplier (lifetime)

### Tier 1: First 10 Discord Members (10 NFTs)

**Criteria:** Pure timing, no questions asked

- First 10 members by Discord join timestamp
- Must verify wallet by Nov 10, 23:59 UTC
- Guaranteed NFT, no other requirements

**Why:** Rewards earliest believers who joined before traction

---

### Tier 2: Top 40 X Engagement (40 NFTs)

**Criteria:** Social amplification via Twitter/X metrics

**Requirements:**
- Must be Discord member (joined by Nov 2)
- Must complete registration form by Nov 10, 23:59 UTC:
  - Discord username
  - X (Twitter) handle
  - Wallet address
- Ranked by X Engagement Score (see scoring below)

**Scoring Period:** Nov 1-15, 23:59 UTC

**Eligible Activity:**
- Tweets mentioning: MegaFi, @megafi_app, #MegaFi
- Original content about MegaFi
- Quality discussions about MegaETH, options trading, DeFi
- Engagement with MegaFi official posts

### X Engagement Scoring Formula

**Base Score Calculation:**
```
Score = (Tweets × 10) + (Likes × 1) + (Retweets × 3) + (Replies × 2)
```

**Quality Multipliers:**
- High-quality tweet (>100 characters, original content): 1.5x
- Thread (3+ connected tweets): 2.0x
- Media included (image/video): 1.2x
- Low-quality (spam, copy-paste, <50 chars): 0.1x

**Engagement Caps (per tweet):**
- Max 20 tweets counted per user
- Max 500 points from engagement per single tweet
- Prevents viral one-hit-wonders from dominating

**Disqualifications:**
- Spam/bot behavior (>10 tweets in 1 hour)
- Fake engagement (purchased likes/bots)
- Copy-pasted content
- Not in Discord or wallet not verified
- Tweets before Nov 1 or after Nov 15

**Example Calculation:**
```
User posts 8 tweets about MegaFi:
- Tweet 1: 45 likes, 12 RTs, 5 replies = 10 + 45 + 36 + 10 = 101 pts (high-quality 1.5x) = 152 pts
- Tweet 2-8: Similar engagement...
- Total base: 850 pts
- Final with multipliers: ~1,200 pts
```

### Timeline
- Registration Opens: Nov 6
- Registration Closes: Nov 10, 23:59 UTC
- Scoring Period: Nov 1-15, 23:59 UTC
- Snapshot & Ranking: Nov 16
- Winners Announced: Nov 16
- NFT Mint: Nov 18
- Benefit Active: Nov 15 (testnet launch)

### Registration Process

Users must submit via website form:
1. Discord username (verified member)
2. X (Twitter) handle
3. Wallet address (EVM-compatible)

Form validates:
- Discord membership (API check)
- X account exists and is public
- Wallet format valid

### Anti-Gaming
- First 10 Discord: Verified via Discord API timestamps
- X Engagement: Manual review of top 50 scores for quality
- Duplicate wallets filtered (1 NFT per wallet)
- Can revoke NFTs for rule violations

### Technical Implementation

**Data Collection:**
- TwitterAPI.io for mention stream (keywords: MegaFi, @megafi_app, #MegaFi)
- Sentiment/volume augmentation via StockGeist or SentiCrypt (optional)
- DIY author profiling using Twitter API (follower count, account age, verified status)

**Scoring Engine:**
- Automated base calculation per formula above
- Quality filters applied programmatically
- Manual QA review of top 60 users before final selection

**Infrastructure:**
- Lightweight database (SQLite/Supabase) for tweet storage
- Python/Node.js backend for scoring logic
- Registration form with Discord/X/Wallet validation

**Cost:** ~$50-60 for Phase 1 (TwitterAPI.io + hosting)

**Future:** Reserve Kaito or higher-end vendors for Phase 3 mainnet when scaling to 1000+ users and multi-platform monitoring.

---

## Phase 2: Testnet Pioneer Campaign

**Duration:** Nov 15-29 (2 weeks)  
**Participants:** 100-300 users  
**Points Pool:** 100,000 total  
**Reward:** Top 100 → "MegaFi Pioneer NFT" → 1.25x multiplier

### Phase 2A: Closed Alpha (Nov 15-22)
- Users: 100 (whitelist only)
- Points: 50,000 pool
- Focus: Core product testing, bug reports

**Eligibility:**
- OG NFT holders (priority), OR
- Application form (technical background), OR
- Team/partner referrals

### Phase 2B: Open Beta (Nov 22-29)
- Users: Expand to 300 if demand high
- Points: 50,000 pool
- Focus: Social engagement + stress testing

### Rewards Structure
- Top 100 overall → Pioneer NFT
- Top Bug Reporter → 5,000 bonus points
- Best UX Feedback → 5,000 bonus points
- Top Social Engagement → 3,000 bonus points
- Top Referrer → 3,000 bonus points

---

## Phase 3: Mainnet Season 1

**Duration:** Dec 1-31 (4 weeks)  
**Participants:** Unlimited  
**Points Pool:** 500,000 total (weekly distribution)

### Weekly Point Distribution
- Week 1 (Dec 1-7): 150,000 points (launch bonus)
- Week 2 (Dec 8-14): 125,000 points
- Week 3 (Dec 15-21): 125,000 points
- Week 4 (Dec 22-31): 100,000 points

### Snapshot Schedule
- Activity Window: Sunday 00:00 - Saturday 23:59 UTC
- Snapshot: Saturday 23:59 UTC
- Leaderboard Update: Sunday morning

### Future Seasons
- Season 2 (Jan): 400,000 points/month
- Season 3 (Feb): 300,000 points/month
- Season 4+ (Mar+): 200,000 points/month (sustainable)

---

## Multiplier System

### NFT Multipliers (Additive Stacking)

**Single NFT:**
- OG Contributor: 1.5x
- Pioneer: 1.25x

**Both NFTs (Ultra-OG):**
- Formula: 1 + (0.5 + 0.25) = 1.75x total
- Prevents excessive inequality vs 1.875x multiplicative

### Temporary Multipliers (Stack on top)
- Testnet Week 1: +10%
- Launch Week (Dec 1-7): +20%
- Special Events: Varies

**Example:** Ultra-OG (1.75x) + Launch Week (1.2x) = 2.1x during Week 1

---

## Points Calculation

### Product Usage (70% of points)

#### Hedge (Options)
- Buy option: 20 pts
- Volume milestones:
  - $100: 50 pts
  - $1,000: 200 pts
  - $10,000: 1,000 pts

#### DEX (LP)
- Liquidity per day: 5 pts per $100 TVL

#### CLM (Automated Management)
- Strategy active per day: 5 pts per $100 TVL
- Fees earned: 2 pts per $20 earned

#### Quality Filters
- Min hold time: 60 seconds (shorter = 0 pts)
- Diversity bonus: 1.2x (use all 3 products)

#### Volume Multipliers (Non-Linear)
- $0-$1k: 1.0x
- $1k-$10k: 1.1x
- $10k-$50k: 1.15x
- $50k+: 1.2x (capped)

### Social Contribution (20% of points) - X Engagement Tracking

#### Base Actions
- Mention MegaFi: 15 pts
- Retweet official: 8 pts
- Quote tweet: 25 pts
- Original thread: 100 pts

#### Engagement Multipliers
- 0-10 likes: 1.0x
- 10-50 likes: 1.5x
- 50-200 likes: 2.0x
- 200+ likes: 2.5x

#### Quality Bonuses
- High-quality content (>100 chars, original): 1.5x
- Original insight/analysis: 2.0x
- Influencer reply: +50 pts
- Low-quality/spam: 0.1x

#### Daily Caps
- Max social points/day: 500
- Max tweets counted/day: 10

### Referrals (10% of points)

- Signup: 50 pts
- First transaction: 150 pts
- Revenue share: 20% of referred user's points
- Max referrals: 50 (prevents referral-only farming)

---

## Anti-Gaming Measures

### Sybil Resistance
- Min $50 transaction volume to qualify
- Wallet age >30 days (Etherscan check)
- Multiple wallets from same IP flagged
- Manual review of suspicious patterns

### Wash Trading Detection
- Self-trades = 0 points
- Repeated immediate reversals = 0 points
- Min hold time: 60 seconds
- Min price movement threshold required

### Social Gaming Prevention
- Manual review of top 50 X engagement scores for quality
- Bot engagement = 0 points
- Rate limit: Max 20 tweets counted per user
- Spam detection (>10 tweets/hour flagged)

### Referral Abuse Prevention
- Referred users must reach $100 volume
- Max 50 referrals per user
- Suspicious referral rings flagged

### Public Warning
Display prominently:
> "We actively monitor for wash trading, sybil attacks, and gaming. Violating accounts will be disqualified and forfeit all points."

---

## Success Metrics

### Phase 1 (OG NFT)
- Target: 100+ registrations for 40 Tier 2 spots
- Registration completion: >90% of interested users
- X engagement: >500 tweets tracked
- Winners announced: Nov 16

### Phase 2 (Testnet)
- DAU: >60% of whitelisted users
- Bug reports: >200 total
- Product adoption: >80% try all 3 products
- Social mentions: >500 organic tweets
- Referral conversion: >30%

### Phase 3 (Mainnet)
- Week 1 DAU: >500 users
- Week 4 retention: >40%
- TVL target: $500k+
- Wash trade rate: <5%
- Social sentiment: Positive (X tracking)

---

## Implementation Checklist

### Technical
- [ ] Leaderboard smart contract (testnet)
- [ ] XP tracking system (product + social + referral)
- [ ] X engagement tracking system (Twitter API or manual)
- [ ] NFT contracts (OG + Pioneer)
- [ ] Fee rebate mechanism
- [ ] Wash trade detection system
- [ ] Sybil filtering algorithm
- [ ] Website registration form (Discord + X + Wallet)

### Frontend
- [ ] Leaderboard page (overall + by category)
- [ ] User profile with XP breakdown
- [ ] NFT badge display
- [ ] Social media connection (Twitter/X)
- [ ] Referral dashboard
- [ ] Real-time points tracking

### Backend
- [ ] Points calculation engine
- [ ] Weekly snapshot system
- [ ] X engagement scoring system
- [ ] Activity tracking across all products
- [ ] Fraud detection pipeline
- [ ] Referral tree tracking
- [ ] Registration form backend (validation + storage)

### Marketing
- [ ] Campaign landing pages
- [ ] Registration form page with instructions
- [ ] Discord announcement templates
- [ ] Twitter/X content calendar
- [ ] NFT artwork (OG + Pioneer)
- [ ] Leaderboard teaser graphics
- [ ] Weekly update templates
- [ ] X engagement tracking announcement

---

## Key Principles

1. **Weekly cadence** - Sustained engagement over one-time farming
2. **Quality over quantity** - Manual review prevents social spam
3. **Balanced rewards** - Volume caps prevent whale dominance
4. **Transparent rules** - Hidden formulas but clear guidelines
5. **Fair multipliers** - Additive stacking prevents runaway advantage
6. **Anti-gaming first** - Public warnings + automated detection
7. **Long-term alignment** - Points carry forward, not just airdrops

---

## Timeline Summary

| Phase | Dates | Users | Points | Reward |
|-------|-------|-------|--------|--------|
| OG NFT | Nov 1-16 | 50 NFTs (10+40) | - | 1.5x multiplier |
| Testnet Alpha | Nov 15-22 | 100 | 50k | - |
| Testnet Beta | Nov 22-29 | 300 | 50k | Top 100 → 1.25x NFT |
| Mainnet S1 | Dec 1-31 | Unlimited | 500k | Weekly leaderboards |
| Mainnet S2+ | Jan+ | Unlimited | 400k→200k | Ongoing |

**All points carry forward to future phases.**

