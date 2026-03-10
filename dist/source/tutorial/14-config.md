---
title: 首次配置
description: OpenClaw完整教程 - 首次配置
---

# 首次配置

## 20 ClawHub技能市场

ClawHub Marketplace

13,729个技能，但超过一半你不应该安装。

市场概况

指标 数据

总注册技能 13,729

精选技能（awesome列表筛选） 5,494

被过滤技能（垃圾/重复/恶意） 6,940

被标记为恶意的 800+（约20%在高峰期）

注意

ClawHub的质量问题非常严重。社区项目 awesome-openclaw-skills（31.4K Stars）从13,729个技能中只精

选了5,494个，剩下的大部分是垃圾、重复或低质量内容。安装任何第三方Skill前，务必查看源码。

安装与搜索

# 安装Skill

openclaw skills install <skill-name>

# 搜索Skill

openclaw skills search "browser automation"

# 列出已安装的Skills

openclaw skills list

# 卸载Skill

openclaw skills uninstall <skill-name>

ClawHub支持向量搜索，也就是说你可以用自然语言描述需求来搜索Skill，不必精确匹配名称。

技能分类Top 10

排名 分类 数量 说明

1 编码Agent与IDE 1,222 代码生成、调试、重构等开发辅助

2 Web与前端开发 938 HTML/CSS/JS生成、组件开发

3 DevOps与云 408 Docker、K8s、CI/CD管理

4 搜索与研究 350 联网搜索、信息汇总

5 浏览器与自动化 335 网页操作、表单填写、截图

6 生产力与任务 206 日程、待办、项目管理

7 AI与LLM 197 提示工程、模型切换、多Agent协作

8 CLI工具 186 终端命令增强、系统管理

9 Git与GitHub 170 仓库管理、PR审查、Issue处理

## 10 图片与视频生成 169 AI绘图、视频处理

编码相关的技能占了绝大多数（前两名合计2,160个），反映出OpenClaw用户中开发者占比极高。但也意味着这

两个分类里重复和低质量Skill最多。

## 21 热门Skills推荐

Top Skills

55个内置技能开箱即用，加上社区精选的必装Top 10。

必装Top 10

排 下载

Skill名称 用途

名 量

1 Gmail / 32K+ 邮件收发、日历管理、Google Docs读写。基础设施级Skill，几乎所有用户都在

Google 用。

2 Agent 高 浏览器自动化：登录后台、填写表单、截图、导出PDF。基于Chrome DevTools

Browser Protocol。

3 Summarize 高 视频、网页、邮件内容的自动摘要。日常使用频率最高的Skill之一。

4 GitHub 高 仓库管理、Issue处理、PR审查。技术用户标配，大幅减少网页操作时间。

5 Claude Code 中 通过MCP协议桥接Claude Code能力（Bash、Read、Write、Edit等），让

OpenClaw获得专业编程能力。

6 Web Search 高 联网搜索，让Agent能获取实时信息。支持多个搜索引擎后端。

7 File Manager 中 本地文件的读写、移动、重命名等操作。需要注意安全权限。

8 Calendar 中 日程查看与管理，支持Google Calendar等多个日历服务。

9 Translator 中 多语言翻译。对跨语言交流场景非常实用。

## 10 Image Gen 中 AI图片生成，集成DALL-E、Stable Diffusion等后端。

内置55个技能分类一览

通讯与社交

discord slack imsg （iMessage） bluebubbles wacli （WhatsApp CLI） voice-call

笔记与知识管理

obsidian notion apple-notes bear-notes trello things-mac apple-reminders

开发工具

coding-agent github gh-issues tmux

媒体处理

spotify-player songsee sonoscli video-frames openai-image-gen gifgrep camsnap

AI与模型

gemini openai-whisper openai-whisper-api sherpa-onnx-tts model-usage

搜索与浏览

xurl summarize blogwatcher gog （Google搜索） goplaces

系统工具

1password healthcheck session-logs himalaya （邮件CLI） peekaboo oracle canvas

智能家居

openhue （Philips Hue灯光控制）

生态工具

clawhub （技能商店客户端）skill-creator （技能创建器）mcporter （MCP桥接）

实用建议：不要一次性安装太多Skills。每个Skill都会增加system prompt的长度，占用上下文窗口。建议从

Top 10中选择你真正需要的3-5个开始，用熟了再逐步扩展。

## 22 自建Skill指南

Create Your Own Skill

一个Skill的最小单位就是一个目录加一个 SKILL.md 文件。

目录结构

my-skill/ ├── SKILL.md # 必须。Skill的核⼼定义⽂件 ├── scripts/ # 可选。辅助脚本 │ └──

helper.py ├── templates/ # 可选。模板⽂件 │ └── report.md └── README.md # 可选。说明⽂

档

唯一必须的文件是 SKILL.md ，其他都是可选的。最简单的Skill只需要一个SKILL.md就能工作。

SKILL.md格式示例

# My Custom Skill

/# Description

帮助⽤户进⾏每⽇⼯作汇总，⽣成结构化的⽇报。

/# Trigger

当⽤户提到「⽇报」「⼯作总结」「今⽇汇报」时激活。

/# Instructions

1. 询问⽤户今天完成了哪些⼯作

2. 按项⽬分类整理

3. 标注每项⼯作的状态（已完成/进⾏中/阻塞）

4. ⽣成markdown格式的⽇报

5. 保存到 ~/reports/YYYY-MM-DD.md

/# Environment Variables

- REPORTS_DIR: ⽇报存储⽬录（默认 ~/reports）

/# Tools Required

- file_write

- memory_search

安装方式

方式 位置 生效范围 命令

项目级 <workspace>/skills/my-skill/ 仅当前工作区 直接将文件夹放到workspace的skills目录下

全局 ~/.openclaw/skills/my-skill/ 所有会话 直接复制，或通过ClawHub安装

核心建议

项目级Skill非常适合团队协作场景：把Skill放进Git仓库的 skills/ 目录，团队成员克隆仓库后就自动获得了

相同的Agent能力。

分享到ClawHub

1 准备Skill

确保SKILL.md格式正确，包含清晰的Description和Instructions。

2 登录ClawHub

openclaw clawhub login

3 发布

openclaw clawhub publish ./my-skill

发布后其他用户可以通过 openclaw skills install your-skill-name 安装。ClawHub会自动进行基础安全

扫描，但不保证完全可靠（见下一节）。

