import { useState, useEffect } from 'react';
import { Github, ArrowLeft, ArrowRight, FileText, Code, Copy, Check } from 'lucide-react';
import { getCourseById, getPrevNextLesson } from '../data/learn-cc-courses';

// 颜色系统
const COLORS = {
  bg: '#000000',
  bgSecondary: '#0A0A0A',
  bgTertiary: '#141414',
  border: '#262626',
  borderHover: '#404040',
  text: '#FAFAFA',
  textSecondary: '#A1A1A1',
  textMuted: '#6B6B6B',
  accent: '#FF6B35',
  accentHover: '#FF8C5A',
};

interface Props {
  lessonId: string | null;
}

// 模拟文档内容（实际应从 GitHub API 获取）
const getLessonDoc = (id: string) => {
  const docs: Record<string, { content: string; code: string }> = {
    s01: {
      content: `# Agent Loop

## 什么是 Agent Loop？

Agent Loop 是 AI Agent 的核心运行机制 —— 感知 → 思考 → 行动 → 反馈 的循环过程。

### 循环流程

\`\`\`
1. 接收用户输入 (Input)
2. 分析任务 (Analyze)
3. 执行动作 (Act)
4. 评估结果 (Evaluate)
5. 决定下一步 (Decide)
   └─→ 继续循环或结束
\`\`\`

### 核心代码

Agent 的基本循环结构：

\`\`\`python
while True:
    # 1. 感知 - 获取上下文
    context = await get_context()

    # 2. 思考 - 规划下一步
    plan = await agent.think(context)

    # 3. 行动 - 执行工具
    result = await agent.act(plan)

    # 4. 反馈 - 评估结果
    if agent.evaluate(result):
        break
\`\`\`

### 关键要点

- **自主性**：Agent 能自主决定下一步操作
- **迭代性**：通过循环不断逼近目标
- **工具性**：使用工具扩展能力边界`,
      code: `"""
Agent Loop - 基础 Agent 循环实现
"""
from anthropic import Anthropic
import os

class AgentLoop:
    def __init__(self, model="claude-3-5-sonnet-20241022"):
        self.client = Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))
        self.messages = []

    def add_message(self, role: str, content: str):
        """添加消息到上下文"""
        self.messages.append({"role": role, "content": content})

    def run(self, task: str, max_iterations:10):
        """运行 Agent 循环"""
        self.add_message("user", task)

        for i in range(max_iterations):
            # 调用模型获取响应
            response = self.client.messages.create(
                model=self.model,
                max_tokens=4096,
                messages=self.messages
            )

            # 提取响应内容
            assistant_message = response.content[0].text
            self.add_message("assistant", assistant_message)

            # 检查是否完成（通过特殊标记或用户确认）
            if "<done>" in assistant_message:
                break

        return self.messages

# 使用示例
if __name__ == "__main__":
    agent = AgentLoop()
    result = agent.run("帮我写一个 Python 排序算法")
    print(result)`,
    },
    s02: {
      content: `# Tool Use

## 工具使用 (Tool Use)

Tool Use 是 Claude Code 区别于普通对话的关键能力 —— 让 Agent 能够调用外部工具完成实际任务。

### 内置工具

Claude Code 提供多种内置工具：

- **Bash**: 执行 shell 命令
- **Read**: 读取文件内容
- **Edit**: 编辑文件
- **Write**: 写入文件
- **Glob**: 搜索文件
- **Grep**: 搜索文件内容
- **TodoWrite**: 任务清单管理
- **Task**: 创建子任务

### 工具注册

\`\`\`python
from claude_code import ClaudeAgent

agent = ClaudeAgent()

# 注册自定义工具
@agent.tool()
def calculate(expression: str) -> float:
    """执行数学计算"""
    return eval(expression)

# 使用工具
result = agent.execute("计算 (10 + 5) * 2")
\`\`\`

### 工具设计原则

1. **单一职责**：每个工具只做一件事
2. **清晰命名**：名称要能表达功能
3. **完整文档**：提供清晰的描述和参数说明`,
      code: `"""
Tool Use - 工具使用示例
"""
from typing import Any, Dict, List
from claude_code import ClaudeAgent, tool

# 创建 Agent 实例
agent = ClaudeAgent()

# 定义自定义工具
@agent.tool(name="calculate", description="执行数学表达式计算")
def calculate(expression: str) -> str:
    """
    计算数学表达式

    Args:
        expression: 数学表达式，如 "2 + 2" 或 "sqrt(16)"

    Returns:
        计算结果
    """
    try:
        # 注意：实际使用请用安全的 eval 替代
        import math
        # 替换常用数学函数
        expression = expression.replace("sqrt", "math.sqrt")
        result = eval(expression)
        return str(result)
    except Exception as e:
        return f"计算错误: {str(e)}"

# 使用工具
result = agent.run("计算 100 / 5 + 20 的值")
print(result)`,
    },
  };

  // 默认返回 s01 的内容作为占位
  return docs[id] || docs['s01'];
};

