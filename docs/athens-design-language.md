# Athens 设计语言

> 来源：逆向自 `week.wild.plus/athens-26` 的开源 study-clone（Next.js + Rive + WebGL）。
> 本文档把它提炼为**可复用的设计语言**，作为本工程博客板块及后续页面的设计基准。
> 所有数值（颜色 / 字号 / 缓动 / shader 参数）均取自真实源码，非估测。

---

## 一、设计哲学：数字考古（Digital Archaeology）

一句话：**把古希腊的庄重，装进瑞士网格里，再用 WebGL 让石头苏醒。**

三股力量交叠：
1. **古典神话** —— 罗马数字、碑刻体字、神殿柱、石刻浮雕、陶酒器（vessel）、希腊语短语。
2. **瑞士网格 / 复古印刷品** —— 严格的方格栅格、克制双色、全大写排版、细线分隔、卡片裱框。
3. **数字魔法** —— 鼠标划过石刻浮雕时，WebGL 实时渲染出"被擦亮的金属高光"，呼应主题「沉睡的诸神再次苏醒」。

> 关键张力：**静与动**。页面静止时像一张庄重的古典印刷海报；鼠标一动，浮雕泛起金属光泽、唱片旋转、希腊柱浮起。克制的外表 + 惊喜的交互。

---

## 二、色彩系统

整套只用 **蓝 + 米灰** 双色，外加几级中性灰。**注意：正文文字本身就是蓝色**，不是黑色。

| Token | 值 | 用途 |
|-------|----|----|
| `--athens-blue` | `#0755bb` | **主色**：所有文字、边框强调、控件、链接 |
| `--athens-blue-dark` | `#054496` | hover 态（链接、按钮变深） |
| `--athens-bg` | `#dcdbd5` | 页面背景（暖米灰） |
| `--athens-panel` | `#e8e8e8` | 面板 / 卡片底（facts、packing、header、summary） |
| `--athens-grid` | `#cbcbcb` | 网格线 / cell 边框（1px） |
| `--athens-soft` | `rgba(7,85,187,0.32)` | 次要文字（日程 label `em`）、柔和强调 |
| cell-white | `#fff` | 局部反白砖块 |
| visual-cell 底 | `#f4f4f1` | 浮雕砖背景 |
| 浮雕/FAQ 正文 | `#000` | 仅长正文用纯黑（Albert Sans） |
| 控件文字 | `#fff` | 蓝底按钮上的白字 |

裱框质感：`facts-shell` 用 `box-shadow: 0 0 0 24px rgba(255,255,255,0.43)` —— 白色外扩描边，像展品被裱在卡纸里。

---

## 三、字体系统

| 字体 | 字重 | 角色 |
|------|------|------|
| **Albertus Nova Light** | 300 | **主字体**：标题、正文、希腊柱、日程标题。古典罗马碑刻无衬线，是整站气质来源 |
| Albertus Nova Regular | 400 | 次级标题 |
| **Albert Sans** | 500 / 700 | 小标签 / caption / 图例 / 长正文（现代无衬线，做"说明文字"与主字体形成对比） |
| ABC Stefan Bubble Tight | 700 | 装饰性标题（备用） |
| ABC Stefan Simple | 400 | 装饰（备用） |

**排版规则（贯穿全站）：**
- 大量 `text-transform: uppercase`（标题、导航、日程、FAQ、短语）
- `letter-spacing: 0`（不加字间距，靠字体本身的古典骨架）
- `font-weight: 300` 为主基调 —— 轻、雅、不张扬

**字号阶梯（px，桌面）：**
| 场景 | 字号 / 行高 |
|------|------------|
| 日程日标题 `h1` | 34 / 1.0 |
| 区块标题 `h2` | 24 / 1.2 |
| 希腊柱正文 / FAQ summary / 短语 | 17–18 / 1.15 |
| packing 项 | 16 / 1.0 |
| facts 行 | 15 / 1.22 |
| 长正文（日程 / FAQ 答案） | 13–14 / 1.35（Albert Sans） |
| caption / 图例 | 12 / 1.05（Albert Sans 500） |

---

## 四、栅格布局系统（核心结构）

**不是常规的纵向 section 流，而是一面"砖墙"。**

```
.athens-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);   /* 桌面 3 列 */
  gap: 4px;
  padding: 4px;
  --cell: calc((100vw - 8px) / 3);          /* 每格基准正方形边长 */
}
.athens-cell {
  min-height: var(--cell);
  border: 1px solid var(--athens-grid);
  border-radius: 4px;
}
```

