import React from 'react';
import HomeItemListMenu from './HomeItemListMenu';
import { DataMenuList } from '../../data';

const HomeListMenu: React.FC<object> = () => {
  return (
    <div className=" w-full bg-[#fff]">
      <div className="font-bold xl:text-[18px] md:text-[13px] xl:min-h-[76px] xl:max-h-[76px] md:min-h-[40px] md:max-h-[40px] py-[3px] md:py-0 border-b-[1px] border-b-[#D6B6B6] flex flex-row justify-center items-center text-[14px]">
        DANH MỤC SẢN PHẨM ƯA CHUỘNG
      </div>
      <div className="flex flex-row md:flex-nowrap md:justify-start md:gap-0 gap-[10px] justify-center flex-wrap md:py-0 py-[5px]">
        {DataMenuList?.map((e) => <HomeItemListMenu key={e.id} data={e} />)}
      </div>
    </div>
  );
};

export default HomeListMenu;
