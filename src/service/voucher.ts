import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IFVoucher } from '../types/Voucher';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API,
  }),
  endpoints: (builder) => ({
    getVoucher:builder.query<IFVoucher,void>({})
  }),
});
