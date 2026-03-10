# OpenClaw API Key 配置完整指南

## 📋 配置方式概览

OpenClaw 支持多种 API Key 配置方式，每种方式都有其适用场景和优先级。

### 配置方式对比

| 方式 | 优先级 | 适用场景 | 持久化 | 难度 |
|------|--------|----------|--------|------|
| 环境变量 | ⭐⭐⭐⭐⭐ 最高 | 临时测试、Docker、CI/CD | ❌ | ⭐ 简单 |
| Agent 专属配置 | ⭐⭐⭐⭐ 高 | 多 Agent 不同 Key | ✅ | ⭐⭐ 中等 |
| 全局配置 | ⭐⭐⭐ 中 | 所有 Agent 共享 | ✅ | ⭐ 简单 |
| 配置向导 | ⭐⭐ 低 | 首次安装 | ✅ | ⭐ 简单 |

---

## 🔄 配置优先级

### 优先级顺序（从高到低）

```text
1. 环境变量（最高优先级）
   ↓
2. Agent 专属配置
   ↓
3. 全局配置
   ↓
4. 配置向导
   ↓
5. 默认值（最低优先级）
```

### 优先级示例

假设你同时配置了：

```bash
# 1. 环境变量
export ANTHROPIC_API_KEY="sk-ant-env"

# 2. Agent 配置
openclaw config set models.providers.anthropic.apiKey "sk-ant-agent" --agent tech-dev

# 3. 全局配置
openclaw config set models.providers.anthropic.apiKey "sk-ant-global"
```text
**实际使用**: `sk-ant-env`（环境变量优先级最高）

---

## 🎯 方式一：环境变量（推荐：临时测试）

### 适用场景

- ✅ 临时测试不同的 API Key
- ✅ Docker 容器部署
- ✅ CI/CD 自动化
- ✅ 不想写入配置文件
- ✅ 需要最高优先级

### 配置方法

#### 临时设置（当前会话）

```bash
# Anthropic
export ANTHROPIC_API_KEY="sk-ant-xxx"

# OpenAI
export OPENAI_API_KEY="sk-xxx"

# Google
export GOOGLE_API_KEY="xxx"

# DeepSeek
export DEEPSEEK_API_KEY="sk-xxx"

# Moonshot
export MOONSHOT_API_KEY="sk-xxx"
```text
#### 永久设置（写入 Shell 配置）

**macOS/Linux (zsh)**:
```bash
# 添加到 ~/.zshrc
echo 'export ANTHROPIC_API_KEY="sk-ant-xxx"' >> ~/.zshrc
source ~/.zshrc
```text
**macOS/Linux (bash)**:
```bash
# 添加到 ~/.bashrc
echo 'export ANTHROPIC_API_KEY="sk-ant-xxx"' >> ~/.bashrc
source ~/.bashrc
```text
**Windows (PowerShell)**:
```powershell
# 临时设置
$env:ANTHROPIC_API_KEY="sk-ant-xxx"

# 永久设置（用户级）
[System.Environment]::SetEnvironmentVariable("ANTHROPIC_API_KEY", "sk-ant-xxx", "User")
```text
### 验证配置

```bash
# 查看环境变量
echo $ANTHROPIC_API_KEY

# 测试连接
openclaw models list
```text
### 优点和缺点

**优点**:
- ✅ 最高优先级，覆盖所有其他配置
- ✅ 灵活，易于切换
- ✅ 适合 Docker 和 CI/CD
- ✅ 不写入配置文件，更安全

**缺点**:
- ❌ 临时设置重启后失效
- ❌ 不适合多 Agent 场景
- ❌ 需要在每个终端会话中设置

---

## 🎯 方式二：Agent 专属配置（推荐：多 Agent）

### 适用场景

- ✅ 多个 Agent 使用不同的 API Key
- ✅ 需要隔离配置
- ✅ 长期使用
- ✅ 需要持久化

### 配置方法

#### 使用命令行

```bash
# 为特定 Agent 配置
openclaw config set models.providers.anthropic.apiKey "sk-ant-xxx" --agent tech-dev

# 为另一个 Agent 配置不同的 Key
openclaw config set models.providers.openai.apiKey "sk-yyy" --agent content-writer

# 验证配置
openclaw config get models.providers.anthropic.apiKey --agent tech-dev
```text
#### 直接编辑配置文件

**配置文件位置**: `~/.openclaw/agents/<agentId>/openclaw.json`

```bash
# 编辑配置文件
nano ~/.openclaw/agents/tech-dev/openclaw.json
```text
**配置内容**:
```json
{
  "models": {
    "default": "anthropic/claude-sonnet-4-5",
    "providers": {
      "anthropic": {
        "apiKey": "sk-ant-xxx",
        "baseUrl": "https://api.anthropic.com"
      }
    }
  }
}
```text
### 验证配置

