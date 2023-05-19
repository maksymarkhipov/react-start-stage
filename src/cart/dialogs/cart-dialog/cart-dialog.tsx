import { Dialog, DialogActions, DialogTitle } from '@mui/material';
import styles from './cart-dialog.module.css';
import Button from '@mui/material/Button';
import { type ReactElement } from 'react';
import DialogContent from '@mui/material/DialogContent';

type CartDialogProps = {
    isOpen: boolean
    content: ReactElement
    sum: number
    onClose: () => void
    onBuy: () => void
};

export const CartDialog = ({ isOpen, onClose, onBuy, content, sum }: CartDialogProps) => {
    const isCartEmpty = sum <= 0;

    const sumLabel = !isCartEmpty
        ? <div className={styles.sum}>total sum: ${sum}</div>
        : <></>;

    const justifyContentValue = isCartEmpty
        ? 'flex-end'
        : 'space-between';

    console.log(justifyContentValue);

    return (
        <Dialog open={isOpen}
            onClose={onClose}
            className={styles.wrapper}
            fullWidth
            maxWidth='md'
            scroll='paper'
            PaperProps={{
                sx: {
                    minHeight: '75vh',
                    maxHeight: '75vh',
                },
            }}
        >
            <DialogTitle>
                <div className={styles.title}>
                    cart
                </div>
            </DialogTitle>
            <DialogContent className={styles.content}>
                <div className={styles.productContainer}>
                    {content}
                </div>
            </DialogContent>
            <DialogActions className={styles.bottom} style={{ justifyContent: `${justifyContentValue}` }}>
                {sumLabel}
                <div className={styles.buttons}>
                    <Button variant="contained" onClick={onClose}>Close</Button>
                    <Button variant="contained" onClick={onBuy} disabled={isCartEmpty}>Buy</Button>
                </div>
            </DialogActions>
        </Dialog>
    );
};
