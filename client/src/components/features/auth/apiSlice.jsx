import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_HOST } from '../../../config';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_HOST }), // actualizar por server url
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'user/info',
    }),
  }),
});

export const { useGetUsers } = api;
export default api;
