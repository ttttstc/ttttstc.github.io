/** Shared render size and paper / console palettes for the two product films. */
export const VIDEO = {
  width: 1280,
  height: 720,
  fps: 30,
} as const;

export const TYPO = {
  background: '#ece4d9',
  paper: '#fffbf5',
  softPaper: '#f4f0ea',
  ink: '#292923',
  muted: '#70685f',
  line: '#d8cfc3',
  accent: '#bf492b',
  accentPale: '#f3ded4',
} as const;

export const NIMO = {
  background: '#202a26',
  surface: '#29352f',
  raised: '#34433b',
  ink: '#f5f0e7',
  muted: '#c2c9bd',
  line: '#536259',
  accent: '#b8d49e',
  accentDeep: '#425a46',
  paper: '#ece4d9',
  paperInk: '#292923',
} as const;

export const FILM = {
  sceneFrames: 220,
  transitionFrames: 18,
  loopFrames: 330,
} as const;
