A 常见问题 FAQ
Frequently Asked Questions
Q1：OpenClaw是免费的吗？
OpenClaw本身是MIT开源免费的。但运行它需要两项成本：一是服务器（本地电脑或云服务器），二是AI模型
的API费用。如果你用本地模型（Ollama），API费用也可以免费。总结：软件免费，算力不免费。
Q2：我需要什么样的技术水平才能用OpenClaw？
能用命令行安装npm包就够了。最基础的安装只需要两行命令： npm install -g openclaw@latest 和
openclaw onboard /-install-daemon 。如果用阿里云/腾讯云的一键部署方案，门槛更低。但如果要接入多
个平台、自定义Skill、调优配置，需要一定的技术基础。
Q3：OpenClaw和ChatGPT有什么区别？
ChatGPT是「顾问」（你问它答），OpenClaw是「员工」（它主动执行任务）。OpenClaw可以接入你的消息平
台、管理邮件日历、操作浏览器、执行Shell命令，而且数据完全在你自己手上。代价是需要自己部署和维护。
Q4：安全吗？我的数据会泄露吗？
OpenClaw是自托管的，数据默认存储在你自己的服务器上，不经过第三方。但需要注意三个安全风险：(1)
CVE-2026-25253 RCE漏洞（已修复，务必更新到最新版本）；(2) ClawHavoc供应链攻击（安装第三方Skill前
务必审查源代码）；(3) Gateway如果暴露在公网上需要设置认证（ gateway.auth.mode ）。
Q5：一个月大概花多少钱？
取决于你的使用方式和模型选择。参考区间：完全免费（本地模型）→ $2-5/月（DeepSeek为主）→ $5-15/月
（GLM-5为主）→ $10-30/月（Claude Sonnet为主）。最大的成本陷阱是OpenClaw的多轮工具调用会消耗大量
Token，务必设置消费限额。
Q6：可以用国产模型吗？效果怎么样？
完全可以。DeepSeek-V3（$0.14/M输入）和GLM-5（$0.80/M输入）是最受国内用户欢迎的选择。GLM-5的代
码能力接近Claude Opus 4.5水平，DeepSeek-V3则是极致性价比。效果肯定不如Claude Sonnet（Agent任务
公认最强），但对于大部分日常任务已经够用。推荐用Fallback机制混合搭配。

Q7：Anthropic封杀了OAuth，我该怎么用Claude？
使用Anthropic API Key（按量付费）。在 Anthropic Console 创建API Key，然后在OpenClaw中配置
ANTHROPIC_API_KEY 环境变量。不要尝试通过OAuth连接Claude Pro/Max订阅账户，会被封号。
Q8：OpenClaw创始人加入OpenAI后，项目还会继续吗？
会。Peter Steinberger加入OpenAI后，OpenClaw正在转为开源基金会运营。OpenAI已承诺赞助项目但不干预
开发方向。截至2026年3月，项目仍然保持近乎每日更新的节奏，有1,075+贡献者。项目的长期可持续性是有保
障的。
Q9：ClawHub上的Skill安全吗？
不能盲目信任。ClawHub的13,729个Skill中，经社区审计约20%存在问题（垃圾/重复/恶意）。ClawHavoc事件
中，超800个恶意Skill试图窃取用户凭证。建议：只安装starred数量多的Skill、安装前审查源代码、使用
awesome-openclaw-skills精选列表（已过滤问题Skill）。
Q10：能接入微信吗？
可以，但不是直接接入个人微信。通过openclaw-china插件的企业微信（自建应用）方案可以间接接入个人微
信。钉钉和QQ Bot的接入最简单。飞书是国内最主流的接入渠道之一，OpenClaw和飞书官方都提供了丰富的
集成文档。
Q11：OpenClaw和Claude Code可以一起用吗？
可以，而且是推荐用法。社区开发了openclaw-claude-code-skill，通过MCP协议桥接两者。OpenClaw负责消
息平台接入和生活自动化，Claude Code负责编程任务。两者组合是2026年最完整的AI工作流。
Q12：本地模型效果怎么样？
取决于硬件和模型选择。32GB RAM可以跑Qwen3-Coder:32B或Devstral-24B，在代码生成和简单Agent任务上
表现不错。但跟云端的Claude Sonnet或GPT-5.4比仍有差距，尤其是复杂的多步骤推理任务。适合隐私敏感场
景和实验用途。

