// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { authReducer } from './auth/authSlice';
// import { trackerApi, trackerReducer } from './tracker/trackerApi';
// import { filtersReducer } from './tracker/dateSlice';

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     [trackerApi.reducerPath]: trackerReducer,
//     filter: filtersReducer,
//   },
//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//   ],
// });

// export const persistor = persistStore(store);

// store.js (з папки redux)
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
import { trackerApi, trackerReducer } from './tracker/trackerApi';
import { dateReducer } from './date/dateSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    date: dateReducer,
    [trackerApi.reducerPath]: trackerReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    trackerApi.middleware,
  ],
});

export const persistor = persistStore(store);
