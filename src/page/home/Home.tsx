import { ProductContainer } from '../../components/product-container/ProductContainer';
import { ProductHeader } from '../../components/product-header/ProductHeader';

import styles from './Home.module.css';
import { useGetProductsQuery } from '../../api/apiSlice';
import { useSelector } from 'react-redux';
import { SideBar } from '../../components/sidebar/SideBar';
import { getProducts } from '../../features/product/ProductSelector';
import { Header } from '../../components/header/Header';

export const Home = () => {
    useGetProductsQuery(undefined, { refetchOnMountOrArgChange: true });
    const products = useSelector(getProducts);

    return (
        <div className={styles.wrapper}>
            <div className={styles.headerContainer}>
                < Header />
            </div>
            <div className={styles.content}>
                <div className={styles.sidebar}>
                    <SideBar />
                </div>
                <div className={styles.main}>
                    <ProductHeader title='Shop' />
                    <div className={styles.productContainer}>
                        {(products.length > 0) ? (<ProductContainer products={products} />) : <></>}
                    </div>
                </div>
            </div>
        </div>
    );
};
