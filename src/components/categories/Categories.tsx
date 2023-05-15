import { Card, CardContent } from '@mui/material';

import styles from './Categories.module.css';
import { useGetCategoriesQuery } from '../../api/apiSlice';
import { CategoryWithCount, Category } from '../../types/category';
import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCategories, getCountProduct } from '../../features/product/ProductSelector';


export const Categories = () => {
    useGetCategoriesQuery();

    const countProducts = useSelector(getCountProduct);
    const categories: CategoryWithCount[] = useSelector(getCategories);
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
    )
}

function getLinkCategories(categories: CategoryWithCount[]): ReactElement {
    return (
        <>
            {categories.map((category: CategoryWithCount) =>
                createLink(category.title, `/category/${category.title}`, category.countProducts))}
        </>
    );
}

function createLink(category: Category, link: string, count: number): ReactElement {
    return (
        <NavLink key={category} to={link}>
            <li key={category} className={styles.categoryItem}>{category} ({count})</li>
        </NavLink>
    );
}