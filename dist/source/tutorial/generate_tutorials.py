#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json
import os
import re
import sys

# Set UTF-8 encoding for Windows
if sys.platform == 'win32':
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Chapter definitions with their start indices (based on TOC analysis)
# Format: (chapter_num, title, para_start_index)
CHAPTERS = [
    (1, "OpenClaw是什么", 59),
    (2, "发展简史", 76),
    (3, "创始人故事", 109),
    (4, "为什么这么火", 150),
    (5, "整体架构", 173),
    (6, "记忆系统", 207),
    (7, "Agent工作区", 216),
    (8, "Session与用户识别", 238),
    (9, "设计哲学", 275),
    (10, "部署方式总览", 303),
    (11, "本地安装", 321),
    (12, "Docker部署", 399),
    (13, "国内云厂商一键部署", 417),
    (14, "首次配置", 431),
    (15, "渠道概览", 522),
    (16, "国际平台接入", 575),
    (17, "国内平台接入", 627),
    (18, "远程访问", 708),
    (19, "Skills工作原理", 748),
    (20, "ClawHub技能市场", 764),
    (21, "热门Skills推荐", 780),
    (22, "自建Skill指南", 810),
    (23, "Skills安全", 827),
    (24, "模型提供商总览", 854),
    (25, "国际模型配置", 885),
    (26, "国产模型配置", 910),
    (27, "本地模型", 940),
    (28, "安全模型", 960),
]

# Table assignments to chapters (approximate based on content analysis)
TABLE_CHAPTER_MAP = {
    0: 1,   # First table -> Chapter 1
    1: 1,   # Second table -> Chapter 1
    2: 5,   # Chapter 5: 整体架构
    3: 10,  # Chapter 10: 部署方式总览
    4: 12,  # Chapter 12: Docker部署
    5: 15,  # Chapter 15: 渠道概览
    6: 16,  # Chapter 16: 国际平台接入
    7: 16,
    8: 16,
    9: 17,  # Chapter 17: 国内平台接入
    10: 17,
    11: 19, # Chapter 19: Skills工作原理
    12: 19,
    13: 20, # Chapter 20: ClawHub技能市场
    14: 20,
    15: 21, # Chapter 21: 热门Skills推荐
    16: 22, # Chapter 22: 自建Skill指南
    17: 23, # Chapter 23: Skills安全
    18: 24, # Chapter 24: 模型提供商总览
    19: 24,
    20: 25, # Chapter 25: 国际模型配置
    21: 25,
    22: 26, # Chapter 26: 国产模型配置
    23: 26,
    24: 26,
    25: 27, # Chapter 27: 本地模型
    26: 27,
    27: 27,
    28: 28, # Chapter 28: 安全模型
    29: 28,
    30: 28,
    31: 28,
    32: 28,
    33: 28,
    34: 28,
    35: 28,
}

def load_content():
    with open('D:/AI/company/project/ttttstc.github.io/public/source/tutorial/docx_content.json', 'r', encoding='utf-8') as f:
        return json.load(f)

def extract_chapter_content(data, start_idx, end_idx):
    """Extract content for a chapter"""
    items = data[start_idx:end_idx]
    content = []

    for item in items:
        if item.get('type') == 'para':
            text = item.get('text', '').strip()
            if text:
                content.append({'type': 'para', 'text': text})
        elif item.get('type') == 'table':
            content.append(item)

    return content

def table_to_html(table_data):
    """Convert table data to HTML"""
    if not table_data or 'rows' not in table_data:
        return ''

    rows = table_data['rows']
    if not rows:
        return ''

    html = '<div class="table-wrapper"><table class="tutorial-table">'

    for row_idx, row in enumerate(rows):
        html += '<tr>'
        for cell in row:
            tag = 'th' if row_idx == 0 else 'td'
            html += f'<{tag}>{cell}</{tag}>'
        html += '</tr>'

    html += '</table></div>'
    return html

def para_to_html(text):
    """Convert paragraph to HTML with basic formatting"""
    # Handle headings
    if text.startswith('## '):
        return f'<h2>{text[3:]}</h2>'
    elif text.startswith('# '):
        return f'<h1>{text[2:]}</h1>'

    # Handle inline formatting
    text = text.replace('**', '')

    # Handle list items
    if text.startswith('• '):
        return f'<li>{text[2:]}</li>'

    # Regular paragraph
    return f'<p>{text}</p>'

