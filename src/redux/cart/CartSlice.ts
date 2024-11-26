import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFProduct } from '../../types/IFProducts';

export interface IFCartStore extends IFProduct {
  qtt: number;
}

interface IFCart {
  dataCart: IFCartStore[] | null;
  methodPay: number;
  handleCart: boolean;
  dataCart2: {
    id: number;
    name: string;
    price: number;
    sale: number;
    qtt: number;
    img: string;
    des: string;
    unit: string;
  }[];
  note: string;
}

const initialState: IFCart = {
  dataCart: localStorage.getItem('cart_store')
    ? (JSON.parse(localStorage.getItem('cart_store')!) as IFCartStore[])
    : null,
  methodPay: 0,
  handleCart: false,
  dataCart2: [],
  note: '',
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

    setMethodPay: (state, action: PayloadAction<number>) => {
      const method = action.payload;
      state.methodPay = method;
    },

    clearCart: (state, action: PayloadAction<void>) => {
      state.dataCart = null;
      state.methodPay = 0;
      localStorage.removeItem('cart_store');
    },

    setCart2: (
      state,
      action: PayloadAction<
        {
          id: number;
          name: string;
          price: number;
          sale: number;
          qtt: number;
          img: string;
          des: string;
          unit: string;
        }[]
      >,
    ) => {
      const cartNew = action.payload;
      state.dataCart2 = cartNew;
    },

    handleLoading: (state, action: PayloadAction<boolean>) => {
      const result = action.payload;
      state.handleCart = result;
    },

    setNote: (state, action: PayloadAction<string>) => {
      state.note = action.payload;
    },
  },
});

export const {
  add_cart,
  minus_cart,
  increment_cart,
  delete_cart,
  setMethodPay,
  clearCart,
  handleLoading,
  setCart2,
  setNote,
} = sliceCart.actions;
export default sliceCart.reducer;
