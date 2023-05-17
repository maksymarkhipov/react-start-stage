import { useState } from 'react';
import { Badge, IconButton } from '@mui/material';
import { ShoppingBag } from '@mui/icons-material';
import { CartDialog } from '../cart-dialog/cart-dialog';
import { useSelector } from 'react-redux';
import { getCartCountProducts, getCartProducts } from '../../../store/cart/cart-selector';
import { type CartProduct } from '../../../product/types/cart-product';
import { ProductCard } from '../cart-product/product-card';

export const Cart = () => {
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    const cartProducts = useSelector(getCartProducts);
    const countProducts = useSelector(getCartCountProducts);

    const content = cartProducts.map((cartProduct: CartProduct) =>
        <ProductCard key={cartProduct.product.id} cartProduct={cartProduct} />);

    const handleOpenCart = () => {
        setIsOpenDialog(true);
    };

    const handleCloseCart = () => {
        setIsOpenDialog(false);
    };

    return (
        <>
            <IconButton onClick={() => { handleOpenCart(); } }>
                <Badge color='secondary' badgeContent={countProducts}>
                    <ShoppingBag />
                </Badge>
            </IconButton>
            <CartDialog isOpen={isOpenDialog} onClose={handleCloseCart} content={<>{content}</>} />
        </>
    );
};
