import React, { ReactNode } from 'react';

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <main className="w-full max-w-[1440px] mx-auto">{children}</main>;
};

export default MainLayout;
