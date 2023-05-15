import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../../page/home/Home';
import { CategoryPage } from '../../page/category-page/CategoryPage';

export const AppRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='category/:categoryTitle/' element={<CategoryPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  );
};