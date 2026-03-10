---
title: Docker部署
description: OpenClaw完整教程 - Docker部署
---

# Docker部署

## 16 国际平台接入

International Platforms

本章覆盖六大国际平台的详细接入步骤。每个平台从创建凭证到完成对话的全流程。

Telegram

推荐⼊⻔ · 5 分钟 · 零⻔槛

Telegram 是 OpenClaw 官方推荐的入门渠道。使用 long-polling 模式，bot 主动轮询 Telegram 服务器拉取消

息，不需要公网 IP、反向代理或端口转发。本地开发、NAT 后面、防火墙内都能正常工作。

找到 @BotFather

1

在 Telegram 搜索 @BotFather ，这是 Telegram 官方的 Bot 管理工具。向它发送 /newbot 命令。

创建 Bot

2

按提示设置 bot 的显示名称和 username（必须以 bot 结尾，如 my_openclaw_bot ）。创建成功后，

BotFather 会返回一个 Bot Token。

配置到 OpenClaw

3

将 Token 写入 openclaw.yaml ：

channels:

telegram:

enabled: true

botToken: "YOUR_BOT_TOKEN"

dmPolicy: pairing # 需配对码才能使⽤

启动并配对

4

重启 Gateway。在 Telegram 中给你的 bot 发送任意消息，Gateway 会返回配对码，输入后即可开始对

话。

核心建议

Telegram 的 Bot API 9.5（2026年3月）新增了 sendMessageDraft 功能。国内用户需要代理访问

Telegram，但 bot 运行本身不受影响——只要运行 Gateway 的机器能访问 api.telegram.org 即可。

Discord

社区场景⾸选 · 15-20 分钟

Discord 适合社区管理和团队协作场景。需要在 Developer Portal 创建 Application 和 Bot，权限设置步骤稍多

但文档齐全。

1 创建 Application

前往 discord.com/developers/applications ，点击 New Application，填写应用名称。

2 获取 Bot Token

进入 Bot 页面，点击 Reset Token，复制生成的 Token。

3 启用 Privileged Intents

在 Bot 页面开启两个权限：Message Content Intent 和 Server Members Intent。没有这两个权限 bot

无法读取消息内容。

4 邀请 Bot 到服务器

在 OAuth2 → URL Generator 中勾选 bot scope 和所需权限，生成邀请链接，将 bot 添加到你的

Discord 服务器。

5 获取 ID 并配置

在 Discord 中开启 Developer Mode（设置 → 高级 → 开发者模式），右键复制 Server ID 和你的 User

ID。将这些信息写入 openclaw.yaml ，启动 Gateway。

6 DM 配对

在 Discord 中私聊你的 bot，输入配对码（1 小时有效）完成绑定。

核心建议

v2026.3.7 新增了 ACP 持久化频道绑定——Discord 频道和 Telegram 话题的绑定在 Gateway 重启后依然保

持，不需要重新配对。

WhatsApp

⽇常通讯 · 10-15 分钟

WhatsApp 是 OpenClaw 社区中最受欢迎的渠道。使用 Baileys 库通过 QR 码扫码连接，不需要 WhatsApp

Business API。

1 运行交互式向导

安装 OpenClaw 后运行 openclaw onboard ，选择 WhatsApp 渠道。

2 扫码配对

终端会显示 QR 码。打开手机 WhatsApp → 设置 → 已连接设备 → 连接新设备，扫描 QR 码。

3 开始使用

配对完成后即可在 WhatsApp 中与 bot 对话。

注意

建议使用独立号码运行 WhatsApp，不要用主号。Gateway 运行时建议用 Node 而非 Bun（Bun 在 WhatsApp

场景下不稳定）。Session 凭证要当密码管理，session 过期需要重新扫码。

Slack

企业/团队场景 · 25-40 分钟

Slack 适合企业和团队内部使用。需要在 Slack API 平台创建 App 并配置多项权限。默认使用 Socket Mode

（WebSocket），不需要公网 URL。

1 创建 Slack App

前往 api.slack.com/apps ，点击 Create New App → From scratch，选择目标 Workspace。

2 启用 Socket Mode

在 Socket Mode 页面启用，生成 App-Level Token（以 xapp- 开头），scope 选择

connections:write 。

3 配置 Bot Token Scopes

在 OAuth & Permissions 中添加权限： chat:write 、channels:history 、channels:read 、

im:write 、 im:history 、im:read 、users:read 、reactions:read 、reactions:write 、

files:write 。

4 安装并配置

将 App 安装到 Workspace，获取 Bot User OAuth Token（以 xoxb- 开头）。将 Token 写入

openclaw.yaml ，启动 Gateway。

注意

OpenClaw 可以在你的机器上执行真实命令，存在 prompt injection 风险。在 Slack 等多人环境中，建议不要

在主力机器上运行 Gateway，使用 VM 或专用服务器。

Signal

端到端加密 · 20-30 分钟

Signal 提供端到端加密通讯。OpenClaw 通过 Signal-CLI 工具连接 Signal 网络。

