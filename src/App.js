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
import SignUp from './pages/signup/SignUp';
import SignIn from './pages/signin/SignIn';
import UserVerification from './pages/userAction/UserVerification';
import {
  autoLoginAction,
  getUserProfileAction,
} from './pages/userAction/userAction';
import Profile from './pages/profile/Profile';
import PrivateRoute from './components/private/PrivateRoute';

const App = () => {
  const { products } = useSelector((state) => state.productInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategoriesAction());
    dispatch(getAllProductsAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(autoLoginAction());
    dispatch(getUserProfileAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setDisplayProducts(products));
  }, [dispatch, products]);

  return (
    <div className="app">
      <Routes>
        <Route path="user-verification" element={<UserVerification />} />
        <Route path="/" element={<Hero />} />
        <Route path="categories/:slug/:_id" element={<CategoryPage />} />
        <Route path="product/:slug" element={<ProductLanding />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />

        {/* Private Route */}
        <Route
          path="profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>

      <ToastContainer position="top-center" theme="dark" />
    </div>
  );
};

export default App;
