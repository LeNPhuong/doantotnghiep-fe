import React from 'react';
import MainLayout from '../../layout/MainLayout';
import Breadcrumb from '../../components/other/Breadcrumb';
import { ListProduct, Loading } from '../../components';
import DetailsImage from './DetailsImage';
import DetailsIFProduct from './DetailsIFProduct';
import DetailsDes from './DetailsDes';
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
} from '../../service/product';
import { useParams } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import CardItem from '../../components/listproduct/CardItem';

const Details: React.FC<{}> = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: datamain,
    error: err1,
    isLoading: loading1,
  } = useGetProductByIdQuery(id!);

  const { data, error, isLoading } = useGetProductsQuery();

  if (loading1) {
    return <Loading />;
  }

  return (
    <MainLayout>
      <Breadcrumb name={datamain?.data?.name} />
      <div className="mt-[33px]"></div>
      <div className="w-full flex xl:flex-row flex-col shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#fff]">
        <div className="w-full max-w-[839px] xl:border-r-[1px] xl:border-r-[#E0BABA] flex md:flex-row flex-col py-[26px] pl-[16px] md:pr-[0px] pr-[16px]">
          <DetailsImage />
          <DetailsIFProduct data={datamain?.data} />
        </div>
        <DetailsDes data={datamain?.data} />
      </div>
      <div className="pt-[33px]"></div>
      {isLoading ? (
        <Loading />
      ) : (
        <ListProduct name="SẢN PHẨM TƯƠNG TỰ" more={false}>
          {data?.data.map(
            (e, index) =>
              e.category.key == datamain?.data.category.key && (
                <SwiperSlide className="flex flex-row justify-center items-center">
                  <CardItem key={index} data={e} />
                </SwiperSlide>
              ),
          )}
        </ListProduct>
      )}

      <div className="pt-[50px]"></div>
    </MainLayout>
  );
};

export default Details;
