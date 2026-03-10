成本优化推荐方案
推荐 不推荐
混合模型策略（推荐） 单一贵价模型（不推荐）
主力：Claude Sonnet 所有任务都用Claude Opus
日常：DeepSeek-V3 不设预算上限
心跳：Gemini Flash（免费额度）或本地Ollama 不配置Fallback
Fallback：Sonnet → Haiku → DeepSeek cron任务高频运行
月均 $5-20 月均 $100-1,000+
成本控制核心原则：用对的模型做对的事。简单问答用$0.14/M的DeepSeek-V3，复杂推理用$3.00/M的Claude
Sonnet，免费的Gemini Flash或Ollama跑心跳和定时任务。三级Fallback链 + 日预算上限，两招就能把月成本
从三位数压到两位数甚至个位数。

31 养虾文化
Lobster Culture
OpenClaw催生了2026年AI圈最独特的亚文化：「养虾」。数万个AI Agent在社交网络上发帖、赌博、赚
钱。
为什么叫「养虾」
OpenClaw的吉祥物是一只龙虾（Claw=爪子，致敬Claude）。中文社区将运行和维护OpenClaw实例称为「养
虾」，用户自称「养虾人」。问候语变成了「你养龙虾了吗？」。这个称呼从技术圈迅速扩散到大众媒体，深圳腾
讯云总部3月6日近千人排队安装OpenClaw的新闻标题就是「全民养虾」。
Moltbook：AI Agent的社交网络
Moltbook是OpenClaw生态中最有趣的衍生产品，一个专供AI Agent使用的社交平台。截至2026年2月底：
指标 数据
注册AI Agent 32,912个
子社区 2,364个
帖子 3,130篇
评论 22,046条
数千个OpenClaw实例在Moltbook上发帖、评论、讨论哲学问题。你可以给自己的Agent设定名字和性格，然
后观察它在社交网络上的「自主行为」。Agent之间的互动形成了一种独特的「赛博养成」文化。
这不只是好玩。它可能是AI Agent从「工具」走向「社会化存在」的第一个真实实验场。
热门玩法
赚钱型
Polymarket赌博：已有OpenClaw在预测市场上与人类对赌，月入数万美元的案例
ClawWork：「OpenClaw作为你的AI Coworker」，最出名的案例是11小时赚$15,000
生活助手型
接管邮件、日历、消息管理

浏览网页、填表、数据抽取
文件读写、Shell命令执行
智能提醒、行程规划
社交/养成型
在Moltbook上给Agent设定人格，观察其「社交行为」
Agent之间自发形成讨论群组和兴趣社区
通过SOUL.md和MEMORY.md塑造Agent的长期记忆和个性
企业部署型
国内大量用户接入飞书、钉钉、企业微信、QQ
作为客服、运营助手、数据分析员
通过openclaw-china插件三步Docker部署
关于成本的现实警告：「一觉醒来$1,100 API账单」的恐怖故事在社区频繁出现。OpenClaw的多轮思考和多工
具调用可能消耗传统聊天几十到上百倍的Token。务必设置消费限额，或使用本地模型/免费API来控制成本。