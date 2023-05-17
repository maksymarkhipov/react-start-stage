import { type Product } from '../../types/product';
import { ProductCard } from '../product-card/product-card';
import { useDispatch, useSelector } from 'react-redux';
import { ProductCell } from '../product-cell/product-cell';
import { TypeView } from '../../enums/type-view';
import { getTypeCard } from '../../../store/product/product-selector';
import { addProduct } from '../../../store/cart/cart-slice';

export const ProductContainer = ({ products }: { products: Product[] }) => {
    const dispatch = useDispatch();
    const typeCardProduct = useSelector(getTypeCard);

    const handleBuyClick = (product: Product) => {
        dispatch(addProduct(product));
    };

    const content = products.map((item: Product) => {
        if (typeCardProduct === TypeView.CELL) {
            return <ProductCell key={item.id} data={item} onClickBuy={handleBuyClick} />;
        } else {
            return <ProductCard key={item.id} product={item} onClickBuy={handleBuyClick} />;
        }
    });

    return (
        <>
            {content}
        </>
    );
};
