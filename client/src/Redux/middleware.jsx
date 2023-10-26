import {setProductDetail} from './ProductDetailSlice'

export const updateLocalStorage = (store) => (next) => (action) => {
  if (action.type === setProductDetail.type) {
    localStorage.setItem('productDetail', JSON.stringify(action.payload));
  }
  return next(action);   
};
