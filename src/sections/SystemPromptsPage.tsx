import { useState, useEffect, useMemo, useRef } from 'react';
import { Copy, Search, ExternalLink, Home, Sparkle, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { systemPrompts, type SystemPrompt } from '../data/systemPrompts';

// 黑橙配色
const COLORS = {
  bg: '#000000',
  bgSecondary: '#0A0A0A',
  bgTertiary: '#141414',
  border: '#262626',
  borderHover: '#404040',
  text: '#FAFAFA',
  textSecondary: '#A1A1A1',
  textMuted: '#6B6B6B',
  accent: '#FF6B35',
  accentHover: '#FF8C5A',
  accentMuted: '#FF6B3533',
};

// 分类配置
const MAIN_CATEGORIES = [
  { id: 'prompt-engineering', name: '提示词工程', nameEn: 'Prompt Engineering', icon: '🧠', count: 0, color: '#FF6B35' },
  { id: 'ai-tools', name: '智能工具', nameEn: 'AI Tools', icon: '💻', count: 84, color: '#3B82F6' },
  { id: 'writing', name: '写作创作', nameEn: 'Writing', icon: '✍️', count: 0, color: '#8B5CF6' },
  { id: 'image-gen', name: '图像生成', nameEn: 'Image Generation', icon: '🎨', count: 0, color: '#EC4899' },
  { id: 'data-analysis', name: '数据分析', nameEn: 'Data Analysis', icon: '📊', count: 0, color: '#10B981' },
  { id: 'business', name: '商业营销', nameEn: 'Business', icon: '💼', count: 0, color: '#F59E0B' },
  { id: 'translate', name: '翻译语言', nameEn: 'Translation', icon: '🌐', count: 0, color: '#06B6D4' },
];

// 智能工具二级分类
const AI_TOOLS_SUBCATEGORIES = [
  { id: 'ai-programming', name: 'AI 编程助手', tools: ['Cursor Prompts', 'Windsurf', 'VSCode Agent', 'Trae', 'Replit', 'Augment Code'] },
  { id: 'ai-agent', name: 'AI Agent', tools: ['Claude Code', 'Manus Agent', 'Devin AI', 'Junie', 'Kiro'] },
  { id: 'ai-search', name: 'AI 搜索', tools: ['Perplexity', 'Copilot', 'NotionAi', 'Cluely'] },
  { id: 'emerging', name: '新兴工具', tools: ['Lovable', 'v0 Prompts and Tools', 'Leap.new', 'Poke', 'Qoder', 'Same.dev', 'Orchids.app'] },
  { id: 'open-source', name: '开源方案', tools: ['Open Source prompts', 'Anthropic', 'Google', 'Emergent'] },
];

// 分类颜色
const CATEGORY_COLORS: Record<string, string> = {
  'Cursor Prompts': '#6366F1', 'Windsurf': '#8B5CF6', 'VSCode Agent': '#3B82F6',
  'Trae': '#10B981', 'Replit': '#F59E0B', 'Augment Code': '#EF4444',
  'Claude Code': '#FF6B35', 'Manus Agent': '#EC4899', 'Devin AI': '#14B8A6',
  'Junie': '#A855F7', 'Kiro': '#F97316', 'Perplexity': '#06B6D4',
  'Copilot': '#22C55E', 'NotionAi': '#1A1A1A', 'Cluely': '#6366F1',
  'Lovable': '#F43F5E', 'v0 Prompts and Tools': '#8B5CF6', 'Leap.new': '#10B981',
  'Poke': '#F97316', 'Qoder': '#3B82F6', 'Same.dev': '#14B8A6',
  'Orchids.app': '#EC4899', 'Open Source prompts': '#6B7280', 'Anthropic': '#FF6B35',
  'Google': '#4285F4', 'Emergent': '#10B981', 'Amp': '#6366F1',
  'Comet Assistant': '#F59E0B', 'CodeBuddy': '#EC4899', 'Warp.dev': '#1A1A1A',
  'Xcode': '#3B82F6', 'Z.ai Code': '#8B5CF6', 'Traycer AI': '#14B8A6', 'dia': '#6366F1',
};

// 检查分类是否有内容
const hasCategoryContent = (categoryId: string): boolean => {
  if (categoryId === 'ai-tools') return systemPrompts.length > 0;
  return false;
};

export default function SystemPromptsPage() {
  const [currentView, setCurrentView] = useState<'menu' | 'category'>('menu');
  const [selectedMainCategory, setSelectedMainCategory] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');
  const [selectedPrompt, setSelectedPrompt] = useState<SystemPrompt | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [categorySlideIndex, setCategorySlideIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const categoryListRef = useRef<HTMLDivElement>(null);

  // 当前分类是否有内容
  const hasContent = selectedMainCategory ? hasCategoryContent(selectedMainCategory) : false;

  // 当前显示的提示词（根据分类筛选）
  const displayedPrompts = useMemo(() => {
    if (!hasContent) return [];
    let prompts = systemPrompts;
    if (selectedSubCategory !== 'all') {
      const subCat = AI_TOOLS_SUBCATEGORIES.find(s => s.id === selectedSubCategory);
      if (subCat) prompts = prompts.filter(p => subCat.tools.some(t => p.category.includes(t)));
    }
    if (searchQuery) {
      prompts = prompts.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return prompts;
  }, [selectedMainCategory, selectedSubCategory, searchQuery, hasContent]);

  // 按分类分组
  const groupedPrompts = useMemo(() => {
    const groups: Record<string, SystemPrompt[]> = {};
    displayedPrompts.forEach(p => { if (!groups[p.category]) groups[p.category] = []; groups[p.category].push(p); });
    return groups;
  }, [displayedPrompts]);

  const allCategories = useMemo(() => Array.from(new Set(systemPrompts.map(p => p.category))), []);

  const handleCopy = async (content: string) => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const slideCategory = (dir: 'left' | 'right') => {
    const itemWidth = 100, visibleItems = 6;
    const maxIndex = Math.max(0, Math.ceil(allCategories.length / visibleItems) - 1);
    let newIndex = categorySlideIndex;
    if (dir === 'left') newIndex = Math.max(0, categorySlideIndex - 1);
    else newIndex = Math.min(maxIndex, categorySlideIndex + 1);
    setCategorySlideIndex(newIndex);
    if (categoryListRef.current) categoryListRef.current.scrollTo({ left: newIndex * visibleItems * itemWidth, behavior: 'smooth' });
  };

  const handleCategoryClick = (cat: string) => { setSelectedSubCategory(cat); setCategorySlideIndex(Math.floor(allCategories.indexOf(cat) / 6)); };

  const handleMainCategoryClick = (id: string) => {
    setSelectedMainCategory(id);
    setCurrentView('category');
    setSelectedSubCategory('all');
    setSelectedPrompt(null);
    setSearchQuery('');
    setCategorySlideIndex(0);
  };

  const handleBackToMenu = () => { setCurrentView('menu'); setSelectedMainCategory(null); setSelectedSubCategory('all'); setSelectedPrompt(null); setSearchQuery(''); };

  // 渲染一级菜单
  const renderMainMenu = () => (
    <div style={{ backgroundColor: COLORS.bg }} className="min-h-screen">
      <header style={{ backgroundColor: COLORS.bgSecondary, borderBottom: `1px solid ${COLORS.border}` }} className="h-16 flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <a href="/" style={{ color: COLORS.textSecondary }} className="flex items-center gap-2 hover:text-white"><Home className="w-5 h-5" /></a>
          <div style={{ backgroundColor: COLORS.border }} className="w-px h-6" />
          <div className="flex items-center gap-3"><Sparkle style={{ color: COLORS.accent }} className="w-5 h-5" /><h1 className="text-lg font-semibold" style={{ fontFamily: '-apple-system, SF Pro Display, Microsoft YaHei, sans-serif' }}>神秘咒语盒</h1></div>
        </div>
      </header>
      <main className="px-6 py-12 max-w-7xl mx-auto">
        <div className="text-center mb-16"><h2 style={{ fontFamily: 'Times New Roman, Times, serif', color: COLORS.text }} className="text-5xl font-bold mb-4">MYSTERY SPELL BOX</h2><p style={{ color: COLORS.textSecondary }} className="text-lg">探索 AI 工具思维方式的秘密世界</p></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {MAIN_CATEGORIES.map((cat, i) => (
            <button key={cat.id} onClick={() => handleMainCategoryClick(cat.id)} onMouseEnter={() => setHoveredCard(i)} onMouseLeave={() => setHoveredCard(null)} style={{ backgroundColor: COLORS.bgSecondary, borderColor: hoveredCard === i ? cat.color : COLORS.border }} className={`relative p-8 rounded-xl text-left transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border ${hoveredCard === i ? 'scale-105' : 'scale-100'}`}>
              <div className="absolute left-0 top-0 w-1 h-full rounded-l-xl transition-all duration-300" style={{ backgroundColor: cat.color, transform: hoveredCard === i ? 'scaleY(1)' : 'scaleY(0)' }} />
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 style={{ fontFamily: 'Times New Roman, Times, serif', color: COLORS.text }} className="text-xl font-bold mb-2">{cat.name}</h3>
              <p style={{ color: COLORS.textSecondary }} className="text-sm mb-3">{cat.nameEn}</p>
              <div style={{ color: hasCategoryContent(cat.id) ? cat.color : COLORS.textMuted }} className="text-sm font-medium">{hasCategoryContent(cat.id) ? `${cat.count} 个提示词` : '敬请期待'}</div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );

  // 渲染"敬请期待"页面
  const renderComingSoon = () => (
    <div style={{ backgroundColor: COLORS.bg, minHeight: '100vh' }} className="flex flex-col">
      <header style={{ backgroundColor: COLORS.bgSecondary, borderBottom: `1px solid ${COLORS.border}` }} className="h-16 flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button onClick={handleBackToMenu} style={{ color: COLORS.textSecondary }} className="flex items-center gap-2 hover:text-white"><ArrowLeft className="w-5 h-5" /></button>
          <div style={{ backgroundColor: COLORS.border }} className="w-px h-6" />
          <div className="flex items-center gap-3"><Sparkle style={{ color: COLORS.accent }} className="w-5 h-5" /><h1 className="text-lg font-semibold" style={{ fontFamily: 'Times New Roman, Times, serif' }}>{MAIN_CATEGORIES.find(c => c.id === selectedMainCategory)?.name}</h1></div>
        </div>
      </header>
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <Sparkle className="w-20 h-20 mx-auto mb-6" style={{ color: COLORS.accent, opacity: 0.3 }} />
          <h2 style={{ fontFamily: 'Times New Roman, Times, serif', color: COLORS.text }} className="text-3xl font-bold mb-4">Coming Soon</h2>
          <p style={{ color: COLORS.textSecondary }} className="text-lg">该分类内容正在整理中，敬请期待</p>
          <p style={{ color: COLORS.textMuted }} className="text-sm mt-2">This category is under construction</p>
        </div>
      </div>
    </div>
  );

  // 渲染分类页面（智能工具）
  const renderCategoryPage = () => {
    if (!hasContent) return renderComingSoon();

    return (
      <div style={{ backgroundColor: COLORS.bg, minHeight: '100vh', color: COLORS.text }} className="flex flex-col">
        <header style={{ backgroundColor: COLORS.bgSecondary, borderBottom: `1px solid ${COLORS.border}` }} className="h-16 flex items-center justify-between px-6 sticky top-0 z-50">
          <div className="flex items-center gap-4">
            <button onClick={handleBackToMenu} style={{ color: COLORS.textSecondary }} className="flex items-center gap-2 hover:text-white"><ArrowLeft className="w-5 h-5" /></button>
            <div style={{ backgroundColor: COLORS.border }} className="w-px h-6" />
            <div className="flex items-center gap-3"><Sparkle style={{ color: COLORS.accent }} className="w-5 h-5" /><h1 className="text-lg font-semibold" style={{ fontFamily: 'Times New Roman, Times, serif' }}>智能工具</h1></div>
          </div>
          <div style={{ color: COLORS.textMuted }} className="text-sm">{displayedPrompts.length} 个提示词</div>
        </header>

        {/* 分类滑块 */}
        <div style={{ backgroundColor: COLORS.bgSecondary, borderBottom: `1px solid ${COLORS.border}` }} className="relative py-3">
          <div className="flex items-center gap-2 px-4 max-w-7xl mx-auto">
            <button onClick={() => slideCategory('left')} style={{ color: COLORS.textSecondary, backgroundColor: COLORS.bgTertiary }} className="p-2 rounded-lg hover:bg-gray-800 flex-shrink-0"><ChevronLeft className="w-5 h-5" /></button>
            <div ref={categoryListRef} className="flex gap-2 overflow-x-auto scrollbar-hide flex-1" style={{ scrollbarWidth: 'none' }}>
              <button
                onClick={() => { setSelectedSubCategory('all'); setCategorySlideIndex(0); }}
                style={{ backgroundColor: selectedSubCategory === 'all' ? COLORS.accent : COLORS.bgTertiary, color: selectedSubCategory === 'all' ? '#000' : COLORS.textSecondary }}
                className="px-4 py-1.5 text-sm font-medium rounded-full whitespace-nowrap hover:scale-105"
              >
                全部
              </button>
              {allCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  style={{ backgroundColor: selectedSubCategory === cat ? COLORS.accent : COLORS.bgTertiary, color: selectedSubCategory === cat ? '#000' : COLORS.textSecondary }}
                  className="px-4 py-1.5 text-sm font-medium rounded-full whitespace-nowrap hover:scale-105"
                >
                  {cat}
                </button>
              ))}
            </div>
            <button onClick={() => slideCategory('right')} style={{ color: COLORS.textSecondary, backgroundColor: COLORS.bgTertiary }} className="p-2 rounded-lg hover:bg-gray-800 flex-shrink-0"><ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          {/* 左侧列表 */}
          <aside style={{ backgroundColor: COLORS.bgSecondary, borderRight: `1px solid ${COLORS.border}` }} className="w-80 flex flex-col overflow-hidden">
            <div className="p-3" style={{ borderBottom: `1px solid ${COLORS.border}` }}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: COLORS.textMuted }} />
                <input
                  type="text"
                  placeholder="搜索提示词..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  style={{ backgroundColor: COLORS.bgTertiary, border: `1px solid ${COLORS.border}`, color: COLORS.text }}
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg focus:outline-none"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {Object.keys(groupedPrompts).length > 0 ? (
                Object.entries(groupedPrompts).map(([cat, ps]) => (
                  <div key={cat} className="mb-2">
                    <h3 style={{ color: CATEGORY_COLORS[cat] || COLORS.accent, backgroundColor: COLORS.bgTertiary }} className="px-4 py-2 text-xs font-semibold sticky top-0">
                      {cat} · {ps.length}
                    </h3>
                    <div className="px-2">
                      {ps.map(p => (
                        <button
                          key={p.id}
                          onClick={() => { setSelectedPrompt(p); }}
                          style={{ backgroundColor: selectedPrompt?.id === p.id ? COLORS.accentMuted : 'transparent', borderColor: selectedPrompt?.id === p.id ? COLORS.accent : 'transparent' }}
                          className={`w-full text-left px-3 py-3 rounded-lg text-sm mb-1 hover:bg-gray-900 border ${selectedPrompt?.id === p.id ? 'border-l-2' : ''}`}
                        >
                          <div style={{ color: selectedPrompt?.id === p.id ? COLORS.accent : COLORS.text }} className="font-medium truncate">{p.name}</div>
                          <div style={{ color: COLORS.textMuted }} className="text-xs truncate mt-0.5">{p.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ color: COLORS.textMuted }} className="p-8 text-center text-sm">没有找到匹配的提示词</div>
              )}
            </div>
          </aside>

          {/* 右侧内容区 */}
          <main className="flex-1 overflow-hidden flex flex-col" style={{ backgroundColor: COLORS.bg }}>
            {selectedPrompt ? (
              <>
                <div style={{ backgroundColor: COLORS.bgSecondary, borderBottom: `1px solid ${COLORS.border}` }} className="p-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold" style={{ fontFamily: 'Times New Roman, Times, serif' }}>{selectedPrompt.name}</h2>
                    <p style={{ color: COLORS.textSecondary }} className="text-sm mt-1">{selectedPrompt.description}</p>
                    <div style={{ color: COLORS.textMuted }} className="text-xs mt-2">来源: {selectedPrompt.category}</div>
                  </div>
                  <div className="flex gap-3">
                    <a href={`https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools/blob/main/${selectedPrompt.file}`} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: COLORS.bgTertiary, border: `1px solid ${COLORS.border}`, color: COLORS.textSecondary }} className="p-2.5 rounded-lg hover:border-gray-500"><ExternalLink className="w-4 h-4" /></a>
                    <PromptContent prompt={selectedPrompt} onCopy={handleCopy} copied={copied} />
                  </div>
                </div>
                <PromptDetail prompt={selectedPrompt} />
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center" style={{ color: COLORS.textMuted }}>
                <div className="text-center">
                  <Sparkle className="w-16 h-16 mx-auto mb-4 opacity-20" />
                  <p className="text-lg mb-2">选择一个提示词开始探索</p>
                  <p className="text-sm opacity-60">探索 AI 工具思维方式的神秘世界</p>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    );
  };

  return currentView === 'menu' ? renderMainMenu() : renderCategoryPage();
}

// 复制按钮组件
function PromptContent({ prompt, onCopy, copied }: { prompt: SystemPrompt; onCopy: (content: string) => void; copied: boolean }) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!prompt) return;
    setLoading(true);
    fetch(`/system-prompts/${prompt.file}`).then(r => r.text()).then(t => { setContent(t); setLoading(false); }).catch(() => { setContent(''); setLoading(false); });
  }, [prompt]);

  return (
    <button onClick={() => !loading && content && onCopy(content)} style={{ backgroundColor: copied ? '#22C55E' : COLORS.accent }} className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white">
      <Copy className="w-4 h-4" />{copied ? '已复制!' : '复制'}
    </button>
  );
}

// 详情组件 - 使用 NEWYORKOVER 字体风格
function PromptDetail({ prompt }: { prompt: SystemPrompt }) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/system-prompts/${prompt.file}`).then(r => r.text()).then(t => { setContent(t); setLoading(false); }).catch(() => { setContent('加载失败'); setLoading(false); });
  }, [prompt]);

  return (
    <div className="flex-1 overflow-y-auto p-6">
      {loading ? (
        <div className="flex items-center justify-center h-full" style={{ color: COLORS.textMuted }}><div className="animate-spin w-8 h-8 border-2 rounded-full" style={{ borderColor: '#FF6B3530', borderTopColor: '#FF6B35' }} /></div>
      ) : (
        <pre
          style={{
            backgroundColor: COLORS.bgSecondary,
            border: `1px solid ${COLORS.border}`,
            color: COLORS.textSecondary,
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            lineHeight: 1.8,
          }}
          className="whitespace-pre-wrap text-sm p-6 rounded-xl overflow-x-auto"
        >
          {content}
        </pre>
      )}
    </div>
  );
}
