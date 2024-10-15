import React from 'react';
import { Link } from 'react-router-dom';

const ItemList: React.FC<{}> = () => {
  return (
    <Link
      to=""
      className="w-full max-w-[80px] min-h-[60px] max-h-[60px] shadow-[0_0_4px_rgba(0,0,0,0.25)] flex flex-col items-center justify-center gap-[4px]"
    >
      <img
        className="w-[30px] h-[30px]"
        src="/src/assets/raw/chery.png"
        alt=""
      />
      <p className="text-[14px] font-medium text-[#4C8550]">Trái cây</p>
    </Link>
  );
};

export default ItemList;
