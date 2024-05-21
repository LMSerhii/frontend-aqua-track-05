import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/authSlice';
import { trackerApi } from './tracker/trackerApi';
import { dateReducer } from './date/dateSlice';
import { authApi } from './authApi/authApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    date: dateReducer,

    [authApi.reducerPath]: authApi.reducer,
    [trackerApi.reducerPath]: trackerApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    authApi.middleware,
    trackerApi.middleware,
  ],
});

export const persistor = persistStore(store);
