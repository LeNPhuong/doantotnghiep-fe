import React, { ReactNode } from 'react';

const LayoutAuth: React.FC<{ label: string; children: ReactNode }> = ({
  label,
  children,
}) => {
  return (
    <div className="flex justify-center bg-[#F7F8FA] pt-[64px] pb-[104px] px-[10px]">
      <div className="bg-[#D9D9D9] rounded-[5px] md:max-w-[670px] max-w-[450px] w-full pb-[79px]">
        <h2 className="md:text-[36px] text-[20px] font-bold text-center text-[#014C3E] pt-[28px] pb-[30px]">
          {label}
        </h2>
        {children}
      </div>
    </div>
  );
};

export default LayoutAuth;
