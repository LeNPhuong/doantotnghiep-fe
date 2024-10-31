import React from 'react';
import HomeSlide from './HomeSlide';
import MainLayout from '../../layout/MainLayout';
import { BoxBanner, ListProduct, Loading } from '../../components';
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
import { SwiperSlide } from 'swiper/react';
import CardItem from '../../components/listproduct/CardItem';
import BoxVoucher from './BoxVoucher';

const Home: React.FC<{}> = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (data == null) {
    return 'Hahaha';
  }

  console.log(data);

  return (
    <div className="">
      <HomeSlide />
      <MainLayout>
        <BoxBanner img1={BannerImg1} img2={BannerImg2} size="49%" />

        <HomeListMenu />
        <div className="md:mt-[28px] mt-[10px]"></div>
        <div className="md:mt-[28px] mt-[10px]"></div>

        <ListProduct name="SẢN PHẨM HOT">
          {data.data.map(
            (e, index) =>
              index < 20 && (
                <SwiperSlide className="flex flex-row justify-center items-center">
                  <CardItem key={index} data={e} />
                </SwiperSlide>
              ),
          )}
        </ListProduct>

        <div className="md:mt-[28px] mt-[10px]"></div>
        <BoxBanner img1={MiBn1} img2={MiBn2} size="48%" />
        <div className="md:mt-[48px] mt-[10px]"></div>

        <ListProduct name="MÌ GÓI" moreLink="6">
          {data.data.map(
            (e, index) =>
              e.category.key === 'mi-mien' &&
              index < 20 && (
                <SwiperSlide className="flex flex-row justify-center items-center">
                  <CardItem key={index} data={e} />
                </SwiperSlide>
              ),
          )}
        </ListProduct>

        <div className="md:mt-[48px] mt-[10px]"></div>

        <BoxBanner img1={MilkBn1} size="100%" />
        <div className="md:mt-[48px] mt-[10px]"></div>

        <ListProduct name="SỮA HỘP" moreLink="4">
          {data.data.map(
            (e, index) =>
              e.category.key === 'sua' &&
              index < 20 && (
                <SwiperSlide className="flex flex-row justify-center items-center">
                  <CardItem key={index} data={e} />
                </SwiperSlide>
              ),
          )}
        </ListProduct>

        <div className="md:mt-[48px] mt-[10px]"></div>

        <BoxBanner img1={Vegestable1} size="100%" />
        <div className="md:mt-[48px] mt-[10px]"></div>

        <ListProduct name="RAU CỦ XANH TƯƠI" moreLink="1">
          {data.data.map(
            (e, index) =>
              e.category.key === 'rau-cu' &&
              index < 20 && (
                <SwiperSlide className="flex flex-row justify-center items-center">
                  <CardItem key={index} data={e} />
                </SwiperSlide>
              ),
          )}
        </ListProduct>
        <div className="md:mt-[48px] mt-[10px]"></div>

        <BoxBanner img1={Ricebn1} img2={Ricebn2} size="48%" />
        <div className="md:mt-[48px] mt-[10px]"></div>

        <ListProduct name="GẠO SẠCH" moreLink="3">
          {data.data.map(
            (e, index) =>
              e.category.key === 'gao-bot' &&
              index < 20 && (
                <SwiperSlide className="flex flex-row justify-center items-center">
                  <CardItem key={index} data={e} />
                </SwiperSlide>
              ),
          )}
        </ListProduct>
        <div className="md:mt-[48px] mt-[10px]"></div>

        <BoxBanner img1={WaterSurgar1} size="100%" />
        <div className="md:mt-[48px] mt-[10px]"></div>

        <ListProduct name="NƯỚC NGỌT CÁC LOẠI" moreLink="8">
          {data.data.map(
            (e, index) =>
              e.category.key === 'nuoc-uong' &&
              index < 20 && (
                <SwiperSlide className="flex flex-row justify-center items-center">
                  <CardItem key={index} data={e} />
                </SwiperSlide>
              ),
          )}
        </ListProduct>
        <div className="md:mt-[48px] mt-[10px]"></div>

        <BoxBanner img1={PeopleLife1} size="100%" />
        <div className="md:mt-[48px] mt-[10px]"></div>

        <ListProduct name="đồ dùng gia đình" moreLink="7">
          {data.data.map(
            (e, index) =>
              e.category.key === 'do-dung' &&
              index < 20 && (
                <SwiperSlide className="flex flex-row justify-center items-center">
                  <CardItem key={index} data={e} />
                </SwiperSlide>
              ),
          )}
        </ListProduct>
        <BoxVoucher />
        <div className="md:pb-[50px] pb-[20px]"></div>
      </MainLayout>
    </div>
  );
};

export default Home;
