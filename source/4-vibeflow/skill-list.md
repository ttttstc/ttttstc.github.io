# VibeFlow Skill 详解

本文档详细介绍 VibeFlow 框架中所有 Skill 的职责、调度关系和使用场景。

---

## 技能调度关系

VibeFlow 的 Skill 调用遵循确定性路由原则。Router 检查文件系统状态，决定下一步调用哪个 Skill。

### 调用流程图

```
┌─────────────────────────────────────────────────────────────┐
│                      用户触发 /vibeflow                      │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   vibeflow-router                          │
│            检查 .vibeflow/state.json                       │
│            确定当前阶段 → 调用对应 Skill                      │
└─────────────────────────────────────────────────────────────┘
                              │
          ┌───────────────────┼───────────────────┐
          ▼                   ▼                   ▼
     ┌─────────┐        ┌─────────┐        ┌─────────┐
     │  Think  │        │   Plan  │        │  Build  │
     │  阶段   │        │   阶段   │        │   阶段   │
     └────┬────┘        └────┬────┘        └────┬────┘
          │                   │                   │
          ▼                   ▼                   ▼
    vibeflow-think      vibeflow-plan        build-init
                              │                   │
                              ▼                   ▼
                       ┌─────────────┐     ┌───────────┐
                       │ Plan 子技能 │     │build-work │
                       └─────────────┘     └─────┬─────┘
                              │                   │
          ┌───────────────────┤                   │
          ▼                   ▼                   ▼
    vibeflow-requirements ┌──────────────────────────┐
          │                │                          │
          ▼                ▼                          ▼
    vibeflow-design   vibeflow-plan-          vibeflow-tdd
          │           value-review                  │
          ▼                │                       ▼
    ┌─────────────┐       │                vibeflow-quality
    │ Design 子技能│       ▼                       │
    └──────┬──────┘  [FAIL → 终止]         vibeflow-feature-st
           │                                      │
           ▼                                      ▼
    ┌──────────────────────────┐         ┌──────────────┐
    │plan-eng-review           │         │spec-review   │
    │plan-design-review        │         └──────┬───────┘
    └──────────────────────────┘                │
                                               ▼
                                        ┌───────────┐
                                        │ 下一功能   │
                                        └─────┬─────┘
                                              │
                                    [全部完成] ▼
                                        ┌───────────┐
                                        │  Review   │
                                        └─────┬─────┘
                                              │
                                              ▼
                                        ┌───────────┐
                                        │   Test    │
                                        └─────┬─────┘
                                              │
                                    [可选] ▼   ▼
                                        Ship  Reflect
```

### 关键路由规则

| 当前状态 | 路由到的 Skill |
|----------|---------------|
| 无 context.md | vibeflow-think |
| 有 context.md，无 workflow.yaml | vibeflow-plan |
| 有 workflow.yaml，无 requirements.md | vibeflow-requirements |
| 有 requirements.md，无 design.md | vibeflow-design |
| 有 design.md，无 feature-list.json | vibeflow-build-init |
| 有 feature-list.json | vibeflow-build-work |
| Build 完成 | vibeflow-review |
| Review 完成 | vibeflow-test-system |
| Test 完成 | vibeflow-ship（可选）|
| Ship 完成 | vibeflow-reflect（可选）|

---

## Skill 目录

### 核心层

#### [vibeflow](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow/SKILL.md)

框架入口 Skill。运行 `/vibeflow` 启动或继续工作流。

**职责**：
- 显示欢迎信息和快速开始指南
- 检测项目状态，引导到对应阶段
- 提供帮助信息

**调度**：`/vibeflow` 命令直接触发

---

#### [vibeflow-router](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-router/SKILL.md)

会话路由器，基于文件状态分派到正确阶段。

**职责**：
- 读取 `.vibeflow/state.json` 确定当前阶段
- 调用对应阶段的 Skill
- 维护工作流状态

**调度**：由框架自动调用，或 `/vibeflow` 时触发

**状态检测逻辑**：
```python
# get-vibeflow-phase.py
if not context_exists():
    return 'think'
elif not workflow_yaml_exists():
    return 'template-selection'
elif not requirements_exists():
    return 'plan'
# ... 以此类推
```

---

#### [vibeflow-think](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-think/SKILL.md)

Think 阶段：问题框定和模板选择。

**职责**：
- 定义问题陈述
- 扫描约束条件
- 推荐工作流模板

**产出**：`docs/changes/<change-id>/context.md`

**可選 Skill**：`vibeflow-office-hours`（YC 风格头脑风暴）

---

### 计划层

#### [vibeflow-plan](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-plan/SKILL.md)

Plan 阶段入口，整合价值评审、需求和技术设计。

**职责**：
- 协调 Plan 阶段的所有子步骤
- 管理阶段转换

**子技能调度**：
```
vibeflow-plan
    ├── vibeflow-plan-value-review（关卡）
    ├── vibeflow-requirements
    └── vibeflow-design
          ├── vibeflow-plan-eng-review
          └── vibeflow-plan-design-review
```

