import React, { useEffect, useState } from 'react';
import MainLayout from '../../layout/MainLayout';
import CategoriesListMenu from './CategoriesListMenu';
import CategoriesListProduct from './CategoriesListProduct';
import { Breadcrumb, Loading, PaginationCpn } from '../../components';
import { useGetAllProductByCategoriesQuery } from '../../service/product';
import { useParams } from 'react-router-dom';

const DetailsCategories: React.FC<{}> = () => {
  const [probe, setProbe] = useState<boolean>(false);
  const { category } = useParams<{ category: string }>();

  useEffect(() => {
    setProbe((e) => !e);
  }, [category]);

  const { data, error, isFetching, isLoading } =
    useGetAllProductByCategoriesQuery(category!);

  if (isFetching) {
    return <Loading />;
  }

  if (data == null) {
    return 'Hahaha';
  }

  return (
    <MainLayout>
      <Breadcrumb name={data?.data[0].category.name} />
      <div className="mt-[28px]"></div>
      <CategoriesListMenu data={data?.data[0].category.name} />
      <div className="mt-[28px]"></div>
      <CategoriesListProduct data={data.data} />
      <div className="flex flex-row justify-center items-center min-h-[67px] max-h-[67px] w-full shadow-[0_0_4px_rgba(0,0,0,0.25)] mt-[19px] mb-[44px]">
        <PaginationCpn />
      </div>
    </MainLayout>
  );
};

export default DetailsCategories;
