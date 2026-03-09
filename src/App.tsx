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

type PageType = 'landing' | 'cat-cafe' | 'home' | 'skill' | 'tutorial' | 'diary' | 'workspace' | 'tech';

// Get initial page from URL without hydration mismatch
const getInitialPage = (): PageType => {
  if (typeof window === 'undefined') return 'landing';
  const path = window.location.pathname;

  // Root path shows landing page
  if (path === '/' || path === '/index.html') return 'landing';

  // Cat cafe
  if (path === '/cat-cafe') return 'cat-cafe';

  // Lobster project pages - current paths with /lobster prefix or direct paths
  if (path.startsWith('/lobster')) {
    const subPath = path.replace('/lobster', '') || '/';
    if (subPath === '/skill') return 'skill';
    if (subPath === '/tutorial' || subPath.startsWith('/docs/')) return 'tutorial';
    if (subPath === '/diary') return 'diary';
    if (subPath === '/workspace') return 'workspace';
    if (subPath === '/tech-eden') return 'tech';
    return 'home';
  }

  // Legacy paths without /lobster prefix
  if (path === '/skill') return 'skill';
  if (path === '/tutorial' || path.startsWith('/docs/')) return 'tutorial';
  if (path === '/diary') return 'diary';
  if (path === '/workspace') return 'workspace';
  if (path === '/tech-eden') return 'tech';

  return 'landing';
};

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>(getInitialPage);

  useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname;

      // Root path shows landing page
      if (path === '/' || path === '/index.html') {
        setCurrentPage('landing');
        return;
      }

      // Cat cafe
      if (path === '/cat-cafe') {
        setCurrentPage('cat-cafe');
        return;
      }

      // Lobster project pages
      if (path.startsWith('/lobster')) {
        const subPath = path.replace('/lobster', '') || '/';
        if (subPath === '/skill') setCurrentPage('skill');
        else if (subPath === '/tutorial' || subPath.startsWith('/docs/')) setCurrentPage('tutorial');
        else if (subPath === '/diary') setCurrentPage('diary');
        else if (subPath === '/workspace') setCurrentPage('workspace');
        else if (subPath === '/tech-eden') setCurrentPage('tech');
        else setCurrentPage('home');
        return;
      }

      // Legacy paths
      if (path === '/skill') setCurrentPage('skill');
      else if (path === '/tutorial' || path.startsWith('/docs/')) setCurrentPage('tutorial');
      else if (path === '/diary') setCurrentPage('diary');
      else if (path === '/workspace') setCurrentPage('workspace');
      else if (path === '/tech-eden') setCurrentPage('tech');
      else setCurrentPage('landing');
    };

    handleNavigation();
    window.addEventListener('popstate', handleNavigation);
    return () => window.removeEventListener('popstate', handleNavigation);
  }, []);

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    const pathMap: Record<PageType, string> = {
      landing: '/',
      'cat-cafe': '/cat-cafe',
      home: '/lobster',
      skill: '/lobster/skill',
      tutorial: '/lobster/tutorial',
      diary: '/lobster/diary',
      workspace: '/lobster/workspace',
      tech: '/lobster/tech-eden',
    };
    window.history.pushState({}, '', pathMap[page]);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage />;
      case 'cat-cafe':
        return <CatCafePage />;
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

  // Landing and Cat Cafe pages have their own layout
  if (currentPage === 'landing' || currentPage === 'cat-cafe') {
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
