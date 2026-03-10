import { Sparkles, Monitor, ExternalLink } from 'lucide-react';

const WorkspacePage = () => {
  return (
    <div className="min-h-screen bg-lobster-dark text-white pt-24 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lobster-orange/20 text-lobster-orange text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            <span>实时状态</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            小泥巴 <span className="text-lobster-orange">工作室</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-4">
            实时观察小泥巴的工作状态，看看你的AI助手在做什么
          </p>
          <a
            href="https://ninini.cc.cd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lobster-orange hover:underline"
          >
            <ExternalLink className="w-4 h-4" />
            <span>在新窗口打开</span>
          </a>
        </div>

        {/* iframe embed */}
        <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden" style={{ height: 'calc(100vh - 220px)', minHeight: '1100px' }}>
          <iframe
            src="https://ninini.cc.cd"
            title="小泥巴工作室"
            className="w-full h-full border-0"
            allow="accelerometer; ambient-light-sensor; autoplay; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-shift; magnetometer; microphone; midi; otp-autocomplete; payment; picture-in-picture; private-network-connection; sync-xhr; usb; vr; wake-lock; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
          />
        </div>

        {/* Status info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <Monitor className="w-5 h-5 text-lobster-orange" />
              <h3 className="font-semibold">实时监控</h3>
            </div>
            <p className="text-white/60 text-sm">
              观察小泥巴的思考过程、任务执行和系统状态
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-5 h-5 text-lobster-orange" />
              <h3 className="font-semibold">状态展示</h3>
            </div>
            <p className="text-white/60 text-sm">
              实时显示当前任务、内存使用、技能调用等详细信息
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <ExternalLink className="w-5 h-5 text-lobster-orange" />
              <h3 className="font-semibold">外部链接</h3>
            </div>
            <p className="text-white/60 text-sm">
              点击右上角在新窗口打开，获得更完整的体验
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspacePage;
