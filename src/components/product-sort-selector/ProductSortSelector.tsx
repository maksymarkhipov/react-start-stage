import { FormControl, MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changeProductSorter } from '../../features/product/ProductSlice';
import { ProductParameter } from '../../enums/product-sort-parameter';
import { getTypeSort } from '../../features/product/ProductSelector';

import styles from './ProductSortSelector.module.css';

export const ProductSortSelector = () => {
    const productParameter = useSelector(getTypeSort);
    const dispatch = useDispatch();

    const handleChange = (event: SelectChangeEvent) => {
        const optionSelector = event.target.value;
        dispatch(changeProductSorter(optionSelector as ProductParameter));
    };

    return (
        <>
            <FormControl>
                <Select
                    value={productParameter}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem className={styles.option} value={ProductParameter.DEFAULT_SORTING}>
                        {ProductParameter.DEFAULT_SORTING}
                    </MenuItem>
                    <MenuItem className={styles.option} value={ProductParameter.TITLE}>
                        {ProductParameter.TITLE}
                    </MenuItem>
                    <MenuItem className={styles.option} value={ProductParameter.PRICE}>
                        {ProductParameter.PRICE}
                    </MenuItem>
                    <MenuItem className={styles.option} value={ProductParameter.CATEGORY}>
                        {ProductParameter.CATEGORY}
                    </MenuItem>
                </Select>
            </FormControl>
        </>
    );
};
