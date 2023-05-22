import { type RootState } from '../store';
import { type Product } from '../../core/types/product';
import { type TypeProductView } from '../../product/enums/type-product-view';
import { type CategoryWithCount } from '../../core/types/category';
import { type SortOption } from '../../product/enums/sort-option';
import { type FilterRange } from '../../product/types/filter-range';
import { createSelector } from '@reduxjs/toolkit';
import { getCategoriesWithCount } from '../../core/service/category-with-count.service';

export const selectProducts = (state: RootState): Product[] => state.shopPage.handledProducts;
export const selectCountProduct = (state: RootState): number => state.shopPage.products.length;
export const selectTypeCard = (state: RootState): TypeProductView => state.shopPage.typeProductCard;
export const selectTypeSort = (state: RootState): SortOption => state.shopPage.sortingParam;
export const selectFilterRanges = (state: RootState): FilterRange[] => state.shopPage.filterRanges;

export const selectCategories = (state: RootState): CategoryWithCount[] => {
    const products = state.shopPage.products;
    const categories = state.shopPage.categories;

    return getCategoriesWithCount(products, categories);
};

export const selectProductsBySubstring = createSelector(
    [selectProducts, (state: RootState, searchValue: string) => searchValue],
    (products: Product[], searchValue: string) => {
        if (searchValue === '') return [];

        const lowerSearchValue = searchValue.toLowerCase();

        return products.filter((product: Product) => {
            const lowerProductTitle = product.title.toLowerCase();

            return lowerProductTitle.includes(lowerSearchValue);
        });
    },
);
