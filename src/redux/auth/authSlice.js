import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const authInitialState = {
  user: {
    name: null,
    email: null,
    avatar: '',
    gender: null,
    weight: null,
    sportTime: null,
    dailyWater: null,
  },
  accessToken: null,
  refreshToken: null,

  isRefreshing: false,

  isDailyRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setCredentials: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;

      state.isRefreshing = false;
    },

    setUserData: (state, action) => {
      state.user = action.payload.user;
    },

    setAccessToken: (state, action) => {
      state.accessToken = action.payload;

      state.isRefreshing = false;
    },
    startRefreshing: state => {
      state.isRefreshing = true;
    },

    startDailyRefreshing: state => {
      state.isDailyRefreshing = true;
    },

    stopDailyRefreshing: state => {
      state.isDailyRefreshing = false;
    },

    logOut: state => {
      state.user = authInitialState.user;
      state.accessToken = null;
      state.refreshToken = null;
      state.isRefreshing = false;
    },
  },
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken', 'user'],
};

export const {
  setUserData,
  setCredentials,
  setAccessToken,
  logOut,
  startRefreshing,
  startDailyRefreshing,
  stopDailyRefreshing,
} = authSlice.actions;

export const authReducer = persistReducer(authPersistConfig, authSlice.reducer);

export const selectDailyWater = state => state.auth.user.dailyWater;

export const selectUser = state => state.auth.user;

export const selectIsLoggedIn = state => !!state.auth.accessToken;
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsDailyRefreshing = state => state.auth.isDailyRefreshing;
