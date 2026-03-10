# OpenClaw 配置文件结构完整指南

## 📁 配置文件目录结构

### 全局配置目录

```text
~/.openclaw/                          # 全局配置根目录
├── openclaw.json                     # 全局配置（所有 Agent 共享）
├── credentials/                      # 认证凭据目录
│   └── oauth.json                   # OAuth 凭据
├── agents/                           # Agent 配置目录
│   ├── main-assistant/               # 主助理 Agent
│   │   ├── openclaw.json            # Agent 专属配置
│   │   ├── agent/
│   │   │   └── auth-profiles.json   # 认证配置
│   │   └── sessions/                # 会话记录
│   │       └── *.jsonl
│   └── tech-dev/                     # 技术开发 Agent
│       ├── openclaw.json
│       └── agent/
│           └── auth-profiles.json
├── skills/                           # 用户级 Skills
│   └── custom-skill/
│       └── SKILL.md
└── logs/                             # 日志文件
    └── openclaw.log
```

### 旧版配置目录（已废弃）

```text
~/.openclaw-main-assistant/           # 旧版配置目录
└── openclaw.json                     # 不再使用，已迁移到新结构
```

⚠️ **注意**: 如果你的系统中还有 `~/.openclaw-*` 目录，建议运行 `openclaw doctor` 进行迁移。

---

## 📝 配置文件详解

### 1. 全局配置文件

**路径**: `~/.openclaw/openclaw.json`

**用途**: 所有 Agent 共享的全局配置

**优先级**: 低于 Agent 专属配置

**示例内容**:
```json
{
  "models": {
    "default": "anthropic/claude-sonnet-4-5",
    "providers": {
      "anthropic": {
        "apiKey": "sk-ant-xxx"
      }
    }
  },
  "gateway": {
    "mode": "local",
    "port": 18789
  }
}
```text
**查看命令**:
```bash
# 查看全局配置
openclaw config get

# 查看特定配置项
openclaw config get models.default

# 编辑配置文件
nano ~/.openclaw/openclaw.json
```text
---

### 2. Agent 专属配置

**路径**: `~/.openclaw/agents/<agentId>/openclaw.json`

**用途**: 特定 Agent 的专属配置

**优先级**: 高于全局配置

**示例内容**:
```json
{
  "models": {
    "default": "openai/gpt-4",
    "providers": {
      "openai": {
        "apiKey": "sk-xxx"
      }
    }
  },
  "persona": {
    "name": "技术开发助手",
    "role": "专注于代码开发和技术问题"
  }
}
```text
**查看命令**:
```bash
# 查看 Agent 配置
openclaw config get --agent tech-dev

# 设置 Agent 配置
openclaw config set models.default "openai/gpt-4" --agent tech-dev

# 编辑配置文件
nano ~/.openclaw/agents/tech-dev/openclaw.json
```text
---

### 3. 认证配置文件

**路径**: `~/.openclaw/agents/<agentId>/agent/auth-profiles.json`

**用途**: 存储 API Key 等认证信息

**优先级**: 最高（覆盖其他配置）

**示例内容**:
```json
{
  "profiles": [
    {
      "provider": "anthropic",
      "apiKey": "sk-ant-xxx",
      "createdAt": "2026-02-14T10:00:00Z"
    },
    {
      "provider": "openai",
      "apiKey": "sk-xxx",
      "createdAt": "2026-02-14T10:00:00Z"
    }
  ]
}
```text
**管理命令**:
```bash
# 添加认证（交互式）
openclaw models auth add

# 查看认证配置
cat ~/.openclaw/agents/main-assistant/agent/auth-profiles.json

# 删除认证
rm ~/.openclaw/agents/main-assistant/agent/auth-profiles.json
```text
---

### 4. OAuth 凭据文件

**路径**: `~/.openclaw/credentials/oauth.json`

**用途**: 存储 OAuth 登录凭据（旧版）

**优先级**: 低（建议使用 auth-profiles.json）

