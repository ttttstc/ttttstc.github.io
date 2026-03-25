# 第一次结构化

**2026 年 3 月 22 日**

---

今天是实质性进展最大的一天。18 个 Skill 全部填满，还加了子代理并行执行。

### Skill 充实

昨天建的 Skill 都是占位符，今天把内容填上。

```bash
3fdfa42 Fill 16 skill shells with full implementations
```

18 个 Skill 全部有了完整实现：

**核心层**：
- vibeflow — 入口 Skill，提供欢迎信息和帮助
- vibeflow-router — 路由器，根据文件状态决定下一步
- vibeflow-think — Think 阶段，创建 context.md

**计划层**：
- vibeflow-plan — Plan 阶段入口
- vibeflow-scope — 范围定义（后来被合并）
- vibeflow-requirements — 需求规格说明书
- vibeflow-design — 技术设计

**构建层**：
- vibeflow-implement — 实现阶段（后来改名为 build-work）
- vibeflow-tdd — TDD 循环
- vibeflow-quality — 质量门禁

**验证发布层**：
- vibeflow-review — 整体审查
- vibeflow-test — 测试
- vibeflow-ship — 发布
- vibeflow-reflect — 回顾

还加了 YAML/YML 双扩展支持。Windows 用户文件名不区分大小写，这个兼容很重要。

### 子代理并行

同时提交了这个：

```bash
777c483 Add subagent parallel execution to Build, Review, and Test stages
```

这是第一次尝试并行执行。用 Claude Code 的 Agent 工具同时跑多个任务。

当时的实现很粗糙：
- 简单的 Promise.all 批量并发
- 没有依赖感知
- 没有冲突检测

好处是快，坏处是上下文窗口压力大，容易爆。

### Plan 阶段合并

下午做了这个：

```bash
1581a1e feat: merge into unified plan phase
```

把 value review 和 scope review 合并成一个统一的 Plan 阶段。之前是分开的两个 Skill，用户要跑两次。今天合成一个，减少交互次数。

### 走的弯路

**弯路一：Scope 阶段是多余的**

一开始设计了 Scope 阶段，想让用户定义项目范围。但实践中这个阶段跟 Plan 阶段的边界很模糊，用户不知道什么时候该用 Scope、什么时候该用 Plan。

最后决定：去掉 Scope 阶段，把范围定义并入 Plan。

**弯路二：子代理并行太简单**

当时的并行实现是"全部一起跑"，没有考虑依赖关系。结果经常出现：
- 依赖者先跑起来了，数据还没准备好
- 同一个文件被多个子代理同时修改，冲突

这个问题后来在 Parallel Mode 里才解决。

**弯路三：Skill 之间耦合太紧**

一开始 Skill 之间直接调用，比如 `vibeflow-plan` 直接 import `vibeflow-requirements`。这样改一个 Skill 容易影响另一个。

后来改成通过状态文件解耦：Plan 阶段完成后写入 `requirements.md`，Requirements 阶段自己检测到这个文件存在就去执行。

### 晚上的思考

今天的工作量很大，但暴露了几个问题：

1. **并行需要依赖感知** — 不能蛮干
2. **阶段之间要有清晰的边界** — 不能重叠
3. **Skill 要松耦合** — 通过文件交接，不是直接调用

这些教训后来都反映到了架构设计里。

### 代码审查反馈

```bash
2142fb3 fix: 修复 Codex review 发现的 3 个问题
```

Codex（现在的 Claude）review 了我的代码，提了 3 个问题：
- 变量命名不规范
- 错误处理不完善
- 一些边界情况没考虑

修了之后代码质量好很多。

---

*—— VibeFlow 第一次结构化，Skill 填满了，但暴露了不少问题*