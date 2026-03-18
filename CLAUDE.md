# 泥巴猪的实验田 - Claude Code 项目指南

## 项目概述

- **项目名称**: 泥巴猪的实验田
- **类型**: 个人静态网站 / SPA (单页应用)
- **技术栈**: React 19 + TypeScript + Vite + Tailwind CSS + Radix UI
- **部署平台**: GitHub Pages
- **构建命令**: `npm run build` → 输出到 `dist/`

## 技术架构

```
┌─────────────────────────────────────────────────────────────┐
│                      页面路由结构                            │
├─────────────────────────────────────────────────────────────┤
│  /              → LandingPage (首页)                        │
│  /cat-cafe      → CatCafePage (猫咖)                      │
│  /lobster       → Home (小泥巴首页)                        │
│  /lobster/skill → SkillsPage (技能展示)                   │
│  /lobster/tutorial → TutorialInstallPage (教程)            │
│  /lobster/diary  → DiaryPage (日记)                       │
│  /lobster/workspace → WorkspacePage (工作室)              │
│  /lobster/tech-eden → TechEdenPage (技术分析)             │
└─────────────────────────────────────────────────────────────┘
```

### 路由实现

- **不使用 React Router**，而是在 `src/App.tsx` 中手动实现客户端路由
- 路由逻辑分散在 `getInitialPage()` 和 `handleNavigation()` 中
- 使用 `window.history.pushState()` 进行导航

### 构建流程

1. `npm run build` 调用 Vite 构建
2. 输出到 `dist/` 目录 (不是 `_site/`)
3. GitHub Actions 部署 `dist/` 到 GitHub Pages

## 已知问题

### 1. 博客内容未集成

- `src/evolution/` 目录不存在（原本计划用于 Eleventy 博客）
- 如需博客功能，可考虑迁移到主 React 应用或使用外部 CMS

### 2. 路由实现

- 使用手动客户端路由，未使用 React Router
- 当前实现已重构为配置化方式，易于维护

### 3. 依赖体积

- 安装了 50+ Radix UI 组件，但只使用了部分
- **处理方式**: 按需引入，或使用 `@radix-ui/react-*` 的独立包

## 代码规范

### 组件结构

```
src/
├── sections/          # 页面级组件 (每个路由对应一个)
│   ├── LandingPage.tsx
│   ├── CatCafePage.tsx
│   └── ...
├── components/ui/    # Radix UI 组件库
├── hooks/           # 自定义 React hooks
├── lib/             # 工具函数 (utils.ts)
└── data/            # 静态数据
```

### 样式规范

- 使用 Tailwind CSS 进行样式开发
- 避免直接写 CSS，优先使用 Tailwind 类名
- 深色主题使用 `bg-lobster-dark` 类

### TypeScript

- 启用严格模式
- 优先使用类型注解，避免 `any`

## 待办事项 (TODOS)

### 高优先级

- [ ] 重构 App.tsx 路由逻辑，抽取为独立配置
- [ ] 清理 Eleventy 相关死代码
- [ ] 添加 Playwright E2E 测试

### 中优先级

- [ ] 优化 Radix UI 依赖引入
- [ ] 分析 bundle 体积，添加 code splitting
- [ ] 集成 src/evolution/ 博客内容到主站

### 低优先级

- [ ] 添加 Google Analytics 或 Plausible
- [ ] 添加 sitemap.xml
- [ ] 添加 RSS feed

## 常用命令

```bash
# 开发
npm run dev

# 构建
npm run build

# 预览构建结果
npm run preview

# Lint
npm run lint
```

## 外部依赖

- **图标**: Lucide React
- **日期处理**: date-fns
- **图表**: Recharts
- **表单**: React Hook Form + Zod
- **AI 调试**: kimi-plugin-inspect-react (仅开发环境)

## 部署

- 自动部署到 GitHub Pages
- 触发条件: push 到 main 分支
- 工作流文件: `.github/workflows/deploy.yml`
