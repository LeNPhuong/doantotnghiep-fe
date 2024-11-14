import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AiFillProduct } from 'react-icons/ai';
import { FaThList } from 'react-icons/fa';
import { FaShippingFast } from 'react-icons/fa';
import { IoHome } from 'react-icons/io5';

const ListItem: { icons: React.ReactNode; name: string; link: string }[] = [
  {
    icons: <IoHome />,
    name: 'thống kê',
    link: 'thong-ke',
  },
  {
    icons: <FaUserCircle />,
    name: 'người dùng',
    link: 'nguoi-dung',
  },
  {
    icons: <AiFillProduct />,
    name: 'sản phẩm',
    link: 'san-pham',
  },
  {
    icons: <FaThList />,
    name: 'danh mục',
    link: 'danh-muc',
  },
  {
    icons: <FaShippingFast />,
    name: 'đơn hàng',
    link: 'don-hang',
  },
];

const Sidebar: React.FC = () => {
  const path = useLocation();
  console.log(path);

  return (
    <div className="sidebar">
      <div className="w-full flex flex-col items-center gap-[15px] mb-[20px]">
        <span className="bg-[#000] w-[60px] h-[60px] rounded-full"></span>
        <p className="text-[#014C3E] text-[18px] capitalize font-semibold">
          Người dùng
        </p>
      </div>
      <div className="flex flex-row justify-center">
        <ul className="flex flex-col w-full text-[#014C3E]">
          {ListItem.map((data, index) => (
            <li className="" key={index}>
              <Link
                className="w-full uppercase flex flex-row items-center gap-[25px] font-semibold text-[16px] p-[10px]"
                to={data.link}
              >
                <span className="text-[22px]">{data.icons}</span>
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
