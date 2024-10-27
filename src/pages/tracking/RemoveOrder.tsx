import React, { SetStateAction, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { PiWarningCircleFill } from 'react-icons/pi';

const RemoveOrder: React.FC<{
  setRemove: React.Dispatch<SetStateAction<boolean>>;
}> = ({ setRemove }) => {
  const [selectedOption, setSelectedOption] = useState<string>('0');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 bg-[] z-[9999] bg-black bg-opacity-50">
      <div className="relative w-[690px] h-[560px] mx-auto shadow-xl bg-[#fff] mt-[50px]">
        {/* row1 */}
        <div className="flex justify-center items-center">
          <div className="flex-grow text-center text-2xl font-semibold py-[20px]">
            Chọn Lý Do Hủy
          </div>
          <button
            onClick={() => setRemove(false)}
            className="absolute right-0 mr-4 text-3xl opacity-40"
          >
            <IoCloseOutline />
          </button>
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
                value="1"
                checked={selectedOption === '1'}
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
                value="2"
                checked={selectedOption === '2'}
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
                value="3"
                checked={selectedOption === '3'}
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
                value="4"
                checked={selectedOption === '4'}
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
                value="5"
                checked={selectedOption === '5'}
                onChange={handleChange}
                className="appearance-none h-5 w-5 border-2 border-[#004D40] rounded-full checked:bg-[#004D40] checked:border-[#00796B] focus:outline-none cursor-pointer transition duration-300 relative"
              />
              <div className="absolute w-3 h-3 bg-white rounded-full transform translate-x-1 translate-y-1 hidden peer-checked:block"></div>
            </div>
            <div className="text-[#004D40] font-medium">Không muốn mua nữa</div>
          </div>
        </div>

        {/* row4 */}
        <button className="flex justify-center items-center w-[600px] mx-auto bg-[#004D40] py-4 font-medium text-2xl text-white">
          ĐỒNG Ý
        </button>
      </div>
    </div>
  );
};

export default RemoveOrder;
