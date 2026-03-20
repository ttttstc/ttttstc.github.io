import { useState, useEffect } from 'react';
import { Home, Github, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { lessons, type Course } from '../data/learn-cc-lessons';

// 颜色系统
const COLORS = {
  bg: '#000000',
  bgSecondary: '#0A0A0A',
  bgTertiary: '#141414',
  border: '#262626',
  borderHover: '#404040',
  text: '#FAFAFA',
  textSecondary: '#A1A1A1',
  textMuted: '#6B6B6B',
  accent: '#FF6B35',
  accentHover: '#FF8C5A',
};

// 按 Phase 分组
const getCoursesByPhase = () => {
  const phases: Record<number, Course[]> = {};
  lessons.forEach(course => {
    if (!phases[course.phase]) {
      phases[course.phase] = [];
    }
    phases[course.phase].push(course);
  });
  return phases;
};

export default function LearnCCPage() {
  const [loaded, setLoaded] = useState(false);
  const [expandedPhase, setExpandedPhase] = useState<number | null>(0);
  const phases = getCoursesByPhase();

  useEffect(() => {
    // 延迟触发加载动画
    const timer = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const togglePhase = (phase: number) => {
    setExpandedPhase(expandedPhase === phase ? null : phase);
  };

  return (
    <div style={{ backgroundColor: COLORS.bg }} className="min-h-screen text-white">
      {/* Header */}
      <header
        style={{
          backgroundColor: COLORS.bgSecondary,
          borderBottom: `1px solid ${COLORS.border}`,
        }}
        className="h-16 flex items-center justify-between px-6 sticky top-0 z-50"
      >
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="flex items-center gap-2 transition-colors"
            style={{ color: COLORS.textSecondary }}
          >
            <Home className="w-5 h-5" />
            <span>首页</span>
          </a>
          <div style={{ backgroundColor: COLORS.border }} className="w-px h-6" />
          <h1 className="text-lg font-semibold" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
            Agent 入门教程
          </h1>
        </div>
        <a
          href="https://github.com/shareAI-lab/learn-claude-code"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: COLORS.textSecondary }}
          className="hover:text-white transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
      </header>

      {/* Hero */}
      <section
        className={`py-20 px-6 transition-all duration-700 ease-out ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            style={{ fontFamily: 'Times New Roman, Times, serif' }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Agent <span style={{ color: COLORS.accent }}>Mastery</span> Journey
          </h2>
          <p style={{ color: COLORS.textSecondary }} className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            从零掌握 AI Agent 的 12 堂课 · 基于 Claude Code 的系统化学习路径
          </p>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
            style={{ backgroundColor: `${COLORS.accent}15`, color: COLORS.accent }}
          >
            <span>点击章节卡片开始学习</span>
          </div>
        </div>
      </section>

      {/* Phase Sections */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          {Object.entries(phases).map(([phase, phaseCourses], phaseIndex) => (
            <div
              key={phase}
              className={`mb-4 transition-all duration-500 ease-out ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${phaseIndex * 100 + 200}ms` }}
            >
              {/* Phase Header */}
              <button
                onClick={() => togglePhase(Number(phase))}
                className="w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300"
                style={{
                  backgroundColor: COLORS.bgSecondary,
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="px-3 py-1 rounded-full text-sm font-semibold"
                    style={{ backgroundColor: `${COLORS.accent}20`, color: COLORS.accent }}
                  >
                    Phase {phase}
                  </span>
                  <span style={{ color: COLORS.textSecondary }}>
                    {phaseCourses.map(c => c.title).join(' · ')}
                  </span>
                </div>
                {expandedPhase === Number(phase) ? (
                  <ChevronUp className="w-5 h-5" style={{ color: COLORS.textMuted }} />
                ) : (
                  <ChevronDown className="w-5 h-5" style={{ color: COLORS.textMuted }} />
                )}
              </button>

              {/* Course Cards Grid */}
              <div
                className={`grid gap-4 mt-4 overflow-hidden transition-all duration-500 ease-out ${
                  expandedPhase === Number(phase) ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {phaseCourses.map((course, index) => (
                    <a
                      key={course.id}
                      href={`/learn-cc/${course.id}`}
                      className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02]"
                      style={{
                        backgroundColor: COLORS.bgTertiary,
                        border: `1px solid ${COLORS.border}`,
                        transitionDelay: `${index * 50}ms`,
                      }}
                    >
                      {/* Hover glow effect */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                          boxShadow: `inset 0 0 0 1px ${COLORS.accent}40, 0 0 40px ${COLORS.accent}15`,
                        }}
                      />

                      <div className="relative p-5">
                        {/* ID Badge */}
                        <div className="flex items-center justify-between mb-3">
                          <span
                            className="text-xs font-mono px-2 py-1 rounded"
                            style={{ backgroundColor: COLORS.bgSecondary, color: COLORS.textMuted }}
                          >
                            {course.id.toUpperCase()}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className="text-lg font-semibold mb-1 group-hover:text-lobster-orange transition-colors"
                          style={{ fontFamily: 'Times New Roman, Times, serif' }}
                        >
                          {course.title}
                        </h3>
                        <p style={{ color: COLORS.textSecondary }} className="text-sm mb-3">
                          {course.subtitle}
                        </p>

                        {/* Motto */}
                        <p
                          className="text-xs italic mb-4"
                          style={{ color: COLORS.textMuted, borderLeft: `2px solid ${COLORS.accent}`, paddingLeft: '0.75rem' }}
                        >
                          {course.motto}
                        </p>

                        {/* Arrow indicator */}
                        <div className="flex items-center gap-2" style={{ color: COLORS.accent }}>
                          <span className="text-sm font-medium">进入学习</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{ borderTop: `1px solid ${COLORS.border}` }}
        className="py-8 text-center"
      >
        <p style={{ color: COLORS.textMuted }} className="text-sm">
          © 2026 泥巴猪的实验田 · Agent Mastery Journey
        </p>
      </footer>
    </div>
  );
}
