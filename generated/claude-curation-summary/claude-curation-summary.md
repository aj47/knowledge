---
kind: note
id: claude-curation-summary
updatedAt: 1775890800000
tags: 
title: Claude Curation Summary
context: search-only
source: claude-export-derived
source_type: curation-summary
updated: 2026-04-11
createdAt: 1776281681136
---

# Claude Curation Summary

## What was created

- `claude-topic-map`: topic distribution + representative examples
- `claude-high-signal-index`: cross-topic curated entry points
- `claude-distilled-engineering`: engineering-focused distilled index
- `claude-distilled-product`: product-focused distilled index
- `claude-distilled-content`: content-focused distilled index
- `claude-distilled-personal`: personal-focused distilled index
- `../claude-duplicate-candidates/claude-duplicate-candidates.md`: duplicate audit

## Distilled note counts

- engineering: 12
- product: 12
- content: 12
- personal: 12

## Recommended usage

- Use `claude-high-signal-index` as the main entry point.
- Use topic-specific distilled indexes for focused retrieval.
- Keep all Claude-derived notes as `context: search-only` unless a tiny subset becomes repeatedly reused.
- Preserve raw export in `~/Documents/claude-export` as source-of-truth archive.