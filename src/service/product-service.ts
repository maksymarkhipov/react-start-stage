import { type FilterRange } from '../types/filter-range';
import { type Product } from '../types/product';
import { SortProductParameter } from '../enums/product-sort-parameter';

function getCheckFilterRanges (filterRanges: FilterRange[]): FilterRange[] {
    return filterRanges.filter((filterRange: FilterRange) => filterRange.isChecked);
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

function getSortedProducts (products: Product[], currentSort: SortProductParameter): Product[] {
    const copyProducts = products.slice();
    return copyProducts.sort(sortByProductParams[currentSort]);
}

const sortByProductParams = {
    [SortProductParameter.DEFAULT_SORTING]: (): number => 0,
    [SortProductParameter.PRICE]: (firstProduct: Product, secondProduct: Product): number =>
        firstProduct.price - secondProduct.price,
    [SortProductParameter.TITLE]: (firstProduct: Product, secondProduct: Product): number =>
        firstProduct.title.localeCompare(secondProduct.title),
    [SortProductParameter.CATEGORY]: (firstProduct: Product, secondProduct: Product): number =>
        firstProduct.category.localeCompare(secondProduct.category),
};

export function getFilterAndSorter (products: Product[], sorterParam: SortProductParameter, filterRanges: FilterRange[]) {
    const checkFilteredRanges = getCheckFilterRanges(filterRanges);

    const filteredProducts = checkFilteredRanges.length > 0
        ? getFilterProducts(products, checkFilteredRanges)
        : products;

    return sorterParam === SortProductParameter.DEFAULT_SORTING
        ? filteredProducts
        : getSortedProducts(filteredProducts, sorterParam);
}
