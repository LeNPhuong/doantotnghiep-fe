import React from 'react';
import { HandledProduct } from '../../../types/IFProducts';
import ChangeCurrentcy from '../../../ultils/ChangeCurrentcy';

const ItemOrderDetails: React.FC<{ data: HandledProduct }> = ({ data }) => {
  return (
    <div className="w-full font-semibold flex flex-row justify-between items-center md:px-[35px] px-[10px] md:py-[41px] py-[10px] border-b-[1px] border-b-[#ccc]">
      <div className="flex flex-row">
        <img
          className="w-full md:min-h-[100px] md:max-w-[100px] min-h-[70px] max-w-[70px] mr-[23px] rounded-[8px]"
          src={data.product.img}
          alt=""
        />
        <div className="flex flex-col md:text-[18px]">
          <p className="">{data.product.name}</p>
          <p className="">x{data.quantity}</p>
        </div>
      </div>
      <p className="md:text-[24px] text-[#004D40]">
        {ChangeCurrentcy(data.price * data.quantity)}
      </p>
    </div>
  );
};

export default ItemOrderDetails;
