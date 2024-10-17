import React from 'react';
import { Outlet } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import { Breadcrumb } from '../../components';

const Tracking: React.FC<{}> = () => {
  return (
    <MainLayout>
      <Breadcrumb />
      <div className="mt-[61px]"></div>
      <Outlet />
    </MainLayout>
  );
};

export default Tracking;
