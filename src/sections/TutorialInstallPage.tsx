import { useState, useEffect } from 'react';
import { Sparkles, ChevronRight, BookOpen } from 'lucide-react';
import Markdown from 'react-markdown';

interface TutorialItem {
  slug: string;
  title: string;
  description: string;
  readTime: string;
}

const tutorials: TutorialItem[] = [
  // 教程章节
  {
    slug: 'chapters/01-openclaw是什么',
    title: '01. OpenClaw 是什么',
    description: '认识 OpenClaw：开源、自托管的 AI Agent 系统',
    readTime: '5 min',
  },
  {
    slug: 'chapters/02-发展简史',
    title: '02. 发展简史',
    description: '从 0 到 27.9 万 Stars 的传奇增长历程',
    readTime: '5 min',
  },
  {
    slug: 'chapters/03-创始人故事',
    title: '03. 创始人故事',
    description: 'Peter Steinberger：从周末项目到全球最火开源项目',
    readTime: '5 min',
  },
  {
    slug: 'chapters/04-为什么这么火',
    title: '04. 为什么这么火',
    description: '增长数据与"养虾"文化现象分析',
    readTime: '8 min',
  },
  {
    slug: 'chapters/05-整体架构',
    title: '05. 整体架构',
    description: 'Gateway-Node-Channel 三层架构解析',
    readTime: '8 min',
  },
  {
    slug: 'chapters/06-记忆系统',
    title: '06. 记忆系统',
    description: '四层记忆架构：SOUL/TOOLS/USER/Session',
    readTime: '8 min',
  },
  {
    slug: 'chapters/07-agent工作区',
    title: '07. Agent 工作区',
    description: '文件系统目录结构与配置详解',
    readTime: '6 min',
  },
  {
    slug: 'chapters/08-session与用户识别',
    title: '08. Session 与用户识别',
    description: 'DM 配对、白名单、群组规则与隔离机制',
    readTime: '8 min',
  },
  {
    slug: 'chapters/09-设计哲学',
    title: '09. 设计哲学',
    description: 'Unix 哲学、极简设计、自我扩展能力',
    readTime: '10 min',
  },
  {
    slug: 'chapters/10-部署方式总览',
    title: '10. 部署方式总览',
    description: '本地/Docker/云厂商一键部署对比',
    readTime: '6 min',
  },
  {
    slug: 'chapters/11-本地安装',
    title: '11. 本地安装',
    description: 'npm/pnpm 安装与守护进程配置',
    readTime: '8 min',
  },
  {
    slug: 'chapters/12-docker部署',
    title: '12. Docker 部署',
    description: 'docker-compose 快速启动与镜像配置',
    readTime: '10 min',
  },
  {
    slug: 'chapters/13-国内云厂商一键部署',
    title: '13. 国内云厂商一键部署',
    description: '阿里云/腾讯云/百度云/火山引擎/扣子编程',
    readTime: '15 min',
  },
  {
    slug: 'chapters/14-首次配置',
    title: '14. 首次配置',
    description: 'Gateway 认证、模型 API Key 配置与更新',
    readTime: '10 min',
  },
  {
    slug: 'chapters/15-渠道概览',
    title: '15. 渠道概览',
    description: '20+ 消息平台一览与新手推荐',
    readTime: '6 min',
  },
  {
    slug: 'chapters/16-国际平台接入',
    title: '16. 国际平台接入',
    description: 'Telegram/Discord/WhatsApp/Slack/Signal/iMessage',
    readTime: '20 min',
  },
  {
    slug: 'chapters/17-国内平台接入',
    title: '17. 国内平台接入',
    description: 'QQ/飞书/钉钉/企业微信/微信个人号',
    readTime: '20 min',
  },
  {
    slug: 'chapters/18-远程访问',
    title: '18. 远程访问',
    description: 'Tailscale/SSH/Web UI 与 macOS 客户端',
    readTime: '8 min',
  },
  {
    slug: 'chapters/19-skills工作原理',
    title: '19. Skills 工作原理',
    description: '三层优先级与加载机制详解',
    readTime: '8 min',
  },
  {
    slug: 'chapters/20-clawhub技能市场',
    title: '20. ClawHub 技能市场',
    description: '13,729 个 Skills 的质量分析与筛选',
    readTime: '6 min',
  },
  {
    slug: 'chapters/21-热门skills推荐',
    title: '21. 热门 Skills 推荐',
    description: '必装 Top 10 技能与内置 55 个技能分类',
    readTime: '8 min',
  },
  {
    slug: 'chapters/22-自建skill指南',
    title: '22. 自建 Skill 指南',
    description: '开发自定义技能的完整教程',
    readTime: '10 min',
  },
  {
    slug: 'chapters/23-skills安全与模型配置',
    title: '23. Skills 安全与模型配置',
    description: '安全模型与国际/国产/本地模型配置指南',
    readTime: '15 min',
  },
];

