import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [], // MUST EXIST
};

const ProductDetailSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.productList = action.payload;
    },
  /*   addSingleProduct: (state, action) => {
      state.productList.push(action.payload);
    }, */

    addSingleProduct: (state, action) => {
  const exists = state.productList.find((p) => p.id === action.payload.id);
  if (!exists) {
    state.productList.push(action.payload);
  }
},

  },
});

export const { setProducts, addSingleProduct } = ProductDetailSlice.actions;
export default ProductDetailSlice.reducer;
