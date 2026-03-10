---
title: 渠道概览
description: OpenClaw完整教程 - 渠道概览
---

# 渠道概览

## 23 Skills安全

Skill Security

ClawHavoc供应链攻击是OpenClaw历史上最严重的安全事件之一。每个「养虾人」都应该了解。

ClawHavoc供应链攻击

2026年1月底到2月初，OpenClaw社区遭遇了一场大规模供应链攻击，被安全研究机构Koi Security命名为

「ClawHavoc」。

时间线

日期 事件

1月27日 首个恶意Skill出现在ClawHub上，伪装成专业工具

1月28-30日 攻击者快速上传大量恶意Skill，利用ClawHub缺乏审查机制的漏洞

1月31日 攻击全面爆发，多名用户报告异常行为

2月1日 Koi Security正式命名该攻击为「ClawHavoc」

2月上旬 社区展开大规模审计和清理

攻击规模

指标 数据

当时ClawHub技能总数 约2,857个

初步确认恶意Skills 341个（约12%）

后续扫描发现的恶意Skills 800+（约20%）

可追溯到同一协调行动的 335个

受影响设备 135,000+

注意

ClawHub当时约20%的Skills被确认为恶意。这意味着如果你随机安装5个Skill，大概率至少有1个是恶意的。

攻击手法

攻击者的手法相当精密：

上传看似专业的Skill，名称和描述都很正常（如「advanced-code-review」「smart-scheduler」）

诱导用户安装后，Skill会建议安装一个「helper agent」来增强功能

实际植入的是 Atomic macOS Stealer（AMOS）信息窃取木马

更危险的是：攻击专门针对OpenClaw的持久记忆文件（ SOUL.md 和 MEMORY.md ），篡改Agent的长期行为

指令

篡改SOUL.md意味着你的Agent被「洗脑」了。它的核心行为准则被改写，可能在后续所有交互中执行恶意操

作，而你完全不知情。

安全建议

1 安装前审查源码

永远不要盲目安装ClawHub上的Skill。去GitHub查看源码，确认SKILL.md中没有可疑的指令。特别注意

任何要求额外安装「helper」或「agent」的内容。

2 使用SecureClaw扫描

社区推出了开源安全工具SecureClaw，可以扫描已安装的Skills检查恶意内容。虽然不能100%防护，但

能拦住已知的攻击模式。

# 安装SecureClaw

npm install -g secureclaw

# 扫描已安装的skills

secureclaw scan ~/.openclaw/skills/

3 优先使用精选列表

参考 awesome-openclaw-skills 项目（31.4K Stars）的精选列表，而不是直接在ClawHub上随意搜索。

精选列表已经过滤掉了大量垃圾和恶意Skill。

4 定期检查SOUL.md和MEMORY.md

养成习惯，定期检查这两个文件有没有被异常修改。如果发现不认识的内容，立即回滚并排查所有已安装

的Skill。

关键认知：OpenClaw的Skill本质上是受信任代码。一旦安装，它就拥有和你的OpenClaw实例相同的权限。没

有沙箱隔离，没有权限分级。这和npm生态早期面临的问题一模一样，但后果可能更严重，因为OpenClaw可

以访问你的邮件、日历、消息和文件系统。

## 24 模型提供商总览

Provider Overview

OpenClaw支持十余家模型提供商，从国际顶尖到国产平价再到完全免费的本地模型，覆盖所有预算

和场景。

OpenClaw最大的优势之一是模型自由：你不被绑定在某一家厂商上。通过 ~/.openclaw/openclaw.json 配置

文件，可以灵活切换主力模型、设置Fallback备选链、甚至让不同任务走不同模型。

