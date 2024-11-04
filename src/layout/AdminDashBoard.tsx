import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminDashBoard: React.FC<{}> = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default AdminDashBoard;
