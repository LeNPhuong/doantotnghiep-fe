import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Thiết lập phần tử gốc của ứng dụng React

interface ThemsanphamProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const Themsanpham: React.FC<ThemsanphamProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productStock, setProductStock] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productUnit, setProductUnit] = useState('');
  const [productImage, setProductImage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý logic khi submit form
    console.log({
      productName,
      productDescription,
      productPrice,
      productStock,
      productCategory,
      productUnit,
      productImage,
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Thêm sản phẩm"
      className="modal"
      overlayClassName="overlay"
    >
      <button className="close-button" onClick={onRequestClose}>
        &times;
      </button>
      <h2 className="text-2xl font-bold mb-4 text-center">Thêm sản phẩm</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Tên sản phẩm</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Nhập tên sản phẩm"
          />
        </div>
        <div>
          <label>Mô tả sản phẩm</label>
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            placeholder="Mô tả sản phẩm..."
          />
        </div>
        <div>
          <label>Giá sản phẩm</label>
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            placeholder="Giá sản phẩm"
          />
        </div>
        <div>
          <label>Số lượng sản phẩm</label>
          <input
            type="number"
            value={productStock}
            onChange={(e) => setProductStock(e.target.value)}
            placeholder="Số lượng sản phẩm"
          />
        </div>
        <div>
          <label>Loại sản phẩm</label>
          <input
            type="text"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            placeholder="Loại"
          />
        </div>
        <div>
          <label>Đơn vị</label>
          <input
            type="text"
            value={productUnit}
            onChange={(e) => setProductUnit(e.target.value)}
            placeholder="Đơn vị"
          />
        </div>
        <div>
          <label>Hình ảnh</label>
          <input
            type="text"
            value={productImage}
            onChange={(e) => setProductImage(e.target.value)}
            placeholder="URL hình ảnh..."
          />
        </div>
        <button type="submit">Thêm sản phẩm</button>
      </form>
    </Modal>
  );
};

export default Themsanpham;
