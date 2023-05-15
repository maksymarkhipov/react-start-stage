import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API_URL } from '../util/constants';
import { Product, ResponseProductDto, fromProductDto } from '../types/product';
import { Category } from '../types/category';

export const apiSlice = createApi({
    reducerPath: 'fakeStore',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
    endpoints: (build) => ({
        getProducts: build.query<Product[], void>({
            query: () => 'products/',
            transformResponse: (response: ResponseProductDto[]) => productDtosToProducts(response),
        }),
        getCategories: build.query<Category[], void>({
            query: () => 'products/categories/',
        }),
        getProductsByCategory: build.query<Product[], Category>({
           query: (category) => `/products/category/${category}`,
            transformResponse: (response: ResponseProductDto[]) => productDtosToProducts(response),
        }),
    }),
});

export const { useGetProductsQuery, useGetCategoriesQuery, useGetProductsByCategoryQuery } = apiSlice;

const productDtosToProducts = (productsDtos: ResponseProductDto[]): Product[] => {
    const products: Product[] = [];

    productsDtos.forEach((responseProduct: ResponseProductDto) => {
        const newProduct = fromProductDto(responseProduct);
        products.push(newProduct);
    });

    return products;
}