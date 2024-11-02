import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ItemsOrther: React.FC<{}> = () => {
  return (
    <div className="w-full lg:mb-[30px] md:mb-[15px] mb-[10px] md:px-0 px-[10px]">
      <div className="shadow-[0_0_3px_rgba(0,0,0,0.25)] rounded-[10px] md:pb-[30px] pb-[15px] xl:!text-[18px] md:!text-[13px] !text-[12px]">
        <div className="flex justify-between items-center xl:rounded-t-[10px] xl:roundedt-[5px] xl:min-h-[58px] md:min-h-[40px] min-h-[40px] px-[29px] font-semibold border-b-[1px] border-b-[rgba(0,0,0,0.1)] mb-[17px]">
          <div className="flex flex-wrap md:gap-[11px] gap-[5px] py-[5px] md:py-[10px]">
            <div className="font-semibold border-r-[2px] border-r-[#ccc] pr-[5px]">Đơn hàng 10/08/2024</div>
            <div className="text-[rgba(0,0,0,0.6)] border-r-[2px] border-r-[#ccc] pr-[5px]"> Nhận tại cửa hàng</div>
            <div className="text-[rgba(0,0,0,0.6)] border-r-[2px] border-r-[#ccc] pr-[5px]">#0000001</div>
          </div>
          <div className="text-[#039855] whitespace-nowrap">● Đã giao</div>
        </div>

        <div className="flex flex-row xl:px-[28px] md:px-[16px] px-[10px] mb-[12px]">
          {/* col1 */}
          <div className="flex flex-col xl:mr-[28px] md:mr-[14px] mr-[10px]">
            <div className="xl:max-w-[97px] xl:min-h-[105px] md:max-w-[77px] md:min-h-[77px] max-w-[70px] min-h-[70px]">
              <img
                className="w-full rounded-lg"
                src="https://i.pinimg.com/enabled_lo/236x/d5/d4/bb/d5d4bb7e8a83e3cc20f3383e4ca3e5c7.jpg"
                alt=""
              />
            </div>
          </div>
          {/* col2 */}
          <div className="flex-[1_1_0] flex flex-col">
            <p className="font-semibold mb-[8px]">
              Hamberger bò siêu ngon promax vị gà hoa quả biển xanh
            </p>
            <p className="font-semibold text-[rgba(8,8,8,0.6)]">
              + 2 sản phẩm khác
            </p>
          </div>
          {/* col3 */}
          <div className="flex flex-row xl:gap-[41px] lg:gap-[15px] gap-[10px]">
            <div className="font-semibold flex flex-col xl:gap-[8px] lg:gap-[4px]">
              <p>1.000.000 đ</p>
              <p className="text-[rgba(0,0,0,0.6)] line-through">1.999.000 đ</p>
            </div>
            <p className="font-semibold text-[#8a8484] ">x 1 kg</p>
          </div>
        </div>
        <Link
          to="chi-tiet/1"
          className="text-[#05E077] font-semibold flex items-center gap-[8px] xl:ml-[28px] md:px-[16px] px-[10px]"
        >
          Xem chi tiết <FaAngleRight />
        </Link>

        <div className="flex flex-row justify-end xl:mr-[28px] md:mr-[16px] mr-[10px] font-semibold lg:gap-[17px] md:gap-[15px] gap-[10px]">
          <span className="text-[rgba(0,0,0,0.6)]">Thành tiền:</span>{' '}
          <span className="text-[#05E077] font-semibold">1.000.000 đ</span>
        </div>
      </div>
    </div>
  );
};

export default ItemsOrther;
