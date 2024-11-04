import React from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { LuPackage2 } from 'react-icons/lu';
import { PiMapPinAreaBold } from 'react-icons/pi';
import { BiLogOut } from 'react-icons/bi';
import { TbExchange } from "react-icons/tb";
import { Link, useLocation } from 'react-router-dom';

const slideItemData: {
  id: number;
  name: string;
  link: string;
  icons: React.ReactNode;
}[] = [
  {
    id: 1,
    name: 'Thông tin cá nhân',
    link: 'ca-nhan',
    icons: <HiOutlineUserCircle />,
  },
  { id: 2, name: 'Đơn hàng của tôi', link: 'don-hang', icons: <LuPackage2 /> },
  {
    id: 3,
    name: 'Đổi mật khẩu',
    link: '/nguoi-dung/doi-mat-khau',
    icons: <TbExchange />,
  },

  {
    id: 4,
    name: 'Quản lý sổ địa chỉ',
    link: 'dia-chi',
    icons: <PiMapPinAreaBold />,
  },
];

const SlideUser: React.FC<{}> = () => {
  const params = useLocation().pathname;

  return (
    <div className="w-full lg:max-w-[404px] md:max-w-[300px]">
      <div className="w-full bg-[#004D40] text-white md:rounded-[10px] rounded-none lg:min-h-[306px] md:min-h-[200px] flex flex-col justify-center items-center md:mb-[29px] mb-[0px]">
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="80px"
            viewBox="0 0 448 512 "
            className="mx-auto"
          >
            <path
              fill="white"
              d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128m89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4"
            />
          </svg>
        </div>
        <p className="xl:text-[24px] md:text-[18px] font-bold">Anh Long</p>
        <p className="xl:text-[20px] md:text-[14px] font-medium">099999999</p>
      </div>
      {/* menu */}
      <div className="shadow-[0_0_3px_rgba(0,0,0,0.25)] md:rounded-[10px] w-full">
        {slideItemData.map((e, index) => (
          <Link
            key={index}
            to={e.link}
            style={{
              background: params.includes(e.link) ? '#EDF0F3' : '',
              color: params.includes(e.link) ? '#05E077' : '',
            }}
            className="flex flex-row items-center lg:min-h-[64px] min-h-[54px] max-h-[64px] px-[25px] justify-between md:rounded-[10px]"
          >
            <div className="flex flex-row items-center">
              <p className="lg:text-[30px] md:text-[24px] mr-[7px]">
                {e.icons}
              </p>
              <p className="lg:text-[18px] md:text-[14px] font-medium">
                {e.name}
              </p>
            </div>
            <p className="lg:text-[30px] md:text-[20px]">
              <MdKeyboardArrowRight />
            </p>
          </Link>
        ))}

        <button className="flex w-full flex-row items-center lg:min-h-[64px] min-h-[54px] max-h-[64px] bg-[#fff] px-[25px] justify-between rounded-[10px]">
          <div className="flex flex-row items-center">
            <p className="lg:text-[30px] md:text-[24px] mr-[7px]">
              <BiLogOut />
            </p>
            <p className="lg:text-[18px] md:text-[14px]">Đăng xuất</p>
          </div>
          <p className="lg:text-[30px] text-[20px]">
            <MdKeyboardArrowRight />
          </p>
        </button>
      </div>
    </div>
  );
};

export default SlideUser;
