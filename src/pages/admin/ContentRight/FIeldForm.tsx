import React, { SetStateAction } from 'react';

const FIeldForm: React.FC<{
  label: string;
  init: string | number | undefined;
  setInit: React.Dispatch<SetStateAction<string | undefined>>;
  type: string;
}> = ({ label, type, init, setInit }) => {
  return (
    <div className="flex flex-col w-full mb-[10px]">
      <label htmlFor="" className="mb-[3px] text-[16px] font-medium">
        {label}
      </label>
      <input
        type={type}
        className="outline-none border-[#014C3E] border-[2px] text-[18px] px-[10px] py-[5px] rounded-[5px]"
        value={init}
        onChange={(e) => setInit(e.target.value)}
      />
    </div>
  );
};

export default FIeldForm;
