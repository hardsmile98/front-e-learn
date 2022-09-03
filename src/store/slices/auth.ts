/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
  },
  reducers: {
    changeIsAuth: (state, action) => { state.isAuth = action.payload; },
  },
});

export default authSlice.reducer;

export const {
  changeIsAuth,
} = authSlice.actions;
