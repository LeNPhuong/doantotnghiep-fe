import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  IFAResultProduct,
  IFCreateProduct,
  IFProduct,
} from '../types/IFProducts';

import {
  IFDataUserChange,
  IFDataUserNew,
  IFDataUserUpdate,
  IFFormData,
  IFResultUserAdmin,
  IFUserAdmin,
} from '../types/User';

import {
  AdminOrder,
  DashBoardData,
  IFUpdateCategory,
  ParamsCategoryCreate,
  ResultAcceptOrder,
  ResultCategoryAdmin,
  ResultCategoryEdit,
  ResultCreateCategory,
  ResultDefault,
  ResultLisUnit,
  UnitData,
} from '../types/AdminType';

// import { getFreshToken, getProfile } from './apiService';

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API,
    prepareHeaders: async (headers) => {
      const getToken: string | null | undefined = localStorage.getItem(
        'token_access',
      )
        ? JSON.parse(localStorage.getItem('token_access')!)
        : null;

      if (!getToken) {
        localStorage.removeItem('profile');
        localStorage.removeItem('token_access');
      }

      headers.set('Authorization', `Bearer ${getToken}`);

      // const token = await getProfile(getToken!);

      // if (token) {
      //   headers.set('Authorization', `Bearer ${getToken}`);
      // } else {
      //   const tokenRefresh = await getFreshToken(getToken!);
      //   if (tokenRefresh) {
      //     localStorage.setItem('token_access', JSON.stringify(tokenRefresh));
      //     headers.set('Authorization', `Bearer ${tokenRefresh}`);
      //   } else {
      //     localStorage.removeItem('profile');
      //     localStorage.removeItem('token_access');
      //     alert('Có lỗi xảy ra vui lòng đăng nhập lại');
      //     location.reload();
      //   }
      // }

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
            form.append(el, dataForm[el as keyof IFFormData]!);
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
          form.append(el, String(data[el as keyof IFCreateProduct]));
        });

        form.append('img', data.img);

        return {
          url: `/admin/product/create`,
          method: 'POST',
          body: form,
        };
      },
    }),

    adminGetAllUser: builder.query<
      { success: boolean; data: IFResultUserAdmin; message: string },
      void
    >({
      query: () => {
        return '/admin/users';
      },
    }),

    adminGetAllOrder: builder.query<
      { success: boolean; data: AdminOrder[]; message: string },
      void
    >({
      query: () => {
        return '/admin/orders';
      },
    }),

    adminGetOrderById: builder.query<
      { success: boolean; data: AdminOrder; message: string },
      number
    >({
      query: (id) => {
        return `/admin/orders/${id}`;
      },
    }),

    adminAcceptOrder: builder.mutation<ResultAcceptOrder, number>({
      query: (id) => {
        return {
          url: `/admin/orders/confirm/${id}`,
          method: 'PUT',
        };
      },
    }),

    adminGetUserById: builder.query<
      { success: boolean; data: IFUserAdmin; message: string },
      number
    >({
      query: (id) => {
        return `/admin/user/${id}`;
      },
    }),

    adminUserUpdateById: builder.mutation<
      IFDataUserUpdate,
      { id: number; data: IFDataUserChange }
    >({
      query: (data) => {
        return {
          url: `/admin/user/${data.id}/update`,
          method: 'PUT',
          body: data.data,
        };
      },
    }),

    adminUserCreate: builder.mutation<{ message: string }, IFDataUserNew>({
      query: (data) => {
        return {
          url: `/admin/user/create`,
          method: 'POST',
          body: data,
        };
      },
    }),

    adminGetListCategory: builder.query<
      { message: string; success: boolean; data: ResultCategoryAdmin[] },
      void
    >({
      query: () => {
        return '/admin/categories';
      },
    }),

    adminCreateCategory: builder.mutation<
      ResultCreateCategory,
      ParamsCategoryCreate
    >({
      query: (data) => {
        return { url: '/admin/category/create', method: 'POST', body: data };
      },
    }),

    adminGetUnits: builder.query<ResultLisUnit, void>({
      query: () => '/admin/units',
    }),

    adminGetCategoryById: builder.query<ResultCategoryEdit, number>({
      query: (id) => `/admin/category/${id}`,
    }),

    adminDisableCategoryById: builder.mutation<ResultDefault, number>({
      query: (id) => {
        return {
          url: `/admin/category/${id}/soft-delete`,
          method: 'DELETE',
        };
      },
    }),

    adminActiveCategoryById: builder.mutation<ResultDefault, number>({
      query: (id) => {
        return {
          url: `/admin/category/${id}/restore`,
          method: 'PATCH',
        };
      },
    }),

    adminUpdateCategory: builder.mutation<
      ResultDefault,
      { id: number; data: IFUpdateCategory }
    >({
      query: (data) => {
        return {
          url: `/admin/category/${data.id}/update`,
          method: 'PUT',
          body: data.data,
        };
      },
    }),

    adminCancelOrder: builder.mutation<any, number>({
      query: (id) => {
        return {
          url: `/admin/orders/cancel/${id}`,
          method: 'PUT',
        };
      },
    }),

    adminDisableUnit: builder.mutation<{ message: string }, number>({
      query: (id) => {
        return {
          url: `/admin/units/delete/${id}`,
          method: 'DELETE',
        };
      },
    }),

    adminActiveUnit: builder.mutation<{ message: string }, number>({
      query: (id) => {
        return {
          url: `/admin/units/restore/${id}`,
          method: 'PATCH',
        };
      },
    }),

    adminCreateUnit: builder.mutation<{ message: string }, string>({
      query: (name) => {
        return {
          url: '/admin/units/create',
          method: 'POST',
          body: { name: name },
        };
      },
    }),

    adminGetUnitById: builder.query<{ data: UnitData }, number>({
      query: (id) => {
        return `/admin/units/edit/${id}`;
      },
    }),

    adminUpdateUnit: builder.mutation<
      { message: string },
      { id: number; data: { name: string; active: boolean } }
    >({
      query: (data) => {
        return {
          url: `/admin/units/update/${data.id}`,
          method: 'PUT',
          body: data.data,
        };
      },
    }),

    adminGetDashBoard: builder.query<DashBoardData, void>({
      query: () => {
        return '/admin/dashboard';
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
  useAdminCreateProductMutation,
  useAdminGetAllOrderQuery,
  useAdminGetOrderByIdQuery,
  useAdminAcceptOrderMutation,
  useAdminGetAllUserQuery,
  useAdminGetUserByIdQuery,
  useAdminUserUpdateByIdMutation,
  useAdminUserCreateMutation,
  useAdminGetListCategoryQuery,
  useAdminCreateCategoryMutation,
  useAdminGetCategoryByIdQuery,
  useAdminActiveCategoryByIdMutation,
  useAdminDisableCategoryByIdMutation,
  useAdminGetUnitsQuery,
  useAdminUpdateCategoryMutation,
  useAdminCancelOrderMutation,
  useAdminActiveUnitMutation,
  useAdminDisableUnitMutation,
  useAdminCreateUnitMutation,
  useAdminGetUnitByIdQuery,
  useAdminUpdateUnitMutation,
  useAdminGetDashBoardQuery,
} = adminApi;
