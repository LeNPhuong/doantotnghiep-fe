import React from 'react';

import HeaderItemLink from './HeaderItemLink';
import { useGetAllCategoriesQuery } from '../../service/product';
import Loading from '../other/Loading';

const HeaderListMenu: React.FC<{}> = () => {
  const { data, error, isLoading } = useGetAllCategoriesQuery();
  if (isLoading) return <Loading />;
  return (
    <div className="absolute left-[100px] bottom-0 translate-y-[100%] w-full max-w-[329px] bg-[#FFFFFF] shadow-[0_0_4px_#00000080] z-[9999] hidden group-hover/listp:block">
      {data?.data.map((data, index) => (
        <HeaderItemLink data={data} key={index} />
      ))}
    </div>
  );
};

export default HeaderListMenu;
