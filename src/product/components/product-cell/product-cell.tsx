import { Card, CardContent, IconButton } from '@mui/material';
import { ShoppingBag } from '@mui/icons-material';

import styles from './product-cell.module.css';
import { type Product } from '../../../core/types/product';
import { NavLink } from 'react-router-dom';
import { getLinkProduct } from '../../../core/service/route-service';

export const ProductCell = ({ product, onClickBuy }: { product: Product, onClickBuy: (product: Product) => void }) => {
    const linkProduct = getLinkProduct(product.id);

    return (
        <Card className={styles.product}>
            <CardContent className={styles.productContent}>
                <div className={styles.top}>
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
                </div>
                <div>
                    <div className={styles.imageContainer}>
                        <NavLink to={linkProduct}>
                            <img className={styles.image}
                                src={product.image}
                                alt="stuff"/>
                        </NavLink>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.price}>
                        ${product.price}
                    </div>
                    <div>
                        <IconButton color="primary" aria-label="add to shopping cart" onClick={() => { onClickBuy(product); }}>
                            <ShoppingBag/>
                        </IconButton>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
