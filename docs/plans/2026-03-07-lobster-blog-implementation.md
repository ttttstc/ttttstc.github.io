# 龙虾历险记博客 - 实现计划

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 构建一个使用 11ty + 原生 JS/CSS 的个人技术博客，参考 Perplexity AI 风格

**Architecture:** 静态站点生成器 (11ty) + 运行时动态加载 Markdown (marked.js) + CSS 动效

**Tech Stack:** 11ty, Nunjucks, CSS Variables, marked.js, Prism.js, GitHub Actions

---

## 实现步骤

### Task 1: 初始化项目结构

**Files:**
- Create: `package.json`
- Create: `.eleventy.js`
- Create: `src/_data/site.json`
- Create: `.gitignore`

**Step 1: 创建 package.json**

```json
{
  "name": "lobster-adventures",
  "version": "1.0.0",
  "description": "龙虾历险记个人技术博客",
  "scripts": {
    "start": "eleventy --serve",
    "build": "eleventy"
  },
  "devDependencies": {
    "@11ty/eleventy": "^2.0.1"
  },
  "dependencies": {
    "marked": "^11.1.1",
    "prismjs": "^1.29.0"
  }
}
```

**Step 2: 创建 .eleventy.js**

```javascript
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/evolution");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
```

**Step 3: 创建 .gitignore**

```
_node_modules/
_site/
.DS_Store
```

**Step 4: 创建 src/_data/site.json**

```json
{
  "title": "龙虾历险记",
  "description": "OpenCRAW 开源项目的技术探索之旅",
  "url": "https://ttttstc.github.io"
}
```

**Step 5: 安装依赖**

Run: `npm install`

Expected: 安装 @11ty/eleventy, marked, prismjs

---

### Task 2: 创建 CSS 变量和基础样式

**Files:**
- Create: `src/css/variables.css`
- Create: `src/css/base.css`

**Step 1: 创建 variables.css**

```css
:root {
  /* 背景色 */
  --bg-primary: #000000;
  --bg-secondary: #0A0A0C;
  --bg-card: rgba(20, 20, 25, 0.8);
  --bg-glass: rgba(10, 10, 15, 0.7);

  /* 文字色 */
  --text-primary: #FFFFFF;
  --text-secondary: #9CA3AF;

  /* 强调色 */
  --accent-primary: #8B5CF6;
  --accent-secondary: #3B82F6;
  --gradient: linear-gradient(135deg, #8B5CF6, #3B82F6);

  /* 边框色 */
  --border-color: #1F1F23;

  /* 字体 */
  --font-sans: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  --font-mono: "SF Mono", "JetBrains Mono", "Fira Code", Monaco, Consolas, monospace;

  /* 间距 */
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 32px;
  --space-xl: 48px;

  /* 圆角 */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;

  /* 过渡 */
  --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

**Step 2: 创建 base.css**

```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-primary);
  background-color: var(--bg-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: var(--accent-secondary);
  text-decoration: none;
  transition: color var(--transition);
}

