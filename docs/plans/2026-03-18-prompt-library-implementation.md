# AI 提示词库 - 实施计划

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 为"泥巴猪的实验田"新增一个 AI 提示词库页面，支持分类浏览、关键词搜索、一键复制功能。

**Architecture:** 纯静态实现，使用 JSON 文件存储提示词数据，前端通过 React 组件渲染。复用现有的 Dialog 组件实现详情弹窗。

**Tech Stack:** React 19 + TypeScript + Tailwind CSS + Lucide Icons

---

## Task 1: 创建提示词数据文件

**Files:**
- Create: `src/data/prompts.json`
- Create: `src/data/categories.json`

**Step 1: 创建 categories.json**

```json
[
  { "id": "code", "name": "代码开发", "icon": "Code", "description": "编程、调试、代码审查" },
  { "id": "writing", "name": "写作助手", "icon": "PenTool", "description": "文章创作、内容润色" },
  { "id": "analysis", "name": "数据分析", "icon": "BarChart", "description": "数据处理、统计分析" },
  { "id": "translate", "name": "翻译", "icon": "Languages", "description": "多语言翻译" },
  { "id": "image", "name": "图像生成", "icon": "Image", "description": "Midjourney、Stable Diffusion" },
  { "id": "product", "name": "产品设计", "icon": "Figma", "description": "产品需求、UX设计" }
]
```

**Step 2: 创建 prompts.json (12-18条示例)**

```json
[
  {
    "id": "p1",
    "title": "代码审查助手",
    "content": "请作为资深代码审查专家，审查以下代码...\n\n## 代码\n```\n{{CODE}}\n```\n\n请从以下维度进行分析：\n1. 代码质量问题\n2. 潜在 bug\n3. 性能优化建议\n4. 安全风险",
    "category": "code",
    "tags": ["review", "bug", "optimization"],
    "description": "对代码进行全面的质量审查和建议",
    "author": "泥巴猪",
    "createdAt": "2026-03-01"
  },
  ... (更多提示词)
]
```

**Step 3: 验证文件创建成功**

Run: `ls -la src/data/`
Expected: 看到 prompts.json 和 categories.json

---

## Task 2: 创建 PromptsPage 主页面组件

**Files:**
- Create: `src/sections/PromptsPage.tsx`

**Step 1: 创建基础组件结构**

