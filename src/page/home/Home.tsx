import { ProductContainer } from '../../components/product-container/ProductContainer';
import { ProductHeader } from '../../components/product-header/ProductHeader';

import styles from './Home.module.css'
import { useGetProductsQuery } from '../../api/apiSlice';
import { useSelector } from 'react-redux';
import { SideBar } from '../../components/sidebar/SideBar';
import { getProducts } from '../../features/product/ProductSelector';

export const Home = () => {
    useGetProductsQuery(undefined, {refetchOnMountOrArgChange: true});
    const products = useSelector(getProducts);

    return (
        <div className={styles.wrapper}>
            <div className={styles.sidebar}>
                <SideBar />
            </div>
            <div className={styles.content}>
                <ProductHeader title='Shop' />
                <div className={styles.productContainer}>
                    {products ? (<ProductContainer products={products} />) : <></>}
                </div>
            </div>
        </div>
    )
}