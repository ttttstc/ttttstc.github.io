# Advanced - 高级特性

## 概述

本章介绍 VibeFlow 的高级特性，包括 Quick Mode、Live Dashboard、自动继续驾驶等。

---

## Quick Mode vs Full Mode

VibeFlow 支持两种工作模式，在项目开始时选择：

### Full Mode

适用场景：
- 新功能开发
- 架构重构
- 重要系统变更

特点：
- 完整流程：Think → Plan → Requirements → Design → Build → Review → Test
- 严格的质量门禁
- 完整的文档和评审

### Quick Mode

适用场景：
- Bug fix
- 配置文件更新
- 小范围改动
- 可快速回滚的变更

特点：
- 简化评审流程
- 降低覆盖率门槛
- 快速实现 → 快速验证

### 选择原则

不确定时，**优先选 Full Mode**。

Quick Mode 只适合满足以下条件时使用：
1. 改动范围明确且小
2. 风险可控
3. 可以快速回滚
4. 不涉及核心架构

### 模式切换

运行 `/vibeflow` 时系统会提示选择模式。如果项目已有 `.vibeflow/state.json`，会沿用已有模式。

直接运行 `/vibeflow-quick` 可直接进入 Quick 流程。

---

## Live Dashboard

VibeFlow 提供实时看板，让你不需盯着 `state.json` 猜系统跑到哪了。

### 命令

| 命令 | 说明 |
|------|------|
| `/vibeflow-dashboard` | 打开本地 live 看板 |
| `python scripts/run-vibeflow-dashboard.py` | 脚本方式启动看板 |
| `python scripts/run-vibeflow-dashboard.py --snapshot-json` | 打印一次看板快照 |

### 看板内容

看板展示：
- 当前 mode 和 phase
- 各功能状态（pending/in-progress/passing/failing）
- Build 进度和阻塞点
- 下一步建议操作

### 状态查看

```bash
python scripts/get-vibeflow-phase.py --project-root <repo> --json
```

---

## 自动继续驾驶

进入 `build-init` 后，系统默认开始自动继续后续链路。

### 执行链

```
build-init → build-config → build-work → review → test → ship/reflect
```

遇到阻塞时会暂停，等待人工处理。

### 手动接管

如果不想自动继续：

```bash
python scripts/run-vibeflow-autopilot.py --project-root <repo>
```

这会继续当前流程的单次推进。

### 阻塞处理

遇到以下情况系统会暂停：
1. 质量门禁失败（覆盖率不达标、测试失败）
2. 需要人工确认（Ship 前）
3. 外部依赖阻塞

---

## 代码库地图

VibeFlow 维护项目级代码结构地图，帮助 AI 理解代码库结构。

### 生成地图

```bash
python scripts/map-codebase.py --project-root <repo>
```

### 查看影响分析

```bash
python scripts/map-change-impact.py --project-root <repo> --change-id <change-id>
```

### 用途

代码库地图用于：
- 在 Requirements/Design 阶段引用代码上下文
- 帮助 AI 理解代码结构，避免破坏性修改
- 生成变更影响分析

---

## 验证安装

检查 VibeFlow 是否正确安装：

```bash
python scripts/get-vibeflow-phase.py
python scripts/get-vibeflow-phase.py --verbose
python scripts/test-vibeflow-setup.py --json
```

---

## 常用命令一览

| 需求 | 命令 |
|---|---|
| 开始或继续工作流 | `/vibeflow` |
| 快速处理小改动 | `/vibeflow-quick` |
| 查看当前状态摘要 | `/vibeflow-status` |
| 打开本地 live 看板 | `/vibeflow-dashboard` |
| 脚本方式启动看板 | `python scripts/run-vibeflow-dashboard.py` |
| 脚本方式打印快照 | `python scripts/run-vibeflow-dashboard.py --snapshot-json` |
| 脚本方式继续流程 | `python scripts/run-vibeflow-autopilot.py --project-root <repo>` |
| 检测当前阶段 | `python scripts/get-vibeflow-phase.py --project-root <repo> --json` |
| 生成代码库地图 | `python scripts/map-codebase.py --project-root <repo>` |
| 生成变更影响分析 | `python scripts/map-change-impact.py --project-root <repo> --change-id <id>` |
| 验证安装 | `python scripts/test-vibeflow-setup.py --json` |

---

## 下一步

- 深入学习 [Skill 详解](/vibeflow/tutorial/skills) 掌握每个超能力
- 阅读 [演进日记](/vibeflow/evolution) 了解 VibeFlow 的成长历程
