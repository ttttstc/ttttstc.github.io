import { useState, useEffect } from 'react';
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

type PageType = 'home' | 'skill' | 'tutorial' | 'diary' | 'workspace' | 'tech';

// Get initial page from URL without hydration mismatch
const getInitialPage = (): PageType => {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname;
  if (path === '/skill') return 'skill';
  if (path === '/tutorial' || path.startsWith('/docs/')) return 'tutorial';
  if (path === '/diary') return 'diary';
  if (path === '/workspace') return 'workspace';
  if (path === '/tech-eden') return 'tech';
  return 'home';
};

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>(getInitialPage);

  useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname;

      if (path === '/skill') {
        setCurrentPage('skill');
      } else if (path === '/tutorial' || path.startsWith('/docs/')) {
        setCurrentPage('tutorial');
      } else if (path === '/diary') {
        setCurrentPage('diary');
      } else if (path === '/workspace') {
        setCurrentPage('workspace');
      } else if (path === '/tech-eden') {
        setCurrentPage('tech');
      } else {
        setCurrentPage('home');
      }
    };

    handleNavigation();
    window.addEventListener('popstate', handleNavigation);
    return () => window.removeEventListener('popstate', handleNavigation);
  }, []);

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    const pathMap: Record<PageType, string> = {
      home: '/',
      skill: '/skill',
      tutorial: '/tutorial',
      diary: '/diary',
      workspace: '/workspace',
      tech: '/tech-eden',
    };
    window.history.pushState({}, '', pathMap[page]);
  };

  const renderPage = () => {
    switch (currentPage) {
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

  return (
    <div className="min-h-screen bg-lobster-dark text-white">
      <Navigation onNavigate={navigateTo} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
