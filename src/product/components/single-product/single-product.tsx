import styles from './single-product.module.css';
import { type Product } from '../../../core/types/product';
import { Button, Card, CardContent } from '@mui/material';
import { CompareArrows, Favorite, ShoppingBag } from '@mui/icons-material';
import { RateStars } from '../rate-stars/rate-stars';

type SingleProductProps = {
    product: Product
    onClickBuy: (product: Product) => void
    onClickCompare: (product: Product) => void
};

export const SingleProduct = ({ product, onClickBuy, onClickCompare }: SingleProductProps) => {
    return (
        <Card>
            <CardContent className={styles.cardContent}>
                <div className={styles.left}>
                    <div className={styles.imageContainer}>
                        <img className={styles.image} src={product.image} alt='product' />
                    </div>
                </div>
                <div className={styles.center}>
                    <div className={styles.category}>
                        {product.category}
                    </div>
                    <div className={styles.titleContainer}>
                        <div className={styles.title}>
                            {product.title}
                        </div>
                    </div>
                    <div className={styles.start}>
                        {<RateStars count={Math.round(product.rate)} />}
                    </div>
                    <div className={styles.description}>
                        {product.description}
                    </div>
                </div>
                <Card className={styles.right}>
                    <CardContent className={styles.rightContent}>
                        <div className={styles.info}>
                            <div className={styles.labelText}>
                              Delivery:
                            </div>
                            <div className={styles.label}>
                              Free
                            </div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.labelText}>
                              Stock:
                            </div>
                            <div className={`${styles.label} ${styles.labelStock}`}>
                              26
                            </div>
                        </div>
                        <div className={styles.delimiter}></div>
                        <div className={styles.actionButtons}>
                            <Button variant="contained" onClick={() => { onClickCompare(product); }} endIcon={<CompareArrows />}>
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
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
    );
};
