import React from 'react';
import ItemsOrther from './ItemsOrther';

const ListOrder: React.FC<{}> = () => {
  return (
    <div>
      <div className="text-[18px] font-medium shadow-[0_0_3px_rgba(0,0,0,0.25)] min-h-[58px] max-h-[58px] rounded-t-xl mb-[23px] px-[45px] grid grid-cols-[repeat(6,1fr)] w-full">
        <button className="border-b-[2px] border-b-[#000]">Tất cả</button>
        <button className="">Đang xử lý</button>
        <button className="">Đang giao</button>
        <button className="">Đã giao</button>
        <button className="">Đã hủy</button>
        <button className="">Trả hàng</button>
      </div>
      <ItemsOrther />
      <ItemsOrther />
      <ItemsOrther />
      <ItemsOrther />
    </div>
  );
};

export default ListOrder;
