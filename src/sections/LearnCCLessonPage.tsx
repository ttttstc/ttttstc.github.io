import React, { useState, useEffect } from 'react';
import { Github, ArrowLeft, ArrowRight, FileText, Code, Copy, Check } from 'lucide-react';
import { getLessonById, getLessonPrevNext, lessons } from '../data/learn-cc-lessons';

// 莫兰迪配色系统
const COLORS = {
  bg: '#000000',
  bgSecondary: '#0A0A0A',
  bgTertiary: '#111111',
  border: '#1A1A1A',
  borderHover: '#2A2A2A',
  text: '#FAFAFA',
  textSecondary: '#B0B0B0',
  textMuted: '#666666',
  accent: '#8FA8A8', // 莫兰迪青绿
  accentHover: '#A8C4C4',
  accentMuted: '#2A3535',
  // 莫兰迪 Phase 颜色
  phases: [
    '#B8A082', // Phase 0 - 暖米色
    '#7A9BA8', // Phase 1 - 雾霾蓝
    '#9B8AA8', // Phase 2 - 淡紫灰
    '#8AA88F', // Phase 3 - 鼠尾草绿
    '#A88A8F', // Phase 4 - 烟玫瑰
  ],
};

// 代码字体 - 更清晰的显示
const CODE_FONT = "'IBM Plex Mono', 'SF Mono', Monaco, 'Andale Mono', 'Ubuntu Mono', monospace";

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

interface Props {
  lessonId: string | null;
}

// 改进的 Markdown 渲染
const renderMarkdown = (content: string) => {
  const lines = content.split('\n');
  const elements: React.ReactElement[] = [];
  let inCodeBlock = false;
  let codeContent: string[] = [];
  let codeKey = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // 代码块
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        elements.push(
          <pre
            key={`code-${codeKey++}`}
            className="rounded-lg my-4 overflow-x-auto"
            style={{
              backgroundColor: '#0A0A0A',
              border: '1px solid #1A1A1A',
              padding: '1rem',
              fontFamily: CODE_FONT,
              fontSize: '0.875rem',
              lineHeight: '1.6',
            }}
          >
            <code style={{ fontFamily: CODE_FONT, color: COLORS.textSecondary }}>
              {codeContent.join('\n')}
            </code>
          </pre>
        );
        codeContent = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeContent.push(line);
      continue;
    }

    // 标题
    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={i} className="text-2xl font-bold mb-6 mt-8" style={{ color: COLORS.text }}>
          {line.slice(2)}
        </h1>
      );
    } else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-xl font-bold mb-4 mt-6" style={{ color: COLORS.text }}>
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-lg font-semibold mb-3 mt-5" style={{ color: COLORS.text }}>
          {line.slice(4)}
        </h3>
      );
    }
    // 引用块
    else if (line.startsWith('> ')) {
      elements.push(
        <blockquote
          key={i}
          className="border-l-4 my-4 pl-4 py-1"
          style={{
            borderColor: COLORS.accent,
            color: COLORS.textSecondary,
            fontStyle: 'italic',
            backgroundColor: `${COLORS.accentMuted}30`,
            borderRadius: '0 8px 8px 0',
          }}
        >
          {renderInlineCode(line.slice(2))}
        </blockquote>
      );
    }
    // 列表
    else if (line.startsWith('- ') || line.startsWith('* ')) {
      elements.push(
        <li key={i} className="ml-6 mb-2 list-disc" style={{ color: COLORS.textSecondary }}>
          {renderInlineCode(line.slice(2))}
        </li>
      );
    }
    // 表格行
    else if (line.startsWith('|')) {
      const cells = line.split('|').filter(c => c.trim());
      if (cells.some(c => c.includes('---'))) continue;
      elements.push(
        <tr key={i} className="border-b" style={{ borderColor: COLORS.border }}>
          {cells.map((cell, j) => (
            <td key={j} className="px-4 py-2" style={{ color: COLORS.textSecondary }}>
              {cell.trim()}
            </td>
          ))}
        </tr>
      );
    }
    // 空行
    else if (line.trim() === '') {
      elements.push(<br key={i} />);
    }
    // 普通段落
    else {
      elements.push(
        <p key={i} className="mb-4 leading-relaxed" style={{ color: COLORS.textSecondary }}>
          {renderInlineCode(line)}
        </p>
      );
    }
  }

  return elements;
};

