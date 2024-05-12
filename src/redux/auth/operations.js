import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, routes } from '../../routes';
import toast from 'react-hot-toast';

const { USERS, SIGNUP, SIGNIN, LOGOUT, CURRENT } = routes;

axios.defaults.baseURL = `${BASE_URL}`;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`${USERS}${SIGNUP}`, credentials);
      return response.data;
    } catch (error) {
      if (error.response.status === 409) {
        toast.error('User with this email already exists');
        thunkAPI.rejectWithValue(error.response.data.message);
        throw error;
      }
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`${USERS}${SIGNIN}`, credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post(`${USERS}${LOGOUT}`);
    clearAuthHeader();
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});

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
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const uploadPhoto = createAsyncThunk(
  'uploadPhoto',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dci7ufqsp/image/upload'
      );
      return response.data.secure_url;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'updateUser',
  async ({ body: formData }, thunkAPI) => {
    try {
      const response = await axios.patch(`${USERS}${CURRENT}`, {
        body: formData,
      });
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/v1/users/forgot-password',
        { email }
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/reserPassword',
  async ({password, otp}) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/v1/users/reset-password/${otp}`,
        { password }
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

// Катя накидала щось, є питання /////

// export const waterAmountInPercent = createAsyncThunk(
//   'auth/tracker',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get(`${USERS}`);
//       console.log(response.data);
//       const dailyWater = response.data.dailyWater;

//       const res = await axios.get(`${TRACKER}`);
//       const totalWaterAmountPerDay = res.data.totalAmount;
//       const inPercentage = (totalWaterAmountPerDay * 100) / dailyWater;
//       return inPercentage;
// export const currentUser = createAsyncThunk(
//   'current/upload',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get(`${USERS}${CURRENT}`);
//       return response.data;
//     } catch (error) {
//       thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
