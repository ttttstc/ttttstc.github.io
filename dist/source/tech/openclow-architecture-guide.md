# 玩转 OpenClaw：核心架构、运作原理、Agent 部署步骤

> 作者：冰以东  
> 来源：腾讯技术工程  
> 日期：2026-03-09

---

## 前言

### OpenClaw 到底有什么不同？

#### 1. 技术框架不复杂，优势在于共识的推广

OpenClaw 的技术难度大概就类似 AI Coding 诞生前，具备「初级推荐算法的前后端通信 App」的难度。做过几年开发的同学都知道，这其实并不难，所以技术框架并不是 OpenClaw 的亮点。

**OpenClaw 的优势在于共识的推广**。举个例子，在没有 OpenClaw 之前，我们基本人手一个自己搭建的 Agent，像我之前搭建的 L1~L5 5 层架构 Agent。每次跟朋友交流 Agent 之前，都要先简单介绍一下各自 Agent 的架构，然后再聊具体的落地 Case。

但 OpenClaw 把 Agent 架构推广之后，我们基于 OpenClaw 搭建个人 Agent 后，就不用再介绍 Agent 架构是什么了，我们再聊的话题就是：怎么保活、怎么进一步替换 RAG 算法库、怎么部署多 Agent、怎么应用 good case。

#### 2. 多 Agent 的天然支持

熟悉 LLM 底层原理的同学都知道，LLM 成也 transformer，目前卡脖子的地方也在 transformer。Context 的瓶颈严格约束了单 Agent 智能的发挥。

传统 Prompt 定义 Agent 身份，再加上层出不穷的 skills，正在一步一步蚕食 LLM 的 Context 窗口。为了更好使用 LLM，**专事专做**似乎已经变成更好使用 Agent 的共识。

#### 3. 做和 AI 能力正交的事情

AI 时代，选择不做什么事情和选择做什么事情一样重要。要做**和 AI 能力正交的事情**。花时间精力打造和迭代自己的 Agent，其实就是跟 AI 能力正交的一件事，跟培养一个人一样，他可以是很聪明，但他认知世界和做事的能力，需要我们来教导他，这是千人千面的一个话题。

当 AI 模型越来越聪明，我们只需要升级 Agent 使用的底层 LLM 即可，那些跟 AI 交互留下来的长期数据，都将会变成我们未来更好驱动 AI 的私人宝贵数据。

---

## 一、OpenClaw 部署指南

### （一）买机器是必须的吗？

不是必须的，目前使用 OpenClaw 有 2 种主流方案：

#### 1. 云机
腾讯云官网现在已支持云机部署 OpenClaw，也十分便捷。如果能接受云机的操作习惯，这种方式是最合适的，不需要用实体机，数据也可以随时 download 下来。

#### 2. 自部署

**Mac 和 Windows 怎么选？**

OpenClaw 的部署和诸多工具，对 Mac 环境天然友好。如果可以，最好选 Mac。Windows 当然也可以部署，就是折腾一些。

**Mac 的配置怎么选？**

因为 OpenClaw 部署之后基本就在本地运行着，所以 Mac 系列优先推荐 Mac Mini。

- **芯片**：从软件适配出发，既然都采用 Mac Mini 的方案了，那么至少要是 M 系列的芯片。其次，M1~M4，要看部署时的诉求。如果平时不需要跑文生图、文生视频的本地模型，那么 M1 芯片是性价比最高的。OpenClaw 运行时基本都只是调各种 API，不怎么吃性能。
- **内存**：内存的诉求也是看是否需要本地部署文生图、文生视频的模型，如果需要部署模型，还是建议 24G 内存。
- **磁盘**：磁盘的诉求也是看是否需要本地部署文生图、文生视频的模型，ComfyUI 上的模型，动辄都是 30G 起步，所以如果用来跑本地模型，至少 256G 起步。

目前 Mac Mini M1 1TB 市场价 3K 左右，Mac Mini M4 512G 大概 7K 左右。

### （二）OpenClaw 推荐使用哪个 IM 工具？

筛选 IM 工具，有 3 个原则：**安全性、可用性、易用性**。

