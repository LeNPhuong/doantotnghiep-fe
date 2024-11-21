import React from 'react';
import { IFProductOrder } from '../../../../../types/AdminType';
import ChangeCurrentcy from '../../../../../ultils/ChangeCurrentcy';

const ItemDetails: React.FC<{ data: IFProductOrder }> = ({ data }) => {
  return (
    <div className="w-full font-semibold flex flex-row justify-between items-center px-[30px] py-[10px] border-b-[1px] border-b-[#ccc]">
      <div className="flex flex-row">
        <img
          className="w-full md:min-h-[80px] md:max-w-[80px] min-h-[50px] max-w-[50px] mr-[23px] rounded-[8px]"
          src={data?.product?.img}
          alt=""
        />
        <div className="flex flex-col text-[16px]">
          <p className="">{data?.product?.name}</p>
          <p className="">x{data?.quantity}</p>
        </div>
      </div>
      <p className="text-[18px] text-[#004D40]">
        {ChangeCurrentcy(data?.price * data?.quantity)}
      </p>
    </div>
  );
};

export default ItemDetails;
