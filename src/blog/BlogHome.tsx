import { useRef } from 'react';
import { posts, toRoman } from '../data/posts';
import { ReliefCover } from './ReliefCover';
import { useReveal } from './useReveal';

type Props = {
  onOpenPost: (slug: string) => void;
  onBackHome: () => void;
};

const facts: [string, string][] = [
  ['D.', '始于 2026 春'],
  ['P.', `${posts.length} 篇手记\n四个主题`],
  ['H.', '工程 · AI · 架构\nDevOps'],
  ['I.', '慢一点，写长一点'],
];

export function BlogHome({ onOpenPost, onBackHome }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef, [posts.length]);

  return (
    <div className="blog-root" ref={rootRef}>
      <div className="blog-grid">
        {/* Hero */}
        <section className="blog-cell blog-hero" aria-label="博客">
          <div data-reveal>
            <h1>The Athens Journal</h1>
            <p>In a land once home to ancient gods — a place to write</p>
          </div>
        </section>

        {/* 关于卡 */}
        <section className="blog-cell facts-cell">
          <div className="facts-shell" data-reveal>
            <h2 className="blog-h2">About</h2>
            <dl>
              {facts.map(([k, v]) => (
                <div className="fact-row" key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 浮雕砖 */}
        <ReliefCover label="Eirene" src="/images/reliefs/eirene.jpg" seed={0.2} />

        {/* 希腊柱寄语（占两行） */}
        <section className="blog-cell intro-cell cell-tall">
          <div className="greek-column" data-reveal>
            <div className="column-scrollwork" />
            <p>
              欢迎来到这片栖息着古老诸神的土地。在这里放慢脚步，写下那些值得被慢慢读完的文字。
              不追逐热点，只记录关于工程、AI 与手艺的思考。
              <br />
              <br />
              See you soon
            </p>
            <div className="column-lines" />
          </div>
        </section>

        {/* 浮雕砖 */}
        <ReliefCover label="Lekythos" src="/images/reliefs/lekythos.jpg" seed={0.55} />

        {/* 文章列表（占两列） */}
        <section className="blog-cell posts-cell">
          <h2 className="blog-h2" data-reveal>The Writings</h2>
          <div className="posts-list">
            {posts.map((post, i) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="post-row"
                data-reveal
                onClick={(e) => {
                  e.preventDefault();
                  onOpenPost(post.slug);
                }}
              >
                <span className="post-num">{toRoman(i + 1)}</span>
                <span className="post-main">
                  <span className="post-title">{post.title}</span>
                  <span className="post-excerpt">{post.excerpt}</span>
                </span>
                <span className="post-meta">{post.date} · {post.readingTime}</span>
              </a>
            ))}
          </div>
        </section>

        {/* 浮雕砖 */}
        <ReliefCover label="Stele" src="/images/reliefs/stele.jpg" seed={0.8} />
        <ReliefCover label="Marble Relief" src="/images/reliefs/eirene.jpg" seed={0.35} className="cell-span2" />

        <footer className="blog-footer">
          <button type="button" className="post-back" onClick={onBackHome}>
            ← 返回主站
          </button>
          <div style={{ marginTop: 12 }}>The Athens Journal · No Work, Only Writing</div>
        </footer>
      </div>
    </div>
  );
}
