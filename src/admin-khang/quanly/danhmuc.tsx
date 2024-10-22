import React, { useState } from 'react';
import Aheader from '../a_header';
import Sidebar from './sidebar';

const Danhmuc: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const categoriesPerPage = 10;

    // Dữ liệu giả lập danh mục sản phẩm
    const [categories, setCategories] = useState([
        { id: 1, mainType: 'Điện tử', subType: 'Điện thoại', image: 'image1.jpg', description: 'Mô tả về điện thoại' },
        { id: 2, mainType: 'Điện tử', subType: 'Máy tính', image: 'image2.jpg', description: 'Mô tả về máy tính' },
        { id: 3, mainType: 'Thời trang', subType: 'Áo', image: 'image3.jpg', description: 'Mô tả về áo' },
        // ...thêm nhiều danh mục hơn nếu cần
    ]);

    const filteredCategories = categories.filter(category =>
        category.mainType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.subType.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredCategories.length / categoriesPerPage);
    const startIndex = (currentPage - 1) * categoriesPerPage;
    const currentCategories = filteredCategories.slice(startIndex, startIndex + categoriesPerPage);

    const handleDelete = (id: number) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa danh mục này?")) {
            const updatedCategories = categories.filter(category => category.id !== id);
            setCategories(updatedCategories);
        }
    };

    const handleAddCategory = () => {
        alert("Mở form thêm danh mục");
    };

    return (
        <div className="flex flex-col h-screen">
            <Aheader />
            <div className="flex flex-1">
                <Sidebar />
                <div className="flex-1 p-10 bg-[#004D40] text-black">
                    <h1 className="text-xl font-bold mb-4 text-white">Quản lý danh mục sản phẩm</h1>
                    <div className='bg-white p-5 rounded-lg shadow-lg'>
                        <div className="flex justify-between items-center mb-4">
                            <input
                                type="text"
                                placeholder="Tìm kiếm danh mục..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="border rounded p-2 w-full"
                            />
                            <button 
                                onClick={handleAddCategory} 
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                            >
                                Thêm danh mục
                            </button>
                        </div>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="border px-4 py-2">STT</th>
                                    <th className="border px-4 py-2">Loại chính</th>
                                    <th className="border px-4 py-2">Loại chi tiết</th>
                                    <th className="border px-4 py-2">Hình ảnh</th>
                                    <th className="border px-4 py-2">Mô tả</th>
                                    <th className="border px-4 py-2">Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentCategories.length > 0 ? (
                                    currentCategories.map((category, index) => (
                                        <tr key={category.id}>
                                            <td className="border px-4 py-2">{(currentPage - 1) * categoriesPerPage + index + 1}</td>
                                            <td className="border px-4 py-2">{category.mainType}</td>
                                            <td className="border px-4 py-2">{category.subType}</td>
                                            <td className="border px-4 py-2">
                                                <img src={category.image} alt={category.subType} className="w-12 h-12" />
                                            </td>
                                            <td className="border px-4 py-2">{category.description}</td>
                                            <td className="border px-4 py-2">
                                                <button 
                                                    onClick={() => handleDelete(category.id)} 
                                                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                                                >
                                                    Xóa
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={6} className="text-center">Không có danh mục nào để hiển thị.</td>
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

export default Danhmuc;
