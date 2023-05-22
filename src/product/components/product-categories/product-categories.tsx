import { Card, CardContent } from '@mui/material';

import styles from './product-categories.module.css';
import { useGetCategoriesQuery, useGetProductsQuery } from '../../../store/api/api-slice';
import { type CategoryWithCount, type Category } from '../../../core/types/category';
import React, { type ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCategories, selectCountProduct } from '../../../store/product/product-selector';

export const ProductCategories = () => {
    useGetProductsQuery();
    useGetCategoriesQuery();

    const countProducts = useSelector(selectCountProduct);
    const categories: CategoryWithCount[] = useSelector(selectCategories);
    const categoryLinks = getLinkCategories(categories);

    return (
        <Card>
            <CardContent className={styles.cardContent}>
                <div className={styles.title}>
                    Categories
                </div>
                <ul className={styles.categories}>
                    <NavLink to='/'>
                        All ({countProducts})
                    </NavLink>
                    {categoryLinks}
                </ul>
            </CardContent>
        </Card>
    );
};

function getLinkCategories (categories: CategoryWithCount[]): ReactElement {
    return (
        <>
            {categories.map((category: CategoryWithCount) =>
                createLink(category.title, `/category/${category.title}`, category.countProducts))}
        </>
    );
}

function createLink (category: Category, link: string, count: number): ReactElement {
    return (
        <NavLink key={category} to={link}>
            <li key={category} className={styles.categoryItem}>{category} ({count})</li>
        </NavLink>
    );
}
