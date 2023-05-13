import { ProductCard } from '../product-card/ProductCard';
import { Product } from '../../types/product';

export function ProductContainer({products}: {products: Product[]}) {
    const content = products.map((item) => <ProductCard key={item.id} data={item} />);

    return (
        <>
            {content};
        </>
    );
}
