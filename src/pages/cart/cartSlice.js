import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setAddToCart: (state, { payload }) => {
      if (payload._id === undefined) {
        return;
      }

      const itemExist = state.cart?.filter(
        (item) => item?._id === payload?._id
      );

      if (itemExist) {
        const filteredData = state.cart?.filter(
          (item) => item._id !== payload._id
        );
        console.log(filteredData, 'from filtered');
        state.cart = [...filteredData, payload];

        return;
      }
      state.cart = [...state.cart, payload];
    },

    setUpdateQuantity: (state, { payload }) => {
      console.log(payload, 'from payload');
      const updatedCart = state.cart?.map((item) =>
        item._id === payload._id
          ? { ...item, orderQty: payload.orderQty }
          : item
      );
      state.cart = updatedCart;
    },

    setRemoveItem: (state, { payload }) => {
      console.log(payload);
      state.cart = state.cart?.filter((item) => item._id !== payload._id);
    },
  },
});

const { reducer, actions } = cartSlice;
export const { setAddToCart, setUpdateQuantity, setRemoveItem } = actions;
export default reducer;
