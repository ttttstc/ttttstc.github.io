# 神秘咒语盒 - 能力设计文档

**日期**: 2026-03-18
**类型**: 功能增强
**状态**: 已批准

---

## 1. 定位

- **纯展示型** - 浏览、搜索、复制 AI 工具系统提示词
- **手工整理 + 自动同步** - 通过 PR 方式合入上游更新

## 2. 核心功能

| 功能 | 说明 | 状态 |
|------|------|------|
| 分类浏览 | 侧边栏展示所有分类 | ✅ 已实现 |
| 关键词搜索 | 实时过滤 | ✅ 已实现 |
| 一键复制 | 点击复制到剪贴板 | ✅ 已实现 |
| 详情预览 | 完整提示词内容展示 | ✅ 已实现 |
| 中文分类名 | 核心分类翻译为中文 | 🔄 待增强 |
| 完整元数据 | 来源、更新时间、文件大小 | 🔄 待增强 |
| 自动同步 | PR 方式合入上游更新 | 🔄 待开发 |

## 3. 数据结构（增强版）

```typescript
interface SystemPrompt {
  id: string;
  name: string;              // 提示词名称（英文）
  nameCn?: string;           // 中文名称（可选）
  description: string;       // 描述
  category: string;          // 分类 ID
  categoryName: string;      // 分类名称（中文）
  source: string;            // 来源 AI 工具
  file: string;              // 文件路径
  fileSize: number;          // 文件大小（字节）
  lastUpdated: string;       // 最后更新时间
  tags?: string[];           // 标签
}
```

## 4. 分类对照表（中文翻译）

| 英文分类 | 中文名称 |
|----------|----------|
| Anthropic | Anthropic |
| Open Source prompts | 开源工具 |
| Cursor Prompts | Cursor |
| Google | Google |
| VSCode Agent | VSCode 代理 |
| Windsurf | Windsurf |
| Perplexity | Perplexity |
| Replit | Replit |
| v0 Prompts and Tools | v0 |
| Manus Agent Tools & Prompt | Manus |
| Others | 保持原名 |

## 5. 自动同步流程

```
上游仓库更新 (x1xhlol/system-prompts-and-models-of-ai-tools)
        │
        ▼
┌───────────────────┐
│  本地同步脚本     │
│  npm run sync    │
└───────────────────┘
        │
   1. fetch 远程仓库
   2. 对比差异
   3. 更新文件
   4. 生成 diff/PR
        │
        ▼
   手动创建 PR 合入
```

**同步命令**：
```bash
# 手动运行同步
npm run sync-prompts

# 输出示例：
# - 新增: X 个文件
# - 删除: Y 个文件
# - 修改: Z 个文件
# - 生成 diff 文件: prompts-diff.patch
```

## 6. 增强元数据显示

在详情页增加显示：
- 文件大小（KB/MB）
- 最后修改时间
- 来源工具名称
- 原文链接（GitHub）

## 7. 验收标准

- [ ] 中文分类名称正确显示
- [ ] 文件大小和时间正确计算
- [ ] 同步脚本可正常运行
- [ ] 生成的 diff 可用于创建 PR
- [ ] 不改动现有页面样式
