import { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';

type NavigationProps = {
  onNavigate?: (page: 'home' | 'skill' | 'tutorial') => void;
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

  const navLinks: { label: string; href: string; isRoute?: boolean; isAnchor?: boolean; routeName?: 'home' | 'skill' | 'tutorial' }[] = [
    { label: '首页', href: '/', routeName: 'home' },
    { label: '教程', href: '/tutorial', isRoute: true, routeName: 'tutorial' },
    { label: '技能', href: '/skill', isRoute: true, routeName: 'skill' },
  ];

  const handleLinkClick = (link: typeof navLinks[0]) => {
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
          {/* Logo */}
          <a href="/" onClick={() => onNavigate?.('home')} className="flex items-center gap-2 group">
            <span className="text-2xl">🦞</span>
            <span className="font-semibold text-white group-hover:text-lobster-orange transition-colors">
              龙虾历险记
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link)}
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
              href="#tutorials"
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
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors py-2"
                  onClick={() => handleLinkClick(link)}
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
