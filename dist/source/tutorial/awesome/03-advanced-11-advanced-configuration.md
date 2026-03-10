# 第11章 高级配置（多模型切换/成本优化/性能调优）

> 💡 **本章目标**：掌握OpenClaw的高级配置技巧，包括Antigravity Manager配置、多模型切换、成本优化和性能调优。

## ⚙️ 本章内容

- 11.1 Antigravity Manager完全配置指南
- 11.2 多模型切换策略
- 11.3 记忆搜索配置（Memory Search）
- 11.4 成本优化方案
- 11.5 性能调优技巧
- 11.6 模型提供商配置详解
- 11.7 工具系统详解
- 11.8 CLI 命令完整参考

---

## 11.1 Antigravity Manager完全配置指南

### 11.1.1 什么是Antigravity Manager？

**定义**：

Antigravity Manager是1个AI API代理工具，可以让你通过本地服务访问多个AI模型（Claude、Gemini、GPT等），统一管理API 密钥和请求。

**项目地址**：https://github.com/lbjlaq/Antigravity-Manager

**为什么要用Antigravity Manager？**

把OpenClaw和Antigravity Manager结合使用，你可以：

- ✅ **本地部署**：所有数据在本地处理，保护隐私
- ✅ **统一管理**：1个工具管理所有AI模型
- ✅ **成本控制**：使用自己的API 密钥，避免中间商加价
- ✅ **灵活切换**：随时切换不同的模型，无需修改代码
- ✅ **技能扩展**：通过ClawHub安装各种实用技能

