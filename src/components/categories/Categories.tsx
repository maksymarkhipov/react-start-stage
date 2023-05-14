import { Card, CardContent } from '@mui/material';

import styles from './Categories.module.css';
import { useGetCategoriesQuery } from '../../api/apiSlice';
import { Category } from '../../types/category';
import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

export function Categories() {
    let categoryItem = <></>;

    const {
        data: categories,
        isSuccess,
    } = useGetCategoriesQuery();

    if (isSuccess) {
        categoryItem = getTitleCategories(categories);
    }

    return (
        <Card>
            <CardContent className={styles.cardContent}>
                <div className={styles.title}>
                    Categories
                </div>
                <ul className={styles.categories}>
                    {categoryItem}
                </ul>
            </CardContent>
        </Card>
    )
}

function getTitleCategories(categories: Category[]): ReactElement {
    return (
        <>
            {categories.map((category: Category) => {
                console.log(`category/${category}`);
                return <NavLink key={category} to={`/category/${category}`}>
                    <li key={category} className={styles.categoryItem}>{category}</li>
                </NavLink>
            })}
        </>
    );
}