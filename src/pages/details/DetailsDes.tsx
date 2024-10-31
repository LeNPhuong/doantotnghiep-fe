import React from 'react';
import { IFProduct } from '../../types/IFProducts';

const DetailsDes: React.FC<{ data: IFProduct | undefined }> = ({ data }) => {
  return (
    <div className="w-full lg:max-w-[601px] lg:pb-[0px] pb-[10px]">
      <div className="text-[25px] w-full min-h-[60px] max-h-[60px] text-[#DDF16E] bg-[#004D40] text-center leading-[60px] font-medium">
        Mô tả
      </div>
      <div className="w-full pl-[26px] flex">
        <div className="flex flex-col items-start text-lg text-black rounded-none max-w-[549px] mt-[26px]">
          <div className="mb-[18px]">
            <span className="font-medium">Tên sản phẩm: {data?.name}</span>
          </div>
          <div className="mb-[13px]">
            <span className="font-medium">Xuất xứ: {data?.made}</span>
          </div>
          <div className="w-full max-w-full text-[16px]">
            {data?.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsDes;
