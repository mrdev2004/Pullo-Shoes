import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      console.log("hi", action.payload);
      state.Cart.push(action.payload);
    },
    deleteitem: (state, action) => {
      console.log("id", action.payload);
      state.Cart = state.Cart.filter((item) => item.id != action.payload);
    },
    incrementQuantity: (state, action) => {
      const item = state.Cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.Cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
  },
EmptyCart:(state,action)=>{
state.Cart=action.payload
}


},
  
});

export const { addCart, deleteitem,decrementQuantity,incrementQuantity,EmptyCart } = cartSlice.actions;
export default cartSlice.reducer;
