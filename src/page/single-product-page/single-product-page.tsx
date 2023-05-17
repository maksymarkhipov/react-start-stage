
import styles from '../page.module.css';
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../store/api/api-slice';
import { SingleProduct } from '../../product/components/single-product/single-product';
import { Header } from '../../layouts/header/header';

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