// 行内代码渲染
const renderInlineCode = (text: string) => {
  const parts = text.split(/(`[^`]+`)/);
  return parts.map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={i}
          className="px-1.5 py-0.5 rounded text-sm"
          style={{
            backgroundColor: COLORS.bgSecondary,
            color: COLORS.accent,
            fontFamily: CODE_FONT,
          }}
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
};

export default function LearnCCLessonPage({ lessonId }: Props) {
  const [activeTab, setActiveTab] = useState<'docs' | 'code'>('docs');
  const [copied, setCopied] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const lesson = lessonId ? getLessonById(lessonId) : null;
  const { prev, next } = lessonId ? getLessonPrevNext(lessonId) : { prev: null, next: null };

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleCopyCode = () => {
    if (lesson?.code) {
      navigator.clipboard.writeText(lesson.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getTitle = (id: string) => titleMap[id] || { cn: id, en: id };

  if (!lesson) {
    return (
      <div style={{ backgroundColor: COLORS.bg }} className="min-h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <p style={{ color: COLORS.textMuted }} className="mb-4">课程不存在</p>
          <a href="/learn-cc" style={{ color: COLORS.accent }} className="hover:underline">返回课程列表</a>
        </div>
      </div>
    );
  }

  const title = getTitle(lesson.id);
  const phaseColor = COLORS.phases[lesson.phase] || COLORS.accent;

  return (
    <div style={{ backgroundColor: COLORS.bg }} className="min-h-screen text-white">
      {/* Right Side Navigation Panel */}
      <div
        className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-50"
      >
        {/* Back to Tutorial - 使用当前章节的phase颜色 */}
        <a
          href={`/learn-cc?selected=${lessonId}`}
          className="flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer group"
          style={{
            backgroundColor: `${phaseColor}15`,
            border: `1px solid ${phaseColor}30`,
          }}
          title="返回教程首页"
        >
          <ArrowLeft className="w-5 h-5" style={{ color: phaseColor }} />
          <span style={{ color: phaseColor }} className="text-sm font-medium group-hover:text-white transition-colors">
            返回教程
          </span>
        </a>

        {/* Next Chapter - 使用当前章节的phase颜色 */}
        {next && (
          <a
            href={`/learn-cc/${next.id}`}
            className="flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer group"
            style={{
              backgroundColor: `${phaseColor}20`,
              border: `1px solid ${phaseColor}40`,
            }}
            title={`下一章: ${getTitle(next.id).cn}`}
          >
            <span style={{ color: phaseColor }} className="text-sm font-medium group-hover:text-white transition-colors">
              下一章
            </span>
            <ArrowRight className="w-5 h-5" style={{ color: phaseColor }} />
          </a>
        )}
      </div>

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
            href={`/learn-cc?selected=${lessonId}`}
            className="flex items-center gap-2 transition-colors hover:opacity-80 cursor-pointer"
            style={{ color: COLORS.textSecondary }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>返回</span>
          </a>
          <div style={{ backgroundColor: COLORS.border }} className="w-px h-6" />
          <span
            className="px-2 py-1 text-xs rounded-lg"
            style={{ backgroundColor: `${phaseColor}25`, color: phaseColor }}
          >
            Phase {lesson.phase}
          </span>
          <h1 className="text-lg font-semibold hidden md:block">
            {title.cn} · {title.en}
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
        className={`py-16 px-6 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span style={{ color: phaseColor }}>{title.cn}</span>
          </h2>
          <p style={{ color: COLORS.textSecondary }} className="text-xl mb-4">
            {title.en}
          </p>
          <p
            className="text-lg italic"
            style={{
              color: COLORS.textMuted,
              borderLeft: `3px solid ${phaseColor}`,
              paddingLeft: '1rem',
              display: 'inline-block',
            }}
          >
            "{lesson.motto}"
          </p>
        </div>
      </section>

      {/* Tab Switcher */}
      <section className="px-6 mb-8">
        <div className="max-w-4xl mx-auto">
          <div
            className="inline-flex rounded-lg p-1"
            style={{ backgroundColor: COLORS.bgSecondary, border: `1px solid ${COLORS.border}` }}
          >
            <button
              onClick={() => setActiveTab('docs')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-md transition-all duration-200 cursor-pointer ${
                activeTab === 'docs' ? 'shadow-sm' : ''
              }`}
              style={{
                backgroundColor: activeTab === 'docs' ? `${phaseColor}20` : 'transparent',
                color: activeTab === 'docs' ? phaseColor : COLORS.textMuted,
              }}
            >
              <FileText className="w-4 h-4" />
              <span>文档</span>
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-md transition-all duration-200 cursor-pointer ${
                activeTab === 'code' ? 'shadow-sm' : ''
              }`}
              style={{
                backgroundColor: activeTab === 'code' ? `${phaseColor}20` : 'transparent',
                color: activeTab === 'code' ? phaseColor : COLORS.textMuted,
              }}
            >
              <Code className="w-4 h-4" />
              <span>代码</span>
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Docs Tab */}
          <div
            className={`transition-all duration-300 ${activeTab === 'docs' ? 'opacity-100' : 'opacity-0 hidden'}`}
          >
            <div
              className="rounded-xl p-8"
              style={{
                backgroundColor: COLORS.bgTertiary,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <div className="prose prose-invert max-w-none">
                {renderMarkdown(lesson.content)}
              </div>
            </div>
          </div>

          {/* Code Tab */}
          <div
            className={`transition-all duration-300 ${activeTab === 'code' ? 'opacity-100' : 'opacity-0 hidden'}`}
          >
            <div
              className="rounded-xl overflow-hidden"
              style={{
                backgroundColor: '#0A0A0A',
                border: `1px solid ${COLORS.border}`,
              }}
            >
              {/* Code header */}
              <div
                className="flex items-center justify-between px-5 py-3"
                style={{
                  backgroundColor: COLORS.bgSecondary,
                  borderBottom: `1px solid ${COLORS.border}`,
                }}
              >
                <div className="flex items-center gap-3">
                  <span style={{ color: COLORS.accent, fontFamily: CODE_FONT }} className="text-sm">
                    agents/{lesson.id}_*.py
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={lesson.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: COLORS.textMuted }}
                    className="text-sm hover:text-white transition-colors cursor-pointer mr-3"
                  >
                    GitHub →
                  </a>
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors hover:bg-white/5 cursor-pointer"
                    style={{ color: copied ? '#22C55E' : COLORS.textMuted }}
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span className="text-sm">{copied ? '已复制' : '复制'}</span>
                  </button>
                </div>
              </div>
              {/* Code content - 优化显示 */}
              <pre
                className="p-6 overflow-x-auto"
                style={{
                  fontFamily: CODE_FONT,
                  fontSize: '0.85rem',
                  lineHeight: '1.7',
                }}
              >
                <code
                  style={{
                    fontFamily: CODE_FONT,
                    color: '#E0E0E0',
                  }}
                >
                  {lesson.code}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <footer
        style={{
          borderTop: `1px solid ${COLORS.border}`,
          backgroundColor: COLORS.bgSecondary,
        }}
        className="py-6"
      >
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          {prev ? (
            <a
              href={`/learn-cc/${prev.id}`}
              className="flex items-center gap-2 group transition-opacity hover:opacity-80 cursor-pointer"
              style={{ color: COLORS.textSecondary }}
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <div className="text-xs" style={{ color: COLORS.textMuted }}>上一章</div>
                <div className="font-medium">{getTitle(prev.id).cn}</div>
              </div>
            </a>
          ) : (
            <div />
          )}

          <div className="text-sm" style={{ color: COLORS.textMuted }}>
            {lessons.findIndex(l => l.id === lessonId) + 1} / {lessons.length}
          </div>

          {next ? (
            <a
              href={`/learn-cc/${next.id}`}
              className="flex items-center gap-2 group transition-opacity hover:opacity-80 cursor-pointer"
              style={{ color: COLORS.textSecondary }}
            >
              <div className="text-right">
                <div className="text-xs" style={{ color: COLORS.textMuted }}>下一章</div>
                <div className="font-medium">{getTitle(next.id).cn}</div>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          ) : (
            <div />
          )}
        </div>
      </footer>
    </div>
  );
}
