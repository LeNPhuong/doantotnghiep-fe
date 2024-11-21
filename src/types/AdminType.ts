import { IFProduct } from './IFProducts';

export interface IFProductOrder {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
  unit: string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  product: IFProduct;
}

export interface IFUserOrder {
  id: number;
  name: string;
  phone: string;
  avatar: null;
  active: boolean;
  email: string;
  email_verified_at: null;
  role: string;
  birthday: null;
  created_at: string;
  updated_at: string;
  deleted_at: null;
}

export interface IFStatusOrder {
  id: number;
  text_status: string;
  active: number;
  deleted_at: null;
}

export interface IFVoucherOrder {
  id: number;
  code: string;
  active: number;
  discount_type: string;
  discount_value: string;
  max_discount_value: string;
  description: string;
  quantity: number;
  start_date: string;
  end_date: string;
  created_at: string;
  updated_at: string;
}

export interface IFTransactionOrder {
  id: number;
  user_id: number;
  order_id: number;
  total_price: number;
  note: string;
  name: string;
  phone: string;
  address: string;
  email: string;
  payment_method: string;
  created_at: string;
  updated_at: string;
}

export interface AdminOrder {
  id: number;
  code: string;
  user_id: number;
  status_id: number;
  voucher_id: number;
  total_price: number;
  cancellation_reason: string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  user: IFUserOrder;
  status: IFStatusOrder;
  voucher: IFVoucherOrder;
  order_details: IFProductOrder[];
  transaction: IFTransactionOrder[];
}

export interface ResultAcceptOrder {
  success: boolean;
  data: {
    id: number;
    text_status: string;
    active: boolean;
    deleted_at: null;
  };
  message: string;
}

export interface ResultDefault {
  success: boolean;
  message: string;
}

export interface IFResultCategoryCreate {
  id: number;
  name: string;
  key: string;
  active: number;
  created_at: string;
  updated_at: string;
}

export interface ResultCategoryAdmin {
  id: number;
  name: string;
  key: string;
  deleted_at: null;
}

export interface UnitData {
  id: number;
  name: string;
  active: number;
  deleted_at: null;
}

export interface ResultLisUnit extends ResultDefault {
  data: UnitData[];
}

export interface ParamsCategoryCreate {
  name: string;
  key: string;
  active: number;
  unit_ids: number[];
}

export interface ResultCreateCategory extends ResultDefault {
  data: IFResultCategoryCreate[];
}

export interface IFUpdateCategory {
  name?: string;
  key?: string;
  active?: boolean;
  units?: { unit_id: number }[];
}

export interface ResultCategoryEdit extends ResultDefault {
  data: {
    id: number;
    name: string;
    key: string;
    deleted_at: null;
    units: { id: number; name: string; key: string; deleted_at: null }[];
  };
}

export interface DashBoardData extends ResultDefault {
  data: {
    total_orders: number;
    total_revenue: number;
    total_products_sold: string;
    new_members: number;
    hot_products: [];
    weekly_revenue: number;
  };
}