def generate_chapter_html(chapter_num, title, content):
    """Generate HTML for a single chapter"""
    html_parts = []

    for item in content:
        if item['type'] == 'para':
            text = item.get('text', '').strip()
            if text:
                html_parts.append(para_to_html(text))
        elif item['type'] == 'table':
            html_parts.append(table_to_html(item))

    return '\n'.join(html_parts)

# HTML Template with beautiful styling
HTML_TEMPLATE = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} - OpenClaw教程</title>
    <style>
        * {{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }}
        body {{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            color: #e4e4e7;
            line-height: 1.8;
            min-height: 100vh;
        }}
        .container {{
            max-width: 900px;
            margin: 0 auto;
            padding: 40px 20px;
        }}
        .header {{
            text-align: center;
            margin-bottom: 50px;
            padding-bottom: 30px;
            border-bottom: 2px solid rgba(249, 115, 22, 0.3);
        }}
        .chapter-num {{
            display: inline-block;
            background: linear-gradient(135deg, #f97316, #ea580c);
            color: white;
            padding: 8px 20px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 20px;
        }}
        h1 {{
            font-size: 2.5rem;
            color: #fff;
            margin-bottom: 10px;
            background: linear-gradient(135deg, #fff, #f97316);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }}
        .content {{
            background: rgba(255, 255, 255, 0.03);
            border-radius: 16px;
            padding: 40px;
            border: 1px solid rgba(255, 255, 255, 0.08);
        }}
        .content h2 {{
            color: #f97316;
            font-size: 1.5rem;
            margin: 30px 0 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid rgba(249, 115, 22, 0.2);
        }}
        .content p {{
            margin-bottom: 16px;
            color: #d4d4d8;
            font-size: 1rem;
        }}
        .content li {{
            margin-bottom: 10px;
            padding-left: 20px;
            position: relative;
            color: #d4d4d8;
        }}
        .content li::before {{
            content: '▸';
            position: absolute;
            left: 0;
            color: #f97316;
        }}
        .table-wrapper {{
            overflow-x: auto;
            margin: 25px 0;
            border-radius: 12px;
            background: rgba(0, 0, 0, 0.2);
        }}
        .tutorial-table {{
            width: 100%;
            border-collapse: collapse;
            font-size: 0.95rem;
        }}
        .tutorial-table th {{
            background: linear-gradient(135deg, #f97316, #ea580c);
            color: white;
            padding: 14px 16px;
            text-align: left;
            font-weight: 600;
            white-space: nowrap;
        }}
        .tutorial-table td {{
            padding: 12px 16px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            color: #d4d4d8;
        }}
        .tutorial-table tr:hover td {{
            background: rgba(249, 115, 22, 0.05);
        }}
        .tutorial-table tr:last-child td {{
            border-bottom: none;
        }}
        .highlight {{
            background: rgba(249, 115, 22, 0.15);
            padding: 2px 8px;
            border-radius: 4px;
            color: #fb923c;
        }}
        .code {{
            background: #0f172a;
            padding: 16px 20px;
            border-radius: 8px;
            font-family: 'Consolas', 'Monaco', monospace;
            font-size: 0.9rem;
            color: #e2e8f0;
            overflow-x: auto;
            margin: 16px 0;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }}
        .nav {{
            display: flex;
            justify-content: space-between;
            margin-top: 40px;
            padding-top: 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }}
        .nav a {{
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 24px;
            background: rgba(249, 115, 22, 0.1);
            color: #f97316;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 500;
            transition: all 0.3s ease;
        }}
        .nav a:hover {{
            background: #f97316;
            color: white;
            transform: translateY(-2px);
        }}
        @media (max-width: 768px) {{
            h1 {{ font-size: 1.8rem; }}
            .content {{ padding: 24px; }}
            .tutorial-table {{ font-size: 0.85rem; }}
            .tutorial-table th, .tutorial-table td {{ padding: 10px 12px; }}
        }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <span class="chapter-num">第 {num} 章</span>
            <h1>{title}</h1>
        </div>
        <div class="content">
            {content}
        </div>
        <div class="nav">
            {prev_link}
            {next_link}
        </div>
    </div>
</body>
</html>'''

def generate_index_page(chapters):
    """Generate index page with all chapters"""
    links = []
    for num, title, _ in chapters:
        links.append(f'''<a href="{num:02d}-{title}.html" class="chapter-link">
            <span class="num">{num}</span>
            <span class="title">{title}</span>
        </a>''')

    index_html = f'''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>教程目录 - OpenClaw橙皮书</title>
    <style>
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        body {{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            min-height: 100vh;
            padding: 60px 20px;
        }}
        .container {{
            max-width: 1000px;
            margin: 0 auto;
        }}
        .header {{
            text-align: center;
            margin-bottom: 50px;
        }}
        h1 {{
            color: #fff;
            font-size: 2.5rem;
            margin-bottom: 15px;
        }}
        h1 span {{
            background: linear-gradient(135deg, #f97316, #ea580c);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }}
        .subtitle {{
            color: #71717a;
            font-size: 1.1rem;
        }}
        .grid {{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 16px;
        }}
        .chapter-link {{
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 20px 24px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 12px;
            text-decoration: none;
            transition: all 0.3s ease;
        }}
        .chapter-link:hover {{
            background: rgba(249, 115, 22, 0.1);
            border-color: rgba(249, 115, 22, 0.3);
            transform: translateY(-2px);
        }}
        .num {{
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #f97316, #ea580c);
            color: white;
            border-radius: 10px;
            font-weight: 700;
            flex-shrink: 0;
        }}
        .title {{
            color: #e4e4e7;
            font-weight: 500;
        }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>OpenClaw <span>橙皮书</span></h1>
            <p class="subtitle">28章完整教程，从入门到精通</p>
        </div>
        <div class="grid">
            {chr(10).join(links)}
        </div>
    </div>
</body>
</html>'''

    return index_html

def main():
    print("Loading DOCX content...")
    data = load_content()
    paras = [item for item in data if item['type'] == 'para']
    tables = [item for item in data if item['type'] == 'table']

    print(f"Loaded {len(paras)} paragraphs, {len(tables)} tables")

    # Output directory
    output_dir = 'D:/AI/company/project/ttttstc.github.io/public/source/tutorial'
    os.makedirs(output_dir, exist_ok=True)

    # Group tables by chapter
    chapter_tables = {i+1: [] for i in range(len(CHAPTERS))}
    for table_idx, chapter_num in TABLE_CHAPTER_MAP.items():
        if table_idx < len(tables):
            chapter_tables[chapter_num].append(tables[table_idx])

    # Generate each chapter
    for i, (num, title, start_idx) in enumerate(CHAPTERS):
        # Determine end index
        if i < len(CHAPTERS) - 1:
            end_idx = CHAPTERS[i + 1][2]
        else:
            end_idx = len(paras)

        # Extract content for this chapter
        chapter_paras = paras[start_idx:end_idx]

        # Generate HTML
        content_html = []

        # Add tables first for this chapter
        for table in chapter_tables.get(num, []):
            content_html.append(table_to_html(table))

        # Add paragraphs
        for p in chapter_paras:
            text = p.get('text', '').strip()
            if text and len(text) > 2:
                content_html.append(para_to_html(text))

        content = '\n'.join(content_html)

        # Navigation
        prev_link = ''
        next_link = ''
        if i > 0:
            prev_num, prev_title, _ = CHAPTERS[i - 1]
            prev_link = f'<a href="{prev_num:02d}-{prev_title}.html">← 上一章</a>'
        if i < len(CHAPTERS) - 1:
            next_num, next_title, _ = CHAPTERS[i + 1]
            next_link = f'<a href="{next_num:02d}-{next_title}.html">下一章 →</a>'

        html = HTML_TEMPLATE.format(
            num=num,
            title=title,
            content=content,
            prev_link=prev_link,
            next_link=next_link
        )

        filename = f"{num:02d}-{title}.html"
        filepath = os.path.join(output_dir, filename)

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(html)

        print(f"Generated: {filename}")

    # Generate index page
    index_html = generate_index_page(CHAPTERS)
    with open(os.path.join(output_dir, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(index_html)

    print("Done! Generated 28 chapter pages + index")

if __name__ == '__main__':
    main()
