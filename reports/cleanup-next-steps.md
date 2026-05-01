# Knowledge Cleanup Next Steps

Current baseline after the full root taxonomy move pass:

- 932 markdown notes
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

## Recommended cleanup sequence from here

1. **Review and commit the full taxonomy move as a separate checkpoint.**
2. **Do semantic curation inside buckets next, not more root moves.** Start with `curated/` vs `generated/` provenance links, then prune/merge within high-noise families only after inspection.
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

Commit this full taxonomy move first. The next safe work unit is a semantic curation pass inside one bucket, preferably `curated/` or `generated/`, using reports plus manual inspection rather than broad automated deletion.
