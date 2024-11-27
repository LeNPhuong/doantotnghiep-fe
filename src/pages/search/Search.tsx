import React, { useEffect, useState } from 'react';
import MainLayout from '../../layout/MainLayout';
import { Breadcrumb, Loading } from '../../components';
import { useParams } from 'react-router-dom';
import { useGetAllProductsByTypeMutation } from '../../service/product';
import CardItem from '../../components/listproduct/CardItem';
import { IFProduct } from '../../types/IFProducts';

const Search: React.FC<{}> = () => {
  const [data, setData] = useState<null | IFProduct[]>(null);
  const [filter, setFilter] = useState<string>('');
  const { type } = useParams<{ type: string }>();
  const [getType, { isLoading }] = useGetAllProductsByTypeMutation();

  useEffect(() => {
    getType(type!)
      .unwrap()
      .then((data) => {
        setData(data.data);
      })
      .catch(() => {
        setData(null);
      });
  }, [type]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <MainLayout>
      <Breadcrumb name={type?.toUpperCase()} />
      {data === null ? (
        ''
      ) : (
        <div className="border-[2px] border-[#004D40] font-medium text-[18px] py-[21px] px-[32px] rounded-[10px] mt-[41px] mb-[37px] ">
          Tìm thấy {data?.length} sản phẩm với từ khóa "{type}"
        </div>
      )}

      <div className="flex flex-row md:justify-between justify-center items-center w-full md:px-0 px-[10px] mb-[23px] mt-[20px]">
        <p className="text-[#004D40] font-medium lg:text-[32px] md:text-[24px] md:block hidden">
          Danh sách sản phẩm
        </p>
        <div className="flex md:flex-row flex-col items-center gap-[15px]">
          <p className="lg:text-[24px] md:text-[18px] text-[24px] font-medium">
            Sắp xếp theo
          </p>

          <button
            onClick={() => setFilter('low')}
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
            onClick={() => setFilter('high')}
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
      <div className="bg-[#fff] flex flex-row flex-wrap p-[20px] gap-[20px]">
        {data !== null &&
          filter == 'high' &&
          data
            .slice()
            .sort((a, b) => Number(b.price) - Number(a.price))
            .map((e) => <CardItem key={e.id} data={e} />)}

        {data !== null && filter == 'low'
          ? data
              .slice()
              .sort((a, b) => Number(a.price) - Number(b.price))
              .map((e) => <CardItem key={e.id} data={e} />)
          : data?.map((e) => <CardItem key={e.id} data={e} />)}

        {data === null && (
          <p className="text-[18px] text-center w-full">
            Không tìm thấy sản phẩm với từ khoá {type}
          </p>
        )}
      </div>
      <div className="pb-[500px]"></div>
    </MainLayout>
  );
};

export default Search;
