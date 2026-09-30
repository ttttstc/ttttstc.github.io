import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { DISPLAY, MONO } from '../fonts';
import { PaperPanel, FilmTitle, SceneFrame, reveal, useLoopFrame, LoopDot } from '../SceneKit';
import { FILM, TYPO } from '../theme';

const typolaFilmDuration = FILM.sceneFrames * 4 - FILM.transitionFrames * 3;

const FileMark: React.FC<{ color?: string }> = ({ color = TYPO.accent }) => (
  <svg width="34" height="40" viewBox="0 0 34 40" fill="none" aria-hidden="true">
    <path d="M5 2.5h15l9 9V36a1.5 1.5 0 0 1-1.5 1.5h-22A1.5 1.5 0 0 1 4 36V4a1.5 1.5 0 0 1 1-1.5Z" fill={color} fillOpacity=".12" stroke={color} strokeWidth="2" />
    <path d="M20 3v9h8" stroke={color} strokeWidth="2" />
    <path d="M10 21h13M10 27h13M10 33h8" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const TypolaLoopNode: React.FC<{ x: number; y: number; title: string; detail: string }> = ({
  x,
  y,
  title,
  detail,
}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      zIndex: 2,
      width: 196,
      minHeight: 90,
      translate: '-50% -50%',
      borderRadius: 18,
      padding: '14px 18px',
      boxSizing: 'border-box',
      background: TYPO.paper,
      border: `1px solid ${TYPO.line}`,
      boxShadow: '0 8px 26px rgba(41,41,35,.08)',
      textAlign: 'center',
    }}
  >
    <div style={{ fontSize: 25, fontWeight: 700, color: TYPO.ink, whiteSpace: 'nowrap' }}>{title}</div>
    <div style={{ fontSize: 24, color: TYPO.muted, marginTop: 5, whiteSpace: 'nowrap' }}>{detail}</div>
  </div>
);

