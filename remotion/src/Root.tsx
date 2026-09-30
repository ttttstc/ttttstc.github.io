import React from 'react';
import { Composition, Folder } from 'remotion';
import { NIMO_FILM_DURATION, NIMO_LOOP_DURATION, NimoFilm, NimoHeroLoop } from './nimo/NimoHero';
import { TYPOLO_FILM_DURATION, TYPOLO_LOOP_DURATION, TypolaFilm, TypolaHeroLoop } from './typola/TypolaHero';
import { VIDEO } from './theme';

export const RemotionRoot: React.FC = () => (
  <>
    <Folder name="Typola">
      <Composition
        id="TypolaHeroLoop"
        component={TypolaHeroLoop}
        width={VIDEO.width}
        height={VIDEO.height}
        fps={VIDEO.fps}
        durationInFrames={TYPOLO_LOOP_DURATION}
      />
      <Composition
        id="TypolaFilm"
        component={TypolaFilm}
        width={VIDEO.width}
        height={VIDEO.height}
        fps={VIDEO.fps}
        durationInFrames={TYPOLO_FILM_DURATION}
      />
    </Folder>
    <Folder name="nimo">
      <Composition
        id="NimoHeroLoop"
        component={NimoHeroLoop}
        width={VIDEO.width}
        height={VIDEO.height}
        fps={VIDEO.fps}
        durationInFrames={NIMO_LOOP_DURATION}
      />
      <Composition
        id="NimoFilm"
        component={NimoFilm}
        width={VIDEO.width}
        height={VIDEO.height}
        fps={VIDEO.fps}
        durationInFrames={NIMO_FILM_DURATION}
      />
    </Folder>
  </>
);