#### 1. 安全性

从数据隔离的大前提出发，一定要避免个人误操作发送了一些私密内容给 OpenClaw（注意：千万不要把 OpenClaw 当成「文件传输助手」），以及严防习惯 OpenClaw 之后忽略了其安全风险。时刻提醒自己：部署 OpenClaw 之后，就是在跟把机器人公开在网上没什么区别，按最坏的情况去预估风险。

#### 2. 可用性

这是最容易踩坑的一点。如果你只是部署单 Agent，你会发现还是够用的。但当你部署多 Agent 之后，你的 IM 调用额度会飞速消耗。

原因是 OpenClaw 的网关机制中有一个定时快照的逻辑：

```javascript
const healthInterval = setInterval(() => { 
  void params.refreshGatewayHealthSanpshot({probe:true})…
})
```

该快照逻辑会 ping IM，60 秒一次。如果 Agent 很多，IM 额度将很快被消耗完。所以如果你有多 Agent 的诉求，你需要选一个额度多（无额度约束）的 IM。

#### 3. 易用性

相比 OpenClaw 推荐的国外 IM 软件，国内的软件易用性还是高一些。

### （三）OpenClaw 的配置麻烦吗？

如果只是把工程 run 起来 + 配置 IM 机器人，半小时足矣。

但如果是配多 Agent，配不同 Agent 的任务分配、调试 Skills、定制 Agent 身份、调试定时任务、自部署模型，那还是比较耗时的，大概需要 2-3 天的时间。

---

## 二、OpenClaw Agent 核心架构

### （一）Agent 的核心配置项

每个 Agent 都有其对应的 workspace，其各文件的含义如下：

| 文件 | 含义 |
|------|------|
| AGENTS.md | Agent 职责声明，决定工具权限 ⭐⭐⭐ |
| SOUL.md | 个性化提示词，注入 system prompt |
| TOOLS.md | 工具白名单/黑名单，安全边界 |
| IDENTITY.md | 身份标识（name/avatar），通道展示 |
| USER.md | 用户偏好，上下文先验 |
| HEARTBEAT.md | 定时任务配置（可选） |
| BOOTSTRAP.md | 首次 onboarding 引导（一次性消费） |
| MEMORY.md | 用户记忆文档（RAG 源） |

> ⭐ 推荐阅读 **AGENTS.md** 这个文件，详细介绍了一个 Agent 的启动、memory 管理的流程，堪称 OpenClaw 最核心的 Prompt 文件。

### （二）Agent 的启动流程

Agent 不是常驻进程，而是 per-session 的瞬态实例。每个对话都是一次完整的加载-执行-销毁循环。

核心流程：
1. 加载 bootstrap 上下文
2. 创建 SessionManager（封装 Pi Agent 的 session 持久化）
3. 构建 system prompt（注入 workspace 文件内容）
4. 创建 agent session

System Prompt 是动态生成的，即每次 run 都会重新读取 workspace 文件，确保配置实时生效。

### （三）OpenClaw Agent 的记忆力机制

和 OpenClaw 记忆力机制相关的配置有三个：

```
// 会话信息
.openclaw/agents/ceo/sessions/xxxx.jsonl

// 按天记录的 memory
.openclaw/workspace-ceo/memory/YYYY-MM-DD.md

// LLM 精练后的 memory
.openclaw/workspace-ceo/MEMORY.md
```

#### 1. Session 是怎么实现会话按需加载的？

Session Header 是 JSONL 文件的第一行元数据：

```json
{
  "type": "session",
  "id": "session-uuid",
  "cwd": "/path/to/workspace",
  "timestamp": 1234567890,
  "parentSession": "parent-id"
}
```

Session 的加载也是懒加载机制，当消息到达路由到 SessionKey 之后，OpenClaw 会查找 sessions.json 获取当前 SessionId，将 SessionId 对应的 .jsonl 加载到 Agent 中。

#### 2. Session 太长，是不是就挤爆 LLM Context了？是怎样优化的？

**A. Compaction（压缩）- 持久化**

当对话太长时，旧消息会被**总结**成一个 summary。

