# 模板系统 + Auto Pilot

**2026 年 3 月 25 日**

---

今天是框架完善的一天。模板系统最终形态，加上 Auto Pilot 自动驾驶。

### 模板系统确定

VibeFlow 的四个模板最终确定：

| 模板 | 场景 | Think 深度 | Plan 评审 | 行覆盖 | 分支覆盖 | 变异分 |
|------|------|------------|-----------|--------|---------|-------|
| Prototype | POC、周末项目 | quick | CEO 削减 | 60% | 40% | 50% |
| Web-Standard | 常规 Web 应用 | standard | CEO 保持 | 90% | 80% | 80% |
| API-Standard | 纯后端 API | standard | CEO 保持 | 90% | 80% | 80% |
| Enterprise | 企业级、合规 | deep | CEO 扩展 | 95% | 85% | 85% |

**模板选择时机**：Think 阶段末尾，用户根据项目类型和风险程度选择。

**模板派生机制**：

```bash
python scripts/new-vibeflow-config.py --template web-standard --project-root <repo>
```

这个脚本从模板复制配置到 `.vibeflow/workflow.yaml`。

然后：

```bash
python scripts/new-vibeflow-work-config.py --project-root <repo>
```

从 workflow.yaml 派生 `.vibeflow/work-config.json`，包括：
- 启用的 Build 步骤
- 质量门禁阈值
- 测试要求
- 是否需要 Reflect

### Auto Pilot 上线

这是今天最重要的功能：

```bash
0023371 feat: add autopilot, parallel build, and live dashboard
```

**解决的问题**：

之前的设计里，用户在 Design 确认之后还要手动触发每个 Build 子步骤：

```
Design 确认
    ↓（用户手动）
Build-init
    ↓（用户手动）
Build-config
    ↓（用户手动）
Build-work
    ↓（用户手动）
Review
    ↓（用户手动）
Test
```

很烦。尤其是 Build 阶段的子步骤很多，用户不想每次都点。

**Auto Pilot 的做法**：

一旦进入 `build-init`，系统自动继续后续链路：

```
Design 确认
    ↓（自动）
Build-init → Build-config → Build-work → Review → Test → Ship → Reflect
```

直到完成、阻塞，或遇到需要确认的点。

**用户只需要做一件事**：确认 Design。

### Live Dashboard

配套加了 Dashboard 功能：

```bash
scripts/run-vibeflow-dashboard.py
```

实时展示：
- 当前 mode 和 phase
- 各功能状态（pending/in-progress/passing/failing）
- Build 进度和阻塞点
- 下一步建议操作

不需要盯着 state.json 猜系统跑到哪了。

### 新的脚本

今天加了一批脚本：

**1. run-vibeflow-autopilot.py**
继续当前流程的自动驾驶脚本。

**2. run-vibeflow-dashboard.py**
启动 live dashboard。

**3. run-vibeflow-build-work.py**
单次执行 Build-work。

**4. vibeflow_automation.py**
核心自动化逻辑，900+ 行。

**5. vibeflow_dashboard.py**
Dashboard 实现，600+ 行。

**6. validate_features.py**
验证 feature 状态。

### Build 继续机制增强

```bash
25ba175 feat: strengthen build continuation and refresh docs
```

之前的 Build 继续有些边界情况没处理干净。今天修了，同时更新了文档。

```bash
d584edf fix: clarify mode selection on first run
```

第一次运行时的模式选择也清晰了。

### 模式选择细化

Quick Mode 之前有些边界模糊：
- 什么时候该用 Quick Mode？
- 什么情况必须用 Full Mode？

今天加了更清晰的判断标准：

**用 Quick Mode**：
- 改动范围明确且小
- 风险可控
- 可以快速回滚
- 不涉及核心架构

**用 Full Mode**：
- 新功能开发
- 架构变更
- 重要系统改动
- 不确定风险程度时

### 走的弯路

**弯路一：Auto Pilot 之前没有**

之前一直觉得用户应该手动控制每个阶段。后来发现用户不想这样——他们只想"确认 Design，然后等结果"。

Auto Pilot 让用户少操心，系统多干活。

**弯路二：Dashboard 之前没有**

之前没有 Dashboard，用户想看进度要自己查 state.json。很原始。

加了 Dashboard，实时展示，清楚多了。

**弯路三：模式选择太模糊**

Quick Mode 和 Full Mode 的边界一开始没想清楚，用户不知道怎么选。

今天细化了标准，用户能更容易做决定。

---

*—— VibeFlow 模板系统和 Auto Pilot 上线，开发流真正顺畅了*