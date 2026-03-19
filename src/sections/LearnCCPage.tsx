import { useState, useEffect } from 'react';
import { Home, Github, ArrowRight, CheckCircle, Lock, PlayCircle } from 'lucide-react';
import { courses, getProgress, type Course } from '../data/learn-cc-courses';

// 颜色系统 - 与现有页面一致
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

export default function LearnCCPage() {
  const [loaded, setLoaded] = useState(false);
  const progress = getProgress();

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const getStatusIcon = (status: Course['status']) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-5 h-5" />;
      case 'current': return <PlayCircle className="w-5 h-5" />;
      case 'locked': return <Lock className="w-5 h-5" />;
    }
  };

  const getStatusColor = (status: Course['status']) => {
    switch (status) {
      case 'completed': return '#22C55E';
      case 'current': return COLORS.accent;
      case 'locked': return COLORS.textMuted;
    }
  };

  return (
    <div style={{ backgroundColor: COLORS.bg }} className="min-h-screen text-white">
      {/* Header */}
      <header style={{ backgroundColor: COLORS.bgSecondary, borderBottom: `1px solid ${COLORS.border}` }} className="h-16 flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center gap-2" style={{ color: COLORS.textSecondary }}>
            <Home className="w-5 h-5" />
            <span>首页</span>
          </a>
          <div style={{ backgroundColor: COLORS.border }} className="w-px h-6" />
          <h1 className="text-lg font-semibold" style={{ fontFamily: 'Times New Roman, Times, serif' }}>Agent 入门教程</h1>
        </div>
        <a href="https://github.com/shareAI-lab/learn-claude-code" target="_blank" rel="noopener noreferrer" style={{ color: COLORS.textSecondary }} className="hover:text-white transition-colors">
          <Github className="w-5 h-5" />
        </a>
      </header>

      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 style={{ fontFamily: 'Times New Roman, Times, serif' }} className="text-4xl md:text-5xl font-bold mb-4">
            Agent <span style={{ color: COLORS.accent }}>Mastery</span> Journey
          </h2>
          <p style={{ color: COLORS.textSecondary }} className="text-lg mb-8">
            从零掌握 AI Agent 的 12 堂课 · 构建你的第一个智能助手
          </p>

          {/* Progress */}
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full" style={{ backgroundColor: COLORS.bgTertiary, border: `1px solid ${COLORS.border}` }}>
            <div style={{ color: COLORS.textSecondary }} className="text-sm">学习进度</div>
            <div className="flex items-center gap-2">
              <div className="w-32 h-2 rounded-full overflow-hidden" style={{ backgroundColor: COLORS.bgSecondary }}>
                <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${(progress.completed / progress.total) * 100}%`, backgroundColor: COLORS.accent }} />
              </div>
              <span style={{ color: COLORS.accent }} className="font-semibold">{progress.completed}/{progress.total}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className={`relative overflow-hidden rounded-xl transition-all duration-500 cursor-pointer hover:-translate-y-1 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{
                  backgroundColor: COLORS.bgTertiary,
                  border: `1px solid ${COLORS.border}`,
                  transitionDelay: `${index * 0.05}s`,
                }}
              >
                {/* Status & Phase */}
                <div className="absolute top-4 right-4" style={{ color: getStatusColor(course.status) }}>{getStatusIcon(course.status)}</div>
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 text-xs rounded-full" style={{ backgroundColor: `${COLORS.accent}20`, color: COLORS.accent }}>Phase {course.phase}</span>
                </div>

                {/* Content */}
                <div className="p-6 pt-16">
                  <h3 style={{ fontFamily: 'Times New Roman, Times, serif' }} className="text-xl font-bold mb-2">{course.id.toUpperCase()}</h3>
                  <h4 className="text-lg font-semibold mb-1">{course.title}</h4>
                  <p style={{ color: COLORS.textSecondary }} className="text-sm mb-4">{course.subtitle}</p>
                  <p className="text-xs italic leading-relaxed pl-3" style={{ color: COLORS.textMuted, borderLeft: `2px solid ${getStatusColor(course.status)}` }}>"{course.motto}"</p>

                  {/* Button */}
                  <div className="mt-6 flex items-center gap-2" style={{ color: course.status === 'locked' ? COLORS.textMuted : COLORS.accent }}>
                    <span className="text-sm font-medium">
                      {course.status === 'completed' ? '复习' : course.status === 'current' ? '开始学习' : '敬请期待'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" style={{ boxShadow: `inset 0 0 0 1px ${COLORS.accent}, 0 0 30px ${COLORS.accent}20` }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${COLORS.border}` }} className="py-8 text-center">
        <p style={{ color: COLORS.textMuted }} className="text-sm">© 2026 泥巴猪的实验田 · Agent Mastery Journey</p>
      </footer>
    </div>
  );
}
