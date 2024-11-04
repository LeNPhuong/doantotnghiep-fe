import React from 'react';

const CartHeader: React.FC<{}> = () => {
  return (
    <div className="md:rounded-t-[10px] min-h-[57px] max-h-[57px] border-b-[#EACECE] border-b-[2px] flex flex-row px-[20px]">
      <div className="w-full xl:max-w-[543px] lg:max-w-[400px] md:max-w-[350px] max-w-[300px] flex items-center">
        <div className="flex flex-row items-center">
          <p className="text-[18px] text-[#000]">Sản phẩm</p>
        </div>
      </div>
      <div className="md:max-w-[120px] hidden w-full md:flex flex-row items-center justify-center text-[16px]">
        Giá
      </div>
      <div className="md:max-w-[120px] hidden w-full md:flex flex-row items-center justify-center md:text-[16px] text-[14px]">
        Số lượng
      </div>
      <div className="md:max-w-[120px] hidden w-full md:flex flex-row items-center justify-center md:text-[16px] text-[14px]">
        Đơn vị
      </div>
      <div className="md:max-w-[32px] max-w-[32px] hidden w-full md:flex flex-row items-center justify-center md:text-[16px] text-[14px]"></div>
    </div>
  );
};

export default CartHeader;
