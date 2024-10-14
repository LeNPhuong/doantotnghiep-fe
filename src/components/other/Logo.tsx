import React from 'react';
import { Link } from 'react-router-dom';
import { TienLoiXanhImg } from '../../assets/icons';

const Logo: React.FC<{ widthSet?: number }> = ({ widthSet }) => {
  return (
    <Link to="" className="">
      <img
        src={TienLoiXanhImg}
        style={{ maxWidth: widthSet + 'px' }}
        className="w-full"
        alt=""
      />
    </Link>
  );
};

export default Logo;
