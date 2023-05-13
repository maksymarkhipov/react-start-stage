import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    paramSorter: 'Default Sorting',
};

export const shopPageSlice = createSlice({
    name: 'shopPageSlice',
    initialState,
    reducers: {
        changeProductSorter: (state, action: PayloadAction<string>) => {
            console.log(action);
        },
    }
})

export const { changeProductSorter } = shopPageSlice.actions;

