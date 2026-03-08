import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Architecture from './sections/Architecture';
import TutorialPreview from './sections/TutorialPreview';
import CodeDemo from './sections/CodeDemo';
import Stats from './sections/Stats';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-lobster-dark text-white">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Architecture />
        <TutorialPreview />
        <CodeDemo />
        <Stats />
      </main>
      <Footer />
    </div>
  );
}

export default App;
