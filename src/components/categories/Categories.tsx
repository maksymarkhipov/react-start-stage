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
        categoryItem = getLinkCategories(categories);
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

type PreparedLink = {
    nameCategory: string,
    path: string;
}

function getLinkCategories(categories: Category[]): ReactElement {
    const preparedLinks: PreparedLink[] = [
        {nameCategory: 'all', path: '/'},
    ];

    categories.forEach((category: Category) => {
       preparedLinks.push({
           nameCategory: category,
           path: `/category/${category}`,
       });
    });

    const links = preparedLinks.map((category: PreparedLink) => createLink(category.nameCategory, category.path));

    return (
        <>
            {links}
        </>
    );
}

function createLink(category: Category, link: string): ReactElement {
    return (
        <NavLink key={category} to={link}>
            <li key={category} className={styles.categoryItem}>{category}</li>
        </NavLink>
    );
}