import React, { ReactNode } from 'react';

const BoxSubjectLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className='flex flex-row justify-between'>{children}</div>;
};

export default BoxSubjectLayout;
