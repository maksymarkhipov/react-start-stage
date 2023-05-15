import { type Product } from '../../types/product';
import { ProductCard } from '../product-card/ProductCard';
import { useSelector } from 'react-redux';
import { ProductCell } from '../product-cell/ProductCell';
import { TypeCard } from '../../enums/type-card';
import { getTypeCard } from '../../features/product/ProductSelector';

export const ProductContainer = ({ products }: { products: Product[] }) => {
    const typeCardProduct = useSelector(getTypeCard);

    const content = products.map((item: Product) => {
        if (typeCardProduct === TypeCard.CELL) {
            return <ProductCell key={item.id} data={item} />;
        } else {
            return <ProductCard key={item.id} product={item} />;
        }
    });

    return (
        <>
            {content}
        </>
    );
};
