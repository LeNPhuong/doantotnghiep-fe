import { IFMap } from './User';
import { IFVoucher } from './Voucher';

export interface IFProduct {
  id: number;
  cate_id: number;
  description: string;
  img: string;
  made: string;
  name: string;
  price: string;
  quantity: number;
  sale: number;
  active: number;
  deleted_at: string;
  category: {
    id: number;
    deleted_at: null;
    key: string;
    name: string;
    active_units: { id: number; name: string; active: number }[];
  };
  comments: IFComment[];
}

export interface IFAResultProduct {
  success: boolean;
  data: IFProduct[];
  message: string;
}

export interface CartCheckout {
  id: number;
  quantity: number;
  unit: string;
  price: number;
}

export interface CheckOutData {
  cart?: CartCheckout[];
  voucher_id?: number;
}

export interface StatusOrder {
  id: number;
  text_status: string;
  active: number;
  deleted_at: null;
}

export interface ProductOrder {
  id: number;
  cate_id: number;
  name: string;
  price: string;
  sale: number;
  img: string;
  img_public_id: string;
  quantity: number;
  description: string;
  made: string;
  created_at: null;
  updated_at: string;
  active: number;
  deleted_at: null;
}

export interface HandledProduct {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
  unit: string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  product: ProductOrder;
}

export interface ListOrder {
  id: number;
  code: string;
  user_id: number;
  status_id: number;
  voucher_id: number;
  total_price: number;
  cancellation_reason: null;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  status: StatusOrder;
  order_details: HandledProduct[];
}

export interface DetailsOrder extends ListOrder {
  status: {
    active: number;
    deleted_at: null;
    id: number;
    text_status: string;
  };
  user: {
    active: true;
    addresses: IFMap[];
    avatar: null;
    birthday: null;
    created_at: string;
    deleted_at: null;
    email: string;
    email_verified_at: null;
    id: number;
    name: string;
    phone: string;
    role: string;
    updated_at: string;
  };
  voucher: IFVoucher;
  transaction: {
    address: string;
    created_at: string;
    email: string;
    id: number;
    name: string;
    note: string;
    order_id: number;
    payment_method: string;
    phone: string;
    total_price: 272400;
    updated_at: string;
    user_id: number;
  }[];
}

export interface OrderByCode {
  success: boolean;
  data: DetailsOrder;
  message: string;
}

export interface DataMainOrder {
  success: boolean;
  data: ListOrder[];
  message: string;
}

export interface IFCreateProduct {
  cate_id: number;
  name: string;
  price: number;
  sale: number;
  quantity: number;
  description: string;
  made: string;
  img: File;
  active: number;
}

export interface IFComment {
  id: number;
  product_id: number;
  user_id: number;
  rating: number;
  comment: string;
  likes: number;
  created_at: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}
