# 连接 Telegram 机器人

本教程将指导你如何在 OpenClaw 中配置 Telegram 机器人。

## 概述

OpenClaw 的 Telegram 频道支持通过 grammY 进行机器人 DM 和群组消息处理，默认使用长轮询模式，可选配置 Webhook 模式。

---

## 一、快速设置指南

### 第一步：在 BotFather 创建机器人

1. 打开 Telegram，搜索并联系 **@BotFather**（确认账号名确为 `@BotFather`）
2. 发送 `/newbot` 命令
3. 按照提示设置机器人名称和用户名
4. 保存好获得的机器人令牌（Token）

### 第二步：配置令牌和消息策略

在配置文件 `~/.openclaw/config.json` 中添加以下内容：

```json5
{
  channels: {
    telegram: {
      enabled: true,
      botToken: "你的机器人令牌",
      dmPolicy: "pairing",
      groups: { "*": { requireMention: true } },
    },
  },
}
```

> **备选方案**：也可通过环境变量 `TELEGRAM_BOT_TOKEN=...` 配置（仅适用于默认账户）。

> **注意**：Telegram 频道不使用 `openclaw channels login telegram` 命令，直接在配置文件中设置令牌后启动网关即可。

### 第三步：启动网关并批准首个 DM

```bash
openclaw gateway
openclaw pairing list telegram
openclaw pairing approve telegram <验证码>
```

> 配对验证码有效期为 1 小时。

### 第四步：将机器人添加到群组

1. 将机器人拉入目标群组
2. 在配置中设置 `channels.telegram.groups` 和 `groupPolicy` 以匹配你的访问模型

---

## 二、Telegram 端设置

### 隐私模式和群组可见性

Telegram 机器人默认启用**隐私模式**，这会限制机器人接收群组消息的内容。

如果需要机器人查看所有群组消息：
- 通过 `/setprivacy` 命令关闭隐私模式，或
- 将机器人设置为群组管理员

> 切换隐私模式后，需要将机器人从群组中移除并重新添加，Telegram 才会应用更改。

### BotFather 常用命令

| 命令 | 功能 |
|------|------|
| `/setjoingroups` | 允许/禁止机器人被添加到群组 |
| `/setprivacy` | 设置群组可见性行为（隐私模式开关）|

---

## 三、访问控制和激活

### 3.1 DM 策略（私信策略）

`channels.telegram.dmPolicy` 控制私信访问权限：

| 策略值 | 说明 |
|--------|------|
| `pairing` | （默认）需要配对批准 |
| `allowlist` | 需要在 `allowFrom` 中至少包含一个发送者 ID |
| `open` | 需要 `allowFrom` 包含 `"*"` |
| `disabled` | 禁用私信 |

`channels.telegram.allowFrom` 接受数字形式的 Telegram 用户 ID，支持 `telegram:` 或 `tg:` 前缀（会被自动标准化）。

> **重要**：`dmPolicy: "allowlist"` 但 `allowFrom` 为空会阻止所有私信，配置验证会拒绝此设置。

#### 查找你的 Telegram 用户 ID

**安全方法（无需第三方机器人）**：
1. 给你的机器人发送私信
2. 运行 `openclaw logs --follow`
3. 在日志中找到 `from.id`

**官方 API 方法**：
```bash
curl "https://api.telegram.org/bot<你的机器人令牌>/getUpdates"
```

**第三方工具**：@userinfobot 或 @getidsbot（隐私性较低）

### 3.2 群组策略和允许列表

两个控制项协同工作：

1. **允许哪些群组**（`channels.telegram.groups`）：
   - 未配置 `groups`：
     - 配合 `groupPolicy: "open"`：任何群组都可通过群组 ID 检查
     - 配合 `groupPolicy: "allowlist"`（默认）：群组被阻止，直到添加 `groups` 条目（或 `"*"`）
   - 已配置 `groups`：作为白名单（显式 ID 或 `"*"`）

2. **允许哪些发送者**（`channels.telegram.groupPolicy`）：
   - `open` - 开放
   - `allowlist` - 允许列表（默认）
   - `disabled` - 禁用

`groupAllowFrom` 用于群组发送者过滤。如果未设置，Telegram 会回退到 `allowFrom`。

> **安全边界（2026.2.25+）**：群组发送者授权**不**继承 DM 配对-store 批准。配对仅适用于 DM。群组需要设置 `groupAllowFrom` 或每个群组/主题的 `allowFrom`。

#### 群组策略配置示例

允许特定群组的任何成员发言：

```json5
{
  channels: {
    telegram: {
      groups: {
        "-1001234567890": {
          groupPolicy: "open",
          requireMention: false,
        },
      },
    },
  },
}
```

### 3.3 提及行为

群组回复默认需要提及。

