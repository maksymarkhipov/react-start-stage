import { type CartProduct } from '../../product/types/cart-product';
import { createSlice, type Draft, type PayloadAction } from '@reduxjs/toolkit';
import { type Product } from '../../product/types/product';

export type InitialType = {
    products: CartProduct[]
};

const initialState: InitialType = {
    products: [],
};

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addProduct: (state: Draft<InitialType>, { payload }: PayloadAction<Product>) => {
            const foundedProduct = state.products.find((product) => product.product.id === payload.id);

            if (foundedProduct === undefined) {
                const cartProduct: CartProduct = {
                    product: payload,
                    quantity: 0,
                };

                state.products.push(cartProduct);
                return;
            }

            foundedProduct.quantity += 1;
        },
    },
});

export const { addProduct } = cartSlice.actions;
