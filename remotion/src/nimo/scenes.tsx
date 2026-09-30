import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { DISPLAY, MONO } from '../fonts';
import { DarkPanel, FilmTitle, PaperPanel, SceneFrame, reveal, useLoopFrame, LoopDot } from '../SceneKit';
import { FILM, NIMO, TYPO, VIDEO } from '../theme';

const nimoFilmDuration = FILM.sceneFrames * 4 - FILM.transitionFrames * 3;

const NimoLoopNode: React.FC<{ x: number; y: number; number: string; title: string }> = ({
  x,
  y,
  number,
  title,
}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      zIndex: 2,
      width: 180,
      height: 88,
      translate: '-50% -50%',
      borderRadius: 17,
      boxSizing: 'border-box',
      padding: '12px 14px',
      background: NIMO.surface,
      border: `1px solid ${NIMO.line}`,
      boxShadow: '0 8px 25px rgba(0,0,0,.18)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 4,
    }}
  >
    <span style={{ fontFamily: MONO, fontSize: 24, color: NIMO.accent }}>{number}</span>
    <span style={{ fontSize: 24, color: NIMO.ink, fontWeight: 600 }}>{title}</span>
  </div>
);

export const NimoHeroLoopScene: React.FC = () => {
  const { phase } = useLoopFrame();
  const cx = 320;
  const cy = 280;
  const rx = 236;
  const ry = 178;
  const angle = -Math.PI / 2 + phase;
  const x = cx + rx * Math.cos(angle);
  const y = cy + ry * Math.sin(angle);

  return (
    <SceneFrame product="nimo">
      <div style={{ position: 'absolute', left: 12, top: 105, width: 430 }}>
        <div style={{ color: NIMO.accent, fontFamily: MONO, fontSize: 24, letterSpacing: '.1em' }}>
          TASK → EVIDENCE → KNOWLEDGE
        </div>
        <h1 style={{ fontFamily: DISPLAY, fontSize: 54, lineHeight: 1.22, letterSpacing: '-.035em', margin: '24px 0 0', color: NIMO.ink }}>
          让工程方法，<br />
          跟着任务一起走。
        </h1>
        <p style={{ fontSize: 25, lineHeight: 1.7, color: NIMO.muted, marginTop: 22 }}>
          宿主可以替换，流程、能力、知识与验收标准保持清楚。
        </p>
        <div style={{ marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 12, color: NIMO.accent, fontSize: 24, border: `1px solid ${NIMO.line}`, borderRadius: 999, padding: '10px 16px' }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: NIMO.accent }} />
          工程方法 Harness 控制层
        </div>
      </div>

      <div style={{ position: 'absolute', left: 520, top: 0, width: 640, height: 560 }}>
        <svg width="640" height="560" viewBox="0 0 640 560" style={{ position: 'absolute', inset: 0 }} aria-hidden="true">
          <ellipse cx="320" cy="280" rx="236" ry="178" fill="none" stroke={NIMO.line} strokeWidth="2" strokeDasharray="7 12" />
        </svg>
        <NimoLoopNode x={320} y={102} number="01" title="澄清范围" />
        <NimoLoopNode x={544} y={210} number="02" title="复现问题" />
        <NimoLoopNode x={458} y={438} number="03" title="最小修复" />
        <NimoLoopNode x={182} y={438} number="04" title="验证证据" />
        <NimoLoopNode x={96} y={210} number="05" title="沉淀知识" />
        <div
          style={{
            position: 'absolute',
            zIndex: 2,
            left: cx,
            top: cy,
            width: 216,
            height: 112,
            translate: '-50% -50%',
            borderRadius: 22,
            background: NIMO.accent,
            color: NIMO.background,
            boxShadow: '0 18px 54px rgba(0,0,0,.24)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 30 }}>nimo</span>
          <div style={{ width: '100%', boxSizing: 'border-box', marginTop: 7, padding: '0 12px', textAlign: 'center', fontSize: 18, lineHeight: 1.1, fontWeight: 600 }}>
            ENGINEERING<br />METHOD
          </div>
        </div>
        <LoopDot x={x} y={y} color={NIMO.accent} size={15} />
      </div>
    </SceneFrame>
  );
};

const LayerRow: React.FC<{ title: string; detail: string; active?: boolean; delay: number }> = ({ title, detail, active, delay }) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        display: 'flex',
        minHeight: 61,
        alignItems: 'center',
        gap: 16,
        padding: '8px 16px',
        boxSizing: 'border-box',
        borderRadius: 13,
        background: active ? NIMO.accent : NIMO.raised,
        color: active ? NIMO.background : NIMO.ink,
        border: `1px solid ${active ? NIMO.accent : NIMO.line}`,
        ...reveal(frame, delay, 12),
      }}
    >
      <span style={{ width: 210, flex: '0 0 210px', whiteSpace: 'nowrap', fontSize: 22, fontWeight: 700 }}>{title}</span>
      <span style={{ fontSize: 24, color: active ? '#35463a' : NIMO.muted }}>{detail}</span>
    </div>
  );
};

