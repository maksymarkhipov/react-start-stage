import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../../page/home/Home';

export const AppRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  );
};