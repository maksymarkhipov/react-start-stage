import styles from '../page.module.css';
import { Header } from '../../layouts/header/header';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { type RootState } from '../../store/store';
import { selectProductsByCategory } from '../../store/compare-list/compare-list-selector';
import { SingleProduct } from '../../product/components/single-product/single-product';
import { type Product } from '../../core/types/product';
import { addProduct } from '../../store/cart/cart-slice';

export const ComparePage = () => {
    const params = useParams();
    const categoryTitle = params.categoryTitle ?? '';
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => selectProductsByCategory(state, categoryTitle));

    const handleClickBuy = (product: Product) => {
        dispatch(addProduct(product));
    };

    const compareProducts = products.map((product) => {
        return <SingleProduct key={product.id} product={product} onClickBuy={handleClickBuy} />;
    });

    return (
        <div className={styles.wrapper}>
            <div className={styles.headerContainer}>
                <Header />
            </div>
            <div className={styles.content}>
                <div className={styles.main}>
                    {compareProducts}
                </div>
            </div>
        </div>
    );
};
