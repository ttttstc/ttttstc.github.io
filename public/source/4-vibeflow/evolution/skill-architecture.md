# Skill 架构成型 + 并行构建

**2026 年 3 月 24 日**

---

今天是 Skill 架构的最终形态，加上 Parallel Mode 依赖感知构建。

### Skill 架构确定

VibeFlow 的 Skill 最终确定为 23 个，分成 5 层：

**核心层**（3）
- vibeflow — 入口，显示欢迎信息和帮助
- vibeflow-router — 路由器，读取 state.json 确定当前阶段
- vibeflow-think — Think 阶段，创建 context.md

**计划层**（6）
- vibeflow-plan — Plan 入口，协调子技能
- vibeflow-plan-value-review — CEO 视角价值评审（唯一关卡）
- vibeflow-plan-eng-review — 工程视角评审
- vibeflow-plan-design-review — 设计视角七轮评审
- vibeflow-requirements — 需求规格说明书
- vibeflow-design — 技术设计文档

**构建层**（6）
- vibeflow-build-init — 初始化，创建脚手架
- vibeflow-build-work — 功能编排器
- vibeflow-tdd — TDD Red-Green-Refactor
- vibeflow-quality — 质量门禁
- vibeflow-feature-st — 功能验收测试
- vibeflow-spec-review — 规范合规审查

**安全护栏**（4）
- vibeflow-careful — 危险命令警告
- vibeflow-freeze — 编辑边界限制
- vibeflow-guard — 最大安全模式
- vibeflow-unfreeze — 解除冻结

**验证发布层**（5）
- vibeflow-review — 全局审查
- vibeflow-test-system — 系统测试
- vibeflow-test-qa — QA 测试
- vibeflow-ship — 发布
- vibeflow-reflect — 回顾

### 状态和产物布局重构

```bash
7ea398c refactor vibeflow state and artifact layout
```

这是今天最大的变更，对整个状态模型重构：

**新的状态文件**：
- `.vibeflow/state.json` — 工作流中心状态
- `.vibeflow/workflow.yaml` — 工作流配置
- `.vibeflow/work-config.json` — 构建配置
- `.vibeflow/runtime.json` — 运行态覆盖层
- `.vibeflow/guides/build.md` — Build 会话指南
- `.vibeflow/logs/session-log.md` — 会话日志

**新的交付产物布局**：
- `docs/changes/<change-id>/context.md` — Think 产物
- `docs/changes/<change-id>/proposal.md` — Plan 产物
- `docs/changes/<change-id>/requirements.md` — 需求规格
- `docs/changes/<change-id>/ucd.md` — UCD 用例图
- `docs/changes/<change-id>/design.md` — 设计文档
- `docs/changes/<change-id>/tasks.md` — Build 任务分解
- `docs/changes/<change-id>/verification/review.md` — 审查报告
- `docs/changes/<change-id>/verification/system-test.md` — 系统测试报告
- `docs/changes/<change-id>/verification/qa.md` — QA 测试报告

**路由脚本重构**：

```bash
scripts/get-vibeflow-phase.py
```

这个脚本是整个路由的核心。它通过检查文件存在性判断当前阶段：

```python
# 伪代码
if not context_exists():
    return 'think'
elif not workflow_yaml_exists():
    return 'template-selection'
elif not requirements_exists():
    return 'plan'
elif not design_exists():
    return 'requirements'
elif not build_init_exists():
    return 'design'
elif not feature_list_exists():
    return 'build-init'
elif not all_features_passed():
    return 'build-work'
elif not review_exists():
    return 'review'
# ... 以此类推
```

### Parallel Mode 依赖感知构建

```bash
3e2bbbf feat(build-work): add Parallel Mode for multi-agent feature execution
```

这是个重要的功能增强。

**之前的问题**：昨天加的并行是"蛮干"——所有功能一起跑，不管依赖关系。

**新的实现**：

1. 用户显式请求："请使用并行模式执行所有 failing features"
2. 系统分析 feature 之间的依赖关系，生成依赖图
3. 图分层，每层并行执行
4. 如果检测到文件冲突，自动降级到串行

```python
# 依赖感知的并行执行
for batch in dependencyGraph.layers:
    await Promise.all(
        batch.map(f => buildFeature(f, executed))
    )
    executed.add(batch.map(f => f.id))
```

**并行模式触发条件**：
- 用户显式请求
- prerequisites 满足（无文件冲突）

### README 大改

```bash
9b43d9d Rewrite READMEs with comprehensive framework documentation
```

之前的 README 太简陋了，只有安装说明。今天重写，加了：
- 完整的工作流说明
- 7 阶段详解
- 常用命令
- 架构图

### 走的弯路

**弯路一：runtime.json 之前没有**

之前没有 runtime.json，Build 阶段的进度全靠 feature-list.json。但 feature-list.json 不能反映"当前正在跑哪个功能"。

加了 runtime.json 作为运行态覆盖层，实时记录当前动作。

**弯路二：没有 tasks.md**

之前 Build 任务分解没有单独的产物，都混在 design.md 里。

加了 tasks.md，专门记录 Build 阶段的任务分解，清晰很多。

**弯路三：并行模式不考虑依赖**

昨天的并行是假并行。全部一起跑，依赖关系全靠人工管理。

今天的依赖感知并行才是真并行。

### 安全护栏

今天还加了一整套安全护栏：

- **vibeflow-careful**：危险命令警告（rm -rf, DROP TABLE, git reset --hard）
- **vibeflow-freeze**：编辑边界限制
- **vibeflow-guard**：组合模式
- **vibeflow-unfreeze**：解除限制

这些是可选的，按需启用。

---

*—— VibeFlow Skill 架构成型，状态布局重构，Parallel Mode 依赖感知*