import { useEffect } from 'react';

/**
 * 滚动揭示：元素进入视口时加 .is-revealed，触发一次。
 * 在 .blog-root 上挂 .motion-ready 作为总开关（无 JS 时内容默认可见）。
 * 等效原站 MotionBoot 的 IntersectionObserver 逻辑，通用实现。
 */
export function useReveal(rootRef: React.RefObject<HTMLElement | null>, deps: unknown[] = []) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    root.classList.add('motion-ready');
    const elements = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!elements.length) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      elements.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
