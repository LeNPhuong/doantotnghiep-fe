import React from 'react';

const TitleUser: React.FC<{
  title: string;
}> = ({ title }) => {
  return <p style={{}} className="text-[18px] font-medium text-[#000000]">{title}</p>;
};

export default TitleUser;
