
import styles from './search-selector.module.css';
import { useSelector } from 'react-redux';
import { selectProductsBySubstring } from '../../store/product/product-selector';
import { type RootState } from '../../store/store';
import React, { useState } from 'react';
import { type Product } from '../../product/types/product';
import { SearchProductCard } from '../search-product-card/search-product-card';

export const SearchSelector = () => {
    const [searchValue, setSearchValue] = useState('');
    const searchResult: Product[] = useSelector((state: RootState) => selectProductsBySubstring(state, searchValue));

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.searchSelector}>
                <div className={styles.inputContainer}>
                    <input className={`${styles.text} ${styles.input}`}
                        value={searchValue}
                        onChange={handleChange}
                        placeholder='Search for products'
                    />
                </div>
                <div className={`${styles.text} ${styles.category}`}>
                    All Categories
                </div>
            </div>
            <div className={styles.foundedProducts}>
                {searchResult.map((product: Product) => <SearchProductCard key={product.id} product={product} />)}
            </div>
        </div>
    );
};
