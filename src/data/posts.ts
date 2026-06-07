// 博客文章数据
// 新增文章：复制一个 BlogPost 对象，改 slug / 标题 / 正文 blocks 即可。
// slug 用于 URL：/blog/<slug>，必须唯一。

export type PostBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'code'; lang?: string; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;        // ISO，如 '2026-06-07'
  readingTime: string; // 如 '6 分钟'
  tag: string;         // 分类标签
  excerpt: string;     // 列表摘要
  cover?: string;      // 可选封面图 URL（留空则用程序生成的浮雕纹理）
  blocks: PostBlock[]; // 正文
}

// 整数转罗马数字（文章编号用）
export function toRoman(n: number): string {
  const map: [number, string][] = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
  ];
  let out = '';
  for (const [v, s] of map) {
    while (n >= v) { out += s; n -= v; }
  }
  return out;
}

export const posts: BlogPost[] = [
  {
    slug: 'hello-athens',
    title: '在诸神栖居之地，重启写作',
    subtitle: 'Welcome to the Blog — Athens Edition',
    date: '2026-06-07',
    readingTime: '5 分钟',
    tag: '随笔',
    cover: '/images/reliefs/stele.jpg',
    excerpt:
      '把博客从零搭起来的第一篇。聊聊为什么选择这套暖米色神话风的视觉语言，以及一个静态站点能承载多少表达。',
    blocks: [
      {
        type: 'paragraph',
        text: '很久没有认真写东西了。这个博客板块从一张参照图开始——一个由 Framer 构建的活动微站，暖米色的底、古典的神话气息、罗马数字编号、随滚动逐字浮现的文字。我想，何不把这种氛围搬过来，做成一个真正属于自己的写作空间。',
      },
      { type: 'heading', text: '为什么是这套视觉' },
      {
        type: 'paragraph',
        text: '内容决定形式，但形式也会反过来塑造你写作的语气。一个安静、克制、带着古典感的页面，会让人更愿意写长一点、慢一点的文字，而不是被信息流裹挟着追逐热点。',
      },
      {
        type: 'quote',
        text: '在一片曾经属于古老诸神的土地上，他们再次相聚。',
      },
      { type: 'heading', text: '它是怎么实现的' },
      {
        type: 'paragraph',
        text: '整个站点是纯静态的：React + Vite 构建，输出到 dist，再由 GitHub Pages 托管。那些看起来很「重」的滚动动画，其实全部跑在浏览器里——IntersectionObserver 加上几行 CSS 过渡，没有任何后端。',
      },
      {
        type: 'list',
        items: [
          '逐字浮现：把标题拆成字符，按索引延迟入场',
          '滚动揭示：元素进入视口时触发一次性过渡',
          '线描装饰：内联 SVG 的 stroke-dashoffset 动画',
        ],
      },
      {
        type: 'code',
        lang: 'ts',
        text: `const ref = useScrollReveal();\n// 元素进入视口时，自动加上 .is-visible`,
      },
      { type: 'heading', text: '接下来' },
      {
        type: 'paragraph',
        text: '这里会陆续记录一些关于工程、AI 和手艺的思考。不追求频率，只追求每一篇都值得被慢慢读完。',
      },
    ],
  },
  {
    slug: 'static-site-is-enough',
    title: '一个静态站点，足够承载很多',
    subtitle: 'On the quiet power of static sites',
    date: '2026-05-20',
    readingTime: '6 分钟',
    tag: '工程',
    cover: '/images/reliefs/lekythos.jpg',
    excerpt:
      '我们常常高估了「需要一个后端」的场景。这篇聊聊静态站点的边界在哪，以及 GitHub Pages 能走多远。',
    blocks: [
      {
        type: 'paragraph',
        text: '每次想做个新站点，第一反应往往是「我需要数据库、需要 API、需要部署一台服务器」。但停下来想想：大多数内容型站点，真正需要的只是把文件交付到用户的浏览器。',
      },
      { type: 'heading', text: '静态能做什么' },
      {
        type: 'list',
        items: [
          '复杂的滚动动画与交互——全部在客户端',
          '前端路由的多页面体验（配合 404 回退）',
          '搜索、筛选、主题切换等纯前端逻辑',
          '通过构建期把 Markdown / 数据编译进包里',
        ],
      },
      { type: 'heading', text: '边界在哪' },
      {
        type: 'paragraph',
        text: '需要服务端密钥、需要写入持久化数据、需要服务端渲染做 SEO 兜底——这些才是静态站点的真正边界。在那之前，一个 GitHub Pages 仓库能走得比你想象的更远。',
      },
      {
        type: 'quote',
        text: '约束不是限制，约束是风格的来源。',
      },
      {
        type: 'paragraph',
        text: '当你不能依赖后端时，你会更认真地思考前端的结构。这种「被迫的克制」，往往会让最终的东西更干净。',
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
