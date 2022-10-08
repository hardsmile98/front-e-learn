import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getEnvProps from 'utils/getEnvProps';
import {
  ILoginForm,
  IRegisterForm,
  ILearnResponse,
  IWord,
} from 'models';
import { shuffle } from 'utils';

export const publicApi = createApi({
  reducerPath: 'publicApi',
  baseQuery: fetchBaseQuery({
    baseUrl: getEnvProps.publicApiURL,
    prepareHeaders(headers) {
      return headers;
    },
    credentials: 'include',
  }),
  tagTypes: ['Profile', 'Course'],
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
      providesTags: ['Course'],
    }),

    accrueBonus: builder.mutation({
      query: () => ({
        url: '/api/v1/profile/accure',
        method: 'POST',
      }),
      invalidatesTags: ['Profile'],
    }),

    finishLearn: builder.mutation({
      query: ({ courseId, money, wordIds }) => ({
        url: '/api/v1/course/learn',
        method: 'POST',
        body: {
          courseId,
          money,
          wordIds,
        },
      }),
      invalidatesTags: ['Profile', 'Course'],
    }),

    getLearnWords: builder.query({
      query: ({ courseId }) => ({
        url: '/api/v1/course/learn',
        params: {
          courseId,
        },
      }),
      transformResponse: (response: ILearnResponse) => {
        const learWords = (response.words || []).map((word) => ({ ...word, type: 'learn' })) || [];

        const arrayAllWords = learWords.map((word: IWord) => (word.word));

        const repeatWords = shuffle(learWords).map((word: any) => {
          const wordsWithoutCurrent = shuffle(arrayAllWords.filter((w) => w !== word.word));
          const words = shuffle([word.word, ...wordsWithoutCurrent.slice(0, 3)]);
          const answer = words.indexOf(word.word);

          return {
            ...word,
            words,
            type: 'repeat',
            answer,
          };
        });

        return {
          ...response,
          words: [...learWords, ...repeatWords],
          arrayAllWords,
          ids: (response.words || []).map((word) => word.id),
        };
      },
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
  useGetLearnWordsQuery,
  useFinishLearnMutation,
} = publicApi;
