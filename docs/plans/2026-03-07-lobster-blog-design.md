# 龙虾历险记 - 技术架构设计

**日期**: 2026-03-07
**版本**: v1.0
**状态**: 已批准

---

## 1. 项目概述

- **项目名称**: 龙虾历险记 (Lobster Adventures)
- **项目类型**: 个人技术博客
- **部署平台**: GitHub Pages
- **技术栈**: 11ty + 原生 JS + CSS

---

## 2. 系统架构

### 2.1 整体架构

```
┌─────────────────────────────────────────────────────────┐
│                     GitHub Pages                        │
│                     (CDN 加速)                           │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────┐    │
│  │              11ty 构建输出                       │    │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐        │    │
│  │  │  HTML   │ │  CSS    │ │   JS    │        │    │
│  │  │ 页面    │ │ 样式    │ │ 交互    │        │    │
│  │  └─────────┘ └─────────┘ └─────────┘        │    │
│  └─────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
```

### 2.2 渲染方式

- **首页/章节页**: SSG 预渲染，构建时生成 HTML
- **日记模块**: 运行时动态加载 MD 文件 + marked.js 解析

---

## 3. 技术方案

### 3.1 技术选型

| 模块 | 技术 | 理由 |
|------|------|------|
| 站点生成 | 11ty | 轻量、简单、适合静态博客 |
| 模板引擎 | Nunjucks | 11ty 默认支持，语法简洁 |
| 样式 | 原生 CSS + CSS Variables | 无依赖，易维护 |
| 动效 | CSS Animations + IntersectionObserver | 性能好，无需库 |
| MD 解析 | marked.js | 轻量、灵活 |
| 代码高亮 | Prism.js | 主题丰富 |
| 部署 | GitHub Actions | 自动部署 |

### 3.2 数据流

```
构建时:
  evolution/*.md → 11ty → HTML 页面
                   → diary-index.json (日记索引)

运行时:
  页面加载 → Fetch diary-index.json → 渲染目录列表
  点击目录 → Fetch *.md → marked.js 解析 → 渲染内容
```

---

## 4. 文件结构

```
.
├── .eleventy.js           # 11ty 配置
├── package.json
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions
├── src/
│   ├── _includes/
│   │   ├── base.njk       # 基础布局
│   │   ├── nav.njk        # 导航组件
│   │   └── footer.njk     # 页脚组件
│   ├── css/
│   │   ├── variables.css  # CSS 变量 (配色/字体)
│   │   ├── base.css       # 基础样式 (重置/布局)
│   │   ├── components.css # 组件样式 (卡片/按钮)
│   │   ├── effects.css    # 动效 (动画/过渡)
│   │   └── pages/         # 页面特定样式
│   │       ├── index.css
│   │       ├── architecture.css
│   │       ├── tutorial.css
│   │       ├── demo.css
│   │       └── diary.css
│   ├── js/
│   │   ├── main.js        # 入口 (初始化/事件)
│   │   ├── diary.js       # 日记交互 (加载/渲染)
│   │   └── effects.js    # 动效 (滚动/入场)
│   ├── evolution/         # 龙虾日记源文件
│   │   └── *.md
│   ├── pages/
│   │   ├── index.njk      # 首页
│   │   ├── architecture.njk
│   │   ├── tutorial.njk
│   │   ├── demo.njk
│   │   └── diary.njk
│   └── assets/
│       └── images/
└── _site/                 # 构建输出 (gitignore)
```

---

## 5. 组件设计

### 5.1 导航栏 (nav)

- 毛玻璃效果背景
- 固定顶部
- Logo + 章节链接

### 5.2 章节卡片 (card)

- 渐变边框
- 悬浮上浮动效
- 点击跳转

### 5.3 日记列表 (diary-list)

- 左侧 300px 固定
- 右侧内容区
- 点击切换内容

### 5.4 嵌入容器 (embed)

- iframe 自适应
- 加载状态指示
- 全屏/刷新按钮

---

## 6. 视觉规范

### 6.1 配色 (深色模式)

| 用途 | Hex |
|------|-----|
| 背景 | #000000 |
| 卡片背景 | rgba(20, 20, 25, 0.8) |
| 主文字 | #FFFFFF |
| 次级文字 | #9CA3AF |
| 强调色 | #8B5CF6 |
| 渐变 | linear-gradient(135deg, #8B5CF6, #3B82F6) |

### 6.2 字体

- 主字体: -apple-system, BlinkMacSystemFont
- 代码: SF Mono, JetBrains Mono

### 6.3 动效

- 卡片悬浮: translateY(-8px)
- 发光呼吸: opacity 0.7-1.0
- 页面入场: fadeInUp stagger 0.1s

---

## 7. 部署流程

1. 推送代码到 main 分支
2. GitHub Actions 自动构建
3. 输出到 `_site/`
4. GitHub Pages 部署

---

## 8. 验收标准

- [ ] 页面加载 < 2s
- [ ] 四个章节可正常访问
- [ ] 日记左右分栏正常交互
- [ ] 动效流畅无卡顿
- [ ] 移动端响应式正常
- [ ] GitHub Actions 自动部署成功
