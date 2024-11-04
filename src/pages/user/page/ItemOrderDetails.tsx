import React from 'react';

const ItemOrderDetails: React.FC<{}> = () => {
  return (
    <div className="w-full font-semibold flex flex-row justify-between items-center md:px-[35px] px-[10px] md:py-[41px] py-[10px] border-b-[1px] border-b-[#ccc]">
      <div className="flex flex-row">
        <img
          className="w-full md:min-h-[100px] md:max-w-[100px] min-h-[70px] max-w-[70px] mr-[23px] rounded-[8px]"
          src="https://i.pinimg.com/enabled_lo/236x/d5/d4/bb/d5d4bb7e8a83e3cc20f3383e4ca3e5c7.jpg"
          alt=""
        />
        <div className="flex flex-col md:text-[18px]">
          <p className="">Bí đỏ mỹ Wano...</p>
          <p className="">x1</p>
        </div>
      </div>
      <p className="md:text-[24px] text-[#004D40]">255.000 đ</p>
    </div>
  );
};

export default ItemOrderDetails;
