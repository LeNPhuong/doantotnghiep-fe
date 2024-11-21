import React from 'react';
import DetailsBuyBtn from './DetailsBuyBtn';
import { IFProduct } from '../../types/IFProducts';
import ChangeCurrentcy from '../../ultils/ChangeCurrentcy';

const DetailsIFProduct: React.FC<{ data: IFProduct | undefined }> = ({
  data,
}) => {
  return (
    <div className="flex flex-col md:mt-0 mt-[20px]">
      <h1 className="md:text-[28px] text-[24px] font-medium md:mb-[15px] mb-[6px]">
        {data?.name}
      </h1>
      <div className="flex flex-row items-center md:gap-[20px] gap-[5px] md:mb-[22px] mb-[10px]">
        <p className="lg:text-[32px] md:text-[22px] text-[16px] font-medium text-[#FF0000]">
          {ChangeCurrentcy(
            Number(data?.price) -
              (Number(data?.price) * Number(data?.sale)) / 100,
          )}
        </p>
        <div className="text-[#D3ABAB] line-through md:text-[16px] text-[10px] relative">
          {ChangeCurrentcy(Number(data?.price))}
          <div className="absolute top-[50%] translate-y-[-50%] bg-[#FF0000] max-w-[28px] min-w-[28px] min-h-[20px] max-h-[20px] left-[100%] ml-[12px] text-[12px] font-semibold text-[#fff] text-center leading-[20px] rounded-[5px]">
            {data?.sale}%
          </div>
        </div>
      </div>

      <p className="md:text-[24px] text-[18px] font-medium xl:mb-[72px] mb-[20px]">
        Số lượng còn lại: {data?.quantity} cái
      </p>

      <DetailsBuyBtn data={data!} />
    </div>
  );
};

export default DetailsIFProduct;
