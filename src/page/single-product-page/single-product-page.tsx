
import styles from '../page.module.css';
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../store/api/api-slice';
import { SingleProduct } from '../../product/components/single-product/single-product';
import { Header } from '../../layouts/header/header';
import { type Product } from '../../product/types/product';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/cart/cart-slice';

export const SingleProductPage = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { data: product } = useGetProductQuery(params.productId ?? '');

    let content = <></>;

    const handleClickBuy = (product: Product) => {
        dispatch(addProduct(product));
    };

    if (product != null) {
        content = <SingleProduct onClickBuy={handleClickBuy} product={product} />;
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
