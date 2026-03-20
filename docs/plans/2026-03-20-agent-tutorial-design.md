# Agent 入门教程页面设计文档

> **For Claude:** REQUIRED SUB-SKILL: Use writing-plans to create implementation plan

**Goal:** 创建 Agent 入门教程页面，内容来源为 shareAI-lab/learn-claude-code 仓库，支持手动同步，页面渲染精美

**Architecture:** 静态站点架构，构建时通过脚本同步 GitHub 内容到本地，运行时读取本地 Markdown 文件渲染

**Tech Stack:** React 19 + TypeScript + Vite + Tailwind CSS + Lucide React

---

## 1. 页面结构

### 1.1 路由配置
- 路径：`/learn-cc` 或 `/lobster/learn`
- 独立页面，不使用现有 Navigation

### 1.2 页面布局
```
┌────────────────────────────────────────────────────────┐
│  Header: Agent 入门教程 / 返回首页                      │
├────────────────────────────────────────────────────────┤
│  Hero 区                                              │
│  - 课程标题 + 副标题                                   │
│  - 12 阶段进度总览 (已完成/总数)                      │
├────────────────────────────────────────────────────────┤
│  课程卡片网格 (响应式: 4→3→2→1)                      │
│  - 每个阶段一个卡片                                    │
│  - 显示阶段编号、主题、标语                           │
├────────────────────────────────────────────────────────┤
│  Footer: 版权信息                                      │
└────────────────────────────────────────────────────────┘
```

---

## 2. 视觉设计

### 2.1 色彩系统
```css
--bg-primary: #000000      /* 深黑背景 */
--bg-secondary: #0A0A0A   /* 次级背景 */
--bg-tertiary: #141414     /* 卡片背景 */
--border: #262626           /* 边框 */
--border-hover: #404040     /* 悬停边框 */
--text-primary: #FAFAFA     /* 主文字 */
--text-secondary: #A1A1A1 /* 次级文字 */
--text-muted: #6B6B6B     /* 弱化文字 */
--accent: #FF6B35          /* 强调色 - 橙色 */
--accent-hover: #FF8C5A    /* 强调色悬停 */
--accent-muted: #FF6B3533  /* 强调色半透明 */
```

