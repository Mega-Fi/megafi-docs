# MegaFi Points Campaign - Technical Implementation Guide

## Overview

Technical architecture and implementation guide for MegaFi's 3-phase points campaign system, starting with Phase 1 (OG NFT) using cost-effective Twitter tracking and progressing to full-scale automation for mainnet.

---

## Phase 1: OG NFT Distribution (Nov 1-16)

### Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Phase 1 System                        │
└─────────────────────────────────────────────────────────┘

Data Sources:
├─ TwitterAPI.io (primary)
│  └─ Stream: "MegaFi", "@megafi_app", "#MegaFi"
├─ Discord API
│  └─ Member data, join timestamps
├─ Registration Form
│  └─ User submissions (Discord + X + Wallet)
└─ Twitter Profile API (optional)
   └─ Follower count, account age, verification

Processing Layer:
├─ Tweet Ingestion Service
├─ Scoring Engine
├─ Quality Filters
└─ Manual QA Dashboard

Storage:
├─ Users Table (registrations)
├─ Tweets Table (captured tweets)
├─ Scores Table (calculated scores)
└─ Winners Table (final 40)

Output:
└─ Winner list (40 wallets) → NFT mint
```

---

## Technology Stack

### Option A: Minimal (Recommended for Phase 1)

**Backend:**
- Language: Python 3.10+
- Framework: FastAPI or Flask
- Database: SQLite (file-based, no server needed)
- Task Queue: APScheduler (simple cron jobs)

**Frontend:**
- Registration Form: Next.js or simple HTML + Vercel
- Admin Dashboard: Streamlit (Python-based, rapid prototyping)

**APIs:**
- TwitterAPI.io ($49/mo, 100k requests)
- Discord API (free)
- Optional: StockGeist/SentiCrypt (free tier)

**Hosting:**
- Backend: Railway.app or Render (free tier)
- Frontend: Vercel (free tier)
- Database: SQLite file or Supabase (free tier)

**Cost:** $50-60 total

---

### Option B: Production-Ready (For Phase 2+)

**Backend:**
- Language: Node.js/TypeScript or Python
- Framework: Express.js or FastAPI
- Database: PostgreSQL (Supabase free tier)
- Caching: Redis (Upstash free tier)
- Queue: BullMQ for background jobs

**Frontend:**
- Next.js 14 (App Router)
- Tailwind CSS
- ShadcnUI components

**APIs:**
- Phase 1-2: TwitterAPI.io
- Phase 3: Kaito API (when scaling)
- Discord API
- Twitter API v2

**Hosting:**
- Backend: Railway, Render, or AWS EC2
- Frontend: Vercel
- Database: Supabase or Railway Postgres

**Cost:** $50-100/mo (scales with Phase 3)

---

## Database Schema

### Users Table
```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    discord_username TEXT NOT NULL,
    discord_id TEXT UNIQUE,
    x_handle TEXT NOT NULL,
    wallet_address TEXT UNIQUE NOT NULL,
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    discord_verified BOOLEAN DEFAULT FALSE,
    x_account_age INTEGER, -- days
    x_followers INTEGER,
    eligible BOOLEAN DEFAULT TRUE,
    notes TEXT
);
```

### Tweets Table
```sql
CREATE TABLE tweets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tweet_id TEXT UNIQUE NOT NULL,
    author_handle TEXT NOT NULL,
    text TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    likes INTEGER DEFAULT 0,
    retweets INTEGER DEFAULT 0,
    replies INTEGER DEFAULT 0,
    is_thread BOOLEAN DEFAULT FALSE,
    thread_size INTEGER DEFAULT 1,
    char_count INTEGER,
    has_media BOOLEAN DEFAULT FALSE,
    quality_score REAL DEFAULT 1.0,
    disqualified BOOLEAN DEFAULT FALSE,
    disqualification_reason TEXT,
    captured_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Scores Table
