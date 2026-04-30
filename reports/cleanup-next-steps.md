# Knowledge Cleanup Next Steps

Current baseline after metadata normalization:

- 932 markdown notes
- 847 note directories
- 0 tracked media/binary files
- 0 missing frontmatter blocks
- 0 missing required canonical fields
- 2 intentional `context: auto` notes
- duplicate IDs: none

## Recommended cleanup sequence

1. **Do not move folders yet.** Keep the current path layout stable while duplicate/title ambiguity is reviewed.
2. **Fix ambiguous generated titles first.** The biggest duplicate-title groups are X feed summaries and generated visual asset notes; many are not semantic duplicates, just weak titles.
3. **Separate raw vs curated Claude material.** Treat `claude-conversation-*` as raw source, and `claude-canonical-*` / `claude-evergreen-*` as curated derivatives.
4. **Adopt taxonomy as a move plan, not an immediate migration.** Use `reports/proposed-taxonomy.md` to review bucket assignments before bulk `git mv`.
5. **Keep tools/reports tracked.** They are now the reproducible audit surface for future cleanup agents.

## Useful commands

```bash
cd ~/.agents/knowledge
python3 tools/audit_knowledge.py > reports/knowledge-audit.md
python3 tools/propose_taxonomy.py > reports/proposed-taxonomy.md
python3 tools/analyze_duplicates.py > reports/duplicate-title-review.md
```

## Next safe work unit

Rename only duplicate-title notes where the correct unique title is obvious from the folder/date, especially X feed summaries. Avoid deleting or merging notes until raw-vs-curated provenance is clear.
