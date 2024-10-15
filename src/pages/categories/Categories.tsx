import React from 'react';
import Breadcrumb from '../../components/other/Breadcrumb';
import MainLayout from '../../layout/MainLayout';
import CategoriesListMenu from './CategoriesListMenu';
import { ListProduct } from '../../components';
import ListProductCategories from './ListProductCategories';

const Categories: React.FC<{}> = () => {
  return (
    <MainLayout>
      <Breadcrumb />
      <div className="mt-[28px]"></div>
      <CategoriesListMenu />
      <div className="mt-[53px]"></div>
      <ListProduct name="MÌ GÓI" time={false} more={false} />
      <div className="mt-[80px]"></div>
      <ListProductCategories />
      <div className='pb-[193px]'></div>
    </MainLayout>
  );
};

export default Categories;