B 命令速查表
Command Cheat Sheet
安装与更新
命令 说明
npm install -g openclaw@latest 全局安装OpenClaw
openclaw onboard /-install-daemon 初始化配置 + 安装守护进程
openclaw update /-channel stable 更新到最新稳定版
openclaw update /-channel beta 更新到Beta版（尝鲜）
openclaw doctor 诊断检查，排查常见问题
openclaw /-version 查看当前版本
日常使用
命令 说明
openclaw gateway /-port 18789 /-verbose 启动Gateway（详细日志模式）
openclaw gateway restart 重启Gateway（改配置后必须执
行）
openclaw agent /-message "xxx" 直接发送消息给Agent
openclaw devices pair 设备配对（新设备首次连接）
openclaw models list 列出已配置的模型
openclaw models status /-probe 测试模型连通性
openclaw config set agents.defaults.model.primary 设置主力模型
provider/model

插件管理
命令 说明
openclaw plugins install <name> 安装插件/Skill
openclaw plugins enable <name> 启用插件
openclaw plugins list 列出已安装插件
openclaw plugins install @openclaw-china/channels 安装中国IM插件
openclaw china setup 配置中国IM平台（需先安装插件）
模型认证
命令 说明
openclaw onboard /-auth-choice zai-api-key 配置智谱GLM
openclaw onboard /-auth-choice apiKey /-token-provider openrouter /- 配置OpenRouter
token "$KEY"
openclaw models auth login /-provider qwen-portal /-set-default 通义千问OAuth登
录
聊天命令（在对话中使用）
命令 说明
/status 会话概览（当前模型、Token用量）
/new 清空会话历史，开始新对话
/think <level> 调整推理深度（off/minimal/low/medium/high/xhigh）
/usage off|tokens|full 控制回复页脚的用量显示
/activation mention|always 群消息处理模式

Docker部署
命令 说明
docker-compose up -d 后台启动OpenClaw容器
docker-compose logs -f 查看实时日志
docker-compose pull /& docker-compose up -d 更新到最新镜像

C 资源链接
Resource Links
官方资源
资源 地址
GitHub仓库 github.com/openclaw/openclaw
官方文档 docs.openclaw.ai
官网 openclaw.ai
ClawHub技能市场 clawhub.ai
Moltbook（Agent社交网络） moltbook.com
GitHub Releases github.com/openclaw/openclaw/releases
GitHub Discussions github.com/openclaw/openclaw/discussions
社区资源
资源 地址 说明
awesome-openclaw- github.com/VoltAgent/awesome-openclaw-skills 5,494个精选Skill（已过滤问题
skills Skill），31.4K Stars
awesome-openclaw- github.com/hesamsheikh/awesome-openclaw- 社区用例合集，21K Stars
usecases usecases
openclaw-claude- github.com/Enderfga/openclaw-claude-code- 桥接Claude Code能力
code-skill skill
SecureClaw 开源安全工具 Skill安全扫描

国内资源
资源 地址 说明
openclaw-china插件 github.com/BytePioneer-AI/openclaw-china 钉钉/QQ/企微/微信接入
OpenClaw中文文档 openclaw.cc 社区维护的中文文档
阿里云部署文档 help.aliyun.com（搜索OpenClaw） 轻量应用服务器一键部署
B站部署教程 BV1MfFAz6EnR 保姆级：接入微信/飞书/钉钉/QQ
教程资源
资源 语言 说明
freeCodeCamp完整教程 英文 从零开始的完整指南
DigitalOcean介绍 英文 What is OpenClaw概述
知乎部署系列 中文 多篇部署和使用教程
博客园源码编译指南 中文 从源码构建OpenClaw
菜鸟教程一键部署 中文 最简部署方案

模型提供商
提供商 API控制台
Anthropic Claude console.anthropic.com
OpenAI platform.openai.com
Google AI Studio aistudio.google.com
DeepSeek platform.deepseek.com
智谱GLM bigmodel.cn
通义千问 dashscope.aliyun.com
月之暗面Kimi platform.moonshot.cn
硅基流动 siliconflow.cn
OpenRouter openrouter.ai
火山引擎（豆包） console.volcengine.com
本文档在 Claude Code 辅助下整理编写，基于 OpenClaw 官方文档、GitHub 仓库及社区资料。
内容的准确性与时效性仅供参考，如有勘误或建议，欢迎关注公众号「花叔」反馈交流。
来源：docs.openclaw.ai · github.com/openclaw/openclaw · clawhub.com · Created by 花叔 · 2026 年 3 月