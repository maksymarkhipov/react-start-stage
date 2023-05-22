import { createSlice, type Draft, nanoid, type PayloadAction } from '@reduxjs/toolkit';
import { SortOption } from '../../product/enums/sort-option';
import { type Product } from '../../core/types/product';
import { apiSlice } from '../api/api-slice';
import { type Category } from '../../core/types/category';
import { TypeProductView } from '../../product/enums/type-product-view';
import { type FilterRange } from '../../product/types/filter-range';
import { getFilterAndSorter } from '../../core/service/product-filter-sorting-service';

const filterMin = 0;
const filterMax = 120;
const filterStep = 20;

type InitialType = {
    products: Product[]
    productsByCurrentCategory: Product[]
    handledProducts: Product[]
    categories: Category[]
    sortingParam: SortOption
    typeProductCard: TypeProductView
    filterRanges: FilterRange[]
};

const initialState: InitialType = {
    products: [],
    productsByCurrentCategory: [],
    handledProducts: [],
    categories: [],
    sortingParam: SortOption.DEFAULT_SORTING,
    typeProductCard: TypeProductView.CELL,
    filterRanges: initFilterRanges(filterMin, filterMax, filterStep),
};

export const productSlice = createSlice({
    name: 'shopPageSlice',
    initialState,
    reducers: {
        changeTypeCardProduct: (state: Draft<InitialType>, { payload }: PayloadAction<TypeProductView>) => {
            state.typeProductCard = payload;
        },
        changeProductSorter: (state: Draft<InitialType>, { payload }: PayloadAction<SortOption>) => {
            state.sortingParam = payload;
            state.handledProducts = getFilterAndSorter(state.productsByCurrentCategory, state.sortingParam, state.filterRanges);
        },
        changeFilterRange: (state: Draft<InitialType>, { payload }: PayloadAction<FilterRange>) => {
            const find = state.filterRanges.find((filterRange) => filterRange.id === payload.id);

            if (find == null) return;

            find.isActivate = payload.isActivate;
            state.handledProducts = getFilterAndSorter(state.productsByCurrentCategory, state.sortingParam, state.filterRanges);
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            apiSlice.endpoints.getProducts.matchFulfilled,
            (state, { payload }) => {
                state.products = payload;
                state.productsByCurrentCategory = state.products;
                state.handledProducts = state.productsByCurrentCategory;
                state.sortingParam = SortOption.DEFAULT_SORTING;
                state.filterRanges = initFilterRanges(filterMin, filterMax, filterStep);
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
                state.handledProducts = state.productsByCurrentCategory;
                state.sortingParam = SortOption.DEFAULT_SORTING;
                state.filterRanges = initFilterRanges(filterMin, filterMax, filterStep);
            },
        );
    },
});

export const { changeProductSorter, changeTypeCardProduct, changeFilterRange } = productSlice.actions;

function initFilterRanges (min: number, max: number, step: number): FilterRange[] {
    const filterRanges: FilterRange[] = [];

    for (let i = min; i < max; i += step) {
        const range: FilterRange = {
            id: nanoid(),
            min: i,
            max: i + step,
            isActivate: false,
        };

        filterRanges.push(range);
    }

    return filterRanges;
}
