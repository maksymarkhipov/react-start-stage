import { Drawer, IconButton } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './menu.module.css';
import { Security, ShoppingCart } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

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
                <ul className={styles.menu}>
                    <li>
                        <NavLink to='/' className={styles.menuItem}>
                            <ShoppingCart />
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='privacy-policy' className={styles.menuItem}>
                            <Security />
                            Privacy Policy
                        </NavLink>
                    </li>
                </ul>
            </Drawer>
        </>
    );
};
