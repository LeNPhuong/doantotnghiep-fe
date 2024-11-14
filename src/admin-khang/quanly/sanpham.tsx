import React, { useState } from 'react';
import Aheader from '../a_header';
import Sidebar from './sidebar';
import Themsanpham from './themsanpham';
import Suasanpham from './suasanpham';

const Sanpham: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 10;

  // Dữ liệu giả lập sản phẩm
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Sản phẩm A',
      category: 'Loại 1',
      image: 'imageA.jpg',
      unit: 'cái',
      price: 100000,
      discount: 10,
      stock: 50,
    },
    {
      id: 2,
      name: 'Sản phẩm B',
      category: 'Loại 2',
      image: 'imageB.jpg',
      unit: 'cái',
      price: 200000,
      discount: 5,
      stock: 30,
    },
    {
      id: 3,
      name: 'Sản phẩm C',
      category: 'Loại 3',
      image: 'imageC.jpg',
      unit: 'cái',
      price: 300000,
      discount: 20,
      stock: 70,
    },
    {
      id: 4,
      name: 'Sản phẩm D',
      category: 'Loại 1',
      image: 'imageA.jpg',
      unit: 'cái',
      price: 100000,
      discount: 10,
      stock: 50,
    },
    {
      id: 5,
      name: 'Sản phẩm E',
      category: 'Loại 2',
      image: 'imageB.jpg',
      unit: 'cái',
      price: 200000,
      discount: 5,
      stock: 30,
    },
    {
      id: 6,
      name: 'Sản phẩm F',
      category: 'Loại 3',
      image: 'imageC.jpg',
      unit: 'cái',
      price: 300000,
      discount: 20,
      stock: 70,
    },
    {
      id: 7,
      name: 'Sản phẩm G',
      category: 'Loại 1',
      image: 'imageA.jpg',
      unit: 'cái',
      price: 100000,
      discount: 10,
      stock: 50,
    },
    {
      id: 8,
      name: 'Sản phẩm H',
      category: 'Loại 2',
      image: 'imageB.jpg',
      unit: 'cái',
      price: 200000,
      discount: 5,
      stock: 30,
    },
    {
      id: 9,
      name: 'Sản phẩm I',
      category: 'Loại 3',
      image: 'imageC.jpg',
      unit: 'cái',
      price: 300000,
      discount: 20,
      stock: 70,
    },
    {
      id: 10,
      name: 'Sản phẩm J',
      category: 'Loại 1',
      image: 'imageA.jpg',
      unit: 'cái',
      price: 100000,
      discount: 10,
      stock: 50,
    },
    {
      id: 11,
      name: 'Sản phẩm K',
      category: 'Loại 2',
      image: 'imageB.jpg',
      unit: 'cái',
      price: 200000,
      discount: 5,
      stock: 30,
    },
    {
      id: 12,
      name: 'Sản phẩm L',
      category: 'Loại 3',
      image: 'imageC.jpg',
      unit: 'cái',
      price: 300000,
      discount: 20,
      stock: 70,
    },
    {
      id: 13,
      name: 'Sản phẩm M',
      category: 'Loại 1',
      image: 'imageA.jpg',
      unit: 'cái',
      price: 100000,
      discount: 10,
      stock: 50,
    },
    {
      id: 14,
      name: 'Sản phẩm N',
      category: 'Loại 2',
      image: 'imageB.jpg',
      unit: 'cái',
      price: 200000,
      discount: 5,
      stock: 30,
    },
    {
      id: 15,
      name: 'Sản phẩm O',
      category: 'Loại 3',
      image: 'imageC.jpg',
      unit: 'cái',
      price: 300000,
      discount: 20,
      stock: 70,
    },
    {
      id: 16,
      name: 'Sản phẩm P',
      category: 'Loại 1',
      image: 'imageA.jpg',
      unit: 'cái',
      price: 100000,
      discount: 10,
      stock: 50,
    },
    {
      id: 17,
      name: 'Sản phẩm Q',
      category: 'Loại 2',
      image: 'imageB.jpg',
      unit: 'cái',
      price: 200000,
      discount: 5,
      stock: 30,
    },
    {
      id: 18,
      name: 'Sản phẩm W',
      category: 'Loại 3',
      image: 'imageC.jpg',
      unit: 'cái',
      price: 300000,
      discount: 20,
      stock: 70,
    },
    {
      id: 19,
      name: 'Sản phẩm R',
      category: 'Loại 1',
      image: 'imageA.jpg',
      unit: 'cái',
      price: 100000,
      discount: 10,
      stock: 50,
    },
    {
      id: 20,
      name: 'Sản phẩm S',
      category: 'Loại 2',
      image: 'imageB.jpg',
      unit: 'cái',
      price: 200000,
      discount: 5,
      stock: 30,
    },
    {
      id: 21,
      name: 'Sản phẩm T',
      category: 'Loại 3',
      image: 'imageC.jpg',
      unit: 'cái',
      price: 300000,
      discount: 20,
      stock: 70,
    },
  ]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage,
  );

  const handleDelete = (id: number) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
      const updatedProducts = products.filter((product) => product.id !== id);
      setProducts(updatedProducts);
    }
  };

  // const handleAddProduct = () => {
  //     alert("Mở form thêm sản phẩm");
  // };
  // modal page themsanpham
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  // modal page suasanpham
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleEditClick = (product) => {
    setCurrentProduct(product);
    setIsEditModalOpen(true);
  };
  return (
    <div className="flex flex-col h-screen">
      {/* <Aheader /> */}
      <div className="flex flex-1">
        {/* <Sidebar /> */}
        <div className="flex-1 p-10 bg-[#004D40] text-black">
          <h1 className="text-xl font-bold mb-4 text-white">
            Quản lý sản phẩm
          </h1>
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded p-2 mb-4 w-full"
            />
            <button
              onClick={openModal}
              className="bg-[#004D40] text-white py-2 px-4 rounded hover:bg-[#3B4452] mb-4"
            >
              Thêm sản phẩm
            </button>
            {/* Hiển thị modal khi nhấn nút */}
            <Themsanpham isOpen={modalIsOpen} onRequestClose={closeModal} />
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Tên</th>
                  <th className="border px-4 py-2">Loại</th>
                  <th className="border px-4 py-2">Hình ảnh</th>
                  <th className="border px-4 py-2">Đơn vị</th>
                  <th className="border px-4 py-2">Giá</th>
                  <th className="border px-4 py-2">Giảm giá</th>
                  <th className="border px-4 py-2">Tổng kho</th>
                  <th className="border px-4 py-2">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {currentProducts.length > 0 ? (
                  currentProducts.map((product) => (
                    <tr key={product.id}>
                      <td className="border px-4 py-2">{product.name}</td>
                      <td className="border px-4 py-2">{product.category}</td>
                      <td className="border px-4 py-2">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12"
                        />
                      </td>
                      <td className="border px-4 py-2">{product.unit}</td>
                      <td className="border px-4 py-2">
                        {product.price.toLocaleString()} VND
                      </td>
                      <td className="border px-4 py-2">{product.discount}%</td>
                      <td className="border px-4 py-2">{product.stock}</td>
                      <td className="border px-4 py-2">
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                        >
                          Xóa
                        </button>
                        <button
                          onClick={() => handleEditClick(product)}
                          className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                        >
                          Sửa
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8} className="text-center">
                      Không có sản phẩm nào để hiển thị.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            {/* Hiển thị modal sửa sản phẩm */}
            {isEditModalOpen && currentProduct && (
              <Suasanpham
                isOpen={isEditModalOpen}
                onRequestClose={() => setIsEditModalOpen(false)}
                product={currentProduct} // Truyền thông tin sản phẩm vào modal
              />
            )}
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

export default Sanpham;
