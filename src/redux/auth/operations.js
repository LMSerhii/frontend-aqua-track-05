import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, routes } from '../../routes';
import { useDispatch, useSelector } from 'react-redux';
import { updateToken, updateTokenError } from './authSlice';

const {
  USERS,
  SIGNUP,
  SIGNIN,
  LOGOUT,
  CURRENT,
  VERIFY,
  FORGOT_REQUEST,
  RESET_REQUEST,
} = routes;

axios.defaults.baseURL = `${BASE_URL}`;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

axios.interceptors.response.use(
  function (response) {
    console.log(response);
    return response;
  },
  async function (error) {

    if (error.response.status === 500 || error.response.status === 401) {
  
      const refreshToken = localStorage.getItem('persist:auth');
      const refreshedToken = JSON.parse(refreshToken).refreshToken;
      console.log('refreshToken', refreshedToken);
      try {
        const res = await axios.post('/users/refresh', {
          refreshToken: refreshedToken,
        });
        setAuthHeader(res.data.token);

        const dispatch = useDispatch();

        dispatch(updateToken(res.data));

        return axios(error.config);
      } catch (error) {
        const dispatch = useDispatch();
        dispatch(updateTokenError({}));
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`${USERS}${SIGNUP}`, credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${USERS}${CURRENT}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`${USERS}${SIGNIN}`, credentials);
      setAuthHeader(response.data.token);
      // localStorage.setItem('refreshToken', response.data.refreshToken);
      // console.log('response.data', response.data.refreshToken);
      await thunkAPI.dispatch(fetchCurrentUser());
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post(`${USERS}${LOGOUT}`);
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const resendEmail = createAsyncThunk(
  'auth/verify',
  async (email, thunkAPI) => {
    try {
      const response = await axios.post(`${USERS}${VERIFY}`, email);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const response = await axios.get(`${USERS}${CURRENT}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.put(
        'http://localhost:3001/api/v1/users/update',
        formData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async email => {
    try {
      const response = await axios.post(`${USERS}${FORGOT_REQUEST}`, { email });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/reserPassword',
  async ({ password, otp }) => {
    try {
      const response = await axios.post(`${USERS}${RESET_REQUEST}/${otp}`, {
        password,
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const refreshTokens = state.auth.refreshToken;

    if (refreshTokens === null) {
      return thunkAPI.rejectWithValue('Unable to refresh token');
    }
    try {
      const response = await axios.post(`${USERS}/refresh`, {
        refreshToken: refreshTokens,
      });
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
