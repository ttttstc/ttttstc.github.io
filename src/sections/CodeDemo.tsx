import { useEffect, useRef, useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

const codeLines = [
  { line: 1, content: '# 安装 Openclaw', type: 'comment' },
  { line: 2, content: 'curl -fsSL https://openclaw.ai/install.sh | bash', type: 'command' },
  { line: 3, content: '', type: 'empty' },
  { line: 4, content: '# 启动配置向导', type: 'comment' },
  { line: 5, content: 'openclaw onboarding', type: 'command' },
  { line: 6, content: '', type: 'empty' },
  { line: 7, content: '# 开始与你的 AI 助手对话', type: 'comment' },
  { line: 8, content: 'openclaw chat', type: 'command' },
];

const CodeDemo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedLines, setDisplayedLines] = useState<number>(0);
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (isVisible && displayedLines < codeLines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isVisible, displayedLines]);

  const handleCopy = () => {
    const code = codeLines
      .filter((line) => line.type !== 'empty')
      .map((line) => line.content)
      .join('\n');
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getLineClass = (type: string) => {
    switch (type) {
      case 'comment':
        return 'text-white/40';
      case 'command':
        return 'text-lobster-orange';
      default:
        return '';
    }
  };

  return (
    <section ref={sectionRef} className="section-padding bg-lobster-muted">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="tag-lobster mb-4">快速开始</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
            一行命令，即刻体验
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            无需复杂配置，几分钟内即可运行你的个人 AI 助手
          </p>
        </div>

        {/* Code Block */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="code-block border border-white/10">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-lobster-dark/50">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-white/40" />
                <span className="text-sm text-white/60">terminal</span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>已复制</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>复制</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm">
              {codeLines.map((line, index) => (
                <div
                  key={line.line}
                  className={`flex ${
                    index < displayedLines
                      ? 'opacity-100'
                      : 'opacity-0'
                  } transition-opacity duration-200`}
                >
                  <span className="inline-block w-8 text-white/30 select-none">
                    {line.line}
                  </span>
                  <span className={getLineClass(line.type)}>
                    {line.content}
                  </span>
                </div>
              ))}
              {/* Cursor */}
              <div className="flex mt-1">
                <span className="inline-block w-8" />
                <span className="w-2 h-5 bg-lobster-orange animate-pulse" />
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div
            className={`mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-800 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {[
              { label: '系统要求', value: 'Node.js 22+' },
              { label: '支持平台', value: 'macOS / Windows / Linux' },
              { label: '安装时间', value: '~ 5 分钟' },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center p-4 rounded-lg bg-lobster-dark/50 border border-white/5"
              >
                <div className="text-white/40 text-sm mb-1">{item.label}</div>
                <div className="text-white font-medium">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeDemo;
