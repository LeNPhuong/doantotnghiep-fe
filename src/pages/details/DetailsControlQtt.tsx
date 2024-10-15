import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';

const DetailsControlQtt: React.FC<{}> = () => {
  return (
    <div className="flex flex-col text-base font-semibold text-black whitespace-nowrap rounded-none max-w-[169px]">
      <div className="flex gap-5 justify-between bg-white rounded-[10px] shadow-[0px_0px_4px_rgba(0,0,0,0.25)]">
        <div className=" bg-white border-r-[1px] border-r-[#E4C4C4] h-[42px] w-[60px] rounded-l-[10px] flex justify-center items-center cursor-pointer">
          <FiPlus />
        </div>
        <div className="my-auto">1</div>
        <div className=" bg-white border-l-[1px] border-l-[#E4C4C4] h-[42px] w-[60px] rounded-r-[10px] flex justify-center items-center cursor-pointer">
          <FiMinus />
        </div>
      </div>
    </div>
  );
};

export default DetailsControlQtt;
