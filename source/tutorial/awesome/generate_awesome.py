#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
import re
import json
import markdown
from pathlib import Path
from urllib.parse import quote

# Configure markdown extensions for better rendering
MD_EXTENSIONS = [
    'extra',
    'codehilite',
    'toc',
    'tables',
    'fenced_code',
    'nl2br',
]

# Define article list with Chinese titles
ARTICLES = [
    # 基础入门 (Basics)
    ("01-basics-01-introduction.md", "第一章：认识OpenClaw", "基础入门"),
    ("01-basics-02-installation.md", "第二章：安装部署", "基础入门"),
    ("01-basics-03-quick-start.md", "第三章：快速开始", "基础入门"),

    # 核心功能 (Core Features)
    ("02-core-04-file-management.md", "第四章：文件管理", "核心功能"),
    ("02-core-05-knowledge-management.md", "第五章：知识管理", "核心功能"),
    ("02-core-06-schedule-management.md", "第六章：日程管理", "核心功能"),
    ("02-core-07-automation-workflow.md", "第七章：自动化工作流", "核心功能"),

    # 进阶拓展 (Advanced)
    ("03-advanced-08-skills-extension.md", "第八章：Skills扩展", "进阶拓展"),
    ("03-advanced-09-multi-platform-integration.md", "第九章：多平台接入", "进阶拓展"),
    ("03-advanced-10-api-integration.md", "第十章：API集成", "进阶拓展"),
    ("03-advanced-11-advanced-configuration.md", "第十一章：高级配置", "进阶拓展"),

    # 实战案例 (Practical Cases)
    ("04-cases-12-personal-productivity.md", "第十二章：个人效率提升", "实战案例"),
    ("04-cases-13-advanced-automation.md", "第十三章：进阶自动化", "实战案例"),
    ("04-cases-14-creative-applications.md", "第十四章：创意应用", "实战案例"),
    ("04-cases-15-solo-entrepreneur-cases.md", "第十五章：一人企业案例", "实战案例"),

    # 附录 (Appendix)
    ("api-key-config-guide.md", "附录1：API密钥配置指南", "附录"),
    ("config-file-structure.md", "附录2：配置文件结构", "附录"),
    ("search-guide.md", "附录3：搜索指南", "附录"),
    ("skills-ecosystem.md", "附录4：Skills生态系统", "附录"),
]

def markdown_to_html(md_content):
    """Convert markdown to HTML"""
    md = markdown.Markdown(extensions=MD_EXTENSIONS)
    html = md.convert(md_content)
    return html

def convert_image_paths(html_content):
    """Convert image paths to proper URLs"""
    html_content = html_content.replace('](docs/images/', '](/source/tutorial/awesome/images/')
    html_content = html_content.replace('](../images/', '](/source/tutorial/awesome/images/')
    return html_content

def extract_title_from_content(md_content):
    """Extract title from markdown content"""
    match = re.search(r'^#\s+(.+)$', md_content, re.MULTILINE)
    if match:
        return match.group(1).strip()
    return None

# Read all markdown files
md_dir = Path('D:/AI/company/project/ttttstc.github.io/public/source/tutorial/awesome')
article_data = []

for filename, title, category in ARTICLES:
    md_file = md_dir / filename
    if md_file.exists():
        with open(md_file, 'r', encoding='utf-8') as f:
            md_content = f.read()

        # Convert to HTML
        html_content = markdown_to_html(md_content)
        html_content = convert_image_paths(html_content)

        # Extract title from content if needed
        if not title or title.startswith('第'):
            content_title = extract_title_from_content(md_content)
            if content_title:
                title = content_title

        # Generate output filename
        output_filename = filename.replace('.md', '.html')

        article_data.append({
            'filename': output_filename,
            'title': title,
            'category': category,
            'content': html_content
        })

# Group articles by category
categories = {}
for article in article_data:
    cat = article['category']
    if cat not in categories:
        categories[cat] = []
    categories[cat].append(article)

# Generate sidebar HTML
sidebar_html = ''
for category, articles in categories.items():
    sidebar_html += f'<div class="category">'
    sidebar_html += f'<div class="category-title">{category}</div>'
    for article in articles:
        sidebar_html += f'''<a href="{article['filename']}" class="article-link" onclick="showArticle('{article['filename']}'); return false;">
            {article['title']}
        </a>'''
    sidebar_html += '</div>'

# Generate article data as JSON for JavaScript
articles_json = json.dumps(article_data, ensure_ascii=False)

