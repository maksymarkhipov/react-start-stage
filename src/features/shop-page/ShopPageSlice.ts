import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductParameter } from './product-sort-parameter';
import { Product } from '../../types/product';
import { apiSlice } from '../../api/apiSlice';
import { CategoryWithCount, Category } from '../../types/category';
import { RootState } from '../store';

type initialType = {
    paramSorter: ProductParameter,
    products: Product[],
    categories: Category[],
};

const initialState: initialType = {
    paramSorter: ProductParameter.DEFAULT_SORTING,
    products: [],
    categories: [],
}

export const shopPageSlice = createSlice({
    name: 'shopPageSlice',
    initialState,
    reducers: {
        changeProductSorter: (state, { payload }: PayloadAction<ProductParameter>) => {
            state.paramSorter = payload;
            state.products = state.products.sort(sortByProductParams[state.paramSorter]);
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            apiSlice.endpoints.getProducts.matchFulfilled,
            (state, {payload}) => {
                state.products = payload;
            }
        );
        builder.addMatcher(
            apiSlice.endpoints.getCategories.matchFulfilled,
            (state, {payload}) => {
                state.categories = payload;
            }
        );
    },
});

export const { changeProductSorter } = shopPageSlice.actions;

export const getCategories = (state: RootState): CategoryWithCount[] => {
    const categoriesWithCount: CategoryWithCount[] = [];
    const products = state.shopPage.products;
    const categories = state.shopPage.categories;

    categories.forEach((category: Category) => {
        const countProduct = products.filter((product: Product) => product.category == category).length;

        categoriesWithCount.push({
            title: category,
            countProduct,
        });
    });

    return categoriesWithCount;
}

const sortByProductParams = {
    [ProductParameter.DEFAULT_SORTING]: (): number => 0,
    [ProductParameter.PRICE]: (firstProduct: Product, secondProduct: Product): number =>
        firstProduct.price - secondProduct.price,
    [ProductParameter.TITLE]: (firstProduct: Product, secondProduct: Product): number =>
        firstProduct.title.localeCompare(secondProduct.title),
    [ProductParameter.CATEGORY]: (firstProduct: Product, secondProduct: Product): number =>
        firstProduct.category.localeCompare(secondProduct.category),
}