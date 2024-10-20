import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const item = state.items.find((item) => item.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      }
      else {
        state.items.push({ ...action.payload, quantity: 1,cost : parseInt(action.payload.cost.replace('$','')) });
      }
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex((item) => item.name === action.payload.name);
      state.items.splice(index, 1);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
