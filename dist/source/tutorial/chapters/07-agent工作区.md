代码规模与性能
Scale & Performance
指标 数值
代码规模 约 43 万行 TypeScript
内存占用 约 1GB（运行时）
启动时间 3-5 秒
扩展数量 40+ 个官方扩展
内置技能 55 个
社区技能 13,729 个（ClawHub 注册）
43 万行代码、1GB 内存，这并不「轻量」。但对于一个 24/7 运行的个人 AI 助手来说，在现代硬件上完全可接
受。3-5 秒的启动时间保证了 Gateway 重启或更新后能快速恢复服务。
10 部署方式总览
Deployment Overview
OpenClaw 支持从本地到云端的多种部署方式。选择哪种取决于你的技术水平、预算和使用场景。

一键
平台 最低配置 新用户价格 内置模型 难度 适合人群
部署
本地 — Node.js 22+ 免费 否 低 开发者、
npm macOS/Linux 用户
Docker — Docker 免费 否 中 熟悉容器的开发者
Engine
阿里云 是 2C2G 40GB 9.9元/月 是（qwen3.5- 极低（3 国内首选，新手友好
plus） 步）
腾讯云 是 2C2G ~17元/月 否（需购Coding 极低（3 企微/QQ 生态用户
Plan） 步）
百度云 是 2C4G 0.01元首 是（千帆模型） 极低（4 体验尝鲜，文心生态
月 步）
华为云 是 Flexus L 实 ~85元/月 否（需接MaaS） 中等（5步 企业用户，合规需求
例 起 +）
火山引擎 是 2C4G 9.9元/月 是（方舟模型） 低（3-4 飞书用户首选
步）
扣子编程 是 无需服务器 免费起步 是（豆包2.0） 极低（2 零门槛，不想管服务器
步）
Railway 是 自动分配 $5/月免费 否 极低（1 海外用户，开发者
额度 键）
Zeabur 是 2C4G 专用 按用量计 是（AI Hub） 极低（模 需要多模型 failover
费 板）
核心建议
模型费用才是大头。服务器成本普遍已降到很低（9.9~99元/年），真正的持续成本在于模型调用。选平台时重
点看模型套餐价格，而不是只看服务器价格。

11 本地安装
Local Installation
本地安装适合开发者和想完全掌控数据的用户。OpenClaw 是 TypeScript 项目，运行在 Node.js 上。
系统要求
System Requirements
要求 详情
Node.js >= 22（强制要求）
包管理器 npm / pnpm / bun 均可
macOS 需要 Xcode Command Line Tools
Linux 标准构建工具（gcc, make）
Windows 强烈推荐 WSL2
方式一：npm 全局安装（推荐）
npm Global Install
最推荐的安装方式，两条命令搞定：
# 安装 OpenClaw
npm install -g openclaw@latest
# 初始化并安装守护进程
openclaw onboard /-install-daemon
onboard 命令会引导你完成初始配置，包括选择模型、配置 API Key、设置消息频道等。 /-install-daemon
参数会同时安装守护进程，让 OpenClaw 在后台持续运行。
方式二：一键脚本安装
curl Install
如果你不想手动安装 Node.js，可以使用官方提供的一键安装脚本：
curl -sSL https://get.openclaw.ai | bash
脚本会自动检测系统环境、安装 Node.js（如缺失）并完成 OpenClaw 安装。