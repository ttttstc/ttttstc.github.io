import { posts, toRoman } from '../data/posts';
import { ArrowRight, BookOpen } from 'lucide-react';

type Props = {
  onEnterBlog: () => void;
};

const BlogTeaser = ({ onEnterBlog }: Props) => {
  const latest = posts.slice(0, 3);

  return (
    <section id="blog" className="section-padding">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lobster-orange/15 text-lobster-orange text-sm mb-4">
              <BookOpen className="w-4 h-4" />
              <span>博客</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              The Athens <span className="text-lobster-orange">Journal</span>
            </h2>
            <p className="text-white/60 mt-3 max-w-xl">
              一个采用「数字考古」风格的写作空间 —— 古典神话 × 瑞士网格 × WebGL 金属扫光。
            </p>
          </div>
          <button onClick={onEnterBlog} className="btn-primary hidden md:inline-flex">
            进入博客
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latest.map((post, i) => (
            <button
              key={post.slug}
              onClick={onEnterBlog}
              className="card-dark text-left group"
            >
              <div className="text-lobster-orange font-mono text-2xl mb-4">{toRoman(i + 1)}</div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-lobster-orange transition-colors">
                {post.title}
              </h3>
              <p className="text-white/50 text-sm line-clamp-2">{post.excerpt}</p>
              <div className="text-white/30 text-xs mt-4">{post.date} · {post.readingTime}</div>
            </button>
          ))}
        </div>

        <button onClick={onEnterBlog} className="btn-primary md:hidden w-full mt-8 justify-center">
          进入博客
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </section>
  );
};

export default BlogTeaser;
