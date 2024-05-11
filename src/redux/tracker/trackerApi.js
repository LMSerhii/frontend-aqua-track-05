import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../routes';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

export const trackerApi = createApi({
  reducerPath: 'trackers',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Trackers'],
  endpoints: builder => ({
    getAllEntyies: builder.query({
      query: () => `/water`,
      providesTags: ['Trackers'],
    }),
    getAllEntyiesByDay: builder.query({
      query: id => `/water/${id}`,
      providesTags: ['Trackers'],
    }),
    getAllEntyiesByMonth: builder.query({
      query: id => `/water/${id}`,
      providesTags: ['Trackers'],
    }),
    createEntry: builder.mutation({
      query: contact => ({
        url: `/water/add`,
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Trackers'],
    }),
    updateEntry: builder.mutation({
      query: ({ id, ...entry }) => ({
        url: `/water/${id}`,
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
  useGetAllEntyiesQuery,
  useLazyGetAllEntyiesByDayQuery,
  useGetAllEntyiesByMonthQuery,
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
