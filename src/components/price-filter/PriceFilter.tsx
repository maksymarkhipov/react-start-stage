import { Card, CardContent } from '@mui/material';
import styles from './PriceFilter.module.css';
import { type FilterRange } from '../../types/range';
import { PriceCheckbox } from '../price-checkbox/PriceCheckbox';

export const PriceFilter = () => {
    const min = 0;
    const max = 100;
    const step = 20;

    const filterRanges: FilterRange[] = getFilterRanges(min, max, step);
    const priceCheckboxes = filterRanges.map((range: FilterRange, index: number) => <PriceCheckbox key={index} range={range} />);

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

const getFilterRanges = (min: number, max: number, step: number): FilterRange[] => {
    const filterRanges: FilterRange[] = [];

    for (let i = min; i < max; i += step) {
        const range: FilterRange = { min: i, max: i + step };
        filterRanges.push(range);
    }

    return filterRanges;
};
