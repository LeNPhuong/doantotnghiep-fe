import React from 'react';
import HomeItemListMenu from './HomeItemListMenu';
import { DataMenuList } from '../../data';

const HomeListMenu: React.FC<{}> = () => {
  return (
    <div className="min-h-[157px] max-h-[157px] w-full bg-[#fff]">
      <div className="font-bold min-h-[76px] max-h-[76px] border-b-[1px] border-b-[#D6B6B6] flex flex-row justify-center items-center">
        DANH MỤC SẢN PHẨM ƯA CHUỘNG
      </div>
      <div className="flex flex-row">
        {DataMenuList.map((e) => (
          <HomeItemListMenu data={e} />
        ))}
      </div>
    </div>
  );
};

export default HomeListMenu;
