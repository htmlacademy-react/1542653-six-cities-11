import { MAX_PLACE_RATING } from './const';

export const getPercent = (rating: number): string => {
  const percent = (Math.round(rating) / MAX_PLACE_RATING) * 100;
  return `${percent}%`;
};