```
压缩前：[user1, assistant1, user2, assistan2, … ,user100,assistant100]
压缩后：[compaction_summary, user80, assistant80, … ,user100, assistant100]
                     ↑ firstKeptEntryId 来控制 compaction 程度
```

进行该 compaction 压缩后，会写入 JSONL 文件（也即进行了持久化）。下次对话继续使用的就是压缩后的历史。

**B. Session Pruning（修剪）- 临时**

在发送给 LLM 之前，临时裁剪旧的 tool 结果。

```
修剪前：[user1, assistant1, toolResult1(10KB), user2, assistant2, toolResult2(5KB)]
修剪后：[user1, assistan1, "[Old tool result cleared]", user2, assistant2, toolResult2(5KB)]
                     ↑ 旧的 tool 结果被替换
```

该修剪策略不修改 JSONL 文件，仅仅是内存级别的操作。

**C. History Limit（历史限制）- 可选**

可以限制发送的消息数量。

#### 3. Agent 是怎么通过对话的方式迭代 Memory.md 的？

Agent 通过文件系统工具（fsWrite/fsAppend）更新 Memory.md。当 Session 接近 context 上限时，OpenClaw 会自动提示 Agent 写入 Memory，然后再压缩 Session。

---

## 三、OpenClaw 多 Agent 部署

### （一）单 Agent 架构会出现什么问题？

Transformer 架构和原理想必大家都已清楚，单 Agent 的架构不仅有可能导致 Context 的快速消耗，还会错误 search 导致交付质量降低。

举一个我自己遇到过的例子：先构建一个 RAG tutor Agent，让它来强化我们 Flutter 的技能。当我中途和该 Agent 讨论过 C++ 的内容，那么因为 memory 机制的问题，后续和该 Agent 多轮对话过程中，它都会带着 C++ 相关的记忆，让它提供 Demo 示例时，它不会提供 Flutter 相关，而提供了 C++ 相关的示例。

### （二）多 Agent 通信，协同工作

在 OpenClaw 中，Agent 之间的调用有两种方式：**sessions_send** 和 **sessions_spawn**。

#### 1. sessions_send 和 sessions_spawn 的区别

**sessions_send**：向已经存在的 session 发消息

简单来说，当 Agent 之间的通信，需要被写入各自的 memory 时，就建议使用 sessions_send 的方式。给同事发消息，他在自己工作的上下文中处理，这种情况就很适合使用 sessions_send。

**sessions_spawn**：在独立环境中运行任务

sessions_spawn 采用 SubAgent 的方式，通过调起子 Agent + 传入内容的方式，让其完成交付。sessions_spawn 更像是在雇佣临时工，给他一个独立的任务，完成后进行汇报。

比如：ceo 角色说："让 iostutor 写一个 Swift 的网络请求封装类，30 分钟内完成"。即，A 如果能指挥 B 干活，那么 B 就是 A 的 SubAgent。

#### 2. 多 Agent 部署建议

1. **公司要扁平化**，不要部署太多 Agent
2. **要信任公司成员**，尽量保持 Agent 的双向沟通，建议 Agent 同时配置 sessions_send 和 sessions_spawn
3. **要设立核心成员边界**，控制核心 Agent 数量。如果是比较明确的工具 Agent，比如专门对 Markdown 格式进行排版的 Agent，那么建议这种 Agent 就只配置 SubAgent 即可，它不需要记住太多上下文，专心把交付的事情处理完即可

---

## 四、Skills 管控

### （一）Agent 加载 Skills 的流程

Skills 不是每个文档的完整注入，只是注入列表。Agent 需要时用 read 工具读取完整的 SKILL.md。

#### Skills 来源（3 个位置，按优先级）

1. `workspace-xxx/skills/` ← 最高优先级（per-agent）
2. `~/.openclaw/skills/` ← 中等优先级（shared）
3. bundled skills (npm 包内) ← 最低优先级（内置）

### （二）精细化 Skills 注入

Skills 太多会给 Agent 造成 Context 负担，甚至错误的 Skills 会导致 Agent 错误调用工具。

我们要对 Agent 进行精细化的管控，把每个 Agent 的 skills 加载配置成：**【基础通用能力 Skills + 专属 Skills】**