export const NimoFilmPosition: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SceneFrame product="nimo">
    <FilmTitle
      product="nimo"
      title={<>Agent 与项目，<br />用工程方法连接。</>}
      description={<>nimo Harness 组织原则、流程、能力、知识与验证方法。任务由宿主执行，强制门禁由项目 CI 承担。</>}
    />
    <DarkPanel style={{ position: 'absolute', right: 0, top: 30, width: 660, height: 490, padding: 23, boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 15, borderBottom: `1px solid ${NIMO.line}` }}>
        <span style={{ fontSize: 24, fontWeight: 700 }}>AI 研发工作区</span>
        <span style={{ fontFamily: MONO, fontSize: 24, color: NIMO.muted }}>工作流示意</span>
      </div>
      <div style={{ display: 'grid', gap: 10, marginTop: 17 }}>
        <LayerRow title="模型" detail="推理能力" delay={9} />
        <LayerRow title="Agent 宿主" detail="会话 · 工具 · 权限" delay={19} />
        <LayerRow title="nimo · 工程方法层" detail="原则 · 流程 · 能力 · 知识 · 验证" active delay={29} />
        <LayerRow title="项目资产" detail="代码 · 配置 · 项目约定" delay={39} />
      </div>
      <div style={{ marginTop: 13, display: 'flex', alignItems: 'center', gap: 12, color: NIMO.muted, fontSize: 24, ...reveal(frame, 49, 10) }}>
        <span style={{ color: NIMO.accent }}>↳</span>
        CI 强制门禁 · 在项目自己的流水线执行
      </div>
    </DarkPanel>
  </SceneFrame>
  );
};

