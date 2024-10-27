import React from 'react';
import ItemsOrther from './ItemsOrther';
import { Typography } from '@mui/material';

const UserOrder: React.FC<{}> = () => {
  return (
    <div className="w-full max-w-[1003px]">
      <div className="flex justify-between items-center mb-[35px]">
        <div className="text-[32px] font-bold">Đơn hàng của tôi</div>
        <Typography
          variant="body1"
          sx={{ fontSize: '32px' }}
          fontWeight={700}
          color="#000"
        >
          Thông tin cá nhân
        </Typography>
      </div>
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

export default UserOrder;
