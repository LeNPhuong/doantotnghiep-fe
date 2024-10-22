import React, { useState } from 'react';
import Aheader from '../a_header';
import Sidebar from './sidebar';

const Users: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const usersPerPage = 10;

    const [users, setUsers] = useState([
        { id: 1, name: 'Người dùng A', email: 'a@example.com', image: 'imageA.jpg', role: 'Quản trị viên' },
        { id: 2, name: 'Người dùng B', email: 'b@example.com', image: 'imageB.jpg', role: 'Người dùng' },
        { id: 3, name: 'Người dùng C', email: 'c@example.com', image: 'imageC.jpg', role: 'Người dùng' },
    ]);

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
    const startIndex = (currentPage - 1) * usersPerPage;
    const currentUsers = filteredUsers.slice(startIndex, startIndex + usersPerPage);

    const handleDelete = (id: number) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này?")) {
            const updatedUsers = users.filter(user => user.id !== id);
            setUsers(updatedUsers);
        }
    };

    const handleAddUser = () => {
        alert("Mở form thêm người dùng"); 
    };

    return (
        <div className="flex flex-col h-screen">
            <Aheader />
            <div className="flex flex-1">
                <Sidebar />
                <div className="flex-1 p-10 bg-[#004D40] text-black">
                    <h1 className="text-xl font-bold mb-4 text-white">Quản lý người dùng</h1>
                    <div className='bg-white p-5 rounded-lg shadow-lg'>
                        <div className="flex justify-between items-center mb-4">
                            <input
                                type="text"
                                placeholder="Tìm kiếm người dùng..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="border rounded p-2 w-full"
                            />
                            <button 
                                onClick={handleAddUser} 
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                            >
                                Thêm người dùng
                            </button>
                        </div>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="border px-4 py-2">STT</th>
                                    <th className="border px-4 py-2">Tên người dùng</th>
                                    <th className="border px-4 py-2">Ảnh</th>
                                    <th className="border px-4 py-2">Email</th>
                                    <th className="border px-4 py-2">Vai trò</th>
                                    <th className="border px-4 py-2">Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentUsers.length > 0 ? (
                                    currentUsers.map((user, index) => (
                                        <tr key={user.id}>
                                            <td className="border px-4 py-2">{(currentPage - 1) * usersPerPage + index + 1}</td>
                                            <td className="border px-4 py-2">{user.name}</td>
                                            <td className="border px-4 py-2">
                                                <img src={user.image} alt={user.name} style={{ width: '50px' }} />
                                            </td>
                                            <td className="border px-4 py-2">{user.email}</td>
                                            <td className="border px-4 py-2">{user.role}</td>
                                            <td className="border px-4 py-2">
                                                <button 
                                                    onClick={() => handleDelete(user.id)} 
                                                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                                                >
                                                    Xóa
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={6} className="text-center">Không có người dùng nào để hiển thị.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        {totalPages > 1 && (
                            <div className="mt-4">
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <button 
                                        key={index + 1} 
                                        onClick={() => setCurrentPage(index + 1)} 
                                        className="mx-1 px-3 py-1 border rounded hover:bg-[#3B4452]"
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Users;