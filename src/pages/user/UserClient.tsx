import React from 'react';
import SlideUser from './SlideUser';
import { Outlet } from 'react-router-dom';
import { Breadcrumb } from '../../components';

const UserClient: React.FC<{}> = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <Breadcrumb />
      <div className="flex flex-row justify-between mt-[44px]">
        <SlideUser />
        <Outlet />
      </div>
      <div className="pb-[143px]"></div>
    </div>
  );
};

export default UserClient;
