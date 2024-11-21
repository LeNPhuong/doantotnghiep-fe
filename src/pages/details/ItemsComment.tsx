import React from 'react';
import { IFComment } from '../../types/IFProducts';

const ItemsComment: React.FC<{ data: IFComment }> = ({ data }) => {
  return (
    <div className="flex flex-col bg-[#014C3E] text-[#d3eb4c] py-[10px] px-[20px] mb-[10px] rounded-[5px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <p className="text-[26px] font-semibold w-full rounded-[5px] mb-[5px] pl-[5px]">{data.user.name}</p>
      <p className="text-[16px] font-normal capitalize border-b-[1px] border-b-[#d3eb4c] pb-[5px]">{data.comment}</p>
    </div>
  );
};

export default ItemsComment;
