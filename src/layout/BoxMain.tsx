import React, { ReactNode } from 'react';

const BoxMain: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="bg-[#F7F8FA] relative">{children}</div>;
};

export default BoxMain;
