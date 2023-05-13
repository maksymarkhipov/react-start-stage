import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API_URL } from '../util/constants';

export const apiSlice = createApi({
    reducerPath: 'fakeStore',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
    endpoints: (build) => ({
        getProducts: build.query<any, string>({
            query: () => 'products/'
        })
    }),
})