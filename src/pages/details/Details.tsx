import React from 'react';
import MainLayout from '../../layout/MainLayout';
import Breadcrumb from '../../components/other/Breadcrumb';
import { ListProduct } from '../../components';
import DetailsImage from './DetailsImage';
import DetailsIFProduct from './DetailsIFProduct';
import DetailsDes from './DetailsDes';

const Details: React.FC<{}> = () => {
  return (
    <MainLayout>
      <Breadcrumb />
      <div className="mt-[33px]"></div>
      <div className="w-full flex flex-row shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#fff] pl-[16px]">
        <div className="w-full max-w-[839px] border-r-[1px] border-r-[#E0BABA] flex flex-row py-[26px]">
          <DetailsImage />
          <DetailsIFProduct />
        </div>
        <DetailsDes />
      </div>
      <div className="pt-[33px]"></div>
      <div className="min-h-[44px] bg-[#004D40] text-[#DDF16E] text-center text-[16px] font-semibold leading-[44px]">
        Sản phẩm tương tự
      </div>
      <ListProduct name="" />
      <div className="pt-[257px]"></div>
    </MainLayout>
  );
};

export default Details;
