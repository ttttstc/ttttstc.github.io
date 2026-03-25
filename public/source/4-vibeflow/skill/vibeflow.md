# vibeflow — 框架入口

## 概述

`vibeflow` 是 VibeFlow 框架的入口 Skill。运行 `/vibeflow` 开始新项目或继续现有工作流。

---

## 两种模式

### Quick Mode（快速开发）

**适用场景**：
- Bug fix 或 hot fix
- 小改动、单文件修改
- 配置文件更新
- 测试文件编写
- 文档更新

**关键约束**：
- 只适合小范围、低风险、可快速回滚的工作
- 需要在 `.vibeflow/state.json` 中写明 `quick_meta`
- 需要最小产物：`docs/changes/<change-id>/design.md` 和 `tasks.md`
- 仍然必须经过 Review 和 Test

**入口**：`/vibeflow-quick`

---

### Full Mode（完整流程）

**适用场景**：
- 新功能开发
- 架构变更
- 需要 UI/UX 设计的工作
- 重要系统变更（支付、认证等）
- 不确定复杂度的任务

**完整流程**：Think → Plan → Requirements → Design → Build → Review → Test → Ship → Reflect

**入口**：`/vibeflow`（选择 Full Mode）

---

## 入口规则

- **首次进入新项目**：如果 `.vibeflow/state.json` 不存在，必须先选择 `Full Mode` 或 `Quick Mode`
- **继续已有项目**：如果 `.vibeflow/state.json` 已存在，直接沿用其中的 `mode`
- **直达 Quick**：如果用户显式运行 `/vibeflow-quick`，直接进入 Quick 入口

对不明确的首次请求，默认推荐 `Full Mode`；只有在"小范围、低风险、可快速回滚"的改动下，才推荐 `Quick Mode`。

---

## 框架价值主张

| 价值 | 说明 |
|------|------|
| **目的性** | 每个阶段都有明确的进入标准和完成定义 |
| **质量关卡** | 功能不通过自动化和人工检查就无法推进 |
| **可追溯性** | 每个决策都有文档记录，每个功能都在 `feature-list.json` 中跟踪 |
| **迭代改进** | 反思阶段确保每次迭代都从前一次中学习 |
| **并行执行** | 通过 Agent 工具在关键环节并行执行互不依赖的子任务 |

---

## 前置条件检查

在任何 VibeFlow 工作开始之前，验证环境是否正确设置：

1. **验证仓库钩子已安装**
   ```bash
   ls -la .git/hooks/pre-commit
   ```

2. **验证 VibeFlow 设计文档存在**
   ```bash
   cat VIBEFLOW-DESIGN.md
   ```

3. **验证所有子技能都存在**
   ```bash
   ls skills/vibeflow-*/
   ```

4. **验证功能列表已初始化**（仅 Build 阶段）
   ```bash
   cat feature-list.json
   ```

---

## 硬规则

1. 当 `VIBEFLOW-DESIGN.md` 存在时，**始终在会话开始时读取 `skills/vibeflow-router/SKILL.md`**
2. **永不跳过阶段**：每个阶段都有必须在推进之前满足的进入标准
3. **在 Build 阶段维护 `feature-list.json`** 作为单一事实来源
4. **将所有工作流程技能保持在仓库内的 `skills/`** 下
5. **将 `VIBEFLOW-DESIGN.md` 视为仓库的产品契约**
