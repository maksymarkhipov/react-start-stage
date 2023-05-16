import { type RootState } from '../store';
import { type Product } from '../../types/product';
import { type TypeCard } from '../../enums/type-card';
import { type Category, type CategoryWithCount } from '../../types/category';
import { type SortProductParameter } from '../../enums/product-sort-parameter';
import { type FilterRange } from '../../types/filter-range';

export const getProducts = (state: RootState): Product[] => state.shopPage.handledProducts;
export const getCountProduct = (state: RootState): number => state.shopPage.products.length;
export const getTypeCard = (state: RootState): TypeCard => state.shopPage.typeCardProduct;
export const getTypeSort = (state: RootState): SortProductParameter => state.shopPage.paramSorter;
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
