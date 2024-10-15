import React from 'react';
import LabelName from './LabelName';
import LabelTime from './LabelTime';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import CardItem from './CardItem';
import SpaceBottom from '../other/SpaceBottom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BoxProduct = styled.div`
  .swiper-button-prev,
  .swiper-button-next {
    width: 23px !important;
    height: 125px !important;
    font-size: 13px !important;
    color: #004d40;
    background: rgba(169, 169, 169, 0.5);
  }

  .swiper-button-prev {
    left: 0;
    top: 50% !important;
    transform: translateY(-50%);
  }
  .swiper-button-next {
    right: 0;
    top: 50% !important;
    transform: translateY(-50%);
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 10px;
    font-weight: 900;
  }

  .swiper-pagination-bullet {
    width: 15px !important;
    height: 15px !important;
    background: #034c3f !important;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: #ddf16e !important;
  }
`;

const ListProduct: React.FC<{
  time: boolean;
  name: string;
  more: string | boolean;
}> = ({ time = false, name, more = false }) => {
  return (
    <BoxProduct>
      <div className="min-h-[470px] max-h-[470px] w-full bg-[#fff] relative shadow-[0_0_4px_rgba(0,0,0,0.25)]">
        <LabelName name={name} />
        {time && <LabelTime />}
        <SpaceBottom space={89} />
        <Swiper
          slidesPerView={5}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper min-h-[350px] max-h-[350px] flex flex-row justify-center items-center"
        >
          <SwiperSlide className="flex flex-row justify-center items-center">
            <CardItem />
          </SwiperSlide>
          <SwiperSlide className="flex flex-row justify-center items-center">
            <CardItem />
          </SwiperSlide>
          <SwiperSlide className="flex flex-row justify-center items-center">
            <CardItem />
          </SwiperSlide>
          <SwiperSlide className="flex flex-row justify-center items-center">
            <CardItem />
          </SwiperSlide>
          <SwiperSlide className="flex flex-row justify-center items-center">
            <CardItem />
          </SwiperSlide>
          <SwiperSlide className="flex flex-row justify-center items-center">
            <CardItem />
          </SwiperSlide>
        </Swiper>
      </div>
      {more !== false && (
        <Link
          className="mt-[29px] capitalize bg-[#004D40] text-[#fff] block min-w-[150px] max-w-[150px] max-h-[50px] min-h-[50px] rounded-[10px] text-center leading-[50px] text-[16px] font-bold w-full h-full mx-auto"
          to={typeof more !== 'boolean' ? more : ''}
        >
          xem thêm
        </Link>
      )}
    </BoxProduct>
  );
};

export default ListProduct;
