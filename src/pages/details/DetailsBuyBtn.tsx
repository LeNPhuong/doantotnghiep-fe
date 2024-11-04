import React from 'react';

const DetailsBuyBtn: React.FC<{}> = () => {
  return (
    <button className="flex justify-center items-center bg-white rounded-md border border-emerald-900 border-solid xl:min-w-[168px] xl:max-w-[168px] xl:min-h-[40px] min-h-[30px] max-w-[130px] min-w-[130px] shadow-[0px_0px_4px_rgba(0,0,0,0.25)] xl:text-[14px] text-[10px] font-semibold">
      Thêm vào giỏ hàng
    </button>
  );
};

export default DetailsBuyBtn;
