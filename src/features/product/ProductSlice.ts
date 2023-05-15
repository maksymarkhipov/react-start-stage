import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductParameter } from '../../enums/product-sort-parameter';
import { Product } from '../../types/product';
import { apiSlice } from '../../api/apiSlice';
import { CategoryWithCount, Category } from '../../types/category';
import { RootState } from '../store';
import { TypeCard } from '../../enums/type-card';

type initialType = {
    paramSorter: ProductParameter,
    products: Product[],
    productsByCurrentCategory: Product[],
    categories: Category[],
    typeCardProduct: TypeCard,
};

const initialState: initialType = {
    paramSorter: ProductParameter.DEFAULT_SORTING,
    products: [],
    productsByCurrentCategory: [],
    categories: [],
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
            state.productsByCurrentCategory = state.productsByCurrentCategory.sort(sortByProductParams[state.paramSorter]);
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            apiSlice.endpoints.getProducts.matchFulfilled,
            (state, {payload}) => {
                state.products = payload;
                state.productsByCurrentCategory = state.products;
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
            }
        );
    },
});

export const { changeProductSorter, changeTypeCardProduct } = productSlice.actions;

export const getCountProduct = (state: RootState): number => state.shopPage.products.length;
export const getTypeCard = (state: RootState): TypeCard => state.shopPage.typeCardProduct;
export const getCategories = (state: RootState): CategoryWithCount[] => {
    const categoriesWithCount: CategoryWithCount[] = [];
    const products = state.shopPage.products;
    const categories = state.shopPage.categories;

    categories.forEach((category: Category) => {
        const countProducts = products.filter((product: Product) => product.category == category).length;

        categoriesWithCount.push({
            title: category,
            countProducts,
        });
    });

    return categoriesWithCount;
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