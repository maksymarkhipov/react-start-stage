import { Dialog, DialogActions, DialogTitle } from '@mui/material';
import styles from './cart-dialog.module.css';
import Button from '@mui/material/Button';
import { type ReactElement } from 'react';
import DialogContent from '@mui/material/DialogContent';

export const CartDialog = ({ isOpen, onClose, content }: { isOpen: boolean, onClose: () => void, content: ReactElement }) => {
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
            <DialogActions className={styles.buttons}>
                <Button variant="contained" onClick={onClose}>Close</Button>
                <Button variant="contained">Buy</Button>
            </DialogActions>
        </Dialog>
    );
};
