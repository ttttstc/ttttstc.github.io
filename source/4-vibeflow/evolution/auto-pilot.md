# 文档完善 + 项目理解

**2026 年 3 月 26 日**

---

最近的工作集中在几个方向：文档完善、Build 继续机制增强、代码库理解。

### Build 继续机制增强

```bash
de83c6a fix: preserve legacy build-init readiness
```

之前的 build-init readiness 状态在某些边界情况下会丢失。今天修了这个问题。

同时更新了 build 相关的文档，让继续机制更清晰。

### 文档精简

```bash
88e1091 docs: reduce internal workflow jargon
```

之前的文档里有太多内部术语，新人看不懂。

精简了一批文档：
- 移除了不必要的缩写
- 统一了术语表
- 加了更多解释性文字

### 项目概览文档

```bash
bb468de feat: add project overview docs layer
```

这是最近最重要的文档更新。加了 `docs/overview/` 层：

**PROJECT.md**
- 项目简介
- 当前上下文（greenfield / evolve）
- 关键目录说明

**PRODUCT.md**
- 产品能力
- 用户流程
- 非目标（明确不做什么）

**ARCHITECTURE.md**
- 技术快照
- 主要模块
- 入口点

**CURRENT-STATE.md**
- 当前模式（full / quick）
- 当前阶段
- 活跃变更
- 交付快照

这个改动让新人能快速了解项目上下文，不用从一堆文件里摸索。

### 安装文档

```bash
a26a551 docs: add update and uninstall guide
```

之前只有安装说明，没有更新和卸载指南。今天补上了。

**更新流程**：
```bash
curl -fsSL https://raw.githubusercontent.com/ttttstc/vibeflow/main/claude-code/install.sh | bash
```

**卸载流程**：
1. 关闭 Claude Code
2. 删除 marketplace 目录
3. 从 `known_marketplaces.json` 移除 `vibeflow`
4. 重新打开 Claude Code

### README 改进

```bash
9a57165 docs: point architecture docs to deepwiki
```

架构文档指向了 DeepWiki，有更详细的图解。

```bash
f14f754 docs: focus install guide on claude code
```

安装指南聚焦在 Claude Code 环境，更精准。

### 安装器统一

```bash
62cdbf9 feat: consolidate installers across hosts
```

之前 Windows 和 Unix 的安装脚本是分开的。今天合并了，减少维护成本。

### 验证架构

VibeFlow 有自己的验证项目：

```
validation/sample-priority-api/
```

用这个小项目验证 VibeFlow 流程是否管用。

验证属性：
- 工作流从 Think 开始
- workflow.yaml 和 work-config.json 可以外部生成
- 规划产物可以在目标项目中生成
- 路由能识别 build/test/release 产物

### 框架现状

经过 6 天开发，VibeFlow 核心功能已经完整：

**7 阶段流程**：Think → Plan → Requirements → Design → Build → Review → Test → Ship/Reflect

**23 个 Skill**：核心层、计划层、构建层、安全护栏、验证发布层

**4 种模板**：Prototype、Web-Standard、API-Standard、Enterprise

**关键特性**：
- 文件即状态
- 确定性路由
- Auto Pilot 自动继续
- Parallel Mode 依赖感知构建
- Live Dashboard 实时展示

### 下一步

框架基本功能已经完整。接下来要做的是：

**1. 在真实项目里验证**
目前只有 validation 项目在跑。需要在真实的、复杂的项目里验证框架效果。

**2. 收集用户反馈**
目前是单人开发，需要其他人的视角来发现盲点。

**3. 完善 Skill 文档**
有些 Skill 的文档还比较简略，需要补充更多细节。

**4. 优化 DX（开发者体验）**
- 安装流程可以更顺
- 错误提示可以更清晰
- 看板可以更实时

**5. 探索更多自动化**
Auto Pilot 只是个开始。能不能让更多环节自动化？

### 感想

从 3 月 21 日到现在，6 天时间，VibeFlow 从一个想法变成了有完整框架的项目。

最让我意外的是：**很多设计决策是在使用过程中才发现问题的**。

比如：
- 16 阶段太繁琐 → 压缩成 7 阶段
- 蛮干并行有问题 → 依赖感知并行
- 没有 Dashboard 看不清进度 → 加 Live Dashboard

纸上设计得再好，也不如实际跑一遍发现问题快。

这就是 VibeFlow 的价值：**用工程纪律约束 AI 开发，同时用 AI 开发推动工程纪律的完善**。

---

*—— VibeFlow 持续迭代中，框架基本完整*