```bash
# 查看 Agent 配置
openclaw config get --agent tech-dev

# 测试连接
openclaw agent --message --agent tech-dev "Hello"
```text
### 优点和缺点

**优点**:
- ✅ 每个 Agent 独立配置
- ✅ 配置隔离，互不影响
- ✅ 持久化存储
- ✅ 适合多 Agent 场景

**缺点**:
- ❌ 需要为每个 Agent 单独配置
- ❌ 管理成本较高
- ❌ 被环境变量覆盖

---

## 🎯 方式三：全局配置（推荐：单 Agent）

### 适用场景

- ✅ 所有 Agent 共享同一个 API Key
- ✅ 单 Agent 使用
- ✅ 长期使用
- ✅ 需要持久化

### 配置方法

#### 方法1：交互式命令（推荐新手）

```bash
# 运行交互式命令
openclaw models auth add

# 按提示操作：
# 1. 选择 provider（如 anthropic）
# 2. 输入 API Key
# 3. 确认保存
```text
#### 方法2：配置命令

```bash
# 直接设置
openclaw config set models.providers.anthropic.apiKey "sk-ant-xxx"

# 设置默认 model
openclaw config set models.default "anthropic/claude-sonnet-4-5"

# 验证配置
openclaw config get models.providers.anthropic.apiKey
```text
#### 方法3：直接编辑配置文件

**配置文件位置**: `~/.openclaw/openclaw.json`

```bash
# 编辑配置文件
nano ~/.openclaw/openclaw.json
```text
**配置内容**:
```json
{
  "models": {
    "default": "anthropic/claude-sonnet-4-5",
    "providers": {
      "anthropic": {
        "apiKey": "sk-ant-xxx"
      },
      "openai": {
        "apiKey": "sk-yyy"
      }
    }
  }
}
```text
### 验证配置

```bash
# 查看全局配置
openclaw config get

# 测试连接
openclaw models list
```text
### 优点和缺点

**优点**:
- ✅ 配置一次，全局生效
- ✅ 持久化存储
- ✅ 适合大多数场景
- ✅ 管理简单

**缺点**:
- ❌ 无法区分不同 Agent
- ❌ 被环境变量和 Agent 配置覆盖

---

## 🎯 方式四：配置向导（推荐：首次安装）

### 适用场景

- ✅ 首次安装 OpenClaw
- ✅ 不熟悉命令行
- ✅ 需要交互式引导

### 配置方法

```bash
# 运行配置向导
openclaw onboard

# 按提示操作：
# 1. 选择 provider
# 2. 输入 API Key
# 3. 选择默认 model
# 4. 完成配置
```text
### 验证配置

```bash
# 查看配置
openclaw config get

# 测试连接
openclaw channels status
```text
### 优点和缺点

**优点**:
- ✅ 交互式，不易出错
- ✅ 适合新手
- ✅ 一次性完成所有配置

**缺点**:
- ❌ 只能配置一次
- ❌ 修改配置需要其他方式
- ❌ 优先级最低

---

## 🔍 配置验证

### 检查配置是否生效

```bash
# 1. 查看配置
openclaw config get models.providers.anthropic.apiKey

# 2. 查看环境变量
echo $ANTHROPIC_API_KEY

# 3. 测试 API 连接
openclaw models list

# 4. 查看 Gateway 状态
openclaw channels status

# 5. 发送测试消息
openclaw agent --message "Hello, test API Key"
```text
### 查看生效的配置

```bash
# 查看当前使用的 model
openclaw config get models.default

# 查看所有 provider 配置
openclaw config get models.providers

# 以 JSON 格式输出
openclaw config get --json
```text
---

## 🔧 配置故障排查

### 问题1：配置后不生效

**症状**: 设置了 API Key，但仍然提示未配置

**排查步骤**:

1. **检查配置优先级**
   ```bash
   # 检查环境变量（最高优先级）
   echo $ANTHROPIC_API_KEY
   
   # 检查 Agent 配置
   openclaw config get models.providers.anthropic.apiKey --agent tech-dev
   
   # 检查全局配置
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

4. **验证 API Key 格式**
   ```bash
   # Anthropic: sk-ant-xxx
   # OpenAI: sk-xxx
   # Google: xxx
   ```

---

### 问题2：多个 Agent 使用不同的 API Key

**场景**: 需要为不同的 Agent 配置不同的 API Key

**解决方案**:

```bash
# 方案1：使用 Agent 专属配置
openclaw config set models.providers.anthropic.apiKey "sk-ant-xxx" --agent tech-dev
openclaw config set models.providers.openai.apiKey "sk-yyy" --agent content-writer

# 方案2：使用环境变量（临时切换）
export ANTHROPIC_API_KEY="sk-ant-xxx"
openclaw agent --message --agent tech-dev "Hello"

