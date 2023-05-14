import { Card, CardContent, IconButton } from '@mui/material';
import { ShoppingBag } from '@mui/icons-material';

import styles from './ProductCard.module.css';
import { Product } from '../../types/product';


export function ProductCard({data}: {data: Product}) {
    return(
      <Card className={styles.product}>
          <CardContent className={styles.productContent}>
              <div className={styles.top}>
                  <div className={styles.category}>
                      {data.category}
                  </div>
                  <div className={styles.titleContainer}>
                      <div className={styles.title}>
                          {data.title}
                      </div>
                  </div>
              </div>
              <div>
                  <div className={styles.imageContainer}>
                      <img className={styles.image}
                           src={data.image}
                           alt="stuff" />
                  </div>
              </div>
              <div className={styles.bottom}>
                  <div className={styles.price}>
                      ${data.price}
                  </div>
                  <div>
                      <IconButton color="primary" aria-label="add to shopping cart">
                          <ShoppingBag />
                      </IconButton>
                  </div>
              </div>
          </CardContent>
      </Card>
    );
}