---

#### [vibeflow-plan-value-review](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-plan-value-review/SKILL.md)

CEO 视角价值评审，唯一的 fail-fast 关卡。

**评审维度**：
- 现实扭曲场——痛点是否真实
- 第一性原理——根因是否正确
- 10 倍改进——是否比现状好一个量级
- 最窄突破口——切入点是否足够细
- 观察者视角——是否考虑竞争和替代
- 退出策略——失败了怎么办

**关键规则**：评审失败 = 项目终止

**产出**：`docs/changes/<change-id>/proposal.md`

---

#### [vibeflow-requirements](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-requirements/SKILL.md)

需求规格说明书编写，遵循 ISO/IEC/IEEE 29148。

**职责**：
- 编写 SRS 文档
- 逐条与用户确认需求
- 每条需求必须可测试

**需求格式**：
```
## REQ-<id>: <需求标题>

**类型**：Functional | Non-Functional | Constraint
**优先级**：Must | Should | Could | Won't

**Given** <前置条件>
**When** <操作>
**Then** <预期结果>
```

**产出**：`docs/changes/<change-id>/requirements.md`

---

#### [vibeflow-design](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-design/SKILL.md)

技术设计文档编写，含 UCD 和三视角评审。

**职责**：
- 编写技术设计文档
- 内联 UCD（用例图）
- 协调三视角评审

**设计步骤**：
1. 读取 SRS + UCD
2. 探索上下文
3. 提出方案（至少 2 个对比）
4. 用户逐节审批
5. AI 工程评审
6. AI 设计评审
7. 范围决策
8. 编写设计文档

**产出**：`docs/changes/<change-id>/design.md`

---

#### [vibeflow-plan-eng-review](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-plan-eng-review/SKILL.md)

工程视角评审，检查技术可行性。

**评审维度**：
- 架构设计
- 技术选型
- 数据模型
- API 设计
- 安全
- 性能
- 可维护性

**调度时机**：Design 阶段 Step 5.1

---

#### [vibeflow-plan-design-review](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-plan-design-review/SKILL.md)

设计视角评审，检查用户体验。

**评审维度**：
- 用户体验
- 信息架构
- 交互设计
- 视觉设计
- 响应式设计
- 加载与性能感知

**调度时机**：Design 阶段 Step 5.2

---

### 构建层

#### [vibeflow-build-init](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-build-init/SKILL.md)

Build 阶段初始化。

**职责**：
- 创建脚手架文件
- 初始化 feature-list.json
- 创建运行时配置

**产出**：
- `.vibeflow/state.json`
- `.vibeflow/runtime.json`
- `feature-list.json`
- `.vibeflow/logs/session-log.md`

**关键机制**：进入此阶段后，系统默认自动继续后续链路

---

#### [vibeflow-build-work](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-build-work/SKILL.md)

单功能编排器，驱动 TDD 循环。

**职责**：
- 编排单个功能的完整实现
- 管理 TDD 循环
- 调用 Quality Gates

**两种执行模式**：
- **Sequential**：每次循环一个功能
- **Parallel**：依赖感知并行（使用 Agent 工具）

**执行流程**：
```
build-work
    ├── TDD 循环（vibeflow-tdd）
    │     Red → Green → Refactor
    │
    ├── Quality Gates（vibeflow-quality）
    │     覆盖率 + 变异测试
    │
    ├── Feature-ST（vibeflow-feature-st）
    │     功能验收测试
    │
    └── Spec-Review（vibeflow-spec-review）
          规范合规审查
```

---

#### [vibeflow-tdd](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-tdd/SKILL.md)

TDD Red-Green-Refactor 循环。

**铁律**：没有失败测试就没有实现代码

**循环**：
```
Red    → 编写一个会失败的测试
Green  → 写最少的代码让测试通过
Refactor → 重构代码
```

---

#### [vibeflow-quality](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-quality/SKILL.md)

质量门禁，检查覆盖率指标。

**门禁指标**（按模板）：

| 模板 | 行覆盖率 | 分支覆盖率 | 变异分数 |
|------|---------|------------|---------|
| Prototype | 60% | 40% | 50% |
| Web-Standard | 90% | 80% | 80% |
| API-Standard | 90% | 80% | 80% |
| Enterprise | 95% | 85% | 85% |

---

#### [vibeflow-feature-st](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-feature-st/SKILL.md)

功能级验收测试，基于 Given/When/Then。

**职责**：
- 验证功能是否满足 SRS 需求
- 与 Spec-Review 并行执行

**测试格式**：
```
### TC-<id>: <测试场景>

**前置条件**：...
**操作**：...
**预期结果**：...
```

---

#### [vibeflow-spec-review](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-spec-review/SKILL.md)

规范合规审查，检查是否符合设计文档。

**职责**：
- 验证实现是否符合 SRS
- 验证实现是否符合 Design
- 与 Feature-ST 并行执行

**评审维度**：
- 需求合规性
- 设计合规性
- 变更范围