### 2.2 字体系统
- 标题：`font-family: 'Times New Roman', Times, serif`
- 正文：`font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- 代码：`font-family: 'SF Mono', Monaco, monospace`

### 2.3 间距系统
- 页面边距：`px-6 py-12`
- 卡片间距：`gap-6`
- 卡片内边距：`p-6`

---

## 3. 组件设计

### 3.1 Header 组件
- 左侧：返回首页按钮 (Home 图标 + "首页")
- 中间：页面标题 "Agent 入门教程"
- 右侧：GitHub 仓库链接图标

### 3.2 Hero 组件
- 主标题：使用 Times New Roman 大号字体
- 副标题：简洁的课程描述
- 进度指示器：
  - 环形进度条或水平进度条
  - 显示 "已完成/总数" 数字

### 3.3 课程卡片组件
```tsx
interface CourseCard {
  id: string;           // s01, s02, ...
  title: string;        // Agent Loop, Tool Use, ...
  subtitle: string;     // 简短描述
  motto: string;         // 标语
  status: 'completed' | 'current' | 'locked';
  tools?: number;       // 工具数量 (可选显示)
}
```

**卡片样式**：
- 背景：`bg-[#141414]`
- 边框：`1px solid #262626`
- hover：`border-lobster-orange`，轻微上浮
- 状态徽章：已完成(绿色) / 进行中(橙色) / 锁定(灰色)

### 3.4 Footer 组件
- 居中显示版权信息
- 与首页 Footer 风格一致

---

## 4. 动效设计

### 4.1 页面加载动画
```css
/* 卡片依次淡入 */
.card-enter {
  animation: fadeInUp 0.5s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

/* 交错延迟 */
.card-1 { animation-delay: 0.1s; }
.card-2 { animation-delay: 0.2s; }
/* ...依此类推 */
```

### 4.2 卡片交互动效
```css
/* Hover 效果 */
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(255, 107, 53, 0.15);
  border-color: var(--accent);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 点击缩放 */
.card:active {
  transform: scale(0.98);
}
```

### 4.3 进度条动画
- 数字：使用计数器动画滚动
- 进度条：平滑宽度过渡 `transition: width 1s ease-out`

### 4.4 页面切换
- 使用 React 的 `<CSSTransition>` 或手动控制
- 淡入淡出 `opacity: 0 → 1`

---

## 5. 数据同步脚本

### 5.1 同步脚本功能
- 使用 GitHub REST API 获取仓库内容
- 过滤 docs/ 目录（支持多语言）
- 保存为本地 JSON 供页面使用

### 5.2 脚本位置
- `scripts/sync-learn-cc.js`

### 5.3 同步内容
- 课程阶段信息（12 个阶段）
- 每个阶段的标题、描述、标语
- 可选：链接到上游仓库

---

## 6. 技术实现

### 6.1 项目结构
```
src/
├── sections/
│   └── LearnCCPage.tsx      # 主页面组件
├── data/
│   └── learn-cc/
│       ├── courses.json      # 课程数据
│       └── ...              # 其他静态资源
├── components/
│   └── ui/                  # 通用 UI 组件
└── lib/
    └── utils.ts              # 工具函数

scripts/
└── sync-learn-cc.js         # 同步脚本
```

### 6.2 数据源
- 源仓库：https://github.com/shareAI-lab/learn-claude-code
- 主要使用 docs/ 目录内容

### 6.3 课程数据（静态定义）
```typescript
const courses = [
  { id: 's01', phase: 1, title: 'Agent Loop', motto: 'One loop & Bash is all you need' },
  { id: 's02', phase: 1, title: 'Tool Use', motto: 'Adding a tool means adding one handler' },
  { id: 's03', phase: 2, title: 'TodoWrite', motto: 'An agent without a plan drifts' },
  { id: 's04', phase: 2, title: 'Subagents', motto: 'Break big tasks down' },
  { id: 's05', phase: 2, title: 'Skills', motto: 'Load knowledge when you need it' },
  { id: 's06', phase: 2, title: 'Context Compact', motto: 'Context will fill up' },
  { id: 's07', phase: 3, title: 'Tasks', motto: 'Break big goals into small tasks' },
  { id: 's08', phase: 3, title: 'Background Tasks', motto: 'Run slow operations in background' },
  { id: 's09', phase: 4, title: 'Agent Teams', motto: 'Delegate to teammates' },
  { id: 's10', phase: 4, title: 'Team Protocols', motto: 'Shared communication rules' },
  { id: 's11', phase: 4, title: 'Autonomous Agents', motto: 'Teammates scan and claim tasks' },
  { id: 's12', phase: 4, title: 'Worktree Isolation', motto: 'Each works in its own directory' },
];
```

---

## 7. 响应式设计

| 断点 | 屏幕宽度 | 卡片列数 |
|------|----------|----------|
| sm   | < 640px  | 1 列     |
| md   | ≥ 640px  | 2 列     |
| lg   | ≥ 1024px | 3 列     |
| xl   | ≥ 1280px | 4 列     |

---

## 8. 验收标准

### 8.1 功能验收
- [ ] 页面正确渲染，显示 12 个课程卡片
- [ ] 返回首页按钮正常工作
- [ ] GitHub 链接正确
- [ ] 响应式布局在各尺寸下正常

### 8.2 视觉验收
- [ ] 配色与现有页面一致（深黑 + 橙色）
- [ ] 字体正确应用
- [ ] 卡片 hover 效果正常

### 8.3 动效验收
- [ ] 页面加载有交错淡入动画
- [ ] 卡片 hover 有上浮效果
- [ ] 进度条有平滑过渡

### 8.4 同步脚本验收
- [ ] 脚本能正确获取 GitHub 内容
- [ ] 生成的 JSON 数据格式正确
- [ ] 手动运行无报错
