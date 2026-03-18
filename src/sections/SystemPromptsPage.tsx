import { useState, useEffect, useMemo, useRef } from 'react';
import { Copy, Search, Menu, X, ExternalLink, Home, Sparkle, ChevronLeft, ChevronRight } from 'lucide-react';
import { systemPrompts } from '../data/systemPrompts';
import type { SystemPrompt } from '../data/systemPrompts';

// 龙虾橙配色
const COLORS = {
  bg: '#000000',
  bgSecondary: '#0A0A0A',
  bgTertiary: '#141414',
  border: '#262626',
  borderHover: '#404040',
  text: '#FAFAFA',
  textSecondary: '#A1A1A1',
  textMuted: '#6B6B6B',
  accent: '#FF6B35', // 龙虾橙
  accentHover: '#FF8C5A',
  accentMuted: '#FF6B3533',
};

export default function SystemPromptsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPrompt, setSelectedPrompt] = useState< SystemPrompt | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [promptContent, setPromptContent] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [categorySlideIndex, setCategorySlideIndex] = useState(0);
  const categoryListRef = useRef<HTMLDivElement>(null);

  // 获取所有分类
  const allCategories = useMemo(() => {
    const cats = new Set<string>();
    systemPrompts.forEach(p => cats.add(p.category));
    return Array.from(cats);
  }, []);

  // 过滤提示词
  const filteredPrompts = useMemo(() => {
    return systemPrompts.filter(prompt => {
      const matchCategory = selectedCategory === 'all' ||
        prompt.category.toLowerCase().includes(selectedCategory.toLowerCase());
      const matchSearch = !searchQuery ||
        prompt.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  // 按分类分组
  const groupedPrompts = useMemo(() => {
    const groups: Record<string, SystemPrompt[]> = {};
    filteredPrompts.forEach(prompt => {
      if (!groups[prompt.category]) {
        groups[prompt.category] = [];
      }
      groups[prompt.category].push(prompt);
    });
    return groups;
  }, [filteredPrompts]);

  // 加载提示词内容
  useEffect(() => {
    if (!selectedPrompt) return;

    const loadContent = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/system-prompts/${selectedPrompt.file}`);
        const text = await response.text();
        setPromptContent(text);
      } catch (error) {
        console.error('Failed to load prompt:', error);
        setPromptContent('加载失败');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [selectedPrompt]);

  // 复制功能
  const handleCopy = async () => {
    await navigator.clipboard.writeText(promptContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 分类滑动
  const slideCategory = (direction: 'left' | 'right') => {
    const itemWidth = 100; // 每个分类按钮的宽度 + gap
    const visibleItems = 6;
    const maxIndex = Math.max(0, Math.ceil(allCategories.length / visibleItems) - 1);
    let newIndex = categorySlideIndex;

    if (direction === 'left') {
      newIndex = Math.max(0, categorySlideIndex - 1);
    } else {
      newIndex = Math.min(maxIndex, categorySlideIndex + 1);
    }

    setCategorySlideIndex(newIndex);

    // 滚动到指定位置
    if (categoryListRef.current) {
      const scrollPosition = newIndex * visibleItems * itemWidth;
      categoryListRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };

  // 处理分类点击
  const handleCategoryClick = (cat: string) => {
    setSelectedCategory(cat);
    // 找到分类所在的索引组
    const catIndex = allCategories.indexOf(cat);
    const newIndex = Math.floor(catIndex / 6);
    setCategorySlideIndex(newIndex);

    // 滚动到指定位置
    if (categoryListRef.current) {
      const scrollPosition = newIndex * 6 * 100;
      categoryListRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ backgroundColor: COLORS.bg, minHeight: '100vh', color: COLORS.text }} className="flex flex-col font-anthropic">
      {/* Header */}
      <header style={{
        backgroundColor: COLORS.bgSecondary,
        borderBottom: `1px solid ${COLORS.border}`
      }} className="h-16 flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <a
            href="/"
            style={{ color: COLORS.textSecondary }}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Home className="w-5 h-5" />
          </a>
          <div style={{ backgroundColor: COLORS.border }} className="w-px h-6" />
          <div className="flex items-center gap-3">
            <Sparkle style={{ color: COLORS.accent }} className="w-5 h-5" />
            <h1 className="text-lg font-semibold tracking-tight">神秘咒语盒</h1>
          </div>
        </div>
        <div style={{ color: COLORS.textMuted }} className="text-sm">
          {systemPrompts.length} 个提示词
        </div>
      </header>

      {/* Category Slider */}
      <div style={{
        backgroundColor: COLORS.bgSecondary,
        borderBottom: `1px solid ${COLORS.border}`
      }} className="relative">
        <div className="flex items-center gap-2 px-4 py-3">
          {/* Left Arrow */}
          <button
            onClick={() => slideCategory('left')}
            style={{ color: COLORS.textSecondary, backgroundColor: COLORS.bgTertiary }}
            className="p-2 rounded-lg hover:bg-gray-800 transition-all duration-200 flex-shrink-0 z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Category List */}
          <div
            ref={categoryListRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide flex-1 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <button
              onClick={() => {
                setSelectedCategory('all');
                setCategorySlideIndex(0);
                if (categoryListRef.current) {
                  categoryListRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }
              }}
              style={{
                backgroundColor: selectedCategory === 'all' ? COLORS.accent : COLORS.bgTertiary,
                color: selectedCategory === 'all' ? '#000' : COLORS.textSecondary,
              }}
              className="px-4 py-1.5 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-300 hover:scale-105 flex-shrink-0"
            >
              全部
            </button>
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                style={{
                  backgroundColor: selectedCategory === cat ? COLORS.accent : COLORS.bgTertiary,
                  color: selectedCategory === cat ? '#000' : COLORS.textSecondary,
                }}
                className="px-4 py-1.5 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-300 hover:scale-105 flex-shrink-0"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => slideCategory('right')}
            style={{ color: COLORS.textSecondary, backgroundColor: COLORS.bgTertiary }}
            className="p-2 rounded-lg hover:bg-gray-800 transition-all duration-200 flex-shrink-0 z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Mobile sidebar toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{ backgroundColor: COLORS.accent }}
          className="lg:hidden fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg"
        >
          {sidebarOpen ? <X className="w-5 h-5 text-black" /> : <Menu className="w-5 h-5 text-black" />}
        </button>

        {/* Left sidebar - Search & List */}
        <aside
          style={{
            backgroundColor: COLORS.bgSecondary,
            borderRight: `1px solid ${COLORS.border}`
          }}
          className={`
            w-full lg:w-80 flex-shrink-0
            fixed lg:relative inset-0 z-40 lg:z-auto
            transform transition-transform duration-500 ease-out
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            pt-16 lg:pt-0
          `}
        >
          <div className="h-full flex flex-col overflow-hidden">
            {/* Search */}
            <div className="p-4" style={{ borderBottom: `1px solid ${COLORS.border}` }}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: COLORS.textMuted }} />
                <input
                  type="text"
                  placeholder="搜索提示词..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    backgroundColor: COLORS.bgTertiary,
                    border: `1px solid ${COLORS.border}`,
                    color: COLORS.text,
                  }}
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg focus:outline-none focus:border-orange-500 transition-colors placeholder:text-gray-600 font-anthropic"
                />
              </div>
            </div>

            {/* Prompt list */}
            <div className="flex-1 overflow-y-auto">
              {Object.entries(groupedPrompts).map(([category, prompts], groupIndex) => (
                <div
                  key={category}
                  className="mb-2 animate-in fade-in slide-in-from-left-4"
                  style={{ animationDelay: `${groupIndex * 30}ms` }}
                >
                  <h3
                    style={{ color: COLORS.accent, backgroundColor: COLORS.bgTertiary }}
                    className="px-4 py-2 text-xs font-semibold sticky top-0"
                  >
                    {category} · {prompts.length}
                  </h3>
                  <div className="px-2 py-1">
                    {prompts.map((prompt) => (
                      <button
                        key={prompt.id}
                        onClick={() => {
                          setSelectedPrompt(prompt);
                          setSidebarOpen(false);
                        }}
                        style={{
                          backgroundColor: selectedPrompt?.id === prompt.id ? COLORS.accentMuted : 'transparent',
                          borderColor: selectedPrompt?.id === prompt.id ? COLORS.accent : 'transparent',
                        }}
                        className={`w-full text-left px-3 py-3 rounded-lg text-sm mb-1 transition-all duration-200 hover:bg-gray-900 border ${
                          selectedPrompt?.id === prompt.id ? 'border-l-2' : ''
                        } font-anthropic`}
                      >
                        <div
                          style={{ color: selectedPrompt?.id === prompt.id ? COLORS.accent : COLORS.text }}
                          className="font-medium truncate"
                        >
                          {prompt.name}
                        </div>
                        <div style={{ color: COLORS.textMuted }} className="text-xs truncate mt-0.5">
                          {prompt.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              {filteredPrompts.length === 0 && (
                <div style={{ color: COLORS.textMuted }} className="p-8 text-center text-sm font-anthropic">
                  没有找到匹配的提示词
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* Right content area */}
        <main className="flex-1 overflow-hidden flex flex-col" style={{ backgroundColor: COLORS.bg }}>
          {selectedPrompt ? (
            <>
              {/* Content Header */}
              <div
                style={{
                  backgroundColor: COLORS.bgSecondary,
                  borderBottom: `1px solid ${COLORS.border}`
                }}
                className="p-6 flex items-center justify-between"
              >
                <div>
                  <h2 className="text-xl font-semibold tracking-tight font-anthropic">{selectedPrompt.name}</h2>
                  <p style={{ color: COLORS.textSecondary }} className="text-sm mt-1 font-anthropic">{selectedPrompt.description}</p>
                  <div style={{ color: COLORS.textMuted }} className="text-xs mt-2 font-anthropic">
                    来源: {selectedPrompt.category}
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href={`https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools/blob/main/${selectedPrompt.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: COLORS.bgTertiary,
                      border: `1px solid ${COLORS.border}`,
                      color: COLORS.textSecondary
                    }}
                    className="p-2.5 rounded-lg hover:border-gray-500 transition-colors"
                    title="查看原始文件"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={handleCopy}
                    style={{
                      backgroundColor: copied ? '#22C55E' : COLORS.accent,
                    }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 font-anthropic"
                  >
                    <Copy className="w-4 h-4" />
                    {copied ? '已复制!' : '复制'}
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {loading ? (
                  <div className="flex items-center justify-center h-full" style={{ color: COLORS.textMuted }}>
                    <div className="flex flex-col items-center gap-3">
                      <div
                        style={{ borderColor: `${COLORS.accent}30`, borderTopColor: COLORS.accent }}
                        className="animate-spin w-8 h-8 border-2 rounded-full"
                      />
                      <span className="text-sm font-anthropic">加载中...</span>
                    </div>
                  </div>
                ) : (
                  <pre
                    style={{
                      backgroundColor: COLORS.bgSecondary,
                      border: `1px solid ${COLORS.border}`,
                      color: COLORS.textSecondary,
                    }}
                    className="whitespace-pre-wrap font-mono text-sm p-6 rounded-xl overflow-x-auto leading-relaxed font-anthropic"
                  >
                    {promptContent}
                  </pre>
                )}
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center" style={{ color: COLORS.textMuted }}>
              <div className="text-center font-anthropic">
                <Sparkle className="w-16 h-16 mx-auto mb-4 opacity-20" />
                <p className="text-lg mb-2">选择一个提示词开始探索</p>
                <p className="text-sm opacity-60">探索 AI 工具思维方式的神秘世界</p>
              </div>
            </div>
          )}
        </main>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 z-30"
            style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
