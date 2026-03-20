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

// Phase 名称
const phaseNames: Record<number, string> = {
  0: '概述',
  1: '基础',
  2: '规划与知识',
  3: '持久化',
  4: '团队协作',
};

export default function LearnCCPage() {
  const [loaded, setLoaded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [hoveringRight, setHoveringRight] = useState(false);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  // 监听鼠标进入右边区域
  useEffect(() => {
    const handleMouseEnter = () => setHoveringRight(true);
    const handleMouseLeave = () => setHoveringRight(false);

    const rightPanel = rightPanelRef.current;
    if (rightPanel) {
      rightPanel.addEventListener('mouseenter', handleMouseEnter);
      rightPanel.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (rightPanel) {
        rightPanel.removeEventListener('mouseenter', handleMouseEnter);
        rightPanel.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
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

      {/* Main Content - Split View */}
      <div
        className={`flex transition-all duration-700 ease-out ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ height: 'calc(100vh - 64px)' }}
      >
        {/* Left Sidebar */}
        <div
          className="h-full overflow-y-auto"
          style={{
            width: '320px',
            backgroundColor: COLORS.bgSecondary,
            borderRight: `1px solid ${COLORS.border}`,
          }}
        >
          {/* Hero Title */}
          <div className="p-6" style={{ borderBottom: `1px solid ${COLORS.border}` }}>
            <h2 className="text-2xl font-bold mb-2">
              Agent <span style={{ color: COLORS.accent }}>入门</span>教程
            </h2>
            <p style={{ color: COLORS.textMuted }} className="text-sm">
              从零掌握 AI Agent 的 12 堂课
            </p>
          </div>

          {/* Course List */}
          <div className="p-4">
            {lessons.map((lesson, index) => {
              const title = getTitle(lesson.id);
              const isSelected = selectedIndex === index;
              return (
                <button
                  key={lesson.id}
                  onClick={() => handleSelect(index)}
                  className="w-full text-left mb-2 p-4 rounded-lg transition-all duration-300 cursor-pointer"
                  style={{
                    backgroundColor: isSelected ? COLORS.accentMuted : 'transparent',
                    border: `1px solid ${isSelected ? COLORS.accent : COLORS.border}`,
                    borderLeft: `3px solid ${isSelected ? COLORS.accent : 'transparent'}`,
                  }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className="text-xs font-mono"
                      style={{ color: isSelected ? COLORS.accent : COLORS.textMuted }}
                    >
                      {lesson.id.toUpperCase()}
                    </span>
                    <span
                      className="text-xs px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: isSelected ? COLORS.accent : COLORS.bgTertiary,
                        color: isSelected ? COLORS.bg : COLORS.textMuted,
                      }}
                    >
                      Phase {lesson.phase}
                    </span>
                  </div>
                  <div
                    className="font-semibold mb-1"
                    style={{ color: isSelected ? COLORS.text : COLORS.textSecondary }}
                  >
                    {title.cn}
                  </div>
                  <div style={{ color: COLORS.textMuted }} className="text-sm">
                    {title.en}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Panel - Stacked View */}
        <div
          ref={rightPanelRef}
          className="flex-1 relative overflow-hidden"
          style={{
            background: `linear-gradient(180deg, ${COLORS.bg} 0%, ${COLORS.bgSecondary} 100%)`,
          }}
        >
          {/* Stacked Cards */}
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="relative w-full max-w-2xl" style={{ height: '400px' }}>
              {lessons.map((lesson, index) => {
                const title = getTitle(lesson.id);
                const isSelected = selectedIndex === index;
                const isAbove = index < selectedIndex;
                const isBelow = index > selectedIndex;

                // 堆叠偏移计算
                let translateY = 0;
                let scale = 1;
                let opacity = 0.4;
                let zIndex = lessons.length - Math.abs(index - selectedIndex);

                if (isSelected) {
                  // 选中的卡片 - 弹起到中间
                  translateY = 0;
                  scale = 1;
                  opacity = 1;
                  zIndex = lessons.length + 1;
                } else if (hoveringRight) {
                  // 鼠标进入右边区域后，所有卡片归位
                  translateY = (index - selectedIndex) * 60;
                  scale = 1 - Math.abs(index - selectedIndex) * 0.05;
                  opacity = 1 - Math.abs(index - selectedIndex) * 0.15;
                } else {
                  // 默认堆叠效果 - 选中的弹起，其他的根据位置堆叠
                  if (isAbove) {
                    translateY = -30 + (selectedIndex - index) * 10;
                  } else if (isBelow) {
                    translateY = 30 + (index - selectedIndex) * 10;
                  }
                  scale = 1 - Math.abs(index - selectedIndex) * 0.08;
                  opacity = 1 - Math.abs(index - selectedIndex) * 0.2;
                }

                return (
                  <a
                    key={lesson.id}
                    href={`/learn-cc/${lesson.id}`}
                    className="absolute w-full transition-all duration-500 cursor-pointer"
                    style={{
                      transform: `translateY(${translateY}px) scale(${scale})`,
                      opacity,
                      zIndex,
                      top: '50%',
                      marginTop: '-120px',
                    }}
                  >
                    <div
                      className="rounded-xl p-8"
                      style={{
                        backgroundColor: isSelected ? COLORS.bgTertiary : COLORS.bgSecondary,
                        border: `1px solid ${isSelected ? COLORS.accent : COLORS.border}`,
                        borderLeft: `4px solid ${isSelected ? COLORS.accent : COLORS.border}`,
                        boxShadow: isSelected
                          ? `0 0 60px ${COLORS.accent}30, 0 20px 40px rgba(0,0,0,0.5)`
                          : '0 10px 30px rgba(0,0,0,0.3)',
                      }}
                    >
                      {/* Card Header */}
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className="text-xs font-mono px-3 py-1 rounded-lg"
                          style={{
                            backgroundColor: isSelected ? COLORS.accent : COLORS.bgTertiary,
                            color: isSelected ? COLORS.bg : COLORS.textMuted,
                          }}
                        >
                          {lesson.id.toUpperCase()}
                        </span>
                        <span style={{ color: COLORS.textMuted }} className="text-sm">
                          Phase {lesson.phase}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h3
                        className="text-2xl font-bold mb-2"
                        style={{ color: isSelected ? COLORS.accent : COLORS.text }}
                      >
                        {title.cn}
                      </h3>
                      <p style={{ color: COLORS.textSecondary }} className="text-lg mb-4">
                        {title.en}
                      </p>

                      {/* Motto */}
                      <p
                        className="text-sm italic mb-6"
                        style={{
                          color: COLORS.textMuted,
                          borderLeft: `2px solid ${COLORS.accent}`,
                          paddingLeft: '1rem',
                        }}
                      >
                        {lesson.motto}
                      </p>

                      {/* Card Footer */}
                      <div className="flex items-center justify-between">
                        <span style={{ color: COLORS.textMuted }} className="text-sm">
                          {phaseNames[lesson.phase] || ''}
                        </span>
                        <div className="flex items-center gap-2" style={{ color: COLORS.accent }}>
                          <span className="text-sm font-medium">进入学习</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Instructions */}
          <div
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center"
            style={{ color: COLORS.textMuted }}
          >
            <p className="text-sm">
              {hoveringRight ? '点击卡片进入章节' : '点击左侧列表选择章节'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
