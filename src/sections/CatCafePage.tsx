import { Coffee, Construction } from 'lucide-react';

const CatCafePage = () => {
  return (
    <div className="min-h-screen bg-lobster-dark text-white flex flex-col">
      {/* Header */}
      <div className="pt-32 pb-16 text-center">
        <div className="container-custom">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 text-sm mb-6">
            <Coffee className="w-4 h-4" />
            <span>即将开业</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            猫猫<span className="text-purple-400">咖啡厅</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            一个关于猫咪的温馨空间，分享萌猫日常、养猫心得与云吸猫乐趣
          </p>
        </div>
      </div>

      {/* Under Construction */}
      <div className="flex-1 flex flex-col items-center justify-center pb-32">
        <div className="w-24 h-24 rounded-full bg-purple-500/20 flex items-center justify-center mb-8">
          <Construction className="w-12 h-12 text-purple-400" />
        </div>
        <h2 className="text-3xl font-bold mb-4">装修中</h2>
        <p className="text-white/60 text-lg mb-2">精彩内容即将呈现</p>
        <p className="text-white/40 text-sm">尽情期待...</p>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 py-8">
        <div className="container-custom text-center">
          <p className="text-white/40 text-sm">
            © 2026 猫猫咖啡厅 · 泥巴猪的实验田
          </p>
        </div>
      </div>
    </div>
  );
};

export default CatCafePage;
