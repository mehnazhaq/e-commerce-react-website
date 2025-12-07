import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cartItems: [],
    totalPrice: 0,
  },

  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const exist = state.cartItems.find((p) => p.id === item.id);

      if (!exist) {
        state.cartItems.push({ ...item, quantity: 1 });
      }
      state.totalPrice = state.cartItems.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.totalPrice = state.cartItems.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((p) => p.id === action.payload);
      if (item) item.quantity += 1;
      state.totalPrice = state.cartItems.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((p) => p.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
      state.totalPrice = state.cartItems.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );
    },
  },
});



// add below at bottom of CartSlice.js
export const saveCartToLocalStorage = (state) => {
  localStorage.setItem("cart", JSON.stringify(state.cartItems));
};

export const loadCartFromLocalStorage = () => {
  const saved = localStorage.getItem("cart");
  return saved ? JSON.parse(saved) : [];
};


export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
