import React from 'react';
import { FilmSeries } from '../SceneKit';
import { FILM } from '../theme';
import {
  TYPOLO_FILM_DURATION,
  TYPOLO_FILM_SCENES,
  TYPOLO_LOOP_DURATION,
  TypolaHeroLoopScene,
} from './scenes';

export { TYPOLO_FILM_DURATION, TYPOLO_LOOP_DURATION };

export const TypolaHeroLoop: React.FC = () => <TypolaHeroLoopScene />;

export const TypolaFilm: React.FC = () => (
  <FilmSeries
    scenes={TYPOLO_FILM_SCENES}
    sceneDurationInFrames={FILM.sceneFrames}
    transitionDurationInFrames={FILM.transitionFrames}
  />
);
