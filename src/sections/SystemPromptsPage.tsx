import { useState, useEffect, useMemo, useRef } from 'react';
import { Copy, Search, Menu, X, ExternalLink, Home, Sparkle, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { systemPrompts, type SystemPrompt } from '../data/systemPrompts';

// 龙虾橙配色
const COLORS = {
  bg: '#F9F8F6', // 米白色
  bgSecondary: '#FFFFFF',
  bgTertiary: '#F5F4F2',
  border: '#E8E6E3',
  borderHover: '#D4D2CF',
  text: '#1A1A1A',
  textSecondary: '#666666',
  textMuted: '#999999',
  accent: '#FF6B35',
  accentHover: '#FF8C5A',
  accentMuted: '#FF6B3533',
};

// 分类配置
const MAIN_CATEGORIES = [
  {
    id: 'prompt-engineering',
    name: '提示词工程',
    nameEn: 'Prompt Engineering',
    icon: '🧠',
    count: 12,
    description: '提示技巧、论文资源、教程指南',
    color: '#FF6B35'
  },
  {
    id: 'ai-tools',
    name: '智能工具',
    nameEn: 'AI Tools',
    icon: '💻',
    count: 84,
    description: 'AI 编程助手、Agent 工具系统提示词',
    color: '#3B82F6'
  },
  {
    id: 'writing',
    name: '写作创作',
    nameEn: 'Writing',
    icon: '✍️',
    count: 8,
    description: '文章润色、标题生成、邮件撰写',
    color: '#8B5CF6'
  },
  {
    id: 'image-gen',
    name: '图像生成',
    nameEn: 'Image Generation',
    icon: '🎨',
    count: 6,
    description: 'Midjourney、Stable Diffusion 提示词',
    color: '#EC4899'
  },
  {
    id: 'data-analysis',
    name: '数据分析',
    nameEn: 'Data Analysis',
    icon: '📊',
    count: 5,
    description: '数据处理、统计分析、可视化',
    color: '#10B981'
  },
  {
    id: 'business',
    name: '商业营销',
    nameEn: 'Business',
    icon: '💼',
    count: 7,
    description: 'SEO、社交媒体、广告文案',
    color: '#F59E0B'
  },
  {
    id: 'translate',
    name: '翻译语言',
    nameEn: 'Translation',
    icon: '🌐',
    count: 4,
    description: '中英翻译、多语言转换',
    color: '#06B6D4'
  },
];

// 智能工具二级分类
const AI_TOOLS_SUBCATEGORIES = [
  { id: 'ai-programming', name: 'AI 编程助手', nameEn: 'AI Programming', tools: ['Cursor Prompts', 'Windsurf', 'VSCode Agent', 'Trae', 'Replit', 'Augment Code'] },
  { id: 'ai-agent', name: 'AI Agent', nameEn: 'AI Agent', tools: ['Claude Code', 'Manus Agent', 'Devin AI', 'Junie', 'Kiro'] },
  { id: 'ai-search', name: 'AI 搜索', nameEn: 'AI Search', tools: ['Perplexity', 'Copilot', 'NotionAi', 'Cluely'] },
  { id: 'emerging', name: '新兴工具', nameEn: 'Emerging', tools: ['Lovable', 'v0 Prompts and Tools', 'Leap.new', 'Poke', 'Qoder', 'Same.dev', 'Orchids.app'] },
  { id: 'open-source', name: '开源方案', nameEn: 'Open Source', tools: ['Open Source prompts', 'Anthropic', 'Google', 'Emergent'] },
];

export default function SystemPromptsPage() {
  const [currentView, setCurrentView] = useState<'menu' | 'category'>('menu');
  const [selectedMainCategory, setSelectedMainCategory] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');
  const [selectedPrompt, setSelectedPrompt] = useState<SystemPrompt | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [promptContent, setPromptContent] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [categorySlideIndex, setCategorySlideIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const categoryListRef = useRef<HTMLDivElement>(null);

  // 获取所有分类
  const allCategories = useMemo(() => {
    const cats = new Set<string>();
    systemPrompts.forEach(p => cats.add(p.category));
    return Array.from(cats);
  }, []);

  // 过滤提示词
  const filteredPrompts = useMemo(() => {
    let prompts = systemPrompts;

    // 按主分类过滤
    if (selectedMainCategory === 'ai-tools') {
      // 智能工具：支持二级分类
      if (selectedSubCategory !== 'all') {
        const subCat = AI_TOOLS_SUBCATEGORIES.find(s => s.id === selectedSubCategory);
        if (subCat) {
          prompts = prompts.filter(p => subCat.tools.some(t => p.category.includes(t)));
        }
      }
    }

    // 搜索过滤
    if (searchQuery) {
      prompts = prompts.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return prompts;
  }, [selectedMainCategory, selectedSubCategory, searchQuery]);

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
    const itemWidth = 100;
    const visibleItems = 6;
    const maxIndex = Math.max(0, Math.ceil(allCategories.length / visibleItems) - 1);
    let newIndex = categorySlideIndex;

    if (direction === 'left') {
      newIndex = Math.max(0, categorySlideIndex - 1);
    } else {
      newIndex = Math.min(maxIndex, categorySlideIndex + 1);
    }

    setCategorySlideIndex(newIndex);

    if (categoryListRef.current) {
      const scrollPosition = newIndex * visibleItems * itemWidth;
      categoryListRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };

  // 处理分类点击
  const handleCategoryClick = (cat: string) => {
    setSelectedSubCategory(cat);
    const catIndex = allCategories.indexOf(cat);
    const newIndex = Math.floor(catIndex / 6);
    setCategorySlideIndex(newIndex);

    if (categoryListRef.current) {
      const scrollPosition = newIndex * 6 * 100;
      categoryListRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };

  // 选择主分类
  const handleMainCategoryClick = (categoryId: string) => {
    setSelectedMainCategory(categoryId);
    setCurrentView('category');
    setSelectedSubCategory('all');
    setSelectedPrompt(null);
  };

  // 返回主菜单
  const handleBackToMenu = () => {
    setCurrentView('menu');
    setSelectedMainCategory(null);
    setSelectedSubCategory('all');
    setSelectedPrompt(null);
  };

  // 返回上一级
  const handleBackToCategory = () => {
    setSelectedSubCategory('all');
    setSelectedPrompt(null);
  };

  // 渲染一级分类菜单
  const renderMainMenu = () => (
    <div style={{ backgroundColor: COLORS.bg }} className="min-h-screen">
      {/* Header */}
      <header style={{
        backgroundColor: COLORS.bgSecondary,
        borderBottom: `1px solid ${COLORS.border}`
      }} className="h-16 flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <a
            href="/"
            style={{ color: COLORS.textSecondary }}
            className="flex items-center gap-2 hover:text-black transition-colors"
          >
            <Home className="w-5 h-5" />
          </a>
          <div style={{ backgroundColor: COLORS.border }} className="w-px h-6" />
          <div className="flex items-center gap-3">
            <Sparkle style={{ color: COLORS.accent }} className="w-5 h-5" />
            <h1 className="text-lg font-semibold tracking-tight" style={{ fontFamily: 'Times New Roman, serif' }}>
              神秘咒语盒
            </h1>
          </div>
        </div>
      </header>

      {/* 主内容区 */}
      <main className="px-6 py-12 max-w-7xl mx-auto">
        {/* 标题区 */}
        <div className="text-center mb-16">
          <h2 style={{ fontFamily: 'Times New Roman, serif' }} className="text-5xl font-bold mb-4 tracking-wide">
            MYSTERY SPELL BOX
          </h2>
          <p style={{ color: COLORS.textSecondary }} className="text-lg max-w-2xl mx-auto">
            探索 AI 工具思维方式的秘密世界，收集、整理、分享优质系统提示词
          </p>
        </div>

        {/* 分类卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {MAIN_CATEGORIES.map((cat, index) => (
            <button
              key={cat.id}
              onClick={() => handleMainCategoryClick(cat.id)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                backgroundColor: COLORS.bgSecondary,
                borderColor: hoveredCard === index ? cat.color : COLORS.border,
              }}
              className={`
                relative p-8 rounded-xl text-left transition-all duration-500 ease-out
                hover:shadow-xl hover:-translate-y-2
                border
                ${hoveredCard === index ? 'scale-105' : 'scale-100'}
              `}
            >
              {/* 悬停时的左边框装饰 */}
              <div
                className="absolute left-0 top-0 w-1 h-full rounded-l-xl transition-all duration-300"
                style={{
                  backgroundColor: cat.color,
                  transform: hoveredCard === index ? 'scaleY(1)' : 'scaleY(0)',
                }}
              />

              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 style={{ fontFamily: 'Times New Roman, serif' }} className="text-xl font-semibold mb-2">
                {cat.name}
              </h3>
              <p style={{ color: COLORS.textSecondary }} className="text-sm mb-3">
                {cat.nameEn}
              </p>
              <div style={{ color: cat.color }} className="text-sm font-medium">
                {cat.count} 个提示词
              </div>
              <p style={{ color: COLORS.textMuted }} className="text-xs mt-3">
                {cat.description}
              </p>
            </button>
          ))}
        </div>
      </main>
    </div>
  );

  // 渲染内容页面
  const renderCategoryPage = () => (
    <div style={{ backgroundColor: COLORS.bg, minHeight: '100vh', color: COLORS.text }} className="flex flex-col">
      {/* Header */}
      <header style={{
        backgroundColor: COLORS.bgSecondary,
        borderBottom: `1px solid ${COLORS.border}`
      }} className="h-16 flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button
            onClick={currentView === 'category' && selectedSubCategory !== 'all' ? handleBackToCategory : handleBackToMenu}
            style={{ color: COLORS.textSecondary }}
            className="flex items-center gap-2 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div style={{ backgroundColor: COLORS.border }} className="w-px h-6" />
          <div className="flex items-center gap-3">
            <Sparkle style={{ color: COLORS.accent }} className="w-5 h-5" />
            <h1 className="text-lg font-semibold tracking-tight" style={{ fontFamily: 'Times New Roman, serif' }}>
              {selectedMainCategory === 'ai-tools' ? '智能工具' : MAIN_CATEGORIES.find(c => c.id === selectedMainCategory)?.name}
            </h1>
          </div>
        </div>
        <div style={{ color: COLORS.textMuted }} className="text-sm">
          {filteredPrompts.length} 个提示词
        </div>
      </header>

      {/* Category Slider */}
      {selectedMainCategory === 'ai-tools' && (
        <div style={{
          backgroundColor: COLORS.bgSecondary,
          borderBottom: `1px solid ${COLORS.border}`
        }} className="relative py-4">
          <div className="flex items-center gap-2 px-4 max-w-7xl mx-auto">
            <button
              onClick={() => slideCategory('left')}
              style={{ color: COLORS.textSecondary, backgroundColor: COLORS.bgTertiary }}
              className="p-2 rounded-lg hover:bg-gray-200 transition-all duration-200 flex-shrink-0 z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div
              ref={categoryListRef}
              className="flex gap-2 overflow-x-auto scrollbar-hide flex-1 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <button
                onClick={() => {
                  setSelectedSubCategory('all');
                  setCategorySlideIndex(0);
                  if (categoryListRef.current) {
                    categoryListRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                  }
                }}
                style={{
                  backgroundColor: selectedSubCategory === 'all' ? COLORS.accent : COLORS.bgTertiary,
                  color: selectedSubCategory === 'all' ? '#fff' : COLORS.textSecondary,
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
                    backgroundColor: selectedSubCategory === cat ? COLORS.accent : COLORS.bgTertiary,
                    color: selectedSubCategory === cat ? '#fff' : COLORS.textSecondary,
                  }}
                  className="px-4 py-1.5 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-300 hover:scale-105 flex-shrink-0"
                >
                  {cat}
                </button>
              ))}
            </div>

            <button
              onClick={() => slideCategory('right')}
              style={{ color: COLORS.textSecondary, backgroundColor: COLORS.bgTertiary }}
              className="p-2 rounded-lg hover:bg-gray-200 transition-all duration-200 flex-shrink-0 z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Mobile sidebar toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{ backgroundColor: COLORS.accent }}
          className="lg:hidden fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg"
        >
          {sidebarOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
        </button>

        {/* Left sidebar */}
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
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg focus:outline-none focus:border-orange-500 transition-colors placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Prompt list */}
            <div className="flex-1 overflow-y-auto">
              {Object.entries(groupedPrompts).map(([category, prompts], groupIndex) => (
                <div
                  key={category}
                  className="mb-2"
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
                        className={`w-full text-left px-3 py-3 rounded-lg text-sm mb-1 transition-all duration-200 hover:bg-gray-100 border ${
                          selectedPrompt?.id === prompt.id ? 'border-l-2' : ''
                        }`}
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
                <div style={{ color: COLORS.textMuted }} className="p-8 text-center text-sm">
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
                  <h2 className="text-xl font-semibold tracking-tight">{selectedPrompt.name}</h2>
                  <p style={{ color: COLORS.textSecondary }} className="text-sm mt-1">{selectedPrompt.description}</p>
                  <div style={{ color: COLORS.textMuted }} className="text-xs mt-2">
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
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 text-white"
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
                      <span className="text-sm">加载中...</span>
                    </div>
                  </div>
                ) : (
                  <pre
                    style={{
                      backgroundColor: COLORS.bgSecondary,
                      border: `1px solid ${COLORS.border}`,
                      color: COLORS.textSecondary,
                    }}
                    className="whitespace-pre-wrap font-mono text-sm p-6 rounded-xl overflow-x-auto leading-relaxed"
                  >
                    {promptContent}
                  </pre>
                )}
              </div>
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

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 z-30"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>
    </div>
  );

  return currentView === 'menu' ? renderMainMenu() : renderCategoryPage();
}
