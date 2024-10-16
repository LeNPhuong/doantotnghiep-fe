import React from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

const CartControl: React.FC<{}> = () => {
  return (

      <div className="flex justify-between bg-white rounded-[20px] shadow-[0px_0px_4px_rgba(0,0,0,0.25)] w-full max-w-[100px]">
        <div className=" bg-white border-r-[1px] border-r-[#E4C4C4] h-[32px] w-[32px] rounded-l-[20px] flex justify-center items-center cursor-pointer">
          <FiPlus />
        </div>
        <div className="w-full max-w-[36px] text-center leading-[32px] text-[14px] font-medium">1</div>
        <div className=" bg-white border-l-[1px] border-l-[#E4C4C4] h-[32px] w-[32px] rounded-r-[20px] flex justify-center items-center cursor-pointer">
          <FiMinus />
        </div>
      </div>

  );
};

export default CartControl;
