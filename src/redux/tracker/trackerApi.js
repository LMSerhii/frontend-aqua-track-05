import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from '../auth/authBaseQuery';

export const trackerApi = createApi({
  reducerPath: 'trackers',
  baseQuery: baseQueryWithReAuth,
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
