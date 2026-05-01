---
context: search-only
createdAt: 1777589608361
entryType: overview
id: fact-conversation-history-may-be-stored-in-one-of-several-dotage-eh6ibh
kind: note
references: conv_1777589568526_l7iurrg1z
summary: fact: Conversation history may be stored in one of several dotagents directories under the user's home folder. | decision: When locating local agent conversations, check multiple candidate `index.json` paths. | insight: Aggregating metadata from all found indexes is a practical way to rebuild conversation history across installations.
tags: fact, decision, insight
title: fact: Conversation history may be stored in one of several dotagents directories under the user's home folder. | decisio
updatedAt: 1777589608361
---

fact: Conversation history may be stored in one of several dotagents directories under the user's home folder. | decision: When locating local agent conversations, check multiple candidate `index.json` paths. | insight: Aggregating metadata from all found indexes is a practical way to rebuild conversation history across installations.

## Key Findings

- It checked multiple possible storage locations under the user's home directory for conversation indexes.
- The script was designed to aggregate updated timestamps and conversation entries from any indexes it found.

## Source

conv_1777589568526_l7iurrg1z
