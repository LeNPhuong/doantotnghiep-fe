import React from 'react';
import { ListProduct } from '../../components';
import { IFProduct } from '../../types/IFProducts';
import { SwiperSlide } from 'swiper/react';
import SkelontonItem from '../../components/other/SkelontonItem';
import CardItem from '../../components/listproduct/CardItem';

const HomeListItemProduct: React.FC<{
  label: string;
  data: IFProduct[] | undefined;
  filter: string | null | undefined;
  moreLink?: string;
}> = ({ label, data, filter, moreLink }) => {
  if (!filter) {
    return (
      <ListProduct name={label}>
        {data
          ? data.map(
              (e, index) =>
                index < 20 && (
                  <SwiperSlide
                    key={index}
                    className="flex flex-row justify-center items-center"
                  >
                    <CardItem key={index} data={e} />
                  </SwiperSlide>
                ),
            )
          : Array.from({ length: 10 }, (_, e) => (
              <SwiperSlide key={e}>
                <SkelontonItem />
              </SwiperSlide>
            ))}
      </ListProduct>
    );
  } else {
    return (
      <ListProduct name={label} moreLink={moreLink}>
        {data
          ? data.map(
              (e, index) =>
                e.category.key === filter &&
                index < 20 && (
                  <SwiperSlide
                    key={index}
                    className="flex flex-row justify-center items-center"
                  >
                    <CardItem key={index} data={e} />
                  </SwiperSlide>
                ),
            )
          : Array.from({ length: 10 }, (_, e) => (
              <SwiperSlide key={e}>
                <SkelontonItem />
              </SwiperSlide>
            ))}
      </ListProduct>
    );
  }
};

export default HomeListItemProduct;
