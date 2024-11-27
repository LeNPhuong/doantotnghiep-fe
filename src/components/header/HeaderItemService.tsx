import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const HeaderItemService: React.FC<{
  name: string;
  icons: ReactNode;
  cart?: boolean;
  link: string;
}> = ({ name, icons, link }) => {
  return (
    <Link
      to={`${link}`}
      className="flex flex-col items-center text-[#004D40] relative"
    >
      <span className="xl:text-[24px] md:text-[20px] text-[16px]">{icons}</span>
      <p className="xl:text-[14px] md:text-[11px] text-[8px] font-[600] whitespace-nowrap">
        {name}
      </p>
    </Link>
  );
};

export default HeaderItemService;
