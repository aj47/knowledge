#!/usr/bin/env python3
from pathlib import Path
from collections import Counter, defaultdict
import re, sys
ROOT = Path(__file__).resolve().parents[1]
REQ = ['kind','id','title','context','createdAt','updatedAt','tags']
MEDIA = {'.mp4','.mov','.wav','.mp3','.gif','.png','.jpg','.jpeg','.pdf'}

def md_files():
    return [p for p in ROOT.rglob('*.md') if '.git' not in p.parts and 'tools' not in p.parts and 'reports' not in p.parts]

def fm(text):
    if not text.startswith('---'):
        return None
    parts = text.split('---', 2)
    if len(parts) < 3:
        return None
    d = {}
    for line in parts[1].splitlines():
        if ':' in line and not line.startswith((' ', '\t')):
            k,v=line.split(':',1)
            d[k.strip()] = v.strip().strip('"')
    return d

files = md_files()
missing=[]; bad=[]; contexts=Counter(); titles=defaultdict(list); ids=defaultdict(list)
for p in files:
    rel=p.relative_to(ROOT).as_posix()
    data=fm(p.read_text(encoding='utf-8', errors='ignore')[:12000])
    if data is None:
        missing.append(rel); continue
    miss=[k for k in REQ if k not in data]
    if miss: bad.append((rel, miss))
    contexts[data.get('context','<missing>')]+=1
    if data.get('title'): titles[data['title']].append(rel)
    if data.get('id'): ids[data['id']].append(rel)
media=[p.relative_to(ROOT).as_posix() for p in ROOT.rglob('*') if p.is_file() and '.git' not in p.parts and 'tools' not in p.parts and 'reports' not in p.parts and p.suffix.lower() in MEDIA]
top_dirs=[p.name for p in ROOT.iterdir() if p.is_dir() and p.name not in {'.git','tools','reports'}]
print('# Knowledge Vault Audit')
print()
print(f'- Markdown files: {len(files)}')
print(f'- Top-level directories: {len(top_dirs)}')
print(f'- Media/binary files: {len(media)}')
print(f'- Missing frontmatter: {len(missing)}')
print(f'- Missing required fields: {len(bad)}')
print('- Context counts: ' + ', '.join(f'{k}={v}' for k,v in sorted(contexts.items())))
print()
print('## Duplicate titles')
for title, paths in sorted(((k,v) for k,v in titles.items() if len(v)>1), key=lambda kv: (-len(kv[1]), kv[0]))[:40]:
    print(f'- {len(paths)} × {title}')
print()
print('## Duplicate ids')
for ident, paths in sorted(((k,v) for k,v in ids.items() if len(v)>1), key=lambda kv: (-len(kv[1]), kv[0]))[:40]:
    print(f'- {len(paths)} × {ident}')
print()
print('## Missing frontmatter sample')
for rel in missing[:40]: print(f'- {rel}')
print()
print('## Missing required fields sample')
for rel, miss in bad[:80]: print(f'- {rel}: {", ".join(miss)}')