export default function LearnCCLessonPage({ lessonId }: Props) {
  const [activeTab, setActiveTab] = useState<'docs' | 'code'>('docs');
  const [copied, setCopied] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const course = lessonId ? getCourseById(lessonId) : null;
  const { prev, next } = lessonId ? getPrevNextLesson(lessonId) : { prev: null, next: null };
  const lessonData = lessonId ? getLessonDoc(lessonId) : null;

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleCopyCode = () => {
    if (lessonData) {
      navigator.clipboard.writeText(lessonData.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!course) {
    return (
      <div style={{ backgroundColor: COLORS.bg }} className="min-h-screen text-white flex items-center justify-center">
        <p style={{ color: COLORS.textMuted }}>课程不存在</p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: COLORS.bg }} className="min-h-screen text-white">
      {/* Header */}
      <header
        style={{
          backgroundColor: COLORS.bgSecondary,
          borderBottom: `1px solid ${COLORS.border}`,
        }}
        className="h-16 flex items-center justify-between px-6 sticky top-0 z-50"
      >
        <div className="flex items-center gap-4">
          <a
            href="/learn-cc"
            className="flex items-center gap-2 transition-colors hover:opacity-80"
            style={{ color: COLORS.textSecondary }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>返回</span>
          </a>
          <div style={{ backgroundColor: COLORS.border }} className="w-px h-6" />
          <span
            className="px-2 py-1 text-xs rounded-full"
            style={{ backgroundColor: `${COLORS.accent}20`, color: COLORS.accent }}
          >
            Phase {course.phase}
          </span>
          <h1 className="text-lg font-semibold" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
            {course.id.toUpperCase()}: {course.title}
          </h1>
        </div>
        <a
          href="https://github.com/shareAI-lab/learn-claude-code"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: COLORS.textSecondary }}
          className="hover:text-white transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
      </header>

      {/* Hero */}
      <section
        className={`py-16 px-6 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            style={{ fontFamily: 'Times New Roman, Times, serif' }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {course.title}
          </h2>
          <p style={{ color: COLORS.textSecondary }} className="text-xl mb-4">
            {course.subtitle}
          </p>
          <p
            className="text-lg italic"
            style={{ color: COLORS.textMuted, borderLeft: `3px solid ${COLORS.accent}`, paddingLeft: '1rem' }}
          >
            "{course.motto}"
          </p>
        </div>
      </section>

      {/* Tab Switcher */}
      <section className="px-6 mb-8">
        <div className="max-w-4xl mx-auto">
          <div
            className="inline-flex rounded-lg p-1"
            style={{ backgroundColor: COLORS.bgSecondary, border: `1px solid ${COLORS.border}` }}
          >
            <button
              onClick={() => setActiveTab('docs')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'docs' ? 'shadow-sm' : ''
              }`}
              style={{
                backgroundColor: activeTab === 'docs' ? COLORS.bgTertiary : 'transparent',
                color: activeTab === 'docs' ? COLORS.text : COLORS.textMuted,
              }}
            >
              <FileText className="w-4 h-4" />
              <span>文档</span>
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'code' ? 'shadow-sm' : ''
              }`}
              style={{
                backgroundColor: activeTab === 'code' ? COLORS.bgTertiary : 'transparent',
                color: activeTab === 'code' ? COLORS.text : COLORS.textMuted,
              }}
            >
              <Code className="w-4 h-4" />
              <span>代码</span>
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Docs Tab */}
          <div
            className={`transition-all duration-300 ${activeTab === 'docs' ? 'opacity-100' : 'opacity-0 hidden'}`}
          >
            <div
              className="rounded-xl p-8"
              style={{
                backgroundColor: COLORS.bgTertiary,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              {/* Markdown content would be rendered here */}
              <div className="prose prose-invert max-w-none">
                {lessonData?.content.split('\n').map((line, i) => {
                  if (line.startsWith('# ')) {
                    return <h1 key={i} className="text-3xl font-bold mb-4 mt-6">{line.slice(2)}</h1>;
                  }
                  if (line.startsWith('## ')) {
                    return <h2 key={i} className="text-2xl font-bold mb-3 mt-5">{line.slice(3)}</h2>;
                  }
                  if (line.startsWith('### ')) {
                    return <h3 key={i} className="text-xl font-semibold mb-2 mt-4">{line.slice(4)}</h3>;
                  }
                  if (line.startsWith('```')) {
                    return null;
                  }
                  if (line.trim() === '') {
                    return <br key={i} />;
                  }
                  // Handle inline code
                  if (line.includes('`')) {
                    const parts = line.split(/(`[^`]+`)/);
                    return (
                      <p key={i} className="mb-2">
                        {parts.map((part, j) =>
                          part.startsWith('`') && part.endsWith('`') ? (
                            <code
                              key={j}
                              className="px-1.5 py-0.5 rounded text-sm"
                              style={{ backgroundColor: COLORS.bgSecondary, color: COLORS.accent }}
                            >
                              {part.slice(1, -1)}
                            </code>
                          ) : (
                            part
                          )
                        )}
                      </p>
                    );
                  }
                  return <p key={i} className="mb-2 text-white/80">{line}</p>;
                })}
              </div>
            </div>
          </div>

          {/* Code Tab */}
          <div
            className={`transition-all duration-300 ${activeTab === 'code' ? 'opacity-100' : 'opacity-0 hidden'}`}
          >
            <div
              className="rounded-xl overflow-hidden"
              style={{
                backgroundColor: COLORS.bgTertiary,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              {/* Code header */}
              <div
                className="flex items-center justify-between px-4 py-3"
                style={{
                  backgroundColor: COLORS.bgSecondary,
                  borderBottom: `1px solid ${COLORS.border}`,
                }}
              >
                <span style={{ color: COLORS.textMuted }} className="text-sm">
                  agents/{course.id}_agent_loop.py
                </span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors hover:bg-white/5"
                  style={{ color: copied ? '#22C55E' : COLORS.textMuted }}
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span className="text-sm">{copied ? '已复制' : '复制'}</span>
                </button>
              </div>
              {/* Code content */}
              <pre className="p-6 overflow-x-auto">
                <code
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "'SF Mono', Monaco, 'Courier New', monospace", color: COLORS.textSecondary }}
                >
                  {lessonData?.code}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <footer
        style={{
          borderTop: `1px solid ${COLORS.border}`,
          backgroundColor: COLORS.bgSecondary,
        }}
        className="py-6"
      >
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          {prev ? (
            <a
              href={`/learn-cc/${prev.id}`}
              className="flex items-center gap-2 group transition-opacity hover:opacity-80"
              style={{ color: COLORS.textSecondary }}
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <div className="text-xs" style={{ color: COLORS.textMuted }}>上一章</div>
                <div className="font-medium">{prev.title}</div>
              </div>
            </a>
          ) : (
            <div />
          )}

          {next ? (
            <a
              href={`/learn-cc/${next.id}`}
              className="flex items-center gap-2 group transition-opacity hover:opacity-80"
              style={{ color: COLORS.textSecondary }}
            >
              <div className="text-right">
                <div className="text-xs" style={{ color: COLORS.textMuted }}>下一章</div>
                <div className="font-medium">{next.title}</div>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          ) : (
            <div />
          )}
        </div>
      </footer>
    </div>
  );
}
