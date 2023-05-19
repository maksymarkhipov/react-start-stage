import { Dialog, DialogTitle } from '@mui/material';
import DialogContent from '@mui/material/DialogContent';

type SuccessBuyDialogProps = {
    isOpen: boolean
    onClose: () => void
};

export const SuccessBuyDialog = ({ isOpen, onClose }: SuccessBuyDialogProps) => {
    return (
        <Dialog open={isOpen} onClose={() => { onClose(); }}>
            <DialogTitle>Success buy</DialogTitle>
            <DialogContent>
                You buy cool products!!!
            </DialogContent>
        </Dialog>
    );
};
