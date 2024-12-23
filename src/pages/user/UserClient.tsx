import React from 'react';
import SlideUser from './SlideUser';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';

const UserClient: React.FC<{}> = () => {
  const token = JSON.parse(localStorage.getItem('token_access')!);
  const user = useAppSelector((e) => e.user.profile);
  const path = useLocation().pathname;

  if (!token && !user) {
    return <Navigate to="/home" />;
  }

  function checkPath(): boolean {
    const checkv1 = path.includes('chi-tiet');
    const checkv2 = path.includes('don-hang');
    const checkv3 = path.includes('dia-chi');
    if (checkv1 === true) {
      return true;
    } else if (checkv2 === true) {
      return true;
    } else if (checkv3 === true) {
      return true;
    } else {
      return false;
    }
  }

  checkPath();

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="md:flex hidden flex-row justify-between md:mt-[44px] mt-[0px] lg:px-[0px] md:px-[10px]">
        <SlideUser />
        <div className="w-full lg:max-w-[1003px] md:max-w-[600px]">
          <Outlet />
        </div>
      </div>
      <div className="md:hidden block">
        {checkPath() === true ? '' : <SlideUser />}
        {checkPath() && (
          <div className="w-full lg:max-w-[1003px] md:max-w-[600px]">
            <Outlet />
          </div>
        )}
      </div>
      <div className="md:pb-[143px] pb-[80px]"></div>
    </div>
  );
};

export default UserClient;
