import React from 'react';

const DetailsImage: React.FC<{}> = () => {
  return (
    <div className="max-w-[350px] min-w-[350px] min-h-[350px] max-h-[350px] border-[1px] border-[#ECCDCD] mr-[28px]">
      <img
        loading="lazy"
        className="w-full"
        src="/src/assets/raw/duahau.png"
        alt=""
      />
    </div>
  );
};

export default DetailsImage;