const TutorialInstallPage = () => {
  const [activeTutorial, setActiveTutorial] = useState<string>('5分钟安装openclaw');
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/source/tutorial/${activeTutorial}.md`)
      .then(res => res.text())
      .then(text => {
        setContent(text);
        setLoading(false);
      })
      .catch(() => {
        setContent('# 无法加载教程内容\n\n请稍后重试。');
        setLoading(false);
      });
  }, [activeTutorial]);

  return (
    <div className="min-h-screen bg-lobster-dark text-white pt-24 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lobster-orange/20 text-lobster-orange text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            <span>教程中心</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            搭建 <span className="text-lobster-orange">教程</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            保姆级教程，从零开始搭建你的 AI 助手
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Tutorial List */}
            <div className="lg:col-span-1">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 sticky top-24">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-lobster-orange" />
                  教程目录
                </h3>
                <ul className="space-y-2">
                  {tutorials.map((tutorial) => (
                    <li key={tutorial.slug}>
                      <button
                        onClick={() => setActiveTutorial(tutorial.slug)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                          activeTutorial === tutorial.slug
                            ? 'bg-lobster-orange text-white'
                            : 'text-white/70 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <div className="font-medium">{tutorial.title}</div>
                        <div className="text-xs opacity-70">{tutorial.readTime}</div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
                {loading ? (
                  <div className="flex items-center justify-center h-64">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-lobster-orange"></div>
                  </div>
                ) : (
                  <Markdown
                    components={{
                      h1: ({ children }) => (
                        <h1 className="text-3xl font-bold text-white mt-8 mb-4">{children}</h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-white/10">{children}</h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-xl font-semibold text-white mt-6 mb-3">{children}</h3>
                      ),
                      p: ({ children }) => (
                        <p className="text-white/70 leading-relaxed mb-4">{children}</p>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">{children}</ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal list-inside text-white/70 mb-4 space-y-2">{children}</ol>
                      ),
                      li: ({ children }) => (
                        <li className="text-white/70">{children}</li>
                      ),
                      pre: ({ children }) => (
                        <pre className="bg-lobster-darker rounded-xl p-4 mb-4 overflow-x-auto border border-white/10">
                          {children}
                        </pre>
                      ),
                      code: ({ className, children }) => {
                        const isInline = !className;
                        if (isInline) {
                          return (
                            <code className="bg-white/10 text-lobster-orange px-2 py-1 rounded text-sm">
                              {children}
                            </code>
                          );
                        }
                        return (
                          <code className={className}>
                            {children}
                          </code>
                        );
                      },
                      table: ({ children }) => (
                        <div className="overflow-x-auto mb-6 rounded-xl border border-white/10">
                          <table className="w-full border-collapse bg-white/5">{children}</table>
                        </div>
                      ),
                      thead: ({ children }) => (
                        <thead className="bg-lobster-orange/20">{children}</thead>
                      ),
                      tr: ({ children }) => (
                        <tr className="border-b border-white/10">{children}</tr>
                      ),
                      th: ({ children }) => (
                        <th className="px-4 py-3 text-left text-white font-semibold whitespace-nowrap">{children}</th>
                      ),
                      td: ({ children }) => (
                        <td className="px-4 py-3 text-white/70">{children}</td>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-lobster-orange pl-4 my-4 text-white/60 italic">
                          {children}
                        </blockquote>
                      ),
                      strong: ({ children }) => (
                        <strong className="text-lobster-orange font-semibold">{children}</strong>
                      ),
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          className="text-lobster-orange hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {children}
                        </a>
                      ),
                    }}
                  >
                    {content}
                  </Markdown>
                )}
              </div>

              {/* Navigation */}
              <div className="mt-8 flex flex-wrap justify-between gap-4">
                <div></div>
                {activeTutorial === '5分钟安装openclaw' && (
                  <button
                    onClick={() => setActiveTutorial('连接telegram机器人')}
                    className="flex items-center gap-2 px-6 py-3 bg-lobster-orange rounded-full text-white hover:bg-lobster-orange/80 transition-all"
                  >
                    <span>下一章：连接 Telegram</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
                {activeTutorial === '连接telegram机器人' && (
                  <a
                    href="/#architecture"
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all"
                  >
                    <ChevronRight className="w-4 h-4 rotate-180" />
                    <span>了解架构</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialInstallPage;
