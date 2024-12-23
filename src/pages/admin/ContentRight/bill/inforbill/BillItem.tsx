import React, { useEffect, useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { AdminOrder } from '../../../../../types/AdminType';
import ChangeCurrentcy from '../../../../../ultils/ChangeCurrentcy';
import { ChangeDate } from '../../../../../ultils/ChangeDate';

const BillItem: React.FC<{ data: AdminOrder }> = ({ data }) => {
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    let totalPrice = 0;
    data.order_details.forEach((el) => {
      totalPrice += el.price * el.quantity;
    });

    if (data.voucher) {
      totalPrice =
        totalPrice - (totalPrice * Number(data.voucher.discount_value)) / 100;
    }

    setTotal(totalPrice);
  }, []);

  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] content-center w-full p-[10px]">
      <p className="capitalize text-center text-[14px] font-[500]">
        {data.user.name}
      </p>
      <p className="capitalize text-center text-[14px] font-[500]">
        {data.user.phone}
      </p>
      <p className="uppercase text-center text-[14px] font-[500]">
        {data.transaction[0] && data.transaction[0].payment_method}
      </p>
      <p className="uppercase text-center text-[14px] font-[500]">
        {data.status.text_status}
      </p>
      <p className="capitalize text-center text-[14px] font-[500]">
        {ChangeCurrentcy(total)}
      </p>
      <p className="capitalize text-center text-[16px] font-[400] text-red-500">
        {ChangeDate(data.created_at)}
      </p>

      <div className="flex justify-center">
        <Link to={`details/${data.id}`}>
          <button className="capitalize text-center text-[20px] font-[500] hover:rotate-180 duration-500">
            <IoSettingsOutline />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BillItem;
