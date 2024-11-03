import React from 'react';
import logo from './image/logo.png';
import avar from './image/img.png';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineDashboard } from 'react-icons/ai';
import { FaAngleRight } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';
const AdminComment = () => {
  return (
    <div>
      <header className="flex justify-between items-center h-[120px] px-10">
        <div className="">
          <img src={logo} alt="" className="w-[305px]" />
        </div>
        <div className="flex items-center border-2 border-[#1BA085] rounded-lg py-2 px-4 w-[513px] h-[60px]">
          <FaSearch className="w-8 text-[#1BA085] font-medium" />
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="outline-none text-lg text-[#1BA085] w-full placeholder:text-[#1BA085] "
          />
        </div>
        <div className="flex items-center gap-2 ">
          <img src={avar} alt="" className="w-[52px] rounded-[50%]" />
          <p className="font-medium text-[24px] text-[#004D40]">
            Tên tôi là Admin
          </p>
        </div>
      </header>
      <main className="flex">
        {/* navbar */}
        <div className="navbar w-[345px] px-[70px]">
          <ul className="text-[#004D40] text-2xl font-medium space-y-12 text-center py-8">
            <li className="flex items-center gap-3">
              {' '}
              <span>
                <AiOutlineDashboard className="text-[32px]" />
              </span>
              Dashboard
            </li>
            <li className="flex items-center gap-3">
              {' '}
              <span>
                <AiOutlineDashboard className="text-[32px]" />
              </span>
              Người dùng
            </li>
            <li className="flex items-center gap-3">
              {' '}
              <span>
                <AiOutlineDashboard className="text-[32px]" />
              </span>
              Đơn hàng
            </li>
            <li className="flex items-center gap-3  ">
              {' '}
              <span>
                <AiOutlineDashboard className="text-[32px]" />
              </span>
              Sản phẩm
            </li>
            <li className="flex items-center gap-3">
              {' '}
              <span>
                <AiOutlineDashboard className="text-[32px]" />
              </span>
              Danh mục
            </li>
            <li className="flex items-center gap-3">
              {' '}
              <span>
                <AiOutlineDashboard className="text-[32px]" />
              </span>
              Sales Report
            </li>
            <li className="flex items-center gap-3">
              {' '}
              <span>
                <AiOutlineDashboard className="text-[32px]" />
              </span>
              Tin nhắn
            </li>
            <li className="flex items-center gap-3">
              {' '}
              <span>
                <AiOutlineDashboard className="text-[32px]" />
              </span>
              Cài đặt
            </li>
            <li className="flex items-center gap-3">
              {' '}
              <span>
                <AiOutlineDashboard className="text-[32px]" />
              </span>
              Đăng xuất
            </li>
          </ul>
        </div>
        <div className="flex-grow bg-[#004D40] px-[67px] py-2 ">
          {/* row1 */}
          <div className="flex items-center gap-2 my-4">
            <p className="text-[39px] font-semibold flex items-center gap-2 text-white">
              <span className="text-[32px]">
                <FaAngleRight />
              </span>
              Sản phẩm
            </p>
            <p className="text-[39px] font-semibold flex items-center gap-2 text-white">
              <span className="text-[32px]">
                <FaAngleRight />
              </span>
              Dưa hấu
            </p>
          </div>
          {/* row2 */}
          <div className="w-[1440px] bg-white flex border border-gray-200">
            <div className="w-[840px] flex border-r border-gray-200">
              {/* Image */}
              <div className="w-1/2 py-6  flex justify-center">
                <img
                  src="https://product.hstatic.net/1000282430/product/seedless-watermelon-around-2.5kg-whole-fruit_23a860613aa94413aca16b9d766f6291.jpg"
                  alt=""
                  className="w-[350px] h-auto border rounded-md"
                />
              </div>

              {/* Info */}
              <div className="w-1/2 py-6">
                <h2 className="font-medium text-[28px] text-[#004D40] mb-2">
                  Dưa hấu ruột đỏ trái 2kg-2.2kg
                </h2>
                <div className="flex items-center space-x-2 mb-2">
                  <p className="text-red-500 text-[32px] font-medium">
                    25.000đ
                  </p>
                  <p className="line-through text-gray-500 text-[16px]">
                    37.400₫
                  </p>
                  <span className="text-white bg-red-500 text-xs px-2 py-0.5 rounded-md">
                    18%
                  </span>
                </div>
                <p className="text-[#004D40] text-[24px] font-semibold">
                  Số lượng: 9000 cái
                </p>
              </div>
            </div>

            {/* Description  */}
            <div className="w-[600px]">
              <h3 className="bg-[#004D40] text-[#DDF16E] text-center py-3 text-[32px] font-medium mb-4">
                Mô tả
              </h3>
              <div className="text-gray-800 text-[16px] px-6">
                <p className="font-semibold mb-1">
                  Tên sản phẩm: Dưa hấu ruột đỏ trái 2kg-2.2kg
                </p>
                <p className="font-semibold mb-1">Xuất xứ: VIETNAM</p>
                <p>
                  Dưa hấu thường có vị ngọt mát, chỉ chứa 46 calo mỗi cốc, nhưng
                  rất giàu vitamin A, vitamin C và các hợp chất thực vật khác
                  như citrulline và lycopene tốt cho sức khỏe. Bên cạnh đó, loại
                  dưa này còn mang lại nhiều lợi ích sức khỏe cho người sử dụng,
                  bao gồm cải thiện độ nhạy insulin, giảm đau nhức cơ bắp và hạ
                  huyết áp.
                </p>
              </div>
            </div>
          </div>
          {/* row3 */}
          <div className="w-[1440px] bg-white my-[51px] px-8 pt-4 pb-10">
            {/* Section 1 */}
            <div className="my-4">
              <p className="text-[24px] font-medium text-[#004D40]">
                Đánh giá sản phẩm: (8)
              </p>
              <p className="flex items-end gap-2 text-[#004D40] text-[24px] font-medium ">
                <span className="text-[42px] font-medium">4.5</span><span className='pb-2'> trên 5</span>
              </p>
              <div className="flex gap-2 text-[#FBFF28] text-xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            {/* Section 2 */}
            <table className="min-w-full bg-white ">
              <thead className="text-xl text-[#004D40] font-medium uppercase ">
                <tr>
                  <th className="py-3 px-6 text-left">STT</th>
                  <th className="py-3 px-6 text-left">Tên người dùng</th>
                  <th className="py-3 px-6 text-left">Ảnh</th>
                  <th className="py-3 px-6 text-left">Nội dung</th>
                  <th className="py-3 px-6 text-center">Like</th>
                  <th className="py-3 px-6 text-center">Hành động</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-lg font-normal">
                {/* 1 */}
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-left">1</td>
                  <td className="py-4 px-6 text-left">Username1</td>
                  <td className="py-4 px-6 text-center">
                    <img
                      src={avar}
                      alt=""
                      className="w-12 h-12 rounded-full "
                    />
                  </td>
                  <td className="py-4 px-6 text-left">
                    Sản phẩm rất ngon dùng rất bền...
                  </td>
                  <td className="py-4 px-6 text-center">15</td>
                  <td className="py-4 px-6 flex justify-center space-x-4">
                    <button className="bg-[#ECAD21] text-white font-medium px-5 py-2 rounded-lg">
                      Sửa
                    </button>
                    <button className="bg-[#DA5D5C] text-white font-medium px-5 py-2 rounded-lg">
                      Xóa
                    </button>
                  </td>
                </tr>
                {/* 2 */}
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-left">2</td>
                  <td className="py-4 px-6 text-left">Username1</td>
                  <td className="py-4 px-6 text-center">
                    <img
                      src={avar}
                      alt=""
                      className="w-12 h-12 rounded-full "
                    />
                  </td>
                  <td className="py-4 px-6 text-left">
                    Sản phẩm rất ngon dùng rất bền...
                  </td>
                  <td className="py-4 px-6 text-center">15</td>
                  <td className="py-4 px-6 flex justify-center space-x-4">
                    <button className="bg-[#ECAD21] text-white font-medium px-5 py-2 rounded-lg">
                      Sửa
                    </button>
                    <button className="bg-[#DA5D5C] text-white font-medium px-5 py-2 rounded-lg">
                      Xóa
                    </button>
                  </td>
                </tr>
                {/* 3 */}
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-left">3</td>
                  <td className="py-4 px-6 text-left">Username1</td>
                  <td className="py-4 px-6 text-center">
                    <img
                      src={avar}
                      alt=""
                      className="w-12 h-12 rounded-full "
                    />
                  </td>
                  <td className="py-4 px-6 text-left">
                    Sản phẩm rất ngon dùng rất bền...
                  </td>
                  <td className="py-4 px-6 text-center">15</td>
                  <td className="py-4 px-6 flex justify-center space-x-4">
                    <button className="bg-[#ECAD21] text-white font-medium px-5 py-2 rounded-lg">
                      Sửa
                    </button>
                    <button className="bg-[#DA5D5C] text-white font-medium px-5 py-2 rounded-lg">
                      Xóa
                    </button>
                  </td>
                </tr>
                {/* 4 */}
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-left">4</td>
                  <td className="py-4 px-6 text-left">Username1</td>
                  <td className="py-4 px-6 text-center">
                    <img
                      src={avar}
                      alt=""
                      className="w-12 h-12 rounded-full "
                    />
                  </td>
                  <td className="py-4 px-6 text-left">
                    Sản phẩm rất ngon dùng rất bền...
                  </td>
                  <td className="py-4 px-6 text-center">15</td>
                  <td className="py-4 px-6 flex justify-center space-x-4">
                    <button className="bg-[#ECAD21] text-white font-medium px-5 py-2 rounded-lg">
                      Sửa
                    </button>
                    <button className="bg-[#DA5D5C] text-white font-medium px-5 py-2 rounded-lg">
                      Xóa
                    </button>
                  </td>
                </tr>
                {/* 5 */}
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-left">5</td>
                  <td className="py-4 px-6 text-left">Username1</td>
                  <td className="py-4 px-6 text-center">
                    <img
                      src={avar}
                      alt=""
                      className="w-12 h-12 rounded-full "
                    />
                  </td>
                  <td className="py-4 px-6 text-left">
                    Sản phẩm rất ngon dùng rất bền...
                  </td>
                  <td className="py-4 px-6 text-center">15</td>
                  <td className="py-4 px-6 flex justify-center space-x-4">
                    <button className="bg-[#ECAD21] text-white font-medium px-5 py-2 rounded-lg">
                      Sửa
                    </button>
                    <button className="bg-[#DA5D5C] text-white font-medium px-5 py-2 rounded-lg">
                      Xóa
                    </button>
                  </td>
                </tr>
                {/* Repeat <tr> elements for more rows */}
              </tbody>
            </table>
            <div className="flex justify-center mt-8 space-x-2 ">
              <button className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-[#004D40] hover:text-white">
                1
              </button>
              <button className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-[#004D40] hover:text-white">
                2
              </button>
              <button className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-[#004D40] hover:text-white">
                3
              </button>
              <button className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-[#004D40] hover:text-white">
                4
              </button>
              <button className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-[#004D40] hover:text-white">
                5
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminComment;
