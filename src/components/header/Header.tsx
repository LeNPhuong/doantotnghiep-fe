import React from 'react';
import Logo from '../other/Logo';
import HeaderCategoryList from './HeaderCategoryList';
import HeaderSearchBox from './HeaderSearchBox';
import HeaderService from './HeaderService';

const Header: React.FC = () => {
  return (
    <header className="bg-[#F7F8FA] border-b-[1px] border-b-[#AB8787]">
      <div className="w-full xl:max-w-[1440px] md:max-w-[1040px] mx-auto">
        <div className="w-full flex flex-row md:flex-nowrap flex-wrap items-center h-full md:min-h-[70px] md:max-h-[70px] min-h-[100px] max-h-[100px] relative md:px-[0px] px-[10px]">
          <Logo widthSet={197} />
          <div className="xl:mr-[25px] md:mr-[18px] hidden md:block"></div>
          <HeaderCategoryList />
          <div className="xl:mr-[25px] md:mr-[18px] hidden md:block"></div>
          <HeaderSearchBox />
          <div className="xl:mr-[45px] md:mr-[14px] hidden md:block"></div>
          <HeaderService />
        </div>
      </div>
    </header>
  );
};

export default Header;
