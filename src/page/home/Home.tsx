import { ProductContainer } from '../../components/product-container/ProductContainer';
import { ProductHeader } from '../../components/product-header/ProductHeader';

import styles from './Home.module.css'
import { useGetProductsQuery } from '../../api/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import { initProducts } from '../../features/shop-page/ShopPageSlice';
import { useEffect } from 'react';
import { SideBar } from '../../components/sidebar/SideBar';

export function Home() {
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
            <div className={styles.sidebar}>
                <SideBar />
            </div>
            <div className={styles.content}>
                <ProductHeader title={'Shop'} />
                <div className={styles.productContainer}>
                    {viewProducts ? (<ProductContainer products={viewProducts} />) : <></>}
                </div>
            </div>
        </div>
    )
}