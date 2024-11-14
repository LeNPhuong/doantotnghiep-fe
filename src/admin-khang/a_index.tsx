import React from 'react';
import './admin.css';
import MainContent from './quanly/main';
import Sidebar from './quanly/sidebar';

const Admin: React.FC = () => {
  return (
    <div className="admin-container">
      <div className="flex-container">
        <Sidebar />
        <div className="main-content">
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default Admin;
