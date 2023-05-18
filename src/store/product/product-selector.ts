import { type RootState } from '../store';
import { type Product } from '../../product/types/product';
import { type TypeView } from '../../product/enums/type-view';
import { type Category, type CategoryWithCount } from '../../product/types/category';
import { type SortOption } from '../../product/enums/sort-option';
import { type FilterRange } from '../../product/types/filter-range';
import { createSelector } from '@reduxjs/toolkit';

export const getProducts = (state: RootState): Product[] => state.shopPage.handledProducts;
export const getCountProduct = (state: RootState): number => state.shopPage.products.length;
export const getTypeCard = (state: RootState): TypeView => state.shopPage.typeCardProduct;
export const getTypeSort = (state: RootState): SortOption => state.shopPage.paramSorter;
export const getFilterRanges = (state: RootState): FilterRange[] => state.shopPage.filterRanges;

export const getCategories = (state: RootState): CategoryWithCount[] => {
    const categoriesWithCount: CategoryWithCount[] = [];
    const products = state.shopPage.products;
    const categories = state.shopPage.categories;

    categories.forEach((category: Category) => {
        const countProducts = products.filter((product: Product) => product.category === category).length;

        categoriesWithCount.push({
            title: category,
            countProducts,
        });
    });

    return categoriesWithCount;
};

export const selectProductsBySubstring = createSelector(
    [getProducts, (state: RootState, searchValue: string) => searchValue],
    (products: Product[], searchValue: string) => {
        if (searchValue === '') return [];
        const lowerSearchValue = searchValue.toLowerCase();

        return products.filter((product: Product) => {
            const lowerProductTitle = product.title.toLowerCase();

            return lowerProductTitle.includes(lowerSearchValue);
        });
    },
);
