import React from 'react';
import ItemOrderDetails from './ItemOrderDetails';
import InforOrderDetails from './InforOrderDetails';

const DetailsOrder: React.FC<object> = () => {
  return (
    <>
      <div className="flex-col bg-[#004D40] md:py-[30px] py-[15px] md:px-[27px] px-[10px] md:rounded-t-[8px]">
        <h2 className="text-[#DDF16E] xl:text-[40px] md:text-[24px] text-[26px] font-medium">
          Đơn hàng hoàn thành
        </h2>
        <div className="flex justify-between items-center flex-wrap text-white">
          <p className="xl:text-[24px] md:text-[18px] text-[20px] font-medium">
            Mã đơn hàng: #2222888
          </p>
          <p className="xl:text-[18px] md:text-[14px] text-[16px] font-medium">
            Hoàn thành ngày 28/10/2024.
          </p>
        </div>
      </div>

      <div className="w-full shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-b-[8px] pb-[20px]">
        <ItemOrderDetails />
        <InforOrderDetails />
      </div>
    </>
  );
};

export default DetailsOrder;
