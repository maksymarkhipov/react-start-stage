import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/api-slice';
import { productSlice } from './product/product-slice';
import { wishlistSlice } from './wishlist/wishlist-slice';

export const store = configureStore({
    reducer: {
        shopPage: productSlice.reducer,
        wishlist: wishlistSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
