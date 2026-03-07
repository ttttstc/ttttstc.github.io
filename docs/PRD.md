# 龙虾历险记 - 个人技术博客 PRD

## 1. 项目概述

### 1.1 项目背景
- **项目名称**：龙虾历险记 (Lobster Adventures)
- **项目类型**：个人技术博客网站
- **技术栈**：GitHub Pages + 11ty (Eleventy) - 更轻量更现代
- **核心目的**：记录 OpenCRAW 开源项目的技术探索之旅，展示架构设计、安装教程、效果演示及开发日志

### 1.2 设计风格 (参考 Perplexity AI)
- **整体风格**：**复古未来主义 + CRT 显示器美学**
- **设计参考**：[Perplexity AI Computer](https://www.perplexity.ai/products/computer)
- **核心视觉元素**：
  - 深黑色背景 (#000000)
  - CRT 扫描线效果 (Scanlines overlay)
  - 蓝紫色渐变发光 (#8B5CF6 → #3B82F6)
  - 毛玻璃效果 (Glassmorphism)
  - 3D 透视卡片
  - 发光边框和文字效果
- **色调系统**：纯深色模式 (Dark Only) - 强化沉浸感
- **响应式设计**：完全响应式，完美适配手机/平板/桌面端

---

## 2. 信息架构

### 2.1 章节结构

```
龙虾历险记 (首页/总览)
├── 第一节：OpenCRAW 架构介绍
│   ├── 系统架构图
│   ├── 核心组件说明
│   └── 技术选型解析
├── 第二节：OpenCRAW 安装入门教程
│   ├── 环境准备
│   ├── 安装步骤
│   ├── 快速开始
│   └── 常见问题
├── 第三节：效果展示
│   └── 嵌入式网页：https://wto-concrete-auctions-projector.trycloudflare.com
└── 第四节：龙虾日记
    ├── 左侧：文件目录列表 (evolution/*.md)
    └── 右侧：日记详细内容展示
```

### 2.2 URL 结构
- 首页：`/`
- 架构介绍：`/architecture/`
- 安装教程：`/tutorial/`
- 效果展示：`/demo/`
- 龙虾日记：`/diary/`
- 日记详情：`/diary/{filename}/`

---

## 3. UI/UX 设计规范

### 3.1 配色系统 (基于 Perplexity AI 风格)

#### 深色模式 (Dark Mode Only)
| 用途 | 颜色 | Hex |
|------|------|-----|
| 背景色 | 纯黑 | `#000000` |
| 次级背景 | 深灰 | `#0A0A0C` |
| 卡片背景 | 深灰半透明 | `rgba(20, 20, 25, 0.8)` |
| 毛玻璃背景 | 模糊深色 | `rgba(10, 10, 15, 0.7)` |
| 主文字 | 白色 | `#FFFFFF` |
| 次级文字 | 灰色 | `#9CA3AF` |
| 强调色-主 | 蓝紫色 | `#8B5CF6` |
| 强调色-次 | 蓝色 | `#3B82F6` |
| 发光色 | 蓝紫渐变 | `linear-gradient(135deg, #8B5CF6, #3B82F6)` |
| 边框色 | 深灰 | `#1F1F23` |
| 发光边框 | 渐变边框 | `1px solid transparent` with gradient |

### 3.2 字体系统
- **中文字体**：-apple-system, BlinkMacSystemFont, "SF Pro Display", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei"
- **英文字体**：-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial
- **代码字体**："SF Mono", "JetBrains Mono", "Fira Code", Monaco, Consolas

| 元素 | 字号 | 字重 | 效果 |
|------|------|------|------|
| 页面大标题 | 56px | 800 (Extrabol d) | 发光文字 |
| 章节标题 | 36px | 700 (Bold) | - |
| 小节标题 | 24px | 600 (Semibold) | - |
| 正文 | 16px | 400 (Regular) | - |
| 次级文字 | 14px | 400 (Regular) | - |
| 代码 | 14px | 400 (Regular) | 背景高亮 |

### 3.3 间距系统
- 基础单位：8px
- 页面边距：20px (移动端) / 48px (桌面端)
- 卡片内边距：24px / 32px
- 元素间距：16px / 24px / 32px / 48px

### 3.4 组件规范

#### 导航栏
- 高度：64px
- 背景：毛玻璃效果 `backdrop-filter: blur(20px)` + `rgba(0, 0, 0, 0.8)`
- 固定顶部
- 左侧：发光 Logo + 网站名称
- 右侧：章节导航链接

#### Hero 区域 (首页)
- 全屏高度 (100vh)
- 居中大标题 + 副标题
- 标题发光效果：`text-shadow: 0 0 40px rgba(139, 92, 246, 0.5)`
- 向下滚动指示器 (发光箭头动画)

#### 章节卡片
- 圆角：16px
- 背景：`rgba(20, 20, 25, 0.6)` + 毛玻璃
- 边框：1px 渐变边框 (悬停时发光)
- 悬停效果：
  - 轻微上浮 `translateY(-8px)`
  - 边框发光增强
  - 阴影扩散
- 过渡动画：0.4s cubic-bezier(0.4, 0, 0.2, 1)

#### 代码块
- 圆角：12px
- 背景：#0D0D0F (接近黑色的深灰)
- 顶部带语言标签
- 语法高亮：使用 GitHub Dark 主题
- 复制按钮：右上角，悬停显示

#### 嵌入网页容器 (Demo 章节)
- 圆角：20px
- 边框：1px 渐变边框
- 阴影：发光阴影 `0 0 30px rgba(139, 92, 246, 0.2)`
- 加载指示器：发光 loading 动画
- 刷新按钮：右上角

#### 日记左右分栏
- 左侧栏宽：300px (桌面) / 全宽 (移动端)
- 左侧背景：毛玻璃效果
- 右侧背景：略深背景
- 分割线：1px 渐变线
- 文件列表项：
  - 悬停：背景发光
  - 选中：左侧渐变边框指示器
- 点击切换：淡入过渡

### 3.5 动画效果 (Perplexity 风格)

#### CRT 扫描线效果
```css
.scanlines::before {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.1) 0px,
    rgba(0, 0, 0, 0.1) 1px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
  z-index: 100;
}
```

#### 发光呼吸动画
```css
@keyframes glow-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
```

#### 卡片悬浮动画
```css
.card:hover {
  transform: translateY(-8px) perspective(1000px) rotateX(2deg);
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
}
```

#### 渐变边框动画
```css
@keyframes gradient-rotate {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

#### 页面进入动画
- 章节卡片：staggered fade-in (交错淡入)
- 每张卡片延迟 0.1s
- 从下方滑入 + 淡入

---

## 4. 功能规格

### 4.1 首页功能
- Hero 区域：大标题 + 副标题 + 发光效果
- 向下滚动提示动画
- 四个章节入口卡片 (2x2 网格)
- CRT 扫描线覆盖效果 (可选开关)
- 页脚

### 4.2 架构介绍页面
- 架构图展示 (SVG 或图片)
- 文字内容区域
- 代码块高亮
- 3D 透视图片展示 (可选)

### 4.3 安装教程页面
- 分步骤指南 (带编号)
- 代码块带复制功能
- 命令行高亮 (带 $ 提示符样式)
- 环境变量表格
- 注意事项卡片

### 4.4 效果展示页面
- iframe 嵌入外部网页
- 16:9 容器
- 加载状态：发光 loading
- 错误处理：显示重试按钮
- 全屏按钮

### 4.5 龙虾日记页面
- 左侧：Markdown 文件列表
  - 按文件名排序 (字母/时间)
  - 显示日期
  - 点击加载右侧内容 (无刷新)
- 右侧：日记详细内容
  - Markdown 渲染
  - 代码高亮
  - 图片展示
  - 平滑过渡动画

### 4.6 动效开关
- 提供 CRT 扫描线效果的开/关切换
- 记住用户偏好 (localStorage)

---

## 5. 响应式断点

| 断点 | 宽度 | 布局变化 |
|------|------|----------|
| Mobile | < 640px | 单栏，导航垂直，卡片堆叠 |
| Tablet | 640px - 1024px | 双栏，日记紧凑 |
| Desktop | > 1024px | 完整布局 |

---

## 6. 技术实现

### 6.1 推荐技术栈
- **静态网站生成器**：11ty (Eleventy) - 更轻量，适合高性能
- **CSS**：原生 CSS + CSS Variables + CSS Modules
- **JavaScript**：原生 JS (Vanilla) - 保持轻量
- **Markdown 渲染**：@11ty/eleventy-markdown-it
- **代码高亮**：Shiki 或 Prism.js
- **动画**：CSS Animations + Intersection Observer API

### 6.2 文件结构
```
.
├── .eleventy.js           # 11ty 配置
├── package.json
├── src/
│   ├── _data/             # 全局数据
│   ├── _includes/         # 模板组件
│   │   ├── base.njk       # 基础模板
│   │   ├── nav.njk        # 导航组件
│   │   ├── card.njk       # 卡片组件
│   │   └── diary.njk      # 日记组件
│   ├── css/
│   │   ├── main.css       # 主样式
│   │   ├── variables.css  # CSS 变量
│   │   ├── components.css # 组件样式
│   │   └── animations.css # 动画
│   ├── js/
│   │   ├── main.js        # 主脚本
│   │   ├── diary.js       # 日记交互
│   │   └── effects.js     # 动效
│   ├── evolution/         # 龙虾日记
│   │   └── *.md
│   ├── pages/
│   │   ├── index.njk      # 首页
│   │   ├── architecture.njk
│   │   ├── tutorial.njk
│   │   ├── demo.njk
│   │   └── diary.njk
│   └── assets/            # 静态资源
│       └── images/
└── _site/                 # 输出目录
```

---

## 7. 验收标准

### 7.1 视觉验收
- [ ] 深色背景正确 (#000000)
- [ ] 蓝紫渐变发光效果正确
- [ ] 毛玻璃效果正常显示
- [ ] 字体渲染清晰
- [ ] 间距一致
- [ ] 动画流畅无卡顿

### 7.2 功能验收
- [ ] 四个章节入口正常跳转
- [ ] 代码块语法高亮正确
- [ ] iframe 嵌入正常加载
- [ ] 日记左右分栏交互正常
- [ ] 移动端响应式正常
- [ ] CRT 扫描线效果可开关

### 7.3 性能验收
- [ ] 页面加载时间 < 2s
- [ ] 无 JavaScript 错误
- [ ] 图片优化加载

---

## 8. 待定事项

- [ ] 创建 evolution 目录下的 Markdown 日记文件
- [ ] 收集架构图素材
- [ ] 准备安装教程截图
- [ ] 确认嵌入网页的长期可用性