---

### 安全护栏

安全护栏是可选的，可以按需启用。

#### [vibeflow-careful](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-careful/SKILL.md)

危险命令警告。

**监控命令**：rm -rf、DROP TABLE、git reset --hard 等

---

#### [vibeflow-freeze](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-freeze/SKILL.md)

编辑边界限制，限制 Edit/Write 在指定目录。

---

#### [vibeflow-guard](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-guard/SKILL.md)

最大安全模式，组合 careful + freeze。

---

#### [vibeflow-unfreeze](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-unfreeze/SKILL.md)

解除冻结，恢复正常编辑权限。

---

### 验证与发布层

#### [vibeflow-review](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-review/SKILL.md)

跨功能整体变更审查。

**审查维度**：
- 架构一致性
- 安全性
- 性能
- 可维护性

**产出**：`docs/changes/<change-id>/verification/review.md`

---

#### [vibeflow-test-system](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-test-system/SKILL.md)

系统级集成测试和 NFR 验证。

**测试类型**：
- 集成测试
- E2E 测试
- NFR 验证
- 探索性测试

**产出**：`docs/changes/<change-id>/verification/system-test.md`

---

#### [vibeflow-test-qa](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-test-qa/SKILL.md)

浏览器驱动的 QA 验证（仅 UI 项目）。

**职责**：
- 自动化 UI 测试
- 截图对比
- 问题分级

**产出**：`docs/changes/<change-id>/verification/qa.md`

---

#### [vibeflow-ship](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-ship/SKILL.md)

版本发布（可选）。

**职责**：
- 生成 Release Notes
- 创建版本标签
- 更新 CHANGELOG
- 推送发布

**产出**：
- `RELEASE_NOTES.md`
- `<version-tag>`
- PR/MR

---

#### [vibeflow-reflect](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-reflect/SKILL.md)

迭代回顾（可选）。

**职责**：
- 创建回顾文档
- 总结做得好的和需要改进的
- 产出下次迭代的行动项

**产出**：`.vibeflow/logs/retro-YYYY-MM-DD.md`

---

### 辅助探索层

#### [vibeflow-office-hours](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-office-hours/SKILL.md)

YC Office Hours 风格头脑风暴（可选，Think 之前）。

**六个核心问题**：
1. 现实扭曲场——你的痛点真的存在吗
2. 第一性原理——根本原因是什么
3. 10 倍改进——能不能好 10 倍
4. 最窄突破口——最小切入点是什么
5. 观察者视角——局外人怎么看
6. 退出策略——如果失败了怎么办

---

#### [vibeflow-brainstorming](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-brainstorming/SKILL.md)

问题探索（可选，Design 之前）。

**探索维度**：
- 问题定义
- 利益相关者
- 约束条件
- 解决方案探索
- 风险与机会

---

## 快速参考

| 阶段 | Skill | GitHub |
|------|-------|--------|
| 入口 | vibeflow | [链接](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow/SKILL.md) |
| 路由 | vibeflow-router | [链接](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-router/SKILL.md) |
| Think | vibeflow-think | [链接](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-think/SKILL.md) |
| Plan | vibeflow-plan | [链接](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-plan/SKILL.md) |
| Plan 关卡 | vibeflow-plan-value-review | [链接](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-plan-value-review/SKILL.md) |
| 需求 | vibeflow-requirements | [链接](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-requirements/SKILL.md) |
| 设计 | vibeflow-design | [链接](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-design/SKILL.md) |
| 工程评审 | vibeflow-plan-eng-review | [链接](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-plan-eng-review/SKILL.md) |
| 设计评审 | vibeflow-plan-design-review | [链接](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-plan-design-review/SKILL.md) |
| Build 初始化 | vibeflow-build-init | [链接](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-build-init/SKILL.md) |
| Build 执行 | vibeflow-build-work | [链接](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-build-work/SKILL.md) |
| TDD | vibeflow-tdd | [链接](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-tdd/SKILL.md) |
| 质量门禁 | vibeflow-quality | [链接](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-quality/SKILL.md) |
| 功能验收 | vibeflow-feature-st | [链接](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-feature-st/SKILL.md) |
| 规范审查 | vibeflow-spec-review | [链接](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-spec-review/SKILL.md) |
| 全局审查 | vibeflow-review | [链接](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-review/SKILL.md) |
| 系统测试 | vibeflow-test-system | [链接](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-test-system/SKILL.md) |
| QA 测试 | vibeflow-test-qa | [链接](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-test-qa/SKILL.md) |
| 发布 | vibeflow-ship | [链接](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-ship/SKILL.md) |
| 回顾 | vibeflow-reflect | [链接](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-reflect/SKILL.md) |
| 头脑风暴 | vibeflow-office-hours | [链接](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-office-hours/SKILL.md) |
| 问题探索 | vibeflow-brainstorming | [链接](https://github.com/ttttstc/vibeflow/blob/main/skills/vibeflow-brainstorming/SKILL.md) |
