import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductParameter } from './product-sort-parameter';
import { Product } from '../../types/product';
import { apiSlice } from '../../api/apiSlice';

type initialType = {
    paramSorter: ProductParameter,
    products: Product[],
};

const initialState: initialType = {
    paramSorter: ProductParameter.DEFAULT_SORTING,
    products: [],
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
        )
    },
});

export const { changeProductSorter } = shopPageSlice.actions;

const sortByProductParams = {
    [ProductParameter.DEFAULT_SORTING]: (): number => 0,
    [ProductParameter.PRICE]: (firstProduct: Product, secondProduct: Product): number =>
        firstProduct.price - secondProduct.price,
    [ProductParameter.TITLE]: (firstProduct: Product, secondProduct: Product): number =>
        firstProduct.title.localeCompare(secondProduct.title),
    [ProductParameter.CATEGORY]: (firstProduct: Product, secondProduct: Product): number =>
        firstProduct.category.localeCompare(secondProduct.category),
}