// 系统提示词索引 - 完整覆盖
// 源仓库: https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools

export interface SystemPrompt {
  id: string;
  name: string;
  category: string;
  file: string;
  description: string;
}

// 辅助函数：生成ID
const genId = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');

export const systemPrompts: SystemPrompt[] = [
  // Amp
  { id: genId('Amp-README'), name: 'README', category: 'Amp', file: 'Amp/README.md', description: 'Amp 项目说明' },
  { id: genId('Amp-claude-4-sonnet'), name: 'Claude 4 Sonnet', category: 'Amp', file: 'Amp/claude-4-sonnet.yaml', description: 'Claude 4 Sonnet 模型配置' },
  { id: genId('Amp-gpt-5'), name: 'GPT-5', category: 'Amp', file: 'Amp/gpt-5.yaml', description: 'GPT-5 模型配置' },

  // Anthropic
  { id: genId('Anthropic-Claude-Code'), name: 'Claude Code', category: 'Anthropic', file: 'Anthropic/Claude Code/Prompt.txt', description: 'Claude Code 主提示词' },
  { id: genId('Anthropic-Claude-Code-Tools'), name: 'Claude Code Tools', category: 'Anthropic', file: 'Anthropic/Claude Code/Tools.json', description: '工具定义' },
  { id: genId('Anthropic-Claude-Code-2.0'), name: 'Claude Code 2.0', category: 'Anthropic', file: 'Anthropic/Claude Code 2.0.txt', description: 'Claude Code 2.0 提示词' },
  { id: genId('Anthropic-Claude-Sonnet-4.6'), name: 'Claude Sonnet 4.6', category: 'Anthropic', file: 'Anthropic/Claude Sonnet 4.6.txt', description: 'Claude Sonnet 4.6 提示词' },
  { id: genId('Anthropic-Claude-for-Chrome'), name: 'Claude for Chrome', category: 'Anthropic', file: 'Anthropic/Claude for Chrome/Prompt.txt', description: 'Chrome 扩展提示词' },
  { id: genId('Anthropic-Claude-for-Chrome-Tools'), name: 'Claude for Chrome Tools', category: 'Anthropic', file: 'Anthropic/Claude for Chrome/Tools.json', description: '工具定义' },
  { id: genId('Anthropic-Sonnet-4.5'), name: 'Sonnet 4.5 Prompt', category: 'Anthropic', file: 'Anthropic/Sonnet 4.5 Prompt.txt', description: 'Sonnet 4.5 提示词' },

  // Augment Code
  { id: genId('Augment-Claude-4-Agent'), name: 'Claude 4 Sonnet Agent', category: 'Augment Code', file: 'Augment Code/claude-4-sonnet-agent-prompts.txt', description: 'Claude 4 代理提示词' },
  { id: genId('Augment-Claude-4-Tools'), name: 'Claude 4 Tools', category: 'Augment Code', file: 'Augment Code/claude-4-sonnet-tools.json', description: '工具定义 JSON' },
  { id: genId('Augment-GPT-5-Agent'), name: 'GPT-5 Agent', category: 'Augment Code', file: 'Augment Code/gpt-5-agent-prompts.txt', description: 'GPT-5 代理提示词' },
  { id: genId('Augment-GPT-5-Tools'), name: 'GPT-5 Tools', category: 'Augment Code', file: 'Augment Code/gpt-5-tools.json', description: '工具定义 JSON' },

  // Cluely
  { id: genId('Cluely-Default'), name: 'Default Prompt', category: 'Cluely', file: 'Cluely/Default Prompt.txt', description: '默认提示词' },
  { id: genId('Cluely-Enterprise'), name: 'Enterprise Prompt', category: 'Cluely', file: 'Cluely/Enterprise Prompt.txt', description: '企业版提示词' },

  // CodeBuddy Prompts
  { id: genId('CodeBuddy-Chat'), name: 'Chat Prompt', category: 'CodeBuddy', file: 'CodeBuddy Prompts/Chat Prompt.txt', description: '聊天提示词' },
  { id: genId('CodeBuddy-Craft'), name: 'Craft Prompt', category: 'CodeBuddy', file: 'CodeBuddy Prompts/Craft Prompt.txt', description: '编写提示词' },

  // Comet Assistant
  { id: genId('Comet-System'), name: 'System Prompt', category: 'Comet Assistant', file: 'Comet Assistant/System Prompt.txt', description: '系统提示词' },
  { id: genId('Comet-Tools'), name: 'Tools', category: 'Comet Assistant', file: 'Comet Assistant/tools.json', description: '工具定义' },

  // Cursor Prompts
  { id: genId('Cursor-Agent-CLI'), name: 'Agent CLI Prompt', category: 'Cursor', file: 'Cursor Prompts/Agent CLI Prompt 2025-08-07.txt', description: 'CLI 代理提示词' },
  { id: genId('Cursor-Agent-2.0'), name: 'Agent Prompt 2.0', category: 'Cursor', file: 'Cursor Prompts/Agent Prompt 2.0.txt', description: '主要代理提示词' },
  { id: genId('Cursor-Agent-2025-09-03'), name: 'Agent Prompt 2025-09-03', category: 'Cursor', file: 'Cursor Prompts/Agent Prompt 2025-09-03.txt', description: '2025年9月版' },
  { id: genId('Cursor-Agent-v1.0'), name: 'Agent Prompt v1.0', category: 'Cursor', file: 'Cursor Prompts/Agent Prompt v1.0.txt', description: 'v1.0 版本' },
  { id: genId('Cursor-Agent-v1.2'), name: 'Agent Prompt v1.2', category: 'Cursor', file: 'Cursor Prompts/Agent Prompt v1.2.txt', description: 'v1.2 版本' },
  { id: genId('Cursor-Agent-Tools'), name: 'Agent Tools v1.0', category: 'Cursor', file: 'Cursor Prompts/Agent Tools v1.0.json', description: '工具定义' },
  { id: genId('Cursor-Chat'), name: 'Chat Prompt', category: 'Cursor', file: 'Cursor Prompts/Chat Prompt.txt', description: '聊天提示词' },

  // Devin AI
  { id: genId('Devin-DeepWiki'), name: 'DeepWiki Prompt', category: 'Devin AI', file: 'Devin AI/DeepWiki Prompt.txt', description: 'DeepWiki 提示词' },
  { id: genId('Devin-Prompt'), name: 'Prompt', category: 'Devin AI', file: 'Devin AI/Prompt.txt', description: '主提示词' },

  // Emergent
  { id: genId('Emergent-Prompt'), name: 'Prompt', category: 'Emergent', file: 'Emergent/Prompt.txt', description: '系统提示词' },
  { id: genId('Emergent-Tools'), name: 'Tools', category: 'Emergent', file: 'Emergent/Tools.json', description: '工具定义' },

  // Google - Antigravity
  { id: genId('Google-Antigravity-Fast'), name: 'Antigravity Fast Prompt', category: 'Google', file: 'Google/Antigravity/Fast Prompt.txt', description: '快速提示词' },
  { id: genId('Google-Antigravity-Planning'), name: 'Antigravity Planning', category: 'Google', file: 'Google/Antigravity/planning-mode.txt', description: '规划模式提示词' },

  // Google - Gemini
  { id: genId('Google-Gemini-VibeCoder'), name: 'Gemini AI Studio Vibe Coder', category: 'Google', file: 'Google/Gemini/AI Studio vibe-coder.txt', description: 'AI Studio 提示词' },

  // Junie
  { id: genId('Junie-Prompt'), name: 'Prompt', category: 'Junie', file: 'Junie/Prompt.txt', description: '系统提示词' },

  // Kiro
  { id: genId('Kiro-Mode-Classifier'), name: 'Mode Classifier', category: 'Kiro', file: 'Kiro/Mode_Clasifier_Prompt.txt', description: '模式分类提示词' },
  { id: genId('Kiro-Spec'), name: 'Spec Prompt', category: 'Kiro', file: 'Kiro/Spec_Prompt.txt', description: '规格提示词' },
  { id: genId('Kiro-Vibe'), name: 'Vibe Prompt', category: 'Kiro', file: 'Kiro/Vibe_Prompt.txt', description: '氛围提示词' },

  // Leap.new
  { id: genId('Leap-Prompts'), name: 'Prompts', category: 'Leap.new', file: 'Leap.new/Prompts.txt', description: '提示词集合' },
  { id: genId('Leap-Tools'), name: 'Tools', category: 'Leap.new', file: 'Leap.new/tools.json', description: '工具定义' },

  // Lovable
  { id: genId('Lovable-Agent'), name: 'Agent Prompt', category: 'Lovable', file: 'Lovable/Agent Prompt.txt', description: '代理提示词' },
  { id: genId('Lovable-Agent-Tools'), name: 'Agent Tools', category: 'Lovable', file: 'Lovable/Agent Tools.json', description: '工具定义' },

  // Manus Agent Tools & Prompt
  { id: genId('Manus-Agent-Loop'), name: 'Agent Loop', category: 'Manus', file: 'Manus Agent Tools & Prompt/Agent loop.txt', description: '代理循环提示词' },
  { id: genId('Manus-Modules'), name: 'Modules', category: 'Manus', file: 'Manus Agent Tools & Prompt/Modules.txt', description: '模块提示词' },
  { id: genId('Manus-Prompt'), name: 'Prompt', category: 'Manus', file: 'Manus Agent Tools & Prompt/Prompt.txt', description: '主提示词' },
  { id: genId('Manus-Tools'), name: 'Tools', category: 'Manus', file: 'Manus Agent Tools & Prompt/tools.json', description: '工具定义' },

  // NotionAi
  { id: genId('Notion-Prompt'), name: 'Prompt', category: 'NotionAi', file: 'NotionAi/Prompt.txt', description: '系统提示词' },
  { id: genId('Notion-Tools'), name: 'Tools', category: 'NotionAi', file: 'NotionAi/tools.json', description: '工具定义' },

  // Open Source prompts - Bolt
  { id: genId('OpenSource-Bolt'), name: 'Bolt Prompt', category: 'Open Source', file: 'Open Source prompts/Bolt/Prompt.txt', description: 'Bolt 提示词' },

  // Open Source prompts - Cline
  { id: genId('OpenSource-Cline'), name: 'Cline Prompt', category: 'Open Source', file: 'Open Source prompts/Cline/Prompt.txt', description: 'Cline 提示词' },

  // Open Source prompts - Codex CLI
  { id: genId('OpenSource-Codex-CLI'), name: 'Codex CLI Prompt', category: 'Open Source', file: 'Open Source prompts/Codex CLI/Prompt.txt', description: 'Codex CLI 提示词' },
  { id: genId('OpenSource-Codex-CLI-System'), name: 'Codex CLI System Prompt', category: 'Open Source', file: 'Open Source prompts/Codex CLI/openai-codex-cli-system-prompt-20250820.txt', description: '系统提示词' },

  // Open Source prompts - Gemini CLI
  { id: genId('OpenSource-Gemini-CLI'), name: 'Gemini CLI Prompt', category: 'Open Source', file: 'Open Source prompts/Gemini CLI/Prompt.txt', description: 'Gemini CLI 提示词' },
  { id: genId('OpenSource-Gemini-CLI-System'), name: 'Google Gemini CLI System', category: 'Open Source', file: 'Open Source prompts/Gemini CLI/google-gemini-cli-system-prompt.txt', description: '系统提示词' },

  // Open Source prompts - Lumo
  { id: genId('OpenSource-Lumo'), name: 'Lumo Prompt', category: 'Open Source', file: 'Open Source prompts/Lumo/Prompt.txt', description: 'Lumo 提示词' },

  // Open Source prompts - RooCode
  { id: genId('OpenSource-RooCode'), name: 'RooCode Prompt', category: 'Open Source', file: 'Open Source prompts/RooCode/Prompt.txt', description: 'RooCode 提示词' },

  // Orchids.app
  { id: genId('Orchids-Decision'), name: 'Decision-making', category: 'Orchids.app', file: 'Orchids.app/Decision-making prompt.txt', description: '决策提示词' },
  { id: genId('Orchids-System'), name: 'System Prompt', category: 'Orchids.app', file: 'Orchids.app/System Prompt.txt', description: '系统提示词' },

  // Perplexity
  { id: genId('Perplexity-Prompt'), name: 'Prompt', category: 'Perplexity', file: 'Perplexity/Prompt.txt', description: '系统提示词' },

  // Poke
  { id: genId('Poke-Agent'), name: 'Poke Agent', category: 'Poke', file: 'Poke/Poke agent.txt', description: '代理提示词' },
  { id: genId('Poke-P1'), name: 'Poke P1', category: 'Poke', file: 'Poke/Poke_p1.txt', description: 'P1 提示词' },
  { id: genId('Poke-P2'), name: 'Poke P2', category: 'Poke', file: 'Poke/Poke_p2.txt', description: 'P2 提示词' },
  { id: genId('Poke-P3'), name: 'Poke P3', category: 'Poke', file: 'Poke/Poke_p3.txt', description: 'P3 提示词' },
  { id: genId('Poke-P4'), name: 'Poke P4', category: 'Poke', file: 'Poke/Poke_p4.txt', description: 'P4 提示词' },
  { id: genId('Poke-P5'), name: 'Poke P5', category: 'Poke', file: 'Poke/Poke_p5.txt', description: 'P5 提示词' },
  { id: genId('Poke-P6'), name: 'Poke P6', category: 'Poke', file: 'Poke/Poke_p6.txt', description: 'P6 提示词' },

  // Qoder
  { id: genId('Qoder-Quest-Action'), name: 'Quest Action', category: 'Qoder', file: 'Qoder/Quest Action.txt', description: '任务动作提示词' },
  { id: genId('Qoder-Quest-Design'), name: 'Quest Design', category: 'Qoder', file: 'Qoder/Quest Design.txt', description: '任务设计提示词' },
  { id: genId('Qoder-Prompt'), name: 'Prompt', category: 'Qoder', file: 'Qoder/prompt.txt', description: '主提示词' },

  // Replit
  { id: genId('Replit-Prompt'), name: 'Prompt', category: 'Replit', file: 'Replit/Prompt.txt', description: '系统提示词' },
  { id: genId('Replit-Tools'), name: 'Tools', category: 'Replit', file: 'Replit/Tools.json', description: '工具定义' },

  // Same.dev
  { id: genId('Same-Prompt'), name: 'Prompt', category: 'Same.dev', file: 'Same.dev/Prompt.txt', description: '系统提示词' },
  { id: genId('Same-Tools'), name: 'Tools', category: 'Same.dev', file: 'Same.dev/Tools.json', description: '工具定义' },

  // Trae
  { id: genId('Trae-Builder'), name: 'Builder Prompt', category: 'Trae', file: 'Trae/Builder Prompt.txt', description: '构建器提示词' },
  { id: genId('Trae-Builder-Tools'), name: 'Builder Tools', category: 'Trae', file: 'Trae/Builder Tools.json', description: '工具定义' },
  { id: genId('Trae-Chat'), name: 'Chat Prompt', category: 'Trae', file: 'Trae/Chat Prompt.txt', description: '聊天提示词' },

  // Traycer AI
  { id: genId('Traycer-Phase-Prompts'), name: 'Phase Mode Prompts', category: 'Traycer AI', file: 'Traycer AI/phase_mode_prompts.txt', description: '阶段模式提示词' },
  { id: genId('Traycer-Phase-Tools'), name: 'Phase Mode Tools', category: 'Traycer AI', file: 'Traycer AI/phase_mode_tools.json', description: '阶段工具定义' },
  { id: genId('Traycer-Plan-Prompts'), name: 'Plan Mode Prompts', category: 'Traycer AI', file: 'Traycer AI/plan_mode_prompts', description: '计划模式提示词' },
  { id: genId('Traycer-Plan-Tools'), name: 'Plan Mode Tools', category: 'Traycer AI', file: 'Traycer AI/plan_mode_tools.json', description: '计划工具定义' },

  // VSCode Agent
  { id: genId('VSCode-Prompt'), name: 'Prompt', category: 'VSCode Agent', file: 'VSCode Agent/Prompt.txt', description: '系统提示词' },
  { id: genId('VSCode-Chat-Titles'), name: 'Chat Titles', category: 'VSCode Agent', file: 'VSCode Agent/chat-titles.txt', description: '聊天标题' },
  { id: genId('VSCode-Claude-Sonnet-4'), name: 'Claude Sonnet 4', category: 'VSCode Agent', file: 'VSCode Agent/claude-sonnet-4.txt', description: 'Claude Sonnet 4 提示词' },
  { id: genId('VSCode-Gemini-2.5-Pro'), name: 'Gemini 2.5 Pro', category: 'VSCode Agent', file: 'VSCode Agent/gemini-2.5-pro.txt', description: 'Gemini 2.5 Pro 提示词' },
  { id: genId('VSCode-GPT-4.1'), name: 'GPT-4.1', category: 'VSCode Agent', file: 'VSCode Agent/gpt-4.1.txt', description: 'GPT-4.1 提示词' },
  { id: genId('VSCode-GPT-4o'), name: 'GPT-4o', category: 'VSCode Agent', file: 'VSCode Agent/gpt-4o.txt', description: 'GPT-4o 提示词' },
  { id: genId('VSCode-GPT-5-Mini'), name: 'GPT-5 Mini', category: 'VSCode Agent', file: 'VSCode Agent/gpt-5-mini.txt', description: 'GPT-5 Mini 提示词' },
  { id: genId('VSCode-GPT-5'), name: 'GPT-5', category: 'VSCode Agent', file: 'VSCode Agent/gpt-5.txt', description: 'GPT-5 提示词' },
  { id: genId('VSCode-Tab-Completion'), name: 'Tab Completion', category: 'VSCode Agent', file: 'VSCode Agent/nes-tab-completion.txt', description: 'Tab 补全提示词' },

  // Warp.dev
  { id: genId('Warp-Prompt'), name: 'Prompt', category: 'Warp.dev', file: 'Warp.dev/Prompt.txt', description: '系统提示词' },

  // Windsurf
  { id: genId('Windsurf-Wave-11'), name: 'Prompt Wave 11', category: 'Windsurf', file: 'Windsurf/Prompt Wave 11.txt', description: 'Wave 11 提示词' },
  { id: genId('Windsurf-Tools-Wave-11'), name: 'Tools Wave 11', category: 'Windsurf', file: 'Windsurf/Tools Wave 11.txt', description: 'Wave 11 工具定义' },

  // Xcode
  { id: genId('Xcode-Document'), name: 'Document Action', category: 'Xcode', file: 'Xcode/DocumentAction.txt', description: '文档动作提示词' },
  { id: genId('Xcode-Explain'), name: 'Explain Action', category: 'Xcode', file: 'Xcode/ExplainAction.txt', description: '解释动作提示词' },
  { id: genId('Xcode-Message'), name: 'Message Action', category: 'Xcode', file: 'Xcode/MessageAction.txt', description: '消息动作提示词' },
  { id: genId('Xcode-Playground'), name: 'Playground Action', category: 'Xcode', file: 'Xcode/PlaygroundAction.txt', description: 'Playground 动作提示词' },
  { id: genId('Xcode-Preview'), name: 'Preview Action', category: 'Xcode', file: 'Xcode/PreviewAction.txt', description: '预览动作提示词' },
  { id: genId('Xcode-System'), name: 'System', category: 'Xcode', file: 'Xcode/System.txt', description: '系统提示词' },

  // Z.ai Code
  { id: genId('Zai-Prompt'), name: 'Prompt', category: 'Z.ai Code', file: 'Z.ai Code/prompt.txt', description: '系统提示词' },

  // dia
  { id: genId('Dia-Prompt'), name: 'Prompt', category: 'dia', file: 'dia/Prompt.txt', description: '系统提示词' },

  // v0 Prompts and Tools
  { id: genId('v0-Prompt'), name: 'Prompt', category: 'v0', file: 'v0 Prompts and Tools/Prompt.txt', description: '系统提示词' },
  { id: genId('v0-Tools'), name: 'Tools', category: 'v0', file: 'v0 Prompts and Tools/Tools.json', description: '工具定义' },
];
