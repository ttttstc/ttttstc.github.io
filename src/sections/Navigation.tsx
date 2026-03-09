import { useState, useEffect } from 'react';
import { Menu, X, Github, Home } from 'lucide-react';

type NavigationProps = {
  onNavigate?: (page: 'home' | 'skill' | 'tutorial' | 'diary' | 'workspace' | 'tech') => void;
};

const Navigation = ({ onNavigate }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; href: string; isRoute?: boolean; isAnchor?: boolean; routeName?: 'home' | 'skill' | 'tutorial' | 'diary' | 'workspace' | 'tech' }[] = [
    { label: '首页', href: '/lobster', routeName: 'home' },
    { label: '特性', href: '/lobster/#features', isAnchor: true },
    { label: '教程', href: '/lobster/tutorial', isRoute: true, routeName: 'tutorial' },
    { label: '工作室', href: '/lobster/workspace', isRoute: true, routeName: 'workspace' },
    { label: '日记', href: '/lobster/diary', isRoute: true, routeName: 'diary' },
    { label: '技能', href: '/lobster/skill', isRoute: true, routeName: 'skill' },
    { label: '技术分析', href: '/lobster/tech-eden', isRoute: true, routeName: 'tech' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault();
    if (link.routeName && onNavigate) {
      onNavigate(link.routeName);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-lobster-dark/90 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with Back to Landing */}
          <div className="flex items-center gap-4">
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}
              className="flex items-center gap-1 text-white/50 hover:text-lobster-orange transition-colors"
              title="返回实验田"
            >
              <Home className="w-4 h-4" />
            </a>
            <a
              href="/lobster"
              onClick={(e) => { e.preventDefault(); onNavigate?.('home'); }}
              className="flex items-center gap-2 group"
            >
              <span className="text-2xl">🦞</span>
              <span className="font-semibold text-white group-hover:text-lobster-orange transition-colors">
                小泥巴的进化历程
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/openclaw/openclaw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="/lobster/tutorial"
              className="btn-primary text-sm py-2.5 px-5"
            >
              开始搭建
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a
                href="/"
                onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}
                className="flex items-center gap-2 text-white/50 hover:text-lobster-orange transition-colors py-2"
              >
                <Home className="w-4 h-4" />
                <span>返回实验田</span>
              </a>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors py-2"
                  onClick={(e) => handleLinkClick(e, link)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://github.com/openclaw/openclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors py-2"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
