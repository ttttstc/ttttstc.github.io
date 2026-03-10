import { Sparkles, BookOpen } from 'lucide-react';

const TutorialInstallPage = () => {

  return (
    <div className="min-h-screen bg-lobster-dark text-white">
      {/* Header */}
      <div className="pt-24 pb-6 border-b border-white/10">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lobster-orange/20 text-lobster-orange text-sm">
                <Sparkles className="w-4 h-4" />
                <span>教程中心</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold">
                OpenClaw <span className="text-lobster-orange">完整教程</span>
              </h1>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <BookOpen className="w-4 h-4" />
              <span>19篇教程 · 从入门到精通</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tutorial iframe container */}
      <div className="container-custom py-6">
        <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden" style={{ height: 'calc(100vh - 220px)', minHeight: '700px' }}>
          <iframe
            src="/source/tutorial/awesome/index.html"
            title="OpenClaw 教程"
            className="w-full h-full border-0"
            allow="accelerometer; ambient-light-sensor; autoplay; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-shift; magnetometer; microphone; midi; otp-autocomplete; payment; picture-in-picture; private-network-connection; sync-xhr; usb; vr; wake-lock; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
          />
        </div>
      </div>
    </div>
  );
};

export default TutorialInstallPage;
