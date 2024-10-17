import React from 'react';
import { Outlet } from 'react-router-dom';

const Tracking: React.FC<{}> = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Tracking;
