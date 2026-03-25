# vibeflow-test-qa — QA 测试

## 概述

`vibeflow-test-qa` 执行浏览器驱动的 QA 验证。**仅 UI 项目执行**。

---

## 测试内容

### 1. UI 验证

- 页面渲染是否正确
- 交互是否符合预期
- 响应式布局是否正常

### 2. 浏览器兼容性

- 主流浏览器是否正常
- 是否有兼容性问题

### 3. 视觉回归

- UI 是否有意外变更
- 样式是否符合设计规范

---

## 与 Test-System 的关系

```
Test-System（所有项目）
        +
Test-QA（仅 UI 项目）

并行执行，提高效率
```

---

## 产出物

`docs/changes/<change-id>/verification/qa.md`

---

## 注意事项

- 仅 UI 项目执行此步骤
- 纯后端 API 项目可以跳过
- 发现 UI 问题及时截图记录
