import React from 'react';
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { TransitionSeries, linearTiming } from '@remotion/transitions';
import { fade } from '@remotion/transitions/fade';
import { BODY, DISPLAY, MONO } from './fonts';
import { NIMO, TYPO } from './theme';

const SMOOTH = Easing.bezier(0.2, 0.75, 0.25, 1);

export const reveal = (frame: number, delay = 0, distance = 18) => ({
  opacity: interpolate(frame, [delay, delay + 24], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: SMOOTH,
  }),
  translate: `0px ${interpolate(frame, [delay, delay + 24], [distance, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: SMOOTH,
  })}px`,
});

export const SceneFrame: React.FC<{
  product: 'Typola' | 'nimo';
  children: React.ReactNode;
}> = ({ product, children }) => {
  const dark = product === 'nimo';
  const bg = dark ? NIMO.background : TYPO.background;
  const ink = dark ? NIMO.ink : TYPO.ink;
  const accent = dark ? NIMO.accent : TYPO.accent;

  return (
    <AbsoluteFill
      style={{
        background: bg,
        color: ink,
        fontFamily: BODY,
        overflow: 'hidden',
      }}
    >
      <AbsoluteFill
        style={{
          background: dark
            ? 'radial-gradient(ellipse 72% 90% at 78% 38%, rgba(184,212,158,.09), transparent 72%)'
            : 'radial-gradient(ellipse 78% 78% at 78% 18%, rgba(255,251,245,.82), transparent 70%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 60,
          right: 60,
          top: 34,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 5,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span
            style={{
              color: accent,
              fontFamily: DISPLAY,
              fontWeight: 700,
              fontSize: 28,
              letterSpacing: '-0.04em',
            }}
          >
            {product === 'Typola' ? 'typola' : 'nimo'}
          </span>
          <span style={{ color: dark ? NIMO.muted : TYPO.muted, fontSize: 24 }}>
            {product === 'Typola' ? '一站式 AI 创作平台' : '工程方法 Harness 控制层'}
          </span>
        </div>
        <div
          style={{
            border: `1px solid ${dark ? NIMO.line : TYPO.line}`,
            borderRadius: 999,
            padding: '8px 16px',
            color: dark ? NIMO.muted : TYPO.muted,
            fontSize: 24,
            letterSpacing: '0.04em',
          }}
        >
          工作流示意
        </div>
      </div>
      <div style={{ position: 'absolute', inset: '112px 60px 42px' }}>{children}</div>
    </AbsoluteFill>
  );
};

export const PaperPanel: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => (
  <div
    style={{
      background: TYPO.paper,
      color: TYPO.ink,
      border: `1px solid ${TYPO.line}`,
      borderRadius: 22,
      boxShadow: '0 24px 70px rgba(41,41,35,.12), 0 4px 14px rgba(41,41,35,.06)',
      overflow: 'hidden',
      ...style,
    }}
  >
    {children}
  </div>
);

export const DarkPanel: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => (
  <div
    style={{
      background: NIMO.surface,
      color: NIMO.ink,
      border: `1px solid ${NIMO.line}`,
      borderRadius: 22,
      boxShadow: '0 26px 72px rgba(0,0,0,.2)',
      overflow: 'hidden',
      ...style,
    }}
  >
    {children}
  </div>
);

export const FilmTitle: React.FC<{
  product: 'Typola' | 'nimo';
  title: React.ReactNode;
  description: React.ReactNode;
  delay?: number;
  width?: number;
}> = ({ product, title, description, delay = 0, width = 430 }) => {
  const frame = useCurrentFrame();
  const dark = product === 'nimo';
  return (
    <div style={{ position: 'absolute', left: 8, top: 42, width }}>
      <div
        style={{
          color: dark ? NIMO.accent : TYPO.accent,
          fontFamily: MONO,
          fontSize: 24,
          letterSpacing: '0.1em',
          marginBottom: 24,
          ...reveal(frame, delay),
        }}
      >
        {product === 'Typola' ? 'MATERIAL  →  CREATION' : 'TASK  →  EVIDENCE'}
      </div>
      <h1
        style={{
          fontSize: 51,
          fontFamily: DISPLAY,
          fontWeight: 600,
          lineHeight: 1.22,
          letterSpacing: '-0.035em',
          margin: 0,
          ...reveal(frame, delay + 5, 20),
        }}
      >
        {title}
      </h1>
      <p
        style={{
          maxWidth: width - 16,
          fontSize: 25,
          lineHeight: 1.65,
          color: dark ? NIMO.muted : TYPO.muted,
          margin: '24px 0 0',
          ...reveal(frame, delay + 14, 16),
        }}
      >
        {description}
      </p>
    </div>
  );
};

export type FilmScene = { id: string; component: React.FC };

export const FilmSeries: React.FC<{
  scenes: FilmScene[];
  sceneDurationInFrames: number;
  transitionDurationInFrames: number;
}> = ({ scenes, sceneDurationInFrames, transitionDurationInFrames }) => {
  return (
    <TransitionSeries>
      {scenes.map((scene, index) => (
        <React.Fragment key={scene.id}>
          {index > 0 && (
            <TransitionSeries.Transition
              presentation={fade()}
              timing={linearTiming({ durationInFrames: transitionDurationInFrames })}
            />
          )}
          <TransitionSeries.Sequence name={scene.id} durationInFrames={sceneDurationInFrames}>
            <scene.component />
          </TransitionSeries.Sequence>
        </React.Fragment>
      ))}
    </TransitionSeries>
  );
};

export const loopPhase = (frame: number, durationInFrames: number) =>
  (Math.PI * 2 * frame) / Math.max(durationInFrames - 1, 1);

export const loopProgress = (frame: number, durationInFrames: number) =>
  interpolate(frame, [0, Math.max(durationInFrames - 1, 1)], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

export const useLoopFrame = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  return { frame, durationInFrames, phase: loopPhase(frame, durationInFrames) };
};

export const LoopDot: React.FC<{ x: number; y: number; color: string; size?: number }> = ({
  x,
  y,
  color,
  size = 16,
}) => (
  <div
    style={{
      position: 'absolute',
      zIndex: 1,
      left: x,
      top: y,
      width: size,
      height: size,
      borderRadius: '50%',
      background: color,
      boxShadow: `0 0 0 9px ${color}24, 0 0 24px ${color}75`,
      translate: '-50% -50%',
    }}
  />
);
