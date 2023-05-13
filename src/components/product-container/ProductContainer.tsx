import { useGetProductsQuery } from '../../api/apiSlice';
import { ProductCard } from '../product-card/ProductCard';

import './ProductContainer.css';

export function ProductContainer() {
    const {
        data: products,
        isSuccess,
    } = useGetProductsQuery();

    if (isSuccess) {
        const productCards = products.map((item) => <ProductCard key={item.id} data={item} />);
        return <div className="product-container">{productCards}</div>
    }

    return <></>;
}
