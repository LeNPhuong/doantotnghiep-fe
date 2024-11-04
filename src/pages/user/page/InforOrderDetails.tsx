import React from 'react';

const InforOrderDetails: React.FC<{}> = () => {
  return (
    <div className="md:px-[35px] px-[10px] py-[14px]">
      <div className="w-full flex flex-row justify-between flex-wrap">
        <div className="flex flex-col">
          <p className="font-semibold md:text-[32px] text-[24px] md:mb-[29px]">
            Địa chỉ nhận hàng
          </p>
          <div className="flex flex-col gap-[15px] font-medium">
            <p className="md:text-[24px] text-[18] text-[#000]">Long Phạm</p>
            <p className="md:text-[18px] text-[14px] text-[rgba(0,0,0,0.6)]">
              (+84) 909090909
            </p>
            <p className="md:text-[18px] text-[14px] text-[rgba(0,0,0,0.6)]">
              Hẻm 123 Tô Ký Trung Mỹ Tây Q12 TP.HCM
            </p>
          </div>
        </div>
        <div className="md:flex hidden flex-row md:text-[18px] font-medium md:gap-[64px]">
          <div className="flex flex-col md:gap-[28px] text-[rgba(0,0,0,0.6)] items-end">
            <p>Tổng tiền hàng</p>
            <p>Phí vận chuyển</p>
            <p>Voucher</p>
            <p>Thành tiền</p>
            <p>Phương thức thanh toán</p>
          </div>
          <div className="flex flex-col md:gap-[28px] text-[#004D40] items-end">
            <p>200.888đ</p>
            <p>20.000đ</p>
            <p>-30.000đ</p>
            <p>-190.888đ</p>
            <p>Chuyển khoản tiền mặt</p>
          </div>
        </div>
        <div className="md:hidden flex flex-col w-full text-[14px] font-medium gap-[10px] pt-[10px]">
          <div className="flex flex-row justify-between">
            <p>Tổng tiền hàng</p>
            <p>200.888đ</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Phí vận chuyển</p>
            <p>200.888đ</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Voucher</p>
            <p>200.888đ</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Thành tiền</p>
            <p>200.888đ</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Phương thức thanh toán</p>
            <p>Chuyển khoản tiền mặt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InforOrderDetails;
