import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFProduct } from '../../types/IFProducts';

export interface IFCartStore extends IFProduct {
  qtt: number;
}

interface IFCart {
  dataCart: IFCartStore[] | null;
}

const initialState: IFCart = {
  dataCart: localStorage.getItem('cart_store')
    ? (JSON.parse(localStorage.getItem('cart_store')!) as IFCartStore[])
    : null,
};

const sliceCart = createSlice({
  name: 'cart_slice',
  initialState,
  reducers: {
    add_cart: (state, action: PayloadAction<IFProduct>) => {
      const data = action.payload;
      if (state.dataCart === null) {
        state.dataCart = [];
        state.dataCart.push({ ...data, qtt: 1 });
      } else {
        const checkItem = state.dataCart.find(
          (e) => Number(e.id) === Number(data.id),
        );
        if (!checkItem) {
          state.dataCart.push({ ...data, qtt: 1 });
        } else {
          checkItem.qtt += 1;
        }
      }
      localStorage.setItem('cart_store', JSON.stringify(state.dataCart));
    },
    minus_cart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const checkItem = state.dataCart?.find(
        (e) => Number(e.id) === Number(id),
      );
      if (!checkItem) {
        return;
      } else {
        if (checkItem.qtt > 1) {
          checkItem.qtt -= 1;
        }
        localStorage.setItem('cart_store', JSON.stringify(state.dataCart));
      }
    },
    increment_cart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const checkItem = state.dataCart?.find(
        (e) => Number(e.id) === Number(id),
      );
      if (!checkItem) {
        return;
      } else {
        checkItem.qtt += 1;
        localStorage.setItem('cart_store', JSON.stringify(state.dataCart));
      }
    },
    delete_cart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (!id) {
        return;
      }
      state.dataCart =
        state.dataCart && state.dataCart?.filter((e) => e.id !== id);
      if (state.dataCart?.length === 0) {
        state.dataCart = null;
        localStorage.removeItem('cart_store');
        return;
      }
      localStorage.setItem('cart_store', JSON.stringify(state.dataCart));
    },
  },
});

export const { add_cart, minus_cart, increment_cart, delete_cart } =
  sliceCart.actions;
export default sliceCart.reducer;