比如：
- **brave_search**：属于让 Agent 进行高效的联网检索，它就应该属于**基础通用 Skill**
- **Weather**：如果只让「Family Agent」进行定时天气汇报，那么 Weather 就应该属于「Family Agent」的**专属 Skill**

### （三）Skills 延迟加载问题

在你修改完 Skills 架构之后，你大概率会遇到一个问题：Agent 并没有加载最新的 skills 配置。这是因为 OpenClaw 在 session 启动时会创建 skills 快照，并在整个 session 期间复用。

**解决方案**：删除对应的 session，再重新咨询 Agent 的 skills 情况，就会发现新加的 skills 已经被更新出来了。

### （四）Clawhub 指令

```bash
# 语义搜索 Skills
clawhub search "calendar management"

# 安装指定 Skill
clawhub install <skill-slug>

# 列出已安装的 Skills
clawhub list

# 更新所有已安装的 Skills（谨慎使用）
clawhub update --all

# 同步并备份本地 Skills
clawhub sync
```

#### 推荐 Skills

1. **Find-skills**: https://clawhub.ai/JimLiuxinghai/find-skills
2. **Summarize**: https://clawhub.ai/steipete/summarize
3. **self-improving-agent**: https://clawhub.ai/pskoett/self-improving-agent
4. **brave-search**: https://clawhub.ai/steipete/brave-search
5. **frontend-design**: https://clawhub.ai/ivangdavila/frontend

---

## 五、Good Case 分享

### 1. Daily_paper
AI 时代消息太多，推荐 https://huggingface.co/papers 的 daily_paper，可以通过 Agent 进行每日论文的抓取，让它快速提炼论文要点。Agent 直接获取容易失败，可以考虑 jina.ai 这个工具。

### 2. Summary
Agent 必备能力，通过获取 Subscribe 的博主，定期分析内容，评分，提取高质量信息。

### 3. DeepResearch
DeepResearch 也是 Agent 的核心能力之一，当我们需要深入研判一个消息时，可以让 Agent 启动 DeepResearch 能力，对消息进行分析。

### 4. RAG tutor
通过在 Workspace/Agent_xx/Memory/xxx.md 目录下配置学习资料，我们可以让 Agent 成为我们垂直领域的专属 tutor。

### 5. ComfyUI 本地文生图/文生视频
目前调用文生图、文生视频的 API 接口都是要付费的，当我们自部署 OpenClaw 之后，可以通过 ComfyUI 在本地部署「文生图、文生视频」接口。

### 6. TTS 语音本地部署
本机部署了 qwen3-tts 的模型用来进行语音合成，搞一个学英语，读新闻的定时任务还是不错的。
- https://github.com/kapi2800/qwen3-tts-apple-silicon

### 7. 家庭助理
可以配置家庭专属 Agent，进行完 Memory 隔离后，可以一家人都在 IM 群里，家庭的一些定时任务，比如"xxx 清理和替换"、"提醒父母吃药"等等，可以极大提升家庭幸福感。

---

## 六、说在后面

### 1. Model 的选择

在预算 OK 的情况下，建议使用 SOTA 模型。落后的 LLM 会影响使用者的心智判断。在交付不及格的情况下，很容易就做出"AI 能力还不行，解决不了我这个事情"的判断。实际大概率是因为 LLM 还不够 SOTA，**use SOTA model first**。

另外不建议按「年」对专一某个模型进行订阅，模型迭代速度很快，专一模型的订阅可能几个月就不能用了。

### 2. OpenClaw 还有很多可以玩的

比如替换 OpenClaw 的 memory-search 底层算法，又比如重写 AGENTS.md 构建更复杂的 Agent 关系，喜欢折腾 OpenClaw 的朋友可以在评论区多多沟通。

---

> **⚠️ 安全提醒**
> 
> 作者特别强调了**安全风险**：部署 OpenClaw 后，就是在跟把机器人公开在网上没什么区别，按最坏的情况去预估风险。千万不要把 OpenClaw 当成「文件传输助手」！

---

*归档路径：D:\AI\company\source\*
