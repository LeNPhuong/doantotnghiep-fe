import React from 'react';

const CartHeader: React.FC<{}> = () => {
  return (
    <div className="rounded-t-[10px] min-h-[57px] max-h-[57px] border-b-[#EACECE] border-b-[2px] flex flex-row">
      <div className="w-full max-w-[543px] flex items-center">
        <div className="flex flex-row gap-[12px] items-center ml-[9px]">
          <div className="min-h-[20px] min-w-[20px] max-h-[20px] max-w-[20px] rounded-full border-[3px] border-[#D9D9D9]"></div>
          <p className="text-[16px] text-[#000]">Chọn tất cả</p>
        </div>
      </div>
      <div className="max-w-[120px] w-full flex flex-row items-center justify-center text-[16px]">
        Giá
      </div>
      <div className="max-w-[120px] w-full flex flex-row items-center justify-center text-[16px]">
        Số lượng
      </div>
      <div className="max-w-[120px] w-full flex flex-row items-center justify-center text-[16px]">
        Đơn vị
      </div>
    </div>
  );
};

export default CartHeader;
