import { ArrowRight, Zap, Shield, Layers, GitBranch, CheckCircle, Target, Calendar, BookOpen } from 'lucide-react';
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
  accent: '#6366F1', // 靛蓝色
  accentLight: '#818CF8',
};

// VibeFlow 7 阶段颜色
const PHASE_COLORS = [
  '#D4A853', // Think - 琥珀金
  '#5B9AAD', // Plan - 孔雀蓝
  '#8B7AA6', // Requirements - 梦幻紫
  '#6AAF8C', // Design - 翠玉绿
  '#B08580', // Build - 陶土红
  '#5EADB4', // Review - 清新青
  '#6366F1', // Test - 靛蓝
];

const phases = [
  { name: 'Think', icon: Target, description: '问题框定、模板选择' },
  { name: 'Plan', icon: Zap, description: 'CEO 视角价值评审' },
  { name: 'Requirements', icon: Shield, description: '需求规格说明书' },
  { name: 'Design', icon: Layers, description: '技术设计 + 三视角评审' },
  { name: 'Build', icon: GitBranch, description: 'TDD 管道 + 质量门禁' },
  { name: 'Review', icon: CheckCircle, description: '跨功能整体审查' },
  { name: 'Test', icon: Shield, description: '系统级测试 + QA 验证' },
];

const VibeflowPage = () => {
  const { content, loading } = useMarkdown('/source/4-vibeflow/index.md');

  return (
    <div style={{ backgroundColor: COLORS.bg }} className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-8">
            <Zap className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-400 font-medium">结构化软件交付框架</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span style={{ color: COLORS.accent }}>VibeFlow</span>
          </h1>

          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
            让 AI 按工程纪律交付软件，而不是随机 vibe coding
          </p>

          <p className="text-lg text-white/50 max-w-3xl mx-auto leading-relaxed mb-12">
            别再让 AI "先写代码再说的" 了——VibeFlow 是一个结构化的 7 阶段软件交付框架，
            从问题框定到测试完成，每一步都有文件状态持久化、确定性路由和质量门禁。
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/vibeflow/tutorial"
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
              style={{ backgroundColor: COLORS.accent, color: COLORS.text }}
            >
              <BookOpen className="w-4 h-4" />
              开始教程
            </a>
            <a
              href="/vibeflow/evolution"
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
              style={{ backgroundColor: COLORS.bgSecondary, border: `1px solid ${COLORS.border}`, color: COLORS.textSecondary }}
            >
              <Calendar className="w-4 h-4" />
              演进日记
            </a>
          </div>
        </div>
      </section>

      {/* 7 阶段概览 */}
      <section className="py-16 px-6" style={{ backgroundColor: COLORS.bgSecondary }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">7 阶段架构</h2>
          <p className="text-center text-white/50 mb-12">从思考到发布，每一步都有章可循</p>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div
                  key={phase.name}
                  className="relative p-4 rounded-xl text-center transition-all hover:scale-105"
                  style={{
                    backgroundColor: `${PHASE_COLORS[index]}15`,
                    border: `1px solid ${PHASE_COLORS[index]}30`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: `${PHASE_COLORS[index]}25` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: PHASE_COLORS[index] }} />
                  </div>
                  <h3 className="font-semibold mb-1" style={{ color: PHASE_COLORS[index] }}>
                    {phase.name}
                  </h3>
                  <p className="text-xs text-white/40">{phase.description}</p>
                  {index < 4 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                      <ArrowRight className="w-4 h-4 text-white/20" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center text-sm text-white/40">
            Think → Plan → Requirements → Design（决策阶段，人工）
            <br />
            Build → Review → Test（执行阶段，自动）
          </div>
        </div>
      </section>

      {/* 核心理念 */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">核心理念</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl" style={{ backgroundColor: COLORS.bgTertiary, border: `1px solid ${COLORS.border}` }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: COLORS.accent }}>需求驱动，而非代码驱动</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                先写需求规格（SRS），再写技术设计，最后才写代码。避免在需求不清的情况下盲目开始编码。
              </p>
            </div>

            <div className="p-6 rounded-xl" style={{ backgroundColor: COLORS.bgTertiary, border: `1px solid ${COLORS.border}` }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: COLORS.accent }}>文件即状态</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                所有工作流状态持久化在仓库文件中。关闭会话、换机器、甚至换 AI — 项目状态完整保留。
              </p>
            </div>

            <div className="p-6 rounded-xl" style={{ backgroundColor: COLORS.bgTertiary, border: `1px solid ${COLORS.border}` }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: COLORS.accent }}>确定性路由</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                通过检查文件存在性确定当前阶段。7 个核心阶段 + 2 个可选阶段，严格 elif 链，没有歧义。
              </p>
            </div>

            <div className="p-6 rounded-xl" style={{ backgroundColor: COLORS.bgTertiary, border: `1px solid ${COLORS.border}` }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: COLORS.accent }}>模板控制严格度</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                四种静态模板（prototype → enterprise）控制哪些阶段必须执行、质量门禁阈值多高。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 产品介绍内容 */}
      {loading ? (
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-white/10 rounded w-1/4"></div>
              <div className="h-4 bg-white/10 rounded w-3/4"></div>
              <div className="h-4 bg-white/10 rounded w-2/3"></div>
            </div>
          </div>
        </section>
      ) : content ? (
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div
              className="rounded-xl p-8"
              style={{ backgroundColor: COLORS.bgTertiary, border: `1px solid ${COLORS.border}` }}
            >
              <div className="prose prose-invert max-w-none">
                {renderMarkdown(content, COLORS.accent)}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* 导航 */}
      <section className="py-12 px-6 border-t" style={{ borderColor: COLORS.border }}>
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">
          <a
            href="/vibeflow/tutorial"
            className="flex items-center gap-2 px-5 py-3 rounded-lg transition-all hover:scale-105"
            style={{ backgroundColor: `${COLORS.accent}20`, border: `1px solid ${COLORS.accent}40` }}
          >
            <ArrowRight className="w-4 h-4" style={{ color: COLORS.accent }} />
            <span style={{ color: COLORS.accent }}>查看完整教程</span>
          </a>
          <a
            href="/vibeflow/evolution"
            className="flex items-center gap-2 px-5 py-3 rounded-lg transition-all hover:scale-105"
            style={{ backgroundColor: `${PHASE_COLORS[0]}15`, border: `1px solid ${PHASE_COLORS[0]}30` }}
          >
            <span style={{ color: PHASE_COLORS[0] }}>演进日记</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default VibeflowPage;
