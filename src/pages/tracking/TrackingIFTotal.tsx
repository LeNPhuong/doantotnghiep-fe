import React from 'react';

const TrackingIFTotal: React.FC<{}> = () => {
  return (
    <div className="w-full flex flex-row text-[14px] font-semibold">
      <div className="w-full max-w-[195px] min-h-[43px] max-h-[43px] bg-[#F5EBEB] border-b-[1px] border-b-[#F2DADA] text-center leading-[43px]">
        Tổng
      </div>
      <div className="w-full max-w-[245px] min-h-[43px] max-h-[43px] bg-[#F5EBEB] border-r-[1px] border-b-[1px] border-r-[#F2DADA] border-b-[#F2DADA] text-center leading-[43px]"></div>
      <div className="w-full max-w-[128px] min-h-[43px] max-h-[43px] bg-[#F5EBEB] border-r-[1px] border-b-[1px] border-r-[#F2DADA] border-b-[#F2DADA] text-center leading-[43px] text-[#FF0000]">
        141.000đ
      </div>
      <div className="w-full max-w-[128px] min-h-[43px] max-h-[43px] bg-[#F5EBEB] border-r-[1px] border-b-[1px] border-r-[#F2DADA] border-b-[#F2DADA] text-center leading-[43px] text-[#000]">
        1
      </div>
      <div className="w-full max-w-[128px] min-h-[43px] max-h-[43px] bg-[#F5EBEB] border-r-[1px] border-b-[1px] border-r-[#F2DADA] border-b-[#F2DADA] text-center leading-[43px]"></div>
      <div className="w-full min-h-[43px] max-h-[43px] bg-[#F5EBEB] text-center leading-[43px] border-b-[1px] border-b-[#F2DADA]"></div>
    </div>
  );
};

export default TrackingIFTotal;
