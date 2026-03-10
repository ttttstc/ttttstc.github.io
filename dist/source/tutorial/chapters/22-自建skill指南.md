34 国内生态
China Ecosystem
「云养虾」社区10万+用户，政府出台支持政策，OpenClaw在中国的落地速度超出所有人预期。
社区规模
「云养虾」社区用户超10万
深圳龙岗AI（机器人）局2026年3月8日发布OpenClaw使用支持措施征求意见稿
腾讯云总部3月6日近千人排队安装OpenClaw
B站、知乎、博客园大量部署教程
openclaw-china 插件
BytePioneer-AI开发的中国IM适配插件，三步完成国内平台接入：
openclaw plugins install @openclaw-china/channels
openclaw china setup
openclaw gateway restart
平台 状态 配置难度
钉钉 可用 简单
QQ Bot 可用 简单
企业微信（智能机器人） 可用 中等
企业微信（自建应用，可接入个人微信） 可用 中等偏高
飞书 可用（国内主流渠道） 中等
核心建议
飞书是国内接入OpenClaw最活跃的渠道之一，OpenClaw官方和飞书都提供了详细的集成文档和教程，适合
团队协作场景。

主流部署方式
方式 适合人群 参考成本
阿里云一键部署（最受欢迎） 大多数用户 新用户约68元/年起（2vCPU+2GB）
腾讯云Lighthouse 腾讯云用户 类似定价
Docker部署 有Docker经验的用户 取决于服务器成本
本地安装（npm） 开发者 免费（仅API费用）
1Panel面板 需要管理多个服务的用户 取决于服务器成本
国内教程资源
B站保姆级教程：接入微信/飞书/钉钉/QQ（BV1MfFAz6EnR）
阿里云官方文档：轻量应用服务器一键部署
知乎多篇部署指南
菜鸟教程一键部署指南
freeCodeCamp完整英文教程
核心建议
对国内用户来说，最省心的方案是：阿里云一键部署 + openclaw-china插件接入钉钉/QQ + DeepSeek或GLM-
5作为主力模型。整套成本可以控制在每月100元以内（服务器68元/年 + API费用约几十元/月）。