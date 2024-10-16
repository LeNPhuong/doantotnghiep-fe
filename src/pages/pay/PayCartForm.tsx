import React from 'react';

const PayCartForm: React.FC<{ label: string; width: string }> = ({
  label,
  width,
}) => {
  return (
    <input
      style={{
        maxWidth: width,
      }}
      type="text"
      className="w-full border-[1px] border-[#DAB4B4] min-h-[45px] rounded-[5px] outline-none pl-[13px] text-[16px] placeholder:text-[#949191] mt-[15px]"
      placeholder={label}
    />
  );
};

export default PayCartForm;
