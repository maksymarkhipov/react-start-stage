import { ProductContainer } from './components/product-container/ProductContainer';
import { ProductHeader } from './components/product-header/ProductHeader';

import styles from './ShopPage.module.css'
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
        <div className={styles.wrapper}>
            <ProductHeader />
            <div className={styles.productContainer}>
                {productContainer}
            </div>
        </div>
    )
}