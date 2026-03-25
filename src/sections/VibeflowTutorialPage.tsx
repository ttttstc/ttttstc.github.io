import { ArrowLeft, ArrowRight, Target, Zap, Shield, Layers, Code, CheckCircle, TestTube, Rocket } from 'lucide-react';
import { chapters } from '../data/vibeflow-tutorials';

const COLORS = {
  bg: '#000000',
  bgSecondary: '#0A0A0A',
  bgTertiary: '#111111',
  border: '#1A1A1A',
  text: '#FAFAFA',
  textSecondary: '#B0B0B0',
  textMuted: '#666666',
  accent: '#6366F1',
};

const PHASE_COLORS = [
  '#D4A853', '#5B9AAD', '#8B7AA6', '#6AAF8C',
  '#B08580', '#5EADB4', '#6366F1',
];

const SKILL_COLOR = '#9B8AAD';

const phaseIcons = [Target, Zap, Shield, Layers, Code, CheckCircle, TestTube];

const VibeflowTutorialPage = () => {
  const getPhaseColor = (chapter: typeof chapters[0]) => {
    if (chapter.isSkill) return SKILL_COLOR;
    return PHASE_COLORS[chapter.phase] || PHASE_COLORS[0];
  };

  const getPhaseIcon = (chapter: typeof chapters[0]) => {
    if (chapter.isSkill) return Rocket;
    return phaseIcons[chapter.phase] || phaseIcons[0];
  };

  const getPhaseLabel = (chapter: typeof chapters[0]) => {
    if (chapter.isSkill) return 'Skill';
    return `Phase ${chapter.phase}`;
  };

  return (
    <div style={{ backgroundColor: COLORS.bg }} className="min-h-screen text-white">
      {/* Header */}
      <header
        className="h-16 flex items-center justify-between px-6 sticky top-0 z-50"
        style={{ backgroundColor: COLORS.bgSecondary, borderBottom: `1px solid ${COLORS.border}` }}
      >
        <div className="flex items-center gap-4">
          <a href="/vibeflow" className="flex items-center gap-2 transition-colors hover:opacity-80" style={{ color: COLORS.textSecondary }}>
            <ArrowLeft className="w-5 h-5" />
            <span>返回</span>
          </a>
          <div style={{ backgroundColor: COLORS.border }} className="w-px h-6" />
          <span className="text-lg font-semibold">教程</span>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            VibeFlow <span style={{ color: COLORS.accent }}>教程</span>
          </h1>
          <p className="text-xl text-white/60">7 个阶段，23 个 Skill，从入门到精通</p>
        </div>
      </section>

      {/* 阶段概览 */}
      <section className="py-8 px-6" style={{ backgroundColor: COLORS.bgSecondary }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 overflow-x-auto pb-4">
            {chapters.map((chapter) => {
              const color = getPhaseColor(chapter);
              return (
                <div
                  key={chapter.id}
                  className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30` }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                  <span className="text-sm font-medium" style={{ color }}>{getPhaseLabel(chapter)}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 章节列表 */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {chapters.map((chapter) => {
              const color = getPhaseColor(chapter);
              const Icon = getPhaseIcon(chapter);
              const label = getPhaseLabel(chapter);
              return (
                <a
                  key={chapter.id}
                  href={`/vibeflow/tutorial/${chapter.id}`}
                  className="block p-6 rounded-xl transition-all hover:scale-[1.01]"
                  style={{ backgroundColor: COLORS.bgTertiary, border: `1px solid ${COLORS.border}` }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${color}20` }}
                    >
                      <Icon className="w-7 h-7" style={{ color }} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="px-2 py-0.5 rounded text-xs font-medium"
                          style={{ backgroundColor: `${color}25`, color }}
                        >
                          {label}
                        </span>
                        <h3 className="text-xl font-bold" style={{ color: COLORS.text }}>{chapter.title}</h3>
                      </div>

                      <p className="text-white/50 text-sm mb-3">{chapter.subtitle}</p>
                      <p className="text-white/60 leading-relaxed">{chapter.description}</p>

                      <div className="mt-4 flex items-center gap-2">
                        <span
                          className="text-sm italic"
                          style={{ color, borderLeft: `2px solid ${color}`, paddingLeft: '0.75rem' }}
                        >
                          "{chapter.motto}"
                        </span>
                      </div>
                    </div>

                    <div className="flex-shrink-0 self-center">
                      <ArrowRight className="w-5 h-5 text-white/30" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 导航 */}
      <footer className="py-6 px-6 border-t" style={{ borderColor: COLORS.border }}>
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a
            href="/vibeflow"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
            style={{ color: COLORS.textSecondary }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回主页</span>
          </a>
          <a
            href="/vibeflow/evolution"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
            style={{ color: PHASE_COLORS[0] }}
          >
            <span>查看演进日记</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default VibeflowTutorialPage;