# Main HTML Template with sidebar + content layout
HTML_TEMPLATE = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OpenClaw 完整教程 - 从入门到精通</title>
    <style>
        * {{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }}
        body {{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: #0d1117;
            color: #c9d1d9;
            height: 100vh;
            overflow: hidden;
        }}
        .layout {{
            display: flex;
            height: 100vh;
        }}
        /* Left Sidebar */
        .sidebar {{
            width: 320px;
            background: #161b22;
            border-right: 1px solid #30363d;
            display: flex;
            flex-direction: column;
            flex-shrink: 0;
        }}
        .sidebar-header {{
            padding: 20px;
            border-bottom: 1px solid #30363d;
            background: linear-gradient(135deg, #f97316, #ea580c);
        }}
        .sidebar-header h1 {{
            color: white;
            font-size: 1.3rem;
            font-weight: 700;
        }}
        .sidebar-header p {{
            color: rgba(255,255,255,0.8);
            font-size: 0.85rem;
            margin-top: 5px;
        }}
        .sidebar-content {{
            flex: 1;
            overflow-y: auto;
            padding: 15px 0;
        }}
        .category {{
            margin-bottom: 20px;
        }}
        .category-title {{
            padding: 8px 20px;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            color: #8b949e;
            letter-spacing: 0.5px;
        }}
        .article-link {{
            display: block;
            padding: 10px 20px;
            color: #c9d1d9;
            text-decoration: none;
            font-size: 0.9rem;
            border-left: 3px solid transparent;
            transition: all 0.2s ease;
            cursor: pointer;
        }}
        .article-link:hover {{
            background: rgba(249, 115, 22, 0.1);
            border-left-color: #f97316;
            color: #f97316;
        }}
        .article-link.active {{
            background: rgba(249, 115, 22, 0.15);
            border-left-color: #f97316;
            color: #f97316;
            font-weight: 500;
        }}

        /* Right Content */
        .content-area {{
            flex: 1;
            overflow-y: auto;
            background: #0d1117;
        }}
        .content-inner {{
            max-width: 900px;
            margin: 0 auto;
            padding: 40px 50px;
        }}

        /* Markdown Styles */
        .article-content h1 {{
            color: #fff !important;
            font-size: 2rem !important;
            border-bottom: 1px solid #30363d !important;
            padding-bottom: 15px !important;
            margin-bottom: 30px !important;
            margin-top: 0 !important;
        }}
        .article-content h2 {{
            color: #f97316 !important;
            font-size: 1.5rem !important;
            margin-top: 40px !important;
            margin-bottom: 20px !important;
            padding-bottom: 10px !important;
            border-bottom: 1px solid #30363d !important;
        }}
        .article-content h3 {{
            color: #e6edf3 !important;
            font-size: 1.25rem !important;
            margin-top: 30px !important;
            margin-bottom: 15px !important;
        }}
        .article-content h4, .article-content h5, .article-content h6 {{
            color: #e6edf3 !important;
        }}
        .article-content a {{
            color: #58a6ff !important;
        }}
        .article-content a:hover {{
            text-decoration: underline !important;
        }}
        .article-content code {{
            background: #1f2428 !important;
            color: #f97316 !important;
            padding: 2px 6px !important;
            border-radius: 4px !important;
            font-size: 0.9em !important;
        }}
        .article-content pre {{
            background: #1f2428 !important;
            border: 1px solid #30363d !important;
            border-radius: 8px !important;
            padding: 16px !important;
            overflow-x: auto !important;
        }}
        .article-content pre code {{
            background: transparent !important;
            color: #c9d1d9 !important;
            padding: 0 !important;
        }}
        .article-content blockquote {{
            border-left: 4px solid #f97316 !important;
            background: rgba(249, 115, 22, 0.1) !important;
            padding: 15px 20px !important;
            margin: 20px 0 !important;
            color: #e6edf3 !important;
        }}
        .article-content blockquote p {{
            margin: 0 !important;
        }}
        .article-content ul, .article-content ol {{
            padding-left: 25px !important;
            margin: 15px 0 !important;
        }}
        .article-content li {{
            margin: 8px 0 !important;
        }}
        .article-content hr {{
            border-color: #30363d !important;
            margin: 30px 0 !important;
        }}
        .article-content table {{
            border-collapse: collapse !important;
            width: 100% !important;
            margin: 20px 0 !important;
        }}
        .article-content th {{
            background: #1f2428 !important;
            border: 1px solid #30363d !important;
            padding: 12px 15px !important;
            color: #f97316 !important;
            font-weight: 600 !important;
            text-align: left !important;
        }}
        .article-content td {{
            border: 1px solid #30363d !important;
            padding: 10px 15px !important;
        }}
        .article-content tr:hover td {{
            background: rgba(249, 115, 22, 0.05) !important;
        }}
        .article-content img {{
            max-width: 100% !important;
            border-radius: 8px !important;
            margin: 20px 0 !important;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3) !important;
        }}
        .article-content strong {{
            color: #f97316 !important;
        }}
        .article-content p {{
            margin: 15px 0 !important;
            line-height: 1.7 !important;
        }}

        /* Welcome Message */
        .welcome {{
            text-align: center;
            padding: 100px 20px;
        }}
        .welcome h2 {{
            color: #f97316 !important;
            font-size: 2rem !important;
            margin-bottom: 20px !important;
        }}
        .welcome p {{
            color: #8b949e !important;
            font-size: 1.1rem !important;
        }}

        /* Responsive */
        @media (max-width: 768px) {{
            .layout {{
                flex-direction: column;
            }}
            .sidebar {{
                width: 100%;
                height: auto;
                max-height: 35vh;
            }}
            .content-inner {{
                padding: 20px;
            }}
        }}
    </style>
