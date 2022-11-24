import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../types/state';
import { State } from './../types/state';
import { Offer } from '../types/offers-type';
import { setOffers, setOfferLoaderStatus } from './actions';
import { APIRoutes } from '../const';

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
  state: State;
}>(
  'fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<Offer[]>(APIRoutes.Offers);
      dispatch(setOffers(data));
      dispatch(setOfferLoaderStatus(true));
    } catch {
      dispatch(setOfferLoaderStatus(false));
    }
  }
);
