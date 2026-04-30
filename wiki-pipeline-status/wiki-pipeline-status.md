---
kind: note
id: wiki-pipeline-status
title: Wiki Pipeline Status
context: search-only
createdAt: 1775785800000
updatedAt: 1775787703000
tags: wiki, reliability, status
summary: Minimal file-based status artifact for the wiki pipeline, tracking the latest known check/build state and next reliability action.
---

# Wiki Pipeline Status

## Purpose
This file is the single lightweight status artifact for the wiki pipeline between full run logs.

## Field contract
- `Last checked at` uses `YYYY-MM-DD HH:MM:SS`.
- `Last successful build at` uses `YYYY-MM-DD HH:MM:SS` or `unknown`.
- `Build status` must be one of: `unknown`, `success`, `failed`, `not_run`.
- `Checked by` should name the loop or task that last updated this file.
- `Ingest manifest status` must be one of: `present`, `missing`.
- `Wiki stats status` must be one of: `present`, `missing`, `unreadable`.
- `Wiki stats summary` should stay short, ideally `pages=<n>, entries=<n>`.
- `Latest wiki log run` should reference the most recent seen run id or `unknown`.
- `Evidence checked` should name the concrete files used for the snapshot.
- `Next reliability action` should be one concrete verb-led step.
- Append brief status history entries instead of rewriting prior observations elsewhere.

## Current status
- Last checked at: 2026-04-09 19:21:43
- Last successful build at: 2026-04-09 19:14:19
- Build status: success
- Checked by: personal-os-loop
- Ingest manifest status: present
- Wiki stats status: present
- Wiki stats summary: pages=26, entries=725
- Latest wiki log run: run-80
- Evidence checked: `~/Documents/personal-wiki/wiki-refiner-log.md`, `~/Documents/personal-wiki/meta/ingest_manifest.json`, `~/Documents/personal-wiki/meta/wiki_stats.json`, `~/Documents/personal-wiki/site/_index.html`
- Next reliability action: Run one explicit wiki build after the next wiki-refiner content pass that leaves `Site rebuild status: pending` or `not run`.

## Status history
### 2026-04-09 19:21:43
- Observation: Reconciled the status note against the latest visible wiki-refiner runs so build freshness and current content-pass state are no longer conflated.
- Evidence checked: `~/Documents/personal-wiki/wiki-refiner-log.md`, `~/Documents/personal-wiki/meta/ingest_manifest.json`, `~/Documents/personal-wiki/meta/wiki_stats.json`, `~/Documents/personal-wiki/site/_index.html`
- Build hint: latest visible run states `Site rebuild status: not run in this pass`; last explicit build evidence remains the successful 2026-04-09 19:14:19 check.
- Change: Narrowed the evidence target to `_index.html`, kept the last successful build timestamp, and made the next action trigger explicit for future reconciliation.

### 2026-04-09 19:07:59
- Observation: Tightened the status snapshot so it records whether core pipeline evidence files exist and what the latest visible wiki log/build hint says.
- Evidence checked: `~/Documents/personal-wiki/meta/build_site.py`, `~/Documents/personal-wiki/meta/ingest_manifest.json`, `~/Documents/personal-wiki/meta/wiki_stats.json`, `~/Documents/personal-wiki/wiki-refiner-log.md`, `~/Documents/personal-wiki/site/index.html`
- Build hint: Site rebuild status: not run in this pass; pages were verified for structure and provenance.
- Change: Added explicit manifest/stats/log evidence fields and refreshed the current snapshot.

### 2026-04-09 18:50:34
- Observation: Created the initial status artifact because the wiki pipeline had a durable run log but no single at-a-glance status file.
- Evidence checked: `~/Documents/personal-wiki/meta/build_site.py`, `~/Documents/personal-wiki/meta/ingest_manifest.json`, `~/Documents/personal-wiki/meta/wiki_stats.json`, `~/Documents/personal-wiki/wiki-refiner-log.md`, `~/Documents/personal-wiki/site/index.html`
- Change: Initialized canonical fields for last check time, build status, and next reliability action.


### 2026-04-09 19:14:19
- Observation: Ran one explicit wiki build/check from `~/Documents/personal-wiki/meta/build_site.py` to replace unknown build freshness with observed evidence.
- Evidence checked: `~/Documents/personal-wiki/meta/build_site.py`, `~/Documents/personal-wiki/meta/ingest_manifest.json`, `~/Documents/personal-wiki/meta/wiki_stats.json`, `~/Documents/personal-wiki/wiki-refiner-log.md`, `~/Documents/personal-wiki/site/index.html`
- Build hint: exit_code=0; index_exists=false; html_pages=41; stdout=built 41 pages to /Users/ajjoobandi/Documents/personal-wiki/site; stderr=none
- Change: Updated current status fields with the observed build result and concrete site-output evidence.
