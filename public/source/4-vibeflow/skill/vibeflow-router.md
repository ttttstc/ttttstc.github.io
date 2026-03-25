# vibeflow-router — 会话路由器

## 概述

`vibeflow-router` 在会话开始时路由整个 VibeFlow 生命周期的工作。它通过检查文件系统状态来确定当前所在的阶段。

---

## 核心原理

路由器基于**文件存在性**来判断当前阶段，这是 VibeFlow"确定性路由"的核心：

```
文件状态 ──▶ 阶段 ──▶ 下一步操作
```

---

## 阶段检测

| 阶段 | 检测文件 |
|------|---------|
| Think | 无 `.vibeflow/state.json` |
| Plan | `docs/changes/<change-id>/context.md` 存在 |
| Requirements | `docs/changes/<change-id>/proposal.md` 存在 |
| Design | `docs/changes/<change-id>/requirements.md` 存在 |
| Build | `docs/changes/<change-id>/design.md` 存在 + `feature-list.json` 存在 |
| Review | `feature-list.json` 所有功能 passing |
| Test | `.vibeflow/` 目录结构完整 |
| Ship | 测试通过 |
| Reflect | 发布完成 |

---

## 状态文件

### state.json

```json
{
  "phase": "build",
  "mode": "full",
  "change_id": "2026-03-21-sample-priority-api",
  "active_features": ["auth", "api"],
  "last_updated": "2026-03-21T10:30:00Z"
}
```

### runtime.json

记录 Build 后自动执行链路的当前动作、友好提示、最近事件和 heartbeat。

---

## 使用方式

路由器通常由 `vibeflow` 框架自动调用，但也可以单独使用：

```
在会话开始时，路由器检查当前状态，决定下一步操作
```

---

## 自动继续机制

进入 `build-init` 后，路由器会自动继续后续链路：

```
build-init → build-config → build-work → review → test → ship → reflect
```

直到 `done`、阻塞、或需要人工确认才会停止。
