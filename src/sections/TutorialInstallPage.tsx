import { useState, useEffect } from 'react';
import { Sparkles, BookOpen, ChevronRight } from 'lucide-react';

// Article data - same as awesome tutorial
const articles = [
  // 基础入门
  { id: '01-basics-01-introduction', title: '第一章：认识OpenClaw', category: '基础入门' },
  { id: '01-basics-02-installation', title: '第二章：安装部署', category: '基础入门' },
  { id: '01-basics-03-quick-start', title: '第三章：快速开始', category: '基础入门' },
  // 核心功能
  { id: '02-core-04-file-management', title: '第四章：文件管理', category: '核心功能' },
  { id: '02-core-05-knowledge-management', title: '第五章：知识管理', category: '核心功能' },
  { id: '02-core-06-schedule-management', title: '第六章：日程管理', category: '核心功能' },
  { id: '02-core-07-automation-workflow', title: '第七章：自动化工作流', category: '核心功能' },
  // 进阶拓展
  { id: '03-advanced-08-skills-extension', title: '第八章：Skills扩展', category: '进阶拓展' },
  { id: '03-advanced-09-multi-platform-integration', title: '第九章：多平台接入', category: '进阶拓展' },
  { id: '03-advanced-10-api-integration', title: '第十章：API集成', category: '进阶拓展' },
  { id: '03-advanced-11-advanced-configuration', title: '第十一章：高级配置', category: '进阶拓展' },
  // 实战案例
  { id: '04-cases-12-personal-productivity', title: '第十二章：个人效率提升', category: '实战案例' },
  { id: '04-cases-13-advanced-automation', title: '第十三章：进阶自动化', category: '实战案例' },
  { id: '04-cases-14-creative-applications', title: '第十四章：创意应用', category: '实战案例' },
  { id: '04-cases-15-solo-entrepreneur-cases', title: '第十五章：一人企业案例', category: '实战案例' },
  // 附录
  { id: 'api-key-config-guide', title: '附录1：API密钥配置指南', category: '附录' },
  { id: 'config-file-structure', title: '附录2：配置文件结构', category: '附录' },
  { id: 'search-guide', title: '附录3：搜索指南', category: '附录' },
  { id: 'skills-ecosystem', title: '附录4：Skills生态系统', category: '附录' },
];

// Group by category
const categories = ['基础入门', '核心功能', '进阶拓展', '实战案例', '附录'];

const TutorialInstallPage = () => {
  const [activeArticle, setActiveArticle] = useState(articles[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getArticleUrl = (id: string) => `/source/tutorial/awesome/${id}.html`;

  return (
    <div className="min-h-screen bg-lobster-dark text-white">
      {/* Header */}
      <div className="pt-24 pb-6 border-b border-white/10">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lobster-orange/20 text-lobster-orange text-sm">
                <Sparkles className="w-4 h-4" />
                <span>教程中心</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold">
                OpenClaw <span className="text-lobster-orange">完整教程</span>
              </h1>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <BookOpen className="w-4 h-4" />
              <span>19篇教程 · 从入门到精通</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Sidebar + Content */}
      <div className="container-custom py-6">
        <div className="flex gap-6" style={{ height: 'calc(100vh - 220px)', minHeight: '600px' }}>
          {/* Left Sidebar - Article List */}
          <div
            className="w-80 flex-shrink-0 bg-white/5 rounded-2xl border border-white/10 overflow-hidden flex flex-col"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'all 0.5s ease'
            }}
          >
            <div className="p-4 border-b border-white/10">
              <h3 className="font-semibold text-white">教程目录</h3>
            </div>
            <div className="flex-1 overflow-y-auto p-2">
              {categories.map((category) => (
                <div key={category} className="mb-4">
                  <div className="px-3 py-2 text-xs font-semibold text-white/50 uppercase tracking-wider">
                    {category}
                  </div>
                  {articles
                    .filter((a) => a.category === category)
                    .map((article, idx) => (
                      <button
                        key={article.id}
                        onClick={() => setActiveArticle(article)}
                        className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${
                          activeArticle.id === article.id
                            ? 'bg-lobster-orange/20 text-lobster-orange border-l-2 border-lobster-orange'
                            : 'text-white/70 hover:bg-white/5 hover:text-white'
                        }`}
                        style={{
                          transitionDelay: `${idx * 50}ms`,
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible ? 'translateX(0)' : 'translateX(-10px)'
                        }}
                      >
                        <ChevronRight className={`w-3 h-3 flex-shrink-0 ${activeArticle.id === article.id ? 'text-lobster-orange' : 'text-white/30'}`} />
                        <span className="truncate">{article.title}</span>
                      </button>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Article Preview */}
          <div
            className="flex-1 bg-white/5 rounded-2xl border border-white/10 overflow-hidden"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
              transition: 'all 0.5s ease 0.2s'
            }}
          >
            <iframe
              src={getArticleUrl(activeArticle.id)}
              title={activeArticle.title}
              className="w-full h-full border-0"
              allow="accelerometer; ambient-light-sensor; autoplay; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-shift; magnetometer; microphone; midi; otp-autocomplete; payment; picture-in-picture; private-network-connection; sync-xhr; usb; vr; wake-lock; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialInstallPage;
