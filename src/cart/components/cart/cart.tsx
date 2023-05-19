import { useState } from 'react';
import { Badge, IconButton } from '@mui/material';
import { ShoppingBag } from '@mui/icons-material';
import { CartDialog } from '../cart-dialog/cart-dialog';
import { useSelector } from 'react-redux';
import { selectCartCountProducts, selectCartProducts, selectCartSum } from '../../../store/cart/cart-selector';
import { type CartProduct } from '../../../product/types/cart-product';
import { ProductCard } from '../product-card/product-card';

export const Cart = () => {
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    const cartProducts = useSelector(selectCartProducts);
    const countProducts = useSelector(selectCartCountProducts);
    const cartTotalSum = useSelector(selectCartSum);

    const productCards = cartProducts.map((cartProduct: CartProduct) =>
        <ProductCard key={cartProduct.product.id} cartProduct={cartProduct} />);

    const content = productCards.length > 0 ? productCards : <div>You dont have products</div>;

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
            <CartDialog isOpen={isOpenDialog}
                onClose={handleCloseCart}
                content={<>{content}</>}
                sum={cartTotalSum}
            />
        </>
    );
};
