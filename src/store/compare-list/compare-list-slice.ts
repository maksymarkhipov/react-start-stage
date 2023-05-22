import { createSlice, type Draft, type PayloadAction } from '@reduxjs/toolkit';
import { type Product } from '../../core/types/product';
import { localLoad, localSave } from '../../core/service/local-storage-service';
import { COMPARE_KEY } from '../../util/constants';

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
    },
});

export const { addCompareList } = compareList.actions;
