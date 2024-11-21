import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IFProduct } from '../types/IFProducts';
import IFCategories from '../types/IFCategories';
import { IFVoucher } from '../types/Voucher';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<{ data: IFProduct[] }, void>({
      query() {
        return '/products';
      },
    }),

    getProductById: builder.query<{ data: IFProduct }, string>({
      query: (id) => {
        return `/products/${id}`;
      },
    }),

    getAllProductsByType: builder.mutation<{ data: IFProduct[] }, string>({
      query: (query) => {
        return {
          url: '/products/search',
          method: 'POST',
          body: { query: query },
        };
      },
    }),

    getAllProductByCategories: builder.query<{ data: IFProduct[] }, string>({
      query: (id) => {
        return `categories/${id}/products`;
      },
    }),

    getAllCategories: builder.query<{ data: IFCategories[] }, void>({
      query: () => {
        return 'categories';
      },
    }),

    getAllVouchers: builder.query<
      { success: boolean; data: IFVoucher[]; message: string },
      void
    >({
      query: () => {
        return '/products/vouchers';
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetAllProductsByTypeMutation,
  useGetAllProductByCategoriesQuery,
  useGetAllCategoriesQuery,
  useGetAllVouchersQuery,
} = productApi;
