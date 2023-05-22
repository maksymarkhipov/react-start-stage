import { type RootState } from '../store';
import { type Category, type CategoryWithCount } from '../../core/types/category';
import { getCategoriesWithCount } from '../../core/service/category-with-count.service';

export const selectCountCompareProduct = (state: RootState): number => state.compareList.products.length;

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
