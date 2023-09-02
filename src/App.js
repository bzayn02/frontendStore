import '../src/App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Hero from './pages/home/Hero';
import { ToastContainer } from 'react-toastify';
import { getAllCategoriesAction } from './pages/categories/categoryAction';
import CategoryPage from './pages/categories/CategoryPage';
import { getAllProductsAction } from './pages/products/productAction';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategoriesAction());
    dispatch(getAllProductsAction());
  }, [dispatch]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/:_id" element={<CategoryPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
