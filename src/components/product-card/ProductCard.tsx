
import styles from './ProductCard.module.css';
import { type Product } from '../../product/types/product';
import { NavLink } from 'react-router-dom';

export const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <NavLink to={`products/${product.id}/`}>
                    <img className={styles.image} src={product.image} alt="product"/>
                </NavLink>
            </div>
            <div className={styles.titleContainer}>
                <NavLink to={`products/${product.id}/`}>
                    {product.title}
                </NavLink>
            </div>
            <div className={styles.priceContainer}>
                ${product.price}
            </div>
        </div>
    );
};
