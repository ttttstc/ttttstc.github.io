---
title: Skills安全
description: OpenClaw完整教程 - Skills安全
---

# Skills安全

A 常见问题 FAQ

Frequently Asked Questions

Q1：OpenClaw是免费的吗？

OpenClaw本身是MIT开源免费的。但运行它需要两项成本：一是服务器（本地电脑或云服务器），二是AI模型

的API费用。如果你用本地模型（Ollama），API费用也可以免费。总结：软件免费，算力不免费。

Q2：我需要什么样的技术水平才能用OpenClaw？

能用命令行安装npm包就够了。最基础的安装只需要两行命令： npm install -g openclaw@latest 和

openclaw onboard /-install-daemon 。如果用阿里云/腾讯云的一键部署方案，门槛更低。但如果要接入多

个平台、自定义Skill、调优配置，需要一定的技术基础。

Q3：OpenClaw和ChatGPT有什么区别？

ChatGPT是「顾问」（你问它答），OpenClaw是「员工」（它主动执行任务）。OpenClaw可以接入你的消息平

台、管理邮件日历、操作浏览器、执行Shell命令，而且数据完全在你自己手上。代价是需要自己部署和维护。

Q4：安全吗？我的数据会泄露吗？

OpenClaw是自托管的，数据默认存储在你自己的服务器上，不经过第三方。但需要注意三个安全风险：(1)

CVE-2026-25253 RCE漏洞（已修复，务必更新到最新版本）；(2) ClawHavoc供应链攻击（安装第三方Skill前

务必审查源代码）；(3) Gateway如果暴露在公网上需要设置认证（ gateway.auth.mode ）。

Q5：一个月大概花多少钱？

取决于你的使用方式和模型选择。参考区间：完全免费（本地模型）→ $2-5/月（DeepSeek为主）→ $5-15/月

（GLM-5为主）→ $10-30/月（Claude Sonnet为主）。最大的成本陷阱是OpenClaw的多轮工具调用会消耗大量

Token，务必设置消费限额。

Q6：可以用国产模型吗？效果怎么样？

完全可以。DeepSeek-V3（$0.14/M输入）和GLM-5（$0.80/M输入）是最受国内用户欢迎的选择。GLM-5的代

码能力接近Claude Opus 4.5水平，DeepSeek-V3则是极致性价比。效果肯定不如Claude Sonnet（Agent任务

公认最强），但对于大部分日常任务已经够用。推荐用Fallback机制混合搭配。

