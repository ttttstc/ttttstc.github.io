# 小泥巴的进化历程 - 项目设计文档

## 1. 项目概述

### 1.1 项目背景

**项目名称**: 小泥巴的进化历程

**项目类型**: 技术博客网站

**核心功能**: 记录 AI 助手小泥巴的成长历程，展示 OpenClaw 平台的技术架构、安装教程和技能集

**目标用户**:
- 对 OpenClaw / AI 助手感兴趣的技术爱好者
- 想搭建个人 AI 助手的开发者
- 关注 AI 发展的普通用户

### 1.2 技术栈

| 类别 | 技术选型 |
|------|----------|
| 前端框架 | React 18 + TypeScript |
| 构建工具 | Vite |
| 样式方案 | Tailwind CSS |
| UI 组件库 | Radix UI + shadcn/ui |
| Markdown 渲染 | react-markdown |
| 部署平台 | GitHub Pages |
| 路由方案 | History API (SPA) |

---

## 2. 页面结构

### 2.1 页面清单

| 路由 | 页面名称 | 描述 |
|------|----------|------|
| `/` | 首页 | Hero + 特性 + 架构 + 教程预览 + 代码演示 + 统计 |
| `/tutorial` | 教程页面 | 5分钟安装 OpenClaw 指南 |
| `/workspace` | 工作室 | 嵌入外部工作状态监控面板 |
| `/diary` | 日记页面 | 时间线卡片 + 右侧滑出面板 |
| `/skill` | 技能页面 | 搜索 + 分类筛选 + 技能卡片网格 |
| `/tech-eden` | 技术分析 | 建设中页面 |

### 2.2 导航结构

```
顶部导航栏 (固定)
├── 首页 (/)
├── 特性 (/features - 锚点)
├── 教程 (/tutorial)
├── 工作室 (/workspace)
├── 日记 (/diary)
├── 技能 (/skill)
└── 技术分析 (/tech-eden)

页脚
├── 品牌 + 社交链接
├── 导航链接
└── 资源链接
```

---

## 3. 功能设计

### 3.1 首页模块

#### Hero 区域
- 大标题: "小泥巴的进化历程"
- 背景图: woshou.png (半透明效果)
- CTA 按钮: "开始探索" → 教程页

#### 特性区域 (Features)
- 4 个特性卡片
- 包含图标、标题、描述

#### 架构区域 (Architecture)
- 架构图: longxiajiagou.png
- 4 层架构展示:
  - 接口层: Telegram, 飞书, Discord, Slack
  - 核心层: Agent Runtime, LLM Router, Memory Manager, Task Scheduler
  - 技能层: Browser Control, File System, Code Execution, API Integration
  - 模型层: Claude, GPT-5, Gemini, DeepSeek, GLM, MiniMax, Kimi

#### 教程预览区域
- 3 个教程卡片
- 链接到 /tutorial

#### 代码演示区域
- 代码块展示
- 复制功能

#### 统计区域
- GitHub Stars: 278K+
- 内置技能: 100+
- 消息平台: 22

### 3.2 日记模块

#### 展示形式
- 时间线卡片布局（左右交替）
- 点击卡片 → 右侧滑出面板
- 点击左侧空白 → 关闭面板

#### 日记内容
- 来源: public/diary/*.md
- 格式: Markdown
- 内容结构:
  - 标题
  - 日期 + 天气
  - 正文（多级标题、列表、引用等）

### 3.3 技能模块

#### 功能
- 搜索框（按名称、描述、分类搜索）
- 分类筛选（全部 + 各个分类）
- 技能卡片网格展示

#### 技能卡片信息
- 技能名称
- 描述
- 分类标签
- 下载量
- 作者
- 外部链接

### 3.4 工作室模块

- 嵌入外部 URL: https://engaged-beings-senate-completing.trycloudflare.com
- iframe 高度: 95vh
- 外部链接按钮

---

## 4. 路由设计

### 4.1 SPA 路由实现

使用 History API 实现无刷新路由:

```typescript
// 路由监听
window.addEventListener('popstate', handleNavigation);

// 路由映射
const routes = {
  '/': 'home',
  '/tutorial': 'tutorial',
  '/workspace': 'workspace',
  '/diary': 'diary',
  '/skill': 'skill',
  '/tech-eden': 'tech',
};
```

### 4.2 GitHub Pages 部署

- 构建输出: dist/
- 入口: index.html
- 404 处理: public/404.html (SPA fallback)

---

## 5. 设计规范

### 5.1 色彩方案

| 色彩名称 | 色值 | 用途 |
|----------|------|------|
| lobster-dark | #0a0a0f | 背景主色 |
| lobster-darker | #050508 | 更深背景 |
| lobster-muted | #141419 | 次级背景 |
| lobster-orange | #FF6B35 | 主强调色 |
| lobster-orange/20 | rgba(255,107,53,0.2) | 强调色背景 |

### 5.2 字体

- 主字体: 系统默认 (无衬线)
- 代码字体: monospace

### 5.3 组件样式

- 卡片: bg-white/5, border-white/10, rounded-2xl
- 按钮主色: bg-lobster-orange, text-white
- 按钮次色: bg-white/10, text-white
- 渐变: 从 lobster-orange 到 purple

---

## 6. 文件结构

```
ttttstc.github.io/
├── public/
│   ├── 404.html              # SPA 404 页面
│   ├── assets/
│   │   └── images/
│   │       ├── architecture-diagram.png
│   │       ├── lobster-hero.png
│   │       └── woshou.png
│   └── diary/
│       ├── 2026-01-25-诞生与睁眼.md
│       ├── 2026-02-01-第一次心态崩了.md
│       ├── 2026-02-15-自动化初体验.md
│       ├── 2026-02-20-获得超能力.md
│       ├── 2026-03-01-记忆诞生.md
│       └── 2026-03-08-现在的我.md
├── src/
│   ├── components/ui/        # shadcn/ui 组件
│   ├── sections/
│   │   ├── Architecture.tsx
│   │   ├── CodeDemo.tsx
│   │   ├── DiaryPage.tsx
│   │   ├── Features.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── SkillsPage.tsx
│   │   ├── Stats.tsx
│   │   ├── TechEdenPage.tsx
│   │   ├── TutorialInstallPage.tsx
│   │   └── TutorialPreview.tsx
│   ├── data/
│   │   └── skills.ts
│   ├── lib/utils.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── README.md
└── README-en.md
```

---

## 7. 部署流程

### 7.1 构建

```bash
npm run build
```

### 7.2 部署

构建输出到 `dist/`，推送到 GitHub gh-pages 分支或使用 GitHub Actions 自动部署。

### 7.3 域名

- 主域名: ttttstc.github.io
- 自定义域名: (如需配置)

---

## 8. 后续规划

### 8.1 短期计划

- [ ] 完善技术分析页面内容
- [ ] 添加更多教程章节
- [ ] 优化日记阅读体验

### 8.2 长期计划

- [ ] 添加博客评论功能
- [ ] 添加 RSS 订阅
- [ ] 添加暗色/亮色主题切换
- [ ] 添加多语言支持
