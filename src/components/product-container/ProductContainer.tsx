import { Product } from '../../types/product';
import { ProductCard } from '../product-card/ProductCard';

export function ProductContainer({products}: {products: Product[]}) {
    const content = products.map((item) => <ProductCard key={item.id} product={item} />);

    return (
        <>
            {content};
        </>
    );
}
