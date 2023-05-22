import { type Product } from '../types/product';
import { type Category, type CategoryWithCount } from '../types/category';

export const getCategoriesWithCount = (products: Product[], categories: Category[]) => {
    const categoriesWithCount: CategoryWithCount[] = [];

    categories.forEach((category: Category) => {
        const countProducts = products.filter((product: Product) => product.category === category).length;

        categoriesWithCount.push({
            title: category,
            countProducts,
        });
    });

    return categoriesWithCount;
};
