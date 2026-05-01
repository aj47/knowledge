#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
ROOT = Path(__file__).resolve().parents[1]

def classify(name: str) -> str:
    n=name.lower()
    if n in {'tools','reports'}:
        return 'system'
    if n.startswith(('archive-', 'archive')):
        return 'archive'
    if n.startswith(('claude-conversation-', 'x-feed-summaries-', 'x-following-feed-summary-', 'discord-', 'notion-workspace-extracts')):
        return 'generated'
    if n.startswith(('tweet', 'tweets', 'x-', 'x_', 'posting-', 'youtube-', 'video-', 'remotion-', 'clip-', 'content-', 'stream-', 'anthropic-openclaw', 'dotagents-vs-openclaw')):
        return 'content'
    if n.startswith(('product-', 'branding-', 'brand-', 'competitor-', 'strategy-', 'strategic-', 'crm-', 'company-', 'pricing-', 'agent-battler', 'agentbattler')):
        return 'business'
    if n.startswith(('agent-', 'agents', 'mcp-', 'chrome-', 'worktree', 'worktrees', 'harness-', 'layout-', 'experimental-', 'prediction-', 'polymarket-', 'knowledge-', 'serendipity-', 'current-', 'dotagents-', 'aloops')):
        return 'systems'
    if n.startswith(('personal-', 'aj-', 'arash-', 'tax-', 'memory-', 'preference-', 'fact-', 'decision-', 'constraint-')):
        return 'personal'
    if n.startswith(('claude-core-', 'claude-canonical-', 'claude-distilled-', 'claude-', 'notion-', 'wiki-', 'research-')):
        return 'curated'
    return 'inbox'

buckets=defaultdict(list)
for p in sorted(ROOT.iterdir()):
    if not p.is_dir() or p.name == '.git':
        continue
    if p.name in {'business','content','curated','generated','personal','systems','archive','inbox'}:
        continue
    buckets[classify(p.name)].append(p.name)

print('# Proposed Knowledge Taxonomy Move Map')
print()
print('Target top-level buckets: `business/`, `content/`, `curated/`, `generated/`, `personal/`, `systems/`, `archive/`, `inbox/`, `tools/`, `reports/`.')
print()
for bucket in ['business','content','curated','generated','personal','systems','archive','inbox','system']:
    items=buckets.get(bucket, [])
    print(f'## {bucket} ({len(items)})')
    for name in items[:120]:
        target = 'tools/' if bucket=='system' and name=='tools' else ('reports/' if bucket=='system' and name=='reports' else f'{bucket}/{name}/')
        print(f'- `{name}/` → `{target}`')
    if len(items)>120:
        print(f'- … {len(items)-120} more')
    print()
