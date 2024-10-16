import React from 'react';
import MainLayout from '../../layout/MainLayout';
import CategoriesListMenu from './CategoriesListMenu';
import CategoriesListProduct from './CategoriesListProduct';
import { Breadcrumb, PaginationCpn } from '../../components';

const DetailsCategories: React.FC<{}> = () => {
  return (
    <MainLayout>
      <Breadcrumb />
      <div className="mt-[28px]"></div>
      <CategoriesListMenu />
      <div className="mt-[28px]"></div>
      <CategoriesListProduct />
      <div className="flex flex-row justify-center items-center min-h-[67px] max-h-[67px] w-full shadow-[0_0_4px_rgba(0,0,0,0.25)] mt-[19px] mb-[44px]">
        <PaginationCpn />
      </div>
    </MainLayout>
  );
};

export default DetailsCategories;
