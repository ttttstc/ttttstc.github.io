# vibeflow-unfreeze — 解除冻结

## 概述

`vibeflow-unfreeze` 解除 freeze 设置的编辑边界限制。

---

## 使用方式

```
/vibeflow-unfreeze
```

解除所有冻结限制，允许编辑所有文件。

---

## 使用场景

- 临时需要修改被保护的文件
- 需要更新配置文件
- 需要修改系统级文件

---

## 重新冻结

修改完成后，记得重新冻结：

```
/vibeflow-freeze [directory1] [directory2] ...
```

---

## 注意事项

- 解冻操作应该很短暂
- 完成后立即重新冻结
- 记录解冻期间的所有修改