```sql
CREATE TABLE scores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    tweet_count INTEGER DEFAULT 0,
    total_base_score REAL DEFAULT 0,
    total_multiplied_score REAL DEFAULT 0,
    final_score REAL DEFAULT 0,
    rank INTEGER,
    manual_review_status TEXT, -- pending, approved, rejected
    manual_review_notes TEXT,
    calculated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### Winners Table
```sql
CREATE TABLE winners (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    tier TEXT NOT NULL, -- "tier1_discord" or "tier2_x"
    rank INTEGER,
    final_score REAL,
    wallet_address TEXT NOT NULL,
    nft_minted BOOLEAN DEFAULT FALSE,
    nft_token_id INTEGER,
    announced_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

---

## Implementation Steps

### Week 1 (Nov 4-10): Setup & Registration

#### Day 1-2: Infrastructure Setup

**1. Set up TwitterAPI.io:**
```bash
# Sign up at https://twitterapi.io
# Get API key
# Test basic request:

curl -X GET "https://api.twitterapi.io/v1/tweets/search" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d "query=MegaFi" \
  -d "max_results=10"
```

**2. Create project structure:**
```bash
megafi-campaign/
├── backend/
│   ├── main.py              # FastAPI app
│   ├── twitter_collector.py # Tweet fetching
│   ├── scoring.py           # Score calculation
│   ├── database.py          # DB operations
│   ├── discord_utils.py     # Discord API
│   └── requirements.txt
├── frontend/
│   ├── registration-form/   # Next.js form
│   └── admin-dashboard/     # Streamlit dashboard
├── data/
│   └── megafi.db            # SQLite database
└── scripts/
    └── manual_qa.py         # QA helper scripts
```

**3. Initialize database:**
```python
# database.py
import sqlite3

def init_db():
    conn = sqlite3.connect('data/megafi.db')
    cursor = conn.cursor()
    
    # Create tables (use schemas above)
    cursor.execute("""CREATE TABLE IF NOT EXISTS users ...""")
    cursor.execute("""CREATE TABLE IF NOT EXISTS tweets ...""")
    cursor.execute("""CREATE TABLE IF NOT EXISTS scores ...""")
    cursor.execute("""CREATE TABLE IF NOT EXISTS winners ...""")
    
    conn.commit()
    conn.close()

if __name__ == "__main__":
    init_db()
```

#### Day 3-4: Registration Form

**Frontend (Next.js):**
```typescript
// app/register/page.tsx
'use client';

import { useState } from 'react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    discordUsername: '',
    xHandle: '',
    walletAddress: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    const result = await response.json();
    // Handle response
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Discord Username"
        value={formData.discordUsername}
        onChange={(e) => setFormData({...formData, discordUsername: e.target.value})}
        required
      />
      <input
        placeholder="X Handle (@username)"
        value={formData.xHandle}
        onChange={(e) => setFormData({...formData, xHandle: e.target.value})}
        required
      />
      <input
        placeholder="Wallet Address (0x...)"
        value={formData.walletAddress}
        onChange={(e) => setFormData({...formData, walletAddress: e.target.value})}
        required
      />
      <button type="submit">Register for OG NFT</button>
    </form>
  );
}
```

**Backend validation:**
```python
# main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import re

app = FastAPI()

class Registration(BaseModel):
    discord_username: str
    x_handle: str
    wallet_address: str

@app.post("/api/register")
async def register_user(reg: Registration):
    # Validate wallet format
    if not re.match(r'^0x[a-fA-F0-9]{40}$', reg.wallet_address):
        raise HTTPException(400, "Invalid wallet address")
    
    # Validate X handle format
    x_handle = reg.x_handle.lstrip('@')
    if not re.match(r'^[a-zA-Z0-9_]{1,15}$', x_handle):
        raise HTTPException(400, "Invalid X handle")
    
    # Check Discord membership (optional API call)
    # discord_member = check_discord_member(reg.discord_username)
    
    # Check duplicate wallet
    # existing = db.get_user_by_wallet(reg.wallet_address)
    # if existing:
    #     raise HTTPException(400, "Wallet already registered")
    
    # Save to database
    # user_id = db.insert_user(reg)
    
    return {"success": True, "message": "Registration successful"}
```

#### Day 5-7: Tweet Collection System

**Twitter collector service:**
```python
# twitter_collector.py
import requests
import sqlite3
from datetime import datetime, timedelta
import time

API_KEY = "your_twitterapi_key"
BASE_URL = "https://api.twitterapi.io/v1"

KEYWORDS = ["MegaFi", "@megafi_app", "#MegaFi"]
START_DATE = "2024-11-01T00:00:00Z"

def fetch_tweets(keyword, since_date):
    """Fetch tweets mentioning keyword"""
    headers = {"Authorization": f"Bearer {API_KEY}"}
    params = {
        "query": keyword,
        "start_time": since_date,
        "max_results": 100,
        "tweet.fields": "created_at,public_metrics,author_id",
        "expansions": "author_id",
        "user.fields": "username,public_metrics"
    }
    
    response = requests.get(
        f"{BASE_URL}/tweets/search/recent",
        headers=headers,
        params=params
    )
    
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error: {response.status_code}")
        return None

def store_tweet(tweet_data):
    """Store tweet in database"""
    conn = sqlite3.connect('data/megafi.db')
    cursor = conn.cursor()
    
    cursor.execute("""
        INSERT OR IGNORE INTO tweets (
            tweet_id, author_handle, text, created_at,
            likes, retweets, replies, char_count, has_media
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        tweet_data['id'],
        tweet_data['author_username'],
        tweet_data['text'],
        tweet_data['created_at'],
        tweet_data['public_metrics']['like_count'],
        tweet_data['public_metrics']['retweet_count'],
        tweet_data['public_metrics']['reply_count'],
        len(tweet_data['text']),
        'media' in tweet_data.get('attachments', {})
    ))
    
    conn.commit()
    conn.close()

def collect_tweets_loop():
    """Main collection loop - run daily"""
    while True:
        print(f"[{datetime.now()}] Collecting tweets...")
        
        for keyword in KEYWORDS:
            data = fetch_tweets(keyword, START_DATE)
            
            if data and 'data' in data:
                for tweet in data['data']:
                    store_tweet(tweet)
                print(f"Stored {len(data['data'])} tweets for '{keyword}'")
            
            time.sleep(2)  # Rate limit protection
        
        # Sleep for 1 hour
        time.sleep(3600)

if __name__ == "__main__":
    collect_tweets_loop()
```

**Run as background service:**
```bash
# Option 1: Simple screen session
screen -S tweet-collector
python backend/twitter_collector.py

# Option 2: Systemd service (production)
# Create /etc/systemd/system/megafi-collector.service
```

---

### Week 2 (Nov 11-15): Monitoring & Scoring

#### Scoring Engine

```python
# scoring.py
import sqlite3
from datetime import datetime

def calculate_user_score(x_handle):
    """Calculate score for a specific user"""
    conn = sqlite3.connect('data/megafi.db')
    cursor = conn.cursor()
    
    # Fetch user's tweets
    cursor.execute("""
        SELECT * FROM tweets 
        WHERE author_handle = ? 
        AND created_at >= '2024-11-01'
        AND created_at <= '2024-11-15 23:59:59'
        AND disqualified = FALSE
        ORDER BY created_at ASC
    """, (x_handle,))
    
    tweets = cursor.fetchall()
    
    if len(tweets) == 0:
        return 0
    
    # Limit to 20 tweets
    tweets = tweets[:20]
    
    total_score = 0
    
    for tweet in tweets:
        # Base score
        base = 10  # Tweet itself
        base += tweet['likes'] * 1
        base += tweet['retweets'] * 3
        base += tweet['replies'] * 2
        
        # Quality multipliers
        char_count = tweet['char_count']
        if char_count > 100:
            multiplier = 1.5
        elif char_count < 50:
            multiplier = 0.1
        else:
            multiplier = 1.0
        
        # Thread bonus
        if tweet['is_thread'] and tweet['thread_size'] >= 3:
            multiplier *= 2.0
        
        # Media bonus
        if tweet['has_media']:
            multiplier *= 1.2
        
        # Apply multiplier
        tweet_score = base * multiplier
        
        # Cap per tweet
        tweet_score = min(tweet_score, 500)
        
        total_score += tweet_score
    
    conn.close()
    return total_score

def calculate_all_scores():
    """Calculate scores for all registered users"""
    conn = sqlite3.connect('data/megafi.db')
    cursor = conn.cursor()
    
    # Get all registered users
    cursor.execute("SELECT id, x_handle FROM users WHERE eligible = TRUE")
    users = cursor.fetchall()
    
    for user_id, x_handle in users:
        score = calculate_user_score(x_handle)
        
        # Store score
        cursor.execute("""
            INSERT OR REPLACE INTO scores (user_id, final_score, calculated_at)
            VALUES (?, ?, ?)
        """, (user_id, score, datetime.now()))
    
    conn.commit()
    
    # Update ranks
    cursor.execute("""
        UPDATE scores 
        SET rank = (
            SELECT COUNT(*) + 1 
            FROM scores s2 
            WHERE s2.final_score > scores.final_score
        )
    """)
    
    conn.commit()
    conn.close()

def get_top_users(limit=60):
    """Get top N users by score"""
    conn = sqlite3.connect('data/megafi.db')
    cursor = conn.cursor()
    
    cursor.execute("""
        SELECT 
            u.discord_username,
            u.x_handle,
            u.wallet_address,
            s.final_score,
            s.rank
        FROM scores s
        JOIN users u ON s.user_id = u.id
        WHERE u.eligible = TRUE
        ORDER BY s.final_score DESC
        LIMIT ?
    """, (limit,))
    
    results = cursor.fetchall()
    conn.close()
    
    return results

if __name__ == "__main__":
    # Run daily
    calculate_all_scores()
    top_users = get_top_users(60)
    print("Top 60 users:")
    for user in top_users:
        print(f"{user['rank']}. {user['x_handle']}: {user['final_score']} pts")
```

#### Admin Dashboard (Streamlit)

```python
# admin_dashboard.py
import streamlit as st
import sqlite3
import pandas as pd

st.title("MegaFi OG NFT - Admin Dashboard")

conn = sqlite3.connect('data/megafi.db')

# Tab 1: Overview
tab1, tab2, tab3 = st.tabs(["Overview", "Top Users", "Manual QA"])

with tab1:
    st.header("Campaign Stats")
    
    # Registration count
    registrations = pd.read_sql("SELECT COUNT(*) as count FROM users", conn)
    st.metric("Total Registrations", registrations['count'][0])
    
    # Tweet count
    tweets = pd.read_sql("SELECT COUNT(*) as count FROM tweets", conn)
    st.metric("Tweets Tracked", tweets['count'][0])
    
    # Eligible users
    eligible = pd.read_sql("SELECT COUNT(*) as count FROM users WHERE eligible = TRUE", conn)
    st.metric("Eligible Users", eligible['count'][0])

with tab2:
    st.header("Top 60 Users")
    
    top_users = pd.read_sql("""
        SELECT 
            s.rank,
            u.discord_username,
            u.x_handle,
            s.final_score,
            s.manual_review_status
        FROM scores s
        JOIN users u ON s.user_id = u.id
        WHERE u.eligible = TRUE
        ORDER BY s.final_score DESC
        LIMIT 60
    """, conn)
    
    st.dataframe(top_users)
    
    # Export button
    if st.button("Export Top 40 Winners"):
        winners = top_users.head(40)
        winners.to_csv('winners.csv', index=False)
        st.success("Exported to winners.csv")

with tab3:
    st.header("Manual Quality Review")
    
    user_handle = st.selectbox(
        "Select user to review:",
        pd.read_sql("SELECT x_handle FROM users ORDER BY x_handle", conn)['x_handle']
    )
    
    if user_handle:
        # Show user's tweets
        tweets = pd.read_sql(f"""
            SELECT text, likes, retweets, replies, created_at
            FROM tweets
            WHERE author_handle = '{user_handle}'
            ORDER BY created_at DESC
        """, conn)
        
        st.dataframe(tweets)
        
        # Review actions
        col1, col2 = st.columns(2)
        with col1:
            if st.button("✅ Approve"):
                st.success(f"Approved {user_handle}")
        with col2:
            if st.button("❌ Disqualify"):
                reason = st.text_input("Reason:")
                if reason:
                    st.error(f"Disqualified {user_handle}: {reason}")

conn.close()
```

**Run dashboard:**
```bash
streamlit run admin_dashboard.py
```

---

### Nov 16: Final Selection

#### Manual QA Process

```python
# scripts/manual_qa.py
import sqlite3
import pandas as pd

def export_for_review():
    """Export top 60 users with their tweets for manual review"""
    conn = sqlite3.connect('data/megafi.db')
    
    # Get top 60
    top_users = pd.read_sql("""
        SELECT 
            u.id,
            u.discord_username,
            u.x_handle,
            u.wallet_address,
            s.final_score,
            s.rank
        FROM scores s
        JOIN users u ON s.user_id = u.id
        WHERE u.eligible = TRUE
        ORDER BY s.final_score DESC
        LIMIT 60
    """, conn)
    
    # Export
    top_users.to_excel('top_60_for_review.xlsx', index=False)
    
    # For each user, export their tweets
    with pd.ExcelWriter('top_60_tweets.xlsx') as writer:
        for _, user in top_users.iterrows():
            tweets = pd.read_sql(f"""
                SELECT text, likes, retweets, replies, created_at
                FROM tweets
                WHERE author_handle = '{user['x_handle']}'
                ORDER BY created_at DESC
            """, conn)
            
            tweets.to_excel(writer, sheet_name=user['x_handle'][:30], index=False)
    
    conn.close()
    print("Exported files for manual review")

def finalize_winners(approved_user_ids):
    """Mark final 40 winners"""
    conn = sqlite3.connect('data/megafi.db')
    cursor = conn.cursor()
    
    for user_id in approved_user_ids[:40]:
        cursor.execute("""
            INSERT INTO winners (user_id, tier, wallet_address)
            SELECT id, 'tier2_x', wallet_address
            FROM users
            WHERE id = ?
        """, (user_id,))
    
    conn.commit()
    conn.close()
    print(f"Finalized {len(approved_user_ids[:40])} winners")

if __name__ == "__main__":
    export_for_review()
```

---

## Discord Integration (Tier 1)

### Get First 10 Members

```python
# discord_utils.py
import discord
from discord.ext import commands
import sqlite3

DISCORD_TOKEN = "your_discord_bot_token"
GUILD_ID = 123456789  # Your server ID

intents = discord.Intents.default()
intents.members = True

bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    guild = bot.get_guild(GUILD_ID)
    
    # Get all members sorted by join date
    members = sorted(guild.members, key=lambda m: m.joined_at)
    
    print("First 10 Discord members:")
    for i, member in enumerate(members[:10]):
        print(f"{i+1}. {member.name} (joined: {member.joined_at})")
    
    # Export to database
    conn = sqlite3.connect('data/megafi.db')
    cursor = conn.cursor()
    
    for i, member in enumerate(members[:10]):
        cursor.execute("""
            INSERT OR IGNORE INTO winners (
                tier, rank, wallet_address, discord_username
            ) VALUES (?, ?, ?, ?)
        """, ('tier1_discord', i+1, 'pending', member.name))
    
    conn.commit()
    conn.close()
    
    await bot.close()

bot.run(DISCORD_TOKEN)
```

---

## Deployment

### Backend Deployment (Railway)

```bash
# 1. Install Railway CLI
npm i -g @railway/cli

# 2. Login
railway login

# 3. Initialize project
railway init

# 4. Deploy
railway up

# 5. Add environment variables
railway variables set TWITTER_API_KEY=your_key
railway variables set DISCORD_TOKEN=your_token
```

### Frontend Deployment (Vercel)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
cd frontend/registration-form
vercel deploy --prod
```

---

## Monitoring & Maintenance

### Daily Tasks (Nov 1-15)

```bash
# Check tweet collection status
python -c "import sqlite3; c=sqlite3.connect('data/megafi.db'); print(c.execute('SELECT COUNT(*) FROM tweets').fetchone())"

# Recalculate scores
python backend/scoring.py

# View top 10
python -c "import scoring; print(scoring.get_top_users(10))"

# Launch admin dashboard
streamlit run admin_dashboard.py
```

### Alert System (Optional)

```python
# alerts.py
import requests

DISCORD_WEBHOOK = "your_webhook_url"

def send_alert(message):
    """Send alert to Discord"""
    requests.post(DISCORD_WEBHOOK, json={"content": message})

# Example: Alert if tweet collection stops
last_tweet_count = 0
current_tweet_count = get_tweet_count()

if current_tweet_count == last_tweet_count:
    send_alert("⚠️ Tweet collection may have stopped!")
```

---

## Phase 2 & 3 Scaling

### When to Upgrade

**Phase 2 (Testnet, 100-300 users):**
- Current system can handle with minor tweaks
- Add: On-chain activity tracking
- Add: Bug report submission system
- Keep: Manual X tracking

**Phase 3 (Mainnet, 1000+ users):**
- Upgrade to PostgreSQL
- Integrate Kaito API for X tracking
- Add Redis for caching
- Implement real-time leaderboard
- Add automated fraud detection (ML models)

### Kaito Integration (Future)

```python
# kaito_integration.py
import requests

KAITO_API_KEY = "your_kaito_key"

def get_kaito_score(x_handle):
    """Get Kaito score for user"""
    response = requests.get(
        f"https://api.kaito.ai/v1/yap/score",
        headers={"Authorization": f"Bearer {KAITO_API_KEY}"},
        params={"handle": x_handle}
    )
    
    return response.json()['score']
```

---

## Security Considerations

### Data Protection

1. **Environment Variables:**
```bash
# .env
TWITTER_API_KEY=xxx
DISCORD_TOKEN=xxx
DATABASE_URL=xxx
SECRET_KEY=xxx
```

2. **API Rate Limiting:**
```python
from fastapi import FastAPI
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address

limiter = Limiter(key_func=get_remote_address)
app = FastAPI()

@app.post("/api/register")
@limiter.limit("5/minute")  # Max 5 registrations per minute per IP
async def register_user(request: Request, reg: Registration):
    # ...
```

3. **Input Sanitization:**
```python
import bleach

def sanitize_input(text):
    return bleach.clean(text, tags=[], strip=True)
```

---

## Testing

### Unit Tests

```python
# test_scoring.py
import unittest
from scoring import calculate_user_score

class TestScoring(unittest.TestCase):
    def test_basic_score(self):
        # Mock tweet data
        score = calculate_user_score("test_user")
        self.assertGreater(score, 0)
    
    def test_quality_multiplier(self):
        # Test high-quality tweet gets 1.5x
        pass

if __name__ == "__main__":
    unittest.main()
```

---

## Troubleshooting

### Common Issues

**1. TwitterAPI.io rate limits:**
- Solution: Implement exponential backoff
- Cache results for 1 hour

**2. Database locks (SQLite):**
- Solution: Use WAL mode: `PRAGMA journal_mode=WAL;`
- Or upgrade to PostgreSQL

**3. Missing tweets:**
- Solution: Twitter API only returns last 7 days
- Start collecting early (Nov 1)

**4. Duplicate registrations:**
- Solution: Unique constraints on wallet_address
- Check before insert

---

## Cost Summary

| Component | Phase 1 | Phase 2 | Phase 3 |
|-----------|---------|---------|---------|
| TwitterAPI.io | $49 | $49 | $0 (switch to Kaito) |
| Kaito API | $0 | $0 | $500-1000 |
| Hosting | $0-10 | $10-20 | $50-100 |
| Database | $0 | $0 | $25 |
| **Total** | **$50-60** | **$60-70** | **$600-1150** |

---

## Next Steps

1. **This Week (Nov 4-10):**
   - [ ] Set up TwitterAPI.io account
   - [ ] Initialize database
   - [ ] Build registration form
   - [ ] Deploy backend
   - [ ] Start tweet collection
   - [ ] Announce campaign

2. **Next Week (Nov 11-15):**
   - [ ] Monitor tweet collection
   - [ ] Run daily scoring
   - [ ] Review admin dashboard
   - [ ] Spot-check for gaming

3. **Nov 16:**
   - [ ] Final scoring calculation
   - [ ] Manual QA of top 60
   - [ ] Select final 40 winners
   - [ ] Announce winners
   - [ ] Prepare NFT mint list

---

## Support & Documentation

- TwitterAPI.io Docs: https://docs.twitterapi.io
- Discord.py Docs: https://discordpy.readthedocs.io
- FastAPI Docs: https://fastapi.tiangolo.com
- Streamlit Docs: https://docs.streamlit.io

**Questions?** Contact dev team on Discord #tech-support

