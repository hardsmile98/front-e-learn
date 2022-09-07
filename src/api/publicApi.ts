import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getEnvProps from 'utils/getEnvProps';
import { ILoginForm, IRegisterForm } from 'models/auth';

export const publicApi = createApi({
  reducerPath: 'publicApi',
  baseQuery: fetchBaseQuery({
    baseUrl: getEnvProps.publicApiURL,
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
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
} = publicApi;
