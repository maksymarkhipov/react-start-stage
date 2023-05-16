import { createSlice, nanoid, type PayloadAction } from '@reduxjs/toolkit';
import { ProductParameter } from '../../enums/product-sort-parameter';
import { type Product } from '../../types/product';
import { apiSlice } from '../../api/apiSlice';
import { type Category } from '../../types/category';
import { TypeCard } from '../../enums/type-card';
import { type FilterRange } from '../../types/filter-range';

const filterMin = 0;
const filterMax = 100;
const filterStep = 20;

type initialType = {
    products: Product[]
    productsByCurrentCategory: Product[]
    sorterProductsByCurrentCategory: Product[]
    categories: Category[]
    paramSorter: ProductParameter
    typeCardProduct: TypeCard
    filterRanges: FilterRange[]
};

const initialState: initialType = {
    products: [],
    productsByCurrentCategory: [],
    sorterProductsByCurrentCategory: [],
    categories: [],
    paramSorter: ProductParameter.DEFAULT_SORTING,
    typeCardProduct: TypeCard.CELL,
    filterRanges: getFilterRanges(filterMin, filterMax, filterStep),
};

export const productSlice = createSlice({
    name: 'shopPageSlice',
    initialState,
    reducers: {
        changeTypeCardProduct: (state, { payload }: PayloadAction<TypeCard>) => {
            state.typeCardProduct = payload;
        },
        changeProductSorter: (state, { payload }: PayloadAction<ProductParameter>) => {
            state.paramSorter = payload;

            if (state.paramSorter === ProductParameter.DEFAULT_SORTING) {
                state.sorterProductsByCurrentCategory = state.productsByCurrentCategory;
                return;
            }

            state.sorterProductsByCurrentCategory = getSortedProducts(state.productsByCurrentCategory, state.paramSorter);
        },
        changeFilterRange: (state, { payload }: PayloadAction<FilterRange>) => {
            const find = state.filterRanges.find((filterRange) => filterRange.id === payload.id);

            if (find == null) return;

            find.isChecked = payload.isChecked;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            apiSlice.endpoints.getProducts.matchFulfilled,
            (state, { payload }) => {
                state.products = payload;
                state.productsByCurrentCategory = state.products;
                state.sorterProductsByCurrentCategory = state.productsByCurrentCategory;
                state.paramSorter = ProductParameter.DEFAULT_SORTING;
            },
        );
        builder.addMatcher(
            apiSlice.endpoints.getCategories.matchFulfilled,
            (state, { payload }) => {
                state.categories = payload;
            },
        );
        builder.addMatcher(
            apiSlice.endpoints.getProductsByCategory.matchFulfilled,
            (state, { payload }) => {
                state.productsByCurrentCategory = payload;
                state.sorterProductsByCurrentCategory = state.productsByCurrentCategory;
                state.paramSorter = ProductParameter.DEFAULT_SORTING;
            },
        );
    },
});

export const { changeProductSorter, changeTypeCardProduct, changeFilterRange } = productSlice.actions;

function getFilterRanges (min: number, max: number, step: number): FilterRange[] {
    const filterRanges: FilterRange[] = [];

    for (let i = min; i < max; i += step) {
        const range: FilterRange = {
            id: nanoid(),
            min: i,
            max: i + step,
            isChecked: false,
        };

        filterRanges.push(range);
    }

    return filterRanges;
}

function getSortedProducts (products: Product[], currentSort: ProductParameter): Product[] {
    const copyProducts = products.slice();
    return copyProducts.sort(sortByProductParams[currentSort]);
}

const sortByProductParams = {
    [ProductParameter.DEFAULT_SORTING]: (): number => 0,
    [ProductParameter.PRICE]: (firstProduct: Product, secondProduct: Product): number =>
        firstProduct.price - secondProduct.price,
    [ProductParameter.TITLE]: (firstProduct: Product, secondProduct: Product): number =>
        firstProduct.title.localeCompare(secondProduct.title),
    [ProductParameter.CATEGORY]: (firstProduct: Product, secondProduct: Product): number =>
        firstProduct.category.localeCompare(secondProduct.category),
};
