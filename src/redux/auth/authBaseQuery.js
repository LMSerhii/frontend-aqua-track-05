import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { BASE_URL } from '../../routes.js';
import { logOut, setAccessToken, startRefreshing } from './authSlice';

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken;

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // try to get a new token

    const refreshToken = api.getState().auth.refreshToken;

    if (refreshToken) {
      api.dispatch(startRefreshing());

      const refreshResult = await baseQuery(
        {
          url: 'users/refresh',
          method: 'POST',
          body: { refreshToken },
        },
        api,
        extraOptions
      );

      if (refreshResult.data) {
        const { token } = refreshResult.data;

        // store the new token
        api.dispatch(setAccessToken(token));

        // retry the original query with the new access token
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logOut());
      }
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};
