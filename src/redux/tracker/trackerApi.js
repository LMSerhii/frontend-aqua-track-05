import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../routes';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { refreshToken, refreshUser } from '../auth/operations';
import { updateTokenError } from '../auth/authSlice';

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const { dispatch } = api;

  let result = await fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders(headers, { getState }) {
      const token = getState().auth.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  })(args, api, extraOptions);

  const { error } = result;

  if (error && (error.status === 401 || error.status === 500)) {
    await dispatch(refreshToken());

    try {
      result = await fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders(headers, { getState }) {
          const token = getState().auth.token;

          if (token) {
            headers.set('Authorization', `Bearer ${token}`);
          }

          return headers;
        },
      })(args, api, extraOptions);
    } catch (refreshError) {
      dispatch(updateTokenError());
    }
  }

  return result;
};

export const trackerApi = createApi({
  reducerPath: 'trackers',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Trackers'],
  endpoints: builder => ({
    getDailyTrack: builder.query({
      query: date => `/water/daily_track?date=${date}`,
      providesTags: ['Trackers'],
    }),

    getAllEntriesByMonth: builder.query({
      query: month => `/water/month?month=${month}`,
      providesTags: ['Trackers'],
    }),

    createEntry: builder.mutation({
      query: body => ({
        url: `/water/add`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Trackers'],
    }),

    updateEntry: builder.mutation({
      query: ({ date, ...entry }) => ({
        url: `/water/edit?date=${date}`,
        method: 'PUT',
        body: entry,
      }),
      invalidatesTags: ['Trackers'],
    }),

    deleteEntry: builder.mutation({
      query: ({ date, ...entry }) => ({
        url: `/water/delete?date=${date}`,
        method: 'PUT',
        body: entry,
      }),
      invalidatesTags: ['Trackers'],
    }),
  }),
});

export const {
  useGetAllEntriesByMonthQuery,
  useGetDailyTrackQuery,
  useCreateEntryMutation,
  useUpdateEntryMutation,
  useDeleteEntryMutation,
} = trackerApi;

const trackersPersistConfig = {
  key: 'trackers',
  storage,
};

export const trackerReducer = persistReducer(
  trackersPersistConfig,
  trackerApi.reducer
);
