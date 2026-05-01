# Knowledge Cleanup Next Steps

Current baseline after the metadata cleanup and first taxonomy move pass:

- 932 markdown notes
- 353 top-level note/support directories
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

## Completed taxonomy move pass 1

1. Committed the metadata/audit cleanup checkpoint as `398da36` (`Clean knowledge vault metadata`).
2. Moved all 495 root-level `claude-conversation-*` raw conversation folders under `generated/`.
3. Updated `tools/propose_taxonomy.py` so existing taxonomy bucket directories are treated as roots, not re-proposed as items.
4. Regenerated audit/taxonomy reports after the move; audit still has 0 missing frontmatter, 0 missing required fields, 0 duplicate titles, and 0 duplicate IDs.

## Recommended cleanup sequence from here

1. **Review and commit the generated Claude conversation move as a separate checkpoint.**
2. **Continue small `git mv` batches by family from `reports/proposed-taxonomy.md`:** remaining `generated/` candidates next, then `content/`, `business/`, `systems/`, `personal/`, `curated/`, and `archive/`.
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

Commit this generated Claude conversation move first, then continue bucket-by-bucket using `reports/proposed-taxonomy.md`. The next low-risk move is the remaining generated bucket (`discord-*`, `x-feed-*`, and `notion-workspace-extracts-*`).
