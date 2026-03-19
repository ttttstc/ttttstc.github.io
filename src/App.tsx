import { useState, useEffect } from 'react';
import LandingPage from './sections/LandingPage';
import CatCafePage from './sections/CatCafePage';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Architecture from './sections/Architecture';
import TutorialPreview from './sections/TutorialPreview';
import CodeDemo from './sections/CodeDemo';
import Stats from './sections/Stats';
import Footer from './sections/Footer';
import SkillsPage from './sections/SkillsPage';
import TutorialInstallPage from './sections/TutorialInstallPage';
import DiaryPage from './sections/DiaryPage';
import WorkspacePage from './sections/WorkspacePage';
import TechEdenPage from './sections/TechEdenPage';
import SystemPromptsPage from './sections/SystemPromptsPage';
import DesignShowcasePage from './sections/DesignShowcasePage';
import LearnCCPage from './sections/LearnCCPage';

type PageType = 'landing' | 'cat-cafe' | 'prompts' | 'home' | 'skill' | 'tutorial' | 'diary' | 'workspace' | 'tech' | 'design-showcase' | 'learn-cc';

// 路由配置 - 路径到页面类型的映射
const ROUTE_MAPPINGS: Array<{ pattern: (path: string) => boolean; page: PageType }> = [
  // 精确匹配
  { pattern: (p) => p === '/' || p === '/index.html', page: 'landing' },
  { pattern: (p) => p === '/cat-cafe', page: 'cat-cafe' },
  { pattern: (p) => p === '/prompts', page: 'prompts' },
  { pattern: (p) => p === '/design-showcase', page: 'design-showcase' },
  { pattern: (p) => p === '/learn-cc' || p === '/lobster/learn', page: 'learn-cc' },
  { pattern: (p) => p === '/lobster' || p === '/lobster/', page: 'home' },
  { pattern: (p) => p === '/lobster/skill', page: 'skill' },
  { pattern: (p) => p === '/lobster/diary', page: 'diary' },
  { pattern: (p) => p === '/lobster/workspace', page: 'workspace' },
  { pattern: (p) => p === '/lobster/tech-eden', page: 'tech' },
  // 前缀匹配
  { pattern: (p) => p.startsWith('/lobster/tutorial') || p.startsWith('/docs/'), page: 'tutorial' },
  { pattern: (p) => p === '/skill', page: 'skill' },
  { pattern: (p) => p === '/tutorial' || p.startsWith('/docs/'), page: 'tutorial' },
  { pattern: (p) => p === '/diary', page: 'diary' },
  { pattern: (p) => p === '/workspace', page: 'workspace' },
  { pattern: (p) => p === '/tech-eden', page: 'tech' },
];

// 页面类型到路径的映射
const PATH_MAP: Record<PageType, string> = {
  landing: '/',
  'cat-cafe': '/cat-cafe',
  prompts: '/prompts',
  'design-showcase': '/design-showcase',
  'learn-cc': '/learn-cc',
  home: '/lobster',
  skill: '/lobster/skill',
  tutorial: '/lobster/tutorial',
  diary: '/lobster/diary',
  workspace: '/lobster/workspace',
  tech: '/lobster/tech-eden',
};

// 根据路径获取页面类型
const getPageFromPath = (path: string): PageType => {
  for (const route of ROUTE_MAPPINGS) {
    if (route.pattern(path)) {
      return route.page;
    }
  }
  return 'landing';
};

// 根据路径获取页面类型 (用于 SSR/初始化)
const getInitialPage = (): PageType => {
  if (typeof window === 'undefined') return 'landing';
  return getPageFromPath(window.location.pathname);
};

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>(getInitialPage);

  useEffect(() => {
    const handleNavigation = () => {
      setCurrentPage(getPageFromPath(window.location.pathname));
    };

    handleNavigation();
    window.addEventListener('popstate', handleNavigation);
    return () => window.removeEventListener('popstate', handleNavigation);
  }, []);

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.history.pushState({}, '', PATH_MAP[page]);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage />;
      case 'cat-cafe':
        return <CatCafePage />;
      case 'prompts':
        return <SystemPromptsPage />;
      case 'design-showcase':
        return <DesignShowcasePage />;
      case 'learn-cc':
        return <LearnCCPage />;
      case 'skill':
        return <SkillsPage />;
      case 'tutorial':
        return <TutorialInstallPage />;
      case 'diary':
        return <DiaryPage />;
      case 'workspace':
        return <WorkspacePage />;
      case 'tech':
        return <TechEdenPage />;
      default:
        return (
          <main>
            <Hero />
            <Features />
            <Architecture />
            <TutorialPreview />
            <CodeDemo />
            <Stats />
          </main>
        );
    }
  };

  // Landing, Cat Cafe, Prompts and Design Showcase pages have their own layout
  if (currentPage === 'landing' || currentPage === 'cat-cafe' || currentPage === 'prompts' || currentPage === 'design-showcase' || currentPage === 'learn-cc') {
    return <>{renderPage()}</>;
  }

  return (
    <div className="min-h-screen bg-lobster-dark text-white">
      <Navigation onNavigate={navigateTo} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
