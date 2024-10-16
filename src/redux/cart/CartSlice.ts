import { createSlice } from '@reduxjs/toolkit';

interface IFCart {}

const initialState: IFCart = {};

const sliceCart = createSlice({
  name: 'cart_slice',
  initialState,
  reducers: {},
});

export const {} = sliceCart.actions;
export default sliceCart.reducer;
