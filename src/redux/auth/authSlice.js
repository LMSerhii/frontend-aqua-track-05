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
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setCredentials: (state, action) => {
      console.log('action.payload.accessToken', action.payload.accessToken);
      console.log('action.payload.refreshToken', action.payload.refreshToken);
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;

      state.isRefreshing = false;
    },

    setUserData: (state, action) => {
      state.user = action.payload.user;
    },

    setAccessToken: (state, action) => {
      console.log('action', action);
      state.accessToken = action.payload;

      state.isRefreshing = false;
    },
    startRefreshing: state => {
      state.isRefreshing = true;
    },

    logOut: state => {
      state.user = authInitialState.user;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken'],
};

export const {
  setUserData,
  setCredentials,
  setAccessToken,
  logOut,
  startRefreshing,
} = authSlice.actions;

export const authReducer = persistReducer(authPersistConfig, authSlice.reducer);

export const selectDailyWater = state => state.auth.user.dailyWater;

export const selectUser = state => state.auth.user;

export const selectIsLoggedIn = state => !!state.auth.accessToken;
export const selectIsRefreshing = state => state.auth.isRefreshing;

// export const selectAllUsers = state => state.auth.allUsers;
