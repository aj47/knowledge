---
kind: note
id: claude-conversation-2026-02-14-aws-free-tier-instance-limits-55dada3b
updatedAt: 1771099212351
createdAt: 1771099203239
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 55dada3b-4049-4629-be33-9e7eb0b509cf
created_at: 2026-02-14T20:00:03.239881Z
updated_at: 2026-02-14T20:00:12.351672Z
title: "AWS free tier instance limits"
---

# AWS free tier instance limits

## Metadata

- Claude conversation UUID: `55dada3b-4049-4629-be33-9e7eb0b509cf`
- Created: `2026-02-14T20:00:03.239881Z`
- Updated: `2026-02-14T20:00:12.351672Z`
- Message count: 2
- Transcript chars extracted: 990

## Claude summary

**Conversation Overview**

The user inquired about running two free tier instances simultaneously on AWS Free Tier in 2026. Claude explained that while it's technically possible to run two EC2 instances on the AWS Free Tier, there are important limitations regarding the 750-hour monthly allowance for t2.micro or t3.micro instances. The conversation focused on the practical mathematics of instance usage, clarifying that running two instances continuously would consume approximately 1,440-1,488 hours per month, which would exceed the free tier limit and result in charges for the overage of roughly 700 hours. Claude provided specific strategies for staying within the free tier limits, such as staggering instance usage or running one instance continuously while using the second only when needed, ensuring the combined uptime stays under 750 hours monthly. The discussion also covered the important detail that the 750 hours are shared across all running eligible instances in the account rather than being allocated per instance, and reminded the user that the AWS Free Tier typically lasts 12 months from account creation.

## Quick excerpt

**Yes, you can run two EC2 instances on the AWS Free Tier**, but with an important caveat: The Free Tier gives you **750 hours per month** of `t2.micro` (or `t3.micro` in some regions) instances. Since a month has ~720-744 hours, running **two instances simultaneously would use ~1,440-1,488 hours** — roughly double the free allowance. So practically: - **One instance 24/7** = ~720 hrs ✅ Free - **Two instances 24/7** = ~1,440 hrs ❌ You'd pay for ~700 hours of overage - **Two instances ~12 hrs/day

## Transcript

## human\n\ncan i have two free tier instances on aws free tier 2026\n
## assistant\n\n**Yes, you can run two EC2 instances on the AWS Free Tier**, but with an important caveat:

The Free Tier gives you **750 hours per month** of `t2.micro` (or `t3.micro` in some regions) instances. Since a month has ~720-744 hours, running **two instances simultaneously would use ~1,440-1,488 hours** — roughly double the free allowance.

So practically:

- **One instance 24/7** = ~720 hrs ✅ Free
- **Two instances 24/7** = ~1,440 hrs ❌ You'd pay for ~700 hours of overage
- **Two instances ~12 hrs/day each** = ~720 hrs ✅ Free

The 750 hours are shared across **all** running t2/t3.micro instances in your account, not per instance.

**To stay free with two instances**, you'd need to stagger them or keep total combined uptime under 750 hours/month. Some people run one 24/7 and spin the second up only when needed.

Also keep in mind the AWS Free Tier is typically **12 months** from account creation, so check when yours started.\n