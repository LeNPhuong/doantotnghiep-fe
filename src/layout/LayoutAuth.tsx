import React, { ReactNode } from 'react';

const LayoutAuth: React.FC<{ label: string; children: ReactNode }> = ({
  label,
  children,
}) => {
  return (
    <div className="flex justify-center bg-[#F7F8FA] pt-[64px] pb-[104px]">
      <div className="bg-[#D9D9D9] rounded-[5px] max-w-[670px] w-full pb-[79px]">
        <h2 className="text-[36px] font-bold text-center text-[#014C3E] pt-[28px] pb-[30px]">
          {label}
        </h2>
        {children}
      </div>
    </div>
  );
};

export default LayoutAuth;
