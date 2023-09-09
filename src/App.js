import '../src/App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Hero from './pages/home/Hero';
import { ToastContainer } from 'react-toastify';
import { getAllCategoriesAction } from './pages/categories/categoryAction';
import CategoryPage from './pages/categories/CategoryPage';
import { getAllProductsAction } from './pages/products/productAction';
import { setDisplayProducts } from './pages/products/displayProductSlice';
import ProductLanding from './pages/products/ProductLanding';
import CartPage from './pages/cart/CartPage';

const App = () => {
  const { products } = useSelector((state) => state.productInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategoriesAction());
    dispatch(getAllProductsAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setDisplayProducts(products));
  }, [dispatch, products]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="categories/:slug/:_id" element={<CategoryPage />} />
        <Route path="product/:slug/:_id" element={<ProductLanding />} />
        <Route path="cart" element={<CartPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
