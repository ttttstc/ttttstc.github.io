// Agent 入门教程 - 真实课程内容
// 文档来源: https://github.com/shareAI-lab/learn-claude-code/tree/main/docs/zh
// 代码来源: https://github.com/shareAI-lab/learn-claude-code/tree/main/agents

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  motto: string;
  phase: number;
  docUrl: string;
  codeUrl: string;
  content: string;
  code: string;
}

export interface LessonContent extends Course {}

export const lessons: LessonContent[] = [
  {
    id: 's01',
    title: 'Agent Loop',
    subtitle: 'Agent 循环',
    motto: 'One loop & Bash is all you need',
    phase: 1,
    docUrl: 'https://github.com/shareAI-lab/learn-claude-code/blob/main/docs/zh/s01-the-agent-loop.md',
    codeUrl: 'https://github.com/shareAI-lab/learn-claude-code/blob/main/agents/s01_agent_loop.py',
    content: `# Agent Loop

## 什么是 Agent Loop？

Agent Loop 是 AI Agent 的核心运行机制 —— 感知 → 思考 → 行动 → 反馈 的循环过程。

### 循环流程图

\`\`\`
User Prompt → LLM → Tools → execute
循环直到 stop_reason != "tool_use"
\`\`\`

### 四个核心步骤

**步骤 1**: 用户输入 Prompt，构建消息列表

**步骤 2**: 调用 LLM API（如 Claude），传入工具定义

**步骤 3**: 检查 \`stop_reason\`，如果不是 \`"tool_use"\` 则返回结果

**步骤 4**: 执行工具调用，将结果追加到消息列表

### 核心代码框架

\`\`\`python
def agent_loop(query):
    messages = [{"role": "user", "content": query}]
    while True:
        response = client.messages.create(
            model=MODEL, system=SYSTEM, messages=messages,
            tools=TOOLS, max_tokens=8000,
        )
        messages.append({"role": "assistant", "content": response.content})

        if response.stop_reason != "tool_use":
            return

        # 执行工具调用
        results = []
        for block in response.content:
            if block.type == "tool_use":
                output = run_bash(block.input["command"])
                results.append({"type": "tool_result", "tool_use_id": block.id, "content": output})
        messages.append({"role": "user", "content": results})
\`\`\`

### 关键要点

- **自主性**：Agent 能自主决定下一步操作
- **迭代性**：通过循环不断逼近目标
- **工具性**：使用工具扩展能力边界

### 练习题

1. 创建一个 \`hello.py\` 文件
2. 列出当前目录下的所有 Python 文件
3. 查看 Git 分支
4. 创建一个目录和文件`,
    code: `#!/usr/bin/env python3
# Harness: the loop -- the model's first connection to the real world.
"""s01_agent_loop.py - The Agent Loop

The entire secret of an AI coding agent in one pattern:

    while stop_reason == "tool_use":
        response = LLM(messages, tools)
        execute tools
        append results
"""

import os
import subprocess

from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv(override=True)

if os.getenv("ANTHROPIC_BASE_URL"):
    os.environ.pop("ANTHROPIC_AUTH_TOKEN", None)

client = Anthropic(base_url=os.getenv("ANTHROPIC_BASE_URL"))
MODEL = os.environ["MODEL_ID"]

SYSTEM = f"You are a coding agent at {os.getcwd()}. Use bash to solve tasks. Act, don't explain."

TOOLS = [{
    "name": "bash",
    "description": "Run a shell command.",
    "input_schema": {
        "type": "object",
        "properties": {"command": {"type": "string"}},
        "required": ["command"],
    },
}]


def run_bash(command: str) -> str:
    dangerous = ["rm -rf /", "sudo", "shutdown", "reboot", "> /dev/"]
    if any(d in command for d in dangerous):
        return "Error: Dangerous command blocked"
    try:
        r = subprocess.run(command, shell=True, cwd=os.getcwd(),
                          capture_output=True, text=True, timeout=120)
        out = (r.stdout + r.stderr).strip()
        return out[:50000] if out else "(no output)"
    except subprocess.TimeoutExpired:
        return "Error: Timeout (120s)"


# -- The core pattern: a while loop that calls tools until the model stops --
def agent_loop(messages: list):
    while True:
        response = client.messages.create(
            model=MODEL, system=SYSTEM, messages=messages,
            tools=TOOLS, max_tokens=80000,
        )
        # Append assistant turn
        messages.append({"role": "assistant", "content": response.content})
        # If the model didn't call a tool, we're done
        if response.stop_reason != "tool_use":
            return
        # Execute each tool call, collect results
        results = []
        for block in response.content:
            if block.type == "tool_use":
                print(f"\\033[33m$ {block.input['command']}\\033[0m")
                output = run_bash(block.input["command"])
                print(output[:200])
                results.append({"type": "tool_result", "tool_use_id": block.id,
                                "content": output})
        messages.append({"role": "user", "content": results})


if __name__ == "__main__":
    history = []
    while True:
        try:
            query = input("\\033[36m01> \\033[0m")
        except (EOFError, KeyboardInterrupt):
            break
        if query.strip().lower() in ("q", "exit", ""):
            break
        history.append({"role": "user", "content": query})
        agent_loop(history)
        response_content = history[-1]["content"]
        if isinstance(response_content, list):
            for block in response_content:
                if hasattr(block, "text"):
                    print(block.text)
        print()`,
  },
  {
    id: 's02',
    title: 'Tool Use',
    subtitle: '工具使用',
    motto: 'Adding a tool means adding one handler',
    phase: 1,
    docUrl: 'https://github.com/shareAI-lab/learn-claude-code/blob/main/docs/zh/s02-tool-use.md',
    codeUrl: 'https://github.com/shareAI-lab/learn-claude-code/blob/main/agents/s02_tool_use.py',
    content: `# Tool Use

## 工具使用 (Tool Use)

Tool Use 是 Claude Code 区别于普通对话的关键能力 —— 让 Agent 能够调用外部工具完成实际任务。

### 核心概念

**Dispatch Map 是关键**：它根据工具名称调用对应的处理函数，实现灵活的指令分发。

### 工具选择参考

| Tools | 1 (基础) | 4 (完整) | TOOL_HANDLERS | safe_path |
|---|---|---|---|---|
| Dispatch | 基础 | 高级 | 调度器 | 安全检查 |
| Agent loop | 循环 | 递归 | 架构 | 验证 |

### Dispatch Map 实现

\`\`\`python
TOOL_HANDLERS = {
    "bash":       lambda **kw: run_bash(kw["command"]),
    "read_file":  lambda **kw: run_read(kw["path"], kw.get("limit")),
    "write_file": lambda **kw: run_write(kw["path"], kw["content"]),
    "edit_file":  lambda **kw: run_edit(kw["path"], kw["old_text"], kw["new_text"]),
}
\`\`\`

### 处理流程

\`\`\`python
for block in response.content:
    if block.type == "tool_use":
        handler = TOOL_HANDLERS.get(block.name)
        output = handler(**block.input) if handler \\
                 else f"Unknown tool: {block.name}"
        results.append({
            "type": "tool_result",
            "tool_use_id": block.id,
            "content": output,
        })
\`\`\`

### 实践

**Prompt 示例**:

> 1. Read the file \`requirements.txt\`
> 2. Create a file called \`greet.py\` with a \`greet(name)\` function
> 3. Edit \`greet.py\` to add a docstring to the function
> 4. Read \`greet.py\` to verify the edit worked

### 总结

Tool Use 的核心是 **dispatch map** + **handler 列表**。Agent 循环通过 LLM 选择工具，然后通过调度机制执行，最终收集结果。`,
    code: `#!/usr/bin/env python3
# Harness: tool dispatch -- expanding what the model can reach.
"""s02_tool_use.py - Tools

The agent loop from s01 didn't change. We just added tools to the array
and a dispatch map to route calls.
"""

import os
import subprocess
from pathlib import Path

from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv(override=True)

if os.getenv("ANTHROPIC_BASE_URL"):
    os.environ.pop("ANTHROPIC_AUTH_TOKEN", None)

WORKDIR = Path.cwd()
client = Anthropic(base_url=os.getenv("ANTHROPIC_BASE_URL"))
MODEL = os.environ["MODEL_ID"]

SYSTEM = f"You are a coding agent at {WORKDIR}. Use tools to solve tasks. Act, don't explain."


def safe_path(p: str) -> Path:
    path = (WORKDIR / p).resolve()
    if not path.is_relative_to(WORKDIR):
        raise ValueError(f"Path escapes workspace: {p}")
    return path


def run_bash(command: str) -> str:
    dangerous = ["rm -rf /", "sudo", "shutdown", "reboot", "> /dev/"]
    if any(d in command for d in dangerous):
        return "Error: Dangerous command blocked"
    try:
        r = subprocess.run(command, shell=True, cwd=WORKDIR,
                           capture_output=True, text=True, timeout=120)
        out = (r.stdout + r.stderr).strip()
        return out[:5000] if out else "(no output)"
    except subprocess.TimeoutExpired:
        return "Error: Timeout (120s)"


def run_read(path: str, limit: int = None) -> str:
    try:
        text = safe_path(path).read_text()
        lines = text.splitlines()
        if limit and limit < len(lines):
            lines = lines[:limit] + [f"... ({len(lines) - limit} more lines)"]
        return "\\n".join(lines)[:5000]
    except Exception as e:
        return f"Error: {e}"


def run_write(path: str, content: str) -> str:
    try:
        fp = safe_path(path)
        fp.parent.mkdir(parents=True, exist_ok=True)
        fp.write_text(content)
        return f"Wrote {len(content)} bytes to {path}"
    except Exception as e:
        return f"Error: {e}"


def run_edit(path: str, old_text: str, new_text: str) -> str:
    try:
        fp = safe_path(path)
        content = fp.read_text()
        if old_text not in content:
            return f"Error: Text not found in {path}"
        fp.write_text(content.replace(old_text, new_text, 1))
        return f"Edited {path}"
    except Exception as e:
        return f"Error: {e}"


# - The dispatch map: {tool_name: handler} --
TOOL_HANDLERS = {
    "bash":      lambda **kw: run_bash(kw["command"]),
    "read_file": lambda **kw: run_read(kw["path"], kw.get("limit")),
    "write_file": lambda **kw: run_write(kw["path"], kw["content"]),
    "edit_file": lambda **kw: run_edit(kw["path"], kw["old_text"], kw["new_text"]),
}

TOOLS = [
    {"name": "bash", "description": "Run a shell command.",
     "input_schema": {"type": "object", "properties": {"command": {"type": "string"}}, "required": ["command"]}},
    {"name": "read_file", "description": "Read file contents.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "limit": {"type": "integer"}}, "required": ["path"]}},
    {"name": "write_file", "description": "Write content to file.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "content": {"type": "string"}}, "required": ["path", "content"]}},
    {"name": "edit_file", "description": "Replace exact text in file.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "old_text": {"type": "string"}, "new_text": {"type": "string"}}, "required": ["path", "old_text", "new_text"]}},
]


def agent_loop(messages: list):
    while True:
        response = client.messages.create(
            model=MODEL, system=SYSTEM, messages=messages,
            tools=TOOLS, max_tokens=8000,
        )
        messages.append({"role": "assistant", "content": response.content})
        if response.stop_reason != "tool_use":
            return
        results = []
        for block in response.content:
            if block.type == "tool_use":
                handler = TOOL_HANDLERS.get(block.name)
                output = handler(**block.input) if handler else f"Unknown tool: {block.name}"
                print(f"> {block.name}: {output[:200]}")
                results.append({"type": "tool_result", "tool_use_id": block.id, "content": output})
        messages.append({"role": "user", "content": results})


if __name__ == "__main__":
    history = []
    while True:
        try:
            query = input("\\033[36m>> \\033[0m")
        except (EOFError, KeyboardInterrupt):
            break
        if query.strip().lower() in ("q", "exit", ""):
            break
        history.append({"role": "user", "content": query})
        agent_loop(history)
        response_content = history[-1]["content"]
        if isinstance(response_content, list):
            for block in response_content:
                if hasattr(block, "text"):
                    print(block.text)
        print()`,
  },
  {
    id: 's03',
    title: 'TodoWrite',
    subtitle: '任务清单',
    motto: 'An agent without a plan drifts',
    phase: 2,
    docUrl: 'https://github.com/shareAI-lab/learn-claude-code/blob/main/docs/zh/s03-todo-write.md',
    codeUrl: 'https://github.com/shareAI-lab/learn-claude-code/blob/main/agents/s03_todo_write.py',
    content: `# TodoWrite

## 概述

TodoWrite 是 Agent 的规划机制 —— 让 Agent 能够追踪自己的进度。

### 核心概念

**TodoManager** - 管理待办事项，支持验证（同时只能有一个任务进行中）

**nag reminder** - 当轮次 >= 3 且用户发送列表时自动注入提醒

### 关键流程

\`\`\`
User prompt → [Tool: todo] → Tool result → TodoManager state
                                        ↓
                              if rounds_since_todo >= 3:
                                inject <reminder>
\`\`\`

### 练习

创建一个 Python 包：
1. 重构 \`hello.py\` - 添加类型提示、文档字符串和 main guard
2. 创建 Python 包，包含 \`__init__.py\`,\`utils.py\`, 和 \`tests/test_utils.py\`
3. 审查所有 Python 文件并修复样式问题`,
    code: `#!/usr/bin/env python3
# Harness: planning -- keeping the model on course without scripting the route.
"""s03_todo_write.py - TodoWrite

The model tracks its own progress via a TodoManager. A nag remider
forces it to keep updating when it forgets.
"""

import os
import subprocess
from pathlib import Path

from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv(override=True)

if os.getenv("ANTHROPIC_BASE_URL"):
    os.environ.pop("ANTHROPIC_AUTH_TOKEN", None)

WORKDIR = Path.cwd()
client = Anthropic(base_url=os.getenv("ANTHROPIC_BASE_URL"))
MODEL = os.environ["MODEL_ID"]

SYSTEM = f"""You are a coding agent at {WORKDIR}.
Use the todo tool to plan multi-step tasks. Mark in_progress before starting, completed when done.
Prefer tools over prose。"""


# -- TodoManager: structured state the LLM writes to --
class TodoManager:
    def __init__(self):
        self.items = []

    def update(self, items: list) -> str:
        if len(items) > 20:
            raise ValueError("Max 20 todos allowed")
        validated = []
        in_progress_count = 0
        for i, item in enumerate(items):
            text = str(item.get("text", "")).strip()
            status = str(item.get("status", "pending")).lower()
            item_id = str(item.get("id", str(i + 1)))
            if not text:
                raise ValueError(f"Item {item_id}: text required")
            if status not in ("pending", "in_progress", "completed"):
                raise ValueError(f"Item {item_id}: invalid status '{status}'")
            if status == "in_progress":
                in_progress_count += 1
            validated.append({"id": item_id, "text": text, "status": status})
        if in_progress_count > 1:
            raise ValueError("Only one task can be in_progress at a time")
        self.items = validated
        return self.render()

    def render(self) -> str:
        if not self.items:
            return "No todos."
        lines = []
        for item in self.items:
            marker = {"pending": "[ ]", "in_progress": "[>]", "completed": "[x]"}[item["status"]]
            lines.append(f"{marker} #{item['id']}: {item['text']}")
        done = sum(1 for t in self.items if t["status"] == "completed")
        lines.append(f"\\n({done}/{len(self.items)} completed)")
        return "\\n".join(lines)


TODO = TodoManager()


# -- Tool implementations --
def safe_path(p: str) -> Path:
    path = (WORKDIR / p).resolve()
    if not path.is_relative_to(W raise ValueError(fORKDIR):
       "Path escapes workspace: {p}")
    return path

def run_base(command: str) -> str:
    dangerous = ["rm -rf /", "sudo", "shutdown", "reboot", "> /dev/"]
    if any(d in command for d in dangerous):
        return "Error: Dangerous command blocked"
    try:
        r = subprocess.run(command, shell=True, cwd=WORKDIR,
                          capture_output=True, text=True, timeout=120)
        out = (r.stdout + r.stderr).strip()
        return out[:50000] if out else "(no output)"
    except subprocess.TimeoutExpired:
        return "Error: Timeout (120s)"

def run_read(path: str, limit: int = None) -> str:
    try:
        lines = safe_path(path).read_text().splitlines()
        if limit and limit < len(lines):
            lines = lines[:limit] + [f"... ({len(lines) - limit} more)"]
        return "\\n".join(lines)[:50000]
    except Exception as e:
        return f"Error: {e}"

def run_write(path: str, content: str) -> str:
    try:
        fp = safe_path(path)
        fp.parent.mkdir(parents=True, exist_ok=True)
        fp.write_text(content)
        return f"Wrote {len(content)} bytes"
    except Exception as e:
        return f"Error: {e}"

def run_edit(path: str, old_text: str, new_text: str) -> str:
    try:
        fp = safe_path(path)
        content = fp.read_text()
        if old_text not in content:
            return f"Error: Text not found in {path}"
        fp.write_text(content.replace(old_text, new_text, 1))
        return f"Edited {path}"
    except Exception as e:
        return f"Error: {e}"


TOOL_HANDLERS = {
    "bash":      lambda **kw: run_base(kw["command"]),
    "read_file": lambda **kw: run_read(kw["path"], kw.get("limit")),
    "write_file": lambda **kw: run_write(kw["path"], kw["content"]),
    "edit_file":  lambda **kw: run_edit(kw["path"], kw["old_text"], kw["new_text"]),
    "todo":      lambda **kw: TODO.update(kw["items"]),
}

TOOLS = [
    {"name": "bash", "description": "Run a shell command.",
     "input_schema": {"type": "object", "properties": {"command": {"type": "string"}}, "required": ["command"]}},
    {"name": "read_file", "description": "Read file contents.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "limit": {"type": "integer"}}, "required": ["path"]}},
    {"name": "write_file", "description": "Write content to file.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "content": {"type": "string"}}, "required": ["path", "content"]}},
    {"name": "edit_file", "description": "Replace exact text in file.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "old_text": {"type": "string"}, "new_text": {"type": "string"}}, "required": ["path", "old_text", "new_text"]}},
    {"name": "todo", "description": "Update task list. Track progress on multi-step tasks.",
     "input_schema": {"type": "object", "properties": {"items": {"type": "array", "items": {"type": "object", "properties": {"id": {"type": "string"}, "text": {"type": "string"}, "status": {"type": "string", "enum": ["pending", "in_progress", "completed"]}}, "required": ["id", "text", "status"]}}}, "required": ["items"]}},
]


# -- Agent loop with nag reminder injection --
def agent_loop(messages: list):
    rounds_since_todo = 0
    while True:
        response = client.messages.create(
            model=MODEL, system=SYSTEM, messages=messages,
            tools=TOOLS, max_tokens=8000,
        )
        messages.append({"role": "assistant", "content": response.content})
        if response.stop_reason != "tool_use":
            return
        results = []
        used_todo = False
        for block in response.content:
            if block.type == "tool_use":
                handler = TOOL_HANDLERS.get(block.name)
                try:
                    output = handler(**block.input) if handler else f"Unknown tool: {block.name}"
                except Exception as e:
                    output = f"Error: {e}"
                print(f"> {block.name}: {str(output)[:200]}")
                results.append({"type": "tool_result", "tool_use_id": block.id, "content": str(output)})
                if block.name == "todo":
                    used_todo = True
        rounds_since_todo = 0 if used_todo else rounds_since_todo + 1
        if rounds_since_todo >= 3:
            results.insert(0, {"type": "text", "text": "<reminder>Update your todos.</reminder>"})
        messages.append({"role": "user", "content": results})


if __name__ == "__main__":
    history = []
    while True:
        try:
            query = input("\\033[36ms03 > \\033[0m")
        except (EOFError, KeyboardInterrupt):
            break
        if query.strip().lower() in ("q", "exit", ""):
            break
        history.append({"role": "user", "content": query})
        agent_loop(history)
        response_content = history[-1]["content"]
        if isinstance(response_content, list):
            for block in response_content:
                if hasattr(block, "text"):
                    print(block.text)
        print()`,
  },
  {
    id: 's04',
    title: 'Subagents',
    subtitle: '子代理',
    motto: 'Break big tasks down',
    phase: 2,
    docUrl: 'https://github.com/shareAI-lab/learn-claude-code/blob/main/docs/zh/s04-subagent.md',
    codeUrl: 'https://github.com/shareAI-lab/learn-claude-code/blob/main/agents/s04_subagent.py',
    content: `# Subagents

## 子代理 (Subagents)

子代理、任务规划与对话管理的艺术 —— 详细说明 messages[]，使用消息流和代理协调。

### 代理模式

#### 调用子代理

\`\`\`python
PARENT_TOOLS = CHILD_TOOLS + [
    {
        "name": "task",
        "description": "Spawn a subagent with fresh context.",
        "input_schema": {
            "type": "object",
            "properties": {"prompt": {"type": "string"}},
            "required": ["prompt"],
        }
    },
]
\`\`\`

### 流程图对比

\`\`\`
Parent agent                  Subagent
+------------------+           +------------------+
| messages=[...]   |           | messages=[]      | <-- fresh
|                  |  dispatch |                  |
| tool: task       | --------> | while tool_use:  |
|   prompt="..."   |           |   call tools     |
|                  |  summary  |   append results |
|   result = "..." | <-------- | return last text |
+------------------+           +------------------+

Parent context stays clean. Subagent context is discarded.
\`\`\`

### 任务设计建议

1. **使用子代理获取项目信息**: 了解项目结构、使用的技术栈和框架
2. **委托**: 读取所有 .py 文件，汇总每个文件的功能描述
3. **使用任务创建新模块**: 创建后进行验证

### 关键要点

- 子代理使用独立的消息历史，避免污染父代理上下文
- 适合处理需要深入探索或复杂多步骤的任务
- 完成后返回结果摘要给父代理`,
    code: `#!/usr/bin/env python3
# Harness: context isolation -- protecting the model's clarity of thought.
"""
s04_subagent.py - Subagents

Spawn a child agent with fresh messages=[]. The child works in its own
context, sharing the filesystem, then returns only a summary to the parent.
"""

import os
import subprocess
from pathlib import Path

from anthropic import Anthropic
from dotenv import load_dotenv


load_dotenv(override=True)

if os.getenv("ANTHROPIC_BASE_URL"):
    os.environ.pop("ANTHROPIC_AUTH_TOKEN", None)

WORKDIR = Path.cwd()
client = Anthropic(base_url=os.getenv("ANTHROPIC_BASE_URL"))
MODEL = os.environ["MODEL_ID"]

SYSTEM = f"You are a coding agent at {WORKDIR}. Use the task tool to delegate exploration or subtasks."
SUBAGENT_SYSTEM = f"You are a coding subagent at {WORKDIR}. Complete the given task, then summarize your findings."


# -- Tool implementations shared by parent and child --
def safe_path(p: str) -> Path:
    path = (WORKDIR / p).resolve()
    if not path.is_relative_to(WORKDIR):
        raise ValueError(f"Path escapes workspace: {p}")
    return path

def run_bash(command: str) -> str:
    dangerous = ["rm -rf /", "sudo", "shutdown", "reboot", "> /dev/"]
    if any(d in command for d in dangerous):
        return "Error: Dangerous command blocked"
    try:
        r = subprocess.run(command, shell=True, cwd=WORKDIR,
                          capture_output=True, text=True, timeout=120)
        out = (r.stdout + r.stderr).strip()
        return out[:50000] if out else "(no output)"
    except subprocess.TimeoutExpired:
        return "Error: Timeout (120s)"

def run_read(path: str, limit: int = None) -> str:
    try:
        lines = safe_path(path).read_text().splitlines()
        if limit and limit < len(lines):
            lines = lines[:limit] + [f"... ({len(lines) - limit} more)"]
        return "\\n".join(lines)[:50000]
    except Exception as e:
        return f"Error: {e}"

def run_write(path: str, content: str) -> str:
    try:
        fp = safe_path(path)
        fp.parent.mkdir(parents=True, exist_ok=True)
        fp.write_text(content)
        return f"Wrote {len(content)} bytes"
    except Exception as e:
        return f"Error: {e}"

def run_edit(path: str, old_text: str, new_text: str) -> str:
    try:
        fp = safe_path(path)
        content = fp.read_text()
        if old_text not in content:
            return f"Error: Text not found in {path}"
        fp.write_text(content.replace(old_text, new_text, 1))
        return f"Edited {path}"
    except Exception as e:
        return f"Error: {e}"


TOOL_HANDLERS = {
    "bash":      lambda **kw: run_bash(kw["command"]),
    "read_file": lambda **kw: run_read(kw["path"], kw.get("limit")),
    "write_file": lambda **kw: run_write(kw["path"], kw["content"]),
    "edit_file": lambda **kw: run_edit(kw["path"], kw["old_text"], kw["new_text"]),
}

# Child gets all base tools except task (no recursive spawning)
CHILD_TOOLS = [
    {"name": "bash", "description": "Run a shell command.",
     "input_schema": {"type": "object", "properties": {"command": {"type": "string"}}, "required": ["command"]}},
    {"name": "read_file", "description": "Read file contents.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "limit": {"type": "integer"}}, "required": ["path"]}},
    {"name": "write_file", "description": "Write content to file.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "content": {"type": "string"}}, "required": ["path", "content"]}},
    {"name": "edit_file", "description": "Replace exact text in file.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "old_text": {"type": "string"}, "new_text": {"type": "string"}}, "required": ["path", "old_text", "new_text"]}},
]


# -- Subagent: fresh context, filtered tools, summary-only return --
def run_subagent(prompt: str) -> str:
    sub_messages = [{"role": "user", "content": prompt}]  # fresh context
    for _ in range(30):  # safety limit
        response = client.messages.create(
            model=MODEL, system=SUBAGENT_SYSTEM, messages=sub_messages,
            tools=CHILD_TOOLS, max_tokens=80000,
        )
        sub_messages.append({"role": "assistant", "content": response.content})
        if response.stop_reason != "tool_use":
            break
        results = []
        for block in response.content:
            if block.type == "tool_use":
                handler = TOOL_HANDLERS.get(block.name)
                output = handler(**block.input) if handler else f"Unknown tool: {block.name}"
                results.append({"type": "tool_result", "tool_use_id": block.id, "content": str(output)[:50000]})
        sub_messages.append({"role": "user", "content": results})
    # Only the final text returns to the parent -- child context is discarded
    return "".join(b.text for b in response.content if hasattr(b, "text")) or "(no summary)"


# -- Parent tools: base tools + task dispatcher --
PARENT_TOOLS = CHILD_TOOLS + [
    {"name": "task", "description": "Spawn a subagent with fresh context. It shares the filesystem but not conversation history.",
     "input_schema": {"type": "object", "properties": {"prompt": {"type": "string"}, "description": {"type": "string", "description": "Short description of the task"}}, "required": ["prompt"]}},
]


def agent_loop(messages: list):
    while True:
        response = client.messages.create(
            model=MODEL, system=SYSTEM, messages=messages,
            tools=PARENT_TOOLS, max_tokens=80000,
        )
        messages.append({"role": "assistant", "content": response.content})
        if response.stop_reason != "tool_use":
            return
        results = []
        for block in response.content:
            if block.type == "tool_use":
                if block.name == "task":
                    desc = block.input.get("description", "subtask")
                    print(f"> task ({desc}): {block.input['prompt'][:80]}")
                    output = run_subagent(block.input["prompt"])
                else:
                    handler = TOOL_HANDLERS.get(block.name)
                    output = handler(**block.input) if handler else f"Unknown tool: {block.name}"
                print(f"  {str(output)[:200]}")
                results.append({"type": "tool_result", "tool_use_id": block.id, "content": str(output)})
        messages.append({"role": "user", "content": results})


if __name__ == "__main__":
    history = []
    while True:
        try:
            query = input("\\033[36ms04 >> \\033[0m")
        except (EOFError, KeyboardInterrupt):
            break
        if query.strip().lower() in ("q", "exit", ""):
            break
        history.append({"role": "user", "content": query})
        agent_loop(history)
        response_content = history[-1]["content"]
        if isinstance(response_content, list):
            for block in response_content:
                if hasattr(block, "text"):
                    print(block.text)
        print()`,
  },
  {
    id: 's05',
    title: 'Skills',
    subtitle: '技能',
    motto: 'Load knowledge when you need it',
    phase: 2,
    docUrl: 'https://github.com/shareAI-lab/learn-claude-code/blob/main/docs/zh/s05-skill-loading.md',
    codeUrl: 'https://github.com/shareAI-lab/learn-claude-code/blob/main/agents/s05_skill_loading.py',
    content: `# Skills

## 技能加载 (Skill Loading)

按需知识注入 —— 领域专业知识，按需加载。

### 双层架构

**Layer 1 (System Prompt)**: 仅包含技能名称和简短描述 (~100 tokens)，始终存在。

**Layer 2 (Tool Result)**: 完整技能内容，仅在请求时加载 (~2000 tokens)，通过 \`load_skill\` 工具调用返回。

### 优势

- 相比在 system prompt 中塞入所有技能，减少约 90% 的 token 浪费
- 模型仅在明确请求时接收相关知识

### 实现

- 技能存储为 \`skills/*/SKILL.md\` 文件，带 YAML frontmatter
- \`SkillLoader\` 类递归扫描和解析这些文件
- 返回描述用于 system prompt，返回完整内容用于工具结果`,
    code: `# Skills 模块 - 按需加载领域知识
# 完整代码见: https://github.com/shareAI-lab/learn-claude-code/blob/main/agents/s05_skill_loading.py

class SkillLoader:
    """扫描 skills/ 目录，加载技能定义"""
    def __init__(self, skills_dir: Path):
        self.skills_dir = skills_dir

    def get_descriptions(self) -> str:
        """返回系统提示中使用的技能描述列表"""
        pass

    def get_content(self, name: str) -> str:
        """返回完整技能内容（带 <skill> 标签）"""
        pass

# 工具处理
TOOL_HANDLERS = {
    "bash": ...,
    "read_file": ...,
    "write_file": ...,
    "edit_file": ...,
    "load_skill": lambda **kw: skill_loader.get_content(kw["name"]),
}`,
  },
  {
    id: 's06',
    title: 'Context Compact',
    subtitle: '上下文压缩',
    motto: 'Context will fill up',
    phase: 2,
    docUrl: 'https://github.com/shareAI-lab/learn-claude-code/blob/main/docs/zh/s06-context-compact.md',
    codeUrl: 'https://github.com/shareAI-lab/learn-claude-code/blob/main/agents/s06_context_compact.py',
    content: `# Context Compact

## 上下文压缩

三层压缩策略，管理有限的 AI 上下文窗口。

### 三层压缩

**Layer 1: micro_compact** (每轮静默运行)
- 将较早的工具结果替换为占位符，如 \`[Previous: used {tool_name}]\`

**Layer 2: auto_compact** (触发条件: tokens > 50,000)
- 保存完整记录到 \`.transcripts/\`
- 让 LLM 创建总结
- 用总结替换所有消息

**Layer 3: compact tool** (手动触发)
- 手动触发立即进行总结
- 与 auto_compact 相同

### 关键洞察

信息不会丢失 —— 完整历史保存在磁盘上的 \`.transcripts/\`，仅从活动上下文窗口中移除。这使得处理大型项目而不会达到 token 限制。`,
    code: `#!/usr/bin/env python3
# Harness: compression -- clean memory for infinite sessions.
"""s06_context_compact.py - Compact

Three-layer compression pipeline so the agent can work forever:
"""

import json
import os
import subprocess
import time
from pathlib import Path

from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv(override=True)

WORKDIR = Path.cwd()
client = Anthropic(base_url=os.getenv("ANTHROPIC_BASE_URL"))
MODEL = os.environ["MODEL_ID"]

THRESHOLD = 50000
TRANSCRIPT_DIR = WORKDIR / ".transcripts"
KEEP_RECENT = 3


def estimate_tokens(messages: list) -> int:
    """Rough token count: ~4 chars per token."""
    return len(str(messages)) // 4


# -- Layer 1: micro_compact - replace old tool results with placeholders --
def micro_compact(messages: list) -> list:
    # ... 实现细节
    return messages


# -- Layer 2: auto_compact - save transcript, summarize, replace messages --
def auto_compact(messages: list) -> list:
    TRANSCRIPT_DIR.mkdir(exist_ok=True)
    transcript_path = TRANSCRIPT_DIR / f"transcript_{int(time.time())}.jsonl"
    # 保存完整记录
    # 让 LLM 总结
    # 用总结替换消息
    return [
        {"role": "user", "content": f"[Conversation compressed]{summary}"},
        {"role": "assistant", "content": "Understood."},
    ]


# -- Agent loop with compression --
def agent_loop(messages: list):
    while True:
        micro_compact(messages)  # Layer 1
        if estimate_tokens(messages) > THRESHOLD:  # Layer 2
            messages[:] = auto_compact(messages)

        response = client.messages.create(...)
        # ... 处理工具调用
`,
  },
  {
    id: 's07',
    title: 'Tasks',
    subtitle: '任务管理',
    motto: 'Break big goals into small tasks',
    phase: 3,
    docUrl: 'https://github.com/shareAI-lab/learn-claude-code/blob/main/docs/zh/s07-task-system.md',
    codeUrl: 'https://github.com/shareAI-lab/learn-claude-code/blob/main/agents/s07_task_system.py',
    content: `# Tasks

## 任务系统

将平面内存待办列表 (s03) 升级为带依赖追踪的磁盘持久化任务图。

### 核心问题

之前的系统没有排序、没有依赖，上下文压缩时会丢失状态。

### 解决方案

任务成为 JSON 文件，具有：
- \`blockedBy\` / \`blocks\` 依赖边
- 状态工作流：\`pending\` → \`in_progress\` → \`completed\`
- 四个新工具：\`task_create\`, \`task_update\`, \`task_list\`, \`task_get\`

### 任务图

\`\`\`
.tasks/
  task_1.json  {"id":1, "status":"completed"}
  task_2.json  {"id":2, "blockedBy":[1], "status":"pending"}
  task_3.json  {"id":3, "blockedBy":[1], "status":"pending"}
  task_4.json  {"id":4, "blockedBy":[2,3], "status":"pending"}
\`\`\`

### 关键洞察

当一个任务完成时，系统自动将其从其他任务的 \`blockedBy\` 数组中移除，解锁依赖任务。`,
    code: `#!/usr/bin/env python3
# Harness: persistent tasks -- goals that outlive any single conversation.
"""s07_task_system.py - Tasks

Tasks persist as JSON files in .tasks/ so they survive context compression.
Each task has a dependency graph (blockedBy/blocks).
"""

import json
import os
import subprocess
from pathlib import Path

from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv(override=True)

WORKDIR = Path.cwd()
client = Anthropic(base_url=os.getenv("ANTHROPIC_BASE_URL"))
MODEL = os.environ["MODEL_ID"]
TASKS_DIR = WORKDIR / ".tasks"


# -- TaskManager: CRUD with dependency graph, persisted as JSON files --
class TaskManager:
    def __init__(self, tasks_dir: Path):
        self.dir = tasks_dir
        self.dir.mkdir(exist_ok=True)

    def create(self, subject: str, description: str = "") -> str:
        task = {
            "id": self._next_id, "subject": subject, "description": description,
            "status": "pending", "blockedBy": [], "blocks": [], "owner": "",
        }
        # 保存到 .tasks/task_N.json
        return json.dumps(task, indent=2)

    def update(self, task_id: int, status: str = None,
               add_blocked_by: list = None, add_blocks: list = None) -> str:
        # 更新任务状态
        # 当任务完成时，从所有其他任务的 blockedBy 中移除
        pass

    def list_all(self) -> str:
        # 列出所有任务及状态
        pass


TASKS = TaskManager(TASKS_DIR)

# 工具定义
TOOLS = [
    {"name": "task_create", "description": "Create a new task."},
    {"name": "task_update", "description": "Update a task's status or dependencies."},
    {"name": "task_list", "description": "List all tasks with status summary."},
    {"name": "task_get", "description": "Get full details of a task by ID."},
    # ... 其他基础工具
]`,
  },
  {
    id: 's08',
    title: 'Background Tasks',
    subtitle: '后台任务',
    motto: 'Run slow operations in background',
    phase: 3,
    docUrl: 'https://github.com/shareAI-lab/learn-claude-code/blob/main/docs/zh/s08-background-tasks.md',
    codeUrl: 'https://github.com/shareAI-lab/learn-claude-code/blob/main/agents/s08_background_tasks.py',
    content: `# Background Tasks

## 后台任务

引入 **BackgroundManager**，在守护线程中异步运行长时间命令，让 agent 能够继续工作。

### 核心机制

- 命令生成后台线程，立即返回
- 结果在线程安全的通知队列中排队
- 在每次 LLM 调用前排空队列，将结果作为用户消息注入

### 代码模式

\`\`\`python
task_id = BG.run("npm install && pytest")
# ... 其他工作在这里发生 ...
# 结果在下一次 LLM 调用前自动注入
\`\`\`

### s07 vs s08 变化

| 方面 | s07 | s08 |
|------|-----|-----|
| 执行 | 仅阻塞 | 阻塞 + 后台 |
| 工具 | 8 | 6 (简化) |
| 通知 | 无 | 每轮排空队列 |
| 并发 | 无 | 守护线程 |

该模式保持 agent 循环单线程，同时并行化子进程 I/O。`,
    code: `#!/usr/bin/env python3
# Harness: background execution -- the model thinks while the harness waits.
"""s08_background_tasks.py - Background Tasks

Run commands in background threads. A notification queue is drained
before each LLM call to deliver results.
"""

import os
import subprocess
import threading
import uuid
from pathlib import Path

from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv(override=True)

WORKDIR = Path.cwd()
client = Anthropic(base_url=os.getenv("ANTHROPIC_BASE_URL"))
MODEL = os.environ["MODEL_ID"]


# -- BackgroundManager: threaded execution + notification queue --
class BackgroundManager:
    def __init__(self):
        self.tasks = {}
        self._notification_queue = []
        self._lock = threading.Lock()

    def run(self, command: str) -> str:
        task_id = str(uuid.uuid4())[:8]
        thread = threading.Thread(
            target=self._execute, args=(task_id, command), daemon=True
        )
        thread.start()
        return f"Background task {task_id} started"

    def _execute(self, task_id: str, command: str):
        # 在后台线程中执行命令
        # 完成后将结果放入通知队列

    def drain_notifications(self) -> list:
        # 返回并清空通知队列


BG = BackgroundManager()

# 工具定义
TOOLS = [
    {"name": "background_run", "description": "Run command in background thread. Returns task_id immediately."},
    {"name": "check_background", "description": "Check background task status."},
    # ... 其他工具
]`,
  },
  {
    id: 's09',
    title: 'Agent Teams',
    subtitle: '代理团队',
    motto: 'Delegate to teammates',
    phase: 4,
    docUrl: 'https://github.com/shareAI-lab/learn-claude-code/blob/main/docs/zh/s09-agent-teams.md',
    codeUrl: 'https://github.com/shareAI-lab/learn-claude-code/blob/main/agents/s09_agent_teams.py',
    content: `# Agent Teams

## 代理团队

持久化的多代理协作，超越单次代理 (s04) 和后台命令 (s08)。

### 核心问题

真正的团队协作需要具有身份、生命周期管理和通信渠道的持久代理。

### 关键组件

- **TeammateManager**: 通过 \`config.json\` 生成和管理团队成员
- **MessageBus**: 追加-only JSONL 收件箱，实现异步通信
- **生命周期状态**: \`WORKING\` → \`IDLE\` → \`WORKING\` 循环直到关闭

### s08 vs s09 变化

- 工具: 6 → 9 (+spawn, send, read_inbox)
- 架构: 单代理 → Lead + N 个队友
- 持久化: 无 → config.json + JSONL 收件箱
- 线程: 后台命令 → 完整代理循环
- 通信: 无 → message + broadcast 类型

### 消息类型

| 类型 | 描述 |
|------|------|
| message | 普通文本消息 |
| broadcast | 发送给所有队友 |
| shutdown_request | 请求关闭 (s10) |
| shutdown_response | 批准/拒绝关闭 (s10) |
| plan_approval_response | 批准/拒绝计划 (s10) |`,
    code: `#!/usr/bin/env python3
# Harness: team mailboxes -- multiple models, coordinated through files.
"""s09_agent_teams.py - Agent Teams

Persistent named agents with file-based JSONL inboxes. Each teammate runs
its own agent loop in a separate thread. Communication via append-only inboxes.
"""

import json
import os
import subprocess
import threading
import time
from pathlib import Path

from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv(override=True)

WORKDIR = Path.cwd()
client = Anthropic(base_url=os.getenv("ANTHROPIC_BASE_URL"))
MODEL = os.environ["MODEL_ID"]
TEAM_DIR = WORKDIR / ".team"
INBOX_DIR = TEAM_DIR / "inbox"


# -- MessageBus: JSONL inbox per teammate --
class MessageBus:
    def send(self, sender: str, to: str, content: str, msg_type: str = "message") -> str:
        # 发送消息到队友的收件箱

    def read_inbox(self, name: str) -> list:
        # 读取并排空收件箱

    def broadcast(self, sender: str, content: str, teammates: list) -> str:
        # 广播消息给所有队友


BUS = MessageBus(INBOX_DIR)


# -- TeammateManager: persistent named agents with config.json --
class TeammateManager:
    def spawn(self, name: str, role: str, prompt: str) -> str:
        # 生成持久代理


TEAM = TeammateManager(TEAM_DIR)

# 工具定义: 9 个工具
TOOLS = [
    {"name": "spawn_teammate", "description": "Spawn a persistent teammate."},
    {"name": "list_teammates", "description": "List all teammates."},
    {"name": "send_message", "description": "Send a message to a teammate."},
    {"name": "read_inbox", "description": "Read and drain inbox."},
    {"name": "broadcast", "description": "Send message to all teammates."},
    # ... 基础工具
]`,
  },
  {
    id: 's10',
    title: 'Team Protocols',
    subtitle: '团队协议',
    motto: 'Shared communication rules',
    phase: 4,
    docUrl: 'https://github.com/shareAI-lab/learn-claude-code/blob/main/docs/zh/s10-team-protocols.md',
    codeUrl: 'https://github.com/shareAI-lab/learn-claude-code/blob/main/agents/s10_team_protocols.py',
    content: `# Team Protocols

## 团队协议

使用请求-响应模式和有限状态机 (FSM) 实现 AI 队友之间结构化协调的系统。

### 核心问题

没有协议，直接操作（如关闭或高风险更改）会发生而不经过适当协调，可能导致文件写入不完整或未批准的危险更改。

### 解决方案

共享 FSM，所有请求遵循：
- \`[pending\] --approve--> [approved]\`
- \`[pending\] --reject---> [rejected]\`

### 实现的两个主要协议

1. **Shutdown Protocol** - Lead 请求优雅关闭；队友批准或拒绝
2. **Plan Approval Protocol** - 队友提交计划供 Lead 在危险更改前审核

两者使用相同模式：发送者生成 \`request_id\`，接收者用相同 ID 和批准状态响应。`,
    code: `#!/usr/bin/env python3
# Harness: team protocols -- structured coordination with FSM.
"""s10_team_protocols.py - Team Protocols

Structured coordination between teammates using request-response pattern
with unique request IDs and finite state machine (FSM).
"""

import json
import os
import subprocess
import threading
import time
import uuid
from pathlib import Path

from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv(override=True)

WORKDIR = Path.cwd()
client = Anthropic(base_url=os.getenv("ANTHROPIC_BASE_URL"))
MODEL = os.environ["MODEL_ID"]

# 请求追踪器
shutdown_requests = {}
plan_requests = {}


# -- Shutdown Protocol --
def handle_shutdown_request(teammate: str) -> str:
    req_id = str(uuid.uuid4())[:8]
    shutdown_requests[req_id] = {"target": teammate, "status": "pending"}
    # 发送关闭请求到队友
    return f"Shutdown request {req_id} sent to '{teammate}'"


# -- Plan Approval Protocol --
def submit_plan(teammate: str, plan: str) -> str:
    req_id = str(uuid.uuid4())[:8]
    plan_requests[req_id] = {"from": teammate, "plan": plan, "status": "pending"}
    # 提交计划供审核
    return f"Plan submitted (request_id={req_id})"


# 工具定义: 12 个工具
TOOLS = [
    {"name": "shutdown_request", "description": "Request a teammate to shut down."},
    {"name": "shutdown_response", "description": "Respond to a shutdown request."},
    {"name": "plan_approval", "description": "Submit a plan for lead approval."},
    # ... 其他工具
]`,
  },
  {
    id: 's11',
    title: 'Autonomous Agents',
    subtitle: '自主代理',
    motto: 'Teammates scan and claim tasks',
    phase: 4,
    docUrl: 'https://github.com/shareAI-lab/learn-claude-code/blob/main/docs/zh/s11-autonomous-agents.md',
    codeUrl: 'https://github.com/shareAI-lab/learn-claude-code/blob/main/agents/s11_autonomous_agents.py',
    content: `# Autonomous Agents

## 自主代理

关键创新：队友通过扫描任务板并认领未认领的工作来自我组织 —— 无需 Lead 手动分配任务。

### 核心机制

- **双相循环**: WORK → IDLE → (恢复 WORK 或 SHUTDOWN)
- **IDLE 轮询**: 每 5s 检查一次收件箱和任务板，最长 60s
- **自动认领逻辑**: 查找 pending 状态且无 owner 和无 blocker 的任务
- **身份重注入**: 当上下文压缩到 3 条消息以下时，代理的身份块被重新插入以防止失忆症

### 工作流程

1. **WORK 阶段**: 标准代理循环
2. **IDLE 阶段**: 轮询收件箱消息和未认领任务
3. **自动认领**: 发现未认领任务时自动认领并开始工作

### 身份重注入

\`\`\`python
if len(messages) <= 3:
    messages.insert(0, make_identity_block(name, role, team_name))
    messages.insert(1, {"role": "assistant", "content": f"I am {name}. Continuing."})
\`\`\``,
    code: `#!/usr/bin/env python3
# Harness: autonomy -- models that find work without being told.
"""s11_autonomous_agents.py - Autonomous Agents

Idle cycle with task board polling, auto-claiming unclaimed tasks, and
identity re-injection after context compression.
"""

import json
import os
import subprocess
import threading
import time
import uuid
from pathlib import Path

from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv(override=True)

WORKDIR = Path.cwd()
client = Anthropic(base_url=os.getenv("ANTHROPIC_BASE_URL"))
MODEL = os.environ["MODEL_ID"]

POLL_INTERVAL = 5
IDLE_TIMEOUT = 60


# -- 任务板扫描 --
def scan_unclaimed_tasks() -> list:
    # 查找 pending 状态、无 owner、无 blocker 的任务
    pass


def claim_task(task_id: int, owner: str) -> str:
    # 认领任务


# -- 身份重注入 --
def make_identity_block(name: str, role: str, team_name: str) -> dict:
    return {
        "role": "user",
        "content": f"<identity>You are '{name}', role: {role}, team: {team_name}. Continue your work.</identity>",
    }


# -- 自主队友循环 --
def teammate_loop(name: str, role: str, prompt: str):
    while True:
        # WORK PHASE: 标准代理循环
        for _ in range(50):
            # 处理收件箱、执行工具
            pass

        # IDLE PHASE: 轮询收件箱和任务板
        for _ in range(IDLE_TIMEOUT // POLL_INTERVAL):
            time.sleep(POLL_INTERVAL)
            # 检查新消息
            # 扫描未认领任务
            # 自动认领


# 工具定义: 14 个工具
TOOLS = [
    {"name": "idle", "description": "Signal no more work. Enters idle polling."},
    {"name": "claim_task", "description": "Claim a task from the task board."},
    # ... 其他工具
]`,
  },
  {
    id: 's12',
    title: 'Worktree Isolation',
    subtitle: '工作树隔离',
    motto: 'Each works in its own directory',
    phase: 4,
    docUrl: 'https://github.com/shareAI-lab/learn-claude-code/blob/main/docs/zh/s12-worktree-task-isolation.md',
    codeUrl: 'https://github.com/shareAI-lab/learn-claude-code/blob/main/agents/s12_worktree_task_isolation.py',
    content: `# Worktree Isolation

## 工作树隔离

将每个任务绑定到自己的 git worktree 目录，防止多个代理同时工作时文件冲突。

### 核心概念

- 任务从 "pending" → "in_progress" 时绑定到 worktree
- worktree 可以在完成时保留或删除
- 所有生命周期事件记录到 JSONL 文件用于崩溃恢复

### 架构

\`\`\`
.tasks/
  task_1.json  {"id":1, "status":"completed"}
  task_2.json  {"id":2, "worktree":"wt/feature-a", "status":"in_progress"}

.worktrees/
  index.json   {"worktrees": [...]}
  events.jsonl 生命周期事件日志
  wt-feature-a/ 独立 git worktree
\`\`\`

### 工具

| 工具 | 描述 |
|------|------|
| task_create | 创建新任务 |
| task_bind_worktree | 将任务绑定到 worktree |
| worktree_create | 创建 git worktree |
| worktree_run | 在 worktree 中运行命令 |
| worktree_remove | 删除 worktree |
| worktree_keep | 保留 worktree 但完成任务 |
| worktree_events | 列出生命周期事件 |`,
    code: `#!/usr/bin/env python3
# Harness: directory isolation -- parallel execution lanes that never collide.
"""s12_worktree_task_isolation.py - Worktree + Task Isolation

Directory-level isolation for parallel task execution.
Tasks are the control plane and worktrees are the execution plane.
"""

import json
import os
import re
import subprocess
import time
from pathlib import Path

from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv(override=True)

WORKDIR = Path.cwd()
client = Anthropic(base_url=os.getenv("ANTHROPIC_BASE_URL"))
MODEL = os.environ["MODEL_ID"]
REPO_ROOT = Path.cwd()  # 或检测 git 仓库根目录


# -- EventBus: 生命周期事件日志 --
class EventBus:
    """追加-only 生命周期事件"""
    def emit(self, event: str, task: dict = None, worktree: dict = None, error: str = None):
        # 写入 .worktrees/events.jsonl
        pass


# -- TaskManager: 带 worktree 绑定的持久任务板 --
class TaskManager:
    def bind_worktree(self, task_id: int, worktree: str, owner: str = "") -> str:
        # 绑定任务到 worktree
        pass


# -- WorktreeManager: git worktree 管理 --
class WorktreeManager:
    def create(self, name: str, task_id: int = None, base_ref: str = "HEAD") -> str:
        # 创建 git worktree
        # 更新索引
        # 绑定任务（如果提供）
        pass

    def run(self, name: str, command: str) -> str:
        # 在指定 worktree 中运行命令
        pass

    def remove(self, name: str, force: bool = False, complete_task: bool = False) -> str:
        # 删除 worktree
        # 可选完成任务
        pass


# 工具定义: 16 个工具
TOOLS = [
    {"name": "task_create", "description": "Create a new task on the task board."},
    {"name": "task_bind_worktree", "description": "Bind a task to a worktree name."},
    {"name": "worktree_create", "description": "Create a git worktree."},
    {"name": "worktree_run", "description": "Run a command in a worktree."},
    {"name": "worktree_remove", "description": "Remove a worktree."},
    {"name": "worktree_keep", "description": "Keep a worktree without removing it."},
    {"name": "worktree_events", "description": "List recent lifecycle events."},
    # ... 其他工具
]`,
  },
];

export const getLessonById = (id: string) => lessons.find(l => l.id === id);
export const getLessonPrevNext = (id: string) => {
  const index = lessons.findIndex(l => l.id === id);
  return {
    prev: index > 0 ? lessons[index - 1] : null,
    next: index < lessons.length - 1 ? lessons[index + 1] : null,
  };
};
