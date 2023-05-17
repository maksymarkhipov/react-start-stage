import { useGetProductsQuery } from '../../store/api/api-slice';
import { useSelector } from 'react-redux';
import { getProducts } from '../../store/product/product-selector';
import { ProductHeader } from '../../product/components/product-header/product-header';
import styles from '../../page/page.module.css';
import { ProductContainer } from '../../product/components/product-container/product-container';

export const Home = () => {
    useGetProductsQuery(undefined, { refetchOnMountOrArgChange: true });
    const products = useSelector(getProducts);

    return (
        <>
            <ProductHeader title='Shop' />
            <div className={styles.productContainer}>
                {(products.length > 0) ? (<ProductContainer products={products} />) : <></>}
            </div>
        </>
    );
};
