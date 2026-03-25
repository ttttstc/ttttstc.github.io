import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, FileText, Code, Copy, Check } from 'lucide-react';
import { chapters, getChapterById, getChapterMdPath, getChapterPrevNext } from '../data/vibeflow-tutorials';
import { useMarkdown } from '../hooks/useMarkdown';
import { renderMarkdown } from '../lib/markdown';

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

interface Props {
  chapterId: string | null;
}

const VibeflowTutorialLessonPage = ({ chapterId }: Props) => {
  const [activeTab, setActiveTab] = useState<'docs' | 'code'>('docs');
  const [copied, setCopied] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const chapter = chapterId ? getChapterById(chapterId) : null;
  const mdPath = chapterId ? getChapterMdPath(chapterId) : '';
  const { content, loading } = useMarkdown(mdPath);
  const { prev, next } = chapterId ? getChapterPrevNext(chapterId) : { prev: null, next: null };

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleCopyCode = () => {
    if (content) {
      navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!chapter) {
    return (
      <div style={{ backgroundColor: COLORS.bg }} className="min-h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <p style={{ color: COLORS.textMuted }} className="mb-4">章节不存在</p>
          <a href="/vibeflow/tutorial" style={{ color: COLORS.accent }} className="hover:underline">返回教程列表</a>
        </div>
      </div>
    );
  }

  const phaseColor = PHASE_COLORS[chapter.phase];

  return (
    <div style={{ backgroundColor: COLORS.bg }} className="min-h-screen text-white">
      {/* Right Side Navigation */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-50">
        <a
          href="/vibeflow/tutorial"
          className="flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer group"
          style={{ backgroundColor: `${phaseColor}15`, border: `1px solid ${phaseColor}30` }}
          title="返回教程列表"
        >
          <ArrowLeft className="w-5 h-5" style={{ color: phaseColor }} />
          <span style={{ color: phaseColor }} className="text-sm font-medium group-hover:text-white transition-colors">
            返回教程
          </span>
        </a>

        {next && (
          <a
            href={`/vibeflow/tutorial/${next.id}`}
            className="flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer group"
            style={{ backgroundColor: `${PHASE_COLORS[next.phase]}20`, border: `1px solid ${PHASE_COLORS[next.phase]}40` }}
            title={`下一章: ${next.title}`}
          >
            <span style={{ color: PHASE_COLORS[next.phase] }} className="text-sm font-medium group-hover:text-white transition-colors">
              下一章
            </span>
            <ArrowRight className="w-5 h-5" style={{ color: PHASE_COLORS[next.phase] }} />
          </a>
        )}
      </div>

      {/* Header */}
      <header
        className="h-16 flex items-center justify-between px-6 sticky top-0 z-50"
        style={{ backgroundColor: COLORS.bgSecondary, borderBottom: `1px solid ${COLORS.border}` }}
      >
        <div className="flex items-center gap-4">
          <a
            href="/vibeflow/tutorial"
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
            Phase {chapter.phase}
          </span>
          <h1 className="text-lg font-semibold hidden md:block">{chapter.title}</h1>
        </div>
      </header>

      {/* Hero */}
      <section className={`py-16 px-6 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span style={{ color: phaseColor }}>{chapter.title}</span>
          </h2>
          <p style={{ color: COLORS.textSecondary }} className="text-xl mb-4">{chapter.subtitle}</p>
          <p
            className="text-lg italic"
            style={{
              color: COLORS.textMuted,
              borderLeft: `3px solid ${phaseColor}`,
              paddingLeft: '1rem',
              display: 'inline-block',
            }}
          >
            "{chapter.motto}"
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
              <span>原始内容</span>
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="rounded-xl p-8" style={{ backgroundColor: COLORS.bgTertiary, border: `1px solid ${COLORS.border}` }}>
              <div className="animate-pulse space-y-4">
                <div className="h-8 bg-white/10 rounded w-1/4"></div>
                <div className="h-4 bg-white/10 rounded w-3/4"></div>
                <div className="h-4 bg-white/10 rounded w-2/3"></div>
                <div className="h-4 bg-white/10 rounded w-1/2"></div>
              </div>
            </div>
          ) : (
            <>
              {/* Docs Tab */}
              <div className={`transition-all duration-300 ${activeTab === 'docs' ? 'opacity-100' : 'opacity-0 hidden'}`}>
                <div
                  className="rounded-xl p-8"
                  style={{ backgroundColor: COLORS.bgTertiary, border: `1px solid ${COLORS.border}` }}
                >
                  <div className="prose prose-invert max-w-none">
                    {renderMarkdown(content, phaseColor)}
                  </div>
                </div>
              </div>

              {/* Code Tab */}
              <div className={`transition-all duration-300 ${activeTab === 'code' ? 'opacity-100' : 'opacity-0 hidden'}`}>
                <div
                  className="rounded-xl overflow-hidden"
                  style={{ backgroundColor: '#0A0A0A', border: `1px solid ${COLORS.border}` }}
                >
                  <div
                    className="flex items-center justify-between px-5 py-3"
                    style={{ backgroundColor: COLORS.bgSecondary, borderBottom: `1px solid ${COLORS.border}` }}
                  >
                    <span style={{ color: phaseColor }} className="text-sm font-mono">
                      {mdPath}
                    </span>
                    <button
                      onClick={handleCopyCode}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors hover:bg-white/5 cursor-pointer"
                      style={{ color: copied ? '#22C55E' : COLORS.textMuted }}
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      <span className="text-sm">{copied ? '已复制' : '复制'}</span>
                    </button>
                  </div>
                  <pre
                    className="p-6 overflow-x-auto"
                    style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.85rem', lineHeight: '1.7' }}
                  >
                    <code style={{ fontFamily: "'IBM Plex Mono', monospace", color: '#E0E0E0' }}>
                      {content}
                    </code>
                  </pre>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Navigation */}
      <footer
        style={{ borderTop: `1px solid ${COLORS.border}`, backgroundColor: COLORS.bgSecondary }}
        className="py-6"
      >
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          {prev ? (
            <a
              href={`/vibeflow/tutorial/${prev.id}`}
              className="flex items-center gap-2 group transition-opacity hover:opacity-80 cursor-pointer"
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
            {chapters.findIndex(c => c.id === chapterId) + 1} / {chapters.length}
          </div>

          {next ? (
            <a
              href={`/vibeflow/tutorial/${next.id}`}
              className="flex items-center gap-2 group transition-opacity hover:opacity-80 cursor-pointer"
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
};

export default VibeflowTutorialLessonPage;
