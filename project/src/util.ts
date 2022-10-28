import { MAX_PLACE_RATING } from './const';

export const getPercent = (rating: number): string => {
  const percent = (rating / MAX_PLACE_RATING) * 100;
  return `${percent}%`;
};
