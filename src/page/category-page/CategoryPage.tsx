import styles from '../home/Home.module.css';
import { SideBar } from '../../components/sidebar/SideBar';
import { ProductHeader } from '../../components/product-header/ProductHeader';
import { ProductContainer } from '../../components/product-container/ProductContainer';
import { useGetProductsByCategoryQuery } from '../../api/apiSlice';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../features/product/ProductSelector';
import { Header } from '../../components/header/Header';

export const CategoryPage = () => {
    const params = useParams();
    const categoryTitle = params.categoryTitle ?? '';

    useGetProductsByCategoryQuery(categoryTitle, { refetchOnMountOrArgChange: true });
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
                    <ProductHeader title={categoryTitle} />
                    <div className={styles.productContainer}>
                        {(products.length > 0) ? (<ProductContainer products={products} />) : <></>}
                    </div>
                </div>
            </div>
        </div>
    );
};
