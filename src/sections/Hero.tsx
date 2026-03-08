import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Sparkles, Terminal } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-lobster-darker"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-gradient-dark opacity-50" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lobster-orange/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-lobster-gold/10 rounded-full blur-[100px] animate-pulse animation-delay-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Tag */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 bg-lobster-orange/10 border border-lobster-orange/20 rounded-full mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Sparkles className="w-4 h-4 text-lobster-orange" />
              <span className="text-sm text-lobster-orange font-medium">
                个人 AI 助手搭建记录
              </span>
            </div>

            {/* Main Title */}
            <h1 
              className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              龙虾历险记
            </h1>

            {/* Subtitle */}
            <p 
              className={`text-2xl md:text-3xl font-medium animated-gradient-text mb-6 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Openclaw Adventures
            </p>

            {/* Description */}
            <p 
              className={`text-lg text-white/70 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              从零开始搭建你的个人 AI 代理 —— 记录 Openclaw 的完整搭建之旅、架构设计与实战经验
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a href="#tutorials" className="btn-primary w-full sm:w-auto">
                <Terminal className="w-4 h-4 mr-2" />
                开始探索
              </a>
              <a href="#features" className="btn-secondary w-full sm:w-auto">
                了解更多
              </a>
            </div>
          </div>

          {/* Right: Lobster Image */}
          <div 
            className={`flex-1 relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-lobster opacity-20 blur-[80px] rounded-full scale-75" />
              
              {/* Image container */}
              <div className="relative animate-float">
                <img
                  src="/lobster-hero.png"
                  alt="Openclaw Lobster Mascot"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToFeatures}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors animate-bounce-subtle"
      >
        <span className="text-xs">向下滚动</span>
        <ArrowDown className="w-5 h-5" />
      </button>
    </section>
  );
};

export default Hero;
