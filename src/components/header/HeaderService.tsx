import React from 'react';
import HeaderItemService from './HeaderItemService';
import { LuUserCircle2 } from 'react-icons/lu';
import { BsCartPlus } from 'react-icons/bs';
import { IoCallOutline } from 'react-icons/io5';

const HeaderService: React.FC<{}> = () => {
  return (
    <div className="flex flex-row flex-[1_1_0]">
      <HeaderItemService name="Tài khoản" icons={<LuUserCircle2 />} />
      <div className="mr-[43px]"></div>

      <HeaderItemService name="Giỏ hàng" icons={<BsCartPlus />} cart={true} />
      <div className="mr-[67px]"></div>
      <div className="flex flex-row items-center text-[#004D40] justify-end">
        <div className="text-[40px]">
          <IoCallOutline />
        </div>
        <div className="flex flex-col">
          <p className="text-[16] font-[700]">1900 1880</p>
          <p className="text-[12px] font-[500]">Gọi từ 9h00 - 21h00</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderService;
