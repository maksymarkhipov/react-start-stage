import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeProductSorter } from '../../features/product/ProductSlice';
import { ProductParameter } from '../../enums/product-sort-parameter';


export const ProductSortSelector = () => {
    const [productParameter, setProductParameter] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event: SelectChangeEvent) => {
        const optionSelector = event.target.value;
        setProductParameter(optionSelector);
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
                    <MenuItem value={ProductParameter.DEFAULT_SORTING}>{ProductParameter.DEFAULT_SORTING}</MenuItem>
                    <MenuItem value={ProductParameter.TITLE}>{ProductParameter.TITLE}</MenuItem>
                    <MenuItem value={ProductParameter.PRICE}>{ProductParameter.PRICE}</MenuItem>
                    <MenuItem value={ProductParameter.CATEGORY}>{ProductParameter.CATEGORY}</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}