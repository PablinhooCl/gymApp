import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https:localhost:5000/' }), // actualizar por server url
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'user/info',
    }),
  }),
});

export const { useGetUsers } = api;
export default api;
