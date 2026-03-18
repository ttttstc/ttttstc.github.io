import { Home, ExternalLink } from 'lucide-react';

// 样板间项目配置
const SHOWCASE_PROJECTS = [
  {
    id: 'newyorkover',
    title: 'NEWYORKOVER',
    description: '3D 杂志画廊 - 使用 Three.js 实现的沉浸式 3D 杂志堆叠效果',
    href: '/experiments/newyorkover.html',
    tags: ['Three.js', '3D', '交互设计'],
    color: '#EC4899',
  },
];

export default function DesignShowcasePage() {
  return (
    <div className="min-h-screen bg-lobster-dark text-white">
      {/* Header */}
      <header className="h-16 flex items-center justify-between px-6 sticky top-0 z-50" style={{ backgroundColor: '#0A0A0A', borderBottom: '1px solid #262626' }}>
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center gap-2" style={{ color: '#A1A1A1' }}>
            <Home className="w-5 h-5" />
          </a>
          <div style={{ backgroundColor: '#262626' }} className="w-px h-6" />
          <h1 className="text-lg font-semibold" style={{ fontFamily: 'Times New Roman, Times, serif' }}>设计样板间</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'Times New Roman, Times, serif', color: '#FAFAFA' }} className="text-4xl font-bold mb-4">DESIGN SHOWCASE</h2>
            <p style={{ color: '#A1A1A1' }} className="text-lg">归档前沿 UI/UX 设计实验与创意实现</p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 gap-8">
            {SHOWCASE_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden"
                style={{ backgroundColor: '#0A0A0A', border: '1px solid #262626' }}
              >
                {/* Preview Area */}
                <div className="relative h-[70vh] bg-black">
                  <iframe
                    src={project.href}
                    className="w-full h-full border-0"
                    title={project.title}
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>

                {/* Info Section */}
                <div className="p-6" style={{ borderTop: '1px solid #262626' }}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Times New Roman, Times, serif' }}>{project.title}</h3>
                      <p style={{ color: '#A1A1A1' }}>{project.description}</p>
                    </div>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
                      style={{ backgroundColor: project.color, color: '#fff' }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      新窗口打开
                    </a>
                  </div>

                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full"
                        style={{ backgroundColor: '#262626', color: '#A1A1A1' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="border-t border-white/10 py-8" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/40 text-sm">
            © 2026 泥巴猪的实验田 · 设计样板间
          </p>
        </div>
      </div>
    </div>
  );
}
