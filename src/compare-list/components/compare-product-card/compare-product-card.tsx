import { type Product } from '../../../core/types/product';
import styles from './compare-product-card.module.css';
import { Button, Card, CardContent, IconButton } from '@mui/material';
import { ShoppingBag } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { getProductLink } from '../../../core/service/route-service';
import { NavLink } from 'react-router-dom';

type CompareProductCardProps = {
    product: Product
    onClickBuy: (product: Product) => void
    onClickDelete: (product: Product) => void
};

export const CompareProductCard = ({ product, onClickBuy, onClickDelete }: CompareProductCardProps) => {
    const productLink = getProductLink(product.id);

    return (
        <Card className={styles.container}>
            <CardContent className={styles.content}>
                <div className={styles.imageContainer}>
                    <NavLink to={productLink}>
                        <img className={styles.image} src={product.image} alt='product' />
                    </NavLink>
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.categoryContainer}>
                        {product.category}
                    </div>
                    <div className={styles.titleContainer}>
                        <NavLink to={productLink}>
                            {product.title}
                        </NavLink>
                    </div>
                    <div className={styles.descriptionContainer}>
                        {product.description}
                    </div>
                    <div className={styles.priceContainer}>
                        ${product.price}
                    </div>
                    <div className={styles.addCartContainer}>
                        <Button variant="contained"
                            onClick={() => { onClickBuy(product); }}
                            endIcon={<ShoppingBag />}>
                            Add to Cart
                        </Button>
                    </div>
                </div>
                <div className={styles.deleteContainer}>
                    <IconButton onClick={() => { onClickDelete(product); }}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            </CardContent>
        </Card>
    );
};
