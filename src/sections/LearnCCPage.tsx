import { useState, useEffect, useRef } from 'react';
import { Home, Github, ArrowRight } from 'lucide-react';
import { lessons } from '../data/learn-cc-lessons';

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
  accent: '#00D9C0',
  accentHover: '#00F5D8',
  accentMuted: '#0D4D47',
  phases: [
    '#FF6B6B', // Phase 0 - 红色
    '#00D9C0', // Phase 1 - 青色
    '#FFD93D', // Phase 2 - 黄色
    '#6BCB77', // Phase 3 - 绿色
    '#4D96FF', // Phase 4 - 蓝色
  ],
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

const getTitle = (id: string) => titleMap[id] || { cn: id, en: id };

// Phase 名称和描述
const phaseInfo: Record<number, { name: string; desc: string }> = {
  0: { name: '概述', desc: '模型即 Agent' },
  1: { name: '基础', desc: '循环与工具' },
  2: { name: '规划与知识', desc: '思考与记忆' },
  3: { name: '持久化', desc: '任务与后台' },
  4: { name: '团队协作', desc: '多 Agent 协作' },
};

export default function LearnCCPage() {
  const [loaded, setLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const startScrollTop = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  // 滚轮滚动处理
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const newProgress = Math.max(0, Math.min(1, scrollProgress + e.deltaY * 0.001));
      setScrollProgress(newProgress);

      // 根据进度计算当前索引
      const newIndex = Math.round(newProgress * (lessons.length - 1));
      setActiveIndex(newIndex);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [scrollProgress]);

  // 拖拽处理
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startY.current = e.clientY;
    startScrollTop.current = scrollProgress;
    containerRef.current && (containerRef.current.style.cursor = 'grabbing');
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const deltaY = startY.current - e.clientY;
    const newProgress = Math.max(0, Math.min(1, startScrollTop.current + deltaY * 0.002));
    setScrollProgress(newProgress);
    const newIndex = Math.round(newProgress * (lessons.length - 1));
    setActiveIndex(newIndex);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    containerRef.current && (containerRef.current.style.cursor = 'grab');
  };

  const handleProgressClick = (index: number) => {
    setActiveIndex(index);
    setScrollProgress(index / (lessons.length - 1));
  };

  const currentLesson = lessons[activeIndex];
  const currentPhase = currentLesson?.phase || 0;
  const phaseColor = COLORS.phases[currentPhase] || COLORS.accent;

  return (
    <div style={{ backgroundColor: COLORS.bg }} className="min-h-screen text-white overflow-hidden">
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
          <h1 className="text-lg font-semibold">Agent 入门教程</h1>
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

      {/* Phase Progress Bar */}
      <div
        style={{
          backgroundColor: COLORS.bgSecondary,
          borderBottom: `1px solid ${COLORS.border}`,
          paddingTop: '60px',
        }}
        className="pb-4 px-6"
      >
        {/* Phase Labels */}
        <div className="flex justify-between mb-3 max-w-4xl mx-auto">
          {Object.entries(phaseInfo).map(([phase, info]) => {
            const phaseNum = Number(phase);
            const isActive = currentPhase >= phaseNum;
            const isCurrent = currentPhase === phaseNum;
            return (
              <div
                key={phase}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => {
                  const firstIndex = lessons.findIndex(l => l.phase === phaseNum);
                  if (firstIndex >= 0) handleProgressClick(firstIndex);
                }}
              >
                <div
                  className="w-3 h-3 rounded-full mb-2 transition-all duration-300"
                  style={{
                    backgroundColor: isActive ? COLORS.phases[phaseNum] : COLORS.border,
                    boxShadow: isCurrent ? `0 0 10px ${COLORS.phases[phaseNum]}` : 'none',
                  }}
                />
                <span
                  className="text-xs font-medium"
                  style={{
                    color: isCurrent ? COLORS.phases[phaseNum] : COLORS.textMuted,
                  }}
                >
                  {info.name}
                </span>
                <span
                  className="text-xs"
                  style={{ color: COLORS.textMuted }}
                >
                  {info.desc}
                </span>
              </div>
            );
          })}
        </div>

        {/* Progress Line */}
        <div className="max-w-4xl mx-auto relative">
          {/* Background line */}
          <div
            className="h-1 rounded-full absolute top-0 left-0 right-0"
            style={{ backgroundColor: COLORS.border }}
          />
          {/* Phase sections */}
          <div className="h-1 rounded-full absolute top-0 left-0 flex">
            {[0, 1, 2, 3, 4].map((phase) => {
              const phaseLessons = lessons.filter(l => l.phase === phase);
              const widthPercent = (phaseLessons.length / lessons.length) * 100;
              return (
                <div
                  key={phase}
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${widthPercent}%`,
                    backgroundColor: currentPhase >= phase ? COLORS.phases[phase] : COLORS.border,
                  }}
                />
              );
            })}
          </div>
          {/* Progress indicator */}
          <div
            className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full border-2 border-black transition-all duration-300"
            style={{
              left: `${(activeIndex / (lessons.length - 1)) * 100}%`,
              backgroundColor: phaseColor,
              boxShadow: `0 0 15px ${phaseColor}`,
            }}
          />
        </div>

        {/* Chapter Dots */}
        <div className="flex justify-center gap-1 mt-3">
          {lessons.map((lesson, index) => {
            const isActive = index === activeIndex;
            const lessonPhaseColor = COLORS.phases[lesson.phase] || COLORS.accent;
            return (
              <button
                key={lesson.id}
                onClick={() => handleProgressClick(index)}
                className="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: isActive ? lessonPhaseColor : COLORS.borderHover,
                  transform: isActive ? 'scale(1.5)' : 'scale(1)',
                }}
                title={`${lesson.id}: ${getTitle(lesson.id).cn}`}
              />
            );
          })}
        </div>
      </div>

      {/* Main Content - Stacked Cards with Scroll */}
      <div
        ref={containerRef}
        className={`relative cursor-grab transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ height: 'calc(100vh - 180px)' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Background Cards (Stacked Effect) */}
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="relative w-full max-w-3xl" style={{ height: '500px' }}>
            {lessons.map((lesson, index) => {
              const title = getTitle(lesson.id);
              const isActive = index === activeIndex;
              const offset = index - activeIndex;

              let translateY = 0;
              let scale = 1;
              let opacity = 0;
              let zIndex = 0;
              let blur = 0;

              if (isActive) {
                translateY = 0;
                scale = 1;
                opacity = 1;
                zIndex = lessons.length;
              } else if (Math.abs(offset) <= 3) {
                translateY = offset * 80;
                scale = 1 - Math.abs(offset) * 0.1;
                opacity = 1 - Math.abs(offset) * 0.25;
                zIndex = lessons.length - Math.abs(offset);
                blur = Math.abs(offset) * 2;
              }

              const lessonPhaseColor = COLORS.phases[lesson.phase] || COLORS.accent;

              return (
                <a
                  key={lesson.id}
                  href={`/learn-cc/${lesson.id}`}
                  className="absolute w-full transition-all duration-500 ease-out"
                  style={{
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    opacity,
                    zIndex,
                    top: '50%',
                    marginTop: '-180px',
                    filter: blur > 0 ? `blur(${blur}px)` : 'none',
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                >
                  <div
                    className="rounded-2xl p-8"
                    style={{
                      backgroundColor: isActive ? COLORS.bgTertiary : COLORS.bgSecondary,
                      border: `1px solid ${isActive ? lessonPhaseColor : COLORS.border}`,
                      borderLeft: `5px solid ${lessonPhaseColor}`,
                      boxShadow: isActive
                        ? `0 0 80px ${lessonPhaseColor}40, 0 25px 50px rgba(0,0,0,0.6)`
                        : '0 15px 40px rgba(0,0,0,0.4)',
                    }}
                  >
                    {/* Phase Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span
                          className="text-xs font-mono px-3 py-1 rounded-lg"
                          style={{
                            backgroundColor: lessonPhaseColor,
                            color: COLORS.bg,
                            fontWeight: 600,
                          }}
                        >
                          {lesson.id.toUpperCase()}
                        </span>
                        <span
                          className="text-xs px-2 py-1 rounded"
                          style={{
                            backgroundColor: `${lessonPhaseColor}30`,
                            color: lessonPhaseColor,
                          }}
                        >
                          Phase {lesson.phase}
                        </span>
                      </div>
                      <span style={{ color: COLORS.textMuted }} className="text-sm">
                        {phaseInfo[lesson.phase]?.name}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-3xl font-bold mb-2"
                      style={{ color: isActive ? lessonPhaseColor : COLORS.text }}
                    >
                      {title.cn}
                    </h3>
                    <p style={{ color: COLORS.textSecondary }} className="text-xl mb-4">
                      {title.en}
                    </p>

                    {/* Motto */}
                    <p
                      className="text-base italic mb-6"
                      style={{
                        color: COLORS.textMuted,
                        borderLeft: `3px solid ${lessonPhaseColor}`,
                        paddingLeft: '1rem',
                      }}
                    >
                      {lesson.motto}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <span style={{ color: COLORS.textMuted }} className="text-sm">
                        {index + 1} / {lessons.length}
                      </span>
                      <div className="flex items-center gap-2" style={{ color: lessonPhaseColor }}>
                        <span className="text-sm font-medium">进入学习</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
          <p style={{ color: COLORS.textMuted }} className="text-sm mb-2">
            滚轮滑动或拖拽切换章节
          </p>
          <div className="flex justify-center gap-1">
            <span style={{ color: phaseColor }} className="text-lg animate-bounce">↓</span>
          </div>
        </div>
      </div>
    </div>
  );
}
