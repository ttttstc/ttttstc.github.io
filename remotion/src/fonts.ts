/** Project typography: Playfair / Inter / JetBrains with Noto Chinese glyphs. */
import { loadFont as loadPlayfair } from '@remotion/google-fonts/PlayfairDisplay';
import { loadFont as loadInter } from '@remotion/google-fonts/Inter';
import { loadFont as loadMono } from '@remotion/google-fonts/JetBrainsMono';
import { loadVariableFont as loadSerifSC } from '@remotion/google-fonts/NotoSerifSC';
import { loadVariableFont as loadSansSC } from '@remotion/google-fonts/NotoSansSC';

const { fontFamily: playfair } = loadPlayfair('normal', {
  weights: ['600', '700'],
  subsets: ['latin'],
});
const { fontFamily: inter } = loadInter('normal', {
  weights: ['400', '500', '600', '700'],
  subsets: ['latin'],
});
const { fontFamily: mono } = loadMono('normal', {
  weights: ['400', '500', '700'],
  subsets: ['latin'],
});
const { fontFamily: serifSC } = loadSerifSC('normal', { subsets: ['chinese-simplified'] });
const { fontFamily: sansSC } = loadSansSC('normal', { subsets: ['chinese-simplified'] });

export const DISPLAY = `${playfair}, ${serifSC}, Georgia, serif`;
export const BODY = `${inter}, ${sansSC}, sans-serif`;
export const MONO = `${mono}, ui-monospace, monospace`;
