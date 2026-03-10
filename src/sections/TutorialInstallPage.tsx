import { useState, useEffect } from 'react';
import { Sparkles, ChevronRight, BookOpen, ArrowRight } from 'lucide-react';
import Markdown from 'react-markdown';

interface TutorialItem {
  slug: string;
  title: string;
  description: string;
  readTime: string;
}

const tutorials: TutorialItem[] = [
  { slug: '01-openclaw-intro', title: '01. OpenClaw是什么', description: '认识OpenClaw：开源、自托管的AI Agent系统', readTime: '5 min' },
  { slug: '02-history', title: '02. 发展简史', description: '从0到27.9万Stars的传奇增长历程', readTime: '5 min' },
  { slug: '03-creator', title: '03. 创始人故事', description: 'Peter Steinberger：从周末项目到全球最火开源项目', readTime: '5 min' },
  { slug: '04-why-popular', title: '04. 为什么这么火', description: '增长数据与"养虾"文化现象分析', readTime: '8 min' },
  { slug: '05-architecture', title: '05. 整体架构', description: 'Gateway-Node-Channel三层架构解析', readTime: '8 min' },
  { slug: '06-memory', title: '06. 记忆系统', description: '四层记忆架构：SOUL/TOOLS/USER/Session', readTime: '8 min' },
  { slug: '07-workspace', title: '07. Agent工作区', description: '文件系统目录结构与配置详解', readTime: '6 min' },
  { slug: '08-sessions', title: '08. Session与用户识别', description: 'DM配对，白名单、群组规则与隔离机制', readTime: '8 min' },
  { slug: '09-philosophy', title: '09. 设计哲学', description: 'Unix哲学、极简设计、自我扩展能力', readTime: '10 min' },
  { slug: '10-deployment', title: '10. 部署方式总览', description: '本地/Docker/云厂商一键部署对比', readTime: '6 min' },
  { slug: '11-local-install', title: '11. 本地安装', description: 'npm/pnpm安装与守护进程配置', readTime: '8 min' },
  { slug: '12-docker', title: '12. Docker部署', description: 'docker-compose快速启动与镜像配置', readTime: '10 min' },
  { slug: '13-cloud', title: '13. 国内云厂商一键部署', description: '阿里云/腾讯云/百度云/火山引擎', readTime: '15 min' },
  { slug: '14-config', title: '14. 首次配置', description: 'Gateway认证、模型API Key配置与更新', readTime: '10 min' },
  { slug: '15-channels', title: '15. 渠道概览', description: '20+消息平台一览与新手推荐', readTime: '6 min' },
  { slug: '16-intl-channels', title: '16. 国际平台接入', description: 'Telegram/Discord/WhatsApp/Slack/Signal/iMessage', readTime: '20 min' },
  { slug: '17-cn-channels', title: '17. 国内平台接入', description: 'QQ/飞书/钉钉/企业微信/微信个人号', readTime: '20 min' },
  { slug: '18-remote', title: '18. 远程访问', description: 'Tailscale/SSH/Web UI与macOS客户端', readTime: '8 min' },
  { slug: '19-skills原理', title: '19. Skills工作原理', description: '三层优先级与加载机制详解', readTime: '8 min' },
  { slug: '20-clawhub', title: '20. ClawHub技能市场', description: '13729个Skills的质量分析与筛选', readTime: '6 min' },
  { slug: '21-top-skills', title: '21. 热门Skills推荐', description: '必装Top10技能与内置55个技能分类', readTime: '8 min' },
  { slug: '22-create-skill', title: '22. 自建Skill指南', description: '开发自定义技能的完整教程', readTime: '10 min' },
  { slug: '23-skills-security', title: '23. Skills安全', description: '安全模型与国际/国产/本地模型配置指南', readTime: '15 min' },
  { slug: '24-providers', title: '24. 模型提供商总览', description: 'Anthropic/OpenAI/Google/Ollama', readTime: '6 min' },
  { slug: '25-intl-models', title: '25. 国际模型配置', description: 'Claude/GPT/Gemini配置详解', readTime: '8 min' },
  { slug: '26-cn-models', title: '26. 国产模型配置', description: '通义/DeepSeek/豆包/GLM配置', readTime: '8 min' },
  { slug: '27-local-models', title: '27. 本地模型', description: 'Ollama本地部署与模型推荐', readTime: '6 min' },
  { slug: '28-security-model', title: '28. 安全模型', description: '安全架构与最佳实践', readTime: '10 min' },
];

const TutorialInstallPage = () => {
  const [activeTutorial, setActiveTutorial] = useState<string>('01-openclaw-intro');
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
            完整 <span className="text-lobster-orange">教程</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            从入门到精通，28章完整教程体系
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
                <ul className="space-y-2 max-h-[600px] overflow-y-auto scrollbar-hide">
                  {tutorials.map((tutorial) => (
                    <li key={tutorial.slug}>
                      <button
                        onClick={() => setActiveTutorial(tutorial.slug)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all text-sm ${
                          activeTutorial === tutorial.slug
                            ? 'bg-lobster-orange text-white'
                            : 'text-white/70 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {tutorial.title}
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
              <div className="mt-8 flex justify-between items-center">
                <div>
                  {tutorials.findIndex(t => t.slug === activeTutorial) > 0 && (
                    <button
                      onClick={() => {
                        const idx = tutorials.findIndex(t => t.slug === activeTutorial);
                        if (idx > 0) setActiveTutorial(tutorials[idx - 1].slug);
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all"
                    >
                      <ArrowRight className="w-4 h-4 rotate-180" />
                      <span>上一章</span>
                    </button>
                  )}
                </div>
                <div>
                  {tutorials.findIndex(t => t.slug === activeTutorial) < tutorials.length - 1 && (
                    <button
                      onClick={() => {
                        const idx = tutorials.findIndex(t => t.slug === activeTutorial);
                        if (idx < tutorials.length - 1) setActiveTutorial(tutorials[idx + 1].slug);
                      }}
                      className="flex items-center gap-2 px-6 py-3 bg-lobster-orange rounded-full text-white hover:bg-lobster-orange/80 transition-all"
                    >
                      <span>下一章</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialInstallPage;
