import React from 'react';
import BillItem from './BillItem';
import { useAdminGetAllOrderQuery } from '../../../../../service/apiAdmin';
import { Loading } from '../../../../../components';

const BoxInfor: React.FC<{}> = () => {
  const { data, isFetching } = useAdminGetAllOrderQuery();

  if (isFetching) {
    return <Loading />;
  }

  return (
    <div className="mt-[15px] p-[10px] shadow-[0_0_15px_#ccc] rounded-[8px]">
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] content-center w-full bg-gray-200 p-[10px] rounded-[8px]">
        <p className="capitalize text-center text-[14px] font-[500]">
          Tên khách hàng
        </p>
        <p className="capitalize text-center text-[14px] font-[500]">
          Số điện thoại
        </p>
        <p className="capitalize text-center text-[14px] font-[500]">
          Hình thức
        </p>
        <p className="capitalize text-center text-[14px] font-[500]">
          trạng thái
        </p>
        <p className="capitalize text-center text-[14px] font-[500]">Giá</p>
        <p className="capitalize text-center text-[14px] font-[500]">
          Thời gian
        </p>
        <p className="capitalize text-center text-[14px] font-[500]">
          Hành động
        </p>
      </div>
      <div className="flex flex-col gap-[15px] mt-[10px]">
        {data?.data.map((e, index) => <BillItem key={index} data={e} />)}
      </div>
    </div>
  );
};

export default BoxInfor;
