import React, { ReactNode } from 'react';

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <main className="w-full max-w-[1440px] mx-auto xl:px-[0px] md:px-[20px] px-[2px]">{children}</main>;
};

export default MainLayout;
