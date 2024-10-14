import React from 'react';
import { Link } from 'react-router-dom';
import { IMenuList } from '../../types';

const HomeItemListMenu: React.FC<{
  data: IMenuList;
}> = ({ data }) => {
  return (
    <Link className="w-full max-w-[180px] h-full" to={`/danh-muc/${data.link}`}>
      <div className="">
        <div className="flex flex-col w-full items-center justify-center min-h-[81px]">
          <img
            src={data.img}
            className="w-full h-full max-w-[40px] max-h-[40px] mb-[8px]"
            alt=""
          />
          <p className="text-[14px] font-bold text-[#676767]">{data.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default HomeItemListMenu;