</head>
<body>
    <div class="layout">
        <aside class="sidebar">
            <div class="sidebar-header">
                <h1>OpenClaw 教程</h1>
                <p>完整教程，从入门到精通</p>
            </div>
            <nav class="sidebar-content">
                {sidebar}
            </nav>
        </aside>
        <div class="content-area" id="contentArea">
            <div class="content-inner" id="contentInner">
                <div class="welcome">
                    <h2>欢迎学习 OpenClaw 完整教程</h2>
                    <p>从左侧选择一篇文章开始学习</p>
                    <p style="margin-top: 15px; color: #6e7681;">共 {count} 篇教程内容</p>
                </div>
            </div>
        </div>
    </div>

    <script>
        const articles = {articles_json};

        function showArticle(filename) {{
            const article = articles.find(a => a.filename === filename);
            if (!article) return;

            // Update URL without reload
            history.pushState({{filename: filename}}, '', '#' + filename);

            // Render content
            const contentInner = document.getElementById('contentInner');
            contentInner.innerHTML = '<div class="article-content">' + article.content + '</div>';

            // Update active state
            document.querySelectorAll('.article-link').forEach(link => {{
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + filename) {{
                    link.classList.add('active');
                }}
            }});

            // Scroll to top
            document.getElementById('contentArea').scrollTop = 0;
        }}

        // Handle browser back/forward
        window.addEventListener('popstate', (e) => {{
            if (e.state && e.state.filename) {{
                showArticle(e.state.filename);
            }}
        }});

        // Check for hash on load
        window.addEventListener('DOMContentLoaded', () => {{
            const hash = window.location.hash.slice(1);
            if (hash) {{
                showArticle(hash);
            }}
        }});
    </script>
</body>
</html>'''

# Generate main index HTML
html_content = HTML_TEMPLATE.format(
    sidebar=sidebar_html,
    articles_json=articles_json,
    count=len(article_data)
)

output_file = 'D:/AI/company/project/ttttstc.github.io/public/source/tutorial/awesome/index.html'
with open(output_file, 'w', encoding='utf-8') as f:
    f.write(html_content)

print(f"Generated: {output_file}")

# Also generate individual HTML pages for each article
for article in article_data:
    individual_html = f'''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{article['title']} - OpenClaw 教程</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/github-markdown-css@5.2.0/github-markdown.min.css">
    <style>
        body {{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: #0d1117;
            color: #c9d1d9;
            padding: 20px;
        }}
        .container {{
            max-width: 900px;
            margin: 0 auto;
        }}
        .markdown-body {{
            background: transparent !important;
            color: #c9d1d9 !important;
        }}
        .back-link {{
            display: inline-block;
            margin-bottom: 20px;
            color: #58a6ff;
            text-decoration: none;
        }}
        .back-link:hover {{
            text-decoration: underline;
        }}
        .article-content h1 {{
            color: #fff !important;
            border-bottom: 1px solid #30363d !important;
            padding-bottom: 15px !important;
        }}
        .article-content h2 {{
            color: #f97316 !important;
            border-bottom: 1px solid #30363d !important;
            padding-bottom: 10px !important;
        }}
        .article-content a {{
            color: #58a6ff !important;
        }}
        .article-content code {{
            background: #1f2428 !important;
            color: #f97316 !important;
        }}
        .article-content pre {{
            background: #1f2428 !important;
            border: 1px solid #30363d !important;
        }}
        .article-content blockquote {{
            border-left: 4px solid #f97316 !important;
            background: rgba(249, 115, 22, 0.1) !important;
        }}
        .article-content table th {{
            background: #1f2428 !important;
            color: #f97316 !important;
        }}
        .article-content table td {{
            border: 1px solid #30363d !important;
        }}
        .article-content img {{
            max-width: 100%;
            border-radius: 8px;
        }}
        .article-content strong {{
            color: #f97316 !important;
        }}
    </style>
</head>
<body>
    <div class="container">
        <a href="index.html" class="back-link">← 返回教程目录</a>
        <div class="article-content markdown-body">
            {article['content']}
        </div>
    </div>
</body>
</html>'''

    output_path = f"D:/AI/company/project/ttttstc.github.io/public/source/tutorial/awesome/{article['filename']}"
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(individual_html)

    print(f"Generated: {article['filename']}")

print(f"\\nTotal: {len(article_data) + 1} files generated")
