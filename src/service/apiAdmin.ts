import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  IFAResultProduct,
  IFCreateProduct,
  IFProduct,
} from '../types/IFProducts';
import { IFFormData } from '../types/User';

export const adminApi = createApi({
  reducerPath: 'adminApi',
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
    // 1
    adminGetProduct: builder.query<IFAResultProduct, void>({
      query: () => {
        return '/admin/products';
      },
    }),

    adminGetCategory: builder.query<IFAResultProduct, void>({
      query: () => {
        return '/admin/products';
      },
    }),

    adminGetProductById: builder.query<{ data: IFProduct }, number>({
      query: (id) => {
        return `/admin/product/${id}`;
      },
    }),

    adminDeleteProductById: builder.mutation<
      {
        success: true;
        message: string;
      },
      number
    >({
      query: (id) => {
        return {
          url: `/admin/product/${id}/soft-delete`,
          method: 'DELETE',
        };
      },
    }),

    adminActiveProductById: builder.mutation<
      {
        success: true;
        message: string;
      },
      number
    >({
      query: (id) => {
        return {
          url: `/admin/product/${id}/restore`,
          method: 'PATCH',
        };
      },
    }),

    adminUpdateProductById: builder.mutation<
      { data: IFProduct },
      {
        id: string;
        data: IFFormData;
      }
    >({
      query: (data) => {
        const dataForm = data.data;

        const form = new FormData();

        Object.keys(dataForm).forEach((el) => {
          if (dataForm[el as keyof IFFormData]) {
            form.append(el, dataForm[el as keyof IFFormData]);
          }
        });

        return {
          url: `/admin/product/${data.id}/update`,
          method: 'POST',
          body: form,
        };
      },
    }),

    adminCreateProduct: builder.mutation<
      {
        success: true;
        message: string;
      },
      IFCreateProduct
    >({
      query: (data) => {
        const form = new FormData();

        Object.keys(data).forEach((el) => {
          form.append(el, data[el as keyof IFCreateProduct]);
        });

        return {
          url: `/admin/product/create`,
          method: 'POST',
          body: form,
        };
      },
    }),

    //2
    /*------------------------------------------------------------*/
  }),
});

export const {
  useAdminGetProductQuery,
  useAdminGetProductByIdQuery,
  useAdminUpdateProductByIdMutation,
  useAdminDeleteProductByIdMutation,
  useAdminActiveProductByIdMutation,
  useAdminCreateProductMutation
} = adminApi;
