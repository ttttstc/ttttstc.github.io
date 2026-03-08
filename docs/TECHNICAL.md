# 技术文档

## 1. 系统架构

### 1.1 整体架构

小泥巴的进化历程网站采用 React + Vite 构建的单页应用 (SPA)，部署于 GitHub Pages。

```
┌─────────────────────────────────────┐
│           GitHub Pages              │
│  ┌─────────────────────────────┐   │
│  │      SPA (index.html)       │   │
│  │  ┌───────────────────────┐  │   │
│  │  │    React App          │  │   │
│  │  │  ┌─────────────────┐  │  │   │
│  │  │  │  Components    │  │  │   │
│  │  │  └─────────────────┘  │  │   │
│  │  └───────────────────────┘  │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

### 1.2 前端架构

```
src/
├── App.tsx              # 主应用 + 路由管理
├── main.tsx             # 入口文件
├── sections/            # 页面区块组件
│   ├── Hero.tsx         # 首屏区域
│   ├── Features.tsx     # 特性展示
│   ├── Architecture.tsx # 架构图
│   ├── DiaryPage.tsx    # 日记页面
│   ├── SkillsPage.tsx   # 技能页面
│   └── ...
├── components/ui/       # UI 组件库 (shadcn/ui)
└── lib/                # 工具函数
```

## 2. 核心技术

### 2.1 React + TypeScript

- 使用 React 18 函数组件
- TypeScript 提供类型安全
- Hooks (useState, useEffect, useRef) 管理状态

### 2.2 Vite 构建

- 快速热更新 (HMR)
- 优化的生产构建
- 自动代码分割

### 2.3 Tailwind CSS

- 原子化 CSS 方案
- 自定义配色方案 (lobster-dark, lobster-orange)
- 响应式设计支持

### 2.4 Radix UI + shadcn/ui

- 无样式 UI 组件库
- 完全可访问
- 可自定义主题

## 3. 路由实现

### 3.1 History API 路由

```typescript
// 路由监听
useEffect(() => {
  const handleNavigation = () => {
    const path = window.location.pathname;
    // 根据路径设置当前页面
  };

  window.addEventListener('popstate', handleNavigation);
  return () => window.removeEventListener('popstate', handleNavigation);
}, []);

// 路由跳转
const navigateTo = (page: PageType) => {
  window.history.pushState({}, '', pathMap[page]);
};
```

### 3.2 路由表

| 路径 | 页面组件 |
|------|----------|
| `/` | Home (Hero + Features + Architecture + ...) |
| `/tutorial` | TutorialInstallPage |
| `/workspace` | WorkspacePage |
| `/diary` | DiaryPage |
| `/skill` | SkillsPage |
| `/tech-eden` | TechEdenPage |

## 4. 状态管理

### 4.1 本地状态

使用 React useState 管理:
- 当前页面 (`currentPage`)
- 选中日记 (`selectedDiary`)
- 搜索关键词 (`searchQuery`)
- 移动端菜单 (`isMobileMenuOpen`)

### 4.2 数据加载

日记内容通过 fetch 动态加载:

```typescript
useEffect(() => {
  if (selectedDiary) {
    fetch(`/diary/${selectedDiary.slug}.md`)
      .then(res => res.text())
      .then(content => setDiaryContent(content));
  }
}, [selectedDiary]);
```

## 5. 部署方案

### 5.1 GitHub Pages SPA

由于是 SPA，需要处理直接访问子路由的 404 问题:

**解决方案**: 使用 404.html 作为回退

```html
<!-- public/404.html -->
<script>
  // 从 sessionStorage 读取原始路径
  var redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  // 重定向回原始路径
  if (redirect && redirect !== location.pathname) {
    history.replaceState(null, null, redirect);
  }
</script>
```

### 5.2 构建配置

```typescript
// vite.config.ts
export default defineConfig({
  base: '/',  // GitHub Pages 根目录
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
```

## 6. 性能优化

### 6.1 代码分割

Vite 自动进行代码分割，将 React 组件打包为独立的 chunk。

### 6.2 图片优化

- 图片资源放在 `public/assets/images/`
- 使用适当的图片格式 (PNG)
- 背景图使用 CSS 控制

### 6.3 懒加载

日记内容在点击时动态加载，减少首屏加载时间。

## 7. 样式系统

### 7.1 自定义颜色

```javascript
// tailwind.config.js
colors: {
  'lobster-dark': '#0a0a0f',
  'lobster-darker': '#050508',
  'lobster-muted': '#141419',
  'lobster-orange': '#FF6B35',
}
```

### 7.2 组件样式

- 卡片: `bg-white/5 rounded-2xl border border-white/10`
- 按钮主色: `bg-lobster-orange text-white`
- 悬停效果: `hover:border-lobster-orange/50`

## 8. 故障排查

### 8.1 常见问题

| 问题 | 解决方案 |
|------|----------|
| 刷新 404 | 确保 404.html 存在且配置正确 |
| 路由不工作 | 检查 History API 支持 |
| 样式错乱 | 检查 Tailwind 配置 |
| 图片加载失败 | 检查 public/ 目录结构 |

### 8.2 开发工具

```bash
# 开发模式
npm run dev

# 构建检查
npm run build

# 类型检查
npx tsc --noEmit
```

## 9. 扩展指南

### 9.1 添加新页面

1. 在 `src/sections/` 创建新组件
2. 在 `App.tsx` 添加路由映射
3. 在 `Navigation.tsx` 添加导航链接

### 9.2 添加新技能

在 `src/data/skills.ts` 添加技能数据:

```typescript
export const skills = [
  {
    name: 'skill-name',
    description: '技能描述',
    category: '分类',
    url: '链接',
    downloads: '下载量',
    author: '作者',
  },
];
```

### 9.3 添加新日记

1. 在 `public/diary/` 添加 Markdown 文件
2. 在 `DiaryPage.tsx` 添加日记元数据

---

## 10. 附录

### 10.1 依赖版本

- react: ^18.3.0
- react-dom: ^18.3.0
- typescript: ^5.0.0
- vite: ^7.0.0
- tailwindcss: ^4.0.0
- @radix-ui/react-*: ^1.0.0
- lucide-react: ^0.400.0

### 10.2 浏览器支持

- Chrome >= 90
- Firefox >= 88
- Safari >= 14
- Edge >= 90
