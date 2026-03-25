# vibeflow-careful — 危险命令警告

## 概述

`vibeflow-careful` 在执行危险命令前发出警告。防止误操作导致数据丢失或系统损坏。

---

## 监控命令

### 删除类

- `rm -rf`
- `rm -r`
- `delete`
- `truncate`

### Git 危险操作

- `git reset --hard`
- `git push --force`
- `git clean -fd`

### 数据库操作

- `DROP TABLE`
- `DROP DATABASE`
- `DELETE FROM`（无 WHERE）
- `TRUNCATE`

### 系统操作

- `kill -9`
- `shutdown`
- `reboot`

---

## 警告格式

```
⚠️ 危险命令警告

命令：{command}
操作：{action}

风险：{risk_description}

确认执行？
- 输入 "yes" 确认
- 输入 "no" 取消
```

---

## 激活方式

```
/vibeflow-careful
```

---

## 注意事项

- 不阻止执行，只是警告
- 需要用户明确确认才能继续
- 记录所有危险操作的执行日志
