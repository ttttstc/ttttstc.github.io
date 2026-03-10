import { useEffect, useRef, useState } from 'react';
import { Clock, ArrowRight, Layers, Globe, Code, Shield, ChevronRight } from 'lucide-react';

interface Tutorial {
  tag: string;
  tagIcon: React.ElementType;
  title: string;
  description: string;
  readTime: string;
  url: string;
}

const tutorials: Tutorial[] = [
  { tag: '入门', tagIcon: Layers, title: 'OpenClaw是什么', description: '认识开源、自托管的AI Agent系统', readTime: '5 min', url: '/source/tutorial/01-openclaw-intro.html' },
  { tag: '架构', tagIcon: Layers, title: '整体架构', description: 'Gateway-Node-Channel三层架构详解', readTime: '8 min', url: '/source/tutorial/05-architecture.html' },
  { tag: '部署', tagIcon: Globe, title: '部署方式总览', description: '本地/Docker/云厂商一键部署对比', readTime: '6 min', url: '/source/tutorial/10-deployment.html' },
  { tag: '集成', tagIcon: Globe, title: '国际平台接入', description: 'Telegram/Discord/WhatsApp/Slack配置指南', readTime: '20 min', url: '/source/tutorial/16-intl-channels.html' },
  { tag: '集成', tagIcon: Globe, title: '国内平台接入', description: 'QQ/飞书/钉钉/企业微信配置指南', readTime: '20 min', url: '/source/tutorial/17-cn-channels.html' },
  { tag: '进阶', tagIcon: Code, title: 'Skills工作原理', description: '三层优先级与加载机制详解', readTime: '8 min', url: '/source/tutorial/19-skills.html' },
  { tag: '运维', tagIcon: Shield, title: 'Skills安全', description: '安全模型与模型配置指南', readTime: '15 min', url: '/source/tutorial/23-skills-security.html' },
];

const TutorialPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
              28章完整教程，从零开始搭建你的AI助手
            </p>
          </div>

          {/* More Button */}
          <a
            href="/source/tutorial/index.html"
            className="mt-6 md:mt-0 flex items-center gap-2 px-6 py-3 bg-lobster-orange rounded-full text-white hover:bg-lobster-orange/80 transition-all"
          >
            <span>查看全部28章</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Tutorial Cards Grid */}
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tutorials.map((tutorial, index) => {
            const TagIcon = tutorial.tagIcon;

            return (
              <a
                key={tutorial.title}
                href={tutorial.url}
                className={`group transition-all duration-600 block ${
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
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-lobster-orange transition-colors">
                    {tutorial.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed flex-1">
                    {tutorial.description}
                  </p>

                  {/* Read More */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="flex items-center gap-2 text-sm text-lobster-orange group-hover:gap-3 transition-all">
                      阅读教程
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TutorialPreview;
