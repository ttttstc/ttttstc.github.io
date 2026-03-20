# Agent 入门教程页面实施计划

> **For Claude:** Use frontend-design skill for UI implementation, then add routes to App.tsx

**Goal:** 创建 Agent 入门教程页面，从 learn-claude-code 获取内容，渲染精美的课程卡片网格

**Architecture:** 静态页面架构，课程数据本地定义，通过 React 组件渲染

**Tech Stack:** React 19 + TypeScript + Vite + Tailwind CSS + Lucide React

---

## 任务总览

1. 添加路由配置
2. 创建课程数据
3. 创建主页面组件
4. 添加动效样式
5. 构建验证

---

### Task 1: 添加路由配置

**Files:**
- Modify: `src/App.tsx:19` - 添加 learn-cc 页面类型
- Modify: `src/App.tsx:29` - 添加路由映射
- Modify: `src/App.tsx:49` - 添加路径映射
- Modify: `src/App.tsx:100` - 添加 case 渲染
- Modify: `src/App.tsx:127` - 添加独立布局判断

**Step 1: 添加页面类型**

打开 `src/App.tsx`，在 `PageType` 中添加 `'learn-cc'`：

```typescript
type PageType = 'landing' | 'cat-cafe' | 'prompts' | 'home' | 'skill' | 'tutorial' | 'diary' | 'workspace' | 'tech' | 'design-showcase' | 'learn-cc';
```

**Step 2: 添加路由映射**

在 `ROUTE_MAPPINGS` 数组中添加：

```typescript
{ pattern: (p) => p === '/learn-cc' || p === '/lobster/learn', page: 'learn-cc' },
```

**Step 3: 添加路径映射**

在 `PATH_MAP` 中添加：

```typescript
'learn-cc': '/learn-cc',
```

**Step 4: 添加渲染 case**

在 `renderPage` switch 中添加：

```typescript
case 'learn-cc':
  return <LearnCCPage />;
```

**Step 5: 添加布局判断**

在布局判断中添加独立页面：

```typescript
if (currentPage === 'landing' || currentPage === 'cat-cafe' || currentPage === 'prompts' || currentPage === 'design-showcase' || currentPage === 'learn-cc') {
  return <>{renderPage()}</>;
}
```

**Step 6: Commit**

```bash
git add src/App.tsx
git commit -m "feat: 添加 learn-cc 路由配置"
```

---

### Task 2: 创建课程数据

**Files:**
- Create: `src/data/learn-cc-courses.ts`

**Step 1: 创建课程数据文件**

```typescript
export interface Course {
  id: string;
  phase: number;
  title: string;
  subtitle: string;
  motto: string;
  status: 'completed' | 'current' | 'locked';
}

export const courses: Course[] = [
  { id: 's01', phase: 1, title: 'Agent Loop', subtitle: 'Agent 循环', motto: 'One loop & Bash is all you need', status: 'completed' },
  { id: 's02', phase: 1, title: 'Tool Use', subtitle: '工具使用', motto: 'Adding a tool means adding one handler', status: 'completed' },
  { id: 's03', phase: 2, title: 'TodoWrite', subtitle: '任务清单', motto: 'An agent without a plan drifts', status: 'completed' },
  { id: 's04', phase: 2, title: 'Subagents', subtitle: '子代理', motto: 'Break big tasks down', status: 'current' },
  { id: 's05', phase: 2, title: 'Skills', subtitle: '技能', motto: 'Load knowledge when you need it', status: 'locked' },
  { id: 's06', phase: 2, title: 'Context Compact', subtitle: '上下文压缩', motto: 'Context will fill up', status: 'locked' },
  { id: 's07', phase: 3, title: 'Tasks', subtitle: '任务管理', motto: 'Break big goals into small tasks', status: 'locked' },
  { id: 's08', phase: 3, title: 'Background Tasks', subtitle: '后台任务', motto: 'Run slow operations in background', status: 'locked' },
  { id: 's09', phase: 4, title: 'Agent Teams', subtitle: '代理团队', motto: 'Delegate to teammates', status: 'locked' },
  { id: 's10', phase: 4, title: 'Team Protocols', subtitle: '团队协议', motto: 'Shared communication rules', status: 'locked' },
  { id: 's11', phase: 4, title: 'Autonomous Agents', subtitle: '自主代理', motto: 'Teammates scan and claim tasks', status: 'locked' },
  { id: 's12', phase: 4, title: 'Worktree Isolation', subtitle: '工作树隔离', motto: 'Each works in its own directory', status: 'locked' },
];

export const getProgress = () => {
  const completed = courses.filter(c => c.status === 'completed').length;
  return { completed, total: courses.length };
};
```

**Step 2: Commit**

```bash
git add src/data/learn-cc-courses.ts
git commit -m "feat: 添加 Agent 课程数据"
```

---

### Task 3: 创建主页面组件

**Files:**
- Create: `src/sections/LearnCCPage.tsx`

**Step 1: 创建页面组件**

