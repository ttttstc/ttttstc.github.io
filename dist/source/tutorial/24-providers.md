---
title: 模型提供商总览
description: OpenClaw完整教程 - 模型提供商总览
---

# 模型提供商总览

Q7：Anthropic封杀了OAuth，我该怎么用Claude？

使用Anthropic API Key（按量付费）。在 Anthropic Console 创建API Key，然后在OpenClaw中配置

ANTHROPIC_API_KEY 环境变量。不要尝试通过OAuth连接Claude Pro/Max订阅账户，会被封号。

Q8：OpenClaw创始人加入OpenAI后，项目还会继续吗？

会。Peter Steinberger加入OpenAI后，OpenClaw正在转为开源基金会运营。OpenAI已承诺赞助项目但不干预

开发方向。截至2026年3月，项目仍然保持近乎每日更新的节奏，有1,075+贡献者。项目的长期可持续性是有保

障的。

Q9：ClawHub上的Skill安全吗？

不能盲目信任。ClawHub的13,729个Skill中，经社区审计约20%存在问题（垃圾/重复/恶意）。ClawHavoc事件

中，超800个恶意Skill试图窃取用户凭证。建议：只安装starred数量多的Skill、安装前审查源代码、使用

awesome-openclaw-skills精选列表（已过滤问题Skill）。

Q10：能接入微信吗？

可以，但不是直接接入个人微信。通过openclaw-china插件的企业微信（自建应用）方案可以间接接入个人微

信。钉钉和QQ Bot的接入最简单。飞书是国内最主流的接入渠道之一，OpenClaw和飞书官方都提供了丰富的

集成文档。

Q11：OpenClaw和Claude Code可以一起用吗？

可以，而且是推荐用法。社区开发了openclaw-claude-code-skill，通过MCP协议桥接两者。OpenClaw负责消

息平台接入和生活自动化，Claude Code负责编程任务。两者组合是2026年最完整的AI工作流。

Q12：本地模型效果怎么样？

取决于硬件和模型选择。32GB RAM可以跑Qwen3-Coder:32B或Devstral-24B，在代码生成和简单Agent任务上

表现不错。但跟云端的Claude Sonnet或GPT-5.4比仍有差距，尤其是复杂的多步骤推理任务。适合隐私敏感场

景和实验用途。

B 命令速查表

Command Cheat Sheet

安装与更新

命令 说明

npm install -g openclaw@latest 全局安装OpenClaw

openclaw onboard /-install-daemon 初始化配置 + 安装守护进程

openclaw update /-channel stable 更新到最新稳定版

openclaw update /-channel beta 更新到Beta版（尝鲜）

openclaw doctor 诊断检查，排查常见问题

openclaw /-version 查看当前版本

日常使用

命令 说明

openclaw gateway /-port 18789 /-verbose 启动Gateway（详细日志模式）

openclaw gateway restart 重启Gateway（改配置后必须执

行）

openclaw agent /-message "xxx" 直接发送消息给Agent

openclaw devices pair 设备配对（新设备首次连接）

openclaw models list 列出已配置的模型

openclaw models status /-probe 测试模型连通性

openclaw config set agents.defaults.model.primary 设置主力模型

provider/model

