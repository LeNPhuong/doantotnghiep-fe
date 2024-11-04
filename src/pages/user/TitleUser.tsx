import React from 'react';

const TitleUser: React.FC<{
  title: string;
}> = ({ title }) => {
  return (
    <p
      style={{}}
      className="lg:text-[18px] text-[14px] font-medium text-[#000000]"
    >
      {title}
    </p>
  );
};

export default TitleUser;
