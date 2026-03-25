# vibeflow-build-work — 功能编排

## 概述

`vibeflow-build-work` 驱动功能通过完整 TDD 管线、质量门禁和代码审查。每次循环实现一个功能。

---

## 核心原理

每次循环遵循严格管线：**Orient → Gate → Plan → TDD → Quality → ST 验收 → Review → Persist**

---

## 两种执行模式

### Sequential（顺序执行）

每次循环一个功能，主会话上下文顺序执行。

**适用场景**：
- 调试阶段，需要逐步观察
- 小项目（< 5 个 feature）
- 依赖关系复杂的场景

### Parallel（并行执行）

使用 Agent 工具同时启动多个 subagent，每个 subagent 在独立 200k token 上下文中执行一个 feature。

**适用场景**：
- 中大项目（≥ 5 个 feature）
- feature 之间无文件重叠
- 需要快速完成多个独立功能

---

## 执行流程

```
1. Orient（定位）
   - 加载 .env
   - 读取 feature-list.json
   - 读取 session-log.md
   - 选取下一个 failing 功能

2. Bootstrap（引导）
   - 确认开发环境就绪
   - 冒烟测试已通过的功能

3. Config Gate（配置门禁）
   - 检查 required_configs 是否齐备

4. Plan（计划）
   - 为选定功能编写逐步实现计划

5-7. TDD 循环（Red → Green → Refactor）
   - 读取 vibeflow-tdd 执行

8. Quality Gates（质量门禁）
   - 读取 vibeflow-quality 执行

9-10. ST 验收 + 规范审查（并行）
   - Feature-ST 和 Spec-Review 并行执行

11. 添加示例
   - 在 examples/ 中创建可运行示例

12. Persist（持久化）
   - Git 提交
   - 更新 RELEASE_NOTES.md
   - 更新 session-log.md
   - 标记 feature 为 passing

13. Continue（继续）
   - 如还有 failing 功能 → 继续下一功能
   - 如无 failing 功能 → 进入 Review
```

---

## 产出物

- 源代码和测试文件
- `feature-list.json` 更新
- `.vibeflow/logs/session-log.md` 更新
- `RELEASE_NOTES.md` 更新

---

## 注意事项

- 每次循环一个功能，防止上下文耗尽
- 严格步骤顺序，不跳过不重排
- 配置门禁在计划前，缺配置时不计划不编码
