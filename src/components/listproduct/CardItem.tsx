import React from 'react';
import { Link } from 'react-router-dom';

const CardItem: React.FC<{}> = () => {
  return (
    <Link
      to={`/san-pham`}
      className="flex flex-col max-w-[218px] min-w-[218px] min-h-[334px] max-h-[336px] shadow-[0_0_4px_rgba(0,0,0,0.25)] hover:shadow-[0_0_8px_rgba(0,0,0,0.25)]"
    >
      <div className="flex flex-col w-full">
        <div className="w-full max-h-[160px]">
          <img
            className="w-full max-w-[218px] max-h-[160px] object-contain"
            src="https://cdn.tgdd.vn/Products/Images/2526/77684/bhx/kem-dac-co-duong-ngoi-sao-phuong-nam-xanh-la-hop-1-284kg-202311271357577976.jpg"
            alt=""
          />
        </div>
        <div className="px-[9px] flex flex-col mt-[15px]">
          <p className="text-[16px] leading-[19px] mb-[7px]">
            Kem đặc có đường Ngôi sao Phương Nam Xanh lá hộp 1,284kg
          </p>
        </div>
        <div className="flex flex-col text-[16px] px-[9px] font-semibold mb-[15px]">
          <p className="text-[#AAAAAA] line-through relative mb-[9px]">
            318.000đ
            <div className="absolute top-[50%] translate-y-[-50%] bg-[#FF0000] max-w-[28px] min-w-[28px] min-h-[13px] max-h-[13px] left-[83px] text-[10px] text-[#fff] text-center leading-[13px]">
              18%
            </div>
          </p>
          <p className="text-[#FF0000]">280.000₫</p>
        </div>
        <Link
          className="min-h-[35px] max-h-[35px] bg-[#004D40] leading-[35px] text-center text-[16px] text-[#DDF16E] font-[700]"
          to=""
        >
          MUA
        </Link>
      </div>
    </Link>
  );
};

export default CardItem;
