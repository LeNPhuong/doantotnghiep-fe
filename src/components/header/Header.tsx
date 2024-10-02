import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import { menuData } from '../../types/navBar';
import LinkNav from './LinkNav';

const Header: React.FC = () => {
  return (
    <header>
      <div className="w-full border-b-[1px] border-rgba-custome">
        <div className="max-w-[1440px] w-full mx-auto h-[84px] max-h-[84px] min-h-[84px]">
          <div className="flex flex-row items-center h-full w-full px-[12px]">
            <div className="h-full mr-[58px]">
              <img className="h-full" src="/src/assets/img/logo.png" alt="" />
            </div>

            <div className="max-h-[42px] max-w-[300px] h-full border-[1px] border-rgba-custome flex flex-row items-center justify-between rounded-full px-[15px] mr-[55px]">
              <input
                placeholder="Tìm test..."
                type="text"
                className="border-none outline-none border-[1px] border-rgba-custome max-w-[80%] w-full"
              />
              <span className="text-[22px] text-rgba-custome-1">
                <IoSearchOutline />
              </span>
            </div>

            <div className="flex flex-row items-center gap-[55px] mr-[55px]">
              {menuData.map((data, index) => (
                <LinkNav key={index} data={data} />
              ))}
            </div>

            <button className="text-[22px] text-[#fff] bg-[#000] w-full max-w-[140px] min-h-[46px] rounded-[10px] mr-[55px]">
              Tạo mới
            </button>

            <button className="rounded-full max-w-[60px] w-full h-full max-h-[60px] bg-[#d9d9d9] flex justify-center items-center">
              <span className="text-[#222222] text-[32px]">
                <RxHamburgerMenu />
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
