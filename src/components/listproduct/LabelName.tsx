import React from 'react';

const LabelName: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="uppercase absolute top-[0] text-[#DDF16E] min-h-[40px] max-h-[40px] translate-y-[-50%] bg-[#014C3E] flex items-center justify-center rounded-[10px] px-[30px] py-[10px] text-[12px] font-bold shadow-[0_0_4px_rgba(0,0,0,0.25)] left-[33px]">
      {name}
    </div>
  );
};

export default LabelName;
