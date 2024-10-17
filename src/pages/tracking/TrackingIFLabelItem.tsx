import React from 'react';

const TrackingIFLabelItem: React.FC<{}> = () => {
  return (
    <div className="w-full flex flex-row text-[14px] font-semibold">
      <div className="w-full max-w-[195px] min-h-[35px] max-h-[35px] bg-[#F5EBEB] border-r-[1px] border-b-[1px] border-r-[#F2DADA] border-b-[#F2DADA] text-center leading-[35px]">
        Hình ảnh
      </div>
      <div className="w-full max-w-[245px] min-h-[35px] max-h-[35px] bg-[#F5EBEB] border-r-[1px] border-b-[1px] border-r-[#F2DADA] border-b-[#F2DADA] text-center leading-[35px]">
        Tên sản phẩm
      </div>
      <div className="w-full max-w-[128px] min-h-[35px] max-h-[35px] bg-[#F5EBEB] border-r-[1px] border-b-[1px] border-r-[#F2DADA] border-b-[#F2DADA] text-center leading-[35px]">
        Giá
      </div>
      <div className="w-full max-w-[128px] min-h-[35px] max-h-[35px] bg-[#F5EBEB] border-r-[1px] border-b-[1px] border-r-[#F2DADA] border-b-[#F2DADA] text-center leading-[35px]">
        Số lượng
      </div>
      <div className="w-full max-w-[128px] min-h-[35px] max-h-[35px] bg-[#F5EBEB] border-r-[1px] border-b-[1px] border-r-[#F2DADA] border-b-[#F2DADA] text-center leading-[35px]">
        Đơn vị
      </div>
      <div className="w-full min-h-[35px] max-h-[35px] bg-[#F5EBEB] text-center leading-[35px] border-b-[1px] border-b-[#F2DADA]">
        Mô tả
      </div>
    </div>
  );
};

export default TrackingIFLabelItem;