export ANTHROPIC_API_KEY="sk-ant-yyy"
openclaw agent --message --agent content-writer "Hello"
```text
---

### 问题3：如何切换 provider

**场景**: 需要在不同的 AI provider 之间切换

**解决方案**:

```bash
# 查看当前 provider
openclaw config get models.default

# 切换到 Anthropic
openclaw config set models.default "anthropic/claude-sonnet-4-5"

# 切换到 OpenAI
openclaw config set models.default "openai/gpt-4"

# 切换到 Google
openclaw config set models.default "google/gemini-pro"

# 验证
openclaw models list
```text
---

### 问题4：API Key 泄露了怎么办

**应急措施**:

1. **立即撤销旧 Key**
   - 登录 provider 控制台
   - 撤销泄露的 API Key

2. **生成新 Key**
   - 在 provider 控制台生成新 Key

3. **更新配置**
   ```bash
   # 更新全局配置
   openclaw config set models.providers.anthropic.apiKey "sk-ant-new"
   
   # 或更新环境变量
   export ANTHROPIC_API_KEY="sk-ant-new"
   ```

4. **清理旧配置**
   ```bash
   # 检查所有配置文件
   grep -r "sk-ant-old" ~/.openclaw/
   
   # 删除旧 Key
   openclaw config unset models.providers.anthropic.apiKey
   ```

---

## 📋 配置最佳实践

### 推荐的配置策略

#### 新手用户

1. **使用配置向导**
   ```bash
   openclaw onboard
   ```

2. **或使用全局配置**
   ```bash
   openclaw models auth add
   ```

3. **验证配置**
   ```bash
   openclaw models list
   ```

#### 进阶用户

1. **使用 Agent 专属配置**
   ```bash
   openclaw config set models.providers.anthropic.apiKey "sk-ant-xxx" --agent tech-dev
   ```

2. **合理利用配置优先级**
   - 全局配置作为默认
   - Agent 配置作为覆盖
   - 环境变量作为临时切换

3. **定期备份配置**
   ```bash
   cp -r ~/.openclaw ~/.openclaw.backup-$(date +%Y%m%d)
   ```

#### 企业用户

1. **使用环境变量管理敏感信息**
   ```bash
   # 在 Docker Compose 中
   environment:
     - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
   ```

2. **版本控制配置模板**
   ```bash
   # 配置模板（不包含真实 Key）
   {
     "models": {
       "providers": {
         "anthropic": {
           "apiKey": "${ANTHROPIC_API_KEY}"
         }
       }
     }
   }
   ```

3. **自动化配置部署**
   ```bash
   # 使用脚本自动配置
   ./scripts/setup-config.sh
   ```

---

## 🔐 安全建议

### API Key 安全管理

1. **不要硬编码 API Key**
   - ❌ 不要写在代码中
   - ❌ 不要提交到 Git
   - ✅ 使用环境变量或配置文件

2. **使用 .gitignore**
   ```bash
   # .gitignore
   .openclaw/openclaw.json
   .openclaw/agents/*/openclaw.json
   .openclaw/credentials/
   .env
   ```

3. **定期轮换 API Key**
   - 每 3-6 个月更换一次
   - 发现泄露立即更换

4. **使用最小权限原则**
   - 只授予必要的权限
   - 不同用途使用不同的 Key

5. **监控 API 使用情况**
   - 定期检查 API 调用量
   - 发现异常立即处理

---

## 📚 相关文档

- [配置文件结构完整指南](config-file-structure.md) - 配置文件详细说明
- [第2章：安装配置](01-basics/02-installation.md) - 基础配置教程
- [第11章：高级配置](03-advanced/11-advanced-configuration.md) - 高级配置技巧

---

## 💡 常见问题 FAQ

### Q1: 我应该使用哪种配置方式？

**A**: 根据你的场景选择：
- 新手：使用配置向导或全局配置
- 多 Agent：使用 Agent 专属配置
- 临时测试：使用环境变量
- Docker 部署：使用环境变量

### Q2: 配置优先级是怎样的？

**A**: 环境变量 > Agent 配置 > 全局配置 > 配置向导 > 默认值

### Q3: 如何查看当前使用的 API Key？

**A**: 
```bash
openclaw config get models.providers.anthropic.apiKey
```text
### Q4: 配置后不生效怎么办？

**A**: 
1. 检查配置优先级
2. 重启 Gateway
3. 查看日志
4. 验证 API Key 格式

### Q5: 如何为不同的 Agent 配置不同的 API Key？

**A**: 
```bash
openclaw config set models.providers.anthropic.apiKey "sk-ant-xxx" --agent agent1
openclaw config set models.providers.openai.apiKey "sk-yyy" --agent agent2
```

---

**最后更新**: 2026-02-14  
**适用版本**: OpenClaw 2026.3.2+
