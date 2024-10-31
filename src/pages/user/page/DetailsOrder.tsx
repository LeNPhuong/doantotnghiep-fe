import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';

const DetailsOrder: React.FC<object> = () => {
  return (
    <>
      <div className="border-[1px] border-[#dbd9d9] py-2 px-2 max-w-[100px] mb-[10px]">
        <div className="flex items-center gap-2 text-[#949191]">
          <span>
            <FaChevronLeft />
          </span>
          Trở về
        </div>
      </div>
      {/* row3 */}
      <div className="flex-col space-y-4 h-[153px] bg-[#004D40] rounded-lg py-6 px-8 ">
        <h2 className="text-[#DDF16E] text-[40px] font-medium">
          Đơn hàng hoàn thành
        </h2>
        <div className="flex justify-between items-center text-white">
          <p className="text-[24px] font-medium">Mã đơn hàng: #2222888</p>
          <p className="text-[18px] font-medium">Hoàn thành ngày 28/10/2024.</p>
        </div>
      </div>
      {/* row4 */}
      <div className="border-[1px] border-[#dbd9d9] space-y-4 py-6 px-8">
        {/* 1 */}
        <div className="flex gap-4 ">
          {/* col1 */}
          <div className="flex-col w-[120px] space-y-2">
            <div className="">
              <img
                className="w-full rounded-lg"
                src="https://i.pinimg.com/enabled_lo/236x/d5/d4/bb/d5d4bb7e8a83e3cc20f3383e4ca3e5c7.jpg"
                alt=""
              />
            </div>
          </div>
          {/* col2 */}
          <div className="w-[550px] flex-col space-y-1 ">
            <div className="text-[18px] font-semibold">
              Hamberger bò siêu ngon promax vị gà hoa quả biển xanh{' '}
            </div>
            <div className="font-semibold ">x1</div>
          </div>
          {/* col3 */}
          <div className="flex-grow text-end my-auto">
            <div className="font-semibold text-[#004D40] text-2xl">
              255.000 đ
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="flex gap-4 ">
          {/* col1 */}
          <div className="flex-col w-[120px] space-y-2">
            <div className="">
              <img
                className="w-full rounded-lg"
                src="https://i.pinimg.com/enabled_lo/236x/d5/d4/bb/d5d4bb7e8a83e3cc20f3383e4ca3e5c7.jpg"
                alt=""
              />
            </div>
          </div>
          {/* col2 */}
          <div className="w-[550px] flex-col space-y-1 ">
            <div className="text-[18px] font-semibold">
              Hamberger bò siêu ngon promax vị gà hoa quả biển xanh{' '}
            </div>
            <div className="font-semibold ">x1</div>
          </div>
          {/* col3 */}
          <div className="flex-grow text-end my-auto">
            <div className="font-semibold text-[#004D40] text-2xl">
              255.000 đ
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="flex ">
          {/* col1 */}
          <div className="">
            <h2 className="text-[#004D40] text-[32px] font-semibold mb-[29px]">
              Địa chỉ nhận hàng
            </h2>
            <p className="text-2xl font-medium mb-[25px]">Long Phạm</p>
            <div className="space-y-4">
              <p className="font-medium text-gray-500 ">(+84) 909090909</p>
              <p className="font-medium text-gray-500 ">
                Hẻm 123 Tô Ký Trung Mỹ Tây Q12 TP.HCM
              </p>
            </div>
          </div>
          {/* col2 */}
          <div className="w-[368px] p-4 flex-col text-end space-y-6 text-gray-500 font-medium">
            <p>Tổng tiền hàng</p>
            <p>Phí vận chuyển</p>
            <p>Voucher</p>
            <p>Thành tiền</p>
            <p>Phương thức thanh toán</p>
          </div>
          {/* col3 */}
          <div className="w-[270px] p-4 flex-col text-end space-y-6 text-[#004D40] font-medium">
            <p>200.888đ</p>
            <p>20.000đ</p>
            <p>-30.000đ</p>
            <p>-190.888đ</p>
            <p>Chuyển khoản tiền mặt</p>
          </div>
          <div className="w-3/10"></div>
        </div>
      </div>
    </>
  );
};

export default DetailsOrder;
