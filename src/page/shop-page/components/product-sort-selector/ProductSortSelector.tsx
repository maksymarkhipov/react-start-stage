import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeProductSorter } from '../../../../features/shop-page/ShopPageSlice';
import { ProductParameter } from '../../../../features/shop-page/product-sort-parameter';


export function ProductSortSelector() {
    const [productParameter, setProductParameter] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event: SelectChangeEvent) => {
        const optionSelector = event.target.value;
        setProductParameter(optionSelector);
        dispatch(changeProductSorter(optionSelector));
    };

    return (
        <>
            <Select
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                value={productParameter}
                onChange={handleChange}
            >
                <MenuItem value="">
                    Default sorting
                </MenuItem>
                <MenuItem value={ProductParameter.TITLE}>{ProductParameter.TITLE}</MenuItem>
                <MenuItem value={ProductParameter.PRICE}>{ProductParameter.PRICE}</MenuItem>
                <MenuItem value={ProductParameter.CATEGORY}>{ProductParameter.CATEGORY}</MenuItem>
            </Select>
        </>
    )
}