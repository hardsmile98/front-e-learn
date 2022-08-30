import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getEnvProps from 'utils/getEnvProps';

export const publicApi = createApi({
  reducerPath: 'publicApi',
  baseQuery: fetchBaseQuery({ baseUrl: getEnvProps.publicApiURL }),
  endpoints: (builder) => ({
    getAllJobs: builder.query<Array<any>, void>({
      query: () => '/api/jobs',
    }),
    getProfile: builder.query<any, void>({
      query: () => '/api/profile',
    }),
    getJob: builder.query<any, string>({
      query: (id) => `/api/job/${id}`,
    }),
    getRecommends: builder.query<Array<any>, void>({
      query: () => '/api/recommends',
    }),
  }),
});

export const {
  useGetAllJobsQuery,
  useGetProfileQuery,
  useGetJobQuery,
  useGetRecommendsQuery,
} = publicApi;
