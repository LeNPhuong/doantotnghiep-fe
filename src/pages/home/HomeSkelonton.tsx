import React from 'react';
import { SwiperSlide } from 'swiper/react';
import SkelontonItem from '../../components/other/SkelontonItem';

const HomeSkelonton: React.FC<object> = () => {
  return Array.from({ length: 10 }, (_, e) => (
    <SwiperSlide key={e}>
      <SkelontonItem />
    </SwiperSlide>
  ));
};

export default HomeSkelonton;
