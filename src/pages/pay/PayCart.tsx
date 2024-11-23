import React from 'react';
import PayCartIF from './PayCartIF';
import PayCartMethod from './PayCartMethod';
import { useAppSelector } from '../../redux/store';
import { Navigate } from 'react-router-dom';

const PayCart: React.FC<object> = () => {
  const token = JSON.parse(localStorage.getItem('token_access')!);
  const user = useAppSelector((e) => e.user.profile);

  if (!token && !user) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      <div className="flex flex-col shadow-[0_0_3px_rgba(0,0,0,0.25)] md:rounded-[10px] pb-[41px] pt-[29px] px-[24px]">
        <PayCartIF />
      </div>
      <PayCartMethod />
    </>
  );
};

export default PayCart;
