import React from 'react';

const DetailsBuyBtn: React.FC<{}> = () => {
  return (
    <button className="flex justify-center items-center bg-white rounded-md border border-emerald-900 border-solid min-w-[168px] max-w-[168px] min-h-[40px] shadow-[0px_0px_4px_rgba(0,0,0,0.25)] text-[14px] font-semibold">
      Thêm vào giỏ hàng
    </button>
  );
};

export default DetailsBuyBtn;
