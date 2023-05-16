import { Navigate, Route, Routes } from 'react-router-dom';
import { ProductPage } from '../../page/ProductPage/ProductPage';
import { SingleProductPage } from '../../page/SingleProductPage/SingleProductPage';
import { Home } from '../../layouts/Home/Home';
import { OneCategoryProduct } from '../../layouts/OneCategoryProduct/OneCategoryProduct';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<ProductPage contentLayout={<Home />} />} />
            <Route path='category/:categoryTitle/' element={<ProductPage contentLayout={<OneCategoryProduct />} />} />
            <Route path='products/:productId/' element={<SingleProductPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};
