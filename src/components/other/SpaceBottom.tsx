import React from 'react';

const SpaceBottom: React.FC<{ space: number }> = ({ space }) => {
  return (
    <div
      style={{
        paddingBottom: space + 'px',
      }}
    ></div>
  );
};

export default SpaceBottom;
