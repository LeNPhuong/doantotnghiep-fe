import React from 'react';
import { AdminOrder } from '../../../../../types/AdminType';
import {
  checkDiscountVoucher,
  checkTotalPrice,
} from '../../../../../ultils/CheckPrice';
import ChangeCurrentcy from '../../../../../ultils/ChangeCurrentcy';

const AdminDetailsInfor: React.FC<{ data: AdminOrder | undefined }> = ({
  data,
}) => {
  return (
    <div className="md:px-[35px] px-[10px] py-[14px]">
      <div className="w-full flex flex-row justify-between flex-wrap">
        <div className="flex flex-col">
          <p className="font-semibold text-[24px] mb-[5px]">
            Thông tin khách hàng
          </p>
          <div className="flex flex-col gap-[8px] font-medium">
            <p className="text-[18px] text-[#000]">{data?.user?.name}</p>
            <p className="md:text-[18px] text-[14px] text-[rgba(0,0,0,0.6)]">
              (+84) {data?.user.phone}
            </p>
            <p className="md:text-[18px] text-[14px] text-[rgba(0,0,0,0.6)]">
              {data?.transaction[0].address}
            </p>
          </div>
        </div>
        <div className="md:flex hidden flex-row md:text-[18px] font-medium md:gap-[64px]">
          <div className="flex flex-col md:gap-[28px] text-[rgba(0,0,0,0.6)] items-end">
            <p>Tổng tiền hàng</p>
            <p>Voucher</p>
            <p>Thành tiền</p>
            <p>Phương thức thanh toán</p>
          </div>
          <div className="flex flex-col md:gap-[28px] text-[#004D40] items-end">
            <p>{ChangeCurrentcy(Number(data?.total_price!))}</p>
            <p>
              -
              {checkDiscountVoucher(
                Number(data?.total_price),
                Number(data?.voucher?.discount_value),
              )}
            </p>
            <p>
              {checkTotalPrice(
                Number(data?.total_price),
                Number(data?.voucher?.discount_value),
              )}
            </p>
            <p>Chuyển khoản tiền mặt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDetailsInfor;
