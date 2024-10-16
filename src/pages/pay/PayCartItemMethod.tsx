import React from 'react';

const PayCartItemMethod: React.FC<{
  border: boolean;
  img: string;
  name: string;
}> = ({ border, img, name }) => {
  return (
    <div
      style={{
        border: border ? '0px 0px 1px 0px solid #DAB4B4' : 'none',
      }}
      className="w-full min-h-[86px] border-b-[1px] border-b-[#DAB4B4] flex flex-row items-center pl-[16px] gap-[9px]"
    >
      <div className="min-h-[20px] min-w-[20px] max-h-[20px] max-w-[20px] rounded-full border-[2px] border-[#D9D9D9]"></div>
      <img
        src={img}
        className="max-w-[40px] min-w-[40px] min-h-[40px] max-h-[40px]"
        alt=""
      />
      <p className="text-[14px] font-medium">{name}</p>
    </div>
  );
};

export default PayCartItemMethod;
