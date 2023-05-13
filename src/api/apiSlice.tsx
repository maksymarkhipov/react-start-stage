import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API_URL } from '../util/constants';
import { IProduct, IResponseProduct, ResponseProductToProduct } from '../interfaces/IProduct';

export const apiSlice = createApi({
    reducerPath: 'fakeStore',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
    endpoints: (build) => ({
        getProducts: build.query<IProduct[], void>({
            query: () => 'products/',
            transformResponse: (response: IResponseProduct[]) => {
                const products: IProduct[] = [];

                response.forEach((responseProduct) => {
                    const newProduct = ResponseProductToProduct(responseProduct);
                    products.push(newProduct);
                });

                return products;
            },
        }),
    }),
});

export const { useGetProductsQuery } = apiSlice;