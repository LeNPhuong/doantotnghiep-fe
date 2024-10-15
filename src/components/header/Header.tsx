import React from 'react';
import Logo from '../other/Logo';
import HeaderCategoryList from './HeaderCategoryList';
import HeaderSearchBox from './HeaderSearchBox';
import HeaderService from './HeaderService';

const Header: React.FC = () => {
  return (
    <header className="bg-[#F7F8FA] border-b-[1px] border-b-[#AB8787]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="w-full flex flex-row items-center h-full min-h-[70px] max-h-[70px] relative">
          <Logo widthSet={197} />
          <div className="mr-[25px]"></div>
          <HeaderCategoryList />
          <div className="mr-[25px]"></div>
          <HeaderSearchBox />
          <div className="mr-[45px]"></div>
          <HeaderService />
        </div>
      </div>
    </header>
  );
};

export default Header;
