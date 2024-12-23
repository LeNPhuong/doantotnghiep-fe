import React from 'react';
import { useAdminGetUnitsQuery } from '../../../../service/apiAdmin';
import { Loading } from '../../../../components';
import ItemUnit from './ItemUnit';

const PageUnits: React.FC<{}> = () => {
  const { data, isFetching } = useAdminGetUnitsQuery();

  if (isFetching) return <Loading />;

  return (
    <div className="mt-[15px] p-[10px] shadow-[0_0_15px_#ccc] rounded-[8px]">
      <div className="grid grid-cols-[1fr_1fr_1fr] content-center w-full bg-gray-200 p-[10px] rounded-[8px]">
        <p className="capitalize text-center text-[14px] font-[500]">Tên</p>
        <p className="capitalize text-center text-[14px] font-[500]">
          Tình trạng
        </p>
        <p className="capitalize text-center text-[14px] font-[500]">
          Hành động
        </p>
      </div>
      <div className="flex flex-col gap-[15px] mt-[10px]">
        {data?.data && data.data.map((e) => <ItemUnit data={e} />)}
      </div>
    </div>
  );
};

export default PageUnits;
