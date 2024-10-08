import React from 'react';

const FooterItems: React.FC<{ name: string }> = ({ name }) => {
  return <p className="mb-[5px] text-[16px] text-[#000]">{name}</p>;
};

export default FooterItems;
