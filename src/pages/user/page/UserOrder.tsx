import React from 'react';
import { Outlet } from 'react-router-dom';

const UserOrder: React.FC<{}> = () => {
  return (
    <div className="w-full max-w-[1003px]">
      <div className="flex justify-between items-center mb-[35px]">
        <div className="text-[32px] font-bold">Đơn hàng của tôi</div>
      </div>
      <Outlet />
    </div>
  );
};

export default UserOrder;
