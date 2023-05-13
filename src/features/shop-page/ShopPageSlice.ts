import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductParameter } from './product-sort-parameter';
import { Product } from '../../types/product';

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
        initProducts: ((state, { payload }: PayloadAction<Product[]>) => {
            state.products = payload;
        }),
        changeProductSorter: (state, { payload }: PayloadAction<ProductParameter>) => {
            state.paramSorter = payload;
            state.products = state.products.sort(sortByProductParams[state.paramSorter]);
        },
    }
});

export const sortByProductParams = {
    [ProductParameter.DEFAULT_SORTING]: (): number => 0,
    [ProductParameter.PRICE]: (firstProduct: Product, secondProduct: Product): number =>
        firstProduct.price - secondProduct.price,
    [ProductParameter.TITLE]: (firstProduct: Product, secondProduct: Product): number =>
        firstProduct.title.localeCompare(secondProduct.title),
    [ProductParameter.CATEGORY]: (firstProduct: Product, secondProduct: Product): number =>
        firstProduct.category.localeCompare(secondProduct.category),
}

export const { changeProductSorter, initProducts } = shopPageSlice.actions;

