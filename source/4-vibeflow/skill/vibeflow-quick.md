# vibeflow-quick — 快速开发模式

## 概述

`vibeflow-quick` 是 Quick Mode 的快捷入口。适用于 Bug fix、小改动等低风险工作。

---

## 适用场景

- Bug fix 或 hot fix
- 小改动、单文件修改
- 配置文件更新
- 测试文件编写
- 文档更新

---

## 关键约束

- 只适合**小范围、低风险、可快速回滚**的工作
- 需要在 `.vibeflow/state.json` 中写明 `quick_meta`
- 需要最小产物：`docs/changes/<change-id>/design.md` 和 `tasks.md`
- 仍然必须经过 Review 和 Test

---

## 与 Full Mode 的区别

| 方面 | Quick Mode | Full Mode |
|------|------------|-----------|
| 前置分析 | 大幅压缩 | 完整执行 |
| 文档要求 | 最小产物 | 完整文档 |
| 适用场景 | Bug fix、小改动 | 新功能、架构变更 |

---

## 使用方式

```
/vibeflow-quick
```

直接进入 Quick Mode，不再额外询问模式选择。

---

## 注意事项

- 不要用 Quick Mode 做复杂功能开发
- 即使是 Quick Mode，也不能跳过测试
- 如果工作范围变大，及时切换到 Full Mode
