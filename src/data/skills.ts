export interface Skill {
  name: string;
  description: string;
  category: string;
}

export const skills: Skill[] = [
  // 开发工具
  { name: 'codex', description: '运行 Codex CLI 进行代码分析和重构', category: '开发工具' },
  { name: 'skill-creator', description: '创建和管理 Claude Code 自定义技能', category: '开发工具' },
  { name: 'mcp-builder', description: '构建 MCP 服务器以扩展 AI 能力', category: '开发工具' },

  // 前端开发
  { name: 'frontend-design', description: '创建生产级前端界面和 UI 组件', category: '前端开发' },
  { name: 'artifacts-builder', description: '构建复杂的多组件 HTML artifacts', category: '前端开发' },
  { name: 'web-artifacts-builder', description: '使用 React/Tailwind 创建 HTML artifacts', category: '前端开发' },
  { name: 'ui-ux-pro-max', description: 'UI/UX 设计智能助手，支持 50+ 风格', category: '前端开发' },
  { name: 'web-design-guidelines', description: '审查 Web 界面是否符合最佳实践', category: '前端开发' },
  { name: 'theme-factory', description: '为演示文稿和文档应用主题样式', category: '前端开发' },
  { name: 'vercel-react-best-practices', description: 'Vercel React 性能优化指南', category: '前端开发' },

  // 设计工具
  { name: 'algorithmic-art', description: '使用 p5.js 创建算法艺术和生成艺术', category: '设计工具' },
  { name: 'canvas-design', description: '创建 PNG/PDF 格式的视觉艺术设计', category: '设计工具' },
  { name: 'brand-guidelines', description: '应用 Anthropic 官方品牌颜色和字体', category: '设计工具' },
  { name: 'baoyu-cover-image', description: '生成文章封面图片，支持多种风格', category: '设计工具' },
  { name: 'baoyu-slide-deck', description: '从内容生成专业幻灯片图片', category: '设计工具' },
  { name: 'baoyu-article-illustrator', description: '为文章自动配图，识别需要视觉辅助的位置', category: '设计工具' },
  { name: 'image-enhancer', description: '提升图片质量，增强分辨率和清晰度', category: '设计工具' },

  // 内容创作
  { name: 'baoyu-url-to-markdown', description: '将网页转换为 Markdown 格式', category: '内容创作' },
  { name: 'defuddle', description: '从网页提取干净的 Markdown 内容', category: '内容创作' },
  { name: 'content-research-writer', description: '辅助写作研究，添加引用和改进内容', category: '内容创作' },
  { name: 'doc-coauthoring', description: '协作文档写作、结构化和验证', category: '内容创作' },
  { name: 'humanizer', description: '移除 AI 生成写作的痕迹，使文章更自然', category: '内容创作' },
  { name: 'changelog-generator', description: '从 git 提交自动生成用户友好的变更日志', category: '内容创作' },

  // 效率工具
  { name: 'brainstorming', description: '创造性工作前的头脑风暴和需求探索', category: '效率工具' },
  { name: 'file-organizer', description: '智能整理文件和文件夹，清理重复文件', category: '效率工具' },
  { name: 'domain-name-brainstormer', description: '生成创意域名并检查可用性', category: '效率工具' },
  { name: 'raffle-winner-picker', description: '从列表中随机抽取获奖者', category: '效率工具' },
  { name: 'invoice-organizer', description: '自动整理发票和收据用于税务准备', category: '效率工具' },
  { name: 'template-skill', description: '模板技能创建工具', category: '效率工具' },
  { name: 'writing-plans', description: '多步骤任务规划和规格说明', category: '效率工具' },
  { name: 'systematic-debugging', description: '系统化调试方法和错误分析', category: '效率工具' },
  { name: 'test-driven-development', description: '测试驱动开发实现功能', category: '效率工具' },

  // 社交媒体
  { name: 'twitter-algorithm-optimizer', description: '分析并优化推文以获得最大曝光', category: '社交媒体' },
  { name: 'agent-reach', description: '搜索和交互社交媒体平台(X/Twitter, Reddit等)', category: '社交媒体' },
  { name: 'slack-gif-creator', description: '创建适合 Slack 的动画 GIF', category: '社交媒体' },
  { name: 'competitive-ads-extractor', description: '从广告库提取和分析竞品广告', category: '社交媒体' },

  // 文档工具
  { name: 'pdf', description: 'PDF  manipulation 提取、创建、合并文档', category: '文档工具' },
  { name: 'pptx', description: '创建、编辑和分析 PowerPoint 演示文稿', category: '文档工具' },
  { name: 'obsidian-cli', description: '与 Obsidian vault 交互管理笔记', category: '文档工具' },
  { name: 'obsidian-markdown', description: '创建和编辑 Obsidian 风格 Markdown', category: '文档工具' },
  { name: 'obsidian-bases', description: '创建和编辑 Obsidian Bases 数据库', category: '文档工具' },
  { name: 'json-canvas', description: '创建和编辑 JSON Canvas 文件', category: '文档工具' },

  // 外部服务集成
  { name: 'connect', description: '连接 Claude 到外部应用发送邮件、创建 issue', category: '外部服务' },
  { name: 'connect-apps', description: '连接外部应用如 Gmail、Slack、GitHub', category: '外部服务' },

  // 视频/媒体
  { name: 'video-downloader', description: '下载 YouTube 视频，支持多种质量格式', category: '视频/媒体' },
  { name: 'youtube-downloader-skill', description: 'YouTube 视频下载技能', category: '视频/媒体' },

  // 职业发展
  { name: 'lead-research-assistant', description: '识别潜在客户并提供联系策略', category: '职业发展' },
  { name: 'tailored-resume-generator', description: '根据职位描述生成定制简历', category: '职业发展' },
  { name: 'meeting-insights-analyzer', description: '分析会议记录提供沟通反馈', category: '职业发展' },
  { name: 'developer-growth-analysis', description: '分析编码模式并提供成长报告', category: '职业发展' },

  // 企业内部
  { name: 'internal-comms', description: '撰写企业内部通信、状态报告、会议纪要', category: '企业内部' },

  // 协作工作流
  { name: 'ccg-workflow', description: '协调 Coder 执行代码改动，Codex 审核质量', category: '协作工作流' },
  { name: 'gemini-collaboration', description: '调用 Gemini 专家进行架构设计和代码审查', category: '协作工作流' },
  { name: 'skill-share', description: '创建新技能并自动分享到 Slack', category: '协作工作流' },

  // 其他
  { name: 'using-superpowers', description: '会话开始时建立技能查找和使用方法', category: '其他' },
  { name: 'langsmith-fetch', description: '从 LangSmith 获取执行轨迹用于调试', category: '其他' },
  { name: 'webapp-testing', description: '使用 Playwright 测试本地 Web 应用', category: '其他' },
];

export const categories = [
  '开发工具',
  '前端开发',
  '设计工具',
  '内容创作',
  '效率工具',
  '社交媒体',
  '文档工具',
  '外部服务',
  '视频/媒体',
  '职业发展',
  '企业内部',
  '协作工作流',
  '其他',
];
