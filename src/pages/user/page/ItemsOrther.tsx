import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ListOrder } from '../../../types/IFProducts';
import ChangeCurrentcy from '../../../ultils/ChangeCurrentcy';
import { ChangeDate } from '../../../ultils/ChangeDate';

const ItemsOrther: React.FC<{ data: ListOrder }> = ({ data }) => {
  return (
    <div className="w-full lg:mb-[30px] md:mb-[15px] mb-[10px] md:px-0 px-[10px]">
      <div className="shadow-[0_0_3px_rgba(0,0,0,0.25)] rounded-[10px] md:pb-[30px] pb-[15px] xl:!text-[18px] md:!text-[13px] !text-[12px]">
        <div className="flex justify-between items-center xl:rounded-t-[10px] xl:roundedt-[5px] xl:min-h-[58px] md:min-h-[40px] min-h-[40px] px-[29px] font-semibold border-b-[1px] border-b-[rgba(0,0,0,0.1)] mb-[17px]">
          <div className="flex flex-wrap md:gap-[11px] gap-[5px] py-[5px] md:py-[10px]">
            <div className="font-semibold border-r-[2px] border-r-[#ccc] pr-[5px]">
              Đơn hàng {ChangeDate(data.created_at)}
            </div>
            <div className="text-[rgba(0,0,0,0.6)] border-r-[2px] border-r-[#ccc] pr-[5px]">
              {' '}
              Nhận tại cửa hàng
            </div>
            <div className="text-[rgba(0,0,0,0.6)] border-r-[2px] border-r-[#ccc] pr-[5px]">
              #{data.code}
            </div>
          </div>
          <div className="text-[#039855] whitespace-nowrap">
            ● {data.status.text_status}
          </div>
        </div>

        <div className="flex flex-row xl:px-[28px] md:px-[16px] px-[10px] mb-[12px]">
          {/* col1 */}
          <div className="flex flex-col xl:mr-[28px] md:mr-[14px] mr-[10px]">
            <div className="xl:max-w-[97px] xl:min-h-[105px] md:max-w-[77px] md:min-h-[77px] max-w-[70px] min-h-[70px]">
              <img
                className="w-full rounded-lg"
                src={data.order_details[0].product.img}
                alt=""
              />
            </div>
          </div>
          {/* col2 */}
          <div className="flex-[1_1_0] flex flex-col">
            <p className="font-semibold mb-[8px]">
              {data.order_details[0].product.name}
            </p>
            <p className="font-semibold text-[rgba(8,8,8,0.6)]">
              + {data.order_details.length - 1} sản phẩm khác
            </p>
          </div>
          {/* col3 */}
          <div className="flex flex-row xl:gap-[41px] lg:gap-[15px] gap-[10px]">
            <div className="font-semibold flex flex-col xl:gap-[8px] lg:gap-[4px]">
              <p>{ChangeCurrentcy(data.order_details[0].price)}</p>
              <p className="text-[rgba(0,0,0,0.6)] line-through">
                {ChangeCurrentcy(
                  Number.parseInt(data.order_details[0].product.price),
                )}
              </p>
            </div>
            <p className="font-semibold text-[#8a8484] ">
              x {data.order_details[0].quantity}
            </p>
          </div>
        </div>
        <Link
          to={`chi-tiet/${data.code.toLowerCase()}`}
          className="text-[#05E077] font-semibold flex items-center gap-[8px] xl:ml-[28px] md:px-[16px] px-[10px]"
        >
          Xem chi tiết <FaAngleRight />
        </Link>

        <div className="flex flex-row justify-end xl:mr-[28px] md:mr-[16px] mr-[10px] font-semibold lg:gap-[17px] md:gap-[15px] gap-[10px]">
          <span className="text-[rgba(0,0,0,0.6)]">Thành tiền:</span>{' '}
          <span className="text-[#05E077] font-semibold">
            {ChangeCurrentcy(data.total_price)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemsOrther;
