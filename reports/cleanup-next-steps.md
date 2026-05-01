# Knowledge Cleanup Next Steps

Current baseline after the full root taxonomy move pass plus the first curated-bucket semantic curation pass:

- 933 markdown notes
- 8 top-level taxonomy note directories, plus `tools/` and `reports/`
- 57 non-markdown support files, mostly source snippets and lightweight assets
- 0 bulky ignored media files present in the vault scan
- 0 missing frontmatter blocks
- 0 missing required canonical fields
- 0 duplicate titles
- 0 duplicate IDs
- 2 intentional `context: auto` notes

## Completed metadata cleanup pass

1. Normalized generated/reference duplicate titles where folder/reference metadata made the unique title obvious.
2. Disambiguated semantic duplicates by source family, e.g. `Claude Canonical — ...`, `Claude Conversation — DATE — ... — HASH`, and `Claude Evergreen Distilled — ...`.
3. Regenerated duplicate and audit reports so duplicate-title review is now empty.
4. Updated the audit script to distinguish markdown notes from non-markdown support files instead of reporting only bulky media.
5. Removed the tracked empty `knowledge-inbox/knowledge-inbox.md.tmp` placeholder and ignored future `*.tmp` scratch files.

## Completed taxonomy move passes

1. Committed the metadata/audit cleanup checkpoint as `398da36` (`Clean knowledge vault metadata`).
2. Committed the raw Claude conversation move as `87c5879` (`Move Claude conversations into generated taxonomy`).
3. Moved all remaining root note/support directories into the target taxonomy buckets: `archive/`, `business/`, `content/`, `curated/`, `generated/`, `inbox/`, `personal/`, and `systems/`.
4. Updated `tools/propose_taxonomy.py` so existing taxonomy bucket directories are treated as roots, not re-proposed as items.
5. Regenerated audit/taxonomy reports after the moves; audit still has 0 missing frontmatter, 0 missing required fields, 0 duplicate titles, and 0 duplicate IDs.
6. `reports/proposed-taxonomy.md` now reports 0 remaining move candidates across all taxonomy buckets.

## Completed curated-bucket semantic curation pass

1. Reviewed the 11 `curated/` notes with no markdown links and classified them by semantic role.
2. Kept curated reading surfaces in `curated/`: canonical Claude indexes, topic maps, distilled indexes, and best-of dashboard.
3. Moved audit/run-log/generated artifacts out of `curated/`:
   - Claude audit and promotion summaries → `generated/`
   - Notion workspace heading index → `generated/`
   - Notion personal takeaways → `personal/`
   - Wiki pipeline status and refiner log → `systems/`
4. Converted the best-of dashboard path-only entry points into markdown links so every remaining `curated/` note has at least one navigable link.
5. Updated moved references in `systems/knowledge-os`, `systems/agent-autonomy`, and Claude provenance notes.
6. Regenerated audit/taxonomy/duplicate reports and verified no missing non-generated relative markdown links.

## Recommended cleanup sequence from here

1. **Commit this curated semantic curation pass as a separate checkpoint.**
2. **Continue semantic curation inside buckets, not broad root moves.** Next best target: `generated/` high-noise Claude audit/export artifacts versus evergreen distilled notes.
3. **Handle raw-vs-curated Claude material as provenance, not deletion.** Keep raw generated conversation notes searchable; use canonical/evergreen notes as the curated reading surface.
4. **Keep tools/reports tracked.** They are now the reproducible audit surface for future cleanup agents.

## Useful commands

```bash
cd ~/.agents/knowledge
python3 tools/audit_knowledge.py > reports/knowledge-audit.md
python3 tools/propose_taxonomy.py > reports/proposed-taxonomy.md
python3 tools/analyze_duplicates.py > reports/duplicate-title-review.md
git diff --check
python3 -m py_compile tools/*.py
rm -rf tools/__pycache__
```

## Next safe work unit

Commit this curated semantic curation pass first. The next safe work unit is a generated-bucket provenance pass: inspect generated Claude audit/export artifacts, preserve source-truth files, and only merge/delete empty derived wrappers after manual review.
