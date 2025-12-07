
import { configureStore } from "@reduxjs/toolkit";
// TODO: Import productReducer from productSlice
import productReducer from "./slices/ProductSlice";
// TODO: Import cartReducer from cartSlice
import cartReducer from "./slices/CartSlice";
// TODO: Import authReducer from authSlice
 import authReducer from "./slices/AuthSlice";

 import productDetailReducer from "./slices/ProductDetailSlice";

 import wishlistReducer from "./slices/WishlistSlice";



const store = configureStore({
  reducer: {
    // TODO: Add productReducer to the store
    Store_products: productReducer,
    // TODO: Add cartReducer to the store
    cart: cartReducer,
    // TODO: Add authReducer to the store
     auth: authReducer,

    productDetails: productDetailReducer,  // <<< THIS name is important

      wishlist: wishlistReducer,


  },
});


 export default store;
