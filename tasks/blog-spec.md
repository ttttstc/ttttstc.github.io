# 博客板块 Spec —— 完整复刻 week.wild.plus/athens-26 的效果

> 目标：在现有 React + Vite 工程里新增一个「博客」板块，**视觉与交互效果完整复刻**参照站
> `https://week.wild.plus/athens-26`（含鼠标移动 / hover / 拖拽等所有交互），但**内容主题改为博客**
> （文章列表 + 文章详情），并在**首页加入博客入口**。最终通过 GitHub Pages 部署。

---

## 0. 结论先行：GitHub Pages 可行性

参照站是 **Framer 生成的纯静态站点**，所有动效都跑在浏览器端（transform/opacity + SVG + JS 事件），
无任何后端。本工程已是 Vite → `dist` → gh-pages 部署。因此**完全可在 GitHub Pages 实现**，唯一需补的是
SPA 深链接的 `404.html` 回退（详见 §7）。

---

## 1. 目标站效果侦察结果（事实依据）

以下均从参照站 HTML/CSS 实测提取，非臆测：

### 1.1 设计系统
| 项 | 值 | 用途 |
|----|----|----|
| 背景色 | `rgb(220, 219, 213)` | 暖米灰，全站底色 |
| 文字色 | `rgb(51, 51, 51)` | 近黑深灰，正文 |
| 强调蓝 | `rgb(7, 85, 187)` | SVG 神殿填充 / 链接 / 强调 |
| 浅蓝描边 | `rgba(200, 212, 227, 0.24)` | SVG 线描、分隔线 |
| 纯白 | `rgb(255, 255, 255)` | 局部反白 |
| 标题/正文字体 | **Albert Sans**（Google Fonts，几何无衬线） | 大标题、正文 |
| 编号/数字字体 | **IBM Plex Mono** | 罗马数字、字母编号（D. P. H. I.）、元信息 |
| 兜底字体 | Inter, sans-serif | — |

### 1.2 动效（滚动驱动）
- **逐字浮现**：大段欢迎语以「字符带间距」呈现（`W e l c o m e ...`），随滚动逐字符
  `opacity 0→1 + translateY + 模糊消除` 入场，stagger 错峰。
- **SVG 神殿线描**：标志性的「双柱神殿 / 容器」轮廓 SVG（viewBox `0 0 498 1050`），
  蓝色填充 `rgb(7,85,187)` + 浅灰描边 `rgba(200,212,227,0.24)`，`stroke-dashoffset` 随滚动逐渐「画」出。
  → **此 SVG 的完整 path 已抓取**，可 1:1 复用（见 §6 资产）。
- **区块揭示**：各 section 进入视口时 `opacity + translateY` 一次性揭示，错峰。
- **罗马数字列表**：「What you should bring」I–XVI，逐行揭示，每项带横向分隔线（展开动画）+ 配图淡入。
- **Sticky 时间线**：日程区「Day I / Thursday」日期标签 sticky 固定，条目逐条浮现。
- 揭示/过渡统一缓动节奏，hover 类过渡时长统一 **0.2s**（实测出现 276 次）。

### 1.3 交互效果（鼠标）
- **自定义光标**：实测 `cursor: none` + `cursor: var(...)` → 原生光标被隐藏，由一个跟随鼠标的自定义
  光标元素接管。
- **可拖拽画廊**：实测 `cursor: grab` / `cursor: grabbing` → 存在可横向拖拽的图片画廊/轮播。
- **hover 反馈**：50 处 `:hover` 规则，链接/卡片/图片在 hover 时有 0.2s 的颜色/位移/缩放反馈。
- 鼠标跟随的精确物理参数封装在 Framer 运行时 chunk（`script_main.*.mjs`，已压缩）内，**无法逐字节复制**。

---

## 2. 保真度声明（诚实边界）

- ✅ **可精确复刻**：配色、字体、SVG 神殿轮廓、逐字浮现、区块揭示、sticky 时间线、罗马数字列表、
  0.2s hover 过渡、可拖拽画廊、自定义光标的「行为类型」。
- ⚠️ **高保真重建（非字节级一致）**：自定义光标的具体视觉与跟随物理、Framer 各动画的精确缓动曲线/延迟。
  我用 `framer-motion`（与参照站同源理念）重建到「肉眼难分」的程度，但不保证逐帧等同 Framer 私有运行时。
- ❌ **不复制**：参照站的活动文案 / 图片资产（内容改为博客，配图用占位或自备）。

> 如果你要求「连缓动曲线都逐帧对齐」，需要我去逆向那个压缩 mjs，成本很高、收益很低，**不建议**。
> 建议接受「高保真重建」标准。

---

## 3. 内容主题映射（活动站 → 博客）

| 参照站元素 | 博客对应 |
|-----------|---------|
| Hero 欢迎语（逐字浮现） | 博客 Hero：站点标语 / 主理人寄语，逐字浮现 |
| The Facts（D./P./H./I. 字母编号事实卡） | 博客「关于 / 数据」：文章数、主题数、起始年份等字母编号卡 |
| SVG 神殿线描 | 保留为博客的标志性装饰图形（Hero + 文章页分隔处） |
| What you should bring（罗马数字 I–XVI 列表） | **文章列表**：每篇文章用罗马数字编号 I、II、III… 逐行揭示 |
| Day-by-day 时间线（sticky 日期） | **文章详情页**：sticky 文章标题/目录侧栏 + 正文分段逐段浮现 |
| Curated by Anna | 文章署名 / 主理人 |

---

## 4. 信息架构与路由

