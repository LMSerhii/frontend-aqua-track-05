import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from '../auth/authBaseQuery';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReAuth,
  endpoints: builder => ({
    register: builder.mutation({
      query: credentials => ({
        url: 'users/signup',
        method: 'POST',
        body: credentials,
      }),
    }),

    login: builder.mutation({
      query: credentials => ({
        url: 'users/signin',
        method: 'POST',
        body: credentials,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: 'users/logout',
        method: 'POST',
      }),
    }),

    refreshToken: builder.mutation({
      query: refreshToken => ({
        url: 'users/refresh',
        method: 'POST',
        body: { refreshToken },
      }),
    }),

    resendEmail: builder.mutation({
      query: email => ({
        url: 'users/verify',
        method: 'POST',
        body: email,
      }),
    }),

    refreshUser: builder.query({
      query: () => 'users/current',
    }),

    updateUser: builder.mutation({
      query: userData => ({
        url: 'users/update',
        method: 'PUT',
        body: userData,
      }),
    }),

    deleteUser: builder.mutation({
      query: () => ({
        url: 'users/delete',
        method: 'DELETE',
      }),
    }),

    forgotPassword: builder.mutation({
      query: email => ({
        url: 'users/forgot-password',
        method: 'POST',
        body: email,
      }),
    }),

    resetPassword: builder.mutation({
      query: ({ password, otp }) => ({
        url: `users/reset-password/${otp}`,
        method: 'POST',
        body: { password },
      }),
    }),

    getAllUsers: builder.query({
      query: () => 'users/all',
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useRefreshTokenMutation,
  useResendEmailMutation,
  useRefreshUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useGetAllUsersQuery,
} = authApi;
