import React from 'react';

const TrackingIFProgress: React.FC<{
  img: string;
  name: string;
  active: boolean;
}> = ({ img, name, active }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-[60px]">
      <p className="text-[16px] text-[#004D40] font-medium whitespace-nowrap mb-[8px]">
        {name}
      </p>
      <div
        style={{
          background: active ? '#DDF16E' : '#fff',
        }}
        className="shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-[10px] w-full min-w-[60px] max-w-[60px] min-h-[60px] max-h-[60px] flex flex-row items-center justify-center"
      >
        <img
          src={img}
          className="w-full  max-w-[40px] min-h-[40px] max-h-[40px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default TrackingIFProgress;
