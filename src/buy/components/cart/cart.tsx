import { useState } from 'react';
import { IconButton } from '@mui/material';
import { ShoppingBag } from '@mui/icons-material';
import { CartDialog } from '../cart-dialog/cart-dialog';
import { useSelector } from 'react-redux';
import { getCartProducts } from '../../../store/cart/cart-selector';
import { type CartProduct } from '../../../product/types/cart-product';
import { ProductCard } from '../cart-product/product-card';

export const Cart = () => {
    const cartProducts = useSelector(getCartProducts);
    const content = cartProducts.map((cartProduct: CartProduct) =>
        <ProductCard key={cartProduct.product.id} cartProduct={cartProduct} />);

    const [isOpenDialog, setIsOpenDialog] = useState(false);

    const handleOpenCart = () => {
        setIsOpenDialog(true);
    };

    const handleCloseCart = () => {
        setIsOpenDialog(false);
    };

    return (
        <>
            <IconButton onClick={() => { handleOpenCart(); } }>
                <ShoppingBag />
            </IconButton>
            <CartDialog isOpen={isOpenDialog} onClose={handleCloseCart} content={<>{content}</>} />
        </>
    );
};
