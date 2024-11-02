import React from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useAppDispatch } from '../../redux/store';
import { increment_cart, minus_cart } from '../../redux/cart/CartSlice';

const CartControl: React.FC<{
  data: number;
  id: number;
}> = ({ data, id }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-between bg-white rounded-[20px] shadow-[0px_0px_4px_rgba(0,0,0,0.25)] w-full md:max-w-[100px] max-w-[150px]">
      <button
        onClick={() => dispatch(increment_cart(id))}
        className="bg-white border-r-[1px] border-r-[#E4C4C4] md:min-h-[32px] md:min-w-[32px] min-w-[40px] min-h-[40px] rounded-l-[20px] flex justify-center items-center cursor-pointer"
      >
        <FiPlus />
      </button>
      <div className="w-full md:max-w-[36px] max-w-[40px] text-center leading-[40px] md:text-[14px] text-[16px] font-medium">
        {data}
      </div>
      <button
        onClick={() => dispatch(minus_cart(id))}
        className=" bg-white border-l-[1px] border-l-[#E4C4C4] md:min-h-[32px] md:min-w-[32px] min-w-[40px] min-h-[40px] rounded-r-[20px] flex justify-center items-center cursor-pointer"
      >
        <FiMinus />
      </button>
    </div>
  );
};

export default CartControl;
