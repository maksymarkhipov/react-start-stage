import styles from './product-card.module.css';
import { type ProductCart } from '../../types/product-cart';
import { Counter } from '../counter/counter';
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../../../store/cart/cart-slice';

export const ProductCard = ({ cartProduct }: { cartProduct: ProductCart }) => {
    const dispatch = useDispatch();

    const handleAddClick = () => {
        dispatch(addProduct(cartProduct.product));
    };

    const handleRemoveClick = () => {
        dispatch(removeProduct(cartProduct.product.id));
    };

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={cartProduct.product.image} alt='product' />
                </div>
                <div className={styles.content}>
                    <div className={styles.titleContainer}>
                        {cartProduct.product.title}
                    </div>
                    <div className={styles.priceContainer}>
                        ${cartProduct.product.price}
                    </div>
                </div>
                <div className={styles.counterContainer}>
                    <Counter num={cartProduct.quantity} onAddClick={handleAddClick} onRemoveClick={handleRemoveClick}/>
                </div>
            </div>
        </>
    );
};
