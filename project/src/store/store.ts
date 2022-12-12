import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { rootReducer } from './root-reducer';

const api = createAPI();

const store = configureStore({
  reducer: rootReducer,
  middleware: (gerDefaultMiddleware) => gerDefaultMiddleware({
    thunk: {
      extraArgument: api
    }
  })
});

export default store;

