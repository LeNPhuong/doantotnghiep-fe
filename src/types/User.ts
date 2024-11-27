import { IFVoucher } from './Voucher';

export interface IFToken {
  success: true;
  data: {
    access_token: string;
    token_type: string;
    expires_in: number;
  };
  message: string;
}

export interface IFLogin {
  email: string;
  password: string;
}

export interface ChangePassword {
  password: string;
  c_password: string;
}

export interface ResultChange {
  success: boolean;
  data: string;
  message: number;
}

export interface IFRegister {
  name: string;
  phone: string;
  email: string;
  password: string;
  c_password: string;
}

export interface IFRegisterSuccess {
  success: boolean;
  data: {
    user: {
      name: string;
      phone: string;
      email: string;
      id: number;
    };
  };
  message: string;
}

export interface IFProfile {
  success: boolean;
  data: {
    id: number;
    name: string;
    email: string;
    phone: string;
    avatar: null;
    vouchers: IFVoucher[];
    addresses: IFMap[];
    role: string;
  };
  message: 'Thông tin người dùng đã được lấy thành công';
}

export interface IFMapCreate {
  address: string;
  active: number;
}

export interface IFMapCreateResult {
  success: boolean;
  data: {
    address: string;
    active: boolean;
    user_id: number;
    updated_at: string;
    created_at: string;
    id: number;
  };
  message: string;
}

export interface IFMap {
  id: number;
  user_id: number;
  address: string;
  active: number;
  created_at: string;
  updated_at: string;
}

export interface IFMapDataResult {
  success: boolean;
  data: IFMap[];
  message: string;
}

export interface UserUpdate {
  name: string;
  phone: string;
  email: string;
}

export interface ResultChangePassword {
  success: boolean;
  message: string;
  data: string;
}

export interface DataSendPassword {
  password: string;
  c_password: string;
  otp: string;
}

export interface PaymentData {
  payment_method?: string;
  voucher_id?: number | null;
  note?: string;
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
}

export interface ResultPaymentCheckOut {
  success: boolean;
  message: string;
  data: any;
}

export enum MethodDataPay {
  cod,
  momo,
}

export interface IFFormData {
  name?: string;
  sale?: string;
  cate_id?: string;
  price?: string;
  description?: string;
  img?: File;
}

export interface IFUserAdmin {
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

export interface IFResultUserAdmin {
  total_users: number;
  total_user_role: number;
  total_admin_role: number;
  total_new_users_this_week: number;
  users: IFUserAdmin[];
}

export interface IFDataUserChange {
  name?: string;
  email?: string;
  phone?: string;
  role?: string;
  active?: boolean;
}

export interface IFDataUserNew extends IFDataUserChange {
  password?: string;
}

export interface IFDataUserUpdate {
  id: number;
  name: string;
  email: string;
  role: string;
  phone: string;
  avatar: string;
  active: boolean;
  created_at: string;
  updated_at: string;
}
