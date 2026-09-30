import React from 'react';
import { FilmSeries } from '../SceneKit';
import { FILM } from '../theme';
import {
  NIMO_FILM_DURATION,
  NIMO_FILM_SCENES,
  NIMO_LOOP_DURATION,
  NimoHeroLoopScene,
} from './scenes';

export { NIMO_FILM_DURATION, NIMO_LOOP_DURATION };

export const NimoHeroLoop: React.FC = () => <NimoHeroLoopScene />;

export const NimoFilm: React.FC = () => (
  <FilmSeries
    scenes={NIMO_FILM_SCENES}
    sceneDurationInFrames={FILM.sceneFrames}
    transitionDurationInFrames={FILM.transitionFrames}
  />
);
