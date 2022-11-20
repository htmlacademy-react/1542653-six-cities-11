import dayjs from 'dayjs';
import { MAX_PLACE_RATING, SortType } from './const';
import { Offer } from './types/offers-type';

export const getPercent = (rating: number): string => {
  const percent = (Math.round(rating) / MAX_PLACE_RATING) * 100;
  return `${percent}%`;
};

export const getHuminizeDate = (date: string): string => dayjs(date).format('MMMM YYYY');

export const getMachineDate = (date: string): string =>dayjs(date).format('YYYY-MM-DD');

export const sortOffer = (type: string, offers: Offer[]) => {
  switch (type) {
    case SortType.LowToHigh: return [...offers].sort((prev, next) => prev.price - next.price);
    case SortType.HighToLow: return [...offers].sort((prev, next) => next.price - prev.price);
    case SortType.Rating: return [...offers].sort((prev, next) => next.rating - prev.rating);
    default: return offers;
  }
};
