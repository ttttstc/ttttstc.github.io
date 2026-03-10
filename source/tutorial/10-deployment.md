---
title: 部署方式总览
description: OpenClaw完整教程 - 部署方式总览
---

# 部署方式总览

扣子编程的限制：自定义程度不如自建服务器，不能完全控制底层环境，数据存储在第三方平台。如果你需要

深度定制或对数据安全有高要求，建议选择自建方案。

海外平台

International Platforms

Sealos

K8s 原生云平台，支持 7 天免费试用。通过 Devbox 云开发环境一键部署，按用量计费。适合有容器化需求的开

发者，但需要一定的 K8s 知识，且没有专门针对 OpenClaw 的预置模板。

Zeabur

模板部署，已被部署超过 29,000 次。最大亮点是 AI Hub 内置多模型 failover 链：glm-4.7-flash → grok-4-fast

→ minimax-m2.5 → kimi-k2.5 → qwen-3-235b → gpt-5-mini。主要面向海外/台湾市场，必须使用专用服务

器（Dedicated Server）。

Railway

真正的一键部署，全程浏览器操作。提供 $5/月免费额度，轻度使用可零成本。多种模板可选（标准/快速启

动/All-in-One），部署成功率 96~100%。海外平台，国内访问需要科学上网。

按场景推荐

Recommendations by Scenario

场景 首选 备选 理由

零基础想最快体验 扣子编程 百度云 不需要服务器，2步部署，内置模型

个人长期使用，预算敏感 火山引擎 阿里云 19.8元/月（服务器+模型），综合最划算

飞书重度用户 火山引擎 扣子编程 同为字节系，飞书深度集成

企微/QQ 生态 腾讯云 — 四大 IM 原生支持，Coding Plan 7.9元起

企业级部署，合规优先 华为云 阿里云 安全合规能力最强

开发者/海外用户 Railway Zeabur 一键部署，免费额度，开发者体验极佳

## 14 首次配置

Initial Configuration

无论哪种部署方式，安装完成后都需要进行首次配置。这里覆盖最关键的几个配置项。

Gateway 认证设置

Gateway Auth

注意

v2026.3.7 Breaking Change：Gateway 认证现在要求显式设置 gateway.auth.mode 。不设置将导致

Gateway 无法启动。这是为了修复此前暴露在互联网上的 30,000+ 未认证实例的安全隐患。

在 ~/.openclaw/workspace 目录下的配置文件中设置认证模式：

# 选择⼀种认证模式

gateway:

auth:

mode: token # ⽅式⼀：Token 认证（推荐⽤于 API 集成）

# 或

mode: password # ⽅式⼆：密码认证（推荐⽤于 Web UI 访问）

模型选择与 API Key 配置

Model & API Key

OpenClaw 支持多模型切换，你需要至少配置一个模型的 API Key。常见的选择：

模型来源 获取方式 说明

阿里云百炼 百炼平台申请 国内首选，qwen3.5-plus 等模型

腾讯云 Coding Plan 腾讯云购买 多模型套餐，首月 7.9元

火山方舟 方舟平台申请 豆包系列模型

Anthropic API console.anthropic.com Claude 系列模型，按量付费

OpenAI API platform.openai.com GPT 系列模型，按量付费

Ollama（本地） 本地安装 Ollama 免费，需要足够的本地算力

核心建议

如果你使用的是国内云厂商的一键部署方案，模型和 API Key 通常在购买时已自动配置好。只有本地安装和

Docker 部署才需要手动配置。

版本更新

Updates

OpenClaw 几乎每天都有新版本发布。使用以下命令更新：

# 更新到最新稳定版（推荐）

openclaw update /-channel stable

# 更新到 Beta 版（尝鲜）

openclaw update /-channel beta

# 更新到开发版（最新功能，可能不稳定）

openclaw update /-channel dev

三个更新渠道的区别：

渠道 更新频率 稳定性 适合人群

stable 每周数次 高 大多数用户

beta 几乎每天 中 想尝鲜新功能的用户

dev 持续 低 开发者、贡献者

诊断检查

Diagnostics

安装完成后，运行诊断命令检查环境是否正常：

openclaw doctor

这个命令会检查：

Node.js 版本是否满足要求（>= 22）

必要的系统依赖是否已安装

Gateway 连接是否正常

已配置的模型 API Key 是否有效

守护进程状态

网络连通性

