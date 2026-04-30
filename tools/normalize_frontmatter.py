#!/usr/bin/env python3
from pathlib import Path
import re, time

ROOT = Path(__file__).resolve().parents[1]
REQ = ['kind','id','title','context','createdAt','updatedAt','tags']
SKIP_PARTS = {'.git', 'tools', 'reports'}

def slug_title(slug: str) -> str:
    return re.sub(r'[-_]+', ' ', slug).strip().title() or 'Untitled'

def parse_fm(text: str):
    if not text.startswith('---\n'):
        return None, text
    end = text.find('\n---\n', 4)
    if end == -1:
        return None, text
    return text[4:end], text[end+5:]

def keys_in(fm: str):
    keys=[]
    for line in fm.splitlines():
        if ':' in line and not line.startswith((' ', '\t')):
            keys.append(line.split(':',1)[0].strip())
    return keys

changed=[]
for p in sorted(ROOT.rglob('*.md')):
    if any(part in SKIP_PARTS for part in p.parts):
        continue
    rel = p.relative_to(ROOT).as_posix()
    text = p.read_text(encoding='utf-8', errors='ignore')
    fm, body = parse_fm(text)
    stat = p.stat()
    now_ms = int(time.time()*1000)
    file_ms = int(min(stat.st_ctime, stat.st_mtime)*1000)
    base_slug = p.stem
    if p.parent != ROOT and p.name == f'{p.parent.name}.md':
        base_slug = p.parent.name
    defaults = {
        'kind': 'note',
        'id': base_slug,
        'title': slug_title(base_slug),
        'context': 'search-only',
        'createdAt': str(file_ms),
        'updatedAt': str(now_ms),
        'tags': 'uncategorized',
    }
    if fm is None:
        new_fm = '\n'.join(f'{k}: {defaults[k]}' for k in REQ)
        new = f'---\n{new_fm}\n---\n\n{text.lstrip()}'
        p.write_text(new, encoding='utf-8')
        changed.append((rel, 'added frontmatter'))
        continue
    keys = keys_in(fm)
    missing=[k for k in REQ if k not in keys]
    if not missing:
        continue
    lines = fm.splitlines()
    existing = set(keys)
    additions=[]
    for k in REQ:
        if k not in existing:
            additions.append(f'{k}: {defaults[k]}')
    # Preserve existing frontmatter; append missing canonical fields.
    new_fm = fm.rstrip() + '\n' + '\n'.join(additions)
    p.write_text(f'---\n{new_fm}\n---\n{body}', encoding='utf-8')
    changed.append((rel, ', '.join(missing)))

print(f'normalized {len(changed)} files')
for rel, what in changed[:200]:
    print(f'- {rel}: {what}')
if len(changed) > 200:
    print(f'- … {len(changed)-200} more')
