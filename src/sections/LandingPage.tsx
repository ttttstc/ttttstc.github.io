import { Sparkles, ArrowRight, Coffee, Bug } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  status: 'ready' | 'coming';
  color: string;
}

const projects: Project[] = [
  {
    id: 'lobster',
    title: '小泥巴的进化历程',
    description: '从零开始搭建你的个人 AI 代理 —— 记录 Openclaw 的完整搭建之旅、架构设计与实战经验',
    icon: Bug,
    href: '/lobster',
    status: 'ready',
    color: '#FF6B35',
  },
  {
    id: 'cat-cafe',
    title: '猫猫咖啡厅',
    description: '一个关于猫咪的温馨空间，分享萌猫日常、养猫心得与云吸猫乐趣',
    icon: Coffee,
    href: '/cat-cafe',
    status: 'coming',
    color: '#9B59B6',
  },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-lobster-dark text-white">
      {/* Background Image - Tiled with 70% opacity */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: 'url(/source/pic/index-pic.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.7,
        }}
      />
      {/* Dark overlay for readability */}
      <div className="fixed inset-0 -z-10 bg-lobster-dark/50" />

      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">

        <div className="relative z-10 container-custom text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-lobster-orange/10 border border-lobster-orange/20 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-lobster-orange" />
            <span className="text-sm text-lobster-orange font-medium">持续进化中</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            泥巴猪的<span className="text-lobster-orange">实验田</span>
          </h1>

          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
            探索 AI 与技术的无限可能，记录从零到一的创造之旅
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="container-custom py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          选择你的<span className="text-lobster-orange">实验项目</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <a
                key={project.id}
                href={project.href}
                className="group relative overflow-hidden rounded-2xl transition-all hover:transform hover:scale-[1.02]"
                style={{
                  background: `linear-gradient(135deg, ${project.color}15 0%, ${project.color}05 100%)`,
                  border: `1px solid ${project.color}30`,
                }}
              >
                {/* Background Icon */}
                <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="w-64 h-64" />
                </div>

                <div className="relative p-8">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${project.color}20` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: project.color }} />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-lobster-orange transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-white/60 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2">
                    {project.status === 'ready' ? (
                      <>
                        <span className="text-lobster-orange font-medium">进入探索</span>
                        <ArrowRight className="w-4 h-4 text-lobster-orange group-hover:translate-x-1 transition-transform" />
                      </>
                    ) : (
                      <span className="text-white/40">即将上线 · 敬请期待</span>
                    )}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 py-8">
        <div className="container-custom text-center">
          <p className="text-white/40 text-sm">
            © 2026 泥巴猪的实验田 · Powered by Curiosity & AI
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
