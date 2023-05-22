import { createSlice, type Draft, type PayloadAction } from '@reduxjs/toolkit';
import { type Product } from '../../core/types/product';
import { localLoad, localSave } from '../../core/service/local-storage-service';
import { COMPARE_KEY } from '../../util/constants';
import { type Category } from '../../core/types/category';

type InitialType = {
    products: Product[]
};

const initialState: InitialType = {
    products: localLoad(COMPARE_KEY) ?? [],
};

export const compareList = createSlice({
    name: 'compareList',
    initialState,
    reducers: {
        addCompareList: (state: Draft<InitialType>, { payload }: PayloadAction<Product>) => {
            const foundedProduct = state.products.find((product) => product.id === payload.id);

            if (foundedProduct != null) return;

            state.products.push(payload);
            localSave(COMPARE_KEY, state.products);
        },
        removeByCategory: (state: Draft<InitialType>, { payload }: PayloadAction<Category>) => {
            state.products = state.products.filter((product) => product.category !== payload);
            localSave(COMPARE_KEY, state.products);
        },
        removeProduct: (state: Draft<InitialType>, { payload }: PayloadAction<string>) => {
            state.products = state.products.filter((product) => product.id !== payload);
            localSave(COMPARE_KEY, state.products);
        },
    },
});

export const { addCompareList, removeByCategory, removeProduct } = compareList.actions;
