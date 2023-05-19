import { useState } from 'react';
import { Badge, IconButton } from '@mui/material';
import { ShoppingBag } from '@mui/icons-material';
import { CartDialog } from '../cart-dialog/cart-dialog';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCountProducts, selectCartProducts, selectCartSum } from '../../../store/cart/cart-selector';
import { type CartProduct } from '../../../product/types/cart-product';
import { ProductCard } from '../product-card/product-card';
import { buyProduct } from '../../../store/cart/cart-slice';
import { SuccessBuyDialog } from '../success-buy-dialog/success-buy-dialog';

export const Cart = () => {
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const [isOpenBuyDialog, setIsOpenBuyDialog] = useState(false);

    const dispatch = useDispatch();
    const cartProducts = useSelector(selectCartProducts);
    const countProducts = useSelector(selectCartCountProducts);
    const cartTotalSum = useSelector(selectCartSum);

    const handleBuy = () => {
        dispatch(buyProduct());
        setIsOpenDialog(false);
        setIsOpenBuyDialog(true);
    };

    const productCards = cartProducts.map((cartProduct: CartProduct) =>
        <ProductCard key={cartProduct.product.id} cartProduct={cartProduct} />);

    const content = productCards.length > 0 ? productCards : <div>You dont have products</div>;

    const handleOpenCart = () => {
        setIsOpenDialog(true);
    };

    const handleCloseCart = () => {
        setIsOpenDialog(false);
    };

    const handleCloseBuyDialog = () => {
        setIsOpenBuyDialog(false);
    };

    return (
        <>
            <IconButton onClick={() => { handleOpenCart(); } }>
                <Badge color='secondary' badgeContent={countProducts}>
                    <ShoppingBag />
                </Badge>
            </IconButton>
            <CartDialog
                isOpen={isOpenDialog}
                onClose={handleCloseCart}
                onBuy={handleBuy}
                content={<>{content}</>}
                sum={cartTotalSum}
            />
            <SuccessBuyDialog isOpen={isOpenBuyDialog} onClose={handleCloseBuyDialog} />
        </>
    );
};
