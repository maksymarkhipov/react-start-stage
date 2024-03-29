import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/api-slice';
import { productSlice } from './product/product-slice';
import { cartSlice } from './cart/cart-slice';
import { compareList } from './compare-list/compare-list-slice';

export const store = configureStore({
    reducer: {
        shopPage: productSlice.reducer,
        cart: cartSlice.reducer,
        compareList: compareList.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