提及可以来自：
- 原生 `@机器人用户名` 提及，或
- `agents.list[].groupChat.mentionPatterns` 或 `messages.groupChat.mentionPatterns` 中的提及模式

会话级命令切换：
- `/activation always` - 始终激活
- `/activation mention` - 需要提及

这些仅更新会话状态。如需持久化，使用配置。

#### 持久化配置示例

```json5
{
  channels: {
    telegram: {
      groups: {
        "*": { requireMention: false },
      },
    },
  },
}
```

#### 获取群组聊天 ID

- 将群组消息转发给 @userinfobot 或 @getidsbot
- 或从 `openclaw logs --follow` 中读取 `chat.id`
- 或通过 Bot API 的 `getUpdates` 方法检查

---

## 四、运行时行为

- Telegram 由网关进程拥有
- 路由是确定性的：Telegram 入站回复返回到 Telegram（模型不选择频道）
- 入站消息标准化为共享频道信封，包含回复元数据和媒体占位符
- 群组会话按群组 ID 隔离。论坛主题附加 `:topic:<threadId>` 以保持主题隔离
- DM 消息可以携带 `message_thread_id`；OpenClaw 使用线程感知会话键路由它们，并为回复保留线程 ID
- 长轮询使用 grammY runner，按聊天/线程进行排序。总体 runner sink 并发使用 `agents.defaults.maxConcurrent`
- Telegram Bot API 不支持已读回执（`sendReadReceipts` 不适用）

---

## 五、功能参考

### 5.1 实时流式预览（原生草稿 + 消息编辑）

OpenClaw 可以实时流式传输部分回复：

- **私信**：Telegram 原生草稿流式传输 via `sendMessageDraft`
- **群组/主题**：预览消息 + `editMessageText`

配置要求：
- `channels.telegram.streaming` 可选值：`off | partial | block | progress`（默认：`partial`）
- `progress` 在 Telegram 上映射到 `partial`（兼容跨频道命名）
- 旧的 `channels.telegram.streamMode` 和布尔值会自动映射

> Telegram 在 Bot API 9.5（2026 年 3 月 1 日）为所有机器人启用了 `sendMessageDraft`。

对于纯文本回复：
- **DM**： OpenClaw 直接更新草稿（无需额外的预览消息）
- **群组/主题**：OpenClaw 保持同一预览消息并进行最终编辑（不会产生第二条消息）

对于复杂回复（如媒体内容），OpenClaw 回退到正常最终投递，然后清理预览消息。

> 预览流与块流是分开的。当 Telegram 明确启用块流时，OpenClaw 会跳过预览流以避免双重流。

如果原生草稿传输不可用/被拒绝，OpenClaw 自动回退到 `sendMessage` + `editMessageText`。

### 5.2 格式化与 HTML 回退

出站文本使用 Telegram 的 `parse_mode: "HTML"`。

- 类 Markdown 文本会转换为 Telegram 安全的 HTML
- 原始模型 HTML 会被转义以减少 Telegram 解析失败
- 如果 Telegram 拒绝解析的 HTML，OpenClaw 会重试为纯文本

链接预览默认启用，可通过 `channels.telegram.linkPreview: false` 禁用。

### 5.3 原生命令和自定义命令

Telegram 命令菜单在启动时使用 `setMyCommands` 注册。

**原生命令默认值**：
- `commands.native: "auto"` 为 Telegram 启用原生命令

**添加自定义命令菜单项**：

```json5
{
  channels: {
    telegram: {
      customCommands: [
        { command: "backup", description: "Git 备份" },
        { command: "generate", description: "创建图片" },
      ],
    },
  },
}
```

规则：
- 命令名会被标准化（去除前导 `/`，小写）
- 有效模式：`a-z`、`0-9`、`_`，长度 `1..32`
- 自定义命令不能覆盖原生命令
- 冲突/重复会被跳过并记录

> 注意：自定义命令仅是菜单项；它们不会自动实现行为。插件/技能命令即使不在 Telegram 菜单中显示，输入时仍然可以工作。

> **常见设置失败**：`setMyCommands failed` 通常意味着到 `api.telegram.org` 的出站 DNS/HTTPS 被阻止。

### 5.4 内联按钮

配置内联键盘范围：

```json5
{
  channels: {
    telegram: {
      capabilities: {
        inlineButtons: "allowlist",
      },
    },
  },
}
```

范围选项：
- `off` - 关闭
- `dm` - 仅私信
- `群组` - 仅群组
- `all` - 全部
- `allowlist` - 允许列表（默认）

旧配置 `capabilities: ["inlineButtons"]` 映射到 `inlineButtons: "all"`。

### 5.5 Telegram 消息操作

