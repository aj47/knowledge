# Knowledge Cleanup Next Steps

Current baseline after the duplicate-title cleanup pass:

- 932 markdown notes
- 847 top-level note/support directories
- 57 non-markdown support files, mostly source snippets and lightweight assets
- 0 bulky ignored media files present in the vault scan
- 0 missing frontmatter blocks
- 0 missing required canonical fields
- 0 duplicate titles
- 0 duplicate IDs
- 2 intentional `context: auto` notes

## Completed in this pass

1. Normalized generated/reference duplicate titles where folder/reference metadata made the unique title obvious.
2. Disambiguated semantic duplicates by source family, e.g. `Claude Canonical — ...`, `Claude Conversation — DATE — ... — HASH`, and `Claude Evergreen Distilled — ...`.
3. Regenerated duplicate and audit reports so duplicate-title review is now empty.
4. Updated the audit script to distinguish markdown notes from non-markdown support files instead of reporting only bulky media.
5. Removed the tracked empty `knowledge-inbox/knowledge-inbox.md.tmp` placeholder and ignored future `*.tmp` scratch files.

## Recommended cleanup sequence from here

1. **Review and commit the title/audit cleanup as one atomic checkpoint.** The current tree is intentionally uncommitted for inspection.
2. **Do not bulk-move folders until after that checkpoint.** Path moves will create noisy diffs; keep them separate from metadata normalization.
3. **Review `reports/proposed-taxonomy.md` as a move plan.** Prefer small `git mv` batches by family: `generated/`, `content/`, `business/`, `agentic/`, etc.
4. **Handle raw-vs-curated Claude material as provenance, not deletion.** Keep raw `claude-conversation-*` notes searchable; use canonical/evergreen notes as the curated reading surface.
5. **Keep tools/reports tracked.** They are now the reproducible audit surface for future cleanup agents.

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

Commit the metadata cleanup first, then do a separate taxonomy-move pass using `reports/proposed-taxonomy.md`. Start with one low-risk bucket such as generated Claude conversations or content assets, verify the audit still passes, then continue bucket by bucket.