复用现有 `App.tsx` 的 `pushState` 客户端路由模式，扩展页面类型：

| 路由 | 页面 | 说明 |
|------|------|------|
| `/` | 首页（现有） | 新增「博客入口」区块 |
| `/blog` | 博客列表页 | 罗马数字编号的文章列表 + Hero 逐字浮现 + 神殿 SVG |
| `/blog/:slug` | 文章详情页 | sticky 标题/元信息 + 正文逐段浮现 |

- `App.tsx` 路由状态扩展为 `'home' | 'skills' | 'blog' | 'post'`，并解析 `location.pathname`
  （`/blog` → blog；`/blog/xxx` → post 且解析 slug）。
- 博客页为**米色主题**，与主站「龙虾」橙黑主题割裂，因此博客页时**隐藏主站黑色 Footer**，
  使用博客自有的米色页脚，保持参照站观感统一。

---

## 5. 组件与文件清单

新增独立目录 `src/blog/`，避免污染主站橙色主题样式：

| 文件 | 职责 |
|------|------|
| `src/data/posts.ts` ✅已建 | 文章数据（TS 数组，含 slug/标题/日期/标签/摘要/结构化正文 blocks） |
| `src/blog/blog-theme.css` | 引入 Albert Sans + IBM Plex Mono；定义米色主题 CSS 变量、罗马数字/分隔线样式、自定义光标基样式 |
| `src/blog/CustomCursor.tsx` | 自定义光标：隐藏原生光标，渲染跟随圆点；hover 链接/卡片时放大，拖拽区显示 grab 态。spring lerp 跟随 |
| `src/blog/RevealText.tsx` | 逐字/逐词浮现：拆字符，`framer-motion` stagger（opacity+translateY+blur），进入视口触发 |
| `src/blog/Reveal.tsx` | 通用区块揭示包装：`whileInView` 一次性 opacity+translateY |
| `src/blog/TempleSVG.tsx` | 神殿双柱 SVG（复用抓取的 path）+ scroll-linked `stroke-dashoffset` 线描动画 |
| `src/blog/DraggableGallery.tsx` | 可拖拽横向画廊（`framer-motion` drag，grab/grabbing 光标），用于文章配图/图集 |
| `src/blog/BlogList.tsx` | 列表页：Hero（逐字浮现 + 神殿）+ 罗马数字编号文章列表（逐行揭示 + 分隔线展开） |
| `src/blog/BlogPost.tsx` | 详情页：sticky 标题/元信息侧栏 + 正文 blocks 逐段浮现 + 神殿分隔 |
| `src/blog/BlogFooter.tsx` | 博客米色页脚 |
| `src/sections/BlogTeaser.tsx` | **首页博客入口区块**：米色卡片 + 最新文章预览 + 「进入博客」CTA，插入首页 main |
| 改 `src/App.tsx` | 扩展路由、条件渲染博客页、博客页隐藏主 Footer |
| 改 `src/sections/Navigation.tsx` | 导航加「博客」入口，扩展 `onNavigate` 类型 |
| 新增 `public/404.html` + 改 `index.html` | GitHub Pages SPA 深链回退脚本 |

**新增依赖**：`framer-motion@12.40.0`（已安装，兼容 React 19）。字体走 Google Fonts CDN（`<link>`）。

---

## 6. 已抓取的可复用资产

- **神殿 SVG path**：参照站 `viewBox="0 0 498 1050"` 的双柱神殿轮廓完整 path 数据已获取
  （蓝填充 `rgb(7,85,187)` + 浅灰描边 `rgba(200,212,227,0.24)`，含可线描的 stroke path），
  实现时直接内联到 `TempleSVG.tsx`。
- 配色、字体名（Albert Sans / IBM Plex Mono）、0.2s 过渡节奏均已确认。

---

## 7. GitHub Pages 部署适配

- 现状：`vite.config.ts` `base: './'`，构建产物 `dist`，经 gh-pages 部署到用户站根域。
- 问题：SPA 用 `pushState`，直接访问 `/blog` 或 `/blog/xxx` 会 404。
- 方案：加 `public/404.html`，用成熟的 spa-github-pages 重定向 trick 把路径透传给 `index.html` 还原。
  顺带修复现有 `/skills` 的同款深链 404。

---

## 8. 验收标准（Definition of Done）

1. `npm run build` 通过，无 TS / 构建错误。
2. `/blog` 列表页：Hero 文字逐字浮现；神殿 SVG 滚动线描；文章按罗马数字编号逐行揭示。
3. `/blog/:slug` 详情页：标题/元信息 sticky；正文逐段浮现；可拖拽画廊 grab/grabbing 正常。
4. **自定义光标**全博客板块生效：原生光标隐藏，跟随圆点平滑跟随，hover 交互元素时放大。
5. hover 反馈统一 0.2s；配色字体与参照站一致（米 / 深灰 / 蓝，Albert Sans / IBM Plex Mono）。
6. 首页出现博客入口区块，可跳转 `/blog`；导航栏有「博客」。
7. 主站原有页面（首页 / 技能页）视觉与功能不受影响（橙黑主题不变）。
8. 直接访问 `/blog/xxx` 刷新不 404（404.html 回退生效，本地 `vite preview` 验证）。

---

## 9. 待你确认

1. 上述「高保真重建」标准（§2）是否接受？还是要求逐帧对齐 Framer 运行时（成本高，不推荐）？
2. 文章配图：用占位图 / 纯色块，还是你会提供图片？（先用占位，随时可换）
3. 确认后我即按 §5 清单实现，分阶段产出并 `npm run build` 自测。