Telegram 工具操作包括：
- `sendMessage`（`to`、`content`、`可选 mediaUrl`、`replyToMessageId`、`messageThreadId`）
- `react`（`chatId`、`messageId`、`emoji`）
- `deleteMessage`（`chatId`、`messageId`）
- `editMessage`（`chatId`、`messageId`、`content`）
- `createForumTopic`（`chatId`、`name`、`可选 iconColor`、`iconCustomEmojiId`）

通道消息操作暴露了简化的别名（`send`、`react`、`delete`、`edit`、`sticker`、`sticker-search`、`topic-create`）。

** gating 控制**：
- `channels.telegram.actions.sendMessage`
- `channels.telegram.actions.deleteMessage`
- `channels.telegram.actions.reactions`
- `channels.telegram.actions.sticker`（默认：禁用）

### 5.6 回复线程标签

Telegram 支持在生成的输出中显式回复线程标签：
- `[[reply_to_current]]` 回复触发消息
- `[[reply_to:<id>]]` 回复特定 Telegram 消息 ID

`channels.telegram.replyToMode` 控制处理方式：
- `off`（默认）
- `first`
- `all`

> 注意：`off` 禁用隐式回复线程。显式 `[[reply_to_*]]` 标签仍然会被处理。

### 5.7 论坛主题和线程行为

**论坛超级群组**：
- 主题会话键附加 `:topic:<threadId>`
- 回复和打字针对主题线程
- 主题配置路径：`channels.telegram.groups.<chatId>.topics.<threadId>`

**通用主题（`threadId=1`）特殊处理**：
- 消息发送省略 `message_thread_id`（Telegram 拒绝 `sendMessage(...thread_id=1)`）
- 打字操作仍然包含 `message_thread_id`

**主题继承**：主题条目继承群组设置，除非被覆盖（`requireMention`、`allowFrom`、`skills`、`systemPrompt`、`enabled`、`groupPolicy`）。

**每个主题的智能体路由**：每个主题可以通过在主题配置中设置 `agentId` 来路由到不同的智能体。这为每个主题提供独立的隔离工作区、记忆和会话。

```json5
{
  channels: {
    telegram: {
      groups: {
        "-1001234567890": {
          topics: {
            "1": { agentId: "main" },      // 通用主题 → main 智能体
            "3": { agentId: "zu" },        // 开发主题 → zu 智能体
            "5": { agentId: "coder" }      // 代码审查 → coder 智能体
          }
        }
      }
    }
  }
}
```

每个主题都有自己的会话键：`agent:zu:telegram:group:-1001234567890:topic:3`

### 5.8 音频、视频和贴纸

#### 音频消息

Telegram 区分语音消息和音频文件。

- 默认：音频文件行为
- 在智能体回复中标记 `[[audio_as_voice]]` 强制发送语音消息

#### 视频消息

Telegram 区分视频文件和视频笔记。

> 视频笔记不支持字幕；提供的消息文本会单独发送。

#### 贴纸

入站贴纸处理：
- 静态 WEBP：下载并处理（占位符 `<media:sticker>`）
- 动画 TGS：跳过
- 视频 WEBM：跳过

启用贴纸操作：
```json5
{
  channels: {
    telegram: {
      actions: {
        sticker: true,
      },
    },
  },
}
```

### 5.9 反应通知

Telegram 反应作为 `message_reaction` 更新到达（与消息有效载荷分开）。

配置：
- `channels.telegram.reactionNotifications`：`off | own | all`（默认：`own`）
- `channels.telegram.reactionLevel`：`off | ack | minimal | extensive`（默认：`minimal`）

### 5.10 确认反应

`ackReaction` 在 OpenClaw 处理入站消息时发送确认表情符号。

解决顺序：
1. `channels.telegram.accounts.<accountId>.ackReaction`
2. `channels.telegram.ackReaction`
3. `messages.ackReaction`
4. 智能体身份表情符号回退（`agents.list[].identity.emoji`，否则为 "👀"）

### 5.11 长轮询与 Webhook

**默认**：长轮询

**Webhook 模式**：
- 设置 `channels.telegram.webhookUrl`
- 设置 `channels.telegram.webhookSecret`（Webhook URL 设置时必需）
- 可选 `channels.telegram.webhookPath`（默认 `/telegram-webhook`）
- 可选 `channels.telegram.webhookHost`（默认 `127.0.0.1`）
- 可选 `channels.telegram.webhookPort`（默认 `8787`）

### 5.12 限制、重试和 CLI 目标

- `channels.telegram.textChunkLimit` 默认 4000
- `channels.telegram.chunkMode="newline"` 优先在段落边界（空行）拆分
- `channels.telegram.mediaMaxMb`（默认 100）限制入站和出站 Telegram 媒体大小
- 群组上下文历史使用 `channels.telegram.historyLimit` 或 `messages.groupChat.historyLimit`（默认 50）；`0` 禁用

#### CLI 发送目标

