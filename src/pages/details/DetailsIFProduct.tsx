import React from 'react';
import DetailsControlQtt from './DetailsControlQtt';
import DetailsBuyBtn from './DetailsBuyBtn';

const DetailsIFProduct: React.FC<{}> = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-[28px] font-medium mb-[15px]">
        Dưa hấu ruột đỏ trái 2kg-2.2kg
      </h1>
      <div className="flex flex-row items-center gap-[20px]">
        <p className="text-[32px] font-medium text-[#FF0000]">25.000đ</p>
        <p className="text-[#D3ABAB] line-through text-[16px] relative">
          37.400₫
          <div className="absolute top-[50%] translate-y-[-50%] bg-[#FF0000] max-w-[28px] min-w-[36px] min-h-[20px] max-h-[13px] left-[100%] ml-[12px] text-[12px] font-semibold text-[#fff] text-center leading-[20px] rounded-[5px]">
            18%
          </div>
        </p>
      </div>
      <div className="mt-[22px]"></div>
      <p className="text-[24px] font-semibold mb-[72px]">
        Số lượng còn lại: 9000 cái
      </p>
      <DetailsControlQtt />
      <div className="mt-[22px]"></div>
      <DetailsBuyBtn />
    </div>
  );
};

export default DetailsIFProduct;
