export interface Skill {
  name: string;
  description: string;
  category: string;
  downloads?: string;
  url?: string;
  author?: string;
}

export const skills: Skill[] = [
  // 搜索与研究
  { name: 'tavily-search', description: 'AI 优化的网络搜索，通过 Tavily API 返回简洁相关的结果', category: '搜索与研究', downloads: '117k', url: 'https://clawhub.ai/arun-8687/tavily-search', author: '@arun-8687' },
  { name: 'find-skills', description: '帮助用户发现和安装智能体技能，当用户询问如何做某事时使用', category: '搜索与研究', downloads: '114k', url: 'https://clawhub.ai/JimLiuxinghai/find-skills', author: '@JimLiuxinghai' },
  { name: 'summarize', description: '使用 summarize CLI 总结 URL、PDF、图片、音频、YouTube 内容', category: '搜索与研究', downloads: '91.9k', url: 'https://clawhub.ai/steipete/summarize', author: '@steipete' },
  { name: 'brave-search', description: '通过 Brave Search API 进行网络搜索和内容提取', category: '搜索与研究', downloads: '31.3k', url: 'https://clawhub.ai/steipete/brave-search', author: '@steipete' },
  { name: 'baidu-search', description: '使用百度 AI 搜索引擎搜索网络内容', category: '搜索与研究', downloads: '25.9k', url: 'https://clawhub.ai/ide-rea/baidu-search', author: '@ide-rea' },
  { name: 'web-search-exa', description: '使用 Exa 进行实时网络搜索，返回相关来源和摘要', category: '搜索与研究', downloads: '17.1k', url: 'https://clawhub.ai/theishangoswami/web-search-exa', author: '@theishangoswami' },
  { name: 'multi-search-engine', description: '多搜索引擎集成，支持 17 个搜索引擎（8 个中国+9 个全球）', category: '搜索与研究', downloads: '22.4k', url: 'https://clawhub.ai/gpyAngyoujun/multi-search-engine', author: '@gpyAngyoujun' },
  { name: 'web-search', description: '使用 DuckDuckGo 搜索 API 搜索网络信息、新闻、图片和视频', category: '搜索与研究', downloads: '15.3k', url: 'https://clawhub.ai/billyutw/web-search', author: '@billyutw' },
  { name: 'duckduckgo-search', description: '使用 DuckDuckGo 获取实时信息、文档和教程', category: '搜索与研究', downloads: '15.1k', url: 'https://clawhub.ai/10e9928a/duckduckgo-search', author: '@10e9928a' },
  { name: 'deep-research-pro', description: '多源深度研究智能体，搜索网络并生成带引用的报告', category: '搜索与研究', downloads: '12.5k', url: 'https://clawhub.ai/parags/deep-research-pro', author: '@parags' },
  { name: 'web-search-plus', description: '具有智能自动路由功能的统一搜索技能', category: '搜索与研究', downloads: '12.1k', url: 'https://clawhub.ai/robbyczgw-cla/web-search-plus', author: '@robbyczgw-cla' },
  { name: 'answer-overflow', description: '搜索 Discord 社区讨论，找到编码问题和库问题的解决方案', category: '搜索与研究', downloads: '10k', url: 'https://clawhub.ai/RhysSullivan/answeroverflow', author: '@RhysSullivan' },

  // 浏览器自动化
  { name: 'agent-browser', description: 'Rust 编写的无头浏览器自动化 CLI，支持导航、点击、截图', category: '浏览器自动化', downloads: '80.5k', url: 'https://clawhub.ai/TheSethRose/agent-browser', author: '@TheSethRose' },
  { name: 'browser-automation', description: '通过自然语言自动执行浏览器交互操作', category: '浏览器自动化', downloads: '16.5k', url: 'https://clawhub.ai/peytoncasper/browser-automation', author: '@peytoncasper' },
  { name: 'playwright-mcp', description: '通过 Playwright MCP 服务器进行浏览器自动化', category: '浏览器自动化', downloads: '16.2k', url: 'https://clawhub.ai/Spiceman161/playwright-mcp', author: '@Spiceman161' },
  { name: 'browser-use', description: '自动化浏览器交互用于网页测试、表单填写、截图和数据提取', category: '浏览器自动化', downloads: '20.3k', url: 'https://clawhub.ai/ShawnPana/browser-use', author: '@ShawnPana' },
  { name: 'playwright-scraper-skill', description: '基于 Playwright 的网页抓取技能，带反机器人保护', category: '浏览器自动化', downloads: '13.4k', url: 'https://clawhub.ai/waisimon/playwright-scraper-skill', author: '@waisimon' },
  { name: 'fast-browser-use', description: '高性能浏览器自动化，用于大规模抓取和多标签管理', category: '浏览器自动化', downloads: '10.8k', url: 'https://clawhub.ai/rknoche6/fast-browser-use', author: '@rknoche6' },
  { name: 'firecrawl-search', description: '通过 Firecrawl API 进行网络搜索和抓取', category: '浏览器自动化', downloads: '10.7k', url: 'https://clawhub.ai/ashwingupy/firecrawl-search', author: '@ashwingupy' },

  // 通信与邮件
  { name: 'gog', description: 'Google Workspace CLI，支持 Gmail、日历、驱动、联系人、表格和文档', category: '通信与邮件', downloads: '90.6k', url: 'https://clawhub.ai/steipete/gog', author: '@steipete' },
  { name: 'gmail', description: 'Gmail API 集成，支持读取、发送和管理邮件', category: '通信与邮件', downloads: '21.4k', url: 'https://clawhub.ai/byungkyu/gmail', author: '@byungkyu' },
  { name: 'himalaya', description: '通过 IMAP/SMTP 管理邮件的 CLI 工具', category: '通信与邮件', downloads: '23.9k', url: 'https://clawhub.ai/lamelas/himalaya', author: '@lamelas' },
  { name: 'imap-smtp-email', description: '通过 IMAP/SMTP 读取和发送邮件', category: '通信与邮件', downloads: '20k', url: 'https://clawhub.ai/gzlicanyi/imap-smtp-email', author: '@gzlicanyi' },
  { name: 'outlook-api', description: 'Microsoft Outlook API 集成，管理邮件、日历和联系人', category: '通信与邮件', downloads: '18.3k', url: 'https://clawhub.ai/byungkyu/outlook-api', author: '@byungkyu' },
  { name: 'agentmail', description: '为 AI 智能体设计的 API 优先邮件平台', category: '通信与邮件', downloads: '14.9k', url: 'https://clawhub.ai/adboio/agentmail', author: '@adboio' },
  { name: 'zoho-mail', description: 'Zoho Mail API 集成，发送和接收邮件', category: '通信与邮件', downloads: '11.8k', url: 'https://clawhub.ai/byungkyu/zoho-mail', author: '@byungkyu' },

  // 社交媒体
  { name: 'discord', description: '通过 discord 工具控制 Discord，发送消息、反应、管理频道', category: '社交媒体', downloads: '16.9k', url: 'https://clawhub.ai/steipete/discord', author: '@steipete' },
  { name: 'x-twitter', description: '与 Twitter/X 交互，阅读推文、搜索、发布、点赞和转发', category: '社交媒体', downloads: '14.3k', url: 'https://clawhub.ai/annettemekuro30/x-twitter', author: '@annettemekuro30' },
  { name: 'slack', description: '通过 slack 工具控制 Slack，包括消息反应和固定', category: '社交媒体', downloads: '22.8k', url: 'https://clawhub.ai/steipete/slack', author: '@steipete' },
  { name: 'xiaohongshu-mcp', description: '自动化小红书内容运营，发布笔记、搜索和分析', category: '社交媒体', downloads: '11.4k', url: 'https://clawhub.ai/Borye/xiaohongshu-mcp', author: '@Borye' },
  { name: 'moltbook-interact', description: '与 Moltbook 社交网络交互，发布、回复和浏览', category: '社交媒体', downloads: '14.6k', url: 'https://clawhub.ai/LunarCmd/moltbook-interact', author: '@LunarCmd' },

  // 生产力工具
  { name: 'notion', description: 'Notion API 创建和管理页面、数据库和块', category: '生产力工具', downloads: '44k', url: 'https://clawhub.ai/steipete/notion', author: '@steipete' },
  { name: 'obsidian', description: '与 Obsidian 保险库交互，管理纯 Markdown 笔记', category: '生产力工具', downloads: '38.6k', url: 'https://clawhub.ai/steipete/obsidian', author: '@steipete' },
  { name: 'trello', description: '通过 Trello REST API 管理看板、列表和卡片', category: '生产力工具', downloads: '20.2k', url: 'https://clawhub.ai/steipete/trello', author: '@steipete' },
  { name: 'clickup-api', description: 'ClickUp API 集成，管理任务、列表和项目', category: '生产力工具', downloads: '15.7k', url: 'https://clawhub.ai/byungkyu/clickup-api', author: '@byungkyu' },
  { name: 'asana-api', description: 'Asana API 集成，管理任务和项目', category: '生产力工具', downloads: '15.3k', url: 'https://clawhub.ai/byungkyu/asana-api', author: '@byungkyu' },
  { name: 'todoist', description: '管理 Todoist 中的任务和项目', category: '生产力工具', downloads: '12.9k', url: 'https://clawhub.ai/mjrussell/todoist', author: '@mjrussell' },
  { name: 'linear-api', description: 'Linear API 集成，使用 GraphQL 查询和管理问题', category: '生产力工具', downloads: '11.8k', url: 'https://clawhub.ai/byungkyu/linear-api', author: '@byungkyu' },
  { name: 'monday', description: 'Monday.com API 集成，管理看板和项目', category: '生产力工具', downloads: '12.4k', url: 'https://clawhub.ai/byungkyu/monday', author: '@byungkyu' },
  { name: 'calendly-api', description: 'Calendly API 集成，访问事件类型和预定事件', category: '生产力工具', downloads: '15.7k', url: 'https://clawhub.ai/byungkyu/calendly-api', author: '@byungkyu' },
  { name: 'apple-notes', description: '通过 memo CLI 管理 Apple Notes', category: '生产力工具', downloads: '17.1k', url: 'https://clawhub.ai/steipete/apple-notes', author: '@steipete' },
  { name: 'apple-reminders', description: '通过 remindctl CLI 管理 Apple 提醒事项', category: '生产力工具', downloads: '14.7k', url: 'https://clawhub.ai/steipete/apple-reminders', author: '@steipete' },

  // 日历与会议
  { name: 'caldav-calendar', description: '同步和查询 CalDAV 日历（iCloud、Google、Fastmail 等）', category: '日历与会议', downloads: '17k', url: 'https://clawhub.ai/Asleep123/caldav-calendar', author: '@Asleep123' },
  { name: 'google-meet', description: 'Google Meet API 集成，创建会议空间和管理参与者', category: '日历与会议', downloads: '15.8k', url: 'https://clawhub.ai/byungkyu/google-meet', author: '@byungkyu' },
  { name: 'fathom-api', description: 'Fathom API 集成，访问会议录音和转录', category: '日历与会议', downloads: '15.2k', url: 'https://clawhub.ai/byungkyu/fathom-api', author: '@byungkyu' },
  { name: 'gcalcli-calendar', description: '通过 gcalcli 访问 Google 日历', category: '日历与会议', downloads: '10.4k', url: 'https://clawhub.ai/lstpsche/gcalcli-calendar', author: '@lstpsche' },
  { name: 'zoho-calendar', description: 'Zoho Calendar API 集成，管理日历和事件', category: '日历与会议', downloads: '11.4k', url: 'https://clawhub.ai/byungkyu/zoho-calendar', author: '@byungkyu' },

  // API 集成
  { name: 'api-gateway', description: '连接 100+ API（Google、Microsoft、GitHub、Notion 等），支持托管 OAuth', category: 'API 集成', downloads: '35.5k', url: 'https://clawhub.ai/byungkyu/api-gateway', author: '@byungkyu' },
  { name: 'youtube-api-skill', description: 'YouTube Data API 集成，搜索视频和管理播放列表', category: 'API 集成', downloads: '21.3k', url: 'https://clawhub.ai/byungkyu/youtube-api-skill', author: '@byungkyu' },
  { name: 'github', description: '使用 gh CLI 与 GitHub 交互，管理 issue、PR 和工作流', category: 'API 集成', downloads: '78.1k', url: 'https://clawhub.ai/steipete/github', author: '@steipete' },
  { name: 'github-api', description: 'GitHub API 集成，托管 OAuth 访问仓库和用户', category: 'API 集成', downloads: '12.9k', url: 'https://clawhub.ai/byungkyu/github-api', author: '@byungkyu' },
  { name: 'stripe', description: 'Stripe API 集成，管理客户、订阅和支付', category: 'API 集成', downloads: '17.8k', url: 'https://clawhub.ai/byungkyu/stripe-api', author: '@byungkyu' },
  { name: 'salesforce-api', description: 'Salesforce CRM API 集成，使用 SOQL 查询记录', category: 'API 集成', downloads: '16.4k', url: 'https://clawhub.ai/byungkyu/salesforce-api', author: '@byungkyu' },
  { name: 'shopify', description: 'Shopify 集成（维护中）', category: 'API 集成', downloads: '16.8k', url: 'https://clawhub.ai/byungkyu/shopify', author: '@byungkyu' },
  { name: 'zoho-crm', description: 'Zoho CRM API 集成，管理潜在客户和联系人', category: 'API 集成', downloads: '11.8k', url: 'https://clawhub.ai/byungkyu/zoho-crm', author: '@byungkyu' },

  // 财务与股票
  { name: 'stock-analysis', description: '使用 Yahoo Finance 数据分析股票和加密货币', category: '财务与股票', downloads: '23.8k', url: 'https://clawhub.ai/udiedrichsen/stock-analysis', author: '@udiedrichsen' },
  { name: 'stock-market-pro', description: 'Yahoo Finance 驱动的股票分析技能，带图表和技术指标', category: '财务与股票', downloads: '16.5k', url: 'https://clawhub.ai/kys42/stock-market-pro', author: '@kys42' },
  { name: 'yahoo-finance', description: '获取股票价格、报价、财务数据、收益和分析师评级', category: '财务与股票', downloads: '13.1k', url: 'https://clawhub.ai/ajanraj/yahoo-finance', author: '@ajanraj' },

  // 文档处理
  { name: 'nano-pdf', description: '使用自然语言指令编辑 PDF 的 CLI 工具', category: '文档处理', downloads: '42.3k', url: 'https://clawhub.ai/steipete/nano-pdf', author: '@steipete' },
  { name: 'markdown-converter', description: '使用 markitdown 将文档转换为 Markdown 格式', category: '文档处理', downloads: '15.5k', url: 'https://clawhub.ai/steipete/markdown-convert', author: '@steipete' },
  { name: 'markdown-convert', description: '将网页转换为干净的 Markdown 用于 AI 工作流', category: '文档处理', downloads: '16.5k', url: 'https://clawhub.ai/joelchance/markdown-convert', author: '@joelchance' },
  { name: 'google-slides', description: 'Google Slides API 集成，创建演示文稿和幻灯片', category: '文档处理', downloads: '16.4k', url: 'https://clawhub.ai/byungkyu/google-slides', author: '@byungkyu' },
  { name: 'microsoft-excel', description: 'Microsoft Excel API 集成，读取和写入 Excel 工作簿', category: '文档处理', downloads: '13.9k', url: 'https://clawhub.ai/byungkyu/microsoft-excel', author: '@byungkyu' },

  // 媒体与娱乐
  { name: 'youtube-watcher', description: '获取和阅读 YouTube 视频转录', category: '媒体与娱乐', downloads: '24.9k', url: 'https://clawhub.ai/Michaelgathara/youtube-watcher', author: '@Michaelgathara' },
  { name: 'youtube-transcript', description: '获取和总结 YouTube 视频转录', category: '媒体与娱乐', downloads: '13.2k', url: 'https://clawhub.ai/xthezealot/youtube-transcript', author: '@xthezealot' },
  { name: 'openclaw-youtube-transcript', description: '通过提取字幕将 YouTube 视频转录为文本', category: '媒体与娱乐', downloads: '30.2k', url: 'https://clawhub.ai/YoavRez/openclaw-youtube-transcript', author: '@YoavRez' },
  { name: 'video-frames', description: '使用 ffmpeg 从视频提取帧或短片段', category: '媒体与娱乐', downloads: '21.2k', url: 'https://clawhub.ai/steipete/video-frames', author: '@steipete' },
  { name: 'spotify-player', description: '终端 Spotify 播放和搜索', category: '媒体与娱乐', downloads: '13.8k', url: 'https://clawhub.ai/steipete/spotify-player', author: '@steipete' },
  { name: 'remotion-video-toolkit', description: '使用 Remotion + React 进行程序化视频创建的完整工具包', category: '媒体与娱乐', downloads: '10.9k', url: 'https://clawhub.ai/shreefentsar/remotion-video-toolkit', author: '@shreefentsar' },

  // AI 工具
  { name: 'humanizer', description: '移除 AI 生成写作的痕迹，使文本更自然', category: 'AI 工具', downloads: '37.5k', url: 'https://clawhub.ai/biostartechnology/humanizer', author: '@biostartechnology' },
  { name: 'humanize-ai-text', description: '将 AI 生成的文本人性化以绕过检测', category: 'AI 工具', downloads: '26.9k', url: 'https://clawhub.ai/moltbro/humanize-ai-text', author: '@moltbro' },
  { name: 'skill-creator', description: '创建有效技能的指南，用于扩展 AI 能力', category: 'AI 工具', downloads: '28.1k', url: 'https://clawhub.ai/chindden/skill-creator', author: '@chindden' },
  { name: 'skill-vetter', description: 'AI 智能体的安全优先技能审核', category: 'AI 工具', downloads: '30.3k', url: 'https://clawhub.ai/spclaudehome/skill-vetter', author: '@spclaudehome' },
  { name: 'frontend-design', description: '创建生产级前端界面，具有高设计质量', category: 'AI 工具', downloads: '24.1k', url: 'https://clawhub.ai/steipete/frontend-design', author: '@steipete' },
  { name: 'ui-ux-pro-max', description: 'UI/UX 设计和实施指导，构建精美界面', category: 'AI 工具', downloads: '12.8k', url: 'https://clawhub.ai/xobi667/ui-ux-pro-max', author: '@xobi667' },
  { name: 'superdesign', description: '创建精美现代 UI 的专家前端设计指南', category: 'AI 工具', downloads: '15.8k', url: 'https://clawhub.ai/mpociot/superdesign', author: '@mpociot' },
  { name: 'openai-image-gen', description: '通过 OpenAI Images API 批量生成图像', category: 'AI 工具', downloads: '13.5k', url: 'https://clawhub.ai/steipete/openai-image-gen', author: '@steipete' },
  { name: 'nano-banana-pro', description: '使用 Gemini 3 Pro Image 生成/编辑图像', category: 'AI 工具', downloads: '37.6k', url: 'https://clawhub.ai/steipete/nano-banana-pro', author: '@steipete' },

  // 智能体与自动化
  { name: 'proactive-agent', description: '将 AI 智能体转变为主动伙伴，预测需求并持续改进', category: '智能体与自动化', downloads: '65.8k', url: 'https://clawhub.ai/halthelobster/proactive-agent', author: '@halthelobster' },
  { name: 'self-improving', description: '自我反思+自我批评+自我学习+自我组织，智能体评估和改进自己的工作', category: '智能体与自动化', downloads: '22.3k', url: 'https://clawhub.ai/ivangdavila/self-improving', author: '@ivangdavila' },
  { name: 'evolver', description: 'AI 智能体的自我进化引擎，分析运行时历史并应用改进', category: '智能体与自动化', downloads: '16.1k', url: 'https://clawhub.ai/autogame-17/evolver', author: '@autogame-17' },
  { name: 'capability-evolver', description: 'AI 智能体的自我进化引擎，识别改进并应用', category: '智能体与自动化', downloads: '10.9k', url: 'https://clawhub.ai/autogame-17/capability-evolver', author: '@autogame-17' },
  { name: 'automation-workflows', description: '设计和实施自动化工作流，节省时间并扩展运营', category: '智能体与自动化', downloads: '26.8k', url: 'https://clawhub.ai/JK-0001/automation-workflows', author: '@JK-0001' },
  { name: 'n8n-workflow-automation', description: '设计 n8n 工作流 JSON，带有强大触发器和错误处理', category: '智能体与自动化', downloads: '14.8k', url: 'https://clawhub.ai/KOwl64/n8n-workflow-automation', author: '@KOwl64' },
  { name: 'marketing-mode', description: '结合 23 个综合营销技能，涵盖策略、内容、SEO 和付费增长', category: '智能体与自动化', downloads: '15k', url: 'https://clawhub.ai/TheSethRose/marketing-mode', author: '@TheSethRose' },

  // 开发者工具
  { name: 'qmd', description: '本地搜索/索引 CLI（BM25 + 向量 + 重新排序），带 MCP 模式', category: '开发者工具', downloads: '17.3k', url: 'https://clawhub.ai/steipete/qmd', author: '@steipete' },
  { name: 'git-essentials', description: '基本的 Git 命令和工作流，用于版本控制', category: '开发者工具', downloads: '14.8k', url: 'https://clawhub.ai/Arnarsson/git-essentials', author: '@Arnarsson' },
  { name: 'docker-essentials', description: '基本的 Docker 命令和工作流，用于容器管理', category: '开发者工具', downloads: '16.8k', url: 'https://clawhub.ai/Arnarsson/docker-essentials', author: '@Arnarsson' },
  { name: 'mcporter', description: '使用 mcporter CLI 配置、认证和调用 MCP 服务器/工具', category: '开发者工具', downloads: '30.3k', url: 'https://clawhub.ai/steipete/mcporter', author: '@steipete' },
  { name: 'debug-pro', description: '提供 7 步调试协议，系统地识别和修复软件 bug', category: '开发者工具', downloads: '11.1k', url: 'https://clawhub.ai/cmanfre7/debug-pro', author: '@cmanfre7' },
  { name: 'data-analyst', description: '数据可视化、报告生成、SQL 查询和电子表格自动化', category: '开发者工具', downloads: '10.7k', url: 'https://clawhub.ai/oyi77/data-analyst', author: '@oyi77' },

  // 智能家居
  { name: 'sonoscli', description: '控制 Sonos 扬声器（发现/状态/播放/音量/分组）', category: '智能家居', downloads: '50k', url: 'https://clawhub.ai/steipete/sonoscli', author: '@steipete' },
  { name: 'home-assistant', description: '控制 Home Assistant 智能家居设备，运行自动化', category: '智能家居', downloads: '10.1k', url: 'https://clawhub.ai/iAhmadZain/home-assistant', author: '@iAhmadZain' },

  // 记忆与知识管理
  { name: 'elite-longterm-memory', description: '终极 AI 智能体记忆系统，WAL 协议 + 向量搜索 + 云备份', category: '记忆与知识管理', downloads: '23.2k', url: 'https://clawhub.ai/NextFrontierBuilds/elite-longterm-memory', author: '@NextFrontierBuilds' },
  { name: 'memory-setup', description: '启用和配置 Moltbot/Clawdbot 记忆搜索', category: '记忆与知识管理', downloads: '13.2k', url: 'https://clawhub.ai/jrbobbyhansen-pixel/memory-setup', author: '@jrbobbyhansen-pixel' },
  { name: 'memory-manager', description: '智能体的本地内存管理，压缩检测和自动快照', category: '记忆与知识管理', downloads: '11.8k', url: 'https://clawhub.ai/marmikcfc/memory-manager', author: '@marmikcfc' },
  { name: 'memory-hygiene', description: '审计、清理和优化 Clawdbot 的向量内存', category: '记忆与知识管理', downloads: '10.2k', url: 'https://clawhub.ai/dylanbaker24/memory-hygiene', author: '@dylanbaker24' },
  { name: 'byterover', description: 'AI 智能体的知识管理，存储和检索项目模式', category: '记忆与知识管理', downloads: '25.4k', url: 'https://clawhub.ai/byteroverinc/byterover', author: '@byteroverinc' },
  { name: 'session-logs', description: '使用 jq 搜索和分析会话日志', category: '记忆与知识管理', downloads: '14.6k', url: 'https://clawhub.ai/guogang1024/session-logs', author: '@guogang1024' },

  // 天气与资讯
  { name: 'weather', description: '获取当前天气和预报（无需 API 密钥）', category: '天气与资讯', downloads: '66.5k', url: 'https://clawhub.ai/steipete/weather', author: '@steipete' },
  { name: 'news-summary', description: '获取新闻更新和每日简报，创建语音摘要', category: '天气与资讯', downloads: '17.2k', url: 'https://clawhub.ai/joargp/news-summary', author: '@joargp' },
  { name: 'blogwatcher', description: '监控博客和 RSS/Atom 提要的更新', category: '天气与资讯', downloads: '21.3k', url: 'https://clawhub.ai/steipete/blogwatcher', author: '@steipete' },

  // 安全与工具
  { name: 'moltguard', description: 'OpenClaw 运行时安全插件，防止提示注入和数据泄露', category: '安全与工具', downloads: '13.8k', url: 'https://clawhub.ai/ThomasLWang/moltguard', author: '@ThomasLWang' },
  { name: '1password', description: '设置和使用 1Password CLI (op) 管理密码', category: '安全与工具', downloads: '13.6k', url: 'https://clawhub.ai/steipete/1password', author: '@steipete' },
  { name: 'auto-updater', description: '自动更新 Clawdbot 和所有已安装技能', category: '安全与工具', downloads: '31k', url: 'https://clawhub.ai/maximeprades/auto-updater', author: '@maximeprades' },

  // 其他工具
  { name: 'gemini', description: 'Gemini CLI 用于一次性问答、总结和生成', category: '其他工具', downloads: '18.9k', url: 'https://clawhub.ai/steipete/gemini', author: '@steipete' },
  { name: 'model-usage', description: '使用 CodexBar CLI 本地成本用法汇总每个模型的用量', category: '其他工具', downloads: '20.9k', url: 'https://clawhub.ai/steipete/model-usage', author: '@steipete' },
  { name: 'goplaces', description: '通过 goplaces CLI 查询 Google Places API', category: '其他工具', downloads: '12.8k', url: 'https://clawhub.ai/steipete/goplaces', author: '@steipete' },
  { name: 'tmux', description: '远程控制 tmux 会话，发送按键和抓取输出', category: '其他工具', downloads: '14k', url: 'https://clawhub.ai/steipete/tmux', author: '@steipete' },
  { name: 'sag', description: 'ElevenLabs 文本转语音，mac 风格 say UX', category: '其他工具', downloads: '14.8k', url: 'https://clawhub.ai/steipete/sag', author: '@steipete' },
  { name: 'peekaboo', description: '使用 Peekaboo CLI 捕获和自动化 macOS UI', category: '其他工具', downloads: '14.8k', url: 'https://clawhub.ai/steipete/peekaboo', author: '@steipete' },
  { name: 'desktop-control', description: '使用鼠标、键盘和屏幕控制的高级桌面自动化', category: '其他工具', downloads: '20k', url: 'https://clawhub.ai/matagul/desktop-control', author: '@matagul' },
  { name: 'openai-whisper', description: '本地语音转文本，使用 Whisper CLI（无需 API 密钥）', category: '其他工具', downloads: '34.9k', url: 'https://clawhub.ai/steipete/openai-whisper', author: '@steipete' },
  { name: 'free-ride', description: '管理来自 OpenRouter 的免费 AI 模型，自动排名和配置回退', category: '其他工具', downloads: '29.4k', url: 'https://clawhub.ai/Shaivpidadi/free-ride', author: '@Shaivpidadi' },
];

export const categories = [
  '搜索与研究',
  '浏览器自动化',
  '通信与邮件',
  '社交媒体',
  '生产力工具',
  '日历与会议',
  'API 集成',
  '财务与股票',
  '文档处理',
  '媒体与娱乐',
  'AI 工具',
  '智能体与自动化',
  '开发者工具',
  '智能家居',
  '记忆与知识管理',
  '天气与资讯',
  '安全与工具',
  '其他工具',
];
