import { useEffect, useRef, useState } from 'react';
import { Server, MessageCircle, Puzzle, Brain, Code, Shield } from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Server,
    title: '完全本地化',
    description: '数据完全存储在本地，隐私安全有保障。支持 macOS、Windows、Linux 多平台运行。',
  },
  {
    icon: MessageCircle,
    title: '消息应用集成',
    description: '无缝连接 WhatsApp、Telegram、Discord、Slack，让 AI 助手融入你的日常沟通。',
  },
  {
    icon: Puzzle,
    title: '模块化技能',
    description: '通过插件系统扩展功能，浏览器控制、文件管理、代码执行，无所不能。',
  },
  {
    icon: Brain,
    title: '智能记忆',
    description: '记住你的偏好和历史对话，越用越懂你的个人 AI 助手。',
  },
  {
    icon: Code,
    title: '开源生态',
    description: '基于开源社区驱动，18万+ GitHub Stars，持续迭代更新。',
  },
  {
    icon: Shield,
    title: '安全沙箱',
    description: '内置沙箱隔离和权限控制，确保 AI 操作在你的掌控之中。',
  },
];

const Features = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && index !== -1) {
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="section-padding bg-lobster-dark">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="tag-lobster mb-4">核心特性</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
            为什么选择 Openclaw？
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            一个开源、本地化、可扩展的个人 AI 助手平台
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleItems.has(index);
            
            return (
              <div
                key={feature.title}
                ref={(el) => { itemRefs.current[index] = el; }}
                className={`card-dark group transition-all duration-600 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-lobster flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-black" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
