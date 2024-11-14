import React, { SetStateAction } from 'react';

const ItemsForm: React.FC<{
  label: string;
  place: string;
  init: string | number;
  setInit: React.Dispatch<SetStateAction<string>>;
}> = ({ label, place, init, setInit }) => {
  return (
    <div className="flex flex-col w-full max-w-[250px] gap-[5px] mr-[30px] mb-[15px]">
      <label htmlFor="" className="text-[16px]">
        {label}
      </label>
      <input
        type="text"
        className="outline-none p-[5px] shadow-[0_0_5px_#00000046] rounded-[5px]"
        placeholder={place}
        value={init}
        onChange={(e) => setInit(e.target.value)}
      />
    </div>
  );
};

export default ItemsForm;
