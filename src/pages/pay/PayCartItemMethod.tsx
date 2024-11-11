import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setMethodPay } from '../../redux/cart/CartSlice';

const PayCartItemMethod: React.FC<{
  border: boolean;
  img: string;
  name: string;
  value: number;
}> = ({ border, img, name, value }) => {
  const methodPay = useAppSelector((e) => e.cart.methodPay);

  const dispatch = useAppDispatch();

  return (
    <div
      style={{
        border: border ? '0px 0px 1px 0px solid #DAB4B4' : 'none',
      }}
      className="w-full min-h-[86px] border-b-[1px] border-b-[#DAB4B4] flex flex-row items-center pl-[16px] gap-[9px]"
    >
      <button
        onClick={() => dispatch(setMethodPay(value))}
        className="min-h-[20px] min-w-[20px] max-h-[20px] max-w-[20px] rounded-full border-[2px] border-[#D9D9D9] flex justify-center items-center"
      >
        <div
          style={{
            background: value === methodPay ? '#D9D9D9' : '#fff',
          }}
          className="min-w-[12px] min-h-[12px] rounded-full"
        ></div>
      </button>
      <img
        src={img}
        className="max-w-[40px] min-w-[40px] min-h-[40px] max-h-[40px]"
        alt=""
      />
      <p className="text-[14px] font-medium">{name}</p>
    </div>
  );
};

export default PayCartItemMethod;
