import { Card, CardContent } from '@mui/material';
import styles from './price-filter.module.css';
import { type FilterRange } from '../../types/filter-range';
import { PriceCheckbox } from '../price-checkbox/price-checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterRange } from '../../../store/product/product-slice';
import { selectFilterRanges } from '../../../store/product/product-selector';

export const PriceFilter = () => {
    const filterRanges = useSelector(selectFilterRanges);
    const dispatch = useDispatch();

    const handleChange = (checked: boolean, range: FilterRange) => {
        const newRange: FilterRange = {
            ...range,
            isActivate: checked,
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
