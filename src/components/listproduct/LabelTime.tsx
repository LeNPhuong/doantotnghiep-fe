import React from 'react';

const LabelTime: React.FC<{}> = () => {
  return (
    <div className="absolute top-[0] text-[#DDF16E] min-h-[40px] max-h-[40px] translate-y-[-50%] bg-[#014C3E] flex flex-row items-center justify-center rounded-[10px] px-[30px] py-[10px] text-[12px] font-bold shadow-[0_0_4px_rgba(0,0,0,0.25)] left-[231px]">
      Flash Sale
      <div className="ml-[8px] max-w-[83px] min-w-[83px] min-h-[20px] max-h-[20px] bg-[#FFF5F5] rounded-[5px] text-[12px] text-[#000000] flex flex-row justify-center items-center px-[18px]">
        00:18:38
      </div>
    </div>
  );
};

export default LabelTime;
