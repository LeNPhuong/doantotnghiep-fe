import React from 'react';

const LabelName: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="pl-[65px] uppercase text-[#DDF16E] w-full py-[18px] bg-[#014C3E] flex items-center text-[20px] font-bold shadow-[0_0_4px_rgba(0,0,0,0.25)]">
      {name}
    </div>
  );
};

export default LabelName;
