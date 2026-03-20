export interface Course {
  id: string;
  phase: number;
  title: string;
  subtitle: string;
  motto: string;
  status: 'completed' | 'current' | 'locked';
}

export const courses: Course[] = [
  { id: 's01', phase: 1, title: 'Agent Loop', subtitle: 'Agent 循环', motto: 'One loop & Bash is all you need', status: 'completed' },
  { id: 's02', phase: 1, title: 'Tool Use', subtitle: '工具使用', motto: 'Adding a tool means adding one handler', status: 'completed' },
  { id: 's03', phase: 2, title: 'TodoWrite', subtitle: '任务清单', motto: 'An agent without a plan drifts', status: 'completed' },
  { id: 's04', phase: 2, title: 'Subagents', subtitle: '子代理', motto: 'Break big tasks down', status: 'current' },
  { id: 's05', phase: 2, title: 'Skills', subtitle: '技能', motto: 'Load knowledge when you need it', status: 'locked' },
  { id: 's06', phase: 2, title: 'Context Compact', subtitle: '上下文压缩', motto: 'Context will fill up', status: 'locked' },
  { id: 's07', phase: 3, title: 'Tasks', subtitle: '任务管理', motto: 'Break big goals into small tasks', status: 'locked' },
  { id: 's08', phase: 3, title: 'Background Tasks', subtitle: '后台任务', motto: 'Run slow operations in background', status: 'locked' },
  { id: 's09', phase: 4, title: 'Agent Teams', subtitle: '代理团队', motto: 'Delegate to teammates', status: 'locked' },
  { id: 's10', phase: 4, title: 'Team Protocols', subtitle: '团队协议', motto: 'Shared communication rules', status: 'locked' },
  { id: 's11', phase: 4, title: 'Autonomous Agents', subtitle: '自主代理', motto: 'Teammates scan and claim tasks', status: 'locked' },
  { id: 's12', phase: 4, title: 'Worktree Isolation', subtitle: '工作树隔离', motto: 'Each works in its own directory', status: 'locked' },
];

export const getProgress = () => {
  const completed = courses.filter(c => c.status === 'completed').length;
  return { completed, total: courses.length };
};

export const getCourseById = (id: string): Course | undefined => {
  return courses.find(c => c.id === id);
};

export const getPrevNextLesson = (id: string) => {
  const index = courses.findIndex(c => c.id === id);
  return {
    prev: index > 0 ? courses[index - 1] : null,
    next: index < courses.length - 1 ? courses[index + 1] : null,
  };
};
