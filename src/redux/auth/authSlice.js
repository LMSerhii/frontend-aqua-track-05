import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  logIn,
  logOut,
  refreshUser,
  register,
  resendEmail,
  updateUser,
  forgotPassword,
  resetPassword,
  refreshToken,
  fetchCurrentUser,
} from './operations';
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
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setDateFromGoogle(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = true;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    updateToken(state, action) {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    },
    updateTokenError(state, action) {
      state.user = {
        name: null,
        email: null,
        avatarURL: null,
        gender: null,
        weight: null,
        sportTime: null,
        dailyWater: null,
      };
      state.token = null;
      state.refreshToken = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(register.rejected, state => {
        state.error = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.refreshToken = action.payload.refreshToken;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: '', email: '' };
        state.token = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
      })
      .addCase(resendEmail.pending, state => {
        state.error = null;
      })
      .addCase(resendEmail.fulfilled, state => {
        state.error = null;
      })
      .addCase(resendEmail.rejected, state => {
        state.error = true;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(updateUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(forgotPassword.pending, state => {
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, state => {
        state.error = null;
      })
      .addCase(forgotPassword.rejected, state => {
        state.error = true;
      })
      .addCase(resetPassword.pending, state => {
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, state => {
        state.error = null;
      })
      .addCase(resetPassword.rejected, state => {
        state.error = true;
      });
  },
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'refreshToken'],
};

export const { setDateFromGoogle } = authSlice.actions;

export const authReducer = persistReducer(authPersistConfig, authSlice.reducer);

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectDailyWater = state => state.auth.user.dailyWater;

export const selectUser = state => state.auth.user;
export const { setToken } = authSlice.actions;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const { updateToken, updateTokenError } = authSlice.actions;
