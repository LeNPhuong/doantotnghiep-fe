import { createSlice } from '@reduxjs/toolkit';

interface IFUser {}

const initialState: IFUser = {};

const sliceUser = createSlice({
  name: 'cart_slice',
  initialState,
  reducers: {},
});

export const {} = sliceUser.actions;
export default sliceUser.reducer;
