import { FormControl, MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changeProductSorter } from '../../features/product/ProductSlice';
import { SortProductParameter } from '../../enums/product-sort-parameter';
import { getTypeSort } from '../../features/product/ProductSelector';

import styles from './ProductSortSelector.module.css';

export const ProductSortSelector = () => {
    const productParameter = useSelector(getTypeSort);
    const dispatch = useDispatch();

    const handleChange = (event: SelectChangeEvent) => {
        const optionSelector = event.target.value;
        dispatch(changeProductSorter(optionSelector as SortProductParameter));
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
                    <MenuItem className={styles.option} value={SortProductParameter.DEFAULT_SORTING}>
                        {SortProductParameter.DEFAULT_SORTING}
                    </MenuItem>
                    <MenuItem className={styles.option} value={SortProductParameter.TITLE}>
                        {SortProductParameter.TITLE}
                    </MenuItem>
                    <MenuItem className={styles.option} value={SortProductParameter.PRICE}>
                        {SortProductParameter.PRICE}
                    </MenuItem>
                    <MenuItem className={styles.option} value={SortProductParameter.CATEGORY}>
                        {SortProductParameter.CATEGORY}
                    </MenuItem>
                </Select>
            </FormControl>
        </>
    );
};
