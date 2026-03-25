// VibeFlow 教程章节数据

export interface VibeflowChapter {
  id: string;           // 对应 markdown 文件名
  title: string;        // 章节标题
  subtitle: string;     // 英文副标题
  phase: number;        // 0-6 对应 7 阶段，-1 表示 Skill 章节
  description: string;  // 章节描述
  motto: string;        // 章节铭言
  isSkill?: boolean;   // 是否是 Skill 章节
}

export const chapters: VibeflowChapter[] = [
  {
    id: 'think',
    title: 'Think - 思考',
    subtitle: 'Problem Framing',
    phase: 0,
    description: '定义问题，理解边界、扫描机会、选择工作流模板',
    motto: '在开始编码之前，先理解为什么要做',
  },
  {
    id: 'plan',
    title: 'Plan - 计划',
    subtitle: 'Value Review',
    phase: 1,
    description: 'CEO 视角价值评审，唯一关卡，价值评审失败 = 项目终止',
    motto: '先问值不值得做，再问怎么做',
  },
  {
    id: 'requirements',
    title: 'Requirements - 需求',
    subtitle: 'SRS Writing',
    phase: 2,
    description: '编写需求规格说明书，遵循 ISO/IEC/IEEE 29148 标准',
    motto: '需求是开发的契约，每一条都值得认真对待',
  },
  {
    id: 'design',
    title: 'Design - 设计',
    subtitle: 'Technical Design',
    phase: 3,
    description: '技术设计 + 用户体验设计 + 三视角评审',
    motto: '好的设计是优雅的解决方案，不是复杂的堆砌',
  },
  {
    id: 'build',
    title: 'Build - 构建',
    subtitle: 'TDD Pipeline',
    phase: 4,
    description: 'TDD 驱动，质量门禁，功能验收，构建即自动继续',
    motto: '代码质量是设计出来的，不是测试出来的',
  },
  {
    id: 'review',
    title: 'Review - 审查',
    subtitle: 'Cross-functional Review',
    phase: 5,
    description: '跨功能整体变更审查，架构、安全，性能分析',
    motto: '跳出代码看全局，发现被忽视的风险',
  },
  {
    id: 'test',
    title: 'Test - 测试',
    subtitle: 'System Testing',
    phase: 6,
    description: '系统级集成测试和 QA 验证，覆盖率门禁',
    motto: '测试是软件的免疫系统，让缺陷无处遁形',
  },
  {
    id: 'skills',
    title: 'Skill 详解',
    subtitle: 'Skill Reference',
    phase: -1,
    description: '23 个 Skill 的详细介绍和使用指南',
    motto: '每个 Skill 都是一个超能力，组合起来就是完整的工程方法论',
    isSkill: true,
  },
  {
    id: 'advanced',
    title: '高级特性',
    subtitle: 'Advanced Features',
    phase: -1,
    description: 'Quick Mode、Live Dashboard、自动继续驾驶等高级特性',
    motto: '善用高级特性，让开发效率倍增',
  },
];

// 获取章节元数据
export const getChapterById = (id: string): VibeflowChapter | undefined => {
  return chapters.find(c => c.id === id);
};

// 获取章节对应的 markdown 文件路径
export const getChapterMdPath = (id: string): string => {
  if (id === 'skills') {
    return '/source/4-vibeflow/skill-list.md';
  }
  return `/source/4-vibeflow/tutorial/${id}.md`;
};

// 获取上下章节
export const getChapterPrevNext = (id: string): { prev: VibeflowChapter | null; next: VibeflowChapter | null } => {
  const index = chapters.findIndex(c => c.id === id);
  if (index === -1) return { prev: null, next: null };

  return {
    prev: index > 0 ? chapters[index - 1] : null,
    next: index < chapters.length - 1 ? chapters[index + 1] : null,
  };
};
