# 泥巴猪的实验田 - 待办事项

## 高优先级 (P0-P1)

### P0: 死代码清理

- [x] **移除 Eleventy 死代码** ✓
  - 已删除 `.eleventy.js`

### P1: 路由重构

- [x] **重构 App.tsx 路由逻辑** ✓
  - 抽取路由配置为 `ROUTE_MAPPINGS` 和 `PATH_MAP`
  - 统一使用 `getPageFromPath()` 处理路由匹配
  - 代码量从 ~100 行减少到 ~60 行

### P1: 测试覆盖

- [x] **添加 Playwright E2E 测试** ✓
  - 已安装 Playwright
  - 已添加 9 个测试用例:
    - 首页加载
    - 页面导航 (7 个页面)
    - 浏览器前进/后退

## 中优先级 (P2)

### P2: 依赖优化

- [ ] **优化 Radix UI 引入方式**
  - 评估哪些组件实际被使用
  - 改为按需引入或使用独立包
  - 运行 `npm run build` 分析 bundle

### P2: 博客内容集成

- [ ] **集成 src/evolution/ 博客内容**
  - 方案 A: 迁移到主 React 应用
  - 方案 B: 使用 Vite 插件处理 Markdown
  - 方案 C: 使用 Contentful/Notion API

### P2: 性能优化

- [ ] **分析并优化 bundle 体积**
  - 使用 source-map-explorer 或 vite-bundle-visualizer
  - 添加 code splitting
  - 压缩图片资源

## 低优先级 (P3)

### P3: SEO & 分析

- [ ] **添加 sitemap.xml**
  - 静态生成或使用脚本

- [ ] **添加 RSS feed**
  - 方便订阅者获取更新

- [ ] **添加站点分析**
  - Google Analytics 或 Plausible
  - 了解用户行为

### P3: 用户体验

- [ ] **添加 PWA 支持**
  - Service Worker
  - 离线访问

- [ ] **添加页面过渡动画**
  - 使用 Framer Motion 或 CSS

### P3: 代码质量

- [ ] **添加 Prettier 配置**
  - 统一代码风格

- [ ] **添加 husky pre-commit hook**
  - 运行 lint 和测试

## 已完成

- [x] 修复 GitHub Pages SPA 路由刷新白屏问题
- [x] 修复资源加载路径问题
- [x] 优化工作室页面 iframe 嵌入

---

## 更新日志

### 2026-03-18
- 创建 TODOS.md
- 识别 P0-P3 优先级任务
