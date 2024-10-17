import React from 'react';

const TrackingIFHeader: React.FC<{}> = () => {
  return (
    <div className="min-h-[48px] max-h-[48px] w-full bg-[#37764C] text-[14px] font-semibold px-[31px] flex items-center">
      <p className="text-[#DDF16E] mr-[234px]">
        Đặt hàng: <span className="text-[#fff] inline-block">15AFTRWSM276</span>
      </p>
      <p className="text-[#DDF16E] mr-[238px]">
        Khách hàng: <span className="text-[#fff] inline-block">Ngọc</span>
      </p>
      <p className="text-[#DDF16E]">
        Đặt lúc:{' '}
        <span className="text-[#fff] inline-block">20/12/2024 13:12:60</span>
      </p>
    </div>
  );
};

export default TrackingIFHeader;
