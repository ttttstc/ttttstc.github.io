import { Github, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { label: '首页', href: '#hero' },
      { label: '特性', href: '#features' },
      { label: '架构', href: '#architecture' },
      { label: '教程', href: '#tutorials' },
    ],
    resources: [
      { label: '官方文档', href: 'https://docs.openclaw.ai', external: true },
      { label: 'GitHub', href: 'https://github.com/openclaw/openclaw', external: true },
      { label: '社区论坛', href: '#', external: true },
      { label: 'Discord', href: '#', external: true },
    ],
  };

  return (
    <footer className="bg-lobster-darker border-t border-white/10">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🦞</span>
              <span className="text-xl font-semibold text-white">
                龙虾历险记
              </span>
            </a>
            <p className="text-white/50 max-w-sm mb-6 leading-relaxed">
              记录 Openclaw 搭建和体验之旅，分享个人 AI 助手的架构设计、安装教程与实战经验。
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/openclaw/openclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/ttttstc2025"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-medium mb-4">导航</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-lobster-orange transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-medium mb-4">资源</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-white/50 hover:text-lobster-orange transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm flex items-center gap-1">
            © {currentYear} 龙虾历险记. Built with{' '}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and 🦞
          </p>
          <p className="text-white/30 text-sm">
            Powered by Openclaw · Inspired by Perplexity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
