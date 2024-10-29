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
  time?: boolean;
  name: string;
  more?: string | boolean;
}> = ({ time = false, name, more = false }) => {
  return (
    <BoxProduct>
      <div className="w-full bg-[#fff] relative shadow-[0_0_4px_rgba(0,0,0,0.25)]">
        {name?.length != 0 && <LabelName name={name} />}
        {/* {time && <LabelTime />} */}
        {/* {name?.length > 0 && <SpaceBottom space={89} />} */}
        <div className="xl:pt-[89px] md:pt-[40px]"></div>
        <Swiper
          slidesPerView={5}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper flex flex-row justify-center items-center overflow-x-hidden py-[2px] gap-[5px]"
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
        <div className="md:pt-[10px] pt-[2px]"></div>
      </div>
      {more !== false && (
        <Link
          className="md:mt-[29px] mt-[5px] capitalize bg-[#004D40] text-[#fff] block xl:min-w-[150px] xl:max-w-[150px] xl:max-h-[50px] xl:min-h-[50px] xl:rounded-[10px] text-center xl:leading-[50px] xl:text-[16px] font-bold w-full h-full mx-auto md:min-w-[110px] md:max-w-[110px] md:max-h-[30px] md:min-h-[30px] md:rounded-[5px] md:leading-[30px] md:text-[12px] max-w-[40px] text-[5px] md:py-[0px] py-[3px] md:px-0"
          to={typeof more !== 'boolean' ? more : ''}
        >
          xem thêm
        </Link>
      )}
    </BoxProduct>
  );
};

export default ListProduct;
