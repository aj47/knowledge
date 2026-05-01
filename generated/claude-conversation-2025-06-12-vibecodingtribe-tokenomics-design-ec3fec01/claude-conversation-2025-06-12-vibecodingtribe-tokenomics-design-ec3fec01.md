---
kind: note
id: claude-conversation-2025-06-12-vibecodingtribe-tokenomics-design-ec3fec01
updatedAt: 1749724262131
createdAt: 1749723395787
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: ec3fec01-4718-4d8e-8cf1-399ff947eefe
created_at: 2025-06-12T10:16:35.787360Z
updated_at: 2025-06-12T10:31:02.131283Z
title: "VibeCodingTribe Tokenomics Design"
---

# VibeCodingTribe Tokenomics Design

## Metadata

- Claude conversation UUID: `ec3fec01-4718-4d8e-8cf1-399ff947eefe`
- Created: `2025-06-12T10:16:35.787360Z`
- Updated: `2025-06-12T10:31:02.131283Z`
- Message count: 6
- Transcript chars extracted: 9292

## Quick excerpt

Looking at your PRD, there are several key tokenomics and operational details that need clarification. Let me break down the main areas that need fleshing out: ## Tokenomics & Token Supply **Token Creation & Distribution:** - How are tokens initially created? Is there a fixed total supply or can new tokens be minted? - Who funds the bounty tokens? Do bounty posters need to deposit/stake tokens upfront, or are tokens minted when rewarded? - Is there a treasury or foundation that seeds initial tok

## Transcript

## human\n\ni have this PRD:

```
# VibeCodingTribe – MVP PRD (v1)

## Overview
VibeCodingTribe is a community platform where users earn VibeTokens by contributing to open-source AI-related projects. Users submit GitHub PRs to complete bounties, and tokens are awarded when the PR is approved and merged by the bounty poster.

---

## Core Features

### 1. User Authentication
- GitHub OAuth login.
- Store GitHub ID, username, avatar.
- Users can manage or relink their GitHub account in settings.

### 2. Token System
- Tokens are awarded **only when**:
  - The PR is merged into the target repo.
  - The bounty poster **manually approves** the submission.
- Token reward is fixed per bounty.
- Optional tips can be added by the bounty poster.

### 3. Bounties
- Created by authenticated users (bounty posters).
- Bounty fields:
  - Title
  - GitHub issue URL
  - Token reward
  - Optional tags
- Multiple users can submit PRs per bounty.
- Only one PR can be selected as the winner.
- Bounty poster manually marks the bounty as complete.

### 4. Submissions
- Users submit a PR URL linked to an existing bounty.
- Backend verifies:
  - PR is authored by the submitting user.
  - PR targets the correct repo and is merged.
- Poster approves the submission via the dashboard to trigger token reward.

### 5. Admin Tools (Optional)
- Admin panel for abuse moderation or managing disputed bounties.
- GitHub remains the source of truth for code discussion, review, and merges.

---

## Data Models

### User
- ID
- GitHub ID
- Username
- Avatar URL
- Token balance
- Linked GitHub account info

### Bounty
- ID
- Title
- GitHub issue URL
- Token reward
- Poster ID
- Status: `open`, `completed`
- Winning submission ID
- Optional tags

### Submission
- ID
- User ID
- Bounty ID
- PR URL
- Status: `pending`, `approved`, `rejected`
- Merge status (from GitHub)

---
```

i have this PRD, i want to further flesh out the tokenomics, how tokens enter circulation and also any other ambiguities\n
## assistant\n\nLooking at your PRD, there are several key tokenomics and operational details that need clarification. Let me break down the main areas that need fleshing out:

## Tokenomics & Token Supply

**Token Creation & Distribution:**
- How are tokens initially created? Is there a fixed total supply or can new tokens be minted?
- Who funds the bounty tokens? Do bounty posters need to deposit/stake tokens upfront, or are tokens minted when rewarded?
- Is there a treasury or foundation that seeds initial token distribution?
- What happens to tokens if a bounty expires or is cancelled?

**Token Economics:**
- What gives VibeTokens value beyond being a points system?
- Can tokens be withdrawn/converted to other currencies, or are they purely internal?
- Is there a burning mechanism to control inflation?
- What's the relationship between token rewards and real-world value?

## Bounty Mechanics

**Bounty Funding:**
- Must bounty posters pre-fund bounties with their own tokens?
- Can bounties be funded by third parties (sponsors, companies)?
- What's the minimum/maximum token reward per bounty?
- How are "optional tips" handled - are they separate from the base reward?

**Bounty Lifecycle:**
- What happens if multiple quality PRs are submitted but only one can win?
- Can bounty posters increase rewards after posting?
- Is there an expiration system for open bounties?
- What if a bounty poster disappears and never approves submissions?

## Operational Ambiguities

**Submission & Approval Process:**
- What criteria should bounty posters use for approval?
- Is there an appeals process for disputed rejections?
- Can a bounty poster approve multiple submissions (partial rewards)?
- What if the GitHub repo owner merges a PR but the bounty poster rejects it?

