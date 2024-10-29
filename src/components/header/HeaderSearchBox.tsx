import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

const HeaderSearchBox: React.FC<{}> = () => {
  const [result, setResult] = useState<string>();
  return (
    <div className="w-full xl:max-w-[577px] md:max-w-[300px] max-w-[180px] md:max-h-[38px] md:min-h-[38px] rounded-full border-[#CCADAD] border-[1px] bg-[#f7f8fa] pl-[12px] flex flex-row items-center text-[#000] max-h-[25px] min-h-[25px] md:justify-start justify-center">
      <input
        type="text"
        placeholder="Tìm sản phẩm mong muốn..."
        className="bg-[#f7f8fa] outline-none text-[#000] w-full xl:text-[14px] md:text-[12px] text-[9px]"
        value={result}
        onChange={(e) => setResult(e.target.value)}
      />
      <button className="xl:text-[20px] md:text-[18px] text-[14px]">
        <IoIosSearch />
      </button>
      <div className="md:pr-[25px] pr-[10px]"></div>
    </div>
  );
};

export default HeaderSearchBox;
