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