- **基本单元**：正方形 cell，4px 缝隙，1px 灰边，4px 圆角。
- **跨格规则**：
  - 满行（`grid-column: 1 / -1`）：hero、phrasebook
  - 占 2 列（`span 2`）：packing、itinerary、faq
  - 占 2 行（`cell-tall`）：希腊柱、部分浮雕
  - 超高：itinerary `3.51×`、phrasebook `2.54×`、faq/intro `2×`
- **拼贴节奏**：内容砖与「浮雕视觉砖（blank）」**交替穿插**，形成杂志/邮票册般的拼贴感。浮雕砖本身没有文字，纯视觉 + 鼠标交互。
- **响应式**：`max-width: 809px` 切换为 **2 列**，cell 固定 194px，并用 `order` 重排（hero 置顶、浮雕折叠/隐藏部分 blank）。

砖块类型清单（内容语义）：
`hero` · `facts`(关于事实) · `intro`(希腊柱寄语) · `packing`(罗马数字清单) · `media`(唱片播放器) · `itinerary`(日程时间线) · `phrasebook`(短语手册) · `faq`(手风琴) · `visual`(浮雕，8 种：walking/people/suitcases/circle/feast/faq/party)

---

## 五、动效系统（精确参数）

### 5.1 通用滚动揭示 `[data-reveal]`
所有内容砖进入视口时触发**一次**：
```
opacity: 0 → 1;
transform: translate3d(0, 24px, 0) → 0;
transition: 900ms cubic-bezier(0.22, 1, 0.36, 1);   /* easeOutExpo 风格 */
```
- 触发器：`IntersectionObserver { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }`，触发后 `unobserve`（不重复）。
- 由 `<html class="motion-ready">` 总开关控制，JS 挂载后才加，保证无 JS / SSR 时内容可见。
- **错峰**：`--reveal-delay`，列表项 `reveal-delay-1 = 140ms`；短语网格 `nth-child` 依次 `70 / 140 / 210ms`。

### 5.2 招牌动画
| 元素 | 动画 | 参数 |
|------|------|------|
| 希腊柱浮起 | `column-settle` | 1200ms `cubic-bezier(0.2,0.8,0.2,1)`，translateY 20px + scale 0.985→1 |
| 希腊柱卷纹 | `column-line-sweep` | 1400ms ease，delay 180ms，scaleX 0.86→1 |
| 唱片旋转 | `disc-spin` | 20s linear infinite（播放时） |
| 唱片光泽 | `disc-sheen` | 5.6s linear infinite |
| 浮雕入场 | `visual-soft-in` | 900ms，`clip-path: inset(7%)→inset(0)` |
| 浮雕云层呼吸 | `visual-cloud` | 11s ease-in-out infinite alternate |
| 金属扫光 | `relief-metal-sweep` | 1500ms ease-out（hover 触发） |

### 5.3 过渡基调
- hover / 状态过渡统一 **220–280ms ease**（控件 180–240ms）。
- 控件 hover：`scale(1.05–1.08)` + `box-shadow: 0 4–14px rgba(7,85,187,0.14)`。
- **全程 `prefers-reduced-motion: reduce` 一键关闭所有动画**（无障碍）。

---

## 六、鼠标交互系统（设计灵魂）

这是该站区别于普通"古典海报"的关键，**也是用户要求"鼠标移动效果一致"的核心**。

### 6.1 ⭐ WebGL 浮雕金属扫光（最重要）
鼠标在石刻浮雕图上移动，实时把灰石"擦"出金属高光。双 pass 渲染：

- **Pass 1 — Smudge（涂抹遮罩）**：在低分辨率 framebuffer 累积一张"涂抹图"。
  - 笔刷沿光标移动轨迹（segment 距离）绘制，受 `光标速度 uCursorSpeed`、`按住 uIsHolding`、`hover uIsHovering` 调制。
  - 带噪声溶解：停止移动后逐渐消散（`smudgeLife` 以 ~8.7s 衰减，`uShrinkSpeed 0.58`、`uDissolveAmount 0.7`、`uGrainAmount 0.3`）。
  - 邻域模糊 `mix(center, neighbor, 0.08)` 让边缘柔和。
- **Pass 2 — Final（金属光照）**：用法线贴图做实时光照，光标即光源。
  - `uMetallic 0.85`、`uSpecular 1.1`、`uLightRadius 1.5`、`uLightIntensity 0.4`、`uAmbientLight 0.06`。
  - 金属高光 `pow(dot(N,H), 30~72)`，仅在 smudge 遮罩 × 内容 mask 区域显现 → "擦哪亮哪"。
