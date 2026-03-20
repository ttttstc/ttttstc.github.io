import React, { useState, useEffect } from 'react';
import { Github, ArrowLeft, ArrowRight, FileText, Code, Copy, Check } from 'lucide-react';
import { getLessonById, getLessonPrevNext, lessons } from '../data/learn-cc-lessons';

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

// Anthropic 风格代码字体
const CODE_FONT = "'IBM Plex Mono', 'SF Mono', Monaco, 'Andale Mono', 'Ubuntu Mono', monospace";

interface Props {
  lessonId: string | null;
}

// 简单的 Markdown 渲染
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
          <pre key={`code-${codeKey++}`} className="bg-[#0A0A0A] rounded-lg p-4 my-4 overflow-x-auto" style={{ fontFamily: CODE_FONT }}>
            <code className="text-sm text-lobster-orange" style={{ fontFamily: CODE_FONT }}>
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
      elements.push(<h1 key={i} className="text-3xl font-bold mb-6 mt-8 text-white">{line.slice(2)}</h1>);
    } else if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="text-2xl font-bold mb-4 mt-6 text-white">{line.slice(3)}</h2>);
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} className="text-xl font-semibold mb-3 mt-5 text-white">{line.slice(4)}</h3>);
    }
    // 列表
    else if (line.startsWith('- ') || line.startsWith('* ')) {
      elements.push(
        <li key={i} className="ml-6 mb-2 text-white/80 list-disc" style={{ color: COLORS.textSecondary }}>
          {renderInlineCode(line.slice(2))}
        </li>
      );
    }
    // 表格行
    else if (line.startsWith('|')) {
      const cells = line.split('|').filter(c => c.trim());
      if (cells.some(c => c.includes('---'))) continue; // 跳过分隔行
      elements.push(
        <tr key={i} className="border-b border-[#262626]">
          {cells.map((cell, j) => (
            <td key={j} className="px-4 py-2 text-white/70">{cell.trim()}</td>
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
        <p key={i} className="mb-4 text-white/80 leading-relaxed">
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
          style={{ backgroundColor: COLORS.bgSecondary, color: COLORS.accent, fontFamily: CODE_FONT }}
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

  if (!lesson) {
    return (
      <div style={{ backgroundColor: COLORS.bg }} className="min-h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <p style={{ color: COLORS.textMuted }} className="mb-4">课程不存在</p>
          <a href="/learn-cc" className="text-lobster-orange hover:underline">返回课程列表</a>
        </div>
      </div>
    );
  }

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
            href="/learn-cc"
            className="flex items-center gap-2 transition-colors hover:opacity-80"
            style={{ color: COLORS.textSecondary }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>返回</span>
          </a>
          <div style={{ backgroundColor: COLORS.border }} className="w-px h-6" />
          <span
            className="px-2 py-1 text-xs rounded-full"
            style={{ backgroundColor: `${COLORS.accent}20`, color: COLORS.accent }}
          >
            Phase {lesson.phase}
          </span>
          <h1 className="text-lg font-semibold hidden md:block" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
            {lesson.id.toUpperCase()}: {lesson.title}
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
        className={`py-16 px-6 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            style={{ fontFamily: 'Times New Roman, Times, serif' }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {lesson.title}
          </h2>
          <p style={{ color: COLORS.textSecondary }} className="text-xl mb-4">
            {lesson.subtitle}
          </p>
          <p
            className="text-lg italic"
            style={{ color: COLORS.textMuted, borderLeft: `3px solid ${COLORS.accent}`, paddingLeft: '1rem' }}
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
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'docs' ? 'shadow-sm' : ''
              }`}
              style={{
                backgroundColor: activeTab === 'docs' ? COLORS.bgTertiary : 'transparent',
                color: activeTab === 'docs' ? COLORS.text : COLORS.textMuted,
              }}
            >
              <FileText className="w-4 h-4" />
              <span>文档</span>
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'code' ? 'shadow-sm' : ''
              }`}
              style={{
                backgroundColor: activeTab === 'code' ? COLORS.bgTertiary : 'transparent',
                color: activeTab === 'code' ? COLORS.text : COLORS.textMuted,
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
                backgroundColor: COLORS.bgTertiary,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              {/* Code header */}
              <div
                className="flex items-center justify-between px-4 py-3"
                style={{
                  backgroundColor: COLORS.bgSecondary,
                  borderBottom: `1px solid ${COLORS.border}`,
                }}
              >
                <div className="flex items-center gap-3">
                  <span style={{ color: COLORS.accent, fontFamily: CODE_FONT }} className="text-sm">agents/{lesson.id}_*.py</span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={lesson.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: COLORS.textMuted }}
                    className="text-sm hover:text-white transition-colors mr-2"
                  >
                    GitHub →
                  </a>
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors hover:bg-white/5"
                    style={{ color: copied ? '#22C55E' : COLORS.textMuted }}
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span className="text-sm">{copied ? '已复制' : '复制'}</span>
                  </button>
                </div>
              </div>
              {/* Code content */}
              <pre className="p-6 overflow-x-auto" style={{ fontFamily: CODE_FONT }}>
                <code
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: CODE_FONT, color: COLORS.textSecondary }}
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
              className="flex items-center gap-2 group transition-opacity hover:opacity-80"
              style={{ color: COLORS.textSecondary }}
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <div className="text-xs" style={{ color: COLORS.textMuted }}>上一章</div>
                <div className="font-medium">{prev.title}</div>
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
              className="flex items-center gap-2 group transition-opacity hover:opacity-80"
              style={{ color: COLORS.textSecondary }}
            >
              <div className="text-right">
                <div className="text-xs" style={{ color: COLORS.textMuted }}>下一章</div>
                <div className="font-medium">{next.title}</div>
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
