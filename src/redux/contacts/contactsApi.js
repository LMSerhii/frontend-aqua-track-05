import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, routes } from '../../routes';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

export const contactApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => routes.CONTACTS,
      providesTags: ['Contacts'],
    }),
    getOneContact: builder.query({
      query: id => `${routes.CONTACTS}/${id}`,
      providesTags: ['Contacts'],
    }),
    createContact: builder.mutation({
      query: contact => ({
        url: routes.CONTACTS,
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
      async onQueryStarted(
        arg,
        { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
      ) {
        // Отримайте токен зі стору або де завгодно
        const token = 'your_bearer_token';
        // Додайте токен у заголовок запиту
        extra.headers = {
          Authorization: `Bearer ${token}`,
        };
      },
    }),
    updateContact: builder.mutation({
      query: ({ id, ...contact }) => ({
        url: `${routes.CONTACTS}/${id}`,
        method: 'PUT',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `${routes.CONTACTS}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useLazyGetOneContactQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactApi;

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items', 'favoriteItems'],
};

export const contactsReducer = persistReducer(
  contactsPersistConfig,
  contactApi.reducer
);
