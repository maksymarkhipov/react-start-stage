import { Card, CardContent } from '@mui/material';
import styles from './PriceFilter.module.css';
import { type FilterRange } from '../../types/filter-range';
import { PriceCheckbox } from '../price-checkbox/PriceCheckbox';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterRange } from '../../features/product/ProductSlice';
import { getFilterRanges } from '../../features/product/ProductSelector';

export const PriceFilter = () => {
    const filterRanges = useSelector(getFilterRanges);
    const dispatch = useDispatch();

    const handleChange = (checked: boolean, range: FilterRange) => {
        const newRange: FilterRange = {
            ...range,
            isChecked: checked,
        };

        dispatch(changeFilterRange(newRange));
    };

    const priceCheckboxes = filterRanges.map((range: FilterRange) => {
        return <PriceCheckbox key={range.id} range={range} onChange={handleChange} />;
    });

    return (
        <Card>
            <CardContent className={styles.container}>
                <div className={styles.title}>
                    Price
                </div>
                <div>
                    {priceCheckboxes}
                </div>
            </CardContent>
        </Card>
    );
};
