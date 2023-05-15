import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductParameter } from '../../enums/product-sort-parameter';
import { Product } from '../../types/product';
import { apiSlice } from '../../api/apiSlice';
import { Category } from '../../types/category';
import { TypeCard } from '../../enums/type-card';

type initialType = {
    products: Product[],
    productsByCurrentCategory: Product[],
    sorterProductsByCurrentCategory: Product[],
    categories: Category[],
    paramSorter: ProductParameter,
    typeCardProduct: TypeCard,
};

const initialState: initialType = {
    products: [],
    productsByCurrentCategory: [],
    sorterProductsByCurrentCategory: [],
    categories: [],
    paramSorter: ProductParameter.DEFAULT_SORTING,
    typeCardProduct: TypeCard.CELL,
}

export const productSlice = createSlice({
    name: 'shopPageSlice',
    initialState,
    reducers: {
        changeTypeCardProduct: (state, {payload}: PayloadAction<TypeCard>) => {
            state.typeCardProduct = payload;
        },
        changeProductSorter: (state, { payload }: PayloadAction<ProductParameter>) => {
            state.paramSorter = payload;

            if (state.paramSorter === ProductParameter.DEFAULT_SORTING) {
                state.sorterProductsByCurrentCategory = state.productsByCurrentCategory;
            } else {
                state.sorterProductsByCurrentCategory = getSortedProducts(state.productsByCurrentCategory, state.paramSorter);
            }
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            apiSlice.endpoints.getProducts.matchFulfilled,
            (state, {payload}) => {
                state.products = payload;
                state.productsByCurrentCategory = state.products;
                state.sorterProductsByCurrentCategory = state.productsByCurrentCategory;
            }
        );
        builder.addMatcher(
            apiSlice.endpoints.getCategories.matchFulfilled,
            (state, {payload}) => {
                state.categories = payload;
            }
        );
        builder.addMatcher(
            apiSlice.endpoints.getProductsByCategory.matchFulfilled,
            (state, {payload}) => {
                state.productsByCurrentCategory = payload;
                state.sorterProductsByCurrentCategory = state.productsByCurrentCategory;
            }
        );
    },
});

export const { changeProductSorter, changeTypeCardProduct } = productSlice.actions;

function getSortedProducts(products: Product[], currentSort: ProductParameter): Product[] {
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
}