```tsx
import { useState, useMemo } from 'react';
import { Search, Copy, ExternalLink } from 'lucide-react';
import promptsData from '../data/prompts.json';
import categoriesData from '../data/categories.json';

type Prompt = typeof promptsData[0];
type Category = typeof categoriesData[0];

export default function PromptsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);

  const filteredPrompts = useMemo(() => {
    return promptsData.filter(prompt => {
      const matchCategory = !selectedCategory || prompt.category === selectedCategory;
      const matchSearch = !searchQuery ||
        prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopy = async (content: string) => {
    await navigator.clipboard.writeText(content);
    // TODO: 显示 toast 提示
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">AI 提示词库</h1>
        <p className="text-gray-400">发现和使用高效提示词</p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="搜索提示词..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
          />
        </div>
      </div>

      <div className="flex gap-6">
        {/* Sidebar */}
        <aside className="w-48 shrink-0">
          <div className="space-y-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`w-full text-left px-4 py-2 rounded-lg ${
                !selectedCategory ? 'bg-purple-600' : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              全部
            </button>
            {categoriesData.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`w-full text-left px-4 py-2 rounded-lg ${
                  selectedCategory === cat.id ? 'bg-purple-600' : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Submit button */}
          <a
            href="https://github.com/ttttstc/ttttstc.github.io/issues/new?template=prompt-submission.md"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 w-full px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg"
          >
            <ExternalLink className="w-4 h-4" />
            提交提示词
          </a>
        </aside>

        {/* Grid */}
        <main className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPrompts.map(prompt => (
              <div
                key={prompt.id}
                onClick={() => setSelectedPrompt(prompt)}
                className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-750 hover:border-purple-500 border border-transparent transition-colors"
              >
                <h3 className="font-semibold mb-2">{prompt.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{prompt.description}</p>
                <div className="flex flex-wrap gap-2">
                  {prompt.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-gray-700 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredPrompts.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <p>没有找到匹配的提示词</p>
            </div>
          )}
        </main>
      </div>

      {/* Dialog */}
      {selectedPrompt && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedPrompt(null)}
        >
          <div
            className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{selectedPrompt.title}</h2>
                <button
                  onClick={() => setSelectedPrompt(null)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <p className="text-gray-300 mb-4">{selectedPrompt.description}</p>

              <div className="bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm whitespace-pre-wrap">
                {selectedPrompt.content}
              </div>

              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  {selectedPrompt.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-gray-700 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => handleCopy(selectedPrompt.content)}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg"
                >
                  <Copy className="w-4 h-4" />
                  复制
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
```

**Step 2: 验证组件创建成功**

Run: `ls -la src/sections/PromptsPage.tsx`
Expected: 文件存在

---

## Task 3: 添加路由配置

**Files:**
- Modify: `src/App.tsx`

**Step 1: 添加路由映射**

在 ROUTE_MAPPINGS 中添加:
```tsx
{ pattern: (p) => p.startsWith('/lobster/prompts'), page: 'prompts' },
```

**Step 2: 添加 PromptsPage 到 imports**

```tsx
import PromptsPage from './sections/PromptsPage';
```

**Step 3: 添加 'prompts' 到 PageType**

```tsx
type PageType = 'landing' | 'cat-cafe' | 'home' | 'skill' | 'tutorial' | 'diary' | 'workspace' | 'tech' | 'prompts';
```

**Step 4: 添加 PATH_MAP**

```tsx
const PATH_MAP: Record<PageType, string> = {
  // ...existing
  prompts: '/lobster/prompts',
};
```

**Step 5: 添加 case 到 renderPage**

```tsx
case 'prompts':
  return <PromptsPage />;
```

**Step 6: 验证构建**

Run: `npm run build`
Expected: 构建成功，无错误

---

## Task 4: 添加导航入口 (可选)

**Files:**
- Modify: `src/sections/Navigation.tsx`

**Step 1: 在导航中添加提示词库链接**

在导航菜单中添加:
```tsx
<button onClick={() => onNavigate('prompts')}>提示词库</button>
```

---

## Task 5: 添加 E2E 测试

**Files:**
- Modify: `tests/navigation.spec.ts`

**Step 1: 添加测试用例**

```tsx
test('should navigate to prompts page', async ({ page }) => {
  await page.goto('/lobster/prompts');
  await expect(page.locator('h1')).toContainText('AI 提示词库');
});

test('should filter prompts by category', async ({ page }) => {
  await page.goto('/lobster/prompts');
  await page.click('text=代码开发');
  // 验证过滤结果
});

test('should search prompts', async ({ page }) => {
  await page.goto('/lobster/prompts');
  await page.fill('input[placeholder="搜索提示词..."]', '代码');
  // 验证搜索结果
});

test('should copy prompt content', async ({ page }) => {
  await page.goto('/lobster/prompts');
  await page.click('[class*="bg-gray-800"]:first-child');
  await page.click('text=复制');
});
```

**Step 2: 运行测试**

Run: `npm test`
Expected: 所有测试通过

---

## Task 6: 更新文档

**Files:**
- Modify: `README.md`
- Modify: `CLAUDE.md`

**Step 1: 更新 README.md**

在路由表中添加:
```markdown
| /lobster/prompts | 提示词库 |
```

**Step 2: 更新 CLAUDE.md**

在路由配置中添加:
```markdown
/lobster/prompts → PromptsPage (提示词库)
```

---

## 实施顺序

1. Task 1: 创建数据文件 (5 分钟)
2. Task 2: 创建组件 (15 分钟)
3. Task 3: 添加路由 (5 分钟)
4. Task 4: 添加导航入口 (5 分钟)
5. Task 5: 添加测试 (10 分钟)
6. Task 6: 更新文档 (5 分钟)

**预计总时间**: ~45 分钟

---

## 计划完成

已保存到 `docs/plans/2026-03-18-prompt-library-design.md`

**两种执行选项:**

1. **子代理驱动（此会话）** - 我为每个任务分配新的子代理，在任务之间审查，快速迭代

2. **并行会话（单独）** - 在工作树中打开新会话，使用 executing-plans，带检查点的批量执行

**选择哪种方法?**
