import { type RootState } from '../store';
import { type Product } from '../../features/product/types/product';
import { type TypeView } from '../../features/product/enums/type-view';
import { type Category, type CategoryWithCount } from '../../features/product/types/category';
import { type SortOption } from '../../features/product/enums/sort-option';
import { type FilterRange } from '../../features/product/types/filter-range';

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
