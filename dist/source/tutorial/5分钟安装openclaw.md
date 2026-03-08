# 5 分钟安装 OpenClaw

本教程将指导你在 5 分钟内完成 OpenClaw 的安装和基本配置。

## 系统要求

在开始安装前，请确保你的设备满足以下要求：

| 要求 | 说明 |
|------|------|
| Node.js | >= 22 |
| 包管理器 | pnpm（推荐）或 npm |
| 操作系统 | macOS / Windows (WSL2) / Linux |

**可选**：
- Brave Search API 密钥（用于网页搜索功能）

## 安装步骤

### 1. 安装 OpenClaw CLI

**macOS / Linux**：
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

**Windows (PowerShell)**：
```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
```

**或使用 npm/pnpm 全局安装**：
```bash
npm install -g openclaw@latest
# 或
pnpm add -g openclaw@latest
```

### 2. 运行新手引导

运行以下命令启动交互式配置向导：

```bash
openclaw onboard --install-daemon
```

向导将引导你完成以下配置：

1. **模型/认证** - 设置 Anthropic API 密钥或其他模型
2. **Gateway 设置** - 配置本地网关端口和认证
3. **渠道选择** - Telegram、Discord 等
4. **工作区配置** - 默认 ~/.openclaw/workspace
5. **守护进程** - 自动启动配置

### 3. 启动 Gateway

安装完成后，启动本地 Gateway：

```bash
openclaw gateway --port 18789 --verbose
```

或检查状态：

```bash
openclaw gateway status
```

### 4. 访问 Dashboard

打开浏览器访问：http://127.0.0.1:18789/

## 快速验证

安装完成后，运行以下命令验证配置：

```bash
# 检查状态
openclaw status

# 健康检查
openclaw health

# 安全审计
openclaw security audit --deep
```

## 配对与连接

### Telegram 配对

配置好 Telegram 机器人后，运行以下命令查看配对请求：

```bash
# 查看配对请求
openclaw pairing list telegram

# 批准配对
openclaw pairing approve telegram <code>
```

配对验证码有效期为 1 小时。

### 私信审批

```bash
# 查看配对请求
openclaw pairing list

# 批准配对
openclaw pairing approve <channel> <code>
```

### 发送测试消息

```bash
# 通过 Telegram 发送
openclaw message send --channel telegram --target @username --message "Hello from OpenClaw"
```

## 高级配置

### 非交互模式安装

如果你需要自动化部署，可以使用非交互模式：

```bash
openclaw onboard --non-interactive \
  --mode local \
  --auth-choice apiKey \
  --anthropic-api-key "$ANTHROPIC_API_KEY" \
  --gateway-port 18789 \
  --gateway-bind loopback \
  --install-daemon \
  --daemon-runtime node \
  --skip-skills
```

### 添加更多智能体

```bash
openclaw agents add <name>
```

可创建具有独立工作区、会话和认证配置的隔离智能体。

### 配置 Brave Search

```bash
openclaw configure --section web
```

## 常见问题

**Q: 安装失败怎么办？**

A: 确保 Node.js 版本 >= 22，并使用管理员权限运行安装命令。

**Q: Gateway 无法启动？**

A: 检查端口 18789 是否被占用，可使用其他端口：`openclaw gateway --port 18790`

**Q: 如何重新配置？**

A: 运行 `openclaw configure` 重新启动配置向导。

## 下一步

- [连接 Telegram 机器人](/tutorial/连接telegram机器人)
- 配置更多渠道
- 使用内置技能
- 了解架构设计
