import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom'; // Import Link
import Aheader from './a_header';
import './admin.css';
import MainContent from './quanly/main';
import Sanpham from './quanly/sanpham';
import Sidebar from './quanly/sidebar';
import Users from './quanly/users';

const Admin: React.FC = () => {
  return (
    <div className="admin-container">
      <Aheader />
      <div className="flex-container">
        <Sidebar />
        <div className="main-content">
          {/* <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="admin/sanpham" element={<Sanpham />} />
            <Route path="admin/users" element={<Users />} />
            <Route path="admin/users" element={<MainContent />} />
          </Routes> */}
          {/* <Outlet /> */}
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default Admin;
