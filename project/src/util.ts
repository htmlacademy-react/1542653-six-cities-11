import dayjs from 'dayjs';
import { MAX_PLACE_RATING } from './const';

export const getPercent = (rating: number): string => {
  const percent = (Math.round(rating) / MAX_PLACE_RATING) * 100;
  return `${percent}%`;
};

export const getHuminizeDate = (date: string): string => dayjs(date).format('MMMM YYYY');

export const getMachineDate = (date: string): string =>dayjs(date).format('YYYY-MM-DD');
