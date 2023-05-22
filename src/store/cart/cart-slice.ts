import { type ProductCart } from '../../cart/types/product-cart';
import { createSlice, type Draft, type PayloadAction } from '@reduxjs/toolkit';
import { type Product } from '../../core/types/product';
import { localLoad, localSave } from '../../core/service/local-storage-service';
import { CART_KEY } from '../../util/constants';

export type InitialType = {
    products: ProductCart[]
};

const initialState: InitialType = {
    products: localLoad(CART_KEY) ?? [],
};

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addProduct: (state: Draft<InitialType>, { payload }: PayloadAction<Product>) => {
            const foundedProduct = state.products.find((product) => product.product.id === payload.id);

            if (foundedProduct === undefined) {
                state.products.push({
                    product: payload,
                    quantity: 1,
                });
            } else {
                foundedProduct.quantity += 1;
            }

            localSave<ProductCart[]>(CART_KEY, state.products);
        },
        removeProduct: (state: Draft<InitialType>, { payload }: PayloadAction<string>) => {
            const foundedIndex = state.products.findIndex((product) => product.product.id === payload);

            if (foundedIndex === undefined) return;

            const foundedProduct = state.products[foundedIndex];
            foundedProduct.quantity--;

            if (foundedProduct.quantity <= 0) {
                state.products.splice(foundedIndex, 1);
            }

            localSave<ProductCart[]>(CART_KEY, state.products);
        },
        buyProduct: (state: Draft<InitialType>) => {
            state.products = [];

            localSave<ProductCart[]>(CART_KEY, state.products);
        },
    },
});

export const { addProduct, removeProduct, buyProduct } = cartSlice.actions;
