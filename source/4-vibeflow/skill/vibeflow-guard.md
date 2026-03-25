# vibeflow-guard — 最大安全模式

## 概述

`vibeflow-guard` 组合 `vibeflow-careful` 和 `vibeflow-freeze`，提供最大安全保护。

---

## 功能组合

### Careful（警告）

在执行危险命令前发出警告。

### Freeze（冻结）

限制编辑操作在白名单目录范围内。

---

## 使用场景

- 生产环境操作
- 团队协作项目
- 处理敏感数据
- 高风险变更

---

## 使用方式

```
/vibeflow-guard
```

---

## 安全等级

```
Careful < Freeze < Guard
 警告      阻止      警告+阻止
```

---

## 注意事项

- Guard 是最高安全等级
- 不要在日常开发中一直启用
- 只在高风险操作时临时启用