a:hover {
  color: var(--accent-primary);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

@media (max-width: 640px) {
  .container {
    padding: 0 var(--space-sm);
  }
}

/* 代码块样式 */
pre, code {
  font-family: var(--font-mono);
}

pre {
  background: #0D0D0F;
  border-radius: var(--radius-md);
  padding: var(--space-md);
  overflow-x: auto;
}

/* 渐变边框工具类 */
.gradient-border {
  position: relative;
  background: var(--bg-card);
  border-radius: var(--radius-lg);
}

.gradient-border::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: var(--gradient);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

/* 毛玻璃效果 */
.glass {
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
```

---

### Task 3: 创建基础布局和导航组件

**Files:**
- Create: `src/_includes/base.njk`
- Create: `src/_includes/nav.njk`
- Create: `src/_includes/footer.njk`

**Step 1: 创建 base.njk**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ title | default("龙虾历险记") }}</title>
  <meta name="description" content="{{ description | default("OpenCRAW 开源项目的技术探索之旅") }}">
  <link rel="stylesheet" href="/css/variables.css">
  <link rel="stylesheet" href="/css/base.css">
  <link rel="stylesheet" href="/css/components.css">
  <link rel="stylesheet" href="/css/effects.css">
</head>
<body>
  {% include "nav.njk" %}
  <main>
    {{ content | safe }}
  </main>
  {% include "footer.njk" %}
  <script src="/js/main.js"></script>
</body>
</html>
```

**Step 2: 创建 nav.njk**

```html
<nav class="nav glass">
  <div class="nav-container">
    <a href="/" class="nav-logo">
      <span class="logo-icon">🦞</span>
      <span class="logo-text">龙虾历险记</span>
    </a>
    <ul class="nav-links">
      <li><a href="/architecture/">架构</a></li>
      <li><a href="/tutorial/">教程</a></li>
      <li><a href="/demo/">演示</a></li>
      <li><a href="/diary/">日记</a></li>
    </ul>
  </div>
</nav>

<style>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  z-index: 1000;
  border-bottom: 1px solid var(--border-color);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-weight: 600;
  font-size: 18px;
}

.logo-icon {
  font-size: 24px;
}

.nav-links {
  display: flex;
  gap: var(--space-lg);
  list-style: none;
}

.nav-links a {
  color: var(--text-secondary);
  font-size: 14px;
  transition: color var(--transition);
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--text-primary);
}

@media (max-width: 640px) {
  .nav-links {
    gap: var(--space-sm);
  }
}
</style>
```

**Step 3: 创建 footer.njk**

```html
<footer class="footer">
  <div class="footer-container">
    <p>&copy; 2026 龙虾历险记. OpenCRAW 技术博客.</p>
  </div>
</footer>

<style>
.footer {
  padding: var(--space-lg) 0;
  border-top: 1px solid var(--border-color);
  text-align: center;
  color: var(--text-secondary);
  font-size: 14px;
}
</style>
```

---

### Task 4: 创建动效样式

**Files:**
- Create: `src/css/effects.css`

**Step 1: 创建 effects.css**

```css
/* 发光文字 */
.glow-text {
  text-shadow: 0 0 40px rgba(139, 92, 246, 0.5);
}

/* 发光呼吸动画 */
@keyframes glow-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.glow-pulse {
  animation: glow-pulse 2s ease-in-out infinite;
}

/* 卡片悬浮动画 */
.card {
  transition: transform var(--transition), box-shadow var(--transition);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2);
}

/* 渐变边框动画 */
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.gradient-border-animated {
  background: linear-gradient(135deg, #8B5CF6, #3B82F6, #8B5CF6);
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}

.gradient-border-animated > * {
  background: var(--bg-card);
  border-radius: inherit;
}

/* 页面入场动画 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease forwards;
}

/* 交错入场 */
.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
.stagger-4 { animation-delay: 0.4s; }

/* 滚动指示器动画 */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.scroll-indicator {
  animation: bounce 2s ease infinite;
}

/* 扫描线效果 (可选) */
.scanlines::before {
  content: "";
  position: fixed;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.1) 0px,
    rgba(0, 0, 0, 0.1) 1px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
  z-index: 9999;
  opacity: 0.3;
}

.scanlines-toggle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10000;
}
```

---

### Task 5: 创建组件样式

**Files:**
- Create: `src/css/components.css`

**Step 1: 创建 components.css**

```css
/* Hero 区域 */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-xl) var(--space-md);
}

.hero-title {
  font-size: 56px;
  font-weight: 800;
  margin-bottom: var(--space-md);
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: var(--space-xl);
  max-width: 600px;
}

.scroll-hint {
  margin-top: var(--space-xl);
  color: var(--text-secondary);
  font-size: 14px;
}

/* 章节卡片网格 */
.section-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
  padding: var(--space-xl) 0;
}

@media (max-width: 768px) {
  .section-grid {
    grid-template-columns: 1fr;
  }
}

/* 章节卡片 */
.section-card {
  display: block;
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  transition: transform var(--transition), border-color var(--transition), box-shadow var(--transition);
}

.section-card:hover {
  transform: translateY(-8px);
  border-color: var(--accent-primary);
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2);
}

.section-card-icon {
  font-size: 32px;
  margin-bottom: var(--space-sm);
}

.section-card-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: var(--space-xs);
}

.section-card-desc {
  color: var(--text-secondary);
  font-size: 14px;
}

/* 页面标题 */
.page-header {
  padding: calc(64px + var(--space-xl)) 0 var(--space-lg);
  text-align: center;
}

.page-title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: var(--space-sm);
}

.page-description {
  color: var(--text-secondary);
  font-size: 16px;
}

/* 内容区域 */
.content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--space-md) var(--space-xl);
}

.content h2 {
  font-size: 24px;
  font-weight: 600;
  margin: var(--space-lg) 0 var(--space-sm);
}

.content h3 {
  font-size: 18px;
  font-weight: 600;
  margin: var(--space-md) 0 var(--space-xs);
}

.content p {
  margin-bottom: var(--space-sm);
  line-height: 1.8;
}

.content ul, .content ol {
  margin-bottom: var(--space-sm);
  padding-left: var(--space-md);
}

.content li {
  margin-bottom: var(--space-xs);
}

/* 嵌入容器 */
.embed-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 */
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
}

.embed-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.embed-loading {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
}

.embed-loading::after {
  content: "";
  width: 40px;
  height: 40px;
  border: 3px solid var(--border-color);
  border-top-color: var(--accent-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

---

### Task 6: 创建首页

**Files:**
- Create: `src/pages/index.njk`

**Step 1: 创建 index.njk**

```html
---
layout: base.njk
title: 龙虾历险记
---

<section class="hero">
  <h1 class="hero-title glow-text">龙虾历险记</h1>
  <p class="hero-subtitle">OpenCRAW 开源项目的技术探索之旅<br>架构设计 · 安装教程 · 效果展示 · 开发日志</p>
  <div class="scroll-hint">
    <span class="scroll-indicator">↓</span>
    <p>向下滚动开始探索</p>
  </div>
</section>

<section class="container">
  <div class="section-grid">
    <a href="/architecture/" class="section-card card fade-in-up stagger-1">
      <div class="section-card-icon">🏗️</div>
      <h2 class="section-card-title">架构介绍</h2>
      <p class="section-card-desc">深入了解 OpenCRAW 的系统架构和核心组件设计</p>
    </a>

    <a href="/tutorial/" class="section-card card fade-in-up stagger-2">
      <div class="section-card-icon">📖</div>
      <h2 class="section-card-title">安装教程</h2>
      <p class="section-card-desc">保姆级入门指南，从零开始搭建开发环境</p>
    </a>

    <a href="/demo/" class="section-card card fade-in-up stagger-3">
      <div class="section-card-icon">🎬</div>
      <h2 class="section-card-title">效果展示</h2>
      <p class="section-card-desc">在线演示系统功能，直观感受项目能力</p>
    </a>

    <a href="/diary/" class="section-card card fade-in-up stagger-4">
      <div class="section-card-icon">📝</div>
      <h2 class="section-card-title">龙虾日记</h2>
      <p class="section-card-desc">开发过程中的点滴记录和技术思考</p>
    </a>
  </div>
</section>
```

---

### Task 7: 创建内容页面

**Files:**
- Create: `src/pages/architecture.njk`
- Create: `src/pages/tutorial.njk`
- Create: `src/pages/demo.njk`

**Step 1: 创建 architecture.njk**

```html
---
layout: base.njk
title: 架构介绍 - 龙虾历险记
---

<header class="page-header">
  <h1 class="page-title">OpenCRAW 架构介绍</h1>
  <p class="page-description">深入了解系统的设计理念和核心组件</p>
</header>

<article class="content">
  <h2>系统架构图</h2>
  <p>OpenCRAW 采用模块化设计，主要包含以下核心组件...</p>

  <h2>核心组件</h2>
  <h3>1. 调度器 (Scheduler)</h3>
  <p>负责协调各个模块的工作...</p>

  <h3>2. 解析器 (Parser)</h3>
  <p>处理网页内容解析...</p>

  <h3>3. 存储层 (Storage)</h3>
  <p>数据持久化存储...</p>

  <h2>技术选型</h2>
  <ul>
    <li>后端框架：Node.js</li>
    <li>数据存储：PostgreSQL</li>
    <li>消息队列：Redis</li>
  </ul>
</article>
```

**Step 2: 创建 tutorial.njk**

```html
---
layout: base.njk
title: 安装教程 - 龙虾历险记
---

<header class="page-header">
  <h1 class="page-title">OpenCRAW 安装入门</h1>
  <p class="page-description">手把手教你搭建开发环境</p>
</header>

<article class="content">
  <h2>环境准备</h2>
  <p>在开始之前，请确保已安装以下软件：</p>
  <ul>
    <li>Node.js 18+</li>
    <li>npm 或 yarn</li>
    <li>Git</li>
  </ul>

  <h2>安装步骤</h2>

  <h3>1. 克隆项目</h3>
  <pre><code>git clone https://github.com/your-repo/openclaw.git
cd openclaw</code></pre>

  <h3>2. 安装依赖</h3>
  <pre><code>npm install</code></pre>

  <h3>3. 配置环境变量</h3>
  <pre><code>cp .env.example .env
# 编辑 .env 文件</code></pre>

  <h3>4. 启动服务</h3>
  <pre><code>npm run dev</code></pre>

  <h2>快速开始</h2>
  <p>服务启动后，访问 http://localhost:3000</p>
</article>
```

**Step 3: 创建 demo.njk**

```html
---
layout: base.njk
title: 效果展示 - 龙虾历险记
---

<header class="page-header">
  <h1 class="page-title">效果展示</h1>
  <p class="page-description">在线演示 OpenCRAW 系统功能</p>
</header>

<section class="content">
  <div class="embed-container" id="demo-embed">
    <div class="embed-loading"></div>
    <iframe
      src="https://wto-concrete-auctions-projector.trycloudflare.com"
      loading="lazy"
      allowfullscreen
      onload="this.previousElementSibling.style.display='none'"
      onerror="this.parentElement.innerHTML='<p style=\'padding:40px;text-align:center;color:var(--text-secondary)\'>演示加载失败，请刷新页面重试</p>'"
    ></iframe>
  </div>
</section>
```

---

### Task 8: 创建日记页面 (核心功能)

**Files:**
- Create: `src/pages/diary.njk`
- Create: `src/js/diary.js`

**Step 1: 创建 diary.njk**

```html
---
layout: base.njk
title: 龙虾日记 - 龙虾历险记
---

<header class="page-header">
  <h1 class="page-title">龙虾日记</h1>
  <p class="page-description">开发过程中的点滴记录</p>
</header>

<section class="diary-container">
  <aside class="diary-sidebar">
    <div class="diary-list" id="diary-list">
      <!-- 动态加载日记列表 -->
    </div>
  </aside>
  <div class="diary-content" id="diary-content">
    <div class="diary-placeholder">
      <p>点击左侧目录查看日记内容</p>
    </div>
  </div>
</section>

<link rel="stylesheet" href="/css/diary.css">
<script src="/js/diary.js"></script>
```

**Step 2: 创建 diary.css**

```css
.diary-container {
  display: flex;
  min-height: calc(100vh - 64px);
  margin-top: 64px;
}

.diary-sidebar {
  width: 300px;
  flex-shrink: 0;
  background: var(--bg-secondary);
  border-right: 1px solid var(--border-color);
  overflow-y: auto;
  position: sticky;
  top: 64px;
  height: calc(100vh - 64px);
}

.diary-list {
  padding: var(--space-sm);
}

.diary-item {
  display: block;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: background var(--transition);
  margin-bottom: var(--space-xs);
}

.diary-item:hover {
  background: var(--bg-card);
}

.diary-item.active {
  background: var(--bg-card);
  border-left: 3px solid var(--accent-primary);
}

.diary-item-title {
  font-weight: 500;
  margin-bottom: 4px;
}

.diary-item-date {
  font-size: 12px;
  color: var(--text-secondary);
}

.diary-content {
  flex: 1;
  padding: var(--space-lg);
  min-height: calc(100vh - 64px);
}

.diary-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--text-secondary);
}

