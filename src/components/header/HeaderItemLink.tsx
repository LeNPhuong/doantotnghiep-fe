import React from 'react';
import { Link } from 'react-router-dom';
import { GrDown } from 'react-icons/gr';
import IFCategories from '../../types/IFCategories';
import { IMenuList } from '../../types';

const HeaderItemLink: React.FC<{ data: IMenuList }> = ({ data }) => {
  return (
    <Link
      to={`/danh-muc/${data.id}`}
      className="flex flex-row items-center w-full justify-between max-h-[35px] min-h-[35px] px-[15px] border-b-[1px] border-[#00000033] border-dotted hover:bg-[#DDF16E] group/listmenu"
    >
      <span className="text-[14px] text-[#000] font-[500] group-hover/listmenu:text-[#004D40]">
        {data.name}
      </span>
      <span className="text-[20px] text-[#C9A8A8] group-hover/listmenu:text-[#000000] group-hover/listmenu:rotate-[-90deg]">
        <GrDown />
      </span>
    </Link>
  );
};

export default HeaderItemLink;
