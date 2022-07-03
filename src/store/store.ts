import { configureStore } from '@reduxjs/toolkit';
import { publicApi } from 'api/publicApi';
import authReducer from './slices/auth';
import filterReducer from './slices/filter';

export const store = configureStore({
  reducer: {
    [publicApi.reducerPath]: publicApi.reducer,
    auth: authReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(publicApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
