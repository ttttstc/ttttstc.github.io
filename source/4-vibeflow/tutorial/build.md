# Build - 构建阶段

## 目标

**TDD 驱动，质量门禁，功能验收，构建即自动继续。**

Build 阶段是 VibeFlow 流程中**自动化程度最高**的阶段。进入 build-init 后，系统会自动继续后续链路，直到完成或遇到阻塞。

---

## 核心理念

> **代码质量是设计出来的，不是测试出来的。**

Build 阶段的核心不是写代码，而是建立一套**可靠的质量保障体系**。

---

## 构建流程

```
Design 确认
    │
    ▼
Build-init ── Build-config ── Build-work
    │              │             │
    │              │         ┌────┴────┐
    │              │         ▼         ▼
    │              │    TDD 循环  Quality Gates
    │              │         │         │
    │              │         ▼         ▼
    │              │   Feature-ST  Spec-Review
    │              │         │         │
    │              │         └────┬────┘
    │              │              ▼
    │              │         Acceptance
    │              │              │
    └──────────────┴──────────────┘
                   │
                   ▼
              Review（自动）
```

---

## 构建步骤

### 1. Build-init（初始化）

创建脚手架文件：

| 文件 | 用途 |
|------|------|
| `feature-list.json` | 功能清单主索引 |
| `.vibeflow/runtime.json` | 运行态覆盖层 |
| `.vibeflow/logs/session-log.md` | 进度日志 |
| `.vibeflow/work-config.json` | 构建配置 |

### 2. Build-config（功能配置）

分配每个功能的开发/测试阶段：

- 更新 `feature-list.json` 中的功能状态
- 配置功能之间的依赖关系
- 确定执行顺序（串行或并行）

### 3. Build-work（功能实现）

单个功能的 TDD 管道：

```
┌─────────────────────────────┐
│         TDD 循环            │
│                             │
│  Red ──► Green ──► Refactor │
│                             │
└─────────────────────────────┘
```

每个功能经历：
- **TDD 循环**：Red → Green → Refactor
- **Quality Gates**：行覆盖率、分支覆盖率、变异测试
- **Feature-ST**：功能级验收测试
- **Spec-Review**：规范合规性审查
- **Acceptance**：最终验收

---

## 质量门禁

### 覆盖率要求（按模板）

| 模板 | 行覆盖率 | 分支覆盖率 | 变异分数 |
|------|---------|------------|---------|
| Prototype | 60% | 40% | 50% |
| Web-Standard | 90% | 80% | 80% |
| API-Standard | 90% | 80% | 80% |
| Enterprise | 95% | 85% | 85% |

### 质量门禁检查点

1. **单元测试覆盖率**达标
2. **分支覆盖率**达标
3. **变异测试分数**达标
4. **功能验收测试**通过
5. **规范审查**通过

---

## 依赖感知并行

当功能之间相互独立时，Build 支持**并行执行**。

```
功能 A ──────────────────► 输出 A
        ─┐
         ├─► 功能 C ──────────► 输出 C
功能 B ─┘
         ─┐
         └─► 功能 D ──────────► 输出 D
```

VibeFlow 会分析 `feature-list.json` 中的依赖关系，自动确定可并行的功能。

---

## 自动继续机制

进入 `build-init` 后，系统默认开始**自动继续**：

```
build-init → build-config → build-work → review → test → ship/reflect
```

如果遇到阻塞（如需要人工确认），系统会暂停并等待。

### 手动控制

如果不想自动继续，可以使用：

- `python scripts/run-vibeflow-build-work.py` - 单次执行 Build-Work
- `/vibeflow-dashboard` - 查看实时状态

---

## Quick Mode vs Full Mode

VibeFlow 支持两种工作模式，在项目开始时选择：

### Full Mode（新功能、架构变更）

完整流程：
- Think → Plan → Requirements → Design → Build → Review → Test
- 严格的质量门禁
- 完整的文档和评审

适用场景：
- 新功能开发
- 架构重构
- 重要系统变更

### Quick Mode（小改动、快速修复）

简化流程：
- 跳过部分评审环节
- 降低覆盖率门槛
- 快速实现 → 快速验证

适用场景：
- Bug fix
- 配置文件更新
- 小范围改动
- 可快速回滚的变更

### 何时选 Quick Mode

满足以下条件时考虑 Quick Mode：
1. 改动范围明确且小
2. 风险可控
3. 可以快速回滚
4. 不涉及核心架构

不确定时，**优先选 Full Mode**。

### 模式切换

运行 `/vibeflow` 时系统会提示选择模式。如果项目已有 `.vibeflow/state.json`，会沿用已有模式。

也可以直接运行 `/vibeflow-quick` 直接进入 Quick 流程。

---

## 实践建议

### TDD 节奏

1. **Red**：写一个会失败的测试
2. **Green**：写最少的代码让测试通过
3. **Refactor**：重构代码，消除重复

### 不要跳过测试

即使时间紧迫，也不要跳过质量门禁。

> 欠下的技术债，早晚要还的。

### 功能清单维护

及时更新 `feature-list.json`，确保功能状态准确。

---

## 进入下一阶段

Build 阶段完成后（所有功能验收通过），自动进入 **Review 阶段**。

> 记住：Build 阶段的价值不在于产出多少代码，而在于建立一套可靠的质量保障体系。
