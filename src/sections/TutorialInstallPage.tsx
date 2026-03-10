import { Sparkles } from 'lucide-react';

const tutorials = [
  { title: 'OpenClaw是什么', url: '/source/tutorial/01-openclaw-intro.html', num: 1 },
  { title: '发展简史', url: '/source/tutorial/02-history.html', num: 2 },
  { title: '创始人故事', url: '/source/tutorial/03-creator.html', num: 3 },
  { title: '为什么这么火', url: '/source/tutorial/04-why-popular.html', num: 4 },
  { title: '整体架构', url: '/source/tutorial/05-architecture.html', num: 5 },
  { title: '记忆系统', url: '/source/tutorial/06-memory.html', num: 6 },
  { title: 'Agent工作区', url: '/source/tutorial/07-workspace.html', num: 7 },
  { title: 'Session与用户识别', url: '/source/tutorial/08-sessions.html', num: 8 },
  { title: '设计哲学', url: '/source/tutorial/09-philosophy.html', num: 9 },
  { title: '部署方式总览', url: '/source/tutorial/10-deployment.html', num: 10 },
  { title: '本地安装', url: '/source/tutorial/11-local-install.html', num: 11 },
  { title: 'Docker部署', url: '/source/tutorial/12-docker.html', num: 12 },
  { title: '国内云厂商一键部署', url: '/source/tutorial/13-cloud.html', num: 13 },
  { title: '首次配置', url: '/source/tutorial/14-config.html', num: 14 },
  { title: '渠道概览', url: '/source/tutorial/15-channels.html', num: 15 },
  { title: '国际平台接入', url: '/source/tutorial/16-intl-channels.html', num: 16 },
  { title: '国内平台接入', url: '/source/tutorial/17-cn-channels.html', num: 17 },
  { title: '远程访问', url: '/source/tutorial/18-remote.html', num: 18 },
  { title: 'Skills工作原理', url: '/source/tutorial/19-skills.html', num: 19 },
  { title: 'ClawHub技能市场', url: '/source/tutorial/20-clawhub.html', num: 20 },
  { title: '热门Skills推荐', url: '/source/tutorial/21-top-skills.html', num: 21 },
  { title: '自建Skill指南', url: '/source/tutorial/22-create-skill.html', num: 22 },
  { title: 'Skills安全', url: '/source/tutorial/23-skills-security.html', num: 23 },
  { title: '模型提供商总览', url: '/source/tutorial/24-providers.html', num: 24 },
  { title: '国际模型配置', url: '/source/tutorial/25-intl-models.html', num: 25 },
  { title: '国产模型配置', url: '/source/tutorial/26-cn-models.html', num: 26 },
  { title: '本地模型', url: '/source/tutorial/27-local-models.html', num: 27 },
  { title: '安全模型', url: '/source/tutorial/28-security-model.html', num: 28 },
];

const TutorialInstallPage = () => {
  return (
    <div className="min-h-screen bg-lobster-dark text-white pt-24 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lobster-orange/20 text-lobster-orange text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            <span>教程中心</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            完整 <span className="text-lobster-orange">教程</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            从入门到精通，28章完整教程体系
          </p>
        </div>

        {/* Tutorial Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tutorials.map((tutorial) => (
              <a
                key={tutorial.num}
                href={tutorial.url}
                className="group block"
              >
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-lobster-orange/50 hover:bg-white/10 transition-all h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-full bg-lobster-orange/20 flex items-center justify-center text-lobster-orange font-bold">
                      {tutorial.num}
                    </span>
                    <h3 className="text-lg font-semibold text-white group-hover:text-lobster-orange transition-colors">
                      {tutorial.title}
                    </h3>
                  </div>
                  <p className="text-white/50 text-sm">
                    点击阅读完整教程内容
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialInstallPage;
