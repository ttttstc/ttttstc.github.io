import { useEffect, useRef, useState } from 'react';
import { MessageSquare, Cpu, Wrench, Cloud } from 'lucide-react';

interface Layer {
  icon: React.ElementType;
  title: string;
  items: string[];
  color: string;
}

const layers: Layer[] = [
  {
    icon: MessageSquare,
    title: '接口层',
    items: ['Telegram', '飞书', 'Discord', 'Slack'],
    color: '#FF6B35',
  },
  {
    icon: Cpu,
    title: '核心层',
    items: ['Agent Runtime', 'LLM Router', 'Memory Manager', 'Task Scheduler'],
    color: '#F7931E',
  },
  {
    icon: Wrench,
    title: '技能层',
    items: ['Browser Control', 'File System', 'Code Execution', 'API Integration'],
    color: '#FF6B35',
  },
  {
    icon: Cloud,
    title: '模型层',
    items: ['Claude', 'GPT-5', 'Gemini', 'DeepSeek', 'GLM', 'MiniMax', 'Kimi'],
    color: '#F7931E',
  },
];

const Architecture = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="architecture"
      ref={sectionRef}
      className="section-padding bg-lobster-muted"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="tag-lobster mb-4">系统架构</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
            架构设计
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Openclaw 的分层架构让系统稳定、可扩展
          </p>
        </div>

        {/* Architecture Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Architecture Diagram */}
          <div
            className={`relative transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden bg-lobster-dark border border-white/10">
              <img
                src="/assets/images/longxiajiagou.png"
                alt="OpenCLAW 架构图"
                className="w-full h-auto"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-lobster-dark/50 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right: Layer Details */}
          <div className="space-y-6">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              const isLayerVisible = isVisible;
              
              return (
                <div
                  key={layer.title}
                  className={`flex items-start gap-4 p-5 rounded-xl bg-lobster-dark/50 border border-white/10 hover:border-white/20 transition-all duration-500 ${
                    isLayerVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 200}ms` }}
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${layer.color}20` }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: layer.color }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {layer.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {layer.items.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-white/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Architecture Benefits */}
        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-800 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { label: '模块化设计', desc: '各层独立，易于扩展和维护' },
            { label: '高可扩展性', desc: '插件化架构，功能无限延伸' },
            { label: '稳定可靠', desc: '分层隔离，故障不影响整体' },
          ].map((item) => (
            <div
              key={item.label}
              className="text-center p-6 rounded-xl bg-lobster-dark/30 border border-white/5"
            >
              <h4 className="text-white font-medium mb-2">{item.label}</h4>
              <p className="text-white/50 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
