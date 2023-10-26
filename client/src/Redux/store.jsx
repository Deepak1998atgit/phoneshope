import { configureStore} from '@reduxjs/toolkit';
import productDetailReducer from './ProductDetailSlice.jsx';
import {updateLocalStorage} from './middleware.jsx'

const store = configureStore({
  reducer: {
    productDetail: productDetailReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(updateLocalStorage),
});

export default store;
