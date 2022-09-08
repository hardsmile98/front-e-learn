import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getEnvProps from 'utils/getEnvProps';
import { ILoginForm, IRegisterForm } from 'models/auth';

export const publicApi = createApi({
  reducerPath: 'publicApi',
  baseQuery: fetchBaseQuery({
    baseUrl: getEnvProps.publicApiURL,
    prepareHeaders(headers) {
      return headers;
    },
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginFormData: ILoginForm) => ({
        url: '/api/v1/auth/login',
        method: 'POST',
        body: loginFormData,
      }),
    }),

    register: builder.mutation({
      query: (regFormData: IRegisterForm) => ({
        url: '/api/v1/auth/register',
        method: 'POST',
        body: regFormData,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: '/api/v1/auth/logout',
        method: 'POST',
      }),
    }),

    profileMe: builder.query({
      query: () => '/api/v1/profile/me',
    }),

    profileInfo: builder.query({
      query: () => '/api/v1/profile/info',
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useProfileMeQuery,
  useProfileInfoQuery,
} = publicApi;
