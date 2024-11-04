import React from 'react';
import { Outlet } from 'react-router-dom';

const UserOrder: React.FC<{}> = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center md:justify-start items-center xl:mb-[35px] md:mb-[22px] md:my-[0px] my-[20px]">
        <div className="xl:text-[32px] md:text-[22px] text-[25px] font-bold">
          Đơn hàng của tôi
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default UserOrder;
