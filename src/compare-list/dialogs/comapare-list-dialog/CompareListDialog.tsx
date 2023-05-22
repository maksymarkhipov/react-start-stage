
import { Dialog, DialogTitle } from '@mui/material';
import DialogContent from '@mui/material/DialogContent';
import { type ReactElement } from 'react';

type CompareListDialogProps = {
    isOpen: boolean
    onClose: () => void
    content: ReactElement
};

export const CompareListDialog = ({ isOpen, onClose, content }: CompareListDialogProps) => {
    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            fullWidth
            maxWidth='md'
            scroll='paper'
            PaperProps={{
                sx: {
                    minHeight: '50vh',
                    maxHeight: '50vh',
                },
            }}
        >
            <DialogTitle>
                Compare list
            </DialogTitle>
            <DialogContent>
                {content}
            </DialogContent>
        </Dialog>
    );
};
