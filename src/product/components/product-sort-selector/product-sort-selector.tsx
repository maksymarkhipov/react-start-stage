import { FormControl, MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changeProductSorter } from '../../../store/product/product-slice';
import { SortOption } from '../../enums/sort-option';
import { getTypeSort } from '../../../store/product/product-selector';

import styles from './product-sort-selector.module.css';

export const ProductSortSelector = () => {
    const productParameter = useSelector(getTypeSort);
    const dispatch = useDispatch();

    const handleChange = (event: SelectChangeEvent) => {
        const optionSelector = event.target.value;
        dispatch(changeProductSorter(optionSelector as SortOption));
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
                    <MenuItem className={styles.option} value={SortOption.DEFAULT_SORTING}>
                        {SortOption.DEFAULT_SORTING}
                    </MenuItem>
                    <MenuItem className={styles.option} value={SortOption.TITLE}>
                        {SortOption.TITLE}
                    </MenuItem>
                    <MenuItem className={styles.option} value={SortOption.PRICE}>
                        {SortOption.PRICE}
                    </MenuItem>
                    <MenuItem className={styles.option} value={SortOption.CATEGORY}>
                        {SortOption.CATEGORY}
                    </MenuItem>
                </Select>
            </FormControl>
        </>
    );
};