const StepCard: React.FC<{ number: string; title: string; delay: number; active?: boolean }> = ({ number, title, delay, active }) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        width: 137,
        height: 131,
        flex: '0 0 137px',
        borderRadius: 16,
        boxSizing: 'border-box',
        background: active ? NIMO.accent : NIMO.raised,
        color: active ? NIMO.background : NIMO.ink,
        border: `1px solid ${active ? NIMO.accent : NIMO.line}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 14,
        ...reveal(frame, delay, 12),
      }}
    >
      <span style={{ fontFamily: MONO, color: active ? NIMO.background : NIMO.accent, fontSize: 24 }}>{number}</span>
      <span style={{ fontSize: 24, fontWeight: 700 }}>{title}</span>
    </div>
  );
};

export const NimoFilmWorkflow: React.FC = () => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [35, 145], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return (
    <SceneFrame product="nimo">
      <FilmTitle
        product="nimo"
        title={<>先弄清问题，<br />再做最小改动。</>}
        description={<>把模糊请求变成可复核的工程步骤，验证跟着交付一起走。</>}
      />
      <DarkPanel style={{ position: 'absolute', right: 0, top: 43, width: 660, height: 438, padding: 24, boxSizing: 'border-box' }}>
        <div style={{ color: NIMO.muted, fontFamily: MONO, fontSize: 24 }}>使用 nimo-mode</div>
        <div style={{ marginTop: 10, borderRadius: 13, background: '#202a26', padding: '15px 17px', color: NIMO.ink, fontSize: 25 }}>
          登录后页面一直加载
        </div>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', marginTop: 37 }}>
          <div style={{ position: 'absolute', left: 28, right: 28, top: 29, height: 3, background: NIMO.line }} />
          <div style={{ position: 'absolute', left: 28, top: 29, width: `${progress * 100}%`, maxWidth: 568, height: 3, background: NIMO.accent, transformOrigin: 'left' }} />
          <StepCard number="01" title="澄清范围" delay={15} active />
          <StepCard number="02" title="复现问题" delay={25} />
          <StepCard number="03" title="最小修复" delay={35} />
          <StepCard number="04" title="验证证据" delay={45} />
        </div>
        <div style={{ marginTop: 25, display: 'flex', justifyContent: 'space-between', color: NIMO.muted, fontSize: 24 }}>
          <span>重现后再改</span>
          <span>结论对照真实输出</span>
        </div>
      </DarkPanel>
    </SceneFrame>
  );
};

const MethodTile: React.FC<{ title: string; detail: string; delay: number }> = ({ title, detail, delay }) => {
  const frame = useCurrentFrame();
  return (
    <div style={{ height: 92, padding: '14px 16px', boxSizing: 'border-box', borderRadius: 14, background: NIMO.raised, border: `1px solid ${NIMO.line}`, ...reveal(frame, delay, 12) }}>
      <div style={{ color: NIMO.accent, fontSize: 24, fontWeight: 700 }}>{title}</div>
      <div style={{ color: NIMO.muted, marginTop: 5, fontSize: 24 }}>{detail}</div>
    </div>
  );
};

export const NimoFilmKnowledge: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SceneFrame product="nimo">
      <FilmTitle
        product="nimo"
        title={<>把经验留下，<br />下次接着用。</>}
        description={<>项目规则挑出适合复用的上下文，下一次任务需要时再带入。</>}
      />
      <DarkPanel style={{ position: 'absolute', right: 0, top: 43, width: 660, height: 438, padding: 24, boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 25, fontWeight: 700 }}>同一套工程方法</span>
          <span style={{ fontFamily: MONO, fontSize: 24, color: NIMO.muted }}>可替换 · 可复用</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 11, marginTop: 20 }}>
          <MethodTile title="原则" detail="边界与取舍" delay={10} />
          <MethodTile title="工作流" detail="任务步骤" delay={18} />
          <MethodTile title="能力" detail="可替换的执行方法" delay={26} />
          <MethodTile title="验证" detail="检查要求与证据" delay={34} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 13, marginTop: 19 }}>
          <div style={{ width: 176, height: 74, borderRadius: 14, background: NIMO.accentDeep, border: `1px solid ${NIMO.accent}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', ...reveal(frame, 46, 12) }}>
            <span style={{ color: NIMO.accent, fontSize: 24, fontWeight: 700 }}>项目知识</span>
            <span style={{ color: NIMO.ink, fontSize: 24, marginTop: 4 }}>核实后维护</span>
          </div>
          <span style={{ color: NIMO.accent, fontSize: 27 }}>→</span>
          <div style={{ width: 176, height: 74, borderRadius: 14, background: NIMO.raised, border: `1px solid ${NIMO.line}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', ...reveal(frame, 56, 12) }}>
            <span style={{ color: NIMO.ink, fontSize: 24, fontWeight: 700 }}>下一次任务</span>
            <span style={{ color: NIMO.muted, fontSize: 24, marginTop: 4 }}>需要时引用</span>
          </div>
        </div>
        <div style={{ marginTop: 12, color: NIMO.muted, textAlign: 'center', fontSize: 24, ...reveal(frame, 66, 8) }}>普通任务只判断知识影响；审计与维护按授权进行</div>
      </DarkPanel>
    </SceneFrame>
  );
};

const VerdictRow: React.FC<{ name: string; status: string; tone: 'pass' | 'pending'; delay: number }> = ({ name, status, tone, delay }) => {
  const frame = useCurrentFrame();
  const pass = tone === 'pass';
  return (
    <div
      style={{
        height: 72,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 18px',
        borderRadius: 14,
        background: pass ? '#e6efe0' : '#f0eade',
        border: `1px solid ${pass ? '#b9cbaa' : '#d6c7aa'}`,
        color: pass ? '#344b2f' : '#625638',
        ...reveal(frame, delay, 14),
      }}
    >
      <span style={{ fontSize: 24, fontWeight: 600 }}>{name}</span>
      <span style={{ fontFamily: MONO, fontSize: 24, fontWeight: 700 }}>{status}</span>
    </div>
  );
};

export const NimoFilmEvidence: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SceneFrame product="nimo">
      <FilmTitle
        product="nimo"
        title={<>结果写清证据，<br />没做的也写明。</>}
        description={<>每个状态都对应实际检查范围。未运行的服务检查，继续标成未验证。</>}
      />
      <PaperPanel style={{ position: 'absolute', right: 0, top: 43, width: 660, height: 438, padding: 24, boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 15, borderBottom: `1px solid ${TYPO.line}` }}>
          <div>
            <div style={{ fontSize: 24, fontWeight: 700, color: TYPO.ink }}>验证记录 · 示例任务</div>
            <div style={{ fontSize: 24, color: TYPO.muted, marginTop: 5 }}>登录后页面持续加载</div>
          </div>
          <div style={{ fontFamily: MONO, fontSize: 24, color: TYPO.muted, ...reveal(frame, 12, 8) }}>工作流示意</div>
        </div>
        <div style={{ display: 'grid', gap: 12, marginTop: 19 }}>
          <VerdictRow name="登录问题复现" status="PASS" tone="pass" delay={12} />
          <VerdictRow name="单元检查" status="PASS" tone="pass" delay={26} />
          <VerdictRow name="在线服务检查" status="NOT RUN" tone="pending" delay={40} />
        </div>
        <div style={{ marginTop: 17, display: 'flex', alignItems: 'center', gap: 12, color: TYPO.muted, fontSize: 24, ...reveal(frame, 54, 8) }}>
          <span style={{ color: TYPO.accent }}>↳</span>
          交付记录保留通过项与未验证项
        </div>
      </PaperPanel>
      <div style={{ position: 'absolute', left: 10, bottom: 3, display: 'flex', alignItems: 'center', gap: 12, color: NIMO.accent, fontSize: 24, opacity: interpolate(frame, [55, 75], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) }}>
        <span style={{ width: 9, height: 9, borderRadius: '50%', background: NIMO.accent }} />
        nimo · 工程方法随宿主切换，标准留在项目
      </div>
    </SceneFrame>
  );
};

export const NIMO_FILM_SCENES = [
  { id: 'NimoPosition', component: NimoFilmPosition },
  { id: 'NimoWorkflow', component: NimoFilmWorkflow },
  { id: 'NimoEvidence', component: NimoFilmEvidence },
  { id: 'NimoKnowledge', component: NimoFilmKnowledge },
];

export const NIMO_FILM_DURATION = nimoFilmDuration;
export const NIMO_LOOP_DURATION = FILM.loopFrames;
export const NIMO_WIDTH = VIDEO.width;
