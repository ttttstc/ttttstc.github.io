"""Collect a conservative, traceable sample from the public timeline mirror."""
import json
import re
import time
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup

BASE = "https://teapawt.net"
url = BASE + "/xiaoxiaodong"
seen, visited, entries, uncertain, scanned_dates = set(), set(), [], [], []
pages = 0
stagnant_pages = 0
session = requests.Session()
session.headers["User-Agent"] = "Mozilla/5.0 (compatible; GalleryResearch/1.0)"
reason = ""

while url:
    if url in visited:
        reason = "分页游标重复"
        break
    visited.add(url)
    try:
        response = session.get(url, timeout=20)
        response.raise_for_status()
    except requests.RequestException as exc:
        reason = f"公开镜像请求失败: {type(exc).__name__}"
        break
    soup = BeautifulSoup(response.text, "html.parser")
    posts = soup.select(".timeline-item[data-username='xiaoxiaodong']")
    if not posts:
        reason = "镜像未返回帖子"
        break
    pages += 1
    count_before = len(seen)
    for post in posts:
        link = post.select_one("a.tweet-link")
        content = post.select_one(".tweet-content")
        if not link or not content:
            continue
        match = re.search(r"/status/(\d+)", link.get("href", ""))
        if not match or match.group(1) in seen:
            continue
        post_id = match.group(1)
        seen.add(post_id)
        text = content.get_text().replace("\r\n", "\n")
        blocks = re.findall(r"```[^\S\n]*\n([\s\S]*?)\n```", text)
        body = post.select_one(".tweet-body")
        attachments = body.select_one(":scope > .attachments") if body else None
        images = [a.get("href") for a in attachments.select("a.still-image[href]")] if attachments else []
        date_node = post.select_one(".tweet-date a[title]")
        date = date_node.get("title", "") if date_node else ""
        if date:
            try:
                scanned_dates.append(datetime.strptime(date, "%b %d, %Y · %I:%M %p UTC").replace(tzinfo=timezone.utc).isoformat())
            except ValueError:
                pass
        if images and len(blocks) == 1 and len(blocks[0]) >= 60 and not blocks[0].lstrip().startswith("❯") and re.search(r"提示词|prompt", text, re.I):
            prompt = blocks[0]
            note = text.replace("```\n" + prompt + "\n```", "").strip()
            image_reference = re.search(r"(?:图|第)\s*([一二三四1234])\s*(?:张)?\s*(?:的)?\s*提示词", text)
            image_number = '一二三四'.find(image_reference.group(1)) + 1 if image_reference and image_reference.group(1) in '一二三四' else int(image_reference.group(1)) if image_reference else 1
            index = image_number - 1 if image_number <= len(images) else 0
            images = [images[index], *images[:index], *images[index + 1:]]
            title = next((line.strip() for line in note.splitlines() if line.strip()), "生图提示词")[:45]
            entries.append({"id": post_id, "title": title, "date": date, "prompt": prompt,
                            "note": note, "images": images, "url": f"https://x.com/xiaoxiaodong/status/{post_id}",
                            "source": urljoin(BASE, link.get("href").split("#")[0])})
        elif "提示词" in text or "prompt" in text.lower():
            uncertain.append(post_id)
    stagnant_pages = stagnant_pages + 1 if len(seen) == count_before else 0
    if stagnant_pages >= 2:
        reason = "公开镜像连续两页未返回新的帖子，后续历史无法确认"
        break
    next_link = next((a for a in soup.select("a[href*='cursor=']") if "Load more" in a.get_text()), None)
    url = urljoin(BASE, next_link["href"]) if next_link else None
    print(f"pages={pages} posts={len(seen)} entries={len(entries)}", flush=True)
    time.sleep(0.7)

if not reason:
    reason = "镜像未提供更多分页，不能视为 X 全量历史"
out = {"scannedAt": datetime.now(timezone.utc).isoformat(), "pages": pages, "posts": len(seen),
       "count": len(entries), "uncertain": len(uncertain), "uncertainIds": uncertain,
       "scannedRange": [min(scanned_dates), max(scanned_dates)] if scanned_dates else [], "reason": reason,
       "scope": "公开镜像账号时间线；保守筛选正文含单段代码块提示词且附有图片的帖子；未扫描评论、图片内文字和全部非代码块提示词。",
       "entries": entries}
Path(__file__).with_name("data.json").write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")
print(reason, flush=True)
