import styles from './product-card.module.css';
import { type CartProduct } from '../../../product/types/cart-product';

export const ProductCard = ({ cartProduct }: { cartProduct: CartProduct }) => {
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
            </div>
        </>
    );
};
