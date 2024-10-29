import React from 'react';
import HeaderItemService from './HeaderItemService';
import { LuUserCircle2 } from 'react-icons/lu';
import { BsCartPlus } from 'react-icons/bs';
import { IoCallOutline } from 'react-icons/io5';

const HeaderService: React.FC<{}> = () => {
  return (
    <div className="flex flex-row flex-[1_1_0] xl:justify-start md:justify-between justify-end md:gap-[0px] gap-[8px]">
      <HeaderItemService
        link="/nguoi-dung/dang-nhap"
        name="Tài khoản"
        icons={<LuUserCircle2 />}
      />
      <div className="xl:mr-[43px] xl:block md:hidden"></div>

      <HeaderItemService
        link="/gio-hang"
        name="Giỏ hàng"
        icons={<BsCartPlus />}
        cart={true}
      />
      <div className="xl:mr-[67px] xl:block md:hidden"></div>
      <div className="md:flex hidden flex-row items-center text-[#004D40] justify-end whitespace-nowrap">
        <div className="xl:text-[35px] md:text-[25px]">
          <IoCallOutline />
        </div>
        <div className="flex flex-col">
          <p className="xl:text-[16px] md:text-[13px] font-[700]">1900 1880</p>
          <p className="xl:text-[12px] md:text-[10px] font-[500]">
            Gọi từ 9h00 - 21h00
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderService;
