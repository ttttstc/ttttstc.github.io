const $ = id => document.getElementById(id);
const shelves = $('shelves');
const dialog = $('detail');
let entries = [], current = null, imageIndex = 0;

function render(list) {
  shelves.replaceChildren();
  $('count').textContent = String(list.length).padStart(2, '0');
  $('empty').hidden = list.length > 0;
  list.forEach((item, index) => {
    const button = document.createElement('button');
    button.className = 'book';
    button.setAttribute('aria-label', `查看 ${item.title}`);
    const cover = document.createElement('span');
    cover.className = 'book-cover';
    const image = document.createElement('img');
    image.src = item.images[0]; image.alt = '作品图片暂不可用'; image.loading = 'lazy'; image.decoding = 'async';
    cover.append(image);
    const info = document.createElement('span'); info.className = 'book-info';
    const title = document.createElement('b'); title.textContent = item.title;
    const number = document.createElement('span'); number.textContent = `NO. ${String(index + 1).padStart(3, '0')}`;
    info.append(title, number); button.append(cover, info);
    button.addEventListener('click', () => openDetail(item));
    shelves.append(button);
  });
  window.dispatchEvent(new Event('gallery-layout'));
}
function showImage() {
  $('detail-image').src = current.images[imageIndex];
  $('detail-image').alt = `${current.title}，图片 ${imageIndex + 1}`;
  $('image-count').textContent = `${imageIndex + 1} / ${current.images.length}`;
  $('prev').disabled = imageIndex === 0; $('next').disabled = imageIndex === current.images.length - 1;
}
function openDetail(item) {
  current = item; imageIndex = 0; showImage();
  $('detail-title').textContent = item.title;
  $('detail-date').textContent = item.date ? `${item.date} · 原帖发布时间` : '发布时间待核对';
  $('detail-note').textContent = item.note || '原帖未提供其他说明。';
  $('prompt').textContent = item.prompt;
  $('original').href = item.url;
  $('mirror').href = item.source;
  $('source-note').textContent = item.sourceNote || '提示词来自公开时间线镜像中的正文代码块；请打开原帖核对。';
  $('reply').hidden = !item.replyUrl;
  if (item.replyUrl) $('reply').href = item.replyUrl;
  $('copy').innerHTML = '复制提示词 <span>↗</span>';
  dialog.showModal();
}
addEventListener('open-gallery-item', event => openDetail(event.detail));
$('prev').addEventListener('click', () => { if (imageIndex > 0) { imageIndex--; showImage(); } });
$('next').addEventListener('click', () => { if (imageIndex < current.images.length - 1) { imageIndex++; showImage(); } });
document.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
$('copy').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(current.prompt);
    $('copy').textContent = '已复制 ✓';
  } catch {
    $('copy').textContent = '复制失败，请手动选择下方文字';
  }
});
$('search').addEventListener('input', e => {
  const query = e.target.value.trim().toLocaleLowerCase();
  render(entries.filter(item => `${item.title}\n${item.note}\n${item.prompt}`.toLocaleLowerCase().includes(query)));
});

try {
  const response = await fetch('./data.json');
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  let replyItems = [];
  try {
    const replyResponse = await fetch('./reply-evidence.json');
    if (replyResponse.ok) {
      const evidence = await replyResponse.json();
      replyItems = evidence.items.map(item => ({
        id:item.parent_post.tweet_id, title:'GPT2 x 信息图鉴 x 灵活度 x 美学提示词',
        date:'Oct 24, 2026 · 2:37 PM UTC', note:`公开镜像中的父帖摘要：${item.parent_post.text}`,
        prompt:item.author_reply.prompt_text_exact_as_rendered, images:item.image_urls,
        url:item.parent_post.original_x_url, source:item.parent_post.mirror_url,
        replyUrl:item.author_reply.original_x_url,
        sourceNote:'作者回复的提示词已与 X 页面核对一致。父帖前三张图片中的前两张已目视核对；该提示词是通用模板，无法确认每张图片均由它生成。'
      }));
    }
  } catch { /* Main collection remains usable if reply evidence cannot load. */ }
  entries = [...data.entries, ...replyItems.filter(item => !data.entries.some(entry => entry.id === item.id))];
  render(entries);
  $('mode-3d').disabled = false;
  const dates = (data.scannedRange || []).map(Date.parse).filter(Number.isFinite);
  const period = dates.length === 2 ? `${new Date(dates[0]).toISOString().slice(0, 10)} 至 ${new Date(dates[1]).toISOString().slice(0, 10)}（UTC）` : '暂无可确认的扫描时间范围';
  $('coverage-text').textContent = `采集时间：${new Date(data.scannedAt).toLocaleString('zh-CN', {timeZone:'Asia/Shanghai'})}（北京时间）。公开镜像请求 ${data.pages} 页、去重 ${data.posts} 帖，正文筛出 ${data.count} 条；${data.uncertain} 条提及提示词的帖子未通过正文筛选，需另行核对。另核查 1 个帖子线程，收录 ${replyItems.length} 条作者回复样本，提示词已与 X 页面核对，图片与提示词的逐张对应尚未确认。扫描帖子时间：${period}。${data.scope} ${data.reason}。`;
} catch {
  shelves.textContent = '作品暂时无法加载，请稍后重试。';
  $('coverage-text').textContent = '收录记录暂时无法加载。';
}

// Start the heavier scene only when the visitor explicitly chooses 3D.
let studio = null;
const modeStatus = $('mode-status');
$('mode-3d').addEventListener('click', async () => {
  const button = $('mode-3d');
  button.disabled = true;
  modeStatus.hidden = false;
  modeStatus.textContent = '正在打开 3D 画室…';
  try {
    if (!studio) {
      const [THREE, module] = await Promise.all([
        import('https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js'),
        import('./studio.js')
      ]);
      studio = module.startStudio(THREE, entries);
      if (!studio) throw new Error('WebGL unavailable');
    }
    studio.enter();
    modeStatus.hidden = true;
  } catch {
    modeStatus.textContent = '3D 画室暂时无法打开，请继续浏览 2D 画室。';
  } finally {
    button.disabled = false;
  }
});
$('mode-2d').addEventListener('click', () => {
  if (studio) studio.exit();
  modeStatus.hidden = true;
});
addEventListener('studio-unavailable', () => {
  studio = null;
  $('mode-3d').disabled = false;
  modeStatus.hidden = false;
  modeStatus.textContent = '3D 画室暂时不可用，已返回 2D 画室。';
});
