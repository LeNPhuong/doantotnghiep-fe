import React from 'react';
import UserMain from '../ContentRight/user/UserMain';
import { Outlet } from 'react-router-dom';

const AccountManagement: React.FC = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="flex flex-col py-[35px] w-full px-[35px] h-full overflow-y-auto">
        <UserMain />
        <Outlet />
      </div>
    </div>
  );
};

export default AccountManagement;
