import { configureStore } from '@reduxjs/toolkit';
import { publicApi } from 'api/publicApi';

export const store = configureStore({
  reducer: {
    [publicApi.reducerPath]: publicApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(publicApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
