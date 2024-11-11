import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  ChangePassword,
  IFMap,
  IFMapCreate,
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

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API,
    prepareHeaders: (headers) => {
      const token: string | null | undefined = localStorage.getItem(
        'token_access',
      )
        ? JSON.parse(localStorage.getItem('token_access')!)
        : null;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
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

    changePassword: builder.mutation<ResultChange, ChangePassword>({
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

    addCheckout: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: '/checkout',
          method: 'POST',
          body: data,
        };
      },
    }),

    addMap: builder.mutation<IFMapCreateResult, IFMapCreate>({
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
      { data: IFMapCreate; id: number }
    >({
      query: (data) => {
        return {
          url: `auth/address/${data.id}`,
          method: 'PUT',
          body: data.data,
        };
      },
    }),

    updateProfile: builder.mutation<any, UserUpdate>({
      query: (data) => {
        return {
          url: `auth/update-profile`,
          method: 'PUT',
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
} = profileApi;
