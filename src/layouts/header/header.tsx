import { ReactComponent as Logo } from '../../assets/logo.svg';

import styles from './header.module.css';
import { Favorite, Person } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { SearchSelector } from '../../product/components/search-selector/search-selector';
import { NavLink } from 'react-router-dom';
import { Cart } from '../../cart/components/cart/cart';
import { Menu } from '../menu/menu';
import { CompareList } from '../../compare-list/components/compare-list/compare-list';

export const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logoContainer}>
                <Menu />
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
                <CompareList />
                <IconButton>
                    <Favorite />
                </IconButton>
                <Cart />
            </div>
        </div>
    );
};
