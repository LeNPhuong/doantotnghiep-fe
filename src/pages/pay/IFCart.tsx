import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import FieldInfor from './FieldInfor';

const IFCart: React.FC<{}> = () => {
  return (
    <div className="w-full max-w-[404px] shadow-[0_0_3px_rgba(0,0,0,0.25)] rounded-[10px] px-[27px] py-[11px] self-start">
      <button className="w-full min-h-[46px] bg-[#004D40] shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-[10px] flex flex-row items-center justify-between px-[20px] text-[#DDF16E] text-[16px] font-medium">
        <span>Nhập mã giảm giá để được ưu đãi</span>
        <span>
          <FaChevronRight />
        </span>
      </button>
      <div className="pt-[26px]"></div>
      <div className="flex flex-col gap-[10px]">
        <FieldInfor
          weight="400"
          size="16px"
          label="Tổng sản phẩm:"
          value={1000}
        />
        <FieldInfor
          weight="400"
          size="16px"
          color="#004D40"
          label="Giảm giá từ voucher:"
          value={1000}
        />
        <FieldInfor weight="400" size="16px" label="Tổng tiền:" value={1000} />
      </div>
      <div className="pt-[16px]"></div>
      <div className="h-[2px] w-full bg-[#ECD6D6]"></div>
      <div className="pt-[9px]"></div>
      <FieldInfor
        size="22px"
        color1="#000"
        color2="#01E778"
        label="Tổng tiền:"
        value={1000}
        weight="500"
      />
      <div className="pt-[20px]"></div>
      <button className="w-full min-h-[46px] bg-[#004D40] shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-[50px] px-[20px] text-[#DDF16E] text-[16px] font-semibold">
        Mua hàng
      </button>
      <div className='pt-[14px]'></div>
    </div>
  );
};

export default IFCart;