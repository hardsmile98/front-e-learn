import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getEnvProps from 'utils/getEnvProps';
import type { IJob } from 'models/job';
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
  }),
});

export const { useGetAllJobsQuery, useGetProfileQuery } = publicApi;
