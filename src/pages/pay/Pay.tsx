import React from 'react';
import { Outlet } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import IFCart from './IFCart';
import Breadcrumb from '../../components/other/Breadcrumb';
import { useAppSelector } from '../../redux/store';

const Pay: React.FC<{}> = () => {
  const cartStore = useAppSelector((e) => e.cart.dataCart);
  return (
    <MainLayout>
      <Breadcrumb name='GIỎ HÀNG' />
      <div className="pt-[44px]"></div>
      <div className="flex lg:flex-row flex-col justify-between w-full lg:gap-0 gap-[20px]">
        <div className="w-full xl:max-w-[995px] lg:max-w-[850px]">
          <Outlet />
        </div>
        <IFCart data={cartStore!} />
      </div>
      <div className="pt-[100px]"></div>
    </MainLayout>
  );
};

export default Pay;
