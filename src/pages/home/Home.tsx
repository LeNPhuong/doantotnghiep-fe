import React from 'react';
import HomeSlide from './HomeSlide';
import MainLayout from '../../layout/MainLayout';
import { BoxBanner, ListProduct, SpaceBottom } from '../../components';
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

const Home: React.FC<{}> = () => {
  return (
    <div className="">
      <HomeSlide />
      <MainLayout>
        <BoxBanner img1={BannerImg1} img2={BannerImg2} size="720px" />
        <HomeListMenu />
        <SpaceBottom space={48} />
        <ListProduct time={true} name="ĐANG KHUYỄN MÃI" more={false} />
        <SpaceBottom space={28} />
        <BoxBanner img1={MiBn1} img2={MiBn2} size="700px" />
        <SpaceBottom space={29} />
        <ListProduct time={false} name="MÌ GÓI" more="" />
        <SpaceBottom space={29} />
        <BoxBanner img1={MilkBn1} size="100%" />
        <SpaceBottom space={29} />
        <ListProduct time={false} name="SỮA HỘP" more="" />
        <SpaceBottom space={29} />
        <BoxBanner img1={Vegestable1} size="100%" />
        <SpaceBottom space={29} />
        <ListProduct time={false} name="RAU CỦ XANH TƯƠI" more="" />
        <SpaceBottom space={29} />
        <BoxBanner img1={Ricebn1} img2={Ricebn2} size="700px" />
        <SpaceBottom space={29} />
        <ListProduct time={false} name="GẠO SẠCH" more="" />
        <SpaceBottom space={29} />
        <BoxBanner img1={WaterSurgar1} size="100%" />
        <SpaceBottom space={29} />
        <ListProduct time={false} name="NƯỚC NGỌT CÁC LOẠI" more="" />
        <SpaceBottom space={29} />
        <BoxBanner img1={PeopleLife1} size="100%" />
        <SpaceBottom space={29} />
        <ListProduct time={false} name="đồ dùng gia đình" more="" />
        <SpaceBottom space={187} />
      </MainLayout>
    </div>
  );
};

export default Home;
