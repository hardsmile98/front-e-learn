import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getEnvProps from 'utils/getEnvProps';
import type { IJob } from 'models/job';

export const publicApi = createApi({
  reducerPath: 'publicApi',
  baseQuery: fetchBaseQuery({ baseUrl: getEnvProps.publicApiURL }),
  endpoints: (builder) => ({
    getAllJobs: builder.query<Array<IJob>, void>({
      query: () => '/api/jobs',
    }),
  }),
});

export const { useGetAllJobsQuery } = publicApi;
