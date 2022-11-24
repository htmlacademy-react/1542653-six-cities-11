import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import { createAPI } from '../services/api';

const api = createAPI();

const store = configureStore({
  reducer,
  middleware: (gerDefaultMiddleware) => gerDefaultMiddleware({
    thunk: {
      extraArgument: api
    }
  })
});

export default store;

