import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ItemsOrther: React.FC<{}> = () => {
  return (
    <div className="w-full mb-[30px]">
      <div className="shadow-[0_0_3px_rgba(0,0,0,0.25)] rounded-[10px] pb-[30px]">
        <div className="flex justify-between items-center rounded-t-[10px] min-h-[58px] max-h-[58px] px-[29px] text-[18px] font-semibold border-b-[1px] border-b-[rgba(0,0,0,0.1)] mb-[17px]">
          <div className="flex gap-[11px] items-center">
            <div className="font-semibold">Đơn hàng 10/08/2024</div>
            <div className="text-[rgba(0,0,0,0.6)]">●</div>
            <div className="text-[rgba(0,0,0,0.6)]"> Nhận tại cửa hàng</div>
            <div className="text-[rgba(0,0,0,0.6)]">●</div>

            <div className="text-[rgba(0,0,0,0.6)]">#0000001</div>
          </div>
          <div className="text-[#039855]">● Đã giao</div>
        </div>

        <div className="flex flex-row px-[28px] mb-[12px]">
          {/* col1 */}
          <div className="flex flex-col mr-[28px]">
            <div className="min-w-[97px] max-w-[97px] min-h-[105px] max-h-[105px]">
              <img
                className="w-full rounded-lg"
                src="https://i.pinimg.com/enabled_lo/236x/d5/d4/bb/d5d4bb7e8a83e3cc20f3383e4ca3e5c7.jpg"
                alt=""
              />
            </div>
          </div>
          {/* col2 */}
          <div className="flex-[1_1_0] flex flex-col">
            <p className="text-[18px] font-semibold mb-[8px]">
              Hamberger bò siêu ngon promax vị gà hoa quả biển xanh
            </p>
            <p className="text-[18px] font-semibold text-[rgba(8,8,8,0.6)]">
              + 2 sản phẩm khác
            </p>
          </div>
          {/* col3 */}
          <div className="flex flex-row gap-[41px]">
            <div className="font-semibold text-[18px] flex flex-col gap-[8px]">
              <p>1.000.000 đ</p>
              <p className="text-[rgba(0,0,0,0.6)] line-through">1.999.000 đ</p>
            </div>
            <p className="font-semibold text-[#8a8484] ">x 1 kg</p>
          </div>
        </div>
        <Link
          to=""
          className="text-[#05E077] font-semibold text-[18px] flex items-center gap-[8px] ml-[28px]"
        >
          Xem chi tiết <FaAngleRight />
        </Link>

        <div className="flex flex-row justify-end mr-[28px] font-semibold text-[18px] gap-[17px]">
          <span className="text-[rgba(0,0,0,0.6)]">Thành tiền:</span>{' '}
          <span className="text-[#05E077] font-semibold">1.000.000 đ</span>
        </div>
      </div>
    </div>
  );
};

export default ItemsOrther;
