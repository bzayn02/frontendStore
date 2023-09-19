import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      if (state.user === undefined && payload === undefined) {
        return;
      }
      state.user = payload;
    },
  },
});

const { reducer, actions } = userSlice;
export default reducer;
export const { setUser } = actions;
