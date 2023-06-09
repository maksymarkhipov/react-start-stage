import { Card, CardContent, IconButton } from '@mui/material';
import { ShoppingBag } from '@mui/icons-material';

import styles from './product-cell.module.css';
import { type Product } from '../../types/product';
import { NavLink } from 'react-router-dom';

export const ProductCell = ({ data, onClickBuy }: { data: Product, onClickBuy: (product: Product) => void }) => {
    const linkProduct = `/products/${data.id}`;

    return (
        <Card className={styles.product}>
            <CardContent className={styles.productContent}>
                <div className={styles.top}>
                    <div className={styles.category}>
                        {data.category}
                    </div>
                    <div className={styles.titleContainer}>
                        <div className={styles.title}>
                            <NavLink to={linkProduct}>
                                {data.title}
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.imageContainer}>
                        <NavLink to={linkProduct}>
                            <img className={styles.image}
                                src={data.image}
                                alt="stuff"/>
                        </NavLink>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.price}>
                        ${data.price}
                    </div>
                    <div>
                        <IconButton color="primary" aria-label="add to shopping cart" onClick={() => { onClickBuy(data); }}>
                            <ShoppingBag/>
                        </IconButton>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
