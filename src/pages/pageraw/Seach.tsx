import React from 'react';

const Seach = () => {
  return (
    <div>
      <div className="md:px-8 px-4 md:mt-[41px] mt-4">
        <div className="flex border border-[#004D40] rounded-md md:p-3 p-2 text-[#004D40] text-center mb-4">
          Tìm thấy 23 sản phẩm với từ khóa{' '}
          <span className="font-semibold">"Lựu đạn"</span>
        </div>

        <div className="lg:flex items-center justify-between md:mt-[37px] ">
          <div className="text-[#004D40] md:text-[32px] text-[28px] font-medium ">
            Danh sách sản phẩm
          </div>
          <div className="md:flex block items-center space-y-2 gap-2 my-4">
            <div className="text-[#004D40] md:text-[24px] text-[18px] font-medium">
              Sắp xếp theo:
            </div>
            <div className='flex gap-2'>
            <button className="bg-[#004D40] text-white md:text-[18px] px-4 py-2 rounded-md font-medium">
              Bán chạy
            </button>
            <button className="border border-[#004D40] md:text-[18px]  text-[#004D40] px-4 py-2 rounded-md font-medium">
              Giá thấp
            </button>
            <button className="border border-[#004D40] md:text-[18px] text-[#004D40] px-4 py-2 rounded-md font-medium">
              Giá cao
            </button>
            </div>
          </div>
        </div>
      </div>
      {/* product */}
      <div className="flex justify-center items-center h-screen text-5xl font-bold">
        Product
      </div>
    </div>
  );
};

export default Seach;
