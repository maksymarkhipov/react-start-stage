import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeProductSorter } from '../../features/product/ProductSlice';
import { ProductParameter } from '../../enums/product-sort-parameter';


export const ProductSortSelector = () => {
    const [productParameter, setProductParameter] = useState('');
    const dispatch = useDispatch();

    const label = 'Default sorting';

    const handleChange = (event: SelectChangeEvent) => {
        const optionSelector = event.target.value;
        setProductParameter(optionSelector);
        dispatch(changeProductSorter(optionSelector as ProductParameter));
    };

    return (
        <>
            <FormControl>
                <InputLabel>{label}</InputLabel>
                <Select
                    value={productParameter}
                    label={label}
                    onChange={handleChange}
                >
                    <MenuItem value={ProductParameter.TITLE}>{ProductParameter.TITLE}</MenuItem>
                    <MenuItem value={ProductParameter.PRICE}>{ProductParameter.PRICE}</MenuItem>
                    <MenuItem value={ProductParameter.CATEGORY}>{ProductParameter.CATEGORY}</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}