import React, { useEffect, useState } from 'react';
import { OrderByCode } from '../../../types/IFProducts';
import ChangeCurrentcy from '../../../ultils/ChangeCurrentcy';
import { checkTotalPriceRaw } from '../../../ultils/CheckPrice';

const InforOrderDetails: React.FC<{ details: OrderByCode }> = ({ details }) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  console.log(details);

  useEffect(() => {
    let total = 0;
    if (details) {
      details.data.order_details.forEach((e) => {
        if (e.product) {
          total +=
            checkTotalPriceRaw(Number(e.product.price), e.product.sale) *
            e.quantity;
        }
      });
    }
    setTotalPrice(total);
  }, [details]);

  return (
    <div className="md:px-[35px] px-[10px] py-[14px]">
      <div className="w-full flex flex-row justify-between flex-wrap">
        <div className="flex flex-col">
          <p className="font-semibold md:text-[32px] text-[24px] md:mb-[29px]">
            Địa chỉ nhận hàng
          </p>
          <div className="flex flex-col gap-[15px] font-medium">
            <p className="md:text-[24px] text-[18] text-[#000]">
              {details?.data?.user?.name}
            </p>
            <p className="md:text-[18px] text-[14px] text-[rgba(0,0,0,0.6)]">
              (+84) {details?.data?.user.phone}
            </p>
            <p className="md:text-[18px] text-[14px] text-[rgba(0,0,0,0.6)]">
              {
                details?.data?.user?.addresses?.find((e) => e?.active === 1)
                  ?.address
              }
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
            <p>{ChangeCurrentcy(totalPrice)}</p>
            <p>
              -
              {details.data.voucher
                ? ChangeCurrentcy(
                    (totalPrice * Number(details.data.voucher.discount_value)) /
                      100,
                  )
                : 0}
            </p>
            <p>
              {details.data.voucher
                ? ChangeCurrentcy(
                    totalPrice -
                      (totalPrice *
                        Number(details.data.voucher.discount_value)) /
                        100,
                  )
                : ChangeCurrentcy(totalPrice)}
            </p>
            <p>
              {details?.data?.transaction[0]
                ? details?.data?.transaction[0]?.payment_method
                : 'Chưa thanh toán'}
            </p>
          </div>
        </div>
        <div className="md:hidden flex flex-col w-full text-[14px] font-medium gap-[10px] pt-[10px]">
          <div className="flex flex-row justify-between">
            <p>Tổng tiền hàng</p>
            <p>{ChangeCurrentcy(totalPrice)}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Voucher</p>
            <p>
              -
              {details.data.voucher
                ? ChangeCurrentcy(
                    (totalPrice * Number(details.data.voucher.discount_value)) /
                      100,
                  )
                : 0}
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Thành tiền</p>
            <p>
              {details.data.voucher
                ? ChangeCurrentcy(
                    totalPrice -
                      (totalPrice *
                        Number(details.data.voucher.discount_value)) /
                        100,
                  )
                : ChangeCurrentcy(totalPrice)}
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Phương thức thanh toán</p>
            <p>{details?.data?.transaction[0]?.payment_method}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InforOrderDetails;
