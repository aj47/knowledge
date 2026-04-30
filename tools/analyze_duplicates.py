#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
import re
ROOT = Path(__file__).resolve().parents[1]
SKIP = {'.git','tools','reports'}

def parse_fm(text):
    if not text.startswith('---\n'):
        return {}
    end = text.find('\n---\n',4)
    if end == -1:
        return {}
    d = {}
    for line in text[4:end].splitlines():
        if ':' in line and not line.startswith((' ','\t')):
            k,v=line.split(':',1)
            d[k.strip()] = v.strip().strip('"')
    return d

def md_files():
    for p in ROOT.rglob('*.md'):
        if any(part in SKIP for part in p.parts):
            continue
        yield p

def family(path):
    s = path.as_posix().lower()
    if s.startswith('claude-conversation-') or '/claude-conversation-' in s: return 'raw claude conversation'
    if s.startswith('claude-canonical') or '/claude-canonical' in s: return 'canonical claude'
    if s.startswith('claude-evergreen') or '/claude-evergreen' in s: return 'evergreen/distilled'
    if s.startswith('x-feed') or 'x-following-feed' in s: return 'x feed summary'
    if s.startswith('tweets-images') or s.startswith('worktrees-video-assets'): return 'generated asset note'
    return 'other'

titles=defaultdict(list)
for p in md_files():
    text=p.read_text(encoding='utf-8', errors='ignore')
    fm=parse_fm(text[:5000])
    title=fm.get('title')
    if title:
        titles[title].append(p.relative_to(ROOT))

print('# Duplicate Title Review')
print()
print('Purpose: identify likely merge/dedupe candidates. This does not modify notes.')
print()
for title, paths in sorted(((t,ps) for t,ps in titles.items() if len(ps)>1), key=lambda kv:(-len(kv[1]), kv[0])):
    fams=defaultdict(list)
    for p in paths:
        fams[family(p)].append(p)
    print(f'## {title} ({len(paths)})')
    print('Families: ' + ', '.join(f'{k}={len(v)}' for k,v in sorted(fams.items())))
    # heuristic
    if any(k in fams for k in ['canonical claude','evergreen/distilled']) and 'raw claude conversation' in fams:
        print('Suggested action: keep curated/canonical copy, archive or mark raw conversation as source.')
    elif all(family(p) in {'x feed summary'} for p in paths):
        print('Suggested action: rename titles with date/tab to remove ambiguity; likely not duplicates.')
    elif all(family(p) in {'generated asset note'} for p in paths):
        print('Suggested action: group under generated/assets or archive if source assets are gone.')
    else:
        print('Suggested action: manually inspect; title collision may be legitimate.')
    for p in paths[:25]:
        print(f'- `{p}`')
    if len(paths)>25:
        print(f'- … {len(paths)-25} more')
    print()
