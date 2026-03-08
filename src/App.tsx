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

type PageType = 'home' | 'skill' | 'tutorial';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname;

      if (path === '/skill') {
        setCurrentPage('skill');
      } else if (path === '/tutorial' || path.startsWith('/docs/')) {
        setCurrentPage('tutorial');
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
    };
    window.history.pushState({}, '', pathMap[page]);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'skill':
        return <SkillsPage />;
      case 'tutorial':
        return <TutorialInstallPage />;
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
