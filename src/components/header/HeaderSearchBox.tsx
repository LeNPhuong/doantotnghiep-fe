import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

const HeaderSearchBox: React.FC<{}> = () => {
  const [result, setResult] = useState<string>();
  return (
    <div className="w-full max-w-[577px] max-h-[38px] min-h-[38px] rounded-full border-[#CCADAD] border-[1px] bg-[#f7f8fa] pl-[12px] flex flex-row items-center text-[#000] ">
      <input
        type="text"
        placeholder="Tìm sản phẩm mong muốn..."
        className="bg-[#f7f8fa] outline-none text-[#000] w-full max-w-[515px] placeholder:text-[14px]"
        value={result}
        onChange={(e) => setResult(e.target.value)}
      />
      <button className="text-[20px]">
        <IoIosSearch />
      </button>
      <div className="pr-[25px]"></div>
    </div>
  );
};

export default HeaderSearchBox;
