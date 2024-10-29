import React from 'react';

const LabelName: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="uppercase md:absolute relative top-[0] text-[#DDF16E] xl:min-h-[40px] xl:max-h-[40px] md:min-h-[35px] md:translate-y-[-50%] bg-[#014C3E] flex items-center justify-center md:rounded-[10px] px-[30px] md:py-[10px] py-[3px] xl:text-[12px] md:text-[10px] font-bold shadow-[0_0_4px_rgba(0,0,0,0.25)] md:left-[33px] text-[6px]">
      {name}
    </div>
  );
};

export default LabelName;
