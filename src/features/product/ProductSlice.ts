import { createSlice, type Draft, nanoid, type PayloadAction } from '@reduxjs/toolkit';
import { SortProductParameter } from '../../enums/product-sort-parameter';
import { type Product } from '../../types/product';
import { apiSlice } from '../../api/apiSlice';
import { type Category } from '../../types/category';
import { TypeCard } from '../../enums/type-card';
import { type FilterRange } from '../../types/filter-range';
import { getFilterAndSorter } from '../../service/product-service';

const filterMin = 0;
const filterMax = 120;
const filterStep = 20;

type InitialType = {
    products: Product[]
    productsByCurrentCategory: Product[]
    handledProducts: Product[]
    categories: Category[]
    paramSorter: SortProductParameter
    typeCardProduct: TypeCard
    filterRanges: FilterRange[]
};

const initialState: InitialType = {
    products: [],
    productsByCurrentCategory: [],
    handledProducts: [],
    categories: [],
    paramSorter: SortProductParameter.DEFAULT_SORTING,
    typeCardProduct: TypeCard.CELL,
    filterRanges: initFilterRanges(filterMin, filterMax, filterStep),
};

export const productSlice = createSlice({
    name: 'shopPageSlice',
    initialState,
    reducers: {
        changeTypeCardProduct: (state: Draft<InitialType>, { payload }: PayloadAction<TypeCard>) => {
            state.typeCardProduct = payload;
        },
        changeProductSorter: (state: Draft<InitialType>, { payload }: PayloadAction<SortProductParameter>) => {
            state.paramSorter = payload;
            state.handledProducts = getFilterAndSorter(state.productsByCurrentCategory, state.paramSorter, state.filterRanges);
        },
        changeFilterRange: (state: Draft<InitialType>, { payload }: PayloadAction<FilterRange>) => {
            const find = state.filterRanges.find((filterRange) => filterRange.id === payload.id);

            if (find == null) return;

            find.isChecked = payload.isChecked;
            state.handledProducts = getFilterAndSorter(state.productsByCurrentCategory, state.paramSorter, state.filterRanges);
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            apiSlice.endpoints.getProducts.matchFulfilled,
            (state, { payload }) => {
                state.products = payload;
                state.productsByCurrentCategory = state.products;
                state.handledProducts = state.productsByCurrentCategory;
                state.paramSorter = SortProductParameter.DEFAULT_SORTING;
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
                state.paramSorter = SortProductParameter.DEFAULT_SORTING;
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
            isChecked: false,
        };

        filterRanges.push(range);
    }

    return filterRanges;
}
