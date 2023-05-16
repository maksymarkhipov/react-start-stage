import { useParams } from 'react-router-dom';
import { useGetProductsByCategoryQuery } from '../../store/api/apiSlice';
import { useSelector } from 'react-redux';
import { getProducts } from '../../store/product/ProductSelector';
import { ProductHeader } from '../../features/product/components/product-header/ProductHeader';
import styles from '../../page/Page.module.css';
import { ProductContainer } from '../../features/product/components/product-container/ProductContainer';

export const OneCategoryProduct = () => {
    const params = useParams();
    const categoryTitle = params.categoryTitle ?? '';

    useGetProductsByCategoryQuery(categoryTitle, { refetchOnMountOrArgChange: true });
    const products = useSelector(getProducts);

    return (
        <>
            <ProductHeader title={categoryTitle} />
            <div className={styles.productContainer}>
                {(products.length > 0) ? (<ProductContainer products={products} />) : <></>}
            </div>
        </>
    );
};
