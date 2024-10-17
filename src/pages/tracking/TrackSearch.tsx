import React from 'react';
import { IconLock } from '../../assets/icons';

const TrackSearch: React.FC<{}> = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-[9px]">
        <img
          src={IconLock}
          className="w-full max-w-[50px] min-w-[50px] min-h-[50px] max-h-[50px]"
          alt=""
        />
        <p className="text-[24px] font-medium">Vui lòng nhập mã đơn hàng</p>
      </div>
      <div className="mt-[42px]"></div>
      <input
        className="min-h-[57px] max-h-[57px] text-center w-full placeholder:text-[#C1AAAA] outline-none shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-full text-[20px]"
        type="text"
        placeholder="Nhập mã đơn hàng"
      />
      <div className="mt-[31px]"></div>
      <div className="flex justify-center">
        <button className="w-full max-w-[176px] min-h-[59px] max-h-[59px] bg-[#d9d9d9] text-[#004D40] text-[20px] font-semibold rounded-[10px]">
          Tra cứu
        </button>
      </div>
      <div className="mt-[532px]"></div>
    </>
  );
};

export default TrackSearch;