**Platform Governance:**
- Who resolves disputes between bounty posters and contributors?
- What prevents spam bounties or fake submissions?
- How do you handle bounties for private repos?
- What's the policy on self-bounties (posting bounties for your own repos)?

**Technical Verification:**
- How do you verify PR authorship if someone uses multiple GitHub accounts?
- What if a PR is merged then later reverted?
- How do you handle collaborative PRs with multiple authors?

Would you like me to help you develop specific solutions for any of these areas, or would you prefer to tackle them in a particular order?\n
## human\n\n1. i think everyday each user gets 1000 tokens which they can use to submit a bounty. If they do not submit a bounty, they will not get another 1000 tokens the next day. If they do not award the bounty, they do not get another 1000 tokens the next day.
2. If bounty is cancelled, the bounty poster gets the tokens back - 10% submission fee
3.  lets ignore optional tips. posters put their own tokens up for bounties\n
## assistant\n\nGreat! This daily token allocation system creates interesting dynamics. Let me help flesh out the remaining details and identify edge cases:

## Token Allocation Mechanics

**Daily Token Distribution:**
- **Qualification for next day's tokens:** User must both (1) submit a bounty AND (2) award/resolve any outstanding bounties from previous days
- **Token reset:** If a user doesn't qualify, do their unused tokens from the current day expire, or do they carry over?
- **New user onboarding:** Do new users get their first 1000 tokens immediately upon signup, or must they wait until the next daily distribution?

## Bounty Lifecycle & Token Flow

**Bounty States & Token Management:**
```
Open Bounty: Tokens locked from poster's balance
Completed: Tokens transferred to winner
Cancelled: 90% returned to poster, 10% burned/fee
```

**Questions to resolve:**
- **Cancellation policy:** Can bounties be cancelled anytime, or only if no submissions exist?
- **Auto-expiration:** Should bounties auto-expire after X days to prevent indefinite token locking?
- **Multiple outstanding bounties:** Can users post multiple 1000-token bounties if they've accumulated tokens over several days?

## Edge Cases & Governance

**Token Qualification Scenarios:**
- What if a user posts a bounty but receives no submissions - do they still qualify for next day's tokens?
- What if a user has multiple open bounties from different days - must they resolve ALL to get new tokens?
- How do you handle users who consistently post low-quality bounties just to maintain token flow?

**Dispute Resolution:**
- If there's a dispute about bounty completion, are the poster's tokens locked until resolution?
- What prevents users from creating fake GitHub issues and self-awarding bounties through alt accounts?

**Platform Sustainability:**
- With 10% cancellation fees, where do those tokens go? (Platform treasury, burned, redistributed?)
- How do you prevent users from gaming the system by posting bounties with unrealistic requirements just to maintain token flow?

Would you like to define policies for these scenarios, or should we focus on the technical implementation details of the token allocation system first?\n
## human\n\nusers tokens do not expire if unused. yes they get 1000 tokens on sign up. bounties do not expire and can be cancelled at any time. yes users can post as many bounties as they want if they have the tokens to supply them.  if a user submits a bounty and receives no submissions they still qualify for next days tokens.\n
## assistant\n\nPerfect! That clarifies the core mechanics. Let me map out the remaining areas that need definition:

## Token Qualification Rules

**Daily Token Eligibility:**
- ✅ Post a bounty = qualify for next day's tokens
- ✅ Award/resolve outstanding bounties = qualify for next day's tokens
- **Question:** What if a user has multiple open bounties from different days but only awards one - do they qualify, or must they resolve ALL outstanding bounties?

## Outstanding Bounty Management

**Scenarios to define:**
- **User posts bounty Day 1, receives submission Day 3:** Do they need to resolve it by Day 4 to get Day 4's tokens?
- **Multiple submissions per bounty:** Can poster approve multiple submissions with partial rewards, or strictly one winner per bounty?
- **Submission deadline:** Is there a time limit for posters to review submissions after they're made?

## Platform Economics & Abuse Prevention

**Token Sink Mechanisms:**
- ✅ 10% cancellation fee - where do these tokens go? (Platform treasury, burned, etc.)
- **Consideration:** With infinite token accumulation and no expiration, what prevents inflation of token values?

**Quality Control:**
- What prevents users from posting spam bounties just to maintain token flow?
- How do you handle bounties for trivial issues (e.g., "fix typo" for 1000 tokens)?
- Should there be minimum requirements for GitHub issues (age, repo activity, etc.)?

**Gaming Prevention:**
- What stops users from creating fake GitHub issues on their own repos?
- How do you verify that GitHub issues represent legitimate work?
- Should there be restrictions on bounties for private repos or repos with minimal activity?

**Verification Questions:**
- Do you want to verify that the GitHub issue is actually owned by someone other than the bounty poster?
- Should there be a minimum repository star count or activity level required?

Which of these areas would you like to tackle first, or do you have specific preferences for how to handle any of these scenarios?\n