.diary-article {
  max-width: 800px;
}

.diary-article h1 {
  font-size: 28px;
  margin-bottom: var(--space-sm);
}

.diary-article .diary-date {
  color: var(--text-secondary);
  margin-bottom: var(--space-lg);
}

.diary-article img {
  max-width: 100%;
  border-radius: var(--radius-md);
}

@media (max-width: 768px) {
  .diary-container {
    flex-direction: column;
  }

  .diary-sidebar {
    width: 100%;
    height: auto;
    max-height: 200px;
    position: relative;
    top: 0;
    border-right: none;
    border-bottom: 1px solid var(--border-color);
  }
}
```

**Step 3: 创建 diary.js**

```javascript
// 日记列表数据 (构建时生成)
const diaryList = [
  { title: "第一篇日记", date: "2026-01-01", file: "day-001.md" },
  { title: "第二篇日记", date: "2026-01-15", file: "day-002.md" },
  // 动态从 JSON 加载
];

let currentDiary = null;

// 初始化
document.addEventListener('DOMContentLoaded', async () => {
  await loadDiaryList();
});

// 加载日记列表
async function loadDiaryList() {
  const listContainer = document.getElementById('diary-list');
  if (!listContainer) return;

  try {
    // 尝试加载 JSON 索引
    const response = await fetch('/evolution/diary-index.json');
    const diaries = await response.json();

    listContainer.innerHTML = diaries.map(diary => `
      <a class="diary-item" data-file="${diary.file}">
        <div class="diary-item-title">${diary.title}</div>
        <div class="diary-item-date">${diary.date}</div>
      </a>
    `).join('');

    // 绑定点击事件
    listContainer.querySelectorAll('.diary-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        loadDiary(item.dataset.file);
      });
    });
  } catch (error) {
    // 如果没有 JSON，显示示例
    listContainer.innerHTML = '<p style="padding:16px;color:var(--text-secondary)">暂无日记内容</p>';
  }
}