**示例内容**:
```json
{
  "google": {
    "accessToken": "ya29.xxx",
    "refreshToken": "1//xxx",
    "expiresAt": "2026-02-14T11:00:00Z"
  }
}
```text
**说明**: 这是旧版的认证方式，新版本建议使用 `auth-profiles.json`。

---

## 🔄 配置优先级

### 优先级顺序（从高到低）

```
1. 环境变量（最高优先级）
   ↓
2. Agent 专属配置 (~/.openclaw/agents/<agentId>/openclaw.json)
   ↓
3. 全局配置 (~/.openclaw/openclaw.json)
   ↓
4. 默认值（最低优先级）
```text
### 示例说明

假设你有以下配置：

**环境变量**:
```bash
export ANTHROPIC_API_KEY="sk-ant-env"
```text
**Agent 配置** (`~/.openclaw/agents/tech-dev/openclaw.json`):
```json
{
  "models": {
    "providers": {
      "anthropic": {
        "apiKey": "sk-ant-agent"
      }
    }
  }
}
```text
**全局配置** (`~/.openclaw/openclaw.json`):
```json
{
  "models": {
    "providers": {
      "anthropic": {
        "apiKey": "sk-ant-global"
      }
    }
  }
}
```text
**实际使用的 API Key**: `sk-ant-env`（环境变量优先级最高）

---

## 🔍 配置查看命令

### 查看配置文件位置

```bash
# 查看全局配置文件路径
openclaw config path

# 查看 Agent 配置文件路径
openclaw config path --agent tech-dev
```text
### 查看配置内容

```bash
# 查看所有配置
openclaw config get

# 查看特定配置项
openclaw config get models.providers.anthropic.apiKey

# 查看 Agent 配置
openclaw config get --agent tech-dev

# 以 JSON 格式输出
openclaw config get --json
```text
### 查看生效的配置

```bash
# 查看当前使用的 model
openclaw models list

# 查看 Gateway 状态
openclaw gateway status

# 查看所有 Agent
openclaw agents list
```text
---

## ⚙️ 配置修改命令

### 设置配置

```bash
# 设置全局配置
openclaw config set models.default "anthropic/claude-sonnet-4-5"

# 设置 Agent 配置
openclaw config set models.default "openai/gpt-4" --agent tech-dev

# 设置 API Key
openclaw config set models.providers.anthropic.apiKey "sk-ant-xxx"
```text
### 删除配置

```bash
# 删除配置项
openclaw config unset models.providers.anthropic.apiKey

# 删除 Agent 配置
openclaw config unset models.default --agent tech-dev
```text
### 重置配置

```bash
# 重置全局配置
openclaw config reset

# 重置 Agent 配置
openclaw config reset --agent tech-dev
```text
---

## 🛠️ 常见配置场景

### 场景1：单个 Agent，使用全局配置

**配置方式**:
```bash
# 在全局配置中设置 API Key
openclaw config set models.providers.anthropic.apiKey "sk-ant-xxx"
```text
**优点**:
- ✅ 配置一次，全局生效
- ✅ 管理简单

**缺点**:
- ❌ 所有 Agent 使用相同配置

---

### 场景2：多个 Agent，使用不同配置

**配置方式**:
```bash
# 为每个 Agent 单独配置
openclaw config set models.providers.anthropic.apiKey "sk-ant-xxx" --agent tech-dev
openclaw config set models.providers.openai.apiKey "sk-yyy" --agent content-writer
```text
**优点**:
- ✅ 每个 Agent 独立配置
- ✅ 灵活性高

**缺点**:
- ❌ 管理成本较高

---

### 场景3：使用环境变量（临时测试）

**配置方式**:
```bash
# 临时设置（当前会话）
export ANTHROPIC_API_KEY="sk-ant-xxx"

# 永久设置（添加到 ~/.zshrc）
echo 'export ANTHROPIC_API_KEY="sk-ant-xxx"' >> ~/.zshrc
source ~/.zshrc
```text
**优点**:
- ✅ 最高优先级
- ✅ 适合 Docker 和 CI/CD
- ✅ 不写入配置文件