```bash
openclaw message send --channel telegram --target 123456789 --message "你好"
openclaw message send --channel telegram --target @用户名 --message "你好"
```

---

## 六、故障排除

### 问题：机器人不回复非提及的群组消息

- 如果 `requireMention=false`，Telegram 隐私模式必须允许完整可见性
  - BotFather：`/setprivacy` → 禁用
  - 然后从群组中移除并重新添加机器人
- `openclaw channels status` 会在配置期望未提及的群组消息时发出警告
- 快速会话测试：`/activation always`

### 问题：机器人完全看不到群组消息

- 当 `channels.telegram.groups` 存在时，群组必须被列出（或包含 `"*"`）
- 验证机器人在群组中
- 查看日志：`openclaw logs --follow` 获取跳过原因

### 问题：命令部分或完全不工作

- 授权你的发送者身份（配对和/或数字 `allowFrom`）
- 命令授权即使在群组策略为 `open` 时仍然适用
- `setMyCommands failed` 通常表示到 `api.telegram.org` 的 DNS/HTTPS 可达性问题

### 问题：轮询或网络不稳定

- Node 22+ 自定义 fetch/代理可能在 AbortSignal 类型不匹配时导致立即中止行为
- 某些主机首先解析 `api.telegram.org` 到 IPv6；损坏的 IPv6 出站可能导致间歇性 Telegram API 故障
- 在具有不稳定直接出站/TLS 的 VPS 主机上，通过代理路由 Telegram API 调用：

```yaml
channels:
  telegram:
    proxy: socks5://<用户>:<密码>@代理主机:1080
```

- 如果你的主机是 WSL2 或明确更适合 IPv4-only 行为，强制选择协议族：

```yaml
channels:
  telegram:
    network:
      autoSelectFamily: false
```

- 环境覆盖（临时）：
  - `OPENCLAW_TELEGRAM_DISABLE_AUTO_SELECT_FAMILY=1`
  - `OPENCLAW_TELEGRAM_ENABLE_AUTO_SELECT_FAMILY=1`
  - `OPENCLAW_TELEGRAM_DNS_RESULT_ORDER=ipv4first`

---

## 七、配置参考速查

### 核心配置项

| 配置项 | 说明 |
|--------|------|
| `channels.telegram.enabled` | 启用/禁用频道启动 |
| `channels.telegram.botToken` | 机器人令牌（BotFather） |
| `channels.telegram.tokenFile` | 从文件路径读取令牌 |
| `channels.telegram.dmPolicy` | `pairing \| allowlist \| open \| disabled`（默认：pairing）|
| `channels.telegram.allowFrom` | DM 允许列表（数字 Telegram 用户 ID）|
| `channels.telegram.groupPolicy` | `open \| allowlist \| disabled`（默认：allowlist）|
| `channels.telegram.groupAllowFrom` | 群组发送者允许列表 |
| `channels.telegram.groups` | 每个群组的默认值 + 允许列表 |
| `channels.telegram.streaming` | `off \| partial \| block \| progress`（默认：`partial`）|
| `channels.telegram.linkPreview` | 切换出站消息的链接预览（默认：true）|
| `channels.telegram.mediaMaxMb` | 入站/出站 Telegram 媒体上限（MB，默认：100）|
| `channels.telegram.proxy` | Bot API 调用的代理 URL（SOCKS/HTTP）|
| `channels.telegram.webhookUrl` | 启用 Webhook 模式 |
| `channels.telegram.webhookSecret` | Webhook 密钥 |
| `channels.telegram.textChunkLimit` | 出站分块大小（字符）|
| `channels.telegram.chunkMode` | `length`（默认）或 `newline` |

### 操作控制

| 配置项 | 说明 |
|--------|------|
| `channels.telegram.actions.sendMessage` | 门控 Telegram 工具消息发送 |
| `channels.telegram.actions.deleteMessage` | 门控 Telegram 工具消息删除 |
| `channels.telegram.actions.reactions` | 门控 Telegram 工具反应 |
| `channels.telegram.actions.sticker` | 门控 Telegram 贴纸操作（默认：false）|
| `channels.telegram.actions.poll` | 启用/禁用 Telegram 投票创建 |

### 能力控制

| 配置项 | 说明 |
|--------|------|
| `channels.telegram.capabilities.inlineButtons` | `off \| dm \| group \| all \| allowlist`（默认：allowlist）|

### 反应配置

| 配置项 | 说明 |
|--------|------|
| `channels.telegram.reactionNotifications` | `off \| own \| all`（默认：`own`）|
| `channels.telegram.reactionLevel` | `off \| ack \| minimal \| extensive`（默认：`minimal`）|

---

## 下一步

- [5 分钟安装 OpenClaw](/tutorial/5分钟安装openclaw)
- 配置更多渠道
- 使用内置技能
