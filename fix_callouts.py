import re, glob

def fix_callouts(content):
    # Fix: :::tip Title Text (no brackets) -> :::tip[Title Text]
    content = re.sub(
        r'^:::(tip|note|caution|danger|warning|info|important)[ \t]+(.+)$',
        r':::\1[\2]',
        content,
        flags=re.MULTILINE
    )
    # Fix invalid types
    content = content.replace(':::info[', ':::note[')
    content = content.replace(':::info\n', ':::note\n')
    content = content.replace(':::warning[', ':::caution[')
    content = content.replace(':::warning\n', ':::caution\n')
    content = content.replace(':::important[', ':::note[')
    content = content.replace(':::important\n', ':::note\n')
    return content

for path in glob.glob('src/content/docs/**/*.mdx', recursive=True):
    with open(path, 'r') as f:
        content = f.read()
    fixed = fix_callouts(content)
    if fixed != content:
        with open(path, 'w') as f:
            f.write(fixed)
        print(f'Fixed callouts: {path}')