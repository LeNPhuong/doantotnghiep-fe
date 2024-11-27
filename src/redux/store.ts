import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import cartSlice from './cart/CartSlice';
import userSlice from './user/UserSlice';
import { productApi } from '../service/product';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi } from '../service/user';
import { profileApi } from '../service/profile';
import { adminApi } from '../service/apiAdmin';

const rootReducer = combineReducers({
  cart: cartSlice,
  user: userSlice,
  [productApi.reducerPath]: productApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [profileApi.reducerPath]: profileApi.reducer,
  [adminApi.reducerPath]: adminApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      productApi.middleware,
      userApi.middleware,
      profileApi.middleware,
      adminApi.middleware,
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
