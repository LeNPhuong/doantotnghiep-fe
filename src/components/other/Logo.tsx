import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC<{ widthSet?: number }> = ({ widthSet }) => {
  return (
    <Link to="" className="">
      <img
        src="/src/assets/icons/logo.png"
        style={{ maxWidth: widthSet + 'px' }}
        className="w-full"
        alt=""
      />
    </Link>
  );
};

export default Logo;
