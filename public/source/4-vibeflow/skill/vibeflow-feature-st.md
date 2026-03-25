# vibeflow-feature-st — 功能验收测试

## 概述

`vibeflow-feature-st` 是功能级验收测试 skill（ISO 29119）。在 Quality Gates 通过后执行，与 Spec-Review 并行。

---

## 目标

验证实现的功能是否满足 SRS 需求规格。

---

## 测试类型

### 黑盒验收测试

基于 SRS 中的 Given/When/Then 验收标准编写测试。

```
Given [前置条件]
When [操作]
Then [预期结果]
```

---

## 测试用例模板

```markdown
## 功能验收测试：{功能名称}

### TC-{id}: {测试场景}

**前置条件**：...
**操作**：...
**预期结果**：...
**实际结果**：...
**状态**：PASS / FAIL
```

---

## 产出物

`docs/test-cases/feature-{id}-{slug}.md`

---

## 与 Spec-Review 的关系

```
Quality Gates 通过
        │
        ├──▶ Agent: vibeflow-feature-st（黑盒验收测试）
        └──▶ Agent: vibeflow-spec-review（规范合规审查）

两个都 PASS → 继续 Persist
任一 FAIL → 修复后重新运行
```

---

## 注意事项

- 这是黑盒测试，关注功能是否满足需求
- 不测试实现细节
- 与 Spec-Review 并行执行