export const TypolaHeroLoopScene: React.FC = () => {
  const { phase } = useLoopFrame();
  const cx = 320;
  const cy = 280;
  const rx = 242;
  const ry = 158;
  const angle = Math.PI + phase;
  const x = cx + rx * Math.cos(angle);
  const y = cy + ry * Math.sin(angle);

  return (
    <SceneFrame product="Typola">
      <div style={{ position: 'absolute', left: 12, top: 104, width: 430 }}>
        <div style={{ color: TYPO.accent, fontFamily: MONO, fontSize: 24, letterSpacing: '.1em' }}>
          MATERIAL → CREATION
        </div>
        <h1 style={{ fontFamily: DISPLAY, fontSize: 55, lineHeight: 1.2, letterSpacing: '-.04em', margin: '24px 0 0', color: TYPO.ink }}>
          从一份材料，<br />
          开始完整创作。
        </h1>
        <p style={{ fontSize: 25, lineHeight: 1.7, color: TYPO.muted, marginTop: 22 }}>
          AI 与场景 Skill 接进创作；<br />审阅后，成果回到本地。
        </p>
        <div style={{ display: 'flex', gap: 10, marginTop: 27, alignItems: 'center' }}>
          {['研究', '报告', 'PPT', 'HTML'].map((item) => (
            <span
              key={item}
              style={{
                padding: '9px 13px',
                borderRadius: 999,
                background: TYPO.accentPale,
                color: TYPO.accent,
                fontSize: 24,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div style={{ position: 'absolute', left: 510, top: 0, width: 640, height: 560 }}>
        <svg
          width="640"
          height="560"
          viewBox="0 0 640 560"
          style={{ position: 'absolute', inset: 0 }}
          aria-hidden="true"
        >
          <ellipse cx="320" cy="280" rx="242" ry="158" fill="none" stroke={TYPO.line} strokeWidth="2" strokeDasharray="7 12" />
        </svg>
        <TypolaLoopNode x={320} y={122} title="材料" detail="文档 · 素材" />
        <TypolaLoopNode x={562} y={280} title="AI + Skill" detail="CLI · 场景 Skill" />
        <TypolaLoopNode x={320} y={438} title="审阅" detail="对照 · 确认" />
        <TypolaLoopNode x={78} y={280} title="本地产物" detail="文稿 · 演示" />
        <div
          style={{
            position: 'absolute',
            zIndex: 2,
            left: cx,
            top: cy,
            width: 188,
            height: 116,
            translate: '-50% -50%',
            borderRadius: 24,
            background: TYPO.ink,
            color: TYPO.paper,
            boxShadow: '0 18px 54px rgba(41,41,35,.2)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ fontFamily: DISPLAY, fontSize: 30, fontWeight: 700 }}>typola</span>
          <span style={{ marginTop: 8, color: '#e6d9c9', fontSize: 24 }}>本地创作工作台</span>
        </div>
        <LoopDot x={x} y={y} color={TYPO.accent} size={16} />
      </div>
    </SceneFrame>
  );
};

const SourceRow: React.FC<{ name: string; kind: string; delay: number }> = ({ name, kind, delay }) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        height: 79,
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '0 15px',
        borderRadius: 14,
        background: TYPO.softPaper,
        border: `1px solid ${TYPO.line}`,
        ...reveal(frame, delay, 16),
      }}
    >
      <FileMark />
      <div>
        <div style={{ fontSize: 24, fontWeight: 600, color: TYPO.ink }}>{name}</div>
        <div style={{ fontSize: 24, color: TYPO.muted, marginTop: 3 }}>{kind}</div>
      </div>
    </div>
  );
};

export const TypolaFilmMaterials: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SceneFrame product="Typola">
      <FilmTitle
        product="Typola"
        title={<>材料在这里，<br />创作也在这里。</>}
        description={<>文档、笔记与素材进入工作区，写作和后续创作共享同一份上下文。</>}
      />
      <PaperPanel style={{ position: 'absolute', right: 0, top: 43, width: 660, height: 438, padding: 24, boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 18, borderBottom: `1px solid ${TYPO.line}` }}>
          <span style={{ fontSize: 26, fontWeight: 700 }}>当前工作区</span>
          <span style={{ fontFamily: MONO, fontSize: 24, color: TYPO.muted }}>Markdown · Local</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '245px 1fr', gap: 26, paddingTop: 22 }}>
          <div style={{ display: 'grid', gap: 12 }}>
            <SourceRow name="项目简报.md" kind="当前文档" delay={12} />
            <SourceRow name="访谈摘录.md" kind="工作材料" delay={23} />
            <SourceRow name="图表素材" kind="本地文件" delay={34} />
          </div>
          <div
            style={{
              minHeight: 274,
              padding: 22,
              boxSizing: 'border-box',
              borderRadius: 16,
              background: TYPO.paper,
              border: `1px solid ${TYPO.line}`,
              opacity: interpolate(frame, [20, 46], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
              translate: `0px ${interpolate(frame, [20, 46], [16, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })}px`,
            }}
          >
            <div style={{ fontFamily: MONO, fontSize: 24, color: TYPO.accent }}>正在整理</div>
            <div style={{ fontSize: 25, fontWeight: 700, marginTop: 14 }}>项目梳理.md</div>
            <div style={{ height: 1, background: TYPO.line, margin: '17px 0' }} />
            {[178, 205, 156, 190].map((width, i) => (
              <div key={i} style={{ width, height: 8, borderRadius: 8, background: i === 0 ? '#cbbdaf' : '#e2d8cb', marginTop: i === 0 ? 0 : 12 }} />
            ))}
            <div style={{ marginTop: 26, padding: '10px 12px', borderRadius: 12, background: TYPO.accentPale, color: TYPO.accent, fontSize: 24 }}>
              同一份 Markdown
            </div>
          </div>
        </div>
      </PaperPanel>
    </SceneFrame>
  );
};

const SkillCard: React.FC<{ label: string; delay: number; active?: boolean }> = ({ label, delay, active }) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        height: 69,
        borderRadius: 14,
        padding: '0 18px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        background: active ? TYPO.accentPale : '#34352f',
        color: active ? TYPO.accent : TYPO.paper,
        border: `1px solid ${active ? '#dca997' : '#505049'}`,
        fontSize: 24,
        ...reveal(frame, delay, 12),
      }}
    >
      <span style={{ color: active ? TYPO.accent : '#d3bca7', fontSize: 26 }}>✳</span>
      {label}
    </div>
  );
};

