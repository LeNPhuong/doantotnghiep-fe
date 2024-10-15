import React from 'react';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';

const Breadcrumb: React.FC<{}> = () => {
  return (
    <div className="w-full min-h-[50px] max-h-[50px] mt-[28px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#FFFFFF] flex flex-row">
      <div className="w-full max-w-[49px] border-r-[1px] border-r-[#E5C8C8] min-h-[50px] max-h-[50px] flex justify-center items-center cursor-pointer text-[14px]">
        <TfiAngleLeft />
      </div>
      <div className="flex flex-row items-center ml-[36px] gap-[23px]">
        <div className="text-[16px] font-medium">TRANG CHỦ</div>
        <div className="text-[14px]">
          <TfiAngleRight />
        </div>
        <div className="text-[16px] font-medium">RAU CỦ QUẢ</div>
      </div>
    </div>
  );
};

export default Breadcrumb;
