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

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'skill'>('home');

  useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname;

      if (path === '/skill') {
        setCurrentPage('skill');
      } else {
        setCurrentPage('home');
      }
    };

    handleNavigation();
    window.addEventListener('popstate', handleNavigation);
    return () => window.removeEventListener('popstate', handleNavigation);
  }, []);

  const navigateTo = (page: 'home' | 'skill') => {
    setCurrentPage(page);
    if (page === 'skill') {
      window.history.pushState({}, '', '/skill');
    } else {
      window.history.pushState({}, '', '/');
    }
  };

  return (
    <div className="min-h-screen bg-lobster-dark text-white">
      <Navigation onNavigate={navigateTo} />
      {currentPage === 'skill' ? (
        <SkillsPage />
      ) : (
        <main>
          <Hero />
          <Features />
          <Architecture />
          <TutorialPreview />
          <CodeDemo />
          <Stats />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;
