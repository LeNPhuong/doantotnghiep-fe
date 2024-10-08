import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import HeaderListMenu from './HeaderListMenu';

const HeaderCategoryList: React.FC<{}> = () => {
  return (
    <div className="flex flex-row items-center cursor-pointer min-h-[70px] max-h-[70px] group/listp">
      <div className="flex flex-row items-center">
        <span className="text-[28px] text-[#004D40] mr-[15px]">
          <GiHamburgerMenu />
        </span>
        <span className="text-[14px] font-[700] text-[#004D40]">
          TẤT CẢ DANH MỤC
        </span>
      </div>
      <HeaderListMenu />
    </div>
  );
};

export default HeaderCategoryList;
