import React from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { LuPackage2 } from 'react-icons/lu';
import { PiMapPinAreaBold } from 'react-icons/pi';
import { BiLogOut } from 'react-icons/bi';
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
    link: 'chi-tiet',
    icons: <HiOutlineUserCircle />,
  },
  { id: 2, name: 'Đơn hàng của tôi', link: 'don-hang', icons: <LuPackage2 /> },
  {
    id: 3,
    name: 'Quản lý sổ địa chỉ',
    link: 'dia-chi',
    icons: <PiMapPinAreaBold />,
  },
];

const SlideUser: React.FC<{}> = () => {
  const params = useLocation().pathname;

  return (
    <div className="w-full max-w-[404px] flex-col">
      <div className="w-full bg-[#004D40] text-white rounded-[10px] min-h-[306px] max-h-[306px] flex flex-col justify-center items-center mb-[29px]">
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
        <p className="text-[24px] font-bold">Anh Long</p>
        <p className="text-[20px] font-medium">099999999</p>
      </div>
      {/* menu */}
      <div className="shadow-[0_0_3px_rgba(0,0,0,0.25)] rounded-[10px] w-full">
        {slideItemData.map((e) => (
          <Link
            to={e.link}
            style={{
              background: params.includes(e.link) ? '#EDF0F3' : '',
              color: params.includes(e.link) ? '#05E077' : '',
            }}
            className="flex flex-row items-center min-h-[64px] max-h-[64px] px-[25px] justify-between rounded-[10px]"
          >
            <div className="flex flex-row items-center">
              <p className="text-[30px] mr-[7px]">{e.icons}</p>
              <p className="text-[18px] font-medium">{e.name}</p>
            </div>
            <p className="text-[30px]">
              <MdKeyboardArrowRight />
            </p>
          </Link>
        ))}

        <div className="flex flex-row items-center min-h-[64px] max-h-[64px] bg-[#fff] px-[25px] justify-between rounded-[10px]">
          <div className="flex flex-row items-center">
            <p className="text-[30px] mr-[7px]">
              <BiLogOut />
            </p>
            <p className="text-[18px]">Đăng xuất</p>
          </div>
          <p className="text-[30px]">
            <MdKeyboardArrowRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlideUser;
