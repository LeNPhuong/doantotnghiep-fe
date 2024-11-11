import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFProfile } from '../../types/User';
import { IFVoucher } from '../../types/Voucher';

interface IFUser {
  profile: IFProfile | null | undefined;
  token: string | null | undefined;
  voucher: IFVoucher | null;
}

const initialState: IFUser = {
  profile: localStorage.getItem('profile')
    ? (JSON.parse(localStorage.getItem('profile')!) as IFProfile)
    : null,
  token: localStorage.getItem('token_access')
    ? (JSON.parse(localStorage.getItem('token_access')!) as string)
    : null,

  voucher: localStorage.getItem('voucher')
    ? (JSON.parse(localStorage.getItem('voucher')!) as IFVoucher)
    : null,
};

const sliceUser = createSlice({
  name: 'cart_slice',
  initialState,
  reducers: {
    setProfile: (
      state,
      action: PayloadAction<IFProfile | null | undefined>,
    ) => {
      const data = action.payload;
      if (data === null || data === undefined) {
        state.profile = null;
      } else {
        state.profile = data;
      }
      localStorage.setItem('profile', JSON.stringify(data));
    },
    clearProfile: (state) => {
      state.profile = null;
      localStorage.removeItem('profile');
      localStorage.removeItem('token_access');
    },
    setToken: (state, action: PayloadAction<string>) => {
      const token = action.payload;
      if (token) {
        state.token = token;
        localStorage.setItem('token_access', JSON.stringify(token));
        return;
      } else {
        return;
      }
    },
    setVoucherData: (state, action: PayloadAction<IFVoucher | null>) => {
      state.voucher = action.payload;
      localStorage.setItem('voucher', JSON.stringify(action.payload));
    },
    ClearVoucher: (state, action: PayloadAction<void>) => {
      state.voucher = null;
    },
  },
});

export const {
  setProfile,
  clearProfile,
  setToken,
  setVoucherData,
  ClearVoucher,
} = sliceUser.actions;
export default sliceUser.reducer;
