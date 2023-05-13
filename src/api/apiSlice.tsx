import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API_URL } from '../util/constants';
import { Product, ResponseProductDto, FromProductDto } from '../types/product';

export const apiSlice = createApi({
    reducerPath: 'fakeStore',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
    endpoints: (build) => ({
        getProducts: build.query<Product[], void>({
            query: () => 'products/',
            transformResponse: (response: ResponseProductDto[]) => {
                const products: Product[] = [];

                response.forEach((responseProduct) => {
                    const newProduct = FromProductDto(responseProduct);
                    products.push(newProduct);
                });

                return products;
            },
        }),
    }),
});

export const { useGetProductsQuery } = apiSlice;