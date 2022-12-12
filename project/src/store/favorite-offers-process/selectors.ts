import { NameSpaces } from '../../const';
import { State } from '../../types/state';
import { Offer } from '../../types/offers-type';

export const getFavoriteOffers = (state: State): Offer[] => state[NameSpaces.Favorite].favorites;
