import React from 'react';

const FormAuth: React.FC<{
  label: string;
  h: string;
  init: string;
  setInit: React.Dispatch<React.SetStateAction<string>>;
}> = ({ label = '', h, init, setInit }) => {
  return (
    <div className="w-full">
      <input
        className="w-full outline-none rounded-[5px] pl-[24px] placeholder:text-[#014C3E] md:min-h-[54px] md:max-h-[54px] min-h-[40px] max-h-[40px] md:text-[16px] text-[13px]"
        placeholder={label}
        type="text"
        value={init}
        onChange={(e) => setInit(e.target.value)}
      />
    </div>
  );
};

export default FormAuth;
