import { Checkbox } from '@mui/material';
import styles from './price-checkbox.module.css';
import { type FilterRange } from '../../types/filter-range';
import React from 'react';

type PriceCheckboxProps = {
    range: FilterRange
    onChange: (change: boolean, range: FilterRange) => void
};

export const PriceCheckbox = ({ range, onChange }: PriceCheckboxProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked, range);
    };

    return (
        <div className={styles.container}>
            <Checkbox onChange={handleChange} checked={range.isActivate} />
            <div className={styles.label}>
                {range.min} - {range.max}
            </div>
        </div>
    );
};
