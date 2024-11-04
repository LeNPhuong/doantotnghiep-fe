import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import { SlideImg1, SlideImg2, SlideImg3, SlideImg4 } from '../../assets/img';
import styled from 'styled-components';

const BoxSlide = styled.div`
  .swiper-button-prev,
  .swiper-button-next {
    width: 59px !important;
    height: 130px !important;
    font-size: 13px !important;
    color: #004d40;
    background: rgba(221, 241, 110, 0.5);
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
    font-size: 14px;
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

  @media (max-width: 1200px) {
    .swiper-button-prev,
    .swiper-button-next {
      width: 29px !important;
      height: 80px !important;
      font-size: 13px !important;
      color: #004d40;
      background: rgba(221, 241, 110, 0.5);
    }
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
    .swiper-pagination-bullet {
      width: 8px !important;
      height: 8px !important;
      background: #034c3f !important;
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background: #ddf16e !important;
    }
  }
`;

const HomeSlide: React.FC<{}> = () => {
  return (
    <BoxSlide>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="">
            <img src={SlideImg1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img src={SlideImg2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img src={SlideImg3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img src={SlideImg4} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </BoxSlide>
  );
};

export default HomeSlide;
