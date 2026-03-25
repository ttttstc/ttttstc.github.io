import { ArrowLeft, ArrowRight, Calendar, X } from 'lucide-react';
import { useState } from 'react';
import { getEvolutionById, getEvolutionMdPath, getEvolutionSorted } from '../data/vibeflow-evolution';
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

const VibeflowEvolutionPage = () => {
  const sortedEntries = getEvolutionSorted();
  const [selectedEntry, setSelectedEntry] = useState<string | null>(null);

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
          <span className="text-lg font-semibold">演进日记</span>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            <span style={{ color: PHASE_COLORS[0] }}>VibeFlow</span> 演进日记
          </h1>
          <p className="text-xl text-white/60">基于真实 PR 和 Commit 记录的技术演进路线</p>
        </div>
      </section>

      {/* 时间线 */}
      <section className="py-8 px-6" style={{ backgroundColor: COLORS.bgSecondary }}>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* 时间线 */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px" style={{ backgroundColor: COLORS.border }} />

            <div className="space-y-8">
              {sortedEntries.map((entry, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div key={entry.id} className="relative flex items-center">
                    {/* 时间线节点 */}
                    <div
                      className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full z-10"
                      style={{ backgroundColor: PHASE_COLORS[entry.phase], boxShadow: `0 0 20px ${PHASE_COLORS[entry.phase]}50` }}
                    />

                    {/* 卡片 */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                      <button
                        onClick={() => setSelectedEntry(entry.id)}
                        className="block w-full p-6 rounded-xl transition-all hover:scale-[1.02] text-left"
                        style={{
                          backgroundColor: COLORS.bgTertiary,
                          border: `1px solid ${PHASE_COLORS[entry.phase]}30`,
                        }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar className="w-4 h-4" style={{ color: PHASE_COLORS[entry.phase] }} />
                          <span className="text-sm" style={{ color: COLORS.textMuted }}>{entry.date}</span>
                        </div>

                        <h3 className="text-xl font-bold mb-1" style={{ color: PHASE_COLORS[entry.phase] }}>
                          {entry.title}
                        </h3>
                        <p className="text-sm text-white/40 mb-3">{entry.subtitle}</p>
                        <p className="text-white/60 text-sm leading-relaxed">{entry.description}</p>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedEntry && (
        <EvolutionModal entryId={selectedEntry} onClose={() => setSelectedEntry(null)} />
      )}

      {/* 导航 */}
      <footer className="py-6 px-6 border-t" style={{ borderColor: COLORS.border }}>
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a
            href="/vibeflow/tutorial"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
            style={{ color: COLORS.textSecondary }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回教程</span>
          </a>
          <a
            href="/vibeflow"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
            style={{ color: COLORS.accent }}
          >
            <span>返回主页</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </footer>
    </div>
  );
};

// 弹窗组件
const EvolutionModal = ({ entryId, onClose }: { entryId: string; onClose: () => void }) => {
  const entry = getEvolutionById(entryId);
  const mdPath = getEvolutionMdPath(entryId);
  const { content, loading } = useMarkdown(mdPath);

  if (!entry) return null;

  const phaseColor = PHASE_COLORS[entry.phase];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-xl"
        style={{ backgroundColor: COLORS.bgSecondary, border: `1px solid ${COLORS.border}` }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-4" style={{ backgroundColor: COLORS.bgSecondary, borderBottom: `1px solid ${COLORS.border}` }}>
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="p-2 rounded-lg transition-colors hover:bg-white/10"
            >
              <X className="w-5 h-5" style={{ color: COLORS.textSecondary }} />
            </button>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" style={{ color: phaseColor }} />
              <span className="text-sm" style={{ color: COLORS.textMuted }}>{entry.date}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-sm transition-colors hover:bg-white/10"
            style={{ backgroundColor: COLORS.bgTertiary, color: COLORS.textSecondary }}
          >
            关闭
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-2" style={{ color: phaseColor }}>{entry.title}</h2>
          <p className="text-lg text-white/40 mb-6">{entry.subtitle}</p>

          {loading ? (
            <div className="rounded-xl p-8 animate-pulse space-y-4" style={{ backgroundColor: COLORS.bgTertiary, border: `1px solid ${COLORS.border}` }}>
              <div className="h-4 bg-white/10 rounded w-3/4"></div>
              <div className="h-4 bg-white/10 rounded w-1/2"></div>
            </div>
          ) : content ? (
            <div
              className="rounded-xl p-8"
              style={{ backgroundColor: COLORS.bgTertiary, border: `1px solid ${COLORS.border}` }}
            >
              <div className="prose prose-invert max-w-none">
                {renderMarkdown(content, phaseColor)}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default VibeflowEvolutionPage;
