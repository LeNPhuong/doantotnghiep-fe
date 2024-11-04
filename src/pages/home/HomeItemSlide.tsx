import React from 'react';
import { SwiperSlide } from 'swiper/react';
import CardItem from '../../components/listproduct/CardItem';
import { IFProduct } from '../../types/IFProducts';

const HomeItemSlide: React.FC<{
  data: IFProduct;
}> = ({ data }) => {
  return (
    <SwiperSlide className="flex flex-row justify-center items-center">
      <CardItem data={data} />
    </SwiperSlide>
  );
};

export default HomeItemSlide;
