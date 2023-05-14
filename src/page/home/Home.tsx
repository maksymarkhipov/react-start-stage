import { ProductContainer } from '../../components/product-container/ProductContainer';
import { ProductHeader } from '../../components/product-header/ProductHeader';

import styles from './Home.module.css'
import { useGetProductsQuery } from '../../api/apiSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import { SideBar } from '../../components/sidebar/SideBar';

export function Home() {
    const viewProducts = useSelector((state: RootState) => state.shopPage.products);
    const getProductsQuery = useGetProductsQuery();

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