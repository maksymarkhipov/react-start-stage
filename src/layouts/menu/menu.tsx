import { Drawer, IconButton } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export const Menu = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleClose = () => {
        setIsDrawerOpen(false);
    };

    return (
        <>
            <IconButton onClick={handleOpen}>
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor='left'
                open={isDrawerOpen}
                onClose={handleClose}
            >
                <></>
            </Drawer>
        </>
    );
};
