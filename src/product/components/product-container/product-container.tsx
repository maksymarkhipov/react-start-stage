import { type Product } from '../../../core/types/product';
import { ProductCard } from '../product-card/product-card';
import { useDispatch, useSelector } from 'react-redux';
import { ProductCell } from '../product-cell/product-cell';
import { TypeProductView } from '../../enums/type-product-view';
import { selectTypeCard } from '../../../store/product/product-selector';
import { addProduct } from '../../../store/cart/cart-slice';
import { addCompareList } from '../../../store/compare-list/compare-list-slice';

export const ProductContainer = ({ products }: { products: Product[] }) => {
    const dispatch = useDispatch();
    const typeCardProduct = useSelector(selectTypeCard);

    const handleBuyClick = (product: Product) => {
        dispatch(addProduct(product));
    };

    const handleAddCompareClick = (product: Product) => {
        dispatch(addCompareList(product));
    };

    const content = products.map((item: Product) => {
        return typeCardProduct === TypeProductView.CELL
            ? <ProductCell key={item.id} product={item} onClickBuy={handleBuyClick} />
            : <ProductCard key={item.id} product={item} onClickBuy={handleBuyClick} onClickWishlist={handleAddCompareClick} />;
    });

    return (
        <>
            {content}
        </>
    );
};
