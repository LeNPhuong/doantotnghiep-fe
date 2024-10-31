import React from 'react';
import { Link } from 'react-router-dom';
import { IMenuList } from '../../types';

const HomeItemListMenu: React.FC<{
  data: IMenuList;
}> = ({ data }) => {
  return (
    <Link
      className="w-full md:max-w-[180px] max-w-[140px] h-full focus:shadow-[0_0_4px_rgba(0,0,0,0.25)]"
      to={`/danh-muc/${data.id}`}
    >
      <div className="">
        <div className="flex flex-col w-full items-center justify-center p-[10px] gap-[5px]">
          <img
            src={data.img}
            className="xl:max-w-[50px] xl:max-h-[50px] max-w-[40px] max-h-[40px]"
            alt=""
          />
          <p className="xl:text-[16px] md:text-[12px] text-[14px] font-semibold text-[#676767]">
            {data.name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HomeItemListMenu;
