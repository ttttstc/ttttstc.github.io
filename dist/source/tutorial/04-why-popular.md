---
title: 为什么这么火
description: OpenClaw完整教程 - 为什么这么火
---

# 为什么这么火

## 05 整体架构

Architecture Overview

OpenClaw 采用 Gateway-Node-Channel 三层架构，以 WebSocket 为通信总线，将控制平面、设备执

行与消息渠道解耦。

三层架构

Gateway · Node · Channel

Channel Gateway Node

→ →

20+ 消息渠道 中央控制平面 设备端执行

层级 职责 关键细节

Gateway 中央控制平面，维护 WebSocket 服务、管 默认绑定 ws://127.0.0.1:18789 ，每台主机一个实

理 Session、调度 Agent 例

Node 设备端执行节点，负责本地操作 camera（摄像头）、screen recording（录屏）、

system.run（系统命令）等

Channel 消息渠道接入层，连接 20+ 即时通讯平台 WhatsApp、Telegram、Discord、Slack、飞书、钉钉

等

Loopback-First 设计

Security by Default

Gateway 默认只绑定 localhost （127.0.0.1），所有流量在本地回环。这意味着：

不开放任何外网端口，天然安全

同一台机器上的 Node 直接通过 WebSocket 连接 Gateway

需要远程访问时，通过 Tailscale Serve/Funnel 暴露，不直接暴露端口

核心建议

每台主机只运行一个 Gateway 实例。这是因为 WhatsApp Web 等渠道需要独占会话，多实例会导致登录冲

突。

通信流程

一条消息从用户发出到 Agent 回复，完整路径如下：

→ → → →

用户发消息 Channel 接收 Gateway 路由 Agent 处理

→

Node 执行 回复用户

Gateway 作为 24/7 运行的 daemon，持续监听所有已连接的 Channel。它不像 CLI Agent 那样会话结束就丢失

上下文，而是长驻运行，积累记忆。

## 06 记忆系统

Memory System

记忆是 OpenClaw 区别于普通 Chatbot 的核心能力。四层记忆从不可变的身份内核到实时对话，构建

完整的上下文连续性。

四层记忆架构

SOUL TOOLS USER Session

→ → →

不可变内核 动态工具 语义长期记忆 实时情景

层级 存储位置 生命周期 说明

SOUL SOUL.md 永久不可变 Agent 的人格、价值观、核心身份定义，创建后不应被修改

TOOLS Skills + Extensions 按需加载 当前可用的工具和技能列表，随安装和加载动态变化

USER MEMORY.md + 向量数据库 持久化 关于用户的偏好、决策、历史事实，支持语义搜索

Session 内存 + sessions.json 会话级 当前对话的实时上下文，Token 耗尽时被压缩

Daily Logs

⽇志系统

每天的交互记录以 append-only 方式写入 memory/YYYY-MM-DD.md 文件。Session 开始时，Agent 会自动读取

今天和昨天的日志，为对话提供连续性上下文。

# memory/2026-03-08.md

/# 10:23 - ⽤户询问天⽓

查询了北京天⽓，回复晴转多云，15-22°C

/# 14:05 - 代码审查任务

帮⽤户审查了 api/routes.ts，发现3个潜在问题//.

Long-term Memory

持久化存储

MEMORY.md 是可选的持久化文件，存储决策记录、用户偏好和长期事实。关键规则：

只在 main/private session 中加载（群组隔离 session 不会看到）

Agent 可以主动写入，但通常在 Pre-Compaction 时触发

格式是纯 Markdown，人类可直接编辑

自动记忆保存

Pre-Compaction

当 Session 接近 token 限制时（默认阈值约 4000 tokens），OpenClaw 触发一个 silent agentic turn：

1 检测阈值

Session token 用量接近上限，触发 Pre-Compaction 流程

静默保存

2

Agent 在后台执行一个隐藏 turn，将重要记忆写入 MEMORY.md 和 Daily Log

压缩上下文

3

旧消息被压缩或截断，释放 token 空间。用户看不到这个过程（返回 NO_REPLY ）

为什么这很重要？ 这个机制保证了即使对话极长，关键信息也不会随着上下文窗口的滑动而丢失。Claude

Code 等工具的会话结束后上下文就消失了，而 OpenClaw 通过文件系统实现了真正的持久记忆。

向量记忆搜索

Semantic Search

OpenClaw 默认启用向量记忆搜索，结合两种检索策略：

策略 原理 擅长

Embedding 向 将记忆文本转为向量，计算语义相似 模糊搜索、语义关联（「之前讨论过的那个部署问题」）

量 度

BM25 关键词 传统关键词匹配，TF-IDF 加权 精确匹配（具体的文件名、命令、人名）

底层使用 SQLite-vec 进行向量存储和加速检索。系统会监听记忆文件的变化，以 debounced 方式自动重建索

引。

搜索工具

memory_search ：语义搜索，返回约 400 token 的 chunks，适合回忆模糊的上下文

memory_get ：读取特定记忆文件的全部内容，适合精确查找

