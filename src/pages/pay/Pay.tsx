import React from 'react';
import { Outlet } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import IFCart from './IFCart';
import Breadcrumb from '../../components/other/Breadcrumb';

const Pay: React.FC<{}> = () => {
  return (
    <MainLayout>
      <Breadcrumb />
      <div className="pt-[44px]"></div>
      <div className="flex flex-row justify-between w-full">
        <div className="w-full max-w-[995px]">
          <Outlet />
        </div>
        <IFCart />
      </div>
      <div className="pt-[44px]"></div>
    </MainLayout>
  );
};

export default Pay;
