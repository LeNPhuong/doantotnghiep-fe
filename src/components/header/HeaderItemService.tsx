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
      <span className="xl:text-[24px] md:text-[20px] text-[16px]">{icons}</span>
      <p className="xl:text-[14px] md:text-[11px] text-[8px] font-[600] whitespace-nowrap">
        {name}
      </p>
      {cart && (
        <div className="absolute md:top-[-8px] xl:right-[8px] md:right-[4px] xl:min-w-[20px] xl:max-w-[20px] xl:min-h-[20px] xl:max-h-[20px] md:min-w-[15px] md:max-w-[15px] md:min-h-[15px] md:max-h-[15px] bg-red-500 rounded-full text-center text-[10px] text-[#fff] xl:leading-[20px] md:leading-[15px] min-h-[12px] min-w-[12px] max-w-[12px] max-h-[12px] leading-[12px] right-[5px] top-[-5px]">
          1
        </div>
      )}
    </Link>
  );
};

export default HeaderItemService;
