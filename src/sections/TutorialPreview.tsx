import { useEffect, useRef, useState } from 'react';
import { Clock, ArrowRight, BookOpen, Layers, MessageSquare, Code, Shield } from 'lucide-react';

interface Tutorial {
  tag: string;
  tagIcon: React.ElementType;
  title: string;
  description: string;
  readTime: string;
}

const tutorials: Tutorial[] = [
  {
    tag: '入门',
    tagIcon: BookOpen,
    title: '5 分钟安装 Openclaw',
    description: '一行命令完成安装，快速启动你的第一个 AI 代理',
    readTime: '5 min',
  },
  {
    tag: '集成',
    tagIcon: MessageSquare,
    title: '连接 Telegram 机器人',
    description: '配置 BotFather，获取 Token，让 AI 助手响应你的消息',
    readTime: '10 min',
  },
  {
    tag: '集成',
    tagIcon: Layers,
    title: 'WhatsApp 桥接设置',
    description: '通过 QR 码扫描连接 WhatsApp，实现消息自动化',
    readTime: '15 min',
  },
  {
    tag: '进阶',
    tagIcon: Code,
    title: '开发自定义技能',
    description: '学习技能开发框架，扩展 AI 助手的能力边界',
    readTime: '20 min',
  },
  {
    tag: '运维',
    tagIcon: Shield,
    title: '生产环境安全配置',
    description: '沙箱隔离、权限控制、审计日志，构建安全的 AI 环境',
    readTime: '15 min',
  },
];

const TutorialPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : scrollPosition + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });
      setScrollPosition(newPosition);
    }
  };

  return (
    <section
      id="tutorials"
      ref={sectionRef}
      className="section-padding bg-lobster-dark overflow-hidden"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="tag-lobster mb-4">学习资源</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              搭建教程
            </h2>
            <p className="text-white/60 text-lg max-w-xl">
              保姆级教程，从零开始搭建你的 AI 助手
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-full bg-lobster-muted border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-full bg-lobster-muted border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {/* Spacer for container alignment */}
        <div className="flex-shrink-0 w-0 lg:w-[calc((100vw-80rem)/2)]" />

        {tutorials.map((tutorial, index) => {
          const TagIcon = tutorial.tagIcon;
          
          return (
            <div
              key={tutorial.title}
              className={`flex-shrink-0 w-[340px] group transition-all duration-600 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="card-dark h-full flex flex-col">
                {/* Tag */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-lobster-orange bg-lobster-orange/10 rounded-full">
                    <TagIcon className="w-3 h-3" />
                    {tutorial.tag}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-white/40">
                    <Clock className="w-3 h-3" />
                    {tutorial.readTime}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-lobster-orange transition-colors">
                  {tutorial.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed flex-1">
                  {tutorial.description}
                </p>

                {/* Read More */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <button className="flex items-center gap-2 text-sm text-lobster-orange hover:gap-3 transition-all">
                    阅读教程
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {/* Spacer for container alignment */}
        <div className="flex-shrink-0 w-4 lg:w-[calc((100vw-80rem)/2)]" />
      </div>

      {/* Progress Indicator */}
      <div className="container-custom mt-8">
        <div className="flex justify-center gap-2">
          {tutorials.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === 0 ? 'bg-lobster-orange w-6' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorialPreview;
