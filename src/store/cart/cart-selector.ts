import { type RootState } from '../store';

export const getCartProducts = (state: RootState) => state.cart.products;
