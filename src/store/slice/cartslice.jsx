// src/slice/cart.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

// export const clearCart = () => ({
//   type: 'CLEAR_CART',
// });


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.cartItems.find((cartItem) => cartItem._id === item._id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    updateQuantity(state, action) {
      const { itemId, quantity } = action.payload;
      const item = state.cartItems.find((cartItem) => cartItem._id === itemId);
      if (item) {
        item.quantity = quantity;
      }
    },
    removeFromCart(state, action) {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item._id !== itemId);
    },
    clearCart(state){
      state.cartItems = [];
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart,clearCart } = cartSlice.actions;

export default cartSlice.reducer;
