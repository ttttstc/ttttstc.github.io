import { useState, useEffect } from 'react';
import { Sparkles, Construction, BookOpen } from 'lucide-react';
import Markdown from 'react-markdown';

interface BlogArticle {
  slug: string;
  title: string;
  description: string;
}

const blogArticles: BlogArticle[] = [
  {
    slug: 'openclaw-gateway-architecture',
    title: 'Gateway 架构全解析',
    description: '掀开 OpenClaw 的神经中枢，理解 Gateway 的核心设计与消息路由机制',
  },
  {
    slug: 'openclaw-soul-user-memory',
    title: 'SOUL、USER、MEMORY 与主动机制',
    description: '深入理解 OpenClaw 核心架构设计，掌握代理行为的配置之道',
  },
  {
    slug: 'openclow-architecture-guide',
    title: '核心架构与 Agent 部署',
    description: '玩转 OpenClaw：技术框架、运作原理与完整部署步骤指南',
  },
];

const TechEdenPage = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'blog'>('blog');
  const [activeArticle, setActiveArticle] = useState<string>('openclaw-gateway-architecture');
  const [articleContent, setArticleContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (activeTab === 'blog') {
      setLoading(true);
      fetch(`/source/tech/${activeArticle}.md`)
        .then(res => res.text())
        .then(text => {
          setArticleContent(text);
          setLoading(false);
        })
        .catch(() => {
          setArticleContent('# 无法加载文章内容\n\n请稍后重试。');
          setLoading(false);
        });
    }
  }, [activeTab, activeArticle]);

  return (
    <div className="min-h-screen bg-lobster-dark text-white pt-24 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lobster-orange/20 text-lobster-orange text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            <span>技术分析</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            技术<span className="text-lobster-orange">实现</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            深入探索 OpenClaw 架构设计，理解 AI 助手背后的技术原理
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/5 rounded-full p-1 border border-white/10">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === 'architecture'
                  ? 'bg-lobster-orange text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              架构拆解
            </button>
            <button
              onClick={() => setActiveTab('blog')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === 'blog'
                  ? 'bg-lobster-orange text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              博客文章
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'architecture' ? (
          /* 架构拆解 - 待建设 */
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-24 h-24 rounded-full bg-lobster-orange/20 flex items-center justify-center mb-8">
              <Construction className="w-12 h-12 text-lobster-orange" />
            </div>
            <h2 className="text-3xl font-bold mb-4">建设中</h2>
            <p className="text-white/60 text-lg mb-2">精彩内容即将呈现</p>
            <p className="text-white/40 text-sm">尽情期待...</p>
          </div>
        ) : (
          /* 博客文章 */
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Left: Directory */}
              <div className="lg:col-span-1">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 sticky top-24">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-lobster-orange" />
                    文章目录
                  </h3>
                  <ul className="space-y-2">
                    {blogArticles.map((article) => (
                      <li key={article.slug}>
                        <button
                          onClick={() => setActiveArticle(article.slug)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                            activeArticle === article.slug
                              ? 'bg-lobster-orange text-white'
                              : 'text-white/70 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <div className="font-medium text-sm">{article.title}</div>
                          <div className={`text-xs mt-1 ${
                            activeArticle === article.slug ? 'text-white/80' : 'text-white/40'
                          }`}>
                            {article.description}
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Content */}
              <div className="lg:col-span-3">
                <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                  {loading ? (
                    <div className="flex items-center justify-center h-64">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-lobster-orange"></div>
                    </div>
                  ) : (
                    <div className="prose prose-invert max-w-none">
                      <Markdown
                        components={{
                          h1: ({ children }) => (
                            <h1 className="text-2xl font-bold text-white mt-6 mb-4 pb-2 border-b border-white/10">
                              {children}
                            </h1>
                          ),
                          h2: ({ children }) => (
                            <h2 className="text-xl font-semibold text-white mt-8 mb-4">{children}</h2>
                          ),
                          h3: ({ children }) => (
                            <h3 className="text-lg font-semibold text-lobster-orange mt-6 mb-3">{children}</h3>
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
                          blockquote: ({ children }) => (
                            <blockquote className="border-l-4 border-lobster-orange pl-4 my-4 text-white/60 italic">
                              {children}
                            </blockquote>
                          ),
                          strong: ({ children }) => (
                            <strong className="text-lobster-orange font-semibold">{children}</strong>
                          ),
                          hr: () => (
                            <hr className="border-white/10 my-8" />
                          ),
                          pre: ({ children }) => (
                            <pre className="bg-black/30 rounded-lg p-4 overflow-x-auto my-4 text-sm">
                              {children}
                            </pre>
                          ),
                          code: ({ children }) => (
                            <code className="bg-black/30 rounded px-1.5 py-0.5 text-sm text-lobster-orange">
                              {children}
                            </code>
                          ),
                        }}
                      >
                        {articleContent}
                      </Markdown>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechEdenPage;
