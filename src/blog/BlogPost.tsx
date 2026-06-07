import { useRef } from 'react';
import { getPostBySlug, type PostBlock } from '../data/posts';
import { ReliefCover } from './ReliefCover';
import { useReveal } from './useReveal';

type Props = {
  slug: string;
  onOpenList: () => void;
};

type Section = { kicker?: string; blocks: PostBlock[] };

/** 把线性 blocks 按 heading 切成时间线段落（heading 作左栏 kicker） */
function groupBlocks(blocks: PostBlock[]): Section[] {
  const sections: Section[] = [];
  let current: Section = { blocks: [] };
  for (const block of blocks) {
    if (block.type === 'heading') {
      if (current.blocks.length || current.kicker) sections.push(current);
      current = { kicker: block.text, blocks: [] };
    } else {
      current.blocks.push(block);
    }
  }
  if (current.blocks.length || current.kicker) sections.push(current);
  return sections;
}

function renderBlock(block: PostBlock, i: number) {
  switch (block.type) {
    case 'paragraph':
      return <p key={i}>{block.text}</p>;
    case 'quote':
      return <blockquote key={i}>{block.text}</blockquote>;
    case 'list':
      return (
        <ul key={i}>
          {block.items.map((it, j) => <li key={j}>{it}</li>)}
        </ul>
      );
    case 'code':
      return <pre key={i}><code>{block.text}</code></pre>;
    default:
      return null;
  }
}

export function BlogPost({ slug, onOpenList }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const post = getPostBySlug(slug);
  useReveal(rootRef, [slug]);

  if (!post) {
    return (
      <div className="blog-root" ref={rootRef}>
        <div className="post-page" style={{ padding: '120px 24px', textAlign: 'center' }}>
          <h1 className="blog-h2">未找到这篇文章</h1>
          <button type="button" className="post-back" onClick={onOpenList} style={{ marginTop: 20 }}>
            ← 返回文章列表
          </button>
        </div>
      </div>
    );
  }

  const sections = groupBlocks(post.blocks);

  return (
    <div className="blog-root" ref={rootRef}>
      <div className="post-page">
        <article className="post-card">
          <header data-reveal>
            <span>{post.tag}</span>
            <span>The Athens Journal</span>
            <span>{post.readingTime}</span>
          </header>
          <h1 data-reveal>{post.title}</h1>
          {post.subtitle && <p className="post-sub" data-reveal>{post.subtitle}</p>}
          <p className="post-sub" data-reveal>{post.date}</p>
        </article>

        {/* 封面浮雕（金属扫光） */}
        <div className="blog-grid" style={{ padding: 4 }}>
          <ReliefCover src={post.cover} label={post.tag} seed={0.45} className="cell-full" />
        </div>

        <article className="post-card">
          <div className="post-body">
            {sections.map((sec, i) => (
              <div className="body-row" data-reveal key={i}>
                <div className="body-kicker">{sec.kicker ?? '·'}</div>
                <div className="body-content">
                  {sec.blocks.map((b, j) => renderBlock(b, j))}
                </div>
              </div>
            ))}
          </div>
          <button type="button" className="post-back" onClick={onOpenList}>
            ← 返回文章列表
          </button>
        </article>
      </div>
    </div>
  );
}
