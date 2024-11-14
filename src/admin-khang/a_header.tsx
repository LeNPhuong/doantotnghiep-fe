import React from 'react';

const Aheader: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <a href="/admin">
          <img
            src="/src/assets/icons/logo.png"
            alt="Logo"
            className="h-10 mr-3"
          />
        </a>
      </div>

      <div className="flex items-center w-1/2">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
          Search
        </button>
      </div>

      {/* Avatar Admin và Tên Admin */}
      <div className="flex items-center">
        <img
          src="/path/to/admin-avatar.png" // Thay đổi đường dẫn avatar tại đây
          alt="Admin Avatar"
          className="w-10 h-10 rounded-full mr-3"
        />
        <span className="text-gray-700 font-medium">Tên Admin</span>
      </div>
    </header>
  );
};
export default Aheader;
