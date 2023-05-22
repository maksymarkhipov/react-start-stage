import { createSlice, type Draft, type PayloadAction } from '@reduxjs/toolkit';
import { type Product } from '../../core/types/product';

type InitialType = {
    products: Product[]
};

const initialState: InitialType = {
    products: [],
};

export const compareList = createSlice({
    name: 'compareList',
    initialState,
    reducers: {
        addCompareList: (state: Draft<InitialType>, { payload }: PayloadAction<Product>) => {
            const foundedProduct = state.products.find((product) => product.id === payload.id);

            if (foundedProduct != null) return;

            state.products.push(payload);
        },
    },
});

export const { addCompareList } = compareList.actions;
