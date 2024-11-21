import React from 'react';
import SlideAdmin from './SlideAdmin';
import { useAppSelector } from '../../redux/store';
import { Navigate } from 'react-router-dom';

const AdminManage: React.FC<{}> = () => {
  const token = JSON.parse(localStorage.getItem('token_access')!);
  const user = useAppSelector((e) => e.user.profile);

  if (!token && !user) {
    return <Navigate to="/nguoi-dung" />;
  }

  return (
    <div className="w-full flex flex-row">
      <SlideAdmin />
    </div>
  );
};

export default AdminManage;
