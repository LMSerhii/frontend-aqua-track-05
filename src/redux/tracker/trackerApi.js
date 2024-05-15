// trackerApi.js (в папці redux/tracker)

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../routes';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

export const trackerApi = createApi({
  reducerPath: 'trackers',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders(headers, { getState }) {
      const token = getState().auth.token;

      if (token) headers.set(`Authorization`, `Bearer ${token}`);
    },
  }),

  tagTypes: ['Trackers'],
  endpoints: builder => ({
    getAllEntyiesByDay: builder.mutation({
      query: body => ({
        url: `/water/daily_count`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Trackers'],
    }),
    getAllEntyiesByMonth: builder.query({
      query: id => `/water/${id}`,
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
      query: ({ id, ...entry }) => ({
        url: `/water/edit/${id}`,
        method: 'PUT',
        body: entry,
      }),
      invalidatesTags: ['Trackers'],
    }),

    deleteEntry: builder.mutation({
      query: id => ({
        url: `/water/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Trackers'],
    }),
  }),
});

export const {
  useGetAllEntyiesByDayMutation,
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
