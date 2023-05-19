import styles from './counter.module.css';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

type CounterProps = {
    num: number
    onRemoveClick: () => void
    onAddClick: () => void
};

export const Counter = ({ num, onRemoveClick, onAddClick }: CounterProps) => {
    return (
        <div className={styles.wrapper}>
            <IconButton onClick={onRemoveClick}>
                <RemoveIcon/>
            </IconButton>
            <div className={styles.numberContainer}>
                {num}
            </div>
            <IconButton onClick={onAddClick}>
                <AddIcon/>
            </IconButton>
        </div>
    );
};
