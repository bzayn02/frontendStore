import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  displayProducts: [],
};

const displayProductSlice = createSlice({
  name: 'displayProduct',
  initialState,
  reducers: {
    setDisplayProducts: (state, { payload }) => {
      if (state.displayProducts.length === 0 && payload.length === 0) {
        return;
      }
      state.displayProducts = payload;
    },
  },
});

const { reducer, actions } = displayProductSlice;
export const { setDisplayProducts } = actions;
export default reducer;
