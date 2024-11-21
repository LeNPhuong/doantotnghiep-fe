import React from 'react';
import MenuAction from './MenuAction';
import { TienLoiXanhImg } from '../../../assets/icons';

const SlideLeft: React.FC = () => {
  return (
    <div className="w-[25%] border-r-[1px] border-r-[#ccc]">
      <div className="flex flex-col">
        <div className="flex flex-row items-start justify-center gap-[10px] py-[20px] border-b-[1px] border-b-[#ccc]">
          <img className="w-full max-w-[200px]" src={TienLoiXanhImg} alt="" />
        </div>
        <MenuAction />
      </div>
    </div>
  );
};

export default SlideLeft;