```tsx
import { useState, useEffect } from 'react';
import { Home, Github, ArrowRight, CheckCircle, Lock, PlayCircle } from 'lucide-react';
import { courses, getProgress, type Course } from '../data/learn-cc-courses';

// 颜色系统
const COLORS = {
  bg: '#000000',
  bgSecondary: '#0A0A0A',
  bgTertiary: '#141414',
  border: '#262626',
  borderHover: '#404040',
  text: '#FAFAFA',
  textSecondary: '#A1A1A1',
  textMuted: '#6B6B6B',
  accent: '#FF6B35',
  accentHover: '#FF8C5A',
};

export default function LearnCCPage() {
  const [loaded, setLoaded] = useState(false);
  const progress = getProgress();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // 页面加载动画
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const getStatusIcon = (status: Course['status']) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-5 h-5" />;
      case 'current': return <PlayCircle className="w-5 h-5" />;
      case 'locked': return <Lock className="w-5 h-5" />;
    }
  };

  const getStatusColor = (status: Course['status']) => {
    switch (status) {
      case 'completed': return '#22C55E';
      case 'current': return COLORS.accent;
      case 'locked': return COLORS.textMuted;
    }
  };

  return (
    <div style={{ backgroundColor: COLORS.bg }} className="min-h-screen text-white">
      {/* Header */}
      <header style={{ backgroundColor: COLORS.bgSecondary, borderBottom: `1px solid ${COLORS.border}` }} className="h-16 flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center gap-2" style={{ color: COLORS.textSecondary }}>
            <Home className="w-5 h-5" />
            <span>首页</span>
          </a>
          <div style={{ backgroundColor: COLORS.border }} className="w-px h-6" />
          <h1 className="text-lg font-semibold" style={{ fontFamily: 'Times New Roman, Times, serif' }}>Agent 入门教程</h1>
        </div>
        <a
          href="https://github.com/shareAI-lab/learn-claude-code"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: COLORS.textSecondary }}
          className="hover:text-white transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
      </header>

      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 style={{ fontFamily: 'Times New Roman, Times, serif' }} className="text-4xl md:text-5xl font-bold mb-4">
            Agent <span style={{ color: COLORS.accent }}>Mastery</span> Journey
          </h2>
          <p style={{ color: COLORS.textSecondary }} className="text-lg mb-8">
            从零掌握 AI Agent 的 12 堂课 · 构建你的第一个智能助手
          </p>

          {/* Progress */}
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full" style={{ backgroundColor: COLORS.bgTertiary, border: `1px solid ${COLORS.border}` }}>
            <div style={{ color: COLORS.textSecondary }} className="text-sm">学习进度</div>
            <div className="flex items-center gap-2">
              <div className="w-32 h-2 rounded-full overflow-hidden" style={{ backgroundColor: COLORS.bgSecondary }}>
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${(progress.completed / progress.total) * 100}%`,
                    backgroundColor: COLORS.accent
                  }}
                />
              </div>
              <span style={{ color: COLORS.accent }} className="font-semibold">
                {progress.completed}/{progress.total}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className={`relative overflow-hidden rounded-xl transition-all duration-500 cursor-pointer ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  backgroundColor: COLORS.bgTertiary,
                  border: `1px solid ${COLORS.border}`,
                  transitionDelay: `${index * 0.1}s`,
                }}
              >
                {/* Status indicator */}
                <div
                  className="absolute top-4 right-4"
                  style={{ color: getStatusColor(course.status) }}
                >
                  {getStatusIcon(course.status)}
                </div>

                {/* Phase badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="px-2 py-1 text-xs rounded-full"
                    style={{ backgroundColor: `${COLORS.accent}20`, color: COLORS.accent }}
                  >
                    Phase {course.phase}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 pt-16">
                  <h3 style={{ fontFamily: 'Times New Roman, Times, serif' }} className="text-xl font-bold mb-2">
                    {course.id.toUpperCase()}
                  </h3>
                  <h4 className="text-lg font-semibold mb-1">{course.title}</h4>
                  <p style={{ color: COLORS.textSecondary }} className="text-sm mb-4">{course.subtitle}</p>

                  {/* Motto */}
                  <p
                    className="text-xs italic leading-relaxed"
                    style={{ color: COLORS.textMuted, borderLeft: `2px solid ${getStatusColor(course.status)}` }}
                    className="pl-3"
                  >
                    "{course.motto}"
                  </p>

                  {/* Enter button */}
                  <div className="mt-6 flex items-center gap-2" style={{ color: course.status === 'locked' ? COLORS.textMuted : COLORS.accent }}>
                    <span className="text-sm font-medium">
                      {course.status === 'completed' ? '复习' : course.status === 'current' ? '开始学习' : '敬请期待'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Hover effect */}
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 0 1px ${COLORS.accent}, 0 0 30px ${COLORS.accent}20`
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${COLORS.border}` }} className="py-8 text-center">
        <p style={{ color: COLORS.textMuted }} className="text-sm">
          © 2026 泥巴猪的实验田 · Agent Mastery Journey
        </p>
      </footer>
    </div>
  );
}
```

**Step 2: 导入组件**

在 `src/App.tsx` 顶部添加导入：

```typescript
import LearnCCPage from './sections/LearnCCPage';
```

**Step 3: Commit**

```bash
git add src/sections/LearnCCPage.tsx
git commit -m "feat: 添加 Agent 入门教程页面"
```

---

### Task 4: 构建验证

**Step 1: 运行构建**

```bash
npm run build
```

**预期输出：**

```
✓ 1881 modules transformed.
✓ built in 6s
```

**Step 2: 预览**

```bash
npm run preview
```

**Step 3: 最终提交**

```bash
git add .
git commit -m "feat: 完成 Agent 入门教程页面"
git push origin main
```

---

## 执行方式

**选择执行方式：**

1. **子代理驱动** - 我为每个任务分配子代理，快速迭代
2. **我直接实现** - 基于这个计划直接开始编写代码

您想选择哪种方式？
