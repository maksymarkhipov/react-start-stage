import { ReactComponent as Logo } from './../../asset/logo.svg';

import styles from './Header.module.css';
import { CompareArrows, Favorite, Person, ShoppingBag } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { SearchSelector } from '../search-selector/SearchSelector';
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logoContainer}>
                <MenuIcon />
                <Logo />
            </div>
            <div className={styles.searchContainer}>
                <SearchSelector />
            </div>
            <div className={styles.tabContainer}>
                <IconButton>
                    <Person />
                </IconButton>
                <IconButton>
                    <CompareArrows />
                </IconButton>
                <IconButton>
                    <Favorite />
                </IconButton>
                <IconButton>
                    <ShoppingBag />
                </IconButton>
            </div>
        </div>
    );
};
