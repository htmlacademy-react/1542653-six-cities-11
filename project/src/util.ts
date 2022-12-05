import dayjs from 'dayjs';
import { SortType, Limits } from './const';
import { Offer } from './types/offers-type';

export const getPercent = (rating: number): string => {
  const percent = (Math.round(rating) / Limits.MaxPlaceRating) * 100;
  return `${percent}%`;
};

export const adaptAppartmentType = (type: string) => `${type[0].toUpperCase() + type.substring(1)}`;

export const getHuminizeDate = (date: string): string => dayjs(date).format('MMMM YYYY');

export const getMachineDate = (date: string): string =>dayjs(date).format('YYYY-MM-DD');

export const getSortOffer = (type: string, offers: Offer[]) => {
  switch (type) {
    case SortType.LowToHigh: return [...offers].sort((prev, next) => prev.price - next.price);
    case SortType.HighToLow: return [...offers].sort((prev, next) => next.price - prev.price);
    case SortType.Rating: return [...offers].sort((prev, next) => next.rating - prev.rating);
    default: return offers;
  }
};

export const compareDates = (date: string, nextDate: string) => dayjs(nextDate).unix() - dayjs(date).unix();
