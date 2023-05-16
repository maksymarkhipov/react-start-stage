
import styles from '../Page.module.css';
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../store/api/apiSlice';
import { SingleProduct } from '../../features/product/components/single-product/SingleProduct';
import { Header } from '../../layouts/Header/Header';

export const SingleProductPage = () => {
    const params = useParams();
    const { data: product } = useGetProductQuery(params.productId ?? '');

    let content = <></>;

    if (product != null) {
        content = <SingleProduct product={product} />;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.headerContainer}>
                < Header />
            </div>
            <div className={styles.content}>
                {content}
            </div>
        </div>
    );
};
