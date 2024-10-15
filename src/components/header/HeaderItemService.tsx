import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const HeaderItemService: React.FC<{
  name: string;
  icons: ReactNode;
  cart?: boolean;
  link: string;
}> = ({ name, icons, cart = false, link }) => {
  return (
    <Link
      to={`${link}`}
      className="flex flex-col items-center text-[#004D40] relative"
    >
      <span className="text-[24px]">{icons}</span>
      <p className="text-[14px] font-[600]">{name}</p>
      {cart && (
        <div className="absolute top-[-8px] right-[8px] min-w-[20px] max-w-[20px] min-h-[20px] max-h-[20px] bg-red-500 rounded-full text-center text-[10px] text-[#fff] leading-[20px]">
          1
        </div>
      )}
    </Link>
  );
};

export default HeaderItemService;