// 加载日记内容
async function loadDiary(filename) {
  const contentContainer = document.getElementById('diary-content');
  if (!contentContainer) return;

  // 更新选中状态
  document.querySelectorAll('.diary-item').forEach(item => {
    item.classList.toggle('active', item.dataset.file === filename);
  });

  // 显示加载状态
  contentContainer.innerHTML = '<div class="diary-placeholder"><p>加载中...</p></div>';

  try {
    const response = await fetch(`/evolution/${filename}`);
    const markdown = await response.text();

    // 使用 marked 解析 Markdown
    const html = marked.parse(markdown);

    contentContainer.innerHTML = `
      <article class="diary-article fade-in-up">
        ${html}
      </article>
    `;

    // 代码高亮
    Prism.highlightAllUnder(contentContainer);
  } catch (error) {
    contentContainer.innerHTML = '<div class="diary-placeholder"><p>加载失败，请重试</p></div>';
  }
}

// 导出 marked 和 Prism (在 HTML 中引入 CDN)
window.loadDiary = loadDiary;
```

---

### Task 9: 配置 11ty 生成日记索引

**Files:**
- Modify: `.eleventy.js`

**Step 1: 更新 .eleventy.js 添加日记索引**

```javascript
const fs = require('fs');
const path = require('path');

