// 导出 lessons 数据作为课程数据
import { lessons, type Course } from './learn-cc-lessons';

export type { Course };
export { lessons };

export const courses: Course[] = lessons;

export const getProgress = () => {
  return { completed: 0, total: courses.length };
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
