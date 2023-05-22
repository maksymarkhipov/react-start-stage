import { type FilterRange } from '../../product/types/filter-range';
import { type Product } from '../types/product';
import { SortOption } from '../../product/enums/sort-option';

function getCheckFilterRanges (filterRanges: FilterRange[]): FilterRange[] {
    return filterRanges.filter((filterRange: FilterRange) => filterRange.isActivate);
}

function getFilterProducts (products: Product[], filterRanges: FilterRange[]) {
    return products.filter((product: Product) => {
        let isLoaded = false;

        for (const filterRange of filterRanges) {
            if (product.price > filterRange.min && product.price < filterRange.max) {
                isLoaded = true;
                break;
            }
        }

        return isLoaded;
    });
}

function getSortedProducts (products: Product[], currentSort: SortOption): Product[] {
    const copyProducts = products.slice();
    return copyProducts.sort(sortByProductParams[currentSort]);
}

const sortByProductParams = {
    [SortOption.DEFAULT_SORTING]: (): number => 0,
    [SortOption.PRICE]: (firstProduct: Product, secondProduct: Product): number =>
        firstProduct.price - secondProduct.price,
    [SortOption.TITLE]: (firstProduct: Product, secondProduct: Product): number =>
        firstProduct.title.localeCompare(secondProduct.title),
    [SortOption.CATEGORY]: (firstProduct: Product, secondProduct: Product): number =>
        firstProduct.category.localeCompare(secondProduct.category),
};

export function getFilterAndSorter (products: Product[], sorterParam: SortOption, filterRanges: FilterRange[]) {
    const checkFilteredRanges = getCheckFilterRanges(filterRanges);

    const filteredProducts = checkFilteredRanges.length > 0
        ? getFilterProducts(products, checkFilteredRanges)
        : products;

    return sorterParam === SortOption.DEFAULT_SORTING
        ? filteredProducts
        : getSortedProducts(filteredProducts, sorterParam);
}
