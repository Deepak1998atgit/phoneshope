import { createSlice } from '@reduxjs/toolkit';


const loadProductDetailFromLocalStorage = () => {
  const storedData = localStorage.getItem('productDetail');
  if (storedData) {
     console.log(JSON.parse(storedData),"jjjjjj");
    return JSON.parse(storedData);
   
  }
  return {
    "SrNo":null,
    "ProductName":null,
    "Image":null,
    "Amount":null
   }                                       
};


const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState: loadProductDetailFromLocalStorage(),                                    // Initial state is null as no product is selected initially
  reducers: {
    setProductDetail: (state, action) => action.payload,
  },
});

export const { setProductDetail, clearProductDetail } = productDetailSlice.actions;
export default productDetailSlice.reducer;
