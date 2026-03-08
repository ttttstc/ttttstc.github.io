import { Sparkles, Construction } from 'lucide-react';

const TechEdenPage = () => {
  return (
    <div className="min-h-screen bg-lobster-dark text-white pt-24 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lobster-orange/20 text-lobster-orange text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            <span>技术分析</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            技术<span className="text-lobster-orange">实现</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            深入探索 OpenClaw 架构设计，理解 AI 助手背后的技术原理
          </p>
        </div>

        {/* Under Construction */}
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-24 h-24 rounded-full bg-lobster-orange/20 flex items-center justify-center mb-8">
            <Construction className="w-12 h-12 text-lobster-orange" />
          </div>
          <h2 className="text-3xl font-bold mb-4">建设中</h2>
          <p className="text-white/60 text-lg mb-2">精彩内容即将呈现</p>
          <p className="text-white/40 text-sm">尽情期待...</p>
        </div>
      </div>
    </div>
  );
};

export default TechEdenPage;
