import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IFProduct } from '../types/IFProducts';
import IFCategories from '../types/IFCategories';

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
    getAllProductsByType: builder.query<{ data: IFProduct[] }, string>({
      query: (type) => {
        return `/products/search?query=${type}`;
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
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetAllProductsByTypeQuery,
  useGetAllProductByCategoriesQuery,
  useGetAllCategoriesQuery,
} = productApi;
