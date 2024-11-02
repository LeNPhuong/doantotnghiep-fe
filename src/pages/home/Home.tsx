import React from 'react';
import HomeSlide from './HomeSlide';
import MainLayout from '../../layout/MainLayout';
import { BoxBanner } from '../../components';
import HomeListMenu from './HomeListMenu';
import {
  BannerImg1,
  BannerImg2,
  MiBn1,
  MiBn2,
  MilkBn1,
  PeopleLife1,
  Ricebn1,
  Ricebn2,
  Vegestable1,
  WaterSurgar1,
} from '../../assets/bannerproduct';
import { useGetProductsQuery } from '../../service/product';

import BoxVoucher from './BoxVoucher';

import HomeListItemProduct from './HomeListItemProduct';

const Home: React.FC<object> = () => {
  const { data } = useGetProductsQuery();

  return (
    <div className="">
      <HomeSlide />
      <MainLayout>
        <BoxBanner img1={BannerImg1} img2={BannerImg2} size="49%" />

        <HomeListMenu />
        <div className="md:mt-[28px] mt-[10px]"></div>
        <div className="md:mt-[28px] mt-[10px]"></div>

        <HomeListItemProduct
          filter={null}
          label="SẢN PHẨM HOT"
          data={data?.data}
        />

        <div className="md:mt-[28px] mt-[10px]"></div>
        <BoxBanner img1={MiBn1} img2={MiBn2} size="48%" />
        <div className="md:mt-[48px] mt-[10px]"></div>

        <HomeListItemProduct
          filter="mi-mien"
          label="MÌ GÓI"
          data={data?.data}
          moreLink="6"
        />

        <div className="md:mt-[48px] mt-[10px]"></div>

        <BoxBanner img1={MilkBn1} size="100%" />
        <div className="md:mt-[48px] mt-[10px]"></div>

        <HomeListItemProduct
          filter="sua"
          label="SỮA HỘP"
          data={data?.data}
          moreLink="4"
        />

        <div className="md:mt-[48px] mt-[10px]"></div>

        <BoxBanner img1={Vegestable1} size="100%" />
        <div className="md:mt-[48px] mt-[10px]"></div>

        <HomeListItemProduct
          filter="rau-cu"
          label="RAU CỦ XANH TƯƠI"
          data={data?.data}
          moreLink="1"
        />

        <div className="md:mt-[48px] mt-[10px]"></div>

        <BoxBanner img1={Ricebn1} img2={Ricebn2} size="48%" />
        <div className="md:mt-[48px] mt-[10px]"></div>

        <HomeListItemProduct
          filter="gao-bot"
          label="GẠO SẠCH"
          data={data?.data}
          moreLink="3"
        />

        <div className="md:mt-[48px] mt-[10px]"></div>

        <BoxBanner img1={WaterSurgar1} size="100%" />
        <div className="md:mt-[48px] mt-[10px]"></div>

        <HomeListItemProduct
          filter="nuoc-uong"
          label="NƯỚC NGỌT CÁC LOẠI"
          data={data?.data}
          moreLink="8"
        />

        <div className="md:mt-[48px] mt-[10px]"></div>

        <BoxBanner img1={PeopleLife1} size="100%" />
        <div className="md:mt-[48px] mt-[10px]"></div>

        <HomeListItemProduct
          filter="do-dung"
          label="đồ dùng gia đình"
          data={data?.data}
          moreLink="7"
        />

        <BoxVoucher />
        <div className="md:pb-[50px] pb-[20px]"></div>
      </MainLayout>
    </div>
  );
};

export default Home;
