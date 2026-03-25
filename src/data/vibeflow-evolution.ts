// VibeFlow 演进日记数据

export interface EvolutionEntry {
  id: string;           // 对应 markdown 文件名
  date: string;         // 日期 YYYY-MM-DD
  title: string;        // 日记标题
  subtitle: string;     // 副标题
  phase: number;         // 关联的阶段
  description: string;   // 简介
  mood: string;          // 心情/状态描述
}

export const evolutionEntries: EvolutionEntry[] = [
  {
    id: 'birth',
    date: '2026-03-21',
    title: 'VibeFlow 诞生',
    subtitle: 'The Birth of VibeFlow',
    phase: 0,
    description: 'Initial commit，16 个 Skill shell，文件即状态的想法萌芽',
    mood: '🚀 从零开始',
  },
  {
    id: 'first-structure',
    date: '2026-03-22',
    title: '第一次结构化',
    subtitle: 'First Structure',
    phase: 0,
    description: '18 个 Skill 填满，子代理并行执行，Plan 阶段合并',
    mood: '💡 框架初具',
  },
  {
    id: 'tdd-epiphany',
    date: '2026-03-23',
    title: '16 阶段 → 7 阶段',
    subtitle: 'Framework Refactor',
    phase: 4,
    description: '16 阶段压缩成 7 阶段，Quick Mode 上线，安装脚本增强',
    mood: '🧠 顿悟时刻',
  },
  {
    id: 'skill-architecture',
    date: '2026-03-24',
    title: 'Skill 架构成型',
    subtitle: 'Skill Architecture',
    phase: 3,
    description: '23 个 Skill 确定，Parallel Mode 依赖感知构建，README 大改',
    mood: '🏗️ 稳步构建',
  },
  {
    id: 'template-system',
    date: '2026-03-25',
    title: '模板系统 + Auto Pilot',
    subtitle: 'Template System & Auto Pilot',
    phase: 1,
    description: '四级模板确定，Auto Pilot 自动继续，Live Dashboard 上线',
    mood: '🎯 精准定位',
  },
  {
    id: 'auto-pilot',
    date: '2026-03-26',
    title: '文档完善',
    subtitle: 'Documentation Polish',
    phase: 4,
    description: 'Build 继续机制增强，项目概览层，加卸载指南',
    mood: '🚀 持续迭代',
  },
];

// 获取日记条目
export const getEvolutionById = (id: string): EvolutionEntry | undefined => {
  return evolutionEntries.find(e => e.id === id);
};

// 获取日记对应的 markdown 文件路径
export const getEvolutionMdPath = (id: string): string => {
  return `/source/4-vibeflow/evolution/${id}.md`;
};

// 按日期排序的所有日记
export const getEvolutionSorted = (): EvolutionEntry[] => {
  return [...evolutionEntries].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};