export const TypolaFilmScenes: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SceneFrame product="Typola">
      <FilmTitle
        product="Typola"
        title={<>让本机 AI，<br />走进创作现场。</>}
        description={<>连接已有的 Claude Code 或 OpenCode，再按研究、报告、PPT、HTML 等场景组织工作。</>}
      />
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 43,
          width: 660,
          height: 438,
          boxSizing: 'border-box',
          padding: 26,
          borderRadius: 22,
          color: TYPO.paper,
          background: TYPO.ink,
          boxShadow: '0 26px 76px rgba(41,41,35,.2)',
          opacity: interpolate(frame, [0, 24], [0, 1], { extrapolateRight: 'clamp' }),
          translate: `0px ${interpolate(frame, [0, 28], [18, 0], { extrapolateRight: 'clamp' })}px`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 25, fontWeight: 700 }}>SkillHub · 场景入口</div>
          <div style={{ color: '#d9c7b4', fontFamily: MONO, fontSize: 24 }}>本机 CLI</div>
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 22 }}>
          {['Claude Code', 'OpenCode'].map((name, i) => (
            <div key={name} style={{ padding: '9px 15px', borderRadius: 999, border: '1px solid #70685f', color: '#f1e8dc', fontSize: 24, ...reveal(frame, 12 + i * 8, 10) }}>{name}</div>
          ))}
        </div>
        <div style={{ color: '#d9c7b4', fontFamily: MONO, fontSize: 24, marginTop: 28, marginBottom: 12 }}>选择创作场景</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <SkillCard label="研究分析" delay={22} active />
          <SkillCard label="报告总结" delay={30} />
          <SkillCard label="PPT 生成" delay={38} />
          <SkillCard label="HTML 生成" delay={46} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 13, marginTop: 21, color: '#f1e8dc', fontSize: 24, ...reveal(frame, 54, 10) }}>
          <span style={{ color: '#c4d1af' }}>↳</span>
          <span>当前文档</span>
          <span style={{ color: '#bdb2a4' }}>进入新会话</span>
          <span style={{ color: '#c4d1af' }}>→</span>
          <span>候选稿 · 当前会话</span>
        </div>
      </div>
    </SceneFrame>
  );
};

const CompareCard: React.FC<{ title: string; text: string; accent?: boolean; delay: number }> = ({ title, text, accent, delay }) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        flex: 1,
        minHeight: 210,
        borderRadius: 16,
        border: `1px solid ${accent ? '#dca997' : TYPO.line}`,
        background: accent ? '#fff6f0' : TYPO.softPaper,
        padding: 20,
        boxSizing: 'border-box',
        ...reveal(frame, delay, 14),
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: accent ? TYPO.accent : TYPO.muted, fontSize: 24, fontFamily: MONO }}>{title}</span>
        {accent && <span style={{ color: TYPO.accent, fontSize: 24 }}>候选版本</span>}
      </div>
      <p style={{ fontSize: 25, lineHeight: 1.65, margin: '23px 0 0', color: TYPO.ink }}>{text}</p>
    </div>
  );
};

export const TypolaFilmReview: React.FC = () => {
  const frame = useCurrentFrame();
  const saved = interpolate(frame, [104, 126], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return (
    <SceneFrame product="Typola">
      <FilmTitle
        product="Typola"
        title={<>先看清改了什么，<br />再决定是否采用。</>}
        description={<>给 AI 一个明确要求，对照原文与候选稿；确认后，才写回当前文档。</>}
      />
      <PaperPanel style={{ position: 'absolute', right: 0, top: 20, width: 660, height: 510, padding: 24, boxSizing: 'border-box' }}>
        <div style={{ padding: '13px 16px', borderRadius: 13, background: TYPO.accentPale, color: TYPO.ink, fontSize: 24 }}>
          指令：<b style={{ color: TYPO.accent }}>保留原意，不增加结论</b>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 18 }}>
          <CompareCard title="原文 · 示例句" text="这次会议主要聊了项目后面要怎么做。" delay={12} />
          <span style={{ color: TYPO.accent, fontSize: 28, fontWeight: 700 }}>→</span>
          <CompareCard title="对照候选" text="会议围绕项目的后续安排展开讨论。" accent delay={36} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 16 }}>
          <span style={{ color: TYPO.muted, fontSize: 24 }}>逐处审阅 · 由你确认</span>
          <div
            style={{
              minWidth: 150,
              textAlign: 'center',
              background: TYPO.accent,
              color: TYPO.paper,
              borderRadius: 12,
              padding: '11px 16px',
              fontSize: 24,
              fontWeight: 700,
              scale: interpolate(frame, [92, 100, 108], [1, 0.96, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
            }}
          >
            采用改动
          </div>
        </div>
        <div style={{ height: 34, marginTop: 12, display: 'flex', alignItems: 'center', gap: 9, color: '#486342', fontSize: 24, opacity: saved }}>
          <span style={{ width: 20, height: 20, borderRadius: '50%', background: '#6f9065', color: '#fff', textAlign: 'center', lineHeight: '20px', fontSize: 15 }}>✓</span>
          已写回当前 Markdown
        </div>
      </PaperPanel>
    </SceneFrame>
  );
};

