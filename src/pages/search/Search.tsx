import React, { useState } from 'react';
import MainLayout from '../../layout/MainLayout';
import { Breadcrumb, Loading } from '../../components';
import { useParams } from 'react-router-dom';
import { useGetAllProductsByTypeQuery } from '../../service/product';
import CardItem from '../../components/listproduct/CardItem';

const Search: React.FC<{}> = () => {
  const [filter, setFilter] = useState<string>('');
  const { type } = useParams<{ type: string }>();
  const { data, error, isLoading, isFetching } = useGetAllProductsByTypeQuery(
    type!,
  );
  if (isFetching) {
    return <Loading />;
  }

  return (
    <MainLayout>
      <Breadcrumb name={type} />
      <div className="border-[2px] border-[#004D40] font-medium text-[18px] py-[21px] px-[32px] rounded-[10px] mt-[41px] mb-[37px] ">
        Tìm thấy {data?.data.length} sản phẩm với từ khóa "{type}"
      </div>
      <div className="flex flex-row md:justify-between justify-center items-center w-full md:px-0 px-[10px] mb-[23px]">
        <p className="text-[#004D40] font-medium lg:text-[32px] md:text-[24px] md:block hidden">
          Danh sách sản phẩm
        </p>
        <div className="flex md:flex-row flex-col items-center gap-[15px]">
          <p className="lg:text-[24px] md:text-[18px] text-[24px] font-medium">
            Sắp xếp theo
          </p>

          <button
            onClick={() => setFilter((e) => (e = 'low'))}
            style={{
              background: filter === 'low' ? '#004D40' : '#fff',
              color: filter === 'low' ? '#fff' : '#004D40',
              border: filter === 'low' ? 'none' : '2px solid #004D40',
            }}
            className="lg:text-[18px] md:text-[14px] text-[18px] font-medium w-full min-w-[120px] max-w-[120px] py-[10px] px-[15px] rounded-[10px]"
          >
            Giá thấp
          </button>
          <button
            onClick={() => setFilter((e) => (e = 'high'))}
            style={{
              background: filter === 'high' ? '#004D40' : '#fff',
              color: filter === 'high' ? '#fff' : '#004D40',
              border: filter === 'high' ? 'none' : '2px solid #004D40',
            }}
            className="lg:text-[18px] md:text-[14px] text-[18px] font-medium w-full min-w-[120px] max-w-[120px] py-[10px] px-[15px] border-[2px] rounded-[10px]"
          >
            Giá cao
          </button>
        </div>
      </div>
      <div className="bg-[#fff] flex flex-row flex-wrap justify-center p-[20px] gap-[20px]">
        {filter == 'high' &&
          data?.data
            .slice()
            .sort((a, b) => Number(b.price) - Number(a.price))
            .map((e) => <CardItem key={e.id} data={e} />)}
        {filter == 'low'
          ? data?.data
              .slice()
              .sort((a, b) => Number(a.price) - Number(b.price))
              .map((e) => <CardItem key={e.id} data={e} />)
          : data?.data.map((e) => <CardItem key={e.id} data={e} />)}
      </div>
      <div className="pb-[20px]"></div>
    </MainLayout>
  );
};

export default Search;
