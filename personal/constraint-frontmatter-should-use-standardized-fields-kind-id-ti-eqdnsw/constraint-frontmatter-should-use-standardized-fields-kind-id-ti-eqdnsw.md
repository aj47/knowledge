---
context: search-only
createdAt: 1777589602170
id: constraint-frontmatter-should-use-standardized-fields-kind-id-ti-eqdnsw
kind: note
references: conv_1777586995128_6bcep8cid
summary: constraint: Frontmatter should use standardized fields: `kind`, `id`, `title`, `context`, `createdAt`, `updatedAt`, `tags`. | decision: Prioritize schema stabilization before broader cleanup. | fact: Only truly auto-generated notes should have `context: auto`.
tags: constraint, decision, fact
title: constraint: Frontmatter should use standardized fields: `kind`, `id`, `title`, `context`, `createdAt`, `updatedAt`, `tag
updatedAt: 1777589602170
---

constraint: Frontmatter should use standardized fields: `kind`, `id`, `title`, `context`, `createdAt`, `updatedAt`, `tags`. | decision: Prioritize schema stabilization before broader cleanup. | fact: Only truly auto-generated notes should have `context: auto`.

## Key Findings

- Standard frontmatter fields should be standardized to `kind`, `id`, `title`, `context`, `createdAt`, `updatedAt`, and `tags`.
- Three `context: auto` notes need correction so only truly auto-generated notes keep that value.

## Source

conv_1777586995128_6bcep8cid
