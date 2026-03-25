# VibeFlow 诞生记

**2026 年 3 月 21 日**

---

今天正式创建了 VibeFlow 项目。

### 为什么做这个

用 AI 写代码有一段时间了，最大的感受不是 AI 能力不行，而是**用法有问题**。

让 AI 直接写代码，就像丢给一个记忆天才一份需求文档让他开发。他能写，但写出来的东西跟你想要的是两回事。上下文一丢失就全完了，换个会话 AI 什么都不记得。代码没测试、没文档、没设计，"能用就行"——这种态度在人类工程师里都被批判，放到 AI 身上却成了常态。

我开始想：**能不能给 AI 编程也加一套工程纪律？**

### 初始设计

今天只有 Initial commit，搭了一个非常简陋的架子：

```
78eee51 Initial commit
```

`skills/` 目录下创建了 16 个 Skill shell：
- vibeflow（入口）
- vibeflow-router（路由器）
- vibeflow-think
- vibeflow-plan、vibeflow-scope、vibeflow-requirements
- vibeflow-design、vibeflow-implement、vibeflow-test
- vibeflow-review、vibeflow-ship、vibeflow-reflect
- 还有几个辅助 Skill

`templates/` 下放了四个模板：
- prototype.yaml
- web-standard.yaml
- api-standard.yaml
- enterprise.yaml

`scripts/` 下放了最基础的路由脚本。

### 第一个设计决策：文件即状态

当时就确定了一个核心原则：**文件即状态**。

所有工作流的状态不保存在会话里，而是保存在文件里：
- `.vibeflow/state.json` — 当前阶段
- `.vibeflow/workflow.yaml` — 工作流配置
- `docs/changes/<change-id>/` — 交付产物

这样换会话、换 AI、甚至换机器，都能继续。

这个决策后来被证明是整个框架最重要的基础。

### 遇到的第一个问题

16 个 Skill 都是空的，怎么串联起来？

当时的计划是 16 阶段流程：

```
Think → Plan → Scope → Requirements → Design → Implement → Test → Review → Ship → Reflect
...加上各种子阶段
```

阶段太多，每个阶段之间的"完成"怎么判断？没有明确的信号。

这个问题想了很久，最后的答案是：**文件存在性判断**。如果 `docs/changes/<id>/requirements.md` 存在，说明 Requirements 阶段完成了，Router 自动路由到下一个阶段。

### 另一个设计决策：四种模板

一开始就想好了要有四种模板，对应不同的严格程度：

| 模板 | 场景 | 覆盖率 |
|------|------|--------|
| Prototype | POC、周末项目 | 60% |
| Web-Standard | 常规 Web 应用 | 90% |
| API-Standard | 纯后端 API | 90% |
| Enterprise | 企业级、合规系统 | 95% |

模板决定了哪些阶段必须执行、质量门禁阈值多高。这是后来模板系统的前身。

### 晚上总结

第一天干的事情很有限，但定好了几个核心原则：

1. **文件即状态** — 跨会话恢复
2. **阶段用文件存在性判断** — 确定性路由
3. **四种模板** — 不同严格程度
4. **Skill 分层** — 核心、计划、构建、验证、发布

这些原则在后来的迭代中基本没变。

---

*—— VibeFlow 诞生日记，第一天就定好了核心原则*