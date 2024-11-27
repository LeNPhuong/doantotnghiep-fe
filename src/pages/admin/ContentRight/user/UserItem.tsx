import React from 'react';
import { IFUserAdmin } from '../../../../types/User';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';

const UserItem: React.FC<{ data: IFUserAdmin }> = ({ data }) => {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] content-center items-center w-full p-[10px] rounded-[8px]">
      <p className="text-center text-[14px]">{data.name}</p>
      <Tooltip title={data.email}>
        <p className="text-center text-[14px]">
          {data.email.length > 15
            ? data.email.slice(0, 15) + '...'
            : data.email}
        </p>
      </Tooltip>
      <p className="text-center text-[14px]">{data.phone}</p>
      <p
        className={`text-center text-[14px] py-[10px] text-[#fff] font-[500] rounded-[8px] ${
          data.active ? 'bg-orange-500' : 'bg-red-500'
        }`}
      >
        {data.active ? 'Hoạt động' : 'Vô hiệu'}
      </p>
      <p className="text-center text-[14px]">
        {data.role === 'admin' ? 'Quản trị' : 'Người dùng'}
      </p>
      <Link
        to={`/admin-quan-ly/account/chinh-sua/${data.id}`}
        className="text-center text-[15px] font-[500] text-red-500"
      >
        Chỉnh sửa
      </Link>
    </div>
  );
};

export default UserItem;
