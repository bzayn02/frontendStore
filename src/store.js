import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from './pages/categories/categorySlice';
import productReducer from './pages/products/productSlice';
import displayProductReducer from './pages/products/displayProductSlice';

export default configureStore({
  reducer: {
    categoryInfo: categoryReducer,
    productInfo: productReducer,
    displayProductInfo: displayProductReducer,
  },
});
