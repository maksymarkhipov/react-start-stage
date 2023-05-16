import { Checkbox } from '@mui/material';
import styles from './PriceCheckbox.module.css';
import { type FilterRange } from '../../types/range';

export const PriceCheckbox = ({ range }: { range: FilterRange }) => {
    return (
        <div className={styles.container}>
            <Checkbox />
            <div className={styles.label}>
                {range.min} - {range.max}
            </div>
        </div>
    );
};