module.exports = function(eleventyConfig) {
  // 复制静态文件
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");

  // 复制 evolution 目录并生成索引
  eleventyConfig.addPassthroughCopy("src/evolution");

  // 生成日记索引 JSON
  eleventyConfig.addCollection("diaries", function(collection) {
    const evolutionDir = path.join(__dirname, 'src', 'evolution');
    const files = fs.readdirSync(evolutionDir).filter(f => f.endsWith('.md'));

    const diaries = files.map(file => {
      const content = fs.readFileSync(path.join(evolutionDir, file), 'utf-8');
      const titleMatch = content.match(/^#\s+(.+)$/m);
      const dateMatch = content.match(/^date:\s*(.+)$/m);

      return {
        title: titleMatch ? titleMatch[1] : file.replace('.md', ''),
        date: dateMatch ? dateMatch[1] : '',
        file: file
      };
    });

    // 写入索引文件
    const outputDir = path.join(__dirname, '_site', 'evolution');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(
      path.join(outputDir, 'diary-index.json'),
      JSON.stringify(diaries, null, 2)
    );

    return diaries;
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
```

---

### Task 10: 创建 GitHub Actions 部署配置

**Files:**
- Create: `.github/workflows/deploy.yml`

**Step 1: 创建 deploy.yml**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build site
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: "_site"

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

### Task 11: 创建示例日记文件

**Files:**
- Create: `src/evolution/2026-01-01-first-day.md`
- Create: `src/evolution/2026-01-15-architecture.md`

**Step 1: 创建示例日记 1**

```markdown
---
date: 2026-01-01
---

# 第一篇日记：开启旅程

今天是我开始这个项目的第一天。经过长时间的思考，我决定开始记录 OpenCRAW 的开发过程。

## 为什么要写日记

1. 记录成长轨迹
2. 整理技术思路
3. 分享经验教训

## 今日完成

- [x] 确定项目方向
- [x] 搭建开发环境
- [x] 编写项目计划

## 明日计划

- 开始核心模块的设计
- 调研现有技术方案

```

**Step 2: 创建示例日记 2**

```markdown
---
date: 2026-01-15
---

# 架构设计思考

今天主要在思考系统的整体架构设计。

## 核心问题

如何设计一个可扩展、易维护的爬虫框架？

## 初步方案

采用微内核架构：

1. **核心调度器**：统一的任务调度
2. **插件系统**：可扩展的解析器
3. **存储抽象**：支持多种后端

```javascript
// 示例代码
class Scheduler {
  addTask(task) {
    this.queue.push(task);
  }
}
```

## 待验证

- 性能是否满足需求
- 插件机制是否灵活
```

---

### Task 12: 添加外部库引用

**Files:**
- Modify: `src/_includes/base.njk`

**Step 1: 更新 base.njk 添加 CDN 库**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ title | default("龙虾历险记") }}</title>
  <meta name="description" content="{{ description | default("OpenCRAW 开源项目的技术探索之旅") }}">

  <!-- 样式 -->
  <link rel="stylesheet" href="/css/variables.css">
  <link rel="stylesheet" href="/css/base.css">
  <link rel="stylesheet" href="/css/components.css">
  <link rel="stylesheet" href="/css/effects.css">

  <!-- Prism.js 代码高亮主题 -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" rel="stylesheet">
</head>
<body>
  {% include "nav.njk" %}
  <main>
    {{ content | safe }}
  </main>
  {% include "footer.njk" %}

  <!-- marked.js 用于解析 Markdown -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/11.1.1/marked.min.js"></script>
  <!-- Prism.js 用于代码高亮 -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-bash.min.js"></script>

  <script src="/js/main.js"></script>
</body>
</html>
```

---

### Task 13: 创建主 JS 入口

**Files:**
- Create: `src/js/main.js`

**Step 1: 创建 main.js**

```javascript
// 主入口脚本

document.addEventListener('DOMContentLoaded', () => {
  // 初始化导航高亮
  initNavHighlight();

  // 初始化滚动动画
  initScrollAnimation();

  // 初始化扫描线效果开关
  initScanlinesToggle();
});

// 导航高亮
function initNavHighlight() {
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (currentPath === href || currentPath.startsWith(href + '/')) {
      link.classList.add('active');
    }
  });
}

// 滚动动画
function initScrollAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in-up').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// 扫描线效果
function initScanlinesToggle() {
  // 从 localStorage 读取偏好
  const scanlinesEnabled = localStorage.getItem('scanlines') === 'true';

  // 创建开关按钮
  const toggle = document.createElement('button');
  toggle.className = 'scanlines-toggle glass';
  toggle.innerHTML = scanlinesEnabled ? '◉' : '○';
  toggle.title = '切换扫描线效果';
  document.body.appendChild(toggle);

  if (scanlinesEnabled) {
    document.body.classList.add('scanlines');
  }

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('scanlines');
    const enabled = document.body.classList.contains('scanlines');
    localStorage.setItem('scanlines', enabled);
    toggle.innerHTML = enabled ? '◉' : '○';
  });
}
```

---

### Task 14: 本地测试

**Step 1: 运行构建**

Run: `npm run build`

Expected: 在 _site/ 目录生成所有文件

**Step 2: 启动开发服务器**

Run: `npm start`

Expected: 本地服务器运行，访问 http://localhost:8080

**Step 3: 验证功能**

- [ ] 首页正常显示
- [ ] 四个章节链接可跳转
- [ ] 日记列表正常加载
- [ ] 日记内容正常显示
- [ ] 动效正常播放

---

### Task 15: 提交代码

**Step 1: 初始化 Git (如需要)**

Run: `git init && git add .gitignore`

**Step 2: 提交所有文件**

Run: `git add -A`

Run: `git commit -m "feat: 初始化龙虾历险记博客项目

- 使用 11ty 静态网站生成器
- 实现 Perplexity AI 风格深色主题
- 添加首页、架构、教程、演示、日记页面
- 实现日记动态加载功能
- 添加扫描线效果开关
- 配置 GitHub Actions 自动部署"`

---

## 验收标准

- [ ] 页面加载 < 2s
- [ ] 四个章节可正常访问
- [ ] 日记左右分栏正常交互
- [ ] 动效流畅无卡顿
- [ ] 移动端响应式正常
- [ ] GitHub Actions 自动部署成功
