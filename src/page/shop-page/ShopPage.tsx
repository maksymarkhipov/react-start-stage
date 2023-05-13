import { ProductContainer } from './components/product-container/ProductContainer';
import { ProductHeader } from './components/product-header/ProductHeader';

import styles from './ShopPage.module.css'
import { useGetProductsQuery } from '../../api/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import { initProducts } from '../../features/shop-page/ShopPageSlice';
import { useEffect } from 'react';

export function ShopPage() {
    const dispatch = useDispatch();
    const { data: products } = useGetProductsQuery();

    const viewProducts = useSelector((state: RootState) => state.shopPage.products);

    useEffect(() => {
       if (products) {
           dispatch(initProducts(products));
       }
    }, [products]);

    return (
        <div className={styles.wrapper}>
            <ProductHeader />
            <div className={styles.productContainer}>
                {viewProducts ? (<ProductContainer products={viewProducts} />) : <></>}
            </div>
        </div>
    )
}