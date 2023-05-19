import { Card, CardContent, FormControl, IconButton } from '@mui/material';
import { List, Widgets } from '@mui/icons-material';

import styles from './product-header.module.css';
import { ProductSortSelector } from '../product-sort-selector/product-sort-selector';
import { useDispatch } from 'react-redux';
import { changeTypeCardProduct } from '../../../store/product/product-slice';
import { TypeProductView } from '../../enums/type-product-view';

export const ProductHeader = ({ title }: { title: string }) => {
    const dispatch = useDispatch();

    return (
        <Card className={styles.productHeader}>
            <CardContent className={styles.productHeaderContent}>
                <div>
                    <div className={styles.title}>
                        {title}
                    </div>
                </div>
                <div className={styles.delimiter}></div>
                <div className={styles.bottom}>
                    <div>
                        <IconButton aria-label="delete" onClick={() => dispatch(changeTypeCardProduct(TypeProductView.CELL))}>
                            <Widgets />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={() => dispatch(changeTypeCardProduct(TypeProductView.CARD))}>
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
};
