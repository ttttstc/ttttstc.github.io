import { useState, useEffect } from 'react';
import { Home, Github, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { lessons, type Course } from '../data/learn-cc-lessons';

// 青绿色+黑色配色系统
const COLORS = {
  bg: '#000000',
  bgSecondary: '#0A0A0A',
  bgTertiary: '#111111',
  border: '#1A1A1A',
  borderHover: '#2A2A2A',
  text: '#FAFAFA',
  textSecondary: '#B0B0B0',
  textMuted: '#666666',
  accent: '#00D9C0',      // 青绿色
  accentHover: '#00F5D8',
  accentMuted: '#0D4D47',  // 深青色背景
};

// 中英文标题映射
const titleMap: Record<string, { cn: string; en: string }> = {
  s00: { cn: '课程介绍', en: 'Introduction' },
  s01: { cn: 'Agent 循环', en: 'Agent Loop' },
  s02: { cn: '工具使用', en: 'Tool Use' },
  s03: { cn: '待办写入', en: 'TodoWrite' },
  s04: { cn: '子智能体', en: 'Subagents' },
  s05: { cn: '技能加载', en: 'Skills' },
  s06: { cn: '上下文压缩', en: 'Context Compact' },
  s07: { cn: '任务系统', en: 'Tasks' },
  s08: { cn: '后台任务', en: 'Background Tasks' },
  s09: { cn: '智能体团队', en: 'Agent Teams' },
  s10: { cn: '团队协议', en: 'Team Protocols' },
  s11: { cn: '自治智能体', en: 'Autonomous Agents' },
  s12: { cn: 'Worktree 隔离', en: 'Worktree Isolation' },
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
    const timer = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const togglePhase = (phase: number) => {
    setExpandedPhase(expandedPhase === phase ? null : phase);
  };

  const getTitle = (id: string) => titleMap[id] || { cn: id, en: id };

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
            className="flex items-center gap-2 transition-colors cursor-pointer hover:opacity-80"
            style={{ color: COLORS.textSecondary }}
          >
            <Home className="w-5 h-5" />
            <span>首页</span>
          </a>
          <div style={{ backgroundColor: COLORS.border }} className="w-px h-6" />
          <h1 className="text-lg font-semibold">
            Agent 入门教程
          </h1>
        </div>
        <a
          href="https://github.com/shareAI-lab/learn-claude-code"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: COLORS.textSecondary }}
          className="hover:text-white transition-colors cursor-pointer"
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Agent <span style={{ color: COLORS.accent }}>入门</span>教程
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
              className={`mb-6 transition-all duration-500 ease-out ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${phaseIndex * 100 + 200}ms` }}
            >
              {/* Phase Header */}
              <button
                onClick={() => togglePhase(Number(phase))}
                className="w-full flex items-center justify-between p-5 rounded-xl transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: COLORS.bgSecondary,
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="px-4 py-1.5 rounded-lg text-sm font-semibold"
                    style={{ backgroundColor: COLORS.accentMuted, color: COLORS.accent }}
                  >
                    Phase {phase}
                  </span>
                  <span style={{ color: COLORS.textSecondary }}>
                    {phaseCourses.map(c => getTitle(c.id).cn).join(' · ')}
                  </span>
                </div>
                {expandedPhase === Number(phase) ? (
                  <ChevronUp className="w-5 h-5" style={{ color: COLORS.textMuted }} />
                ) : (
                  <ChevronDown className="w-5 h-5" style={{ color: COLORS.textMuted }} />
                )}
              </button>

              {/* Stacked View Cards */}
              <div
                className={`grid gap-3 mt-4 overflow-hidden transition-all duration-500 ease-out ${
                  expandedPhase === Number(phase) ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="flex flex-col gap-3">
                  {phaseCourses.map((course, index) => {
                    const title = getTitle(course.id);
                    return (
                      <a
                        key={course.id}
                        href={`/learn-cc/${course.id}`}
                        className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:translate-x-2 cursor-pointer"
                        style={{
                          backgroundColor: COLORS.bgTertiary,
                          border: `1px solid ${COLORS.border}`,
                          borderLeft: `3px solid ${COLORS.accent}`,
                          transitionDelay: `${index * 50}ms`,
                        }}
                      >
                        {/* Hover effect */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                          style={{
                            background: `linear-gradient(90deg, ${COLORS.accentMuted}20 0%, transparent 100%)`,
                          }}
                        />

                        <div className="relative p-5 flex items-center justify-between">
                          {/* Left: ID and Title */}
                          <div className="flex items-center gap-4">
                            <span
                              className="text-xs font-mono px-2 py-1 rounded"
                              style={{ backgroundColor: COLORS.bgSecondary, color: COLORS.accent }}
                            >
                              {course.id.toUpperCase()}
                            </span>
                            <div>
                              <h3
                                className="text-base font-semibold group-hover:text-white transition-colors"
                                style={{ color: COLORS.textSecondary }}
                              >
                                {title.cn}
                              </h3>
                              <p style={{ color: COLORS.textMuted }} className="text-sm">
                                {title.en}
                              </p>
                            </div>
                          </div>

                          {/* Right: Arrow */}
                          <div className="flex items-center gap-3">
                            <p
                              className="text-xs italic hidden md:block"
                              style={{ color: COLORS.textMuted, maxWidth: '200px' }}
                            >
                              {course.motto}
                            </p>
                            <ArrowRight
                              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                              style={{ color: COLORS.accent }}
                            />
                          </div>
                        </div>
                      </a>
                    );
                  })}
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
          © 2026 泥巴猪的实验田 · Agent 入门教程
        </p>
      </footer>
    </div>
  );
}
