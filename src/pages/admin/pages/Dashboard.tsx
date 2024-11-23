import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import SlideLeft from '../SlideLeft/SlideLeft';
import { useAppSelector } from '../../../redux/store';

const Dashboard: React.FC = () => {
  const token = JSON.parse(localStorage.getItem('token_access')!);
  const user = useAppSelector((e) => e.user.profile);

  if (!token && !user) {
    return <Navigate to="/" />;
  }

  if (user?.data?.role !== 'admin') return <Navigate to="/" />;

  return (
    <main>
      <div className="max-w-[1440px] min-w-[1440px] h-[100vh] overflow-hidden mx-auto p-[10px]">
        <div className="flex flex-row w-full h-full overflow-y-auto shadow-[0_0_5px_#0000004b] rounded-[8px]">
          <SlideLeft />
          <div className="w-[75%]">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
