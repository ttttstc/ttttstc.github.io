import { skills, categories } from '../data/skills';
import { ChevronRight, Sparkles } from 'lucide-react';
import { useState } from 'react';

const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredSkills = activeCategory
    ? skills.filter((s) => s.category === activeCategory)
    : skills;

  return (
    <div className="min-h-screen bg-lobster-dark text-white pt-24 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lobster-orange/20 text-lobster-orange text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Claude Code 技能集</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            我的 <span className="text-lobster-orange">AI 技能库</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            集成了 50+ 个 Claude Code 技能，涵盖开发、设计、内容创作、效率工具等多个领域
          </p>
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
                <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/60">
                  {skill.category}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-lobster-orange transition-colors">
                {skill.name.split('-').map((word) =>
                  word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ')}
              </h3>

              <p className="text-white/60 text-sm leading-relaxed">
                {skill.description}
              </p>

              <div className="mt-4 flex items-center text-lobster-orange text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <span>了解更多</span>
                <ChevronRight className="w-4 h-4 ml-1" />
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
              {skills.filter((s) => s.category === '前端开发').length}
            </div>
            <div className="text-white/60 text-sm">前端技能</div>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-lobster-orange mb-2">
              {skills.filter((s) => s.category === '效率工具').length}
            </div>
            <div className="text-white/60 text-sm">效率工具</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
