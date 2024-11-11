import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  DataSendPassword,
  IFLogin,
  IFRegister,
  IFRegisterSuccess,
  IFToken,
  ResultChangePassword,
} from '../types/User';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API,
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<IFToken, IFLogin>({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
    }),
    registerUser: builder.mutation<IFRegisterSuccess, IFRegister>({
      query: (data) => ({
        url: '/auth/register',
        method: 'POST',
        body: data,
      }),
    }),

    /*--------------------------------------------------------------*/
    GetOtp: builder.mutation<ResultChangePassword, { email: string }>({
      query: (data) => ({
        url: '/forgot-password/send-otp',
        method: 'POST',
        body: { email: data.email },
      }),
    }),

    AuthenOtp: builder.mutation<
      ResultChangePassword,
      { email: string; otp: string }
    >({
      query: (data) => ({
        url: '/forgot-password/verify-otp',
        method: 'POST',
        body: data,
      }),
    }),

    ForgotChange: builder.mutation<ResultChangePassword, DataSendPassword>({
      query: (data) => ({
        url: '/forgot-password/reset-password',
        method: 'POST',
        body: data,
      }),
    }),
    /*--------------------------------------------------------------*/
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useGetOtpMutation,
  useAuthenOtpMutation,
  useForgotChangeMutation,
} = userApi;
