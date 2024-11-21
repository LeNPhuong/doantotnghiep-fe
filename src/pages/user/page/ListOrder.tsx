import React from 'react';
import ItemsOrther from './ItemsOrther';
import { useGetOrderQuery } from '../../../service/profile';
import { LoadingModal } from '../../../components';

const ListOrder: React.FC<{}> = () => {
  const { data, isFetching } = useGetOrderQuery();

  if (isFetching) return <LoadingModal />;

  return (
    <div>
      {data?.data && data.data.map((e) => <ItemsOrther key={e.id} data={e} />)}
    </div>
  );
};

export default ListOrder;
