import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../../page/home/Home';
import { CategoryPage } from '../../page/category-page/CategoryPage';
import { SingleProductPage } from '../../page/single-product-page/SingleProductPage';

export const AppRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='category/:categoryTitle/' element={<CategoryPage />} />
          <Route path='/product/:productId' element={<SingleProductPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  );
};