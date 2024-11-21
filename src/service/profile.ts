import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  ChangePassword,
  IFMap,
  IFMapCreateResult,
  IFMapDataResult,
  IFProfile,
  IFToken,
  PaymentData,
  ResultChange,
  ResultPaymentCheckOut,
  UserUpdate,
} from '../types/User';

import { CheckOutData, DataMainOrder, OrderByCode } from '../types/IFProducts';
import { ResultDefault } from '../types/AdminType';
import { getFreshToken, getProfile } from './apiService';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API,
    prepareHeaders: async (headers) => {
      const getToken: string | null | undefined = localStorage.getItem(
        'token_access',
      )
        ? JSON.parse(localStorage.getItem('token_access')!)
        : null;

      const token = await getProfile(getToken!);

      if (token) {
        headers.set('Authorization', `Bearer ${getToken}`);
      } else {
        const tokenRefresh = await getFreshToken(getToken!);
        if (tokenRefresh) {
          localStorage.setItem('token_access', JSON.stringify(tokenRefresh));
          headers.set('Authorization', `Bearer ${tokenRefresh}`);
        } else {
          localStorage.removeItem('profile');
          localStorage.removeItem('token_access');
          alert('Có lỗi xảy ra vui lòng đăng nhập lại');
          location.reload();
        }
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProfile: builder.mutation<IFProfile, void>({
      query() {
        return { url: '/auth/profile', method: 'GET' };
      },
    }),

    getProfileV2: builder.query<IFProfile, void>({
      query() {
        return '/auth/profile';
      },
    }),

    refreshToken: builder.mutation<IFToken, void>({
      query: () => {
        return '/auth/refresh';
      },
    }),

    changePassword: builder.mutation<{ data: string }, ChangePassword>({
      query: (data) => {
        return { url: '/auth/change-password', method: 'POST', body: data };
      },
    }),

    addVoucher: builder.mutation<ResultChange, { voucher_id: number }>({
      query: (data) => {
        return {
          url: '/products/vouchers/store-user',
          method: 'POST',
          body: data,
        };
      },
    }),

    addCheckout: builder.mutation<ResultDefault, any>({
      query: (data) => {
        return {
          url: '/checkout',
          method: 'POST',
          body: data,
        };
      },
    }),

    addMap: builder.mutation<
      IFMapCreateResult,
      { address: string; active: boolean }
    >({
      query: (data) => {
        return {
          url: 'auth/address/create',
          method: 'POST',
          body: data,
        };
      },
    }),

    GetAllMap: builder.query<IFMapDataResult, void>({
      query: () => {
        return 'auth/address/all';
      },
    }),

    updateAddress: builder.mutation<
      { success: boolean; data: IFMap; message: string },
      { data: { address: string; active: boolean }; id: number }
    >({
      query: (data) => {
        return {
          url: `auth/address/${data.id}`,
          method: 'PUT',
          body: data.data,
        };
      },
    }),

    updateProfile: builder.mutation<IFProfile, UserUpdate>({
      query: (data) => {
        return {
          url: `auth/update-profile`,
          method: 'POST',
          body: data,
        };
      },
    }),

    checkOutCart: builder.mutation<ResultPaymentCheckOut, CheckOutData>({
      query: (data) => {
        return {
          url: `/checkout`,
          method: 'POST',
          body: data,
        };
      },
    }),

    PaymentCart: builder.mutation<ResultPaymentCheckOut, PaymentData>({
      query: (data) => {
        return {
          url: `/payment`,
          method: 'POST',
          body: data,
        };
      },
    }),

    GetOrder: builder.query<DataMainOrder, void>({
      query: () => {
        return '/auth/get-orders';
      },
    }),

    GetOrderById: builder.mutation<OrderByCode, { code: string }>({
      query: (code) => {
        return {
          url: 'orders/code',
          method: 'POST',
          body: code,
        };
      },
    }),

    CancleOrderById: builder.mutation<OrderByCode, { id: number }>({
      query: (id) => {
        return {
          url: `orders/${id.id}/cancel`,
          method: 'DELETE',
          body: { cancellation_reason: 'DELETEDELETE' },
        };
      },
    }),

    addCommentProduct: builder.mutation<
      any,
      { id: number; data: { comment: string; rating: number } }
    >({
      query: (data) => {
        return {
          url: `products/${data.id}/comment`,
          method: 'POST',
          body: data.data,
        };
      },
    }),

    /*------------------------------------------------------------*/
  }),
});

export const {
  useGetProfileMutation,
  useGetProfileV2Query,
  useRefreshTokenMutation,
  useChangePasswordMutation,
  useAddVoucherMutation,
  useAddCheckoutMutation,
  useAddMapMutation,
  useGetAllMapQuery,
  useUpdateAddressMutation,
  useUpdateProfileMutation,
  useCheckOutCartMutation,
  usePaymentCartMutation,
  useGetOrderQuery,
  useGetOrderByIdMutation,
  useCancleOrderByIdMutation,
  useAddCommentProductMutation,
} = profileApi;
