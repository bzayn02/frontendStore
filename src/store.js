import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import categoryReducer from './pages/categories/categorySlice';
import productReducer from './pages/products/productSlice';
import displayProductReducer from './pages/products/displayProductSlice';
import cartReducer from './pages/cart/cartSlice';
import userReducer from './pages/userAction/userSlice';

const cartPersistConfig = {
  key: 'displayCartInfo',
  storage,
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

const store = configureStore({
  reducer: {
    categoryInfo: categoryReducer,
    productInfo: productReducer,
    displayProductInfo: displayProductReducer,
    displayCartInfo: persistedCartReducer,
    userInfo: userReducer,
  },
});

const persistor = persistStore(store);
export { store, persistor };
