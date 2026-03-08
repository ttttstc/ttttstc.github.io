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
  {
    slug: '5分钟安装openclaw',
    title: '5 分钟安装 OpenClaw',
    description: '5 分钟快速部署你的个人 AI 助手',
    readTime: '5 min',
  },
  {
    slug: '连接telegram机器人',
    title: '连接 Telegram 机器人',
    description: '配置 Telegram BotFather，获取 Token',
    readTime: '10 min',
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
