import React, { ReactNode } from 'react';
import LabelName from './LabelName';

import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BoxProduct = styled.div`
  .swiper-button-prev,
  .swiper-button-next {
    width: 45px !important;
    height: 45px !important;
    font-size: 50px !important;
    color: #ffffff;
    background: #f9b618;
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
    font-size: 18px;
    font-weight: 700;
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
  .swiper {
    position: unset;
  }
  @media (max-width: 500px) {
    .swiper-button-prev,
    .swiper-button-next {
      width: 30px !important;
      height: 30px !important;
      color: #ffffff;
      background: #f9b618;
    }

    .swiper-button-prev:after,
    .swiper-button-next:after {
      font-size: 12px;
      font-weight: 700;
    }
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }
`;

const ListProduct: React.FC<{
  name: string;
  children: ReactNode;
  moreLink?: string;
}> = ({ name, children, moreLink }) => {
  return (
    <>
      {name?.length != 0 && <LabelName name={name} />}
      <div className="pt-[15px]"></div>
      <BoxProduct>
        <div className="w-full bg-[#fff] relative shadow-[0_0_5px_rgba(0,0,0,0.25)] py-[20px]">
          <Swiper
            loop={true}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              1280: {
                slidesPerView: 5,
              },
              768: {
                slidesPerView: 4,
              },
              500: {
                slidesPerView: 3,
              },
              100: {
                slidesPerView: 2,
              },
            }}
            className="mySwiper md:!max-w-[1310px] !max-w-[800px] flex flex-row justify-center items-center overflow-x-hidden py-[2px] !gap-[5px]"
          >
            {children}
          </Swiper>

          {moreLink && (
            <Link
              className="capitalize py-[20px] text-[#014C3E] block text-center text-[20px] font-bold w-full h-full mx-auto"
              to={`/danh-muc/${moreLink}`}
            >
              xem thêm
            </Link>
          )}
        </div>
      </BoxProduct>
    </>
  );
};

export default ListProduct;
