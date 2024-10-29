import React from 'react';
import { Link } from 'react-router-dom';

const CardItem: React.FC<{}> = () => {
  return (
    <Link
      to={`/san-pham`}
      className="flex flex-col xl:max-w-[218px] md:max-w-[190px] shadow-[0_0_4px_rgba(0,0,0,0.25)] hover:shadow-[0_0_8px_rgba(0,0,0,0.25)] w-full md:mr-[0px] mr-[3px]"
    >
      <div className="flex flex-col w-full">
        <div className="w-full max-h-[160px]">
          <img
            loading="lazy"
            className="w-full xl:max-h-[160px] md:max-h-[140px] object-contain"
            src="https://cdn.tgdd.vn/Products/Images/2526/77684/bhx/kem-dac-co-duong-ngoi-sao-phuong-nam-xanh-la-hop-1-284kg-202311271357577976.jpg"
            alt=""
          />
        </div>
        <div className="px-[9px] flex flex-col md:mt-[15px] mt-[7px]">
          <p className="xl:text-[16px] md:text-[13px] text-[5px] md:mb-[7px] mb-[4px]">
            Kem đặc có đường Ngôi sao Phương Nam Xanh lá hộp 1,284kg
          </p>
        </div>
        <div className="flex flex-col xl:text-[16px] md:text-[14px] text-[6px] px-[9px] font-semibold md:mb-[15px] mb-[2px]">
          <div className="flex flex-row items-center md:justify-start justify-between md:mb-[9px] mb-[4px]">
            <p className="text-[#AAAAAA] line-through relative md:mr-[10px]">
              318.000đ
            </p>
            <div className=" bg-[#FF0000] md:max-w-[28px] md:min-w-[28px] md:min-h-[13px] md:max-h-[13px] md:text-[10px] text-[4px] text-[#fff] text-center md:leading-[13px] max-w-[20px] min-w-[20px] min-h-[8px] max-h-[8px] leading-[8px]">
              18%
            </div>
          </div>

          <p className="text-[#FF0000]">280.000₫</p>
        </div>
        <Link
          className="md:min-h-[35px] md:max-h-[35px] bg-[#004D40] md:leading-[35px] text-center xl:text-[16px] md:text-[14px] text-[#DDF16E] font-[700] text-[5px] md:py-0 py-[3px]"
          to=""
        >
          MUA
        </Link>
      </div>
    </Link>
  );
};

export default CardItem;
