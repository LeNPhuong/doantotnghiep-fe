import React from 'react';
import { HandledProduct } from '../../../types/IFProducts';
import ChangeCurrentcy from '../../../ultils/ChangeCurrentcy';
import { checkTotalPriceRaw } from '../../../ultils/CheckPrice';

const ItemOrderDetails: React.FC<{ data: HandledProduct }> = ({ data }) => {
  return (
    <div className="w-full font-semibold flex flex-row justify-between items-center md:px-[35px] px-[10px] md:py-[41px] py-[10px] border-b-[1px] border-b-[#ccc]">
      {data.product ? (
        <>
          <div className="flex flex-row">
            <img
              className="w-full md:min-h-[100px] md:max-w-[100px] min-h-[70px] max-w-[70px] mr-[23px] rounded-[8px]"
              src={data?.product?.img}
              alt=""
            />
            <div className="flex flex-col md:text-[18px]">
              <p className="">{data?.product?.name}</p>
              <p className="">x{data?.quantity}</p>
            </div>
          </div>
          <p className="md:text-[24px] text-[#004D40]">
            {ChangeCurrentcy(
              checkTotalPriceRaw(
                Number(data?.product.price),
                data?.product.sale,
              ) * data.quantity,
            )}
          </p>
        </>
      ) : (
        <p className="text-red-500 font-semibold xl:px-[28px] md:px-[16px]">
          sản phẩm không còn bán !
        </p>
      )}
    </div>
  );
};

export default ItemOrderDetails;
