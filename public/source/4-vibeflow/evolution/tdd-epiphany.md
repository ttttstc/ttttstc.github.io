# 框架确立：16 阶段 → 7 阶段

**2026 年 3 月 23 日**

---

今天是框架历史上最重要的重构日。16 阶段压缩成 7 阶段，Quick Mode 上线。

### 为什么压缩

之前的 16 阶段太繁琐了：

```
Think → Plan → Scope → Requirements → Design → Implement → Test → Review → Ship → Reflect
... 加上各种子阶段：value-review, eng-review, design-review, scope-review...
```

用户要记太多东西，判断"完成"太复杂。

举个子例子：什么时候该从 Plan 进入 Scope？Scope 和 Requirements 的区别是什么？边界不清楚。

我开始怀疑：**是不是阶段太多了？**

### 怎么压的

PR #21 做了这个重构：

```bash
608f073 refactor: 16阶段 → 7阶段框架
```

压缩后的 7 阶段：
```
Think → Plan → Requirements → Design → Build → Review → Test → Ship/Reflect
```

核心变化：

**1. 去掉 Scope 阶段**
之前 Scope 定义范围、Plan 做价值评审，这两个边界很模糊。
合并后，Plan 阶段同时负责范围定义和价值评审。

**2. 去掉 Implement 阶段**
之前 Implement 是写代码的阶段，后来发现这就是 Build 的一部分。
合并后，Build 阶段包含"写代码"这件事。

**3. Ship 和 Reflect 变成可选**
之前这两个是必执行的，现在可选。有些变更不需要发布（比如内部重构），为什么强制跑？

**4. 三视角评审内联到 Design**
之前 eng-review 和 design-review 是在 Plan 阶段做的。
问题是：没有具体设计稿，评审只能评审抽象方向，没意义。
改到 Design 阶段末尾，有具体设计稿了再评审。

### Plan/Design 阶段重构

同一天还做了这个：

```bash
cf865a0 feat: 重构 plan/design 阶段 — 集成 eng/design review + UCD 内联
```

Plan 阶段瘦身：
- 移除 Plan 阶段的 eng/design review（无具体设计稿时只能评审抽象方向）
- 只保留 CEO 价值评审（唯一关卡，fail-fast gate）

Design 阶段重构：
- 步骤 0：问题探索（可选 brainstorming）
- 步骤 1：读取 SRS + 生成 UCD（用例图）
- 步骤 2：探索上下文
- 步骤 3：提出方案（至少 2 个对比）
- 步骤 4：用户逐节审批
- 步骤 5：AI 工程评审 + AI 设计评审（有具体设计稿了）
- 步骤 6：范围决策（Expand / Hold / Reduce）
- 步骤 7：编写设计文档

### Quick Mode 上线

这是个重大功能：

```bash
aeb8daf feat: add Quick Mode for fast development
```

**解决的问题**：不是每个改动都值得跑完整流程。

Bug fix、小改动、配置文件更新——这些场景跑完整流程反而累赘。

Quick Mode 的设计原则：
- 跳过部分评审环节
- 降低覆盖率门槛
- 快速实现 → 快速验证

Full Mode vs Quick Mode 的选择由用户在第一次运行时决定，或者通过 `/vibeflow-quick` 直接进入。

### 安装体验增强

```bash
cb1295a feat: 安装体验增强 + 诊断工具 + 文档完善
```

之前安装只有一种方式：`git clone`。今天加了三种安装脚本：

**1. install-simple.ps1**
ZIP 下载安装，不需要 git。适合 Windows 用户不想装 git 的场景。

**2. vibeflow-launcher.ps1**
一键启动器，下载安装一条龙。目标是"下载完就能用"。

**3. debug-install.ps1**
诊断工具，检查安装问题：
- 检查 known_marketplaces.json 是否注册
- 验证 marketplace 目录和文件是否存在
- 验证核心 Skill 是否存在
- 报告清晰的通过/失败状态

### TDD 的决定

Build 阶段强制 TDD：Red → Green → Refactor。

没有失败测试就不写实现代码——这是铁律。

但 TDD 在 AI 编程里有特殊问题：**AI 生成的测试本身可能是错的**。

解决方案：Quality Gates。加了三道门：
1. 单元测试覆盖率（行覆盖）
2. 分支覆盖率
3. 变异测试分数

覆盖率不能保证测试正确，但能保证测试"跑到了"关键代码。

### 走的弯路

**弯路一：Plan 阶段的评审太早**

之前在 Plan 阶段就做 eng/design review，结果评审的内容太抽象，没法给出具体意见。

改成 Design 阶段末尾再做，因为那时候有具体设计稿了。

**弯路二：Ship 和 Reflect 不是每次都需要**

之前把 Ship 和 Reflect 设计成必执行阶段。但有时候只是内部重构，不需要发布。

改成可选：模板决定是否执行。

**弯路三：安装方式太单一**

之前只有 git clone 一种方式。Windows 用户或者不想装 git 的人用不了。

加了 ZIP 安装和启动器，解决这个问题。

---

*—— VibeFlow 框架确立，16 阶段压成 7 阶段，Quick Mode 上线*