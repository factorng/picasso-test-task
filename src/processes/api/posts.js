import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (build) => ({
    getAllPosts: build.query({
      query: ({ start, end }) => ({
        url: '/posts',
        params:
         {
           _start: start,
           _end: end,
         },
      }),
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => {
        if (currentCache) {
          return [...newItems];
        } return [...newItems];
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getPostById: build.query({
      query: (id) => `posts/${id}`,
    }),
  }),
});

export const { useGetAllPostsQuery, useGetPostByIdQuery } = postsApi;
