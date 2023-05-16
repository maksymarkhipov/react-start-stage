import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API_URL } from '../../util/constants';
import { type Product, type ResponseProductDto, fromProductDto } from '../../features/product/types/product';
import { type Category } from '../../features/product/types/category';

export const apiSlice = createApi({
    reducerPath: 'fakeStore',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
    endpoints: (build) => ({
        getProducts: build.query<Product[], void>({
            query: () => 'products/',
            transformResponse: (response: ResponseProductDto[]) => productDtosToProducts(response),
        }),
        getProduct: build.query<Product, string>({
            query: (id: string) => `products/${id}`,
            transformResponse: (response: ResponseProductDto) => fromProductDto(response),
        }),
        getProductsByCategory: build.query<Product[], Category>({
            query: (category) => `/products/category/${category}`,
            transformResponse: (response: ResponseProductDto[]) => productDtosToProducts(response),
        }),
        getCategories: build.query<Category[], void>({
            query: () => 'products/categories/',
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductQuery,
    useGetProductsByCategoryQuery,
    useGetCategoriesQuery,
} = apiSlice;

const productDtosToProducts = (productsDtos: ResponseProductDto[]): Product[] => {
    const products: Product[] = [];

    productsDtos.forEach((responseProduct: ResponseProductDto) => {
        const newProduct = fromProductDto(responseProduct);
        products.push(newProduct);
    });

    return products;
};
