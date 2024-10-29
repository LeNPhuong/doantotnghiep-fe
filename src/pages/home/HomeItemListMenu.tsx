import React from 'react';
import { Link } from 'react-router-dom';
import { IMenuList } from '../../types';

const HomeItemListMenu: React.FC<{
  data: IMenuList;
}> = ({ data }) => {
  return (
    <Link
      className="w-full md:max-w-[180px] h-full"
      to={`/danh-muc/${data.link}`}
    >
      <div className="">
        <div className="flex flex-col w-full items-center justify-center xl:min-h-[81px] md:min-h-[70px]">
          <img
            src={data.img}
            className="w-full h-full xl:max-w-[40px] xl:max-h-[40px] md:max-w-[25px] md:max-h-[25px] max-w-[15px] md:mb-[8px] mb-[5px]"
            alt=""
          />
          <p className="xl:text-[14px] md:text-[10px] text-[6px] font-bold text-[#676767]">
            {data.name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HomeItemListMenu;