**缺点**:
- ❌ 重启后失效（除非写入 shell 配置）

---

## 🔧 配置故障排查

### 问题1：配置后不生效

**排查步骤**:

1. **检查配置优先级**
   ```bash
   # 检查环境变量
   echo $ANTHROPIC_API_KEY
   
   # 查看生效的配置
   openclaw config get models.providers.anthropic.apiKey
   ```

2. **重启 Gateway**
   ```bash
   openclaw gateway restart
   ```

3. **查看日志**
   ```bash
   openclaw logs --tail 50
   ```

---

### 问题2：找不到配置文件

**排查步骤**:

1. **检查配置文件是否存在**
   ```bash
   ls -la ~/.openclaw/openclaw.json
   ls -la ~/.openclaw/agents/*/openclaw.json
   ```

2. **运行 doctor 命令**
   ```bash
   openclaw doctor
   ```

3. **手动创建配置文件**
   ```bash
   mkdir -p ~/.openclaw
   echo '{}' > ~/.openclaw/openclaw.json
   ```

---

### 问题3：多个 Agent 配置混乱

**解决方案**:

1. **查看所有 Agent**
   ```bash
   openclaw agents list
   ```

2. **查看每个 Agent 的配置**
   ```bash
   openclaw config get --agent main-assistant
   openclaw config get --agent tech-dev
   ```

3. **统一管理**
   - 使用全局配置 + Agent 覆盖
   - 或者每个 Agent 完全独立配置

---

## 📋 配置文件模板

### 最小配置模板

```json
{
  "models": {
    "default": "anthropic/claude-sonnet-4-5",
    "providers": {
      "anthropic": {
        "apiKey": "sk-ant-xxx"
      }
    }
  }
}
```text
### 完整配置模板

```json
{
  "models": {
    "default": "anthropic/claude-sonnet-4-5",
    "providers": {
      "anthropic": {
        "apiKey": "sk-ant-xxx",
        "baseUrl": "https://api.anthropic.com"
      },
      "openai": {
        "apiKey": "sk-xxx",
        "baseUrl": "https://api.openai.com"
      }
    }
  },
  "gateway": {
    "mode": "local",
    "port": 18789,
    "bind": "loopback"
  },
  "channels": {
    "telegram": {
      "enabled": true,
      "token": "xxx"
    },
    "discord": {
      "enabled": true,
      "token": "xxx"
    }
  },
  "skills": {
    "autoLoad": true,
    "paths": [
      "~/.openclaw/skills",
      "./skills"
    ]
  }
}
```

---

## 🔗 相关文档

- [第2章：安装配置](01-basics/02-installation.md) - 基础配置教程
- [第11章：高级配置](03-advanced/11-advanced-configuration.md) - 高级配置技巧
- [配置文件模板](../appendix/H-config-templates.md) - 更多配置模板

---

## 💡 最佳实践

### 推荐的配置方式

1. **新手用户**:
   - 使用全局配置
   - 通过 `openclaw config set` 命令设置
   - 避免直接编辑 JSON 文件

2. **进阶用户**:
   - 使用 Agent 专属配置
   - 合理利用配置优先级
   - 定期备份配置文件

3. **企业用户**:
   - 使用环境变量管理敏感信息
   - 版本控制配置模板
   - 自动化配置部署

### 配置管理建议

1. **定期备份**:
   ```bash
   cp -r ~/.openclaw ~/.openclaw.backup-$(date +%Y%m%d)
   ```

2. **版本控制**:
   - 将配置模板加入 Git
   - 使用 `.gitignore` 排除敏感信息

3. **文档记录**:
   - 记录每个配置项的用途
   - 记录修改历史和原因

---

**最后更新**: 2026-02-14  
**适用版本**: OpenClaw 2026.3.2+
