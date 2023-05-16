import { createSlice, type Draft, type PayloadAction } from '@reduxjs/toolkit';

type InitialType = {
    productIds: string[]
};

const initialState: InitialType = {
    productIds: [],
};

export const wishlistSlice = createSlice({
    name: 'wishlistSlice',
    initialState,
    reducers: {
        addProduct: (state: Draft<InitialType>, { payload }: PayloadAction<string>) => {
            state.productIds.push(payload);
        },
        removeProduct: (state: Draft<InitialType>, { payload }: PayloadAction<string>) => {
            state.productIds = state.productIds.filter((productId) => productId !== payload);
        },
    },
});

export const { addProduct } = wishlistSlice.actions;
