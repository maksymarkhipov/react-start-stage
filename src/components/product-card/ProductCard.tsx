import { Button, Card, CardContent } from '@mui/material';
import { CompareArrows, Favorite, ShoppingBag } from '@mui/icons-material';

import styles from './ProductCard.module.css';
import { Product } from '../../types/product';

export const ProductCard = ({product}: {product: Product}) => {
  return (
      <Card className={styles.card}>
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
                  <Button variant="contained" endIcon={<ShoppingBag />}>
                      Add to Cart
                  </Button>
              </div>
          </CardContent>
      </Card>
  )
};