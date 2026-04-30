---
kind: note
id: wiki-refiner-run-log
title: Wiki Refiner Run Log
context: search-only
createdAt: 1775630000000
updatedAt: 1775630000000
tags: wiki_refiner, run_log
summary: Durable running log for wiki-refiner task improvements, priorities, gaps, and completed work.
---

# Wiki Refiner Run Log

## Purpose
Use this file as the durable running record for the wiki refiner task. Update it every run before and after editing the wiki.

## Log format
For each run, append:
- Date / run id
- What sources were checked
- Pages inspected
- Pages improved
- New facts or claims added
- Links added or fixed
- Taxonomy / category changes
- Duplicates merged or pages split
- Site rebuild status
- Remaining gaps / next priorities


## Canonical run record checklist
Use this checklist as the single canonical contract for each wiki-refiner run so `wiki-refiner/task.md` requirements and this log stay aligned.

Required fields per run block:
- Date / run id
- Mode: expansion or refinement fallback
- What sources were checked
- Source extraction notes
- Pages inspected
- Pages improved
- Thin pages expanded
- New pages created
- New facts or claims added
- Links added or fixed
- Evidence / sources sections added
- Taxonomy / category changes
- Duplicates merged or pages split
- Duplicate headings / repeated blocks removed
- Site rebuild status
- Remaining gaps / next priorities

Rule:
- Treat the run block written here as the canonical wiki-refiner record. If the task prompt adds stricter requirements later, mirror them in this checklist instead of inventing a second log format.

## Current priority queue
- Wikipedia_Aj_Joobandi
- Aj_Joobandi
- DotAgents
- TechFren
- Values_and_Motivations
- Creator_Practice
- Personal_Systems
- Health_and_Fitness
- Product_Strategy
- Video_Projects
- MCP_and_Skills
- category/list pages
- archive/meta pages

## No-new-data fallback
If no new factual material is found in source mining:
1. strengthen internal links on priority pages
2. merge duplicate concepts
3. split overloaded pages
4. improve list/category pages
5. add timeline, infobox, image, and caption improvements
6. regenerate the site

## Notes
- This log is intended to be updated continuously.
- The wiki refiner task should always consult this file before choosing what to edit.


### 2026-04-09 19:23:00
- Observation: Later wiki-refiner content passes can change page content without rebuilding the site, so pipeline freshness must be split from content-pass progress.
- Evidence checked: `~/Documents/personal-wiki/wiki-refiner-log.md`, `~/Documents/personal-wiki/site/_index.html`, `~/Documents/personal-wiki/meta/wiki_stats.json`
- Change: Added a reconciliation rule that only `wiki-pipeline-status.md` should record explicit build freshness, while this log records content-pass evidence and rebuild status separately.
