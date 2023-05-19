import { Navigate, Route, Routes } from 'react-router-dom';
import { ProductPage } from '../../page/product-page/product-page';
import { SingleProductPage } from '../../page/single-product-page/single-product-page';
import { Home } from '../../layouts/home/home';
import { OneCategoryProduct } from '../../layouts/one-category-product/one-category-product';
import { PrivacyPolicyPage } from '../../page/privacy-policy-page/privacy-policy-page';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<ProductPage contentLayout={<Home />} />} />
            <Route path='category/:categoryTitle/' element={<ProductPage contentLayout={<OneCategoryProduct />} />} />
            <Route path='products/:productId/' element={<SingleProductPage />} />
            <Route path='privacy-policy' element={<PrivacyPolicyPage /> } />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};
