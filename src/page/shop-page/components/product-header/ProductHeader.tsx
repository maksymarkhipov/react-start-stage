import {
    Card,
    CardContent,
    FormControl,
    IconButton,
} from '@mui/material';
import { List, Widgets } from '@mui/icons-material';

import styles from './ProductHeader.module.css';
import { ProductSortSelector } from '../product-sort-selector/ProductSortSelector';

export function ProductHeader() {
    return (
        <Card className={styles.productHeader}>
            <CardContent className={styles.productHeaderContent}>
                <div>
                    <div className={styles.title}>
                        Shop
                    </div>
                </div>
                <div className={styles.delimiter}></div>
                <div className={styles.bottom}>
                    <div>
                        <IconButton aria-label="delete">
                            <Widgets />
                        </IconButton>
                        <IconButton aria-label="delete">
                            <List />
                        </IconButton>
                    </div>
                    <div>
                        <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                            <ProductSortSelector />
                        </FormControl>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}