import { type RootState } from '../store';
import { type Category, type CategoryWithCount } from '../../core/types/category';
import { getCategoriesWithCount } from '../../core/service/category-with-count.service';
import { type Product } from '../../core/types/product';
import { createSelector } from '@reduxjs/toolkit';

export const selectCountCompareProduct = (state: RootState): number => state.compareList.products.length;
export const selectProducts = (state: RootState): Product[] => state.compareList.products;
export const selectCategories = (state: RootState): Category[] => {
    const categorySet: Set<Category> = new Set<Category>();
    state.compareList.products.forEach((product) => categorySet.add(product.category));

    return Array.from(categorySet);
};

export const selectCategoriesWithCount = (state: RootState): CategoryWithCount[] => {
    const products = state.compareList.products;
    const categories = selectCategories(state);

    return getCategoriesWithCount(products, categories);
};

export const selectProductsByCategory = createSelector(
    [selectProducts, (state: RootState, category: Category) => category],
    (products: Product[], category: Category) => {
        return products.filter((product) => product.category === category);
    },
);
