import { type RootState } from '../store';
import { type ProductCart } from '../../product/types/product-cart';

export const selectCartProducts = (state: RootState) => state.cart.products;
export const selectCartCountProducts = (state: RootState): number => {
    let sum = 0;
    state.cart.products.forEach((product: ProductCart) => { sum += product.quantity; });

    return sum;
};

export const selectCartSum = (state: RootState): number => {
    let sum = 0;
    state.cart.products.forEach((cartProduct: ProductCart) => {
        sum += cartProduct.product.price * cartProduct.quantity;
    });

    return Math.round(sum * 100) / 100;
};
