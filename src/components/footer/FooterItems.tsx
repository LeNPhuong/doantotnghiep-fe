import React from 'react';

const FooterItems: React.FC<{ name: string }> = ({ name }) => {
  return <p className="mb-[5px] xl:text-[16px] md:text-[14px] text-[#000]">{name}</p>;
};

export default FooterItems;
