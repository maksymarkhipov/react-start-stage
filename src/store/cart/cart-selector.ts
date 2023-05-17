import { type RootState } from '../store';
import { type CartProduct } from '../../product/types/cart-product';

export const getCartProducts = (state: RootState) => state.cart.products;
export const getCartCountProducts = (state: RootState): number => {
    let sum = 0;
    state.cart.products.forEach((product: CartProduct) => { sum += product.quantity; });

    return sum;
};
