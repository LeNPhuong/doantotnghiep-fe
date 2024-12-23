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
                    key={e.id}
                    className="flex flex-row justify-center items-center"
                  >
                    <CardItem key={e.id} data={e} />
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
              (e) =>
                e.category.key === filter && (
                  <SwiperSlide
                    key={e.id}
                    className="flex flex-row justify-center items-center"
                  >
                    <CardItem key={e.id} data={e} />
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
