import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const UnitsManagement: React.FC<{}> = () => {
  return (
    <div className="flex flex-col py-[35px] w-full px-[35px] h-full overflow-y-auto">
      <div className="flex flex-row items-center justify-between w-full">
        <p className="text-[24px] font-[500] capitalize ">Quản lý đơn vị</p>
        <Link to="them-moi">
          <button className="flex flex-row items-center gap-[10px] bg-[#014C3E] text-[#00E875] p-[8px] rounded-[8px] duration-500 shadow-[0_0_16px_#00000034] hover:bg-orange-700">
            <span>
              <FaPlus />
            </span>
            <span>Thêm đơn vị mới</span>
          </button>
        </Link>
      </div>
      <div className="w-full mt-[30px]">
        <Outlet />
      </div>
    </div>
  );
};

export default UnitsManagement;
