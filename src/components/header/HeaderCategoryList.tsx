import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import HeaderListMenu from './HeaderListMenu';

const HeaderCategoryList: React.FC<{}> = () => {
  return (
    <div className="md:flex hidden flex-row items-center cursor-pointer min-h-[70px] max-h-[70px] group/listp">
      <div className="flex flex-row items-center">
        <span className="xl:text-[28px] md:text-[20px] text-[#004D40] xl:mr-[15px] md:mr-[10px]">
          <GiHamburgerMenu />
        </span>
        <span className="xl:text-[14px] md:text-[12px] font-[700] text-[#004D40]">
          TẤT CẢ DANH MỤC
        </span>
      </div>
      <HeaderListMenu />
    </div>
  );
};

export default HeaderCategoryList;
