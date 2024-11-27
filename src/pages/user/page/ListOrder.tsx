import React from 'react';
import ItemsOrther from './ItemsOrther';
import { useGetOrderQuery } from '../../../service/profile';
import { LoadingModal } from '../../../components';

const ListOrder: React.FC<{}> = () => {
  const { data, isFetching, isError } = useGetOrderQuery();

  if (isFetching) return <LoadingModal />;
  if (isError) return <p className='text-center text-[16px]'>Có lỗi xảy ra hoặc chưa có đơn hàng nào</p>;

  return (
    <div>
      {data?.data && data.data.map((e) => <ItemsOrther key={e.id} data={e} />)}
    </div>
  );
};

export default ListOrder;
