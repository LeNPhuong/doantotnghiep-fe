import React from 'react';

const DetailsImage: React.FC<{ img: string }> = ({ img }) => {
  return (
    <div className="lg:max-w-[350px] lg:min-w-[350px] lg:min-h-[350px] lg:max-h-[350px] md:max-w-[230px] md:min-w-[230px] md:min-h-[230px] md:max-h-[230px] w-full border-[1px] border-[#ECCDCD] md:mr-[28px]">
      <img loading="lazy" className="w-full" src={img} alt="" />
    </div>
  );
};

export default DetailsImage;
