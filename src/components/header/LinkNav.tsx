import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IMenu } from '../../types/navBar';

const LinkNav: React.FC<{ data: IMenu }> = ({ data }) => {
  const params = useLocation();

  return (
    <Link
      to={`${data.link}`}
      style={{
        color: params.pathname.includes(data.link)
          ? '#000'
          : 'rgba(41, 42, 58, 0.6)',
        borderColor: params.pathname.includes(data.link)
          ? '#000'
          : '#fff',
      }}
      className="flex flex-row items-center border-b-[3px]"
    >
      <span className="text-[24px] mr-[8px]">{data.icons}</span>
      <span className="text-[20px] font-[600]">{data.name}</span>
    </Link>
  );
};

export default LinkNav;
