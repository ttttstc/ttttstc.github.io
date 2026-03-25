# vibeflow-build-init — 构建初始化

## 概述

`vibeflow-build-init` 在 Design 阶段批准后初始化构建产物。这是 Build 阶段的第一步，创建脚手架文件和目录结构。

---

## 目标

创建 Build 阶段所需的所有脚手架文件和环境配置。

---

## 产出物

| 文件 | 用途 |
|------|------|
| `.vibeflow/state.json` | 工作流中心状态 |
| `.vibeflow/runtime.json` | 运行态覆盖层 |
| `.vibeflow/workflow.yaml` | 工作流配置 |
| `.vibeflow/work-config.json` | 构建配置 |
| `.vibeflow/phase-history.json` | 阶段推进历史 |
| `.vibeflow/logs/session-log.md` | 过程日志 |
| `feature-list.json` | 功能清单主索引 |

---

## 构建配置（work-config.json）

```json
{
  "tdd": true,
  "quality_gates": true,
  "feature_st": true,
  "spec_review": true,
  "coverage": {
    "line": 90,
    "branch": 80
  },
  "mutation_threshold": 80
}
```

---

## 步骤裁剪

`.vibeflow/work-config.json` 是**步骤启用的权威来源**：

| 步骤 | 说明 |
|------|------|
| `tdd` | 是否强制 TDD（prototype 模板可能禁用）|
| `quality_gates` | 是否运行覆盖率/变异测试门禁 |
| `feature_st` | 是否运行功能验收测试 |
| `spec_review` | 是否运行规格合规审查 |

---

## 注意事项

- 这是初始化步骤，只需运行一次
- 确保环境就绪后再开始
- 检查开发工具和依赖是否正确安装
