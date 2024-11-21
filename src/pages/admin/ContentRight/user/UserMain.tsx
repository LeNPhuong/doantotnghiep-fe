import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserMain: React.FC = () => {
  return (
    <div className="flex flex-row justify-between">
      <p className="text-[24px] font-[500] capitalize">Quản lý tài khoản</p>
      <Link to="tao-moi">
        <button className="flex flex-row items-center gap-[10px] bg-[#014C3E] p-[8px] text-[#00E875] rounded-[8px] duration-500 shadow-[0_0_16px_#00000034] hover:bg-orange-700">
          <span>
            <FaPlus />
          </span>
          <span>Thêm người dùng</span>
        </button>
      </Link>
    </div>
  );
};

export default UserMain;
