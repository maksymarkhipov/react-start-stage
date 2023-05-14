import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from './Categories.module.css';
import { useGetCategoriesQuery } from '../../api/apiSlice';
import { CategoryWithCount, Category } from '../../types/category';
import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCategories } from '../../features/shop-page/ShopPageSlice';


export function Categories() {
    useGetCategoriesQuery();

    const categories: CategoryWithCount[] = useSelector(getCategories);
    const categoryLink = getLinkCategories(categories);

    return (
        <Card>
            <CardContent className={styles.cardContent}>
                <div className={styles.title}>
                    Categories
                </div>
                <ul className={styles.categories}>
                    <Accordion expanded={true}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            All
                        </AccordionSummary>
                        <AccordionDetails>
                            {categoryLink}
                        </AccordionDetails>
                    </Accordion>
                </ul>
            </CardContent>
        </Card>
    )
}

function getLinkCategories(categories: CategoryWithCount[]): ReactElement {
    return (
        <>
            {categories.map((category: CategoryWithCount) =>
                createLink(category.title, `/category/${category.title}`, category.countProduct))}
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