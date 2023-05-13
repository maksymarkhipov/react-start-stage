import { useGetProductsQuery } from '../../api/apiSlice';
import { Product } from '../product/Product';

import './ProductContainer.css';

export function ProductContainer() {
    const {
        data: products,
        isSuccess,
    } = useGetProductsQuery();

    if (isSuccess) {
        const productCards = products.map((item) => <Product key={item.id} data={item} />);
        return <div className="product-container">{productCards}</div>
    }

    return <></>;
}
