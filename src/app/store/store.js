import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from '../../processes/api/posts';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware),
});
