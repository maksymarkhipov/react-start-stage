
import styles from '../home/Home.module.css';
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../api/apiSlice';
import { SingleProduct } from '../../components/single-product/SingleProduct';

export const SingleProductPage = () => {
    const params = useParams();
    const { data: product } = useGetProductQuery(params.productId ?? '');

    let content = <></>;

    if (product != null) {
        content = <SingleProduct product={product} />;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                {content}
            </div>
        </div>
    );
};
