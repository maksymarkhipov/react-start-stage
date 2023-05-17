import { Card, CardContent, Dialog } from '@mui/material';
import styles from './cart-dialog.module.css';
import Button from '@mui/material/Button';
import { type ReactElement } from 'react';

export const CartDialog = ({ isOpen, onClose, content }: { isOpen: boolean, onClose: () => void, content: ReactElement }) => {
    return (
        <Dialog open={isOpen}
            onClose={onClose}
            className={styles.wrapper}
            fullWidth
            maxWidth='md'
        >
            <Card className={styles.card}>
                <CardContent className={styles.cardContent}>
                    <div className={styles.title}>
                        cart
                    </div>
                    <div className={styles.delimiter}></div>
                    <div className={styles.productContainer}>
                        {content}
                    </div>
                    <div className={styles.buttons}>
                        <Button variant="contained" onClick={onClose}>Close</Button>
                        <Button variant="contained">Buy</Button>
                    </div>
                </CardContent>
            </Card>
        </Dialog>
    );
};
