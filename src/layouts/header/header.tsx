import { ReactComponent as Logo } from '../../assets/logo.svg';

import styles from './header.module.css';
import { CompareArrows, Favorite, Person, ShoppingBag } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { SearchSelector } from '../../components/search-selector/search-selector';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logoContainer}>
                <MenuIcon />
                <NavLink to='/'>
                    <Logo />
                </NavLink>
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
