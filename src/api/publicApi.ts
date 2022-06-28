import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getEnvProps from 'utils/getEnvProps';
import type { IJob, IJobDetail } from 'models/job';
import type { IProfile } from 'models/profile';

export const publicApi = createApi({
  reducerPath: 'publicApi',
  baseQuery: fetchBaseQuery({ baseUrl: getEnvProps.publicApiURL }),
  endpoints: (builder) => ({
    getAllJobs: builder.query<Array<IJob>, void>({
      query: () => '/api/jobs',
    }),
    getProfile: builder.query<IProfile, void>({
      query: () => '/api/profile',
    }),
    getJob: builder.query<IJobDetail, string>({
      query: (id) => `/api/job/${id}`,
    }),
    getRecommends: builder.query<Array<IJob>, void>({
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
