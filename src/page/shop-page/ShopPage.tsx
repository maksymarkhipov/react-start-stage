import { ProductContainer } from '../../components/product-container/ProductContainer';
import { ProductHeader } from '../../components/product-header/ProductHeader';

import './ShopPage.css'
import { useGetProductsQuery } from '../../api/apiSlice';

export function ShopPage() {
    let productContainer = <></>
    const {
        data: products,
        isSuccess,
    } = useGetProductsQuery();

    if (isSuccess) {
        productContainer = <ProductContainer products={products} />
    }

    return (
        <div className="wrapper">
            <ProductHeader />
            <div className="product-container">
                {productContainer}
            </div>
        </div>
    )
}