![Antigravity Manager架构图 - 统一管理多个AI服务](https://upload.maynor1024.live/file/1770264626936_image-20260205121018123.png)

### 11.1.2 系统要求和前置准备

**系统要求**：
- macOS 10.15+、Windows 10+、或Linux
- 至少4GB内存
- 稳定的网络连接

**需要准备的东西**：
1. Antigravity Manager安装包
2. AI模型的API Key（或独享账号）
3. 基本的命令行操作能力

### 11.1.3 安装Antigravity Manager

#### macOS用户

1. 访问[Antigravity Manager Releases](https://github.com/lbjlaq/Antigravity-Manager/releases)
2. 下载最新版本的`.dmg`文件
3. 双击`.dmg`文件，将应用拖入`Applications`文件夹
4. 打开应用（首次打开可能需要在「系统偏好设置 → 安全性与隐私」中允许）

#### Windows用户

1. 访问[Antigravity Manager Releases](https://github.com/lbjlaq/Antigravity-Manager/releases)
2. 下载最新版本的`.exe`安装包
3. 运行安装程序，按照提示完成安装
4. 启动Antigravity Manager

#### Linux用户

1. 访问[Antigravity Manager Releases](https://github.com/lbjlaq/Antigravity-Manager/releases)
2. 下载最新版本的`.AppImage`或`.deb`文件
3. 给予执行权限并运行：

```bash
chmod +x Antigravity-Manager-*.AppImage
./Antigravity-Manager-*.AppImage
```text
#### 验证安装

启动后，应用会在本地运行1个API服务，默认地址：`http://127.0.0.1:8045`

在浏览器中访问这个地址，如果能看到管理界面，说明安装成功。

### 11.1.4 配置AI模型账号

Antigravity Manager需要你提供AI模型的API 密钥才能工作。

#### 方案1：使用官方API

**Claude API**
1. 访问[Anthropic Console](https://console.anthropic.com/)
2. 注册账号并绑定信用卡
3. 创建API Key
4. 复制保存

**Gemini API**
1. 访问[Google AI Studio](https://makersuite.google.com/app/apikey)
2. 登录Google账号
3. 创建API Key
4. 复制保存

**OpenAI API**
1. 访问[OpenAI Platform](https://platform.openai.com/api-keys)
2. 注册账号并绑定信用卡
3. 创建API Key
4. 复制保存

#### 方案2：购买独享账号（推荐）

如果你不想自己申请API，可以购买独享账号：

**推荐**：学生账号Gemini 3 Pro独享账号12个月（支持反重力）

**优势：**
- ✅ 独享账号，无需担心限流
- ✅ 支持Antigravity Manager
- ✅ 12个月有效期
- ✅ 性价比高
- ✅ 即买即用

#### 在Antigravity Manager中配置API Key

1. 打开Antigravity Manager管理界面
2. 点击「API Keys」
3. 选择对应的AI服务商（Claude、Gemini、OpenAI）
4. 输入API Key
5. 点击「保存」

### 11.1.5 生成User Token

User Token是OpenClaw访问Antigravity Manager的凭证。

1. 在Antigravity Manager界面中，点击右上角「User Tokens」
2. 点击「创建新Token」
3. 复制生成的Token（例如：`sk-82bc103b51f24af888af525a7835e87c`）
4. ⚠️ **重要**：妥善保存这个Token，它只会显示一次！

### 11.1.6 配置 OpenClaw

#### 配置Claude Sonnet 4.5（默认模型）

这是最常用的模型，适合日常对话和代码生成。

```bash
# 添加local-anthropic provider
cat ~/.openclaw/openclaw.json | jq '.models.providers["local-anthropic"] = {
  "baseUrl": "http://127.0.0.1:8045",
  "apiKey": "你的User_Token",
  "auth": "api-key",
  "api": "anthropic-messages",
  "models": [
    {
      "id": "claude-sonnet-4-5-20250929",
      "name": "Local Claude Sonnet 4.5",
      "reasoning": false,
      "input": ["text"],
      "cost": {
        "input": 0,
        "output": 0,
        "cacheRead": 0,
        "cacheWrite": 0
      },
      "contextWindow": 200000,
      "maxTokens": 8192
    }
  ]
}' > /tmp/openclaw-temp.json && mv /tmp/openclaw-temp.json ~/.openclaw/openclaw.json

# 设置为默认模型
openclaw config set agents.defaults.model.primary "local-anthropic/claude-sonnet-4-5-20250929"
```text
**注意**：把`你的User_Token`替换成第三步生成的Token。

#### 配置Claude Opus 4.5 Thinking（推理模型）

这是Claude的推理模型，适合复杂问题和深度思考。

```bash
cat ~/.openclaw/openclaw.json | jq '.models.providers["local-anthropic-opus"] = {
  "baseUrl": "http://127.0.0.1:8045",
  "apiKey": "你的User_Token",
  "auth": "api-key",
  "api": "anthropic-messages",
  "models": [
    {
      "id": "claude-opus-4-5-thinking",
      "name": "Local Claude Opus 4.5 Thinking",
      "reasoning": true,
      "input": ["text"],
      "cost": {
        "input": 0,
        "output": 0,
        "cacheRead": 0,
        "cacheWrite": 0
      },
      "contextWindow": 200000,
      "maxTokens": 8192
    }
  ]
}' > /tmp/openclaw-temp.json && mv /tmp/openclaw-temp.json ~/.openclaw/openclaw.json
```text
#### 配置Gemini 3 Pro Image（多模态模型）

这是Google的多模态模型，支持图片识别和分析。

```bash
cat ~/.openclaw/openclaw.json | jq '.models.providers["local-google"] = {
  "baseUrl": "http://127.0.0.1:8045/v1beta",
  "apiKey": "你的User_Token",
  "auth": "api-key",
  "api": "google-generative-ai",
  "models": [
    {
      "id": "gemini-3-pro-image",
      "name": "Local Gemini 3 Pro Image",
      "reasoning": false,
      "input": ["text", "image"],
      "cost": {
        "input": 0,
        "output": 0,
        "cacheRead": 0,
        "cacheWrite": 0
      },
      "contextWindow": 2000000,
      "maxTokens": 8192
    }
  ]
}' > /tmp/openclaw-temp.json && mv /tmp/openclaw-temp.json ~/.openclaw/openclaw.json
```text
### 11.1.7 验证配置

#### 检查模型列表

```bash
openclaw models list
```text
你应该看到：

```
Model                                      Input      Ctx      Local Auth  Tags
local-anthropic/claude-sonnet-4-5-20250929 text       195k     yes   yes   default
local-anthropic-opus/claude-opus-4-5-thinking text    195k     yes   yes   configured
local-google/gemini-3-pro-image            text,image 1953k    yes   yes   configured
```text
#### 重启Gateway

```bash
openclaw gateway restart
```text
#### 测试连接

```bash
openclaw message send "你好，介绍一下你自己"
```text
如果能正常返回回复，说明配置成功。

### 11.1.8 使用方法

#### 使用默认模型（Claude Sonnet 4.5）

直接发送消息即可：

```bash
openclaw message send "写1个Python脚本，打印Hello World"
```text
#### 切换到Opus Thinking模型

适合需要深度思考的复杂问题：

```bash
openclaw config set agents.defaults.model.primary "local-anthropic-opus/claude-opus-4-5-thinking"
openclaw gateway restart
```text
#### 切换到Gemini Image模型

适合需要图片识别的场景：

```bash
openclaw config set agents.defaults.model.primary "local-google/gemini-3-pro-image"
openclaw gateway restart
```text
#### 临时使用特定模型

不修改默认配置，临时使用某个模型：

```bash
# 使用Opus Thinking
openclaw agent --model "local-anthropic-opus/claude-opus-4-5-thinking" --message "解释量子计算的原理"

# 使用Gemini Image
openclaw agent --model "local-google/gemini-3-pro-image" --message "分析这张图片" --image ./photo.jpg
```text
### 11.1.9 模型选择指南

#### Claude Sonnet 4.5

**适用场景：**
- 日常对话
- 代码生成
- 文档编写
- 快速问答

**特点：**
- 速度快
- 成本低
- 质量高
- 上下文窗口：200k tokens

#### Claude Opus 4.5 Thinking

**适用场景：**
- 复杂推理
- 数学问题
- 算法优化
- 深度分析

**特点：**
- 推理能力强
- 思考过程可见
- 适合复杂问题
- 上下文窗口：200k tokens

#### Gemini 3 Pro Image

**适用场景：**
- 图片识别
- 多模态任务
- 文档分析
- 设计评审

**特点：**
- 支持图片输入
- 超大上下文窗口
- 识别准确
- 上下文窗口：2000k tokens

### 11.1.10 高级配置

#### 配置模型别名

给模型起1个好记的名字：

```bash
openclaw config set agents.defaults.models."local-anthropic/claude-sonnet-4-5-20250929".alias "我的Claude"
```text
#### 添加多个API Key

如果你有多个Antigravity账号，可以配置多个provider：

```bash
cat ~/.openclaw/openclaw.json | jq '.models.providers["local-anthropic-2"] = {
  "baseUrl": "http://127.0.0.1:8045",
  "apiKey": "另1个User_Token",
  "auth": "api-key",
  "api": "anthropic-messages",
  "models": [...]
}' > /tmp/openclaw-temp.json && mv /tmp/openclaw-temp.json ~/.openclaw/openclaw.json
```text
#### 配置成本追踪

虽然本地API成本为0，但你可以设置虚拟成本来追踪使用量：

```json
{
  "cost": {
    "input": 0.003,
    "output": 0.015,
    "cacheRead": 0.0003,
    "cacheWrite": 0.00375
  }
}
```text
#### 备份配置

```bash
cp ~/.openclaw/openclaw.json ~/.openclaw/openclaw.json.backup
```text
#### 恢复配置

```bash
cp ~/.openclaw/openclaw.json.backup ~/.openclaw/openclaw.json
openclaw gateway restart
```text
### 11.1.11 常用命令速查

```bash
# 查看模型列表
openclaw models list

# 查看当前默认模型
openclaw config get agents.defaults.model.primary

# 切换默认模型
openclaw config set agents.defaults.model.primary "模型ID"

# 重启Gateway
openclaw gateway restart

# 查看配置文件
cat ~/.openclaw/openclaw.json | jq '.models.providers'

# 发送消息
openclaw message send "你的消息"

# 临时使用特定模型
openclaw agent --model "模型ID" --message "你的消息"
```text
### 11.1.12 模型ID速查

```
local-anthropic/claude-sonnet-4-5-20250929
local-anthropic-opus/claude-opus-4-5-thinking
local-google/gemini-3-pro-image
```text
### 11.1.13 故障排查

#### 问题1：模型列表为空

**原因**：配置文件格式错误或路径不对

**解决方法**：
```bash
# 检查配置文件
cat ~/.openclaw/openclaw.json | jq '.models.providers'

# 如果返回错误，恢复备份
cp ~/.openclaw/openclaw.json.backup ~/.openclaw/openclaw.json
```text
#### 问题2：API连接失败

**原因**：Antigravity Manager未启动或端口被占用

**解决方法**：
```bash
# 检查API是否正常
curl http://127.0.0.1:8045/v1/models

# 检查端口占用（macOS/Linux）
lsof -i :8045

# 重启Antigravity Manager
```text
#### 问题3：配置后模型不生效

**原因**：忘记重启Gateway

**解决方法**：
```bash
openclaw gateway restart
```text
#### 问题4：User Token无效

**原因**：Token过期或输入错误

**解决方法**：
1. 在Antigravity Manager中重新生成Token
2. 更新配置文件中的apiKey
3. 重启Gateway

---# 测试连接
openclaw test api
```

### 10.1.5 实战案例

**案例1：配置Claude Sonnet**
```text
步骤：
1. 获取Claude API Key
2. 在Antigravity Manager中添加
3. 配置 OpenClaw
4. 测试使用

结果：
你：你好
OpenClaw（Claude Sonnet）：你好！我是Claude...
```

**案例2：多账号管理**
```text
场景：管理多个Claude账号

配置：
- Claude账号1：日常使用
- Claude账号2：备用
- Claude账号3：高峰期使用

优势：
- 分散负载
- 避免限流
- 提高可用性
```

---

## 11.2 多模型切换策略

### 11.2.1 模型特点对比

| 模型 | 优势 | 劣势 | 适用场景 |
|------|------|------|----------|
| Claude Sonnet | 平衡性好 | 价格中等 | 日常对话 |
| Claude Opus | 能力最强 | 价格最贵 | 复杂任务 |
| GPT-5.2 | 功能丰富 | 响应较慢 | 创意工作 |
| Gemini 3 Pro | 免费额度大 | 能力一般 | 简单任务 |
| DeepSeek-V3 | 性价比高 | 中文优化 | 编程任务 |

### 11.2.2 场景化选择策略

**日常对话**：
```text
推荐：Claude Sonnet 4.5
理由：
- 响应速度快
- 质量稳定
- 价格适中
```text
**复杂推理**：
```text
推荐：Claude Opus 4.6
理由：
- 推理能力最强
- 准确率最高
- 适合难题
```text
**图片识别**：
```text
推荐：Gemini 3 Pro
理由：
- 多模态能力强
- 免费额度大
- 识别准确
```text
**编程任务**：
```text
推荐：DeepSeek-V3
理由：
- 代码能力强
- 价格便宜
- 中文友好
```text
### 11.2.3 模型容灾机制（Fallback）

> 🛡️ **高可用保障**：通过配置主模型和备用模型，确保服务不中断。

#### 什么是模型容灾？

当主模型（primary）出现以下情况时，系统会自动切换到备用模型（fallbacks）：
- API 调用失败
- 请求超时
- 速率限制（Rate Limit）
- 服务不可用

![服务容灾配置示例](https://upload.maynor1024.live/file/1771085328347_service-disaster-recovery.png)

#### 基础容灾配置

**配置文件路径**：`~/.openclaw/openclaw.json`

```json
{
  "agents": {
    "defaults": {
      "model": {
        "primary": "anthropic/claude-opus-4-6",
        "fallbacks": [
          "openai-codex/gpt-5.3-codex",
          "google-antigravity/claude-opus-4-6-thinking"
        ]
      }
    },
    "list": [
      {
        "id": "main",
        "default": true,
        "model": {
          "primary": "anthropic/claude-opus-4-6",
          "fallbacks": [
            "openai-codex/gpt-5.3-codex",
            "google-antigravity/claude-opus-4-6-thinking"
          ]
        }
      }
    ]
  }
}
```text
**工作流程**：
```text
1. 尝试使用主模型：anthropic/claude-opus-4-6
   ↓ 失败
2. 切换到备用模型1：openai-codex/gpt-5.3-codex
   ↓ 失败
3. 切换到备用模型2：google-antigravity/claude-opus-4-6-thinking
   ↓ 失败
4. 返回错误信息
```text
#### 实战案例1：成本优化型容灾

**场景**：优先使用便宜模型，失败后使用高质量模型

```json
{
  "agents": {
    "defaults": {
      "model": {
        "primary": "deepseek/deepseek-chat",
        "fallbacks": [
          "anthropic/claude-sonnet-4-5",
          "anthropic/claude-opus-4-6"
        ]
      }
    }
  }
}
```text
**优势**：
- ✅ 日常使用 DeepSeek（极低成本）
- ✅ DeepSeek 限流时自动切换到 Claude Sonnet
- ✅ 重要任务失败时使用 Claude Opus 兜底
- ✅ 成本节省 80%+

#### 实战案例2：性能优先型容灾

**场景**：优先使用最强模型，失败后降级

```json
{
  "agents": {
    "defaults": {
      "model": {
        "primary": "anthropic/claude-opus-4-6",
        "fallbacks": [
          "anthropic/claude-sonnet-4-5",
          "deepseek/deepseek-chat"
        ]
      }
    }
  }
}
```text
**优势**：
- ✅ 保证最佳质量
- ✅ 高峰期自动降级
- ✅ 确保服务不中断

#### 实战案例3：多提供商容灾

**场景**：跨提供商容灾，避免单点故障

```json
{
  "agents": {
    "defaults": {
      "model": {
        "primary": "anthropic/claude-sonnet-4-5",
        "fallbacks": [
          "openai/gpt-4o",
          "google/gemini-2.0-flash-exp",
          "deepseek/deepseek-chat"
        ]
      }
    }
  }
}
```text
**优势**：
- ✅ Anthropic 故障时切换到 OpenAI
- ✅ OpenAI 故障时切换到 Google
- ✅ 最后使用 DeepSeek 兜底
- ✅ 最大化服务可用性

#### 配置命令行方式

```bash
# 设置主模型
openclaw config set agents.defaults.model.primary "anthropic/claude-opus-4-6"

# 设置备用模型（需要手动编辑 JSON）
# 或使用 jq 命令
cat ~/.openclaw/openclaw.json | jq '.agents.defaults.model.fallbacks = [
  "openai-codex/gpt-5.3-codex",
  "google-antigravity/claude-opus-4-6-thinking"
]' > /tmp/openclaw-temp.json && mv /tmp/openclaw-temp.json ~/.openclaw/openclaw.json

# 重启 Gateway 使配置生效
openclaw gateway restart
```text
#### 验证容灾配置

```bash
# 查看当前配置
openclaw config get agents.defaults.model

# 输出示例：
{
  "primary": "anthropic/claude-opus-4-6",
  "fallbacks": [
    "openai-codex/gpt-5.3-codex",
    "google-antigravity/claude-opus-4-6-thinking"
  ]
}
```text
#### 容灾最佳实践

**1. 选择不同提供商**：
✅ 推荐：Anthropic → OpenAI → Google
❌ 不推荐：Claude Opus → Claude Sonnet（同提供商）
```text
**2. 按能力梯度配置**：
```text
✅ 推荐：高能力 → 中能力 → 低能力
❌ 不推荐：低能力 → 高能力（浪费资源）
```text
**3. 考虑成本因素**：
```text
✅ 推荐：便宜 → 中等 → 昂贵（成本优化）
✅ 推荐：昂贵 → 中等 → 便宜（质量优先）
```text
**4. 限制备用数量**：
```text
✅ 推荐：2-3 个备用模型
❌ 不推荐：5+ 个备用模型（过度复杂）
```text
### 11.2.4 多认证 Profile + Token 轮换

> 🔐 **账号管理**：配置多个认证配置，实现账号轮换和负载均衡。

#### 什么是认证 Profile？

认证 Profile 允许你为同一个提供商配置多个账号，系统会按照指定顺序轮换使用，避免单账号限流。

#### 基础配置

**配置文件路径**：`~/.openclaw/openclaw.json`

```json
{
  "auth": {
    "profiles": {
      "openai-codex:default": {
        "provider": "openai-codex",
        "mode": "oauth"
      },
      "anthropic:default": {
        "provider": "anthropic",
        "mode": "token"
      },
      "anthropic:manual": {
        "provider": "anthropic",
        "mode": "token"
      },
      "google-antigravity:mail1@gmail.com": {
        "provider": "google-antigravity",
        "mode": "oauth",
        "email": "mail1@gmail.com"
      },
      "google-antigravity:mail2@gmail.com": {
        "provider": "google-antigravity",
        "mode": "oauth"
      }
    },
    "order": {
      "anthropic": [
        "anthropic:default",
        "anthropic:manual"
      ],
      "google-antigravity": [
        "google-antigravity:mail1@gmail.com",
        "google-antigravity:mail2@gmail.com"
      ]
    }
  }
}
```text
#### 配置说明

**profiles 字段**：
- 定义所有可用的认证配置
- 格式：`"提供商:标识符"`
- `mode`：认证方式（`oauth` 或 `token`）
- `email`：OAuth 账号邮箱（可选）

**order 字段**：
- 定义每个提供商的账号使用顺序
- 系统会按顺序轮换使用
- 当前账号限流时自动切换到下一个

#### 实战案例1：Anthropic 双账号轮换

**场景**：配置 2 个 Claude API Key，避免限流

```json
{
  "auth": {
    "profiles": {
      "anthropic:account1": {
        "provider": "anthropic",
        "mode": "token"
      },
      "anthropic:account2": {
        "provider": "anthropic",
        "mode": "token"
      }
    },
    "order": {
      "anthropic": [
        "anthropic:account1",
        "anthropic:account2"
      ]
    }
  }
}
```text
**配置 API Key**：
```bash
# 在 Antigravity Manager 中分别配置两个 API Key
# 或在 OpenClaw 配置中添加：
{
  "models": {
    "providers": {
      "anthropic": {
        "apiKey": "sk-ant-api-key-1",
        ...
      },
      "anthropic-2": {
        "apiKey": "sk-ant-api-key-2",
        ...
      }
    }
  }
}
```text
**工作流程**：
```text
1. 使用 account1 发送请求
2. account1 达到限流 → 自动切换到 account2
3. account2 达到限流 → 等待 account1 恢复
4. 循环往复
```text
#### 实战案例2：Google 多邮箱轮换

**场景**：使用多个 Google 账号访问 Gemini

```json
{
  "auth": {
    "profiles": {
      "google-antigravity:work@gmail.com": {
        "provider": "google-antigravity",
        "mode": "oauth",
        "email": "work@gmail.com"
      },
      "google-antigravity:personal@gmail.com": {
        "provider": "google-antigravity",
        "mode": "oauth",
        "email": "personal@gmail.com"
      },
      "google-antigravity:backup@gmail.com": {
        "provider": "google-antigravity",
        "mode": "oauth",
        "email": "backup@gmail.com"
      }
    },
    "order": {
      "google-antigravity": [
        "google-antigravity:work@gmail.com",
        "google-antigravity:personal@gmail.com",
        "google-antigravity:backup@gmail.com"
      ]
    }
  }
}
```text
**优势**：
- ✅ 3 个账号轮换，限流概率降低 66%
- ✅ 免费额度叠加（3 倍免费额度）
- ✅ 高峰期自动负载均衡

#### 实战案例3：混合认证模式

**场景**：同时使用 OAuth 和 API Token

```json
{
  "auth": {
    "profiles": {
      "anthropic:oauth-account": {
        "provider": "anthropic",
        "mode": "oauth"
      },
      "anthropic:token-account": {
        "provider": "anthropic",
        "mode": "token"
      }
    },
    "order": {
      "anthropic": [
        "anthropic:oauth-account",
        "anthropic:token-account"
      ]
    }
  }
}
```text
**使用场景**：
- OAuth 账号：日常使用（更安全）
- Token 账号：备用（更稳定）

#### 配置最佳实践

**1. 账号数量建议**：
```text
✅ 推荐：2-3 个账号
❌ 不推荐：5+ 个账号（管理复杂）
```text
**2. 认证方式选择**：
```text
OAuth：更安全，适合个人账号
Token：更稳定，适合 API 密钥
```text
**3. 轮换策略**：
```text
✅ 按使用频率排序（高频 → 低频）
✅ 按账号等级排序（付费 → 免费）
```text
**4. 监控和维护**：
```bash
# 查看当前使用的认证配置
openclaw config get auth.profiles

# 测试认证是否有效
openclaw test api
```text
### 11.2.5 自动切换配置

**基于任务类型切换**：
```json
{
  "rules": [
    {
      "condition": "task.type === 'code'",
      "model": "deepseek-v3"
    },
    {
      "condition": "task.type === 'image'",
      "model": "gemini-3-pro"
    },
    {
      "condition": "task.complexity === 'high'",
      "model": "claude-opus-4.6"
    },
    {
      "condition": "default",
      "model": "claude-sonnet-4.5"
    }
  ]
}
```text
**基于成本切换**：
```json
{
  "rules": [
    {
      "condition": "cost.daily < 10",
      "model": "claude-opus-4.6"
    },
    {
      "condition": "cost.daily >= 10",
      "model": "claude-sonnet-4.5"
    }
  ]
}
```text
---

## 11.3 记忆搜索配置（Memory Search）

> 🧠 **智能记忆**：配置 Memory Search 让 OpenClaw 记住历史对话，提供更智能的上下文感知。

### 11.3.1 什么是 Memory Search？

Memory Search 是 OpenClaw 的记忆系统，可以：
- 记住历史对话内容
- 搜索相关会话记录
- 提供上下文感知
- 支持混合检索（向量 + 文本）

### 11.3.2 基础配置

**配置文件路径**：`~/.openclaw/openclaw.json`

```json
{
  "agents": {
    "defaults": {
      "memorySearch": {
        "sources": ["memory", "sessions"],
        "experimental": {
          "sessionMemory": true
        },
        "provider": "gemini",
        "remote": {
          "apiKey": "AIzaSy**************************"
        },
        "fallback": "gemini",
        "model": "gemini-embedding-001",
        "query": {
          "hybrid": {
            "enabled": true,
            "vectorWeight": 0.7,
            "textWeight": 0.3
          }
        }
      }
    }
  }
}
```text
### 11.3.3 配置项详解

#### sources（数据源）

```json
{
  "sources": ["memory", "sessions"]
}
```text
**可选值**：
- `memory`：长期记忆（跨会话）
- `sessions`：会话记录（当前会话）

**推荐配置**：
```json
// 只使用长期记忆
"sources": ["memory"]

// 同时使用长期记忆和会话记录
"sources": ["memory", "sessions"]
```text
#### experimental（实验性功能）

```json
{
  "experimental": {
    "sessionMemory": true
  }
}
```text
**sessionMemory**：
- `true`：启用会话记忆（推荐）
- `false`：禁用会话记忆

#### provider（嵌入模型提供商）

```json
{
  "provider": "gemini"
}
```text
**支持的提供商**：
- `gemini`：Google Gemini（推荐，免费）
- `openai`：OpenAI Embeddings
- `local`：本地嵌入模型

**推荐**：使用 Gemini（免费且效果好）

#### remote（远程 API 配置）

```json
{
  "remote": {
    "apiKey": "AIzaSy**************************"
  }
}
```text
**获取 Gemini API Key**：
1. 访问 [Google AI Studio](https://makersuite.google.com/app/apikey)
2. 登录 Google 账号
3. 创建 API Key
4. 复制并粘贴到配置中

#### fallback（备用提供商）

```json
{
  "fallback": "gemini"
}
```text
当主提供商失败时，使用备用提供商。

#### model（嵌入模型）

```json
{
  "model": "gemini-embedding-001"
}
```text
**Gemini 嵌入模型**：
- `gemini-embedding-001`：标准模型（推荐）
- `text-embedding-004`：高级模型

**OpenAI 嵌入模型**：
- `text-embedding-3-small`：小模型（便宜）
- `text-embedding-3-large`：大模型（效果好）

#### query（查询配置）

```json
{
  "query": {
    "hybrid": {
      "enabled": true,
      "vectorWeight": 0.7,
      "textWeight": 0.3
    }
  }
}
```text
**hybrid（混合检索）**：
- `enabled`：是否启用混合检索
- `vectorWeight`：向量搜索权重（0-1）
- `textWeight`：文本搜索权重（0-1）

**权重建议**：
```text
语义搜索优先：vectorWeight: 0.7, textWeight: 0.3
关键词搜索优先：vectorWeight: 0.3, textWeight: 0.7
平衡模式：vectorWeight: 0.5, textWeight: 0.5
```text
### 11.3.4 实战案例1：基础配置（Gemini）

**场景**：使用免费的 Gemini 嵌入模型

```json
{
  "agents": {
    "defaults": {
      "memorySearch": {
        "sources": ["memory", "sessions"],
        "experimental": {
          "sessionMemory": true
        },
        "provider": "gemini",
        "remote": {
          "apiKey": "你的Gemini_API_Key"
        },
        "model": "gemini-embedding-001",
        "query": {
          "hybrid": {
            "enabled": true,
            "vectorWeight": 0.7,
            "textWeight": 0.3
          }
        }
      }
    }
  }
}
```text
**优势**：
- ✅ 完全免费
- ✅ 效果优秀
- ✅ 配置简单

### 11.3.5 实战案例2：高级配置（OpenAI）

**场景**：使用 OpenAI 嵌入模型（更高精度）

```json
{
  "agents": {
    "defaults": {
      "memorySearch": {
        "sources": ["memory", "sessions"],
        "experimental": {
          "sessionMemory": true
        },
        "provider": "openai",
        "remote": {
          "apiKey": "sk-your-openai-api-key"
        },
        "fallback": "gemini",
        "model": "text-embedding-3-large",
        "query": {
          "hybrid": {
            "enabled": true,
            "vectorWeight": 0.8,
            "textWeight": 0.2
          }
        }
      }
    }
  }
}
```text
**优势**：
- ✅ 精度更高
- ✅ 支持更多语言
- ✅ 有备用方案

**成本**：
- text-embedding-3-small：$0.02/百万 tokens
- text-embedding-3-large：$0.13/百万 tokens

### 11.3.6 实战案例3：本地部署（隐私优先）

**场景**：使用本地嵌入模型，保护隐私

```json
{
  "agents": {
    "defaults": {
      "memorySearch": {
        "sources": ["memory", "sessions"],
        "experimental": {
          "sessionMemory": true
        },
        "provider": "local",
        "model": "all-MiniLM-L6-v2",
        "query": {
          "hybrid": {
            "enabled": true,
            "vectorWeight": 0.6,
            "textWeight": 0.4
          }
        }
      }
    }
  }
}
```text
**优势**：
- ✅ 完全本地，保护隐私
- ✅ 无需 API Key
- ✅ 无使用限制

**劣势**：
- ❌ 需要本地计算资源
- ❌ 精度略低于云端模型

### 11.3.7 配置命令行方式

```bash
# 启用 Memory Search
openclaw config set agents.defaults.memorySearch.experimental.sessionMemory true

# 设置提供商
openclaw config set agents.defaults.memorySearch.provider "gemini"

# 设置 API Key（需要手动编辑 JSON）
# 或使用 jq 命令
cat ~/.openclaw/openclaw.json | jq '.agents.defaults.memorySearch.remote.apiKey = "你的API_Key"' > /tmp/openclaw-temp.json && mv /tmp/openclaw-temp.json ~/.openclaw/openclaw.json

# 重启 Gateway
openclaw gateway restart
```text
### 11.3.8 验证配置

```bash
# 查看当前配置
openclaw config get agents.defaults.memorySearch

# 测试记忆搜索
openclaw message send "记住：我喜欢喝咖啡"
openclaw message send "我喜欢喝什么？"

# 应该返回：根据我的记忆，你喜欢喝咖啡。
```text
### 11.3.9 使用场景

**场景1：个人助手**
```text
你：记住我的生日是 1990 年 1 月 1 日
OpenClaw：好的，已记住。

（几天后）
你：我的生日是什么时候？
OpenClaw：根据我的记忆，你的生日是 1990 年 1 月 1 日。
```text
**场景2：项目管理**
```text
你：项目 A 的截止日期是 2026 年 3 月 1 日
OpenClaw：已记录。

（一周后）
你：项目 A 什么时候截止？
OpenClaw：项目 A 的截止日期是 2026 年 3 月 1 日。
```text
**场景3：知识积累**
```text
你：DeepSeek API 的价格是 $0.001/千 tokens
OpenClaw：已记住。

（下次对话）
你：哪个模型最便宜？
OpenClaw：根据我的记忆，DeepSeek 最便宜，价格是 $0.001/千 tokens。
```text
### 11.3.10 最佳实践

**1. 选择合适的提供商**：
```text
免费用户：Gemini（免费且效果好）
付费用户：OpenAI（精度更高）
隐私优先：Local（完全本地）
```text
**2. 调整混合检索权重**：
```text
语义理解为主：vectorWeight: 0.7-0.8
关键词匹配为主：textWeight: 0.6-0.7
平衡模式：各 0.5
```text
**3. 定期清理记忆**：
```bash
# 清理过期记忆
openclaw memory clean --older-than 30d

# 查看记忆使用情况
openclaw memory stats
```text
**4. 备份重要记忆**：
```bash
# 导出记忆
openclaw memory export --output memory-backup.json

# 导入记忆
openclaw memory import memory-backup.json
```text
### 11.3.11 故障排查

**问题1：记忆搜索不工作**

**原因**：API Key 无效或未配置

**解决方法**：
```bash
# 检查配置
openclaw config get agents.defaults.memorySearch

# 测试 API Key
curl -H "Content-Type: application/json" \
  -d '{"contents":[{"parts":[{"text":"test"}]}]}' \
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent?key=你的API_Key"
```text
**问题2：搜索结果不准确**

**原因**：混合检索权重不合适

**解决方法**：
```json
// 调整权重
{
  "query": {
    "hybrid": {
      "vectorWeight": 0.8,  // 提高语义搜索权重
      "textWeight": 0.2
    }
  }
}
```text
**问题3：记忆占用空间过大**

**原因**：长期积累未清理

**解决方法**：
```bash
# 查看记忆大小
openclaw memory stats

# 清理旧记忆
openclaw memory clean --older-than 60d

# 压缩记忆数据库
openclaw memory compact
```text
---

## 11.4 成本优化方案

### 11.4.1 Token消耗分析

**查看消耗统计**：
```bash
# 查看今日消耗
openclaw stats today

# 输出示例：
今日Token消耗：
- Claude Sonnet：150K tokens ($0.75)
- Gemini Pro：50K tokens ($0.00)
- 总计：200K tokens ($0.75)

任务分布：
- 文件搜索：30%
- 日程管理：20%
- 知识管理：25%
- 其他：25%
```text
**消耗优化建议**：

⚠️ 高消耗任务：
- 文件搜索：每次10K tokens
- 建议：优化搜索范围

✅ 优化方案：
- 使用缓存
- 减少上下文
- 优化提示词
```text
### 11.4.2 缓存策略

**启用缓存**：
```bash
# 启用响应缓存
openclaw config set cache.enabled true

# 设置缓存时间（小时）
openclaw config set cache.ttl 24

# 设置缓存大小（MB）
openclaw config set cache.maxSize 1000
```text
**缓存效果**：
```
未启用缓存：
- 相同问题每次都调用API
- Token消耗：10K/次
- 成本：$0.05/次

启用缓存后：
- 相同问题直接返回缓存
- Token消耗：0
- 成本：$0
- 节省：100%
```text
### 11.4.3 模型降级方案

**降级策略**：
```
1. 简单任务用便宜模型
2. 复杂任务用贵模型
3. 失败后降级重试
```text
**配置示例**：
```javascript
{
  "fallback": [
    "claude-opus-4.6",    // 首选
    "claude-sonnet-4.5",  // 降级1
    "gemini-3-pro"        // 降级2
  ]
}
```text
### 11.4.4 成本控制实战

**案例1：降低50%成本**
```
原方案：
- 全部使用Claude Opus
- 日均消耗：$20

优化方案：
- 简单任务用Sonnet
- 复杂任务用Opus
- 启用缓存

优化后：
- 日均消耗：$10
- 节省：50%
```text
**案例2：免费额度最大化**
```
策略：
1. 优先使用Gemini（免费额度大）
2. 超额后切换到DeepSeek（便宜）
3. 重要任务用Claude

效果：
- 月成本：$5
- 节省：90%
```text
---

## 11.5 性能调优技巧

### 11.5.1 响应速度优化

**优化前**：
```
平均响应时间：5秒
用户体验：一般
```text
**优化方案**：
```
1. 启用缓存
2. 减少上下文
3. 使用流式输出
4. 并发处理
```text
**优化后**：
```
平均响应时间：2秒
用户体验：优秀
提升：60%
```text
### 11.5.2 并发处理优化

**配置并发数**：
```bash
# 设置最大并发数
openclaw config set concurrency.max 5

# 设置队列大小
openclaw config set concurrency.queueSize 100
```text
### 11.5.3 内存管理

**监控内存使用**：
```bash
# 查看内存使用
openclaw stats memory

# 输出示例：
内存使用情况：
- 当前：512MB
- 峰值：800MB
- 平均：600MB
```text
**优化建议**：
```
⚠️ 内存占用高：
- 清理缓存
- 减少并发
- 重启服务
```text
---

## 📝 本章小结

学习了OpenClaw的高级配置：
1. Antigravity Manager配置
2. 多模型切换策略
3. 成本优化方案
4. 性能调优技巧

掌握这些技巧可以：
- 降低50%以上成本
- 提升60%响应速度
- 提高系统稳定性

---

## 11.6 模型提供商配置详解

> 🤖 **多模型支持**：OpenClaw 支持 20+ 主流 AI 模型提供商，灵活配置满足不同需求。

### 11.6.0 快速配置：使用命令行向导（推荐新手）

> 💡 **最简单的方式**：使用 `openclaw onboard` 命令启动配置向导，交互式配置模型。

#### 启动配置向导

```bash
openclaw onboard
```text
执行后会启动命令行交互式配置向导。

#### 配置流程

**步骤1：选择初始化模式**

```text
◇  初始化模式
│  快速开始
```text
**步骤2：选择模型提供商**

```text
◆  模型/认证提供商
│  ○ OpenAI (Codex OAuth + API key)
│  ○ Anthropic
│  ○ MiniMax
│  ○ Moonshot AI
│  ○ Google
│  ○ OpenRouter
│  ○ Qwen
│  ○ Z.AI (GLM 4.7)
│  ○ Copilot
│  ○ Vercel AI Gateway
│  ○ OpenCode Zen
│  ○ Xiaomi
│  ○ Synthetic
│  ○ Venice AI
│  ○ Skip for now
```text
使用 **方向键** 选择，**空格键** 确认。

**步骤3：输入 API Key**

根据提示输入对应提供商的 API Key。

**步骤4：选择默认模型**

从可用模型列表中选择默认模型。

**步骤5：完成配置**

配置自动保存并重启 Gateway。

#### 命令行向导的优势

✅ **交互式操作**：逐步引导，不易出错
✅ **实时验证**：输入 API Key 后立即验证有效性
✅ **自动配置**：自动生成配置文件
✅ **一键保存**：自动保存并重启服务
✅ **错误提示**：配置错误时会有明确的提示信息

#### 验证配置

配置完成后，验证模型是否可用：

```bash
# 查看已配置的模型
openclaw models list

# 测试模型连接
openclaw message send "你好，测试一下"
```text
#### 修改配置

如果需要修改配置，再次运行：

```bash
openclaw onboard
```text
可以添加、删除或修改模型提供商。

---

### 11.6.1 支持的模型提供商

#### 国际模型

| 提供商 | 模型 | 特点 | 价格 |
|--------|------|------|------|
| **OpenAI** | GPT-4o, GPT-4o-mini | 功能全面、生态完善 | 高 |
| **Anthropic** | Claude 3.5 Sonnet, Claude 3 Opus | 推理能力强、安全性高 | 中高 |
| **Google** | Gemini 2.0 Flash, Gemini 1.5 Pro | 多模态能力强、免费额度大 | 中 |
| **xAI** | Grok 2 | 实时信息、幽默风格 | 中 |
| **Mistral** | Mistral Large, Mistral Small | 开源友好、性价比高 | 中 |
| **Cohere** | Command R+, Command R | 企业级、RAG 优化 | 中 |

#### 国产模型

| 提供商 | 模型 | 特点 | 价格 |
|--------|------|------|------|
| **DeepSeek** | DeepSeek-V3, DeepSeek-Chat | 性价比之王、编程能力强 | 极低 |
| **月之暗面** | Kimi k2.5 | 超长上下文（200万字） | 低 |
| **智谱AI** | GLM-4, GLM-4V | 多模态、中文优化 | 中 |
| **百川智能** | Baichuan-4 | 中文理解好 | 中 |
| **MiniMax** | abab6.5 | 语音合成、角色扮演 | 中 |
| **阿里云** | Qwen-Max, Qwen-Plus | 阿里生态、企业级 | 中 |
| **百度** | ERNIE 4.0 | 百度生态、知识增强 | 中 |

#### 本地模型

| 提供商 | 模型 | 特点 | 价格 |
|--------|------|------|------|
| **Ollama** | Llama 3.1, Qwen2.5 | 完全本地、隐私保护 | 免费 |
| **LM Studio** | 各种开源模型 | 图形界面、易用 | 免费 |

### 11.6.2 配置 OpenAI

```json
{
  "models": {
    "mode": "merge",
    "providers": {
      "openai": {
        "baseUrl": "https://api.openai.com/v1",
        "apiKey": "sk-your-api-key",
        "auth": "api-key",
        "api": "openai-chat",
        "models": [
          {
            "id": "gpt-4o",
            "name": "GPT-4o",
            "contextWindow": 128000,
            "maxTokens": 16384
          },
          {
            "id": "gpt-4o-mini",
            "name": "GPT-4o Mini",
            "contextWindow": 128000,
            "maxTokens": 16384
          }
        ]
      }
    }
  }
}
```text
### 11.6.3 配置 Anthropic (Claude)

```json
{
  "models": {
    "mode": "merge",
    "providers": {
      "anthropic": {
        "baseUrl": "https://api.anthropic.com",
        "apiKey": "sk-ant-your-api-key",
        "auth": "api-key",
        "api": "anthropic",
        "models": [
          {
            "id": "claude-3-5-sonnet-20241022",
            "name": "Claude 3.5 Sonnet",
            "contextWindow": 200000,
            "maxTokens": 8192
          },
          {
            "id": "claude-3-opus-20240229",
            "name": "Claude 3 Opus",
            "contextWindow": 200000,
            "maxTokens": 4096
          }
        ]
      }
    }
  }
}
```text
### 11.6.4 配置 Google Gemini

```json
{
  "models": {
    "mode": "merge",
    "providers": {
      "google": {
        "baseUrl": "https://generativelanguage.googleapis.com/v1beta",
        "apiKey": "your-google-api-key",
        "auth": "api-key",
        "api": "google-ai",
        "models": [
          {
            "id": "gemini-2.0-flash-exp",
            "name": "Gemini 2.0 Flash",
            "contextWindow": 1000000,
            "maxTokens": 8192
          },
          {
            "id": "gemini-1.5-pro",
            "name": "Gemini 1.5 Pro",
            "contextWindow": 2000000,
            "maxTokens": 8192
          }
        ]
      }
    }
  }
}
```text
### 11.6.5 配置 DeepSeek（推荐）

```json
{
  "models": {
    "mode": "merge",
    "providers": {
      "deepseek": {
        "baseUrl": "https://api.deepseek.com",
        "apiKey": "sk-your-api-key",
        "auth": "api-key",
        "api": "openai-chat",
        "models": [
          {
            "id": "deepseek-chat",
            "name": "DeepSeek Chat",
            "contextWindow": 64000,
            "maxTokens": 4096
          },
          {
            "id": "deepseek-coder",
            "name": "DeepSeek Coder",
            "contextWindow": 64000,
            "maxTokens": 4096
          }
        ]
      }
    }
  }
}
```text
### 11.6.6 配置 Kimi（月之暗面）

```json
{
  "models": {
    "mode": "merge",
    "providers": {
      "moonshot": {
        "baseUrl": "https://api.moonshot.cn/v1",
        "apiKey": "sk-your-api-key",
        "auth": "api-key",
        "api": "openai-chat",
        "models": [
          {
            "id": "moonshot-v1-8k",
            "name": "Kimi k2.5 8K",
            "contextWindow": 8000,
            "maxTokens": 4096
          },
          {
            "id": "moonshot-v1-32k",
            "name": "Kimi k2.5 32K",
            "contextWindow": 32000,
            "maxTokens": 4096
          },
          {
            "id": "moonshot-v1-128k",
            "name": "Kimi k2.5 128K",
            "contextWindow": 128000,
            "maxTokens": 4096
          }
        ]
      }
    }
  }
}
```text
### 11.6.7 配置 Ollama（本地模型）

```json
{
  "models": {
    "mode": "merge",
    "providers": {
      "ollama": {
        "baseUrl": "http://localhost:11434",
        "auth": "none",
        "api": "ollama",
        "models": [
          {
            "id": "llama3.1:8b",
            "name": "Llama 3.1 8B",
            "contextWindow": 128000,
            "maxTokens": 4096
          },
          {
            "id": "qwen2.5:7b",
            "name": "Qwen 2.5 7B",
            "contextWindow": 32000,
            "maxTokens": 4096
          }
        ]
      }
    }
  }
}
```text
### 11.6.8 多提供商配置示例

```json
{
  "models": {
    "mode": "merge",
    "providers": {
      "deepseek": {
        "baseUrl": "https://api.deepseek.com",
        "apiKey": "sk-deepseek-key",
        "auth": "api-key",
        "api": "openai-chat",
        "models": [
          {
            "id": "deepseek-chat",
            "name": "DeepSeek Chat",
            "contextWindow": 64000,
            "maxTokens": 4096
          }
        ]
      },
      "anthropic": {
        "baseUrl": "https://api.anthropic.com",
        "apiKey": "sk-ant-key",
        "auth": "api-key",
        "api": "anthropic",
        "models": [
          {
            "id": "claude-3-5-sonnet-20241022",
            "name": "Claude 3.5 Sonnet",
            "contextWindow": 200000,
            "maxTokens": 8192
          }
        ]
      },
      "ollama": {
        "baseUrl": "http://localhost:11434",
        "auth": "none",
        "api": "ollama",
        "models": [
          {
            "id": "llama3.1:8b",
            "name": "Llama 3.1 8B",
            "contextWindow": 128000,
            "maxTokens": 4096
          }
        ]
      }
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "deepseek/deepseek-chat",
        "fallback": [
          "anthropic/claude-3-5-sonnet-20241022",
          "ollama/llama3.1:8b"
        ]
      }
    }
  }
}
```text
### 11.6.9 模型选择策略

**按任务类型选择**：

```javascript
// 编程任务
"deepseek/deepseek-coder"

// 长文档处理
"moonshot/moonshot-v1-128k"

// 复杂推理
"anthropic/claude-3-opus-20240229"

// 日常对话
"deepseek/deepseek-chat"

// 多模态（图片）
"google/gemini-2.0-flash-exp"

// 本地隐私
"ollama/llama3.1:8b"
```text
**按成本选择**：

```
极低成本：DeepSeek ($0.001/千tokens)
低成本：Kimi, GLM-4 ($0.01/千tokens)
中等成本：Gemini, Mistral ($0.05/千tokens)
高成本：Claude, GPT-4 ($0.15/千tokens)
免费：Ollama（本地）
```text
---

## 11.7 工具系统详解

> 🔧 **扩展能力**：OpenClaw 的工具系统让 AI 能够执行各种操作，从文件管理到 API 调用。

### 11.7.1 内置工具列表

#### 文件系统工具

| 工具 | 功能 | 示例 |
|------|------|------|
| `read_file` | 读取文件内容 | 读取配置文件 |
| `write_file` | 写入文件 | 保存笔记 |
| `list_directory` | 列出目录 | 查看文件列表 |
| `search_files` | 搜索文件 | 找到所有 PDF |
| `move_file` | 移动文件 | 整理文件 |
| `delete_file` | 删除文件 | 清理临时文件 |

#### Shell 工具

| 工具 | 功能 | 示例 |
|------|------|------|
| `execute_command` | 执行命令 | 运行脚本 |
| `run_script` | 运行脚本 | 批处理任务 |

#### 网络工具

| 工具 | 功能 | 示例 |
|------|------|------|
| `web_search` | 网页搜索 | 搜索最新信息 |
| `fetch_url` | 获取网页 | 下载内容 |
| `api_call` | API 调用 | 调用第三方服务 |

#### 数据处理工具

| 工具 | 功能 | 示例 |
|------|------|------|
| `parse_json` | 解析 JSON | 处理 API 响应 |
| `parse_csv` | 解析 CSV | 处理表格数据 |
| `extract_text` | 提取文本 | 从 PDF 提取 |

### 11.7.2 启用和禁用工具

**查看可用工具**：
```bash
openclaw tools list
```text
**启用工具**：
```bash
openclaw tools enable read_file write_file
```text
**禁用工具**：
```bash
openclaw tools disable execute_command
```text
**配置文件方式**：
```json
{
  "tools": {
    "enabled": [
      "read_file",
      "write_file",
      "list_directory",
      "web_search"
    ],
    "disabled": [
      "execute_command",
      "delete_file"
    ]
  }
}
```text
### 11.7.3 工具权限控制

**设置工具权限**：
```json
{
  "tools": {
    "permissions": {
      "read_file": {
        "allowedPaths": [
          "~/Documents",
          "~/Downloads"
        ],
        "deniedPaths": [
          "~/.ssh",
          "~/.openclaw"
        ]
      },
      "execute_command": {
        "allowedCommands": [
          "ls",
          "cat",
          "grep"
        ],
        "deniedCommands": [
          "rm",
          "sudo"
        ]
      }
    }
  }
}
```text
### 11.7.4 自定义工具开发

**创建自定义工具**：

```javascript
// ~/.openclaw/tools/my-tool.js
export default {
  name: "my_custom_tool",
  description: "我的自定义工具",
  parameters: {
    type: "object",
    properties: {
      input: {
        type: "string",
        description: "输入参数"
      }
    },
    required: ["input"]
  },
  async execute({ input }) {
    // 工具逻辑
    return {
      success: true,
      result: `处理结果: ${input}`
    };
  }
};
```text
**注册工具**：
```bash
openclaw tools register ~/.openclaw/tools/my-tool.js
```text
### 11.7.5 工具使用示例

**文件搜索**：
```
你：帮我找到所有包含"发票"的 PDF 文件

OpenClaw 使用工具：
1. search_files(pattern="*.pdf", content="发票")
2. 返回结果：找到 3 个文件
   - 发票_2024_01.pdf
   - 报销发票.pdf
   - 采购发票_Q1.pdf
```text
**网页搜索**：
```
你：Claude 3.5 Sonnet 最新价格是多少？

OpenClaw 使用工具：
1. web_search(query="Claude 3.5 Sonnet pricing")
2. fetch_url(url="https://www.anthropic.com/pricing")
3. 返回结果：
   - 输入：$3/百万 tokens
   - 输出：$15/百万 tokens
```text
**数据处理**：
```
你：分析这个 CSV 文件的销售数据

OpenClaw 使用工具：
1. read_file(path="sales.csv")
2. parse_csv(content=...)
3. 分析数据并生成报告
```text
### 11.7.6 工具链（Tool Chaining）

OpenClaw 可以自动组合多个工具完成复杂任务：

```
任务：下载网页并保存为 Markdown

工具链：
1. fetch_url(url) → 获取网页内容
2. extract_text(html) → 提取文本
3. convert_to_markdown(text) → 转换格式
4. write_file(path, content) → 保存文件
```text
### 11.7.7 工具安全最佳实践

**1. 最小权限原则**：
```json
{
  "tools": {
    "enabled": [
      "read_file",  // 只启用必要的工具
      "web_search"
    ]
  }
}
```text
**2. 路径限制**：
```json
{
  "tools": {
    "permissions": {
      "read_file": {
        "allowedPaths": ["~/Documents"]  // 限制访问范围
      }
    }
  }
}
```text
**3. 命令白名单**：
```json
{
  "tools": {
    "permissions": {
      "execute_command": {
        "allowedCommands": ["ls", "cat"]  // 只允许安全命令
      }
    }
  }
}
```text
---

## 11.8 CLI 命令完整参考

> 📟 **命令行工具**：OpenClaw 提供强大的 CLI 工具，方便管理和操作。

### 11.8.1 核心命令

#### 版本和帮助

```bash
# 查看版本
openclaw --version
openclaw -v

# 查看帮助
openclaw --help
openclaw -h

# 查看子命令帮助
openclaw gateway --help
```text
#### 初始化和配置

```bash
# 运行配置向导
openclaw onboard

# 快速开始向导
openclaw setup

# 查看配置
openclaw config list

# 获取配置项
openclaw config get models.providers

# 设置配置项
openclaw config set gateway.port 18790

# 删除配置项
openclaw config delete models.providers.test
```text
### 11.8.2 Gateway 管理

```bash
# 安装/启动 Gateway
openclaw gateway install

# 查看状态
openclaw gateway status

# 停止 Gateway
openclaw gateway stop

# 重启 Gateway
openclaw gateway restart

# 查看日志
openclaw logs
openclaw logs --follow
openclaw logs --tail 100

# 清理日志
openclaw logs clear
```text
### 11.8.3 渠道管理

```bash
# 列出所有渠道
openclaw channels list

# 查看渠道状态
openclaw channels status

# 添加渠道
openclaw channels add

# 删除渠道
openclaw channels remove feishu

# 测试渠道
openclaw channels test feishu
```text
### 11.8.4 配对管理

```bash
# 列出配对请求
openclaw pairing list
openclaw pairing list feishu

# 批准配对
openclaw pairing approve feishu <CODE>

# 拒绝配对
openclaw pairing reject feishu <CODE>

# 清理过期配对
openclaw pairing cleanup
```text
### 11.8.5 插件管理

```bash
# 列出已安装插件
openclaw plugins list

# 搜索插件
openclaw plugins search feishu

# 安装插件
openclaw plugins install @openclaw/feishu

# 卸载插件
openclaw plugins uninstall @openclaw/feishu

# 更新插件
openclaw plugins update @openclaw/feishu

# 更新所有插件
openclaw plugins update --all
```text
### 11.8.6 工具管理

```bash
# 列出所有工具
openclaw tools list

# 启用工具
openclaw tools enable read_file write_file

# 禁用工具
openclaw tools disable execute_command

# 注册自定义工具
openclaw tools register ~/my-tool.js

# 测试工具
openclaw tools test read_file
```text
### 11.8.7 Agent 管理

```bash
# 列出 Agents
openclaw agents list

# 创建 Agent
openclaw agents create my-agent

# 删除 Agent
openclaw agents delete my-agent

# 切换 Agent
openclaw agents switch my-agent

# 查看 Agent 配置
openclaw agents config my-agent
```text
### 11.8.8 会话管理

```bash
# 列出会话
openclaw sessions list

# 查看会话详情
openclaw sessions show <session-id>

# 删除会话
openclaw sessions delete <session-id>

# 清理所有会话
openclaw sessions clear

# 导出会话
openclaw sessions export <session-id> --output session.json

# 导入会话
openclaw sessions import session.json
```text
### 11.8.9 统计和监控

```bash
# 查看统计信息
openclaw stats

# 查看今日统计
openclaw stats today

# 查看本周统计
openclaw stats week

# 查看 API 消耗
openclaw stats api

# 查看内存使用
openclaw stats memory

# 查看性能指标
openclaw stats performance
```text
### 11.8.10 测试和诊断

```bash
# 测试 API 连接
openclaw test api

# 测试渠道
openclaw test channel feishu

# 测试工具
openclaw test tool read_file

# 运行诊断
openclaw diagnose

# 检查配置
openclaw validate config

# 检查健康状态
openclaw health check
```text
### 11.8.11 数据管理

```bash
# 备份数据
openclaw backup create

# 列出备份
openclaw backup list

# 恢复备份
openclaw backup restore <backup-id>

# 清理缓存
openclaw cache clear

# 清理临时文件
openclaw cleanup temp

# 导出数据
openclaw export --output data.json

# 导入数据
openclaw import data.json
```text
### 11.8.12 更新和维护

```bash
# 检查更新
openclaw update check

# 更新到最新版本
openclaw update

# 更新到指定版本
openclaw update --version 2026.3.2

# 回滚版本
openclaw rollback

# 卸载
openclaw uninstall
```text
### 11.8.13 开发和调试

```bash
# 开发模式启动
openclaw dev

# 调试模式
openclaw --debug

# 详细日志
openclaw --verbose

# 运行测试
openclaw test

# 构建项目
openclaw build

# 清理构建
openclaw clean
```text
### 11.8.14 常用命令组合

**快速重启**：
```bash
openclaw gateway stop && openclaw gateway install
```text
**查看实时日志**：
```bash
openclaw logs --follow | grep ERROR
```text
**备份并更新**：
```bash
openclaw backup create && openclaw update
```text
**清理并重启**：
```bash
openclaw cache clear && openclaw gateway restart
```text
**完整诊断**：
```bash
openclaw diagnose && openclaw health check && openclaw test api
```text
### 11.8.15 环境变量

```bash
# 设置日志级别
export OPENCLAW_LOG_LEVEL=debug

# 设置配置目录
export OPENCLAW_HOME=~/.openclaw

# 设置 Gateway 端口
export OPENCLAW_PORT=18789

# 设置 API Key
export DEEPSEEK_API_KEY=sk-xxx
export MOONSHOT_API_KEY=sk-xxx
```text
### 11.8.16 配置文件位置

```bash
# 主配置文件
~/.openclaw/openclaw.json

# 日志文件
~/.openclaw/logs/gateway.log

# 缓存目录
~/.openclaw/cache/

# 数据目录
~/.openclaw/data/

# 插件目录
~/.openclaw/plugins/

# 工具目录
~/.openclaw/tools/
```

---

## 📝 本章小结

学习了OpenClaw的高级配置：

### 核心内容
1. **Antigravity Manager配置** - API 统一管理
2. **多模型切换策略** - 场景化选择 + 模型容灾机制
3. **记忆搜索配置** - 智能上下文感知
4. **成本优化方案** - 降低 50%+ 成本
5. **性能调优技巧** - 提升 60% 响应速度
6. **模型提供商配置** - 20+ 主流模型支持
7. **工具系统详解** - 扩展 AI 能力
8. **CLI 命令完整参考** - 100+ 命令详解

### 实战技能
- ✅ 配置多个 AI 模型提供商
- ✅ 配置模型容灾机制（primary + fallbacks）
- ✅ 配置多认证 Profile 实现账号轮换
- ✅ 配置记忆搜索系统
- ✅ 根据任务选择最优模型
- ✅ 使用工具系统扩展功能
- ✅ 掌握 CLI 命令高效管理
- ✅ 优化成本和性能

### 推荐配置
- **日常使用**：DeepSeek（性价比最高）
- **长文档**：Kimi（200万字上下文）
- **复杂任务**：Claude 3.5 Sonnet（推理能力强）
- **本地隐私**：Ollama（完全本地）
- **容灾方案**：DeepSeek → Claude Sonnet → Claude Opus
- **记忆搜索**：Gemini Embedding（免费且效果好）

---

**下一章预告**：第12章将进入实战案例部分，学习个人效率提升的完整工作流。


---

## 11.9 Talk 模式配置（2026.3.8+）

Talk 模式允许语音输入和输出。新增 `talk.silenceTimeoutMs` 配置项，用于设置自动发送前的静默等待时间（毫秒）。

```json
{
  "talk": {
    "silenceTimeoutMs": 2000  // 默认2秒无声后自动发送
  }
}
```

**使用场景**：
- 语音对话时，避免频繁中断
- 调整响应灵敏度（值越小越灵敏）
- 适配不同网络延迟环境

**推荐值**：
- 快速响应：1000-1500ms
- 平衡模式：2000-2500ms（默认）
- 宽松模式：3000-4000ms


---

##11.10 Brave Web Search：LLM Context 模式（2026.3.8+，可选）

2026.3.8 新增可选配置 `tools.web.search.brave.mode: "llm-context"`，用于让 `web_search` 调用 Brave 的 *LLM Context*端点返回更适合大模型使用的 grounding snippets（带来源元数据）。

```yaml
tools:
 web:
 search:
 brave:
 mode: "llm-context"
```

>说明：该模式为 **opt-in**，不配置则保持原行为。
