import { Button, Card, CardContent } from '@mui/material';
import { CompareArrows, Favorite, ShoppingBag } from '@mui/icons-material';

import styles from './product-card.module.css';
import { type Product } from '../../types/product';
import { RateStars } from '../rate-stars/rate-stars';
import { NavLink } from 'react-router-dom';

export const ProductCard = ({ product, onClickBuy }: { product: Product, onClickBuy: (product: Product) => void }) => {
    const linkProduct = `/products/${product.id}`;

    return (
        <Card className={styles.card}>
            <CardContent className={styles.cardContent}>
                <div className={styles.left}>
                    <div className={styles.imageContainer}>
                        <NavLink to={linkProduct}>
                            <img className={styles.image} src={product.image} alt='product' />
                        </NavLink>
                    </div>
                </div>
                <div className={styles.center}>
                    <div className={styles.category}>
                        {product.category}
                    </div>
                    <div className={styles.titleContainer}>
                        <div className={styles.title}>
                            <NavLink to={linkProduct}>
                                {product.title}
                            </NavLink>
                        </div>
                    </div>
                    <div className={styles.stars}>
                        <RateStars count={Math.round(product.rate)} />
                    </div>
                    <div className={styles.description}>
                        {product.description}
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.actionButtons}>
                        <Button variant="contained" endIcon={<CompareArrows />}>
                          Compare
                        </Button>
                        <Button variant="contained" endIcon={<Favorite />}>
                            Wishlist
                        </Button>
                    </div>
                    <div className={styles.price}>
                        ${product.price}
                    </div>
                    <Button variant="contained" onClick={() => { onClickBuy(product); }} endIcon={<ShoppingBag />}>
                        Add to Cart
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};
