import React from 'react';
import { Voucher } from '../../components';

const BoxVoucher: React.FC<{}> = () => {
  return (
    <div className="w-full flex xl:flex-row xl:justify-between justify-center items-center flex-wrap my-[20px] xl:gap-[0px] gap-[10px]">
      <Voucher />
      <Voucher />
      <Voucher />
    </div>
  );
};

export default BoxVoucher;
