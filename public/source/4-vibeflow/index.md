# VibeFlow 产品介绍

**让 AI 按工程纪律交付软件，而不是随机开写。**

---

## 什么是 VibeFlow

VibeFlow 是一个面向 Claude Code 的结构化交付框架。它把需求、设计、实现、审查、测试、发布和复盘串成一条可恢复、可追踪、可自动继续的工作流。

VibeFlow 让 AI 不只是"会写代码"，而是能把一轮完整交付做稳。

> 先把事情想清楚，再让系统把后半程做完。

---

## 核心能力

### 结构化交付流程

```
Think → Plan → Requirements → Design → Build → Review → Test → Ship / Reflect
```

- 前半程你拍板（决策阶段）
- 后半程系统自己推进（自动继续）
- 卡住了再回来问你

### 文件即状态

VibeFlow 把状态留在仓库里，而不是留在一次聊天里：

- `.vibeflow/state.json` — 当前阶段、模式、活跃工作包
- `.vibeflow/runtime.json` — Build 后自动执行的当前动作
- `docs/changes/<change-id>/...` — 每轮交付的上下文
- `feature-list.json` — 功能清单主索引

关掉会话还能继续，换机器还能继续，换 AI 也能继续。

### Build 后自动继续

设计确认后，系统不会让你继续手动点一串 Build 子步骤。

默认行为是：

- 进入 `build-init`
- 自动继续 `build-config -> build-work -> review -> test -> ship -> reflect`
- 直到完成、阻塞，或遇到需要你确认的地方

### 更稳的实现链路

Build 不是"把整份长上下文硬塞给 AI 再赌它别漂"。当前支持：
- feature 级实施输入
- 依赖感知构建
- 安全回退到串行执行
- Review 中区分"做得对不对"和"代码写得稳不稳"

### 现有项目也能用

VibeFlow 不只适合新项目，也适合在已有仓库上持续做改动。

它现在已经能：
- 维护项目级代码结构地图
- 为本次变更生成影响分析
- 在 Requirements / Design 阶段引用这些上下文

### 本地 live 看板

不需要盯着 `state.json` 和一堆 markdown 文件猜系统跑到哪了。

用 `/vibeflow-dashboard` 打开本地看板，实时展示：
- 当前 mode 和 phase
- 各功能状态
- Build 进度和阻塞点

---

## 两种工作模式

| 模式 | 何时用 | 特点 |
|------|--------|------|
| **Full Mode** | 新功能、架构变更、重要系统改动 | 完整流程，Think → Plan → Requirements → Design → Build → Review → Test |
| **Quick Mode** | Bug fix、小改动、配置文件更新 | 跳过部分评审，快速实现 |

建议：
- 不确定时优先选 `Full Mode`
- 只有小范围、低风险、可快速回滚的改动再用 `Quick Mode`

---

## 适用场景

| 模板 | 适用场景 | 覆盖率要求 |
|------|----------|-----------|
| Prototype | 黑客马拉松、POC、周末项目 | 60% |
| Web-Standard | 常规 Web 应用 | 90% |
| API-Standard | 纯后端 API 服务 | 90% |
| Enterprise | 企业级、合规系统 | 95% |

---

## 快速开始

### 安装

在 Claude Code 对话框中运行：

```text
/sh curl -fsSL https://raw.githubusercontent.com/ttttstc/vibeflow/main/claude-code/install.sh | bash
```

安装完成后激活：

```text
/plugin install vibeflow@vibeflow
```

### 验证安装

```text
/vibeflow
```

如果 Claude Code 能显示 VibeFlow 入口说明，说明插件已正常加载。

### 3 分钟上手

1. 安装并激活插件后，在项目里运行 `/vibeflow`
2. 第一次进入时选择 `Full Mode` 或 `Quick Mode`
3. 在 `Think -> Plan -> Requirements -> Design` 完成必要确认
4. 一旦进入 `build-init`，系统默认自动继续 `Build -> Review -> Test -> Ship / Reflect`
5. 想看进度时用 `/vibeflow-status` 或 `/vibeflow-dashboard`

---

## 常用命令

| 需求 | 命令 |
|---|---|
| 开始或继续工作流 | `/vibeflow` |
| 快速处理小改动 | `/vibeflow-quick` |
| 查看当前状态摘要 | `/vibeflow-status` |
| 打开本地 live 看板 | `/vibeflow-dashboard` |
| 脚本方式启动看板 | `python scripts/run-vibeflow-dashboard.py` |
| 脚本方式继续当前流程 | `python scripts/run-vibeflow-autopilot.py --project-root <repo>` |

---

## 下一步

- 查看 [架构介绍](/vibeflow/architecture) 了解 7 阶段架构和技术实现细节
- 开始 [教程学习](/vibeflow/tutorial) 深入掌握每个阶段的精髓
- 阅读 [演进日记](/vibeflow/evolution) 了解 VibeFlow 的成长历程
