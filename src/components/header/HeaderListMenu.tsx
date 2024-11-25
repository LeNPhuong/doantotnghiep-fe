import React from 'react';
import HeaderItemLink from './HeaderItemLink';
import { DataMenuList } from '../../data';

const HeaderListMenu: React.FC<{}> = () => {
  return (
    <div className="absolute left-[100px] bottom-0 translate-y-[100%] w-full max-w-[329px] bg-[#FFFFFF] shadow-[0_0_4px_#00000080] z-[9999] hidden group-hover/listp:block">
      {DataMenuList.map((data, index) => (
        <HeaderItemLink data={data} key={index} />
      ))}
    </div>
  );
};

export default HeaderListMenu;