- **指针物理**：指数缓动 `ease = 1 - exp(-15·Δt)`（位置）/ `exp(-12·Δt)`（hover、speed），跟手且顺滑。
- **资产**：每张浮雕需 `base / normal(法线) / mask` 三张贴图 + 公共 `clouds` 噪声纹理。

> 这是纯 WebGL（非 Rive），GitHub Pages 可直接跑（静态 + 客户端 GL）。复刻时贴图可换成任意图片 + 程序/工具生成的法线与遮罩。

### 6.2 浮雕 CSS 视差（轻量层，与 GL 叠加）
- `--relief-shift-x/y = (光标位置 - 0.5) × 9px`：图片随鼠标微位移。
- hover：`scale(1.02 → 1.045)` + 对比度/饱和度增强 + 径向高光 `--relief-x/y` 跟随光标。

### 6.3 Rive 交互 Hero
- `.riv` 状态机（"State Machine 1"）暴露 `Hover` 布尔输入；`pointerEnter/Leave/focus/blur` 驱动。
- 加载前显示静态 PNG 兜底（`opacity` 220ms 交叉淡入），加载完 `is-ready` 切到 canvas。

### 6.4 其余交互
- 唱片：播放/暂停（图标↔双竖条）、静音（透明度 0.42）、播放时旋转 + 光泽。
- 音频短语：每条短语前 mini play 按钮，hover 放大 + 阴影。
- FAQ：原生 `<details>` 手风琴，`+` 号 `open` 时 `rotate(45deg)` 变 `×`。
- 链接：`underline 1px`，offset 1px，hover 转 `--athens-blue-dark`。

---

## 七、可复用 CSS 变量（建议落地形态）

```css
.athens-scope {
  --athens-blue: #0755bb;
  --athens-blue-dark: #054496;
  --athens-bg: #dcdbd5;
  --athens-panel: #e8e8e8;
  --athens-grid: #cbcbcb;
  --athens-soft: rgba(7, 85, 187, 0.32);
  --reveal-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --reveal-dur: 900ms;
  --hover-dur: 240ms;
  --cell-gap: 4px;
  --cell-radius: 4px;
}
```

---

## 八、套用到「博客」的映射

| Athens 原件 | 博客对应 | 保留的效果 |
|-------------|---------|-----------|
| Rive Hero 满行砖 | 博客 Hero 砖（站点标语 / 主理人寄语） | 入场淡入；可用静态首图替代 Rive |
| Facts 事实卡 | 「关于 / 数据」砖（文章数、主题、起始年） | 裱框 box-shadow、字母编号 |
| 希腊柱寄语 | 博客宣言 / slogan 柱 | column-settle 浮起 + 卷纹 sweep |
| Packing 罗马数字清单 | **文章目录**（I、II、III… 编号文章） | 逐行揭示、双列、面板底 |
| Itinerary 日程时间线 | **单篇文章正文**（时间/小标题 + 段落） | sticky 头、虚线分隔、逐段揭示 |
| 浮雕视觉砖（金属扫光） | **文章封面图砖** | ⭐ 鼠标金属扫光 + 视差（招牌交互） |
| 唱片机 | 音频/播客文章入口（可选） | 旋转 + 播放 |
| Phrasebook 短语 | 标签云 / 速查砖（可选） | 酒器图标、错峰揭示 |
| FAQ 手风琴 | 「关于本站」常见问题 | details 展开、+→× |
| blank 浮雕砖 | 文章列表间的视觉穿插砖 | 拼贴节奏 |

**栅格不变**：博客首页 = 3 列砖墙，文章卡 + 浮雕砖交替；文章详情 = 借用 itinerary 的时间线版式承载正文。

---

## 九、复刻与版权说明

- 本工程为**自有博客**，复用的是上表的**设计语言**（颜色值、字号、缓动、栅格规则、交互手法、shader 参数）——这些是设计**参数与思想**。
- 招牌的 GLSL shader 与 CSS 将**基于这些参数重新实现**到本工程（而非逐字拷贝原 study-clone 源码），做到**视觉与交互一致**。
- 浮雕贴图 / Rive / 字体等**资产**原 repo 未提供（占位为空），复刻时需自备或用工具生成（法线图、遮罩图可由封面图程序生成）。
- 字体：Albert Sans 可走 Google Fonts；Albertus Nova / ABC Stefan 为商业字体，需自备授权或用相近替代（如 `Albertus`、`Cinzel`、`Optima` 风格替代）。
```
