---
title: 国际模型配置
description: OpenClaw完整教程 - 国际模型配置
---

# 国际模型配置

插件管理

命令 说明

openclaw plugins install <name> 安装插件/Skill

openclaw plugins enable <name> 启用插件

openclaw plugins list 列出已安装插件

openclaw plugins install @openclaw-china/channels 安装中国IM插件

openclaw china setup 配置中国IM平台（需先安装插件）

模型认证

命令 说明

openclaw onboard /-auth-choice zai-api-key 配置智谱GLM

openclaw onboard /-auth-choice apiKey /-token-provider openrouter /- 配置OpenRouter

token "$KEY"

openclaw models auth login /-provider qwen-portal /-set-default 通义千问OAuth登

录

聊天命令（在对话中使用）

命令 说明

/status 会话概览（当前模型、Token用量）

/new 清空会话历史，开始新对话

/think <level> 调整推理深度（off/minimal/low/medium/high/xhigh）

/usage off|tokens|full 控制回复页脚的用量显示

/activation mention|always 群消息处理模式

Docker部署

命令 说明

docker-compose up -d 后台启动OpenClaw容器

docker-compose logs -f 查看实时日志

docker-compose pull /& docker-compose up -d 更新到最新镜像

