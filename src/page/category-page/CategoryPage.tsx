import styles from '../home/Home.module.css';
import { SideBar } from '../../components/sidebar/SideBar';
import { ProductHeader } from '../../components/product-header/ProductHeader';
import { ProductContainer } from '../../components/product-container/ProductContainer';
import { useGetProductsByCategoryQuery } from '../../api/apiSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import { useParams } from 'react-router-dom';

export const CategoryPage = () => {
    const params = useParams();
    useGetProductsByCategoryQuery(params.categoryTitle!, { refetchOnMountOrArgChange: true });
    const products = useSelector((state: RootState) => state.shopPage.productsByCurrentCategory);

    return (
        <div className={styles.wrapper}>
            <div className={styles.sidebar}>
                <SideBar />
            </div>
            <div className={styles.content}>
                <ProductHeader title={params.categoryTitle!} />
                <div className={styles.productContainer}>
                    {products ? (<ProductContainer products={products} />) : <></>}
                </div>
            </div>
        </div>
    );
}