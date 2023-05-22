import styles from '../page.module.css';
import { Header } from '../../layouts/header/header';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { type RootState } from '../../store/store';
import { selectProductsByCategory } from '../../store/compare-list/compare-list-selector';
import { type Product } from '../../core/types/product';
import { addProduct } from '../../store/cart/cart-slice';
import { CompareProductCard } from '../../compare-list/components/compare-product-card/compare-product-card';
import { deleteProduct } from '../../store/compare-list/compare-list-slice';

export const ComparePage = () => {
    const params = useParams();
    const categoryTitle = params.categoryTitle ?? '';
    const products = useSelector((state: RootState) => selectProductsByCategory(state, categoryTitle));
    const dispatch = useDispatch();

    const handleClickBuy = (product: Product) => {
        dispatch(addProduct(product));
    };

    const handleClickDelete = (product: Product) => {
        dispatch(deleteProduct(product.id));
    };

    const compareProducts = products.map((product) => {
        return <CompareProductCard
            key={product.id}
            product={product}
            onClickBuy={handleClickBuy}
            onClickDelete={handleClickDelete} />;
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
