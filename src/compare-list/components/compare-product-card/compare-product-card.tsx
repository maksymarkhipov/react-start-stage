import { type Product } from '../../../core/types/product';
import styles from './compare-product-card.module.css';
import { Button, Card, CardContent, IconButton } from '@mui/material';
import { ShoppingBag } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';

type CompareProductCardProps = {
    product: Product
    onClickBuy: (product: Product) => void
    onClickDelete: (product: Product) => void
};

export const CompareProductCard = ({ product, onClickBuy, onClickDelete }: CompareProductCardProps) => {
    return (
        <Card className={styles.container}>
            <CardContent className={styles.content}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={product.image} alt='product' />
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.categoryContainer}>
                        {product.category}
                    </div>
                    <div className={styles.titleContainer}>
                        {product.title}
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
