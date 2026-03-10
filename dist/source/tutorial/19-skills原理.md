---
title: Skills工作原理
description: OpenClaw完整教程 - Skills工作原理
---

# Skills工作原理

## 30 成本控制

Cost Control

API费用是OpenClaw运营的最大成本。不做控制，真的会一觉醒来收到$1,100的账单。

为什么成本会失控

OpenClaw的Token消耗远超普通聊天场景。原因有几个：

每次Agent思考都是多轮推理：一个简单的任务可能触发5-10次API调用

Skills的描述会注入system prompt，增加每次请求的输入token

记忆系统（MEMORY.md + Daily Logs）会在每次请求中附带上下文

Agent 24/7运行，定时任务（cron）不断触发API调用

多轮思考 + 多工具调用的Token消耗可能是传统聊天的几十甚至上百倍

真实案例：社区中频繁出现的恐怖故事：用户设置了Agent处理邮件的cron任务，晚上睡觉前一切正常，第二

天早上发现API账单暴涨到$1,100。原因是Agent在处理邮件时进入了循环推理，整晚不停调用API。

Token优化策略：Fallback链

Fallback链是OpenClaw最核心的省钱策略。原理很简单：主模型不可用时自动降级到更便宜的模型。但更聪明

的用法是主动利用它来控制成本。

{

"agents": {

"defaults": {

"model": {

"primary": "anthropic/claude-sonnet-4-6",

"fallbacks": [

"anthropic/claude-haiku-4-5",

"deepseek/deepseek-chat"

]

}

}

}

}

不同方案的成本对比

策略 主力模型 输入价格/百万token 相对成本

全用Claude Sonnet Claude Sonnet 4.6 $3.00 100%（基准）

Sonnet + Haiku Fallback Sonnet → Haiku $3.00 / $1.00 约50-60%

Sonnet → Haiku → DeepSeek 三级Fallback $3.00 / $1.00 / $0.14 约5-20%

纯DeepSeek DeepSeek-V3 $0.14 约5%

本地Ollama Qwen3-Coder等 $0 0%（仅电费）

从Claude Sonnet切换到「Sonnet → Haiku → DeepSeek」三级Fallback链，可以降低80-95%的API成本。大

部分简单任务（问候、查天气、简单查询）会自动走最便宜的模型，只有复杂任务才会用到主力模型。

预算限制设置

OpenClaw支持在配置中设置预算上限：

{

"agents": {

"defaults": {

"budget": {

"maxTokensPerDay": 500000,

"maxCostPerDay": 5.00

}

}

}

}

核心建议

强烈建议所有用户都设置日预算上限。哪怕你不差钱，一个每日$5的上限也能在Agent进入循环推理时保护你

的钱包。

本地模型：完全免费方案

通过Ollama或LM Studio运行本地模型，可以实现零API成本：

方案 推荐模型 硬件要求 适合场景

Ollama Qwen3-Coder:32B / Devstral-24B 32GB RAM 代码任务、Agent工具调用

Ollama（轻量） Llama 3.3 / DeepSeek-R1:14B 16GB RAM 简单对话、心跳任务

LM Studio MiniMax M2.5 / Devstral-24B 32GB RAM 需要GUI管理的用户

# Ollama安装和配置

ollama pull qwen3-coder:32b

# OpenClaw⾃动发现本地模型，只需设置环境变量

# OLLAMA_API_KEY可以是任意值

{

"env": { "OLLAMA_API_KEY": "ollama-local" }

}

注意

使用Ollama时不要用 /v1 OpenAI兼容URL，会导致工具调用异常。让OpenClaw使用原生Ollama API即可自

动发现模型。

服务器成本

相比API费用，服务器成本已经不是主要开销：

方案 月费 说明

阿里云轻量服务器 约¥6-9/月 新用户优惠，2vCPU+2GB即可运行

腾讯云Lighthouse 约¥8-12/月 类似方案，社区支持好

Fly.io 免费起步 有免费额度，适合轻度使用

本地电脑运行 ¥0 利用现有设备，但需要保持开机