const CandidateRow: React.FC<{ file: string; scene: string; delay: number }> = ({ file, scene, delay }) => {
  const frame = useCurrentFrame();
  return (
    <div style={{ height: 64, display: 'flex', alignItems: 'center', gap: 13, padding: '0 13px', borderRadius: 13, background: TYPO.softPaper, border: `1px solid ${TYPO.line}`, ...reveal(frame, delay, 11) }}>
      <FileMark />
      <span style={{ flex: 1, fontSize: 24, fontWeight: 600 }}>{file}</span>
      <span style={{ color: TYPO.muted, fontSize: 24 }}>{scene}</span>
    </div>
  );
};

export const TypolaFilmDelivery: React.FC = () => {
  const frame = useCurrentFrame();
  const saved = interpolate(frame, [116, 138], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return (
    <SceneFrame product="Typola">
      <FilmTitle
        product="Typola"
        title={<>先审阅候选稿，<br />再存成文件。</>}
        description={<>会话产物先留在当前流程；点击「存为文件」后，才进入工作区。文档也可导出 PDF、Word 或 HTML。</>}
      />
      <PaperPanel style={{ position: 'absolute', right: 0, top: 30, width: 660, height: 490, padding: 22, boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 14, borderBottom: `1px solid ${TYPO.line}` }}>
          <div style={{ fontSize: 25, fontWeight: 700 }}>会话候选产物</div>
          <div style={{ padding: '7px 12px', borderRadius: 999, background: TYPO.accentPale, color: TYPO.accent, fontFamily: MONO, fontSize: 24 }}>临时</div>
        </div>
        <div style={{ display: 'grid', gap: 8, marginTop: 14 }}>
          <CandidateRow file="项目研究摘要.md" scene="研究分析" delay={10} />
          <CandidateRow file="阶段汇报草稿.pptx" scene="PPT 生成" delay={19} />
          <CandidateRow file="数据简报.html" scene="HTML 生成" delay={28} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 13 }}>
          <div style={{ background: TYPO.accent, color: TYPO.paper, borderRadius: 12, padding: '10px 18px', fontSize: 24, fontWeight: 700, scale: interpolate(frame, [94, 102, 110], [1, 0.96, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) }}>存为文件</div>
          <div style={{ color: '#486342', fontSize: 24, opacity: saved }}>✓ 已保存到 .typola-output/</div>
        </div>
        <div style={{ marginTop: 14, paddingTop: 12, borderTop: `1px solid ${TYPO.line}`, display: 'flex', alignItems: 'center', gap: 9, color: TYPO.muted, fontSize: 24, ...reveal(frame, 48, 8) }}>
          <span style={{ color: TYPO.accent }}>↳</span>
          当前文档导出：PDF · Word · HTML
        </div>
      </PaperPanel>
      <div style={{ position: 'absolute', left: 10, bottom: 3, display: 'flex', alignItems: 'center', gap: 12, color: TYPO.accent, fontSize: 24, opacity: interpolate(frame, [55, 75], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) }}>
        <span style={{ width: 9, height: 9, borderRadius: '50%', background: TYPO.accent }} />
        typola · 从材料到本地交付
      </div>
    </SceneFrame>
  );
};

export const TYPOLO_FILM_SCENES = [
  { id: 'TypolaMaterials', component: TypolaFilmMaterials },
  { id: 'TypolaScenes', component: TypolaFilmScenes },
  { id: 'TypolaReview', component: TypolaFilmReview },
  { id: 'TypolaDelivery', component: TypolaFilmDelivery },
];

export const TYPOLO_FILM_DURATION = typolaFilmDuration;
export const TYPOLO_LOOP_DURATION = FILM.loopFrames;
