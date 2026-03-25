# vibeflow-freeze — 编辑边界限制

## 概述

`vibeflow-freeze` 限制 Edit/Write 操作在指定目录范围内。防止误修改重要文件。

---

## 功能

- 设置允许编辑的目录白名单
- 阻止白名单之外的文件修改
- 保护系统关键文件和配置

---

## 使用方式

```
/vibeflow-freeze [directory1] [directory2] ...
```

指定允许编辑的目录，默认允许：
- `src/`
- `tests/`
- `docs/`

---

## 保护示例

```bash
# 保护配置和系统文件
/vibeflow-freeze src/ tests/ docs/

# 禁止修改 .git 目录
# 禁止修改 node_modules/
# 禁止修改配置文件
```

---

## 与 Guard 的区别

| Skill | 功能 |
|--------|------|
| `vibeflow-careful` | 只是警告，不阻止 |
| `vibeflow-freeze` | 直接阻止越界操作 |
| `vibeflow-guard` | 组合 careful + freeze |

---

## 注意事项

- 临时需要编辑被保护的文件时，先用 `unfreeze` 解冻
- 解冻后记得重新 `freeze`
- 敏感环境建议默认启用 freeze
