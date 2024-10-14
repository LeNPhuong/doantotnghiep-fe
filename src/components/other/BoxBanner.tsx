import React from 'react';

const BoxBanner: React.FC<{ img1: string; img2?: string; size: string }> = ({
  img1,
  img2 = null,
  size,
}) => {
  if (!img2) {
    return (
      <div className="flex flex-row w-full">
        <img
          src={img1}
          alt=""
          style={{
            width: '100%',
            maxWidth: size,
          }}
        />
      </div>
    );
  } else {
    return (
      <div className="flex flex-row justify-between w-full">
        <img
          src={img1}
          alt=""
          style={{
            width: '100%',
            maxWidth: size,
          }}
        />
        <img
          src={img2}
          alt=""
          style={{
            width: '100%',
            maxWidth: size,
          }}
        />
      </div>
    );
  }
};

export default BoxBanner;
