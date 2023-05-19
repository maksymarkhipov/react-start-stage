import { Dialog, DialogTitle } from '@mui/material';
import DialogContent from '@mui/material/DialogContent';

export const SuccessBuyDialog = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    return (
        <Dialog open={isOpen} onClose={() => { onClose(); }}>
            <DialogTitle>Success buy</DialogTitle>
            <DialogContent>
                You buy cool products!!!
            </DialogContent>
        </Dialog>
    );
};
