# vibeflow-spec-review — 规范合规审查

## 概述

`vibeflow-spec-review` 检查实现是否符合 SRS 需求和 Design 设计文档。在 Quality Gates 通过后执行，与 Feature-ST 并行。

---

## 审查内容

### 1. 需求合规性

- SRS 中的每条需求是否都有对应实现？
- 验收条件是否全部满足？
- 是否有遗漏的功能点？

### 2. 设计合规性

- 实现是否符合设计文档中的技术方案？
- 接口设计是否与设计一致？
- 数据模型是否符合设计？

### 3. 变更审查

- 是否有超出需求的额外实现？
- 是否有降低质量的变更？

---

## 审查结果

| 结果 | 含义 |
|------|------|
| **PASS** | 实现符合规范，可以继续 |
| **FAIL** | 存在规范偏差，需要修复 |

---

## 与 Feature-ST 的关系

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

- 与 Feature-ST 并行执行，提高效率
- 关注"是否符合规范"，不关注"实现细节"
- 发现问题要给出具体修改建议
