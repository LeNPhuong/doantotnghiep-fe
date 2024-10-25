import React, { useState } from 'react';
import { PiWarningCircleFill } from 'react-icons/pi';
import { IoCloseOutline } from 'react-icons/io5';
const HuyDon = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <div className="relative w-[690px] h-[560px] mx-auto shadow-xl my-4">
        {/* row1 */}
        <div className="flex justify-center items-center my-6">
          <div className="flex-grow text-center text-2xl font-semibold">
            Chọn Lý Do Hủy
          </div>
          <div className="absolute right-0 mr-4 text-3xl opacity-40">
            <IoCloseOutline />
          </div>
        </div>
        {/* row2 */}
        <div className="flex items-center bg-[#004D40] py-4 px-12  gap-4">
          <div className="text-[#E3CF18] text-4xl ">
            <PiWarningCircleFill />
          </div>
          <div className="text-[#E3CF18] ">
            Vui lòng chọn lí do hủy đơn hàng. Lưu ý: Thao tác này sẽ hủy tất cả
            các sản phẩm có trong đơn hàng và không thế hoàn tác
          </div>
        </div>
        {/* row3 */}
        <div className="flex-col space-y-8 px-12 text-xl my-8">
          <div className="flex items-center gap-4">
            <div className="w-9 flex justify-center">
              <input
                type="radio"
                name="option"
                value="change_address"
                checked={selectedOption === 'change_address'}
                onChange={handleChange}
                className="appearance-none h-5 w-5 border-2 border-[#004D40] rounded-full checked:bg-[#004D40] checked:border-[#00796B] focus:outline-none cursor-pointer transition duration-300 relative"
              />
              <div className="absolute w-3 h-3 bg-white rounded-full transform translate-x-1 translate-y-1 hidden peer-checked:block"></div>
            </div>
            <div className="text-[#004D40] font-medium">
              Muốn thay đổi địa chỉ giao hàng
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-9 flex justify-center">
              <input
                type="radio"
                name="option"
                value="change_address"
                checked={selectedOption === 'change_address'}
                onChange={handleChange}
                className="appearance-none h-5 w-5 border-2 border-[#004D40] rounded-full checked:bg-[#004D40] checked:border-[#00796B] focus:outline-none cursor-pointer transition duration-300 relative"
              />
              <div className="absolute w-3 h-3 bg-white rounded-full transform translate-x-1 translate-y-1 hidden peer-checked:block"></div>
            </div>
            <div className="text-[#004D40] font-medium">
              Muốn thay đổi Voucher
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-9 flex justify-center">
              <input
                type="radio"
                name="option"
                value="change_address"
                checked={selectedOption === 'change_address'}
                onChange={handleChange}
                className="appearance-none h-5 w-5 border-2 border-[#004D40] rounded-full checked:bg-[#004D40] checked:border-[#00796B] focus:outline-none cursor-pointer transition duration-300 relative"
              />
              <div className="absolute w-3 h-3 bg-white rounded-full transform translate-x-1 translate-y-1 hidden peer-checked:block"></div>
            </div>
            <div className="text-[#004D40] font-medium">
              Muốn thay đổi sản phẩm (màu sắc, số lượng,...)
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-9 flex justify-center">
              <input
                type="radio"
                name="option"
                value="change_address"
                checked={selectedOption === 'change_address'}
                onChange={handleChange}
                className="appearance-none h-5 w-5 border-2 border-[#004D40] rounded-full checked:bg-[#004D40] checked:border-[#00796B] focus:outline-none cursor-pointer transition duration-300 relative"
              />
              <div className="absolute w-3 h-3 bg-white rounded-full transform translate-x-1 translate-y-1 hidden peer-checked:block"></div>
            </div>
            <div className="text-[#004D40] font-medium">
              Tìm thấy giá đang sale rẻ hơn
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-9 flex justify-center">
              <input
                type="radio"
                name="option"
                value="change_address"
                checked={selectedOption === 'change_address'}
                onChange={handleChange}
                className="appearance-none h-5 w-5 border-2 border-[#004D40] rounded-full checked:bg-[#004D40] checked:border-[#00796B] focus:outline-none cursor-pointer transition duration-300 relative"
              />
              <div className="absolute w-3 h-3 bg-white rounded-full transform translate-x-1 translate-y-1 hidden peer-checked:block"></div>
            </div>
            <div className="text-[#004D40] font-medium">Không muốn mua nữa</div>
          </div>
        </div>

        {/* row4 */}
        <div className="flex justify-center items-center w-[600px] mx-auto bg-[#004D40] py-4 font-medium text-2xl text-white ">
          ĐỒNG Ý
        </div>
      </div>
    </div>
  );
};

export default HuyDon;
