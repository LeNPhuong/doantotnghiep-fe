import React from 'react';
import { Voucher } from '../../components';
import { useGetAllVouchersQuery } from '../../service/product';

const BoxVoucher: React.FC<{}> = () => {
  const { data, isFetching } = useGetAllVouchersQuery();

  if (isFetching) {
    return <p className="text-center py-[20px]">Đang tải...</p>;
  }

  return (
    <div className="w-full flex xl:flex-row xl:justify-between justify-center items-center flex-wrap my-[20px] xl:gap-[0px] gap-[10px]">
      {data &&
        data.data.map(
          (data, index) => index < 3 && <Voucher key={index} data={data} />,
        )}
    </div>
  );
};

export default BoxVoucher;
