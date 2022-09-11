import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getEnvProps from 'utils/getEnvProps';
import {
  ILoginForm,
  IRegisterForm,
} from 'models';

export const publicApi = createApi({
  reducerPath: 'publicApi',
  baseQuery: fetchBaseQuery({
    baseUrl: getEnvProps.publicApiURL,
    prepareHeaders(headers) {
      return headers;
    },
    credentials: 'include',
  }),
  tagTypes: ['Profile'],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginFormData: ILoginForm) => ({
        url: '/api/v1/auth/login',
        method: 'POST',
        body: loginFormData,
      }),
    }),

    register: builder.mutation({
      query: (registerFormData: IRegisterForm) => ({
        url: '/api/v1/auth/register',
        method: 'POST',
        body: registerFormData,
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
      providesTags: ['Profile'],
    }),

    getCourses: builder.query({
      query: () => '/api/v1/course',
    }),

    accrueBonus: builder.mutation({
      query: () => ({
        url: '/api/v1/profile/accure',
        method: 'POST',
      }),
      invalidatesTags: ['Profile'],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useProfileMeQuery,
  useProfileInfoQuery,
  useGetCoursesQuery,
  useAccrueBonusMutation,
} = publicApi;
