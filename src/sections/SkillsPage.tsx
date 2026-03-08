import { skills, categories } from '../data/skills';
import { Sparkles, Download, ExternalLink, Search, Copy, Check } from 'lucide-react';
import { useState, useMemo } from 'react';

const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedSkill, setCopiedSkill] = useState<string | null>(null);

  const filteredSkills = useMemo(() => {
    let result = skills;

    if (activeCategory) {
      result = result.filter((s) => s.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(query) ||
          s.description.toLowerCase().includes(query) ||
          s.category.toLowerCase().includes(query)
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  const handleCopyCommand = (skillName: string) => {
    const command = `/install ${skillName}`;
    navigator.clipboard.writeText(command);
    setCopiedSkill(skillName);
    setTimeout(() => setCopiedSkill(null), 2000);
  };

  return (
    <div className="min-h-screen bg-lobster-dark text-white pt-24 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lobster-orange/20 text-lobster-orange text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            <span>ClawHub Top 100 技能集</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            全球最热门 <span className="text-lobster-orange">AI 技能库</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            汇集 ClawHub 下载量最高的 100+ 个技能，涵盖搜索、自动化、API集成、媒体处理等
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="搜索技能名称、描述或分类..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-lobster-orange transition-colors"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              activeCategory === null
                ? 'bg-lobster-orange text-white'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            全部 ({skills.length})
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === category
                  ? 'bg-lobster-orange text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {category} ({skills.filter((s) => s.category === category).length})
            </button>
          ))}
        </div>

        {/* Search Results Info */}
        {searchQuery && (
          <div className="text-center mb-6 text-white/60">
            找到 {filteredSkills.length} 个匹配 "{searchQuery}" 的技能
          </div>
        )}

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-lobster-orange/50 transition-all hover:transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lobster-orange/30 to-purple-500/30 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-lobster-orange" />
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/60">
                    {skill.category}
                  </span>
                  {skill.downloads && (
                    <span className="text-xs flex items-center gap-1 text-lobster-orange">
                      <Download className="w-3 h-3" />
                      {skill.downloads}
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-lobster-orange transition-colors">
                {skill.name.split('-').map((word) =>
                  word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ')}
              </h3>

              <p className="text-white/60 text-sm leading-relaxed mb-3">
                {skill.description}
              </p>

              {skill.author && (
                <p className="text-white/40 text-xs mb-3">
                  by {skill.author}
                </p>
              )}

              <div className="mt-auto flex items-center justify-between gap-3">
                <a
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-lobster-orange text-sm hover:underline"
                >
                  <span>查看详情</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
                <button
                  onClick={() => handleCopyCommand(skill.name)}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs transition-all ${
                    copiedSkill === skill.name
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {copiedSkill === skill.name ? (
                    <>
                      <Check className="w-3 h-3" />
                      <span>已复制</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>安装命令</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white/5 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-lobster-orange mb-2">
              {skills.length}+
            </div>
            <div className="text-white/60 text-sm">技能总数</div>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-lobster-orange mb-2">
              {categories.length}
            </div>
            <div className="text-white/60 text-sm">分类数量</div>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-lobster-orange mb-2">
              {skills.filter((s) => s.category === '搜索与研究').length}
            </div>
            <div className="text-white/60 text-sm">搜索技能</div>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-lobster-orange mb-2">
              {skills.filter((s) => s.category === '浏览器自动化').length}
            </div>
            <div className="text-white/60 text-sm">自动化技能</div>
          </div>
        </div>

        {/* Source Attribution */}
        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm">
            数据来源: <a href="https://clawhub.ai/skills?sort=downloads" target="_blank" rel="noopener noreferrer" className="text-lobster-orange hover:underline">ClawHub</a> - 按下载量排序的 Top 100 技能
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
