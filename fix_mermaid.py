import re, os, glob

def fix_mermaid_blocks(content):
    def strip_blank_lines(match):
        fence_open = match.group(1)
        inner = match.group(2)
        fence_close = match.group(3)
        # Remove blank lines inside the block
        lines = [l for l in inner.split('\n') if l.strip() != '']
        # Fix escaped quotes in node labels
        fixed = '\n'.join(lines).replace('\\"', '"').replace("\\n", "\n")
        return f"{fence_open}\n{fixed}\n{fence_close}"
    pattern = r'(```mermaid)(.*?)(```)'
    return re.sub(pattern, strip_blank_lines, content, flags=re.DOTALL)

for path in glob.glob('src/content/docs/**/*.mdx', recursive=True):
    with open(path, 'r') as f:
        content = f.read()
    fixed = fix_mermaid_blocks(content)
    if fixed != content:
        with open(path, 'w') as f:
            f.write(fixed)
        print(f'Fixed: {path}')