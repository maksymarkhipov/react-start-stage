import { Product, TypeCard } from '../../types/product';
import { ProductCard } from '../product-card/ProductCard';
import { useSelector } from 'react-redux';
import { getTypeCard } from '../../features/shop-page/ShopPageSlice';
import { ProductCell } from '../product-cell/ProductCell';

export function ProductContainer({products}: {products: Product[]}) {
    const typeCardProduct = useSelector(getTypeCard);

    const content = products.map((item: Product) => {
        if (typeCardProduct === TypeCard.CELL) {
            return <ProductCell key={item.id} data={item} />
        } else {
            return <ProductCard key={item.id} product={item} />
        }
    });

    return (
        <>
            {content};
        </>
